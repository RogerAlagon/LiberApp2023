<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Implemento;
use App\Asignacion;
use App\Grupo;
use App\Entidad;
use App\Ordenc;
use App\Ordend;
use App\Material;
use App\Kardex;
use App\Dato;
use App\Kilometraje;
use App\Backlog;
use App\Reportef; 
use App\Falla;
use App\Distribucion;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\VencimientoExport;
use DB;

use App\Http\Controllers\Controller;
use PDF;
use Dompdf\Dompdf;
use Dompdf\Options;
use Illuminate\Support\Facades\Storage;

class AsignacionController extends Controller
{
    private $jerarquia_mantenimiento = ["L1" => 1,"M1" =>2,"M2" =>3,"M3" =>4,"M4" =>5];

    /*public function __construct()
    {
        $this->middleware('auth');
    }*/
    
    public function EnlazarId()
    {
       $obj_asignacion = Asignacion::select('idAsignacion','escaneoAsi','adjuntoAsi')
            ->where('escaneoAsi','<>', NULL)
            ->where('adjuntoAsi', NULL)
            ->get();
        
        //$salida = Storage::disk()->allFiles();
        foreach ( $obj_asignacion as $uasignacion ) 
        {
            $salida = Storage::rename('operaciones/'.$uasignacion->escaneoAsi,'operaciones/'.$uasignacion->idAsignacion.'.pdf');
            $renombrados = Asignacion::where('idAsignacion', $uasignacion->idAsignacion)
                ->update(['adjuntoAsi' => 'RENOMBRADO']);
        }
        //$salida = Storage::rename('operaciones/ABL-984-CA.pdf','operaciones/2023-01-02.pdf');
        //$salida = Storage::disk()->url('ABL-984-CA.pdf');
        return $obj_asignacion;
    }

    //public function ListarAsignaciones($cuenta,$vehiculo,$tipo)
    public function Listar($entidad,$area)
    {
        $obj_entidad = Dato::select('valorDat')
            ->where('idDato',$entidad)
            ->first();

        /*$arr_entidades = Entidad::select('idEntidad','nombreEnt')
            //->join('dato as tmarca','tmarca.idDato','vehiculo.Marca_idDato')
            //->join('dato as tmodelo','tmodelo.idDato','vehiculo.Modelo_idDato')
            //->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')
            ->where('activoEnt',1)
            ->where('Entidad_idDato',$entidad)
            //->whereIn('grupoVeh',['PESADA','LIVIANA'])
            //->where('idvehiculo',$vehiculo_, $vehiculo)
            //->where('Cuenta_idDato',$cuenta_, $cuenta)
            ->orderBy('nombreEnt','asc')
            ->get();*/
        //return $arr_entidades;
        $arr_entidades = [];

        switch($obj_entidad->valorDat)
        {
            case "VEHICULO":
                $arr_entidades = Entidad::select('idEntidad','nombreEnt','tmodelo.valorDat as clase','ttipo.valorDat as grupo','ttipo.idDato as igrupo')
                    ->join('vehiculo','vehiculo.idVehiculo','entidad.Entidad_idExterno')
                    ->join('dato as tmodelo','tmodelo.idDato','vehiculo.Modelo_idDato')
                    ->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break;
            case "PERSONA":
                $arr_entidades = Entidad::select('idEntidad','nombreEnt','cargo.nombreCar as clase','area.nombreAre as grupo','area.idArea as igrupo')
                    ->join('persona','persona.idPersona','entidad.Entidad_idExterno')
                    ->join('area','area.idArea','persona.Area_idArea')
                    ->join('cargo','cargo.idCargo','persona.Cargo_idCargo')
                    //->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break;
            default://ACTIVO,ALMACEN,AREA,EXTERNO,OTRO
                $arr_entidades = Entidad::select('idEntidad','nombreEnt')
                    /*->join('dato as tmarca','tmarca.idDato','vehiculo.Marca_idDato')
                    ->join('dato as tmodelo','tmodelo.idDato','vehiculo.Modelo_idDato')
                    ->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')*/
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    //->whereIn('grupoVeh',['PESADA','LIVIANA'])
                    //->where('idvehiculo',$vehiculo_, $vehiculo)
                    //->where('Cuenta_idDato',$cuenta_, $cuenta)
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break; 
        }

        /*$cuenta_ = '='; 
        $vehiculo_ = '=';
        if ($cuenta == '0') { $cuenta_ = '<>'; }
        if ($vehiculo == '0') { $vehiculo_ = '<>'; }

        $arr_vehiculos = Vehiculo::select('idVehiculo','placaVeh','tmarca.valorDat as marca','tmodelo.valorDat as modelo','ttipo.valorDat as tipo')
            ->join('dato as tmarca','tmarca.idDato','vehiculo.Marca_idDato')
            ->join('dato as tmodelo','tmodelo.idDato','vehiculo.Modelo_idDato')
            ->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')
            ->where('activoVeh',1)
            ->whereIn('grupoVeh',['PESADA','LIVIANA'])
            ->where('idvehiculo',$vehiculo_, $vehiculo)
            ->where('Cuenta_idDato',$cuenta_, $cuenta)
            ->orderBy('placaVeh','asc')
            ->get();*/
        
        $arr_implementos = Implemento::select('implemento.*','nombreMat','tunidad.valorDat as unidadMat')
            ->leftJoin('grupo','grupo.idGrupo','implemento.Grupo_idGrupo')
            ->leftJoin('material','material.idMaterial','implemento.Material_idMaterial')
            ->leftJoin('dato as tunidad','tunidad.idDato','material.Unidad_idDato')
            ->where('activoImp',1)
            ->where('implemento.Entidad_idDato',$entidad)
            ->where('Area_idArea',$area)
            ->orderBy('Grupo_idGrupo','asc')
            ->get();

        $titulos = [];
        $asignaciones = [];
        $iids = [];
        $parametros = [];

        foreach($arr_implementos as $uimplemento)
        {
            $iids[] = $uimplemento->idImplemento;

            $implemento = [];
            $implemento["id"] = $uimplemento->idImplemento;
            $implemento["nom"] = $uimplemento->nombreImp;
            $implemento["mat"] = $uimplemento->nombreMat;
            $implemento["imat"] = $uimplemento->Material_idMaterial;
            $implemento["uni"] = $uimplemento->unidadMat;
            $implemento["cos"] = $uimplemento->costoImp;
            $implemento["can"] = $uimplemento->cantidadImp;
            $implemento["val"] = $uimplemento->validacionImp;

            $titulos["i".$uimplemento->idImplemento] = $implemento;
            
            $asignaciones["i".$uimplemento->idImplemento] = [];
            //$asignaciones["i".$uimplemento->idImplemento]["imp"] = $uimplemento->idImplemento;
            $parametros["i".$uimplemento->idImplemento] = $uimplemento;
        }

        $entidades = [];
        $eids = [];
        $grupos = [];

        /*$arr_entidades = Entidad::select('idEntidad','nombreEnt','tmodelo.idDato as clase','ttipo.idDato as grupo')
                    ->join('vehiculo','vehiculo.idVehiculo','entidad.Entidad_idExterno')
                    ->join('dato as tmodelo','tmodelo.idDato','vehiculo.Modelo_idDato')
                    ->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    ->orderBy('nombreEnt','asc')
                    ->get();*/

        foreach($arr_entidades as $uentidad)
        {
            //$cids[] = $uentidad->idEntidad;
            if(!isset($grupos["g".$uentidad->igrupo]))//si no existe el grupo en el array se agrega
            {
                $grupo = [];
                $grupo["gru"] = $uentidad->grupo;
                $grupo["ent"] = [];
                $grupos["g".$uentidad->igrupo] = $grupo;
            }

            $eids[] = $uentidad->idEntidad;

            $entidad = [];
            $entidad["id"] = $uentidad->idEntidad;
            $entidad["nom"] = $uentidad->nombreEnt;
            $entidad["gru"] = $uentidad->igrupo;
            $entidad["cla"] = $uentidad->clase;
            $entidad["asi"] = $asignaciones;

            $entidades["e".$uentidad->idEntidad] = $entidad;
        }

        $hoy = date("Y-m-d");
        $ahora = strtotime($hoy);

        $arr_asignaciones = Asignacion::select('asignacion.*')
            ->whereIn('Entidad_idEntidad',$eids)
            ->whereIn('Implemento_idImplemento',$iids)
            ->where('estadoAsi','VIGENTE')
            ->get();

        foreach($arr_asignaciones as $uasignacion)
        {
            $uasignacion->montoAsi = number_format($uasignacion->montoAsi, 2);
            $uasignacion["sel"] = false;
            $entidades["e".$uasignacion->Entidad_idEntidad]["asi"]["i".$uasignacion->Implemento_idImplemento] = $uasignacion;
        }

        foreach($arr_asignaciones as $uasignacion)
        {
            ///HAY QUE AGARRAR LA VALIDACION SI SE HARA EN EL IMPLEMENTO O EN LA DISTRIBUCION

            ///PRIMERO VER EL TIPO DE VALIDACION QUE SE HARA EN EL TIPO DE DOCUMENTO
            ///LUEGO HAY QUE VERIFICAR SI EL DOCUMENTO HA SIDO CON UN PROCESO ADICIONAL COMO TRAMITE OBERVACION APLZIACAMIENTO

            $renovable = $parametros["i".$uasignacion->Implemento_idImplemento]->renovableImp;
            $tipo = $parametros["i".$uasignacion->Implemento_idImplemento]->tipoImp;//activo,consumible,documento,actividad,check
            $validacion = $parametros["i".$uasignacion->Implemento_idImplemento]->validacionImp;//ninguna,kilometraje,fecha,check,horometraje
            $alerta = $parametros["i".$uasignacion->Implemento_idImplemento]->alertaImp;


            if(is_numeric($uasignacion->montoAsi))
                $uasignacion->montoAsi = number_format($uasignacion->montoAsi, 2);

            $uasignacion["estado"] = "";
            $uasignacion["retraso"] = "";
            $uasignacion["valor"] = "";
            

            if($renovable <> 1)//documento no se renueva
            {
                $uasignacion["estado"] = "PERMANENTE";
                $uasignacion["retraso"] = "-";
                $uasignacion["valor"] = "-";
            }
            elseif($uasignacion->situacionAsi == "TRAMITADO")
            {
                $vencimiento = strtotime($uasignacion->fsituacionAsi);

                $diferencia = $vencimiento - $ahora;

                $uasignacion["retraso"] = ($diferencia == 0) ? 0 : $diferencia/86400;
                $uasignacion["valor"] = $uasignacion->fsituacionAsi;

                if($vencimiento <= $ahora)//el documento tramitado ya paso su fecha de revision
                {
                    $uasignacion["estado"] = "URGENTE";
                }
                else
                {
                    $uasignacion["estado"] = "EN TRAMITE";
                }
            }
            elseif($uasignacion->situacionAsi == "APLAZADO")
            {
                $vencimiento = strtotime($uasignacion->fsituacionAsi);

                $diferencia = $vencimiento - $ahora;

                $uasignacion["retraso"] = ($diferencia == 0) ? 0 : $diferencia/86400;
                $uasignacion["valor"] = $uasignacion->fsituacionAsi;

                if($vencimiento <= $ahora)//el documento tramitado ya paso su fecha de revision
                {
                    $uasignacion["estado"] = "URGENTE";
                }
                else
                {
                    $uasignacion["estado"] = "APLAZADO";
                }
            }
            else//documentos que si se renuevan
            {
                switch($validacion)
                {
                    case "KILOMETRAJE"://falta implementar
                    break;
                    case "FECHA":
                        
                        $vencimiento = strtotime($uasignacion->fvencimientoAsi);
                        $aviso = strtotime($uasignacion->fvencimientoAsi."- ".$alerta." days");

                        $diferencia = $vencimiento - $ahora;

                        $uasignacion["retraso"] = ($diferencia == 0) ? 0 : $diferencia/86400;
                        $uasignacion["valor"] = $uasignacion->fvencimientoAsi;

                        if($vencimiento <= $ahora)//el documento se ha vencido
                        {
                            $uasignacion["estado"] = "VENCIDO";
                        }
                        elseif($vencimiento >= $ahora && $aviso <= $ahora)//el documento esta en alerta
                        {
                            $uasignacion["estado"] = "POR VENCER";
                        }
                        else
                        {
                            $uasignacion["estado"] = "VIGENTE";
                        }
                    break;
                    case "CHECK"://falta implementar
                    break;
                    case "HOROMETRAJE"://falta implementar
                    break;
                    default:
                    break;
                }
            }
            $entidades["e".$uasignacion->Entidad_idEntidad]["asi"]["i".$uasignacion->Implemento_idImplemento] = $uasignacion;
        }

        foreach($entidades as $uentidad)//ordenando las entidades en sus respectivos grupos
        {
            $id = $uentidad["gru"];
            $grupos["g".$id]["ent"][] = $uentidad;
        }




        /*
        $cabecera = [];
        
        $cabeza = [];
        $cabeza["label"] = 'nro';
        $cabeza["field"] = '';

        $cabecera[] = $cabeza;

        $cabeza = [];
        $cabeza["label"] = 'VEHICULO';
        $cabeza["field"] = 'placaVeh';

        $cabecera[] = $cabeza;
        
        //{ label: '', field: 'acciones'},

        foreach($titulos as $llave => $utitulo)
        {
            $cabeza = [];
            $cabeza["label"] = 'nro';
            $cabeza["field"] = '';
            $cabecera = [];
        }*/

        $resultado["titulos"] = $titulos;
        $resultado["registros"] = $grupos;

        return $resultado;

        /*$indices = [];

        $registros = [];

        if($tipo == "DIA")
        {
            $fechas = [];
            $filas = [];
            $fecha_actual = date("Y-m-d");
            $fecha_actual = date("Y-m-d",strtotime($fecha_actual."- 9 days"));
            $fechas[] = $fecha_actual;
            $filas[$fecha_actual] = "-";
            
            for ($i=1; $i < 10 ; $i++)
            {
                $fecha_actual = date("Y-m-d",strtotime($fecha_actual."+ 1 days"));
                $fechas[] = $fecha_actual;
                $filas[$fecha_actual] = "-";
            }
            $indices = $fechas;

            foreach($arr_vehiculos as $uvehiculo)
            {
                $registro = $uvehiculo;
                $kilometrajes = $filas;

                $arr_kilometrajes = Kilometraje::whereIn(DB::raw("DATE(fechaKil)"), $fechas)
                ->select('kilometrajeKil','fechaKil')
                ->where('Vehiculo_idVehiculo',$uvehiculo->idVehiculo)
                ->whereNull('invalidoKil')
                ->whereRaw('(tipoKil = "MOVIL" or tipoKil is null)')
                ->orderBy('fechaKil','desc')
                ->orderBy('idKilometraje','desc')
                ->get();
                
                foreach($arr_kilometrajes as $ukilometraje)
                {
                    $fecha_sel = date("Y-m-d",strtotime($ukilometraje->fechaKil));
                    $kilometrajes[$fecha_sel] = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                }
                

                $arr_kilometrajes = [];
                foreach($kilometrajes as $ukilometraje)
                {
                    $arr_kilometrajes[] = ($ukilometraje == "" ? "-" : $ukilometraje);
                }
                $registro["kilometrajes"] = $arr_kilometrajes;

                $registros["v".$uvehiculo->idVehiculo] = $registro;
            }
        }
        elseif($tipo == "REGISTRO")
        {
            $indices = [1,2,3,4,5,6,7,8,9,10];
            foreach($arr_vehiculos as $uvehiculo)
            {
                $registro = $uvehiculo;
                $kilometrajes = [];

                $arr_kilometrajes = Kilometraje::select('kilometrajeKil','fechaKil','idKilometraje')
                ->where('Vehiculo_idVehiculo',$uvehiculo->idVehiculo)
                ->whereNull('invalidoKil')
                ->orderBy('fechaKil','desc')
                ->orderBy('idKilometraje','desc')
                ->whereRaw('(tipoKil = "MOVIL" or tipoKil is null)')
                ->take(10)
                ->get()
                ->reverse()
                ->values();

                $kactual = 0;
                $factual = 0;
                $primero = false;

                foreach($arr_kilometrajes as $ukilometraje)
                {
                    $kilometraje = [];
                    $kilometraje = $ukilometraje;
                    $kilometraje["kilometraje"] = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');

                    if($primero)
                    {
                        $kilometraje["variacion"] = "-";
                        $kilometraje["error"] = false;
                        $primero = false;
                        $kactual = $ukilometraje->kilometrajeKil;
                        $factual = strtotime($ukilometraje->fechaKil);
                        $id = $ukilometraje->idKilometraje;
                    }
                    else
                    {
                        $fposterior = strtotime($ukilometraje->fechaKil);
                        $fdiferencia = ($fposterior-$factual)/(60*60*24)+1;

                        $kdiferencia = ($ukilometraje->kilometrajeKil - $kactual)/$fdiferencia;

                        $kilometraje["variacion"] = round($kdiferencia);
                        if($kdiferencia > 1000 || $kdiferencia < 0)
                            $kilometraje["error"] = true;
                        else
                            $kilometraje["error"] = false;
                        $kactual  = $ukilometraje->kilometrajeKil;
                        $factual = $fposterior;
                    }
                    $kilometrajes[] = $kilometraje;
                }

                $registro["kilometrajes"] = $kilometrajes;

                $registros["v".$uvehiculo->idVehiculo] = $registro;
            }

        }
        
        $resultado["registros"] = $registros;
        $resultado["indices"] = $indices;

        return $resultado;*/
    }

    public function ListarPlantilla($entidad,$area,$plantilla)
    {
        $obj_entidad = Dato::select('valorDat')
            ->where('idDato',$entidad)
            ->first();

        $arr_entidades = [];
        switch($obj_entidad->valorDat)
        {
            case "VEHICULO":
                $arr_entidades = Entidad::select('idEntidad','nombreEnt','Entidad_idExterno','tmodelo.valorDat as clase','ttipo.valorDat as grupo','ttipo.idDato as igrupo','idVehiculo','grupoVeh')
                    ->join('vehiculo','vehiculo.idVehiculo','entidad.Entidad_idExterno')
                    ->join('dato as tmodelo','tmodelo.idDato','vehiculo.Modelo_idDato')
                    ->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')
                    ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    ->where('Plantilla_idPlantilla',$plantilla)
                    //->whereNull('activoHom')
                    ->where('estadoHom',"ACTIVO")
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break;
            case "PERSONA":
                $arr_entidades = Entidad::select('idEntidad','nombreEnt','cargo.nombreCar as clase','area.nombreAre as grupo','area.idArea as igrupo')
                    ->join('persona','persona.idPersona','entidad.Entidad_idExterno')
                    ->join('area','area.idArea','persona.Area_idArea')
                    ->join('cargo','cargo.idCargo','persona.Cargo_idCargo')
                    ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                    //->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    ->where('Plantilla_idPlantilla',$plantilla)
                    ->where('estadoHom',"ACTIVO")
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break;
            default://ACTIVO,ALMACEN,AREA,EXTERNO,OTRO
                $arr_entidades = Entidad::select('idEntidad','nombreEnt')
                    /*->join('dato as tmarca','tmarca.idDato','vehiculo.Marca_idDato')
                    ->join('dato as tmodelo','tmodelo.idDato','vehiculo.Modelo_idDato')
                    ->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')*/
                    ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    //->whereIn('grupoVeh',['PESADA','LIVIANA'])
                    //->where('idvehiculo',$vehiculo_, $vehiculo)
                    //->where('Cuenta_idDato',$cuenta_, $cuenta)
                    ->where('Plantilla_idPlantilla',$plantilla)
                    ->where('estadoHom',"ACTIVO")
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break; 
        }

        $arr_implementos = Implemento::select('implemento.*','nombreMat','stockMat','tunidad.valorDat as unidadMat','distribucion.*')
            ->leftJoin('grupo','grupo.idGrupo','implemento.Grupo_idGrupo')
            ->leftJoin('material','material.idMaterial','implemento.Material_idMaterial')
            ->leftJoin('dato as tunidad','tunidad.idDato','material.Unidad_idDato')
            ->leftjoin('distribucion','distribucion.Implemento_idImplemento','implemento.idImplemento')
            ->where('activoImp',1)
            ->where('implemento.Entidad_idDato',$entidad)
            //->where('implemento.Entidad_idDato',$entidad)
            ->where('Plantilla_idPlantilla',$plantilla)
            //->whereNull('activoDis')
            ->where('estadoDis',"ACTIVO")
            ->where('Area_idArea',$area)
            ->orderBy('Grupo_idGrupo','asc')
            ->get();

        $titulos = [];
        $asignaciones = [];
        $iids = [];
        $parametros = [];
        //generando el array de implementos y los titulos 
        foreach($arr_implementos as $uimplemento)
        {
            $iids[] = $uimplemento->idImplemento;

            $implemento = [];
            $implemento["id"] = $uimplemento->idImplemento;
            $implemento["nom"] = $uimplemento->nombreImp;
            $implemento["mat"] = $uimplemento->nombreMat;
            $implemento["sto"] = $uimplemento->stockMat;
            $implemento["imat"] = $uimplemento->Material_idMaterial;
            $implemento["uni"] = $uimplemento->unidadMat;
            $implemento["cos"] = $uimplemento->costoImp;
            $implemento["can"] = $uimplemento->cantidadImp;
            $implemento["val"] = $uimplemento->validacionDis;
            $implemento["ren"] = $uimplemento->renovacionDis;

            $titulos["i".$uimplemento->idImplemento] = $implemento;
            
            $asignaciones["i".$uimplemento->idImplemento] = [];
            //$asignaciones["i".$uimplemento->idImplemento]["imp"] = $uimplemento->idImplemento;
            $parametros["i".$uimplemento->idImplemento] = $uimplemento;
        }

        $entidades = [];
        $eids = [];
        $vids = [];
        $grupos = [];

        foreach($arr_entidades as $uentidad)
        {
            //$cids[] = $uentidad->idEntidad;
            if(!isset($grupos["g".$uentidad->igrupo]))//si no existe el grupo en el array se agrega
            {
                $grupo = [];
                //$grupo["gru"] = $uentidad->grupo;
                if ( $uentidad->grupo !== null ) 
                    $grupo["gru"] = $uentidad->grupo;
                if ( $uentidad->grupo == null )
                    $grupo["gru"] = 'UNIDADES EXTERNAS';
                
                $grupo["ent"] = [];
                $grupos["g".$uentidad->igrupo] = $grupo;
            }

            //$eids[] = $uentidad->idEntidad;
            if($obj_entidad->valorDat == "VEHICULO")
                $eids["v".$uentidad->idVehiculo] = $uentidad->idEntidad;
            else
                $eids[] = $uentidad->idEntidad;

            if($uentidad->grupoVeh == "PESADA" || $uentidad->grupoVeh == "LIVIANA")
                $vids[] = $uentidad->idVehiculo;

            $entidad = [];
            $entidad["id"] = $uentidad->idEntidad;
            $entidad["idExterno"] = $uentidad->Entidad_idExterno;
            $entidad["nom"] = $uentidad->nombreEnt;
            $entidad["gru"] = $uentidad->igrupo;
            $entidad["cla"] = $uentidad->clase;
            $entidad["asi"] = $asignaciones;

            $entidades["e".$uentidad->idEntidad] = $entidad;
        }

        $hoy = date("Y-m-d");
        $ahora = strtotime($hoy);

        $arr_asignaciones = Asignacion::select('asignacion.*')
            ->whereIn('Entidad_idEntidad',$eids)
            ->whereIn('Implemento_idImplemento',$iids)
            ->where('estadoAsi','VIGENTE')
            ->get();

        foreach($arr_asignaciones as $uasignacion)
        {
            $uasignacion->montoAsi = number_format($uasignacion->montoAsi, 2);
            $uasignacion["tip"] = "";
            $uasignacion["sel"] = false;
            $entidades["e".$uasignacion->Entidad_idEntidad]["asi"]["i".$uasignacion->Implemento_idImplemento] = $uasignacion;
        }


        /********************************************************************/
        //BUSCA EL ULTIMO KILOMETRAJE POR VEHICULO Y LO AÑADE A LA ENTIDAD ASIGNADA
        $kilometrajes = [];
        if($obj_entidad->valorDat == "VEHICULO")
        {
            foreach($vids as $llave => $uid)
            {
                $obj_kilometraje = Kilometraje::select('fechaKil','kilometrajeKil')
                    ->where('Vehiculo_idVehiculo',$uid)
                    //->whereRaw('(tipoKil = "MOVIL" OR tipoKil is null)')
                    ->where('activoKil',1)
                    ->orderBy('kilometrajeKil','DESC')
                    ->first();

                if (!$obj_kilometraje)
                {
                    $kilometrajes["k".$eids["v".$uid]] = 0;
                    //$kilometrajes["k".$uid] = 0;                   
                }
                else
                {
                    $kilometrajes["k".$eids["v".$uid]] = $obj_kilometraje->kilometrajeKil; 
                    //$kilometrajes["k".$uid] = $obj_kilometraje->kilometrajeKil;
                }
            }
        }

        /********************************************************************/

        foreach($arr_asignaciones as $uasignacion)
        {
            ///HAY QUE AGARRAR LA VALIDACION SI SE HARA EN EL IMPLEMENTO O EN LA DISTRIBUCION

            ///PRIMERO VER EL TIPO DE VALIDACION QUE SE HARA EN EL TIPO DE DOCUMENTO
            ///LUEGO HAY QUE VERIFICAR SI EL DOCUMENTO HA SIDO CON UN PROCESO ADICIONAL COMO TRAMITE OBERVACION APLZIACAMIENTO

            $renovable = $parametros["i".$uasignacion->Implemento_idImplemento]->renovableImp;
            $tipo = $parametros["i".$uasignacion->Implemento_idImplemento]->tipoImp;//activo,consumible,documento,actividad,check
            $validacion = $parametros["i".$uasignacion->Implemento_idImplemento]->validacionDis;// ninguna, kilometraje, fecha, check, horometraje
            $alerta = $parametros["i".$uasignacion->Implemento_idImplemento]->alertaImp;

            $renovacion = $parametros["i".$uasignacion->Implemento_idImplemento]->validacionDis;// cantidad de kilometraje u meses en los que se hara la renovación del documento

            if(is_numeric($uasignacion->montoAsi))
                $uasignacion->montoAsi = number_format($uasignacion->montoAsi, 2);

            $uasignacion["estado"] = "";
            $uasignacion["retraso"] = "";
            $uasignacion["valor"] = "";

            if($renovable <> 1)//documento no se renueva
            {
                $uasignacion["estado"] = "PERMANENTE";
                $uasignacion["retraso"] = "-";
                $uasignacion["valor"] = "-";
            }
            elseif($uasignacion->situacionAsi == "TRAMITADO")
            {
                $vencimiento = strtotime($uasignacion->fsituacionAsi);

                $diferencia = $vencimiento - $ahora;

                $uasignacion["retraso"] = ($diferencia == 0) ? 0 : round($diferencia/86400);
                $uasignacion["valor"] = $uasignacion->fsituacionAsi;
                $uasignacion["tip"] = "F";

                if($vencimiento <= $ahora)//el documento tramitado ya paso su fecha de revision
                {
                    $uasignacion["estado"] = "URGENTE";
                }
                else
                {
                    $uasignacion["estado"] = "EN TRAMITE";
                }
            }
            elseif($uasignacion->situacionAsi == "APLAZADO")
            {
                $vencimiento = strtotime($uasignacion->fsituacionAsi);

                $diferencia = $vencimiento - $ahora;

                $uasignacion["retraso"] = ($diferencia == 0) ? 0 : round($diferencia/86400);
                $uasignacion["valor"] = $uasignacion->fsituacionAsi;
                $uasignacion["tip"] = "F";

                if($vencimiento <= $ahora)//el documento tramitado ya paso su fecha de revision
                {
                    $uasignacion["estado"] = "URGENTE";
                }
                else
                {
                    $uasignacion["estado"] = "APLAZADO";
                }
            }
            else//documentos que si se renuevan
            {
                switch($validacion)
                {
                    case "KILOMETRAJE"://falta implementar
                        $vencimiento = $uasignacion->vencimientoAsi;
                        $aviso = $uasignacion->vencimientoAsi - $alerta;

                        $km_actual = 0;
                        if(isset($kilometrajes["k".$uasignacion->Entidad_idEntidad]))
                            $km_actual = $kilometrajes["k".$uasignacion->Entidad_idEntidad];

                        $diferencia = $vencimiento - $km_actual;

                        $uasignacion["retraso"] = $vencimiento - $km_actual;
                        $uasignacion["valor"] = $uasignacion->vencimientoAsi;
                        $uasignacion["tip"] = "K";

                        if($vencimiento <= $km_actual)//km se ha vencido
                        {
                            $uasignacion["estado"] = "VENCIDO";
                        }
                        elseif($vencimiento >= $km_actual && $aviso <= $km_actual)//el documento esta en alerta
                        {
                            $uasignacion["estado"] = "POR VENCER";
                        }
                        else
                        {
                            $uasignacion["estado"] = "VIGENTE";
                        }
                    break;
                    case "FECHA":
                        $vencimiento = strtotime($uasignacion->fvencimientoAsi);
                        $aviso = strtotime($uasignacion->fvencimientoAsi."- ".$alerta." days");

                        $diferencia = $vencimiento - $ahora;

                        $uasignacion["retraso"] = ($diferencia == 0) ? 0 : round($diferencia/86400);
                        $uasignacion["valor"] = $uasignacion->fvencimientoAsi;
                        $uasignacion["tip"] = "F";

                        if($vencimiento <= $ahora)//el documento se ha vencido
                        {
                            $uasignacion["estado"] = "VENCIDO";
                        }
                        elseif($vencimiento >= $ahora && $aviso <= $ahora)//el documento esta en alerta
                        {
                            $uasignacion["estado"] = "POR VENCER";
                        }
                        else
                        {
                            $uasignacion["estado"] = "VIGENTE";
                        }
                    break;
                    case "CHECK"://falta implementar
                    break;
                    case "HOROMETRAJE"://falta implementar
                    break;
                    default:
                    break;
                }
            }
            $entidades["e".$uasignacion->Entidad_idEntidad]["asi"]["i".$uasignacion->Implemento_idImplemento] = $uasignacion;
        }

        foreach($entidades as $uentidad)//ordenando las entidades en sus respectivos grupos
        {
            $id = $uentidad["gru"];
            $grupos["g".$id]["ent"][] = $uentidad;
        }




        /*
        $cabecera = [];
        
        $cabeza = [];
        $cabeza["label"] = 'nro';
        $cabeza["field"] = '';

        $cabecera[] = $cabeza;

        $cabeza = [];
        $cabeza["label"] = 'VEHICULO';
        $cabeza["field"] = 'placaVeh';

        $cabecera[] = $cabeza;
        
        //{ label: '', field: 'acciones'},

        foreach($titulos as $llave => $utitulo)
        {
            $cabeza = [];
            $cabeza["label"] = 'nro';
            $cabeza["field"] = '';
            $cabecera = [];
        }*/

        $resultado["titulos"] = $titulos;
        $resultado["registros"] = $grupos;

        return $resultado;

        /*$indices = [];

        $registros = [];

        if($tipo == "DIA")
        {
            $fechas = [];
            $filas = [];
            $fecha_actual = date("Y-m-d");
            $fecha_actual = date("Y-m-d",strtotime($fecha_actual."- 9 days"));
            $fechas[] = $fecha_actual;
            $filas[$fecha_actual] = "-";
            
            for ($i=1; $i < 10 ; $i++)
            {
                $fecha_actual = date("Y-m-d",strtotime($fecha_actual."+ 1 days"));
                $fechas[] = $fecha_actual;
                $filas[$fecha_actual] = "-";
            }
            $indices = $fechas;

            foreach($arr_vehiculos as $uvehiculo)
            {
                $registro = $uvehiculo;
                $kilometrajes = $filas;

                $arr_kilometrajes = Kilometraje::whereIn(DB::raw("DATE(fechaKil)"), $fechas)
                ->select('kilometrajeKil','fechaKil')
                ->where('Vehiculo_idVehiculo',$uvehiculo->idVehiculo)
                ->whereNull('invalidoKil')
                ->whereRaw('(tipoKil = "MOVIL" or tipoKil is null)')
                ->orderBy('fechaKil','desc')
                ->orderBy('idKilometraje','desc')
                ->get();
                
                foreach($arr_kilometrajes as $ukilometraje)
                {
                    $fecha_sel = date("Y-m-d",strtotime($ukilometraje->fechaKil));
                    $kilometrajes[$fecha_sel] = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                }
                

                $arr_kilometrajes = [];
                foreach($kilometrajes as $ukilometraje)
                {
                    $arr_kilometrajes[] = ($ukilometraje == "" ? "-" : $ukilometraje);
                }
                $registro["kilometrajes"] = $arr_kilometrajes;

                $registros["v".$uvehiculo->idVehiculo] = $registro;
            }
        }
        elseif($tipo == "REGISTRO")
        {
            $indices = [1,2,3,4,5,6,7,8,9,10];
            foreach($arr_vehiculos as $uvehiculo)
            {
                $registro = $uvehiculo;
                $kilometrajes = [];

                $arr_kilometrajes = Kilometraje::select('kilometrajeKil','fechaKil','idKilometraje')
                ->where('Vehiculo_idVehiculo',$uvehiculo->idVehiculo)
                ->whereNull('invalidoKil')
                ->orderBy('fechaKil','desc')
                ->orderBy('idKilometraje','desc')
                ->whereRaw('(tipoKil = "MOVIL" or tipoKil is null)')
                ->take(10)
                ->get()
                ->reverse()
                ->values();

                $kactual = 0;
                $factual = 0;
                $primero = false;

                foreach($arr_kilometrajes as $ukilometraje)
                {
                    $kilometraje = [];
                    $kilometraje = $ukilometraje;
                    $kilometraje["kilometraje"] = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');

                    if($primero)
                    {
                        $kilometraje["variacion"] = "-";
                        $kilometraje["error"] = false;
                        $primero = false;
                        $kactual = $ukilometraje->kilometrajeKil;
                        $factual = strtotime($ukilometraje->fechaKil);
                        $id = $ukilometraje->idKilometraje;
                    }
                    else
                    {
                        $fposterior = strtotime($ukilometraje->fechaKil);
                        $fdiferencia = ($fposterior-$factual)/(60*60*24)+1;

                        $kdiferencia = ($ukilometraje->kilometrajeKil - $kactual)/$fdiferencia;

                        $kilometraje["variacion"] = round($kdiferencia);
                        if($kdiferencia > 1000 || $kdiferencia < 0)
                            $kilometraje["error"] = true;
                        else
                            $kilometraje["error"] = false;
                        $kactual  = $ukilometraje->kilometrajeKil;
                        $factual = $fposterior;
                    }
                    $kilometrajes[] = $kilometraje;
                }

                $registro["kilometrajes"] = $kilometrajes;

                $registros["v".$uvehiculo->idVehiculo] = $registro;
            }

        }
        
        $resultado["registros"] = $registros;
        $resultado["indices"] = $indices;

        return $resultado;*/
    }



    public function Actualizar(Request $request) 
    {
        //ricardo
        //actualiza el implemento asignado a una entidad
        $asignacion = json_decode($request->asignacion);
        $obj_asignacion = (object)[];
        $obj_asignacion->nroAsi = $asignacion->nroAsi;
        $obj_asignacion->fvencimientoAsi = ($asignacion->fvencimientoAsi == "") ? null : $asignacion->fvencimientoAsi;
        $obj_asignacion->vencimientoAsi = $asignacion->vencimientoAsi;
        $obj_asignacion->Medida_idDato = $asignacion->Medida_idDato;
        $obj_asignacion->estadoAsi = $asignacion->estadoAsi;
        $obj_asignacion->montoAsi = ($asignacion->montoAsi == "") ? 0 : $asignacion->montoAsi;
        $obj_asignacion->fcreacionAsi = date("Y-m-d H:i:s");
        Asignacion::where('idAsignacion', $asignacion->idAsignacion)->update((array)$obj_asignacion);
    }

    public function ActualizarEscaneo( Request $request )
    {
        $asignacion = json_decode( $request->asignacion ); 
        $obj_asignacion = (object)[]; 
        $obj_asignacion->escaneoAsi = 1;
        Asignacion::where('idAsignacion', $asignacion->idAsignacion)->update((array)$obj_asignacion);
    }

    public function Reemplazar(Request $request) 
    {
        //ricardo
        //reemplaza el implemento vencido por el nuevo implemento asignado a una entidad
        $asignacion = json_decode($request->asignacion);
        
        if(isset($obj_asignacion->idAsignacion))
        {
            $obj_asignacion = (object)[];
            $obj_asignacion->estadoAsi = "CADUCO";
            Asignacion::where('idAsignacion', $asignacion->idAsignacion)->update((array)$obj_asignacion);    
        }

        $obj_asignacion = new Asignacion();
        $obj_asignacion->nroAsi = $asignacion->nroAsi;
        $obj_asignacion->femisionAsi = date("Y-m-d");
        //$obj_asignacion->fvencimientoAsi = $asignacion->fvencimientoAsi;
        $obj_asignacion->fvencimientoAsi = ($asignacion->fvencimientoAsi == "") ? null : $asignacion->fvencimientoAsi;
        //$obj_asignacion->vencimientoAsi = $asignacion->vencimientoAsi;
        $obj_asignacion->vencimientoAsi = (isset($asignacion->vencimientoAsi)) ? $asignacion->vencimientoAsi : null;
                    //$obj_asignacion->tipoAsi = $asignacion->;
                    //$obj_asignacion->escaneoAsi = $asignacion->;
        $obj_asignacion->Entidad_idEntidad = $asignacion->Entidad_idEntidad;
        $obj_asignacion->montoAsi = ($asignacion->montoAsi == "") ? 0 : $asignacion->montoAsi;
        $obj_asignacion->situacionAsi = "NINGUNA";
        $obj_asignacion->fcreacionAsi = date("Y-m-d H:i:s");
        //$obj_asignacion->fsituacionAsi;
        //$obj_asignacion->observacionAsi;
        $obj_asignacion->estadoAsi = "VIGENTE";
        //$obj_asignacion->Ordenc_idOrdenc;
        //$obj_asignacion->Distribucion_idDistribucion;
        $obj_asignacion->Implemento_idImplemento = $asignacion->Implemento_idImplemento;
        $obj_asignacion->Medida_idDato = $asignacion->Medida_idDato;
        $obj_asignacion->save();
        return $obj_asignacion->idAsignacion;
    }

    public function Situacion($situacion,Request $request) 
    {
        $jsituacion = json_decode($request->situacion);
        $respuesta = "";
        switch($situacion)
        {
            case "ENTREGAR":
                $respuesta = $this->Entregar($jsituacion);
                break;
            case "PLANIFICAR":
                //$this->Planifiar($jsituacion);
                $respuesta = $this->Planificar($jsituacion);
                break;
            case "TRAMITAR":
                $respuesta = $this->Tramitar($jsituacion);
                break;
            case "APLAZAR":
                $this->Aplazar($jsituacion);
                break;
            default:
                //NADA
                break;
        }
        return $respuesta;
        /**********************************************************************/
        $idOrdenc = "";
        $situacion = json_decode($request->situacion);

        if($situacion->condicion == "APLAZADO")//se actualizan los registros a aplazado para que sean revisados la fecha establecida
        {
            foreach($situacion->seleccionados as $uasignacion)
            {
                $obj_asignacion = (object)[];
                $obj_asignacion->situacionAsi = "APLAZADO";
                $obj_asignacion->fsituacionAsi = $situacion->fpagoOrd;
                $obj_asignacion->observacionAsi = $situacion->observacionOrd;
                Asignacion::where('idAsignacion', $uasignacion->idAsignacion)->update((array)$obj_asignacion);
            }
        }
        elseif($situacion->condicion == "TRAMITADO")
        {

            $obj_ordenc = new Ordenc();
            $obj_ordenc->femisionOrd = $situacion->femisionOrd;
            $obj_ordenc->fcreacionOrd = date("Y-m-d H:i:s");
            //$obj_ordenc->faprobacionOrd = ;
            $obj_ordenc->estadoOrd = "SOLICITADO";
            $obj_ordenc->Externo_idExterno = $situacion->Externo_idExterno;
            $obj_ordenc->totalOrd = $situacion->totalOrd;
                                    //$obj_ordenc->Usuario_idUsuario = ;
            $obj_ordenc->tipoOrd = $situacion->tipoOrd;
            //$obj_ordenc->observacionOrd = ;
            $obj_ordenc->subtotalOrd = $situacion->subtotalOrd;
            $obj_ordenc->igvOrd = $situacion->igvOrd;
            //$obj_ordenc->detraccionOrd = ;
            $obj_ordenc->Moneda_idDato = $situacion->Moneda_idDato;
            $obj_ordenc->pagoOrd = $situacion->pagoOrd;
            //$obj_ordenc->Inversion_idDato = $situacion->;
            $obj_ordenc->Area_idArea = $situacion->Area_idArea;
            
            if($situacion->pagoOrd == "CREDITO")
            {
                $obj_ordenc->fpagoOrd = $situacion->fpagoOrd;
                $obj_ordenc->adelantoOrd = $situacion->adelantoOrd;
            }

            $obj_ordenc->save();

            foreach($situacion->seleccionados as $uasignacion)
            {
                if($uasignacion->idAsignacion == 0)
                {
                    //$obj_asignacion = (object)[];
                    
                    //$obj_asignacion->fsituacionAsi = $situacion->fpagoOrd;
                    //$obj_asignacion->observacionAsi = $situacion->observacionOrd;

                    //Asignacion::where('idAsignacion', $uasignacion->idAsignacion)->update((array)$obj_asignacion);


                    $obj_asignacion = new Asignacion();
                            //$obj_asignacion->nroAsi = ;
                            //$obj_asignacion->femisionAsi = ;
                            //$obj_asignacion->fvencimientoAsi = ;
                            //$obj_asignacion->montoAsi = ;
                    $obj_asignacion->tipoAsi = "OBLIGATORIO";
                            //$obj_asignacion->escaneoAsi = ;
                    $obj_asignacion->Entidad_idEntidad = $uasignacion->idEntidad;
                    $obj_asignacion->situacionAsi = "TRAMITADO";
                    //$obj_asignacion->fsituacionAsi = ;
                    //$obj_asignacion->observacionAsi = ;
                    $obj_asignacion->estadoAsi = "VIGENTE";
                    $obj_asignacion->Ordenc_idOrdenc = $obj_ordenc->idOrdenc;
                    //$obj_asignacion->Distribucion_idDistribucion = ;
                    $obj_asignacion->Implemento_idImplemento = $uasignacion->Implemento_idImplemento;
                    //$obj_asignacion->Medida_idDato = ;
                    $obj_asignacion->save();

                        /*`idAsignacion` INTEGER(11) NOT NULL AUTO_INCREMENT,
                        `` VARCHAR(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `` DATE DEFAULT NULL,
                        `` DATE DEFAULT NULL,
                        `` ENUM('NO CORRESPONDE','OBLIGATORIO','PROVISIONAL','PERMANENTE','NO POSEE') COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `` VARCHAR(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `` INTEGER(11) DEFAULT NULL,
                        `` FLOAT(9,3) DEFAULT NULL,
                        `` ENUM('NINGUNA','TRAMITADO','OBSERVADO','APLAZADO') COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `` DATE DEFAULT NULL,
                        `` VARCHAR(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `` ENUM('ANULADO','VIGENTE','CADUCO') COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `` INTEGER(11) DEFAULT NULL,
                        `` INTEGER(11) DEFAULT NULL,
                        `` INTEGER(11) DEFAULT NULL,
                        `` INTEGER(11) DEFAULT NULL,*/



                }
                else
                {
                    $obj_asignacion = (object)[];
                    $obj_asignacion->situacionAsi = "TRAMITADO";
                    $obj_asignacion->Ordenc_idOrdenc = $obj_ordenc->idOrdenc;
                    //$obj_asignacion->fsituacionAsi = $situacion->fpagoOrd;
                    //$obj_asignacion->observacionAsi = $situacion->observacionOrd;
                    Asignacion::where('idAsignacion', $uasignacion->idAsignacion)->update((array)$obj_asignacion);
                }

                $obj_ordend = new Ordend();
                $obj_ordend->Ordenc_idOrdenc = $obj_ordenc->idOrdenc;
                $obj_ordend->Material_idMaterial = $uasignacion->idMaterial;
                $obj_ordend->cantidadOrd = $uasignacion->cantidad;
                $obj_ordend->precioOrd = $uasignacion->precio;
                $obj_ordend->Entidad_idEntidad = $uasignacion->idEntidad;
                $obj_ordend->observacionOrd = "";
                $obj_ordend->save();
                
                $idOrdenc = $obj_ordenc->idOrdenc;
            }
        }
        else
        {
            //no se hace nada
        }
        return $idOrdenc;
    }

    public function Entregar($prm_situacion)
    {
        //$idOrdenc = "";
        $situacion = $prm_situacion;
    
        /*$obj_ordenc = new Ordenc();
        $obj_ordenc->femisionOrd = $situacion->femisionOrd;
        $obj_ordenc->fcreacionOrd = date("Y-m-d H:i:s");
        //$obj_ordenc->faprobacionOrd = ;
        $obj_ordenc->estadoOrd = "SOLICITADO";
        $obj_ordenc->Externo_idExterno = $situacion->Externo_idExterno;
        $obj_ordenc->totalOrd = $situacion->totalOrd;
                                //$obj_ordenc->Usuario_idUsuario = ;
        $obj_ordenc->tipoOrd = $situacion->tipoOrd;
        //$obj_ordenc->observacionOrd = ;
        $obj_ordenc->subtotalOrd = $situacion->subtotalOrd;
        $obj_ordenc->igvOrd = $situacion->igvOrd;
        //$obj_ordenc->detraccionOrd = ;
        $obj_ordenc->Moneda_idDato = $situacion->Moneda_idDato;
        $obj_ordenc->pagoOrd = $situacion->pagoOrd;
        //$obj_ordenc->Inversion_idDato = $situacion->;
        $obj_ordenc->Area_idArea = $situacion->Area_idArea;*/
        
        /*if($situacion->pagoOrd == "CREDITO")
        {
            $obj_ordenc->fpagoOrd = $situacion->fpagoOrd;
            $obj_ordenc->adelantoOrd = $situacion->adelantoOrd;
        }

        $obj_ordenc->save();*/

        $ahora = date("Y-m-d H:i:s");

        foreach($situacion->seleccionados as $uasignacion)
        {
            if(isset($uasignacion->idAsignacion))
            {
                if($uasignacion->idAsignacion <> 0)
                {
                    $obj_asignacion = (object)[];
                    $obj_asignacion->estadoAsi = "CADUCO";
                    Asignacion::where('idAsignacion', $uasignacion->idAsignacion)->update((array)$obj_asignacion);
                }
            }

            

            $obj_asignacion = new Asignacion();
                    //$obj_asignacion->nroAsi = ;
                    //$obj_asignacion->fvencimientoAsi = ;
                    //$obj_asignacion->montoAsi = ;
            //$obj_asignacion->femisionAsi = ;
            $obj_asignacion->fcreacionAsi = $ahora;
            //$obj_asignacion->femisionAsi = ;
            $obj_asignacion->tipoAsi = "OBLIGATORIO";
                    //$obj_asignacion->escaneoAsi = ;
            $obj_asignacion->Entidad_idEntidad = $uasignacion->idEntidad;
            $obj_asignacion->situacionAsi = "NINGUNA";
            //$obj_asignacion->fsituacionAsi = ;
            //$obj_asignacion->observacionAsi = ;
            $obj_asignacion->estadoAsi = "VIGENTE";
            //$obj_asignacion->Ordenc_idOrdenc = $obj_ordenc->idOrdenc;
            //$obj_asignacion->Distribucion_idDistribucion = ;
            $obj_asignacion->Implemento_idImplemento = $uasignacion->Implemento_idImplemento;
            //$obj_asignacion->Medida_idDato = ;

            if($uasignacion->validacion == "FECHA")
            {
                $obj_asignacion->fvencimientoAsi = $uasignacion->fvencimiento;
            }
            elseif($uasignacion->validacion == "KILOMETRAJE")
            {
                $obj_asignacion->vencimientoAsi = $uasignacion->vencimiento;
            }
            
            $obj_asignacion->save();

            $obj_kardex = new Kardex();
            $obj_kardex->stockKar = $uasignacion->cantidad;
            $obj_kardex->Almacen_idAlmacen = 1;//ALMACEN DE SALIDA (SE DEBE SELECCIONAR)
            $obj_kardex->Material_idMaterial = $uasignacion->idMaterial;
            $obj_kardex->tipoKar = "SALIDA";
            $obj_kardex->conceptoKar = "ENTREGA";
            $obj_kardex->fechaKar = date("Y-m-d H:i:s");
            $obj_kardex->save();

            $obj_material = Material::find($uasignacion->idMaterial);
            $obj_material->stockMat = $obj_material->stockMat - $uasignacion->cantidad;
            $obj_material->save();        


            /*"idAsignacion":5867,
            "nroAsi":"2",
            "femisionAsi":"2022-11-19",
            "fvencimientoAsi":"2022-12-19",
            "tipoAsi":null,
            "escaneoAsi":null,
            "Entidad_idEntidad":1078,
            "montoAsi":"35.50",
            "situacionAsi":"NINGUNA",
            "fsituacionAsi":null,
            "observacionAsi":null,
            "estadoAsi":"VIGENTE",
            "Ordenc_idOrdenc":null,
            "Distribucion_idDistribucion":null,
            "Implemento_idImplemento":"29",
            "Medida_idDato":296,
            "vencimientoAsi":null,
            "tip":"F",
            "sel":true,
            "estado":"POR VENCER",
            "retraso":16,
            "valor":"2022-12-19",
            "idEntidad":1078,
            "nombreEnt":"ABRIGO HUANCA AGUSTIN",
            "implemento":"CORTAVIENTO",
            "material":"CORTAVIENTO",
            "idMaterial":5,
            "unidad":"UNIDAD",
            "cantidad":1,
            "precio":0,
            "total":"0.00",
            "observacion":"",
            "renovacion":4,
            "validacion":"FECHA",
            "vencimiento":"",
            "fvencimiento":"2022-12-21"*/

        }

        return $ahora;
    }
    public function Planificar($prm_situacion)
    {
        //SOLO FUNCIONA CON JERARQUIAS DE MANTENIMENTO PORQUE AHÍ EL MANTENIMIENTO MAYOR ES EL QUE VA A REALIZARSE Y LOS DEMAS SE REPROGRAMAN CUANDO EL MANTENIMEINTO MAYOR TERMINE

        $situacion = $prm_situacion;
        $backlogs = [];

        if($situacion->condicion == 'PLANIFICADO')
        {
            $encontrados = [];
            foreach($situacion->seleccionados as $useleccionado)//se debe buscar 
            {
                $vencido = "";
                if($useleccionado->vencimientoAsi != "" && $useleccionado->vencimientoAsi != null)
                    $vencido = $useleccionado->vencimientoAsi;
                elseif($useleccionado->fvencimientoAsi != "" && $useleccionado->fvencimientoAsi != null)
                    $vencido = $useleccionado->fvencimientoAsi;

                if(isset($encontrados["v".$vencido."e".$useleccionado->Entidad_idEntidad]))//verifica si el vencimiento existe con la misma entidad para pasrlo
                    continue;
                else
                    $encontrados["v".$vencido."e".$useleccionado->Entidad_idEntidad] = "-";

                //obteniendo las asignaciones que coincidan para hacer una actualizacion masiva
                $arr_asignaciones = [];
                if($useleccionado->vencimientoAsi != "" && $useleccionado->vencimientoAsi != null)
                {
                    $arr_asignaciones = Asignacion::select('asignacion.*','nombreImp')//jalando todos los que vencen el mismo kilometraje
                        ->join('implemento','implemento.idImplemento','asignacion.Implemento_idImplemento')
                        ->where('vencimientoAsi', $useleccionado->vencimientoAsi)
                        ->where('Entidad_idEntidad', $useleccionado->Entidad_idEntidad)
                        ->where('estadoAsi','VIGENTE')
                        ->get();
                }
                elseif($useleccionado->fvencimientoAsi != "" && $useleccionado->fvencimientoAsi != null)
                {
                    $arr_asignaciones = Asignacion::select('asignacion.*','nombreImp')//jalando todos los que vencen la misma fecha
                        ->join('implemento','implemento.idImplemento','asignacion.Implemento_idImplemento')
                        ->where('fvencimientoAsi', $useleccionado->fvencimientoAsi)
                        ->where('Entidad_idEntidad', $useleccionado->Entidad_idEntidad)
                        ->where('estadoAsi','VIGENTE')
                        ->get();
                }
                //actualizando todas las asignaciones que tengan el mismo parametro de vencimiento
                $mayor = 0;
                $origen = 0;
                foreach($arr_asignaciones as $uasignacion)
                {
                    $actualizo4 = DB::table('asignacion')
                        ->where('idAsignacion', $uasignacion->idAsignacion)
                        ->where('estadoAsi', "VIGENTE")
                        ->update(['situacionAsi' => "PLANIFICADO",
                                  'fsituacionAsi' => $situacion->fingreso
                                ]);

                    if($mayor < $this->jerarquia_mantenimiento[$uasignacion->nombreImp])//buscando la asignacion de mayor jerarquia
                    {
                        $mayor = $this->jerarquia_mantenimiento[$uasignacion->nombreImp];
                        $origen = $uasignacion->idAsignacion;
                    }
                }

                $obj_entidad = Entidad::select('Entidad_idExterno')
                        ->where('idEntidad', $useleccionado->Entidad_idEntidad)
                        ->where('activoEnt',1)
                        ->first();

                //generando la solicitud de trabajo en el backlog del mantenimiento preventivo con mayor jerarquia
                $obj_backlog = new Backlog();
                $obj_backlog->tipoBac = "PREVENTIVO";
                $obj_backlog->fechaBac = date("Y-m-d");
                $obj_backlog->estadoBac = "SOLICITADO";
                $obj_backlog->Origen_idOrigen = $origen;
                $obj_backlog->Vehiculo_idVehiculo = $obj_entidad->Entidad_idExterno;
                $obj_backlog->save();

                $backlogs[] = $obj_backlog->idBacklog;
            }
        }

        if( $situacion->condicion == 'CAMPANA' )
        {
            $encontrados = [];
            $idsEntidad = [];
            $campana_detalle = [];

            foreach($situacion->seleccionados as $useleccionado)//se debe buscar 
            {
                $vencido = "";
                if($useleccionado->vencimientoAsi != "" && $useleccionado->vencimientoAsi != null)
                    $vencido = $useleccionado->vencimientoAsi;
                elseif($useleccionado->fvencimientoAsi != "" && $useleccionado->fvencimientoAsi != null)
                    $vencido = $useleccionado->fvencimientoAsi;

                if(isset($encontrados["v".$vencido."e".$useleccionado->Entidad_idEntidad]))//verifica si el vencimiento existe con la misma entidad para pasrlo
                    continue;
                else
                    $encontrados["v".$vencido."e".$useleccionado->Entidad_idEntidad] = "-";

                //obteniendo las asignaciones que coincidan para hacer una actualizacion masiva
                $arr_asignaciones = [];
                if($useleccionado->vencimientoAsi != "" && $useleccionado->vencimientoAsi != null)
                {
                    $arr_asignaciones = Asignacion::select('asignacion.*','nombreImp')//jalando todos los que vencen el mismo kilometraje
                        ->join('implemento','implemento.idImplemento','asignacion.Implemento_idImplemento')
                        ->where('vencimientoAsi', $useleccionado->vencimientoAsi)
                        ->where('Entidad_idEntidad', $useleccionado->Entidad_idEntidad)
                        ->where('estadoAsi','VIGENTE')
                        ->get();
                }
                elseif($useleccionado->fvencimientoAsi != "" && $useleccionado->fvencimientoAsi != null)
                {
                    $arr_asignaciones = Asignacion::select('asignacion.*','nombreImp')//jalando todos los que vencen la misma fecha
                        ->join('implemento','implemento.idImplemento','asignacion.Implemento_idImplemento')
                        ->where('fvencimientoAsi', $useleccionado->fvencimientoAsi)
                        ->where('Entidad_idEntidad', $useleccionado->Entidad_idEntidad)
                        ->where('estadoAsi','VIGENTE')
                        ->get();
                }
                //actualizando todas las asignaciones que tengan el mismo parametro de vencimiento
                $origen = 0;
                foreach($arr_asignaciones as $uasignacion)
                {
                    $actualizo4 = DB::table('asignacion')
                        ->where('idAsignacion', $uasignacion->idAsignacion)
                        ->where('estadoAsi', "VIGENTE")
                        ->update(['situacionAsi' => "PLANIFICADO",
                                  'fsituacionAsi' => $situacion->fingreso, 
                                  'observacionAsi' => $situacion->observacion]);
                    $origen = $uasignacion->idAsignacion;
                }

                $obj_entidad = Entidad::select('Entidad_idExterno')
                        ->where('idEntidad', $useleccionado->Entidad_idEntidad)
                        ->where('activoEnt',1)
                        ->first();

                //generando la solicitud de trabajo en el backlog del mantenimiento preventivo con mayor jerarquia
                $obj_backlog = new Backlog();
                $obj_backlog->tipoBac = "CAMPAÑA";
                $obj_backlog->fechaBac = date("Y-m-d");
                $obj_backlog->estadoBac = "SOLICITADO";
                $obj_backlog->Origen_idOrigen = $origen;
                $obj_backlog->Vehiculo_idVehiculo = $obj_entidad->Entidad_idExterno;
                $obj_backlog->save();

                $backlogs[] = $obj_backlog->idBacklog;
                $idsEntidad[] = $obj_entidad->Entidad_idExterno;
                
            }
            //return $campana_detalle;


            foreach( $idsEntidad as $uvehiculo) 
            {
                $obj_reportef = new Reportef(); 
                foreach( $situacion->trabajos as $utrabajo )
                {
                    $obj_reportef->fechaRep = date("Y-m-d"); 
                    $obj_reportef->Vehiculo_idVehiculo = $uvehiculo;
                    //$obj_reportef->Cuenta_idDato = $ordent->idDato;
                    $obj_reportef->estadoRep = "SOLICITADO";
                    $obj_reportef->tipoRep = "CAMPAÑA";
                    $obj_reportef->save();  

                    $obj_falla = new Falla(); 
                    $obj_falla->Componente_idComponente = $utrabajo->id;
                    $obj_falla->detalleFal = $utrabajo->falla;
                    $obj_falla->Reporte_idReporte = $obj_reportef->idReportef;
                    $obj_falla->tipoFal = "VEHICULO";
                    $obj_falla->estadoFal = "SOLICITADO";
                    $obj_falla->save();

                    $obj_backlog = new Backlog();
                    $obj_backlog->tipoBac = "CAMPAÑA";
                    $obj_backlog->fechaBac = date("Y-m-d");
                    $obj_backlog->estadoBac = "SOLICITADO";
                    $obj_backlog->Origen_idOrigen = $obj_falla->idFalla;
                    $obj_backlog->Vehiculo_idVehiculo = $uvehiculo;
                    $obj_backlog->save();
                    
                    $backlogs[] = $obj_backlog->idBacklog;
                }
                

            }

            /*
            foreach( $situacion->trabajos as $utrabajo )
            {
                $obj_reportef = new Reportef(); 
                foreach( $idsEntidad as $uvehiculo) 
                {
                    $obj_reportef->fechaRep = date("Y-m-d"); 
                    $obj_reportef->Vehiculo_idVehiculo = $uvehiculo;
                    //$obj_reportef->Cuenta_idDato = $ordent->idDato;
                    $obj_reportef->estadoRep = "SOLICITADO";
                    $obj_reportef->tipoRep = "CAMPAÑA";
                    $obj_reportef->save();  
                }
                
                $obj_falla = new Falla(); 
                $obj_falla->Componente_idComponente = $utrabajo->id;
                $obj_falla->detalleFal = $utrabajo->falla;
                $obj_falla->Reporte_idReporte = $obj_reportef->idReportef;
                $obj_falla->tipoFal = "VEHICULO";
                $obj_falla->estadoFal = "SOLICITADO";
                $obj_falla->save();

                $obj_backlog = new Backlog();
                $obj_backlog->tipoBac = "CAMPAÑA";
                $obj_backlog->fechaBac = date("Y-m-d");
                $obj_backlog->estadoBac = "SOLICITADO";
                $obj_backlog->Origen_idOrigen = $obj_falla->idFalla;
                $obj_backlog->Vehiculo_idVehiculo = $uvehiculo;
                $obj_backlog->save();
                
                $backlogs[] = $obj_backlog->idBacklog;
            }*/

            /*foreach( $campana_detalle as $useleccionado )
            {
                $obj_entidad = Entidad::select('Entidad_idExterno')
                ->where('idEntidad', $useleccionado->Entidad_idEntidad)
                ->where('activoEnt',1)
                ->first();

                foreach( $useleccionado->detalle_campana as $utrabajo ) 
                {
                    $obj_reportef = new Reportef(); 
                    $obj_reportef->fechaRep = date("Y-m-d"); 
                    $obj_reportef->Vehiculo_idVehiculo = $obj_entidad->Entidad_idExterno;
                    //$obj_reportef->Cuenta_idDato = $ordent->idDato;
                    $obj_reportef->estadoRep = "SOLICITADO";
                    $obj_reportef->tipoRep = "CAMPAÑA";
                    $obj_reportef->save();  

                    $obj_falla = new Falla(); 
                    $obj_falla->Componente_idComponente = $utrabajo->id;
                    $obj_falla->detalleFal = $utrabajo->falla;
                    $obj_falla->Reporte_idReporte = $obj_reportef->idReportef;
                    $obj_falla->tipoFal = "VEHICULO";
                    $obj_falla->estadoFal = "SOLICITADO";
                    $obj_falla->save();

                    $obj_backlog = new Backlog();
                    $obj_backlog->tipoBac = "CAMPAÑA";
                    $obj_backlog->fechaBac = date("Y-m-d");
                    $obj_backlog->estadoBac = "SOLICITADO";
                    $obj_backlog->Origen_idOrigen = $obj_falla->idFalla;
                    $obj_backlog->Vehiculo_idVehiculo = $obj_entidad->Entidad_idExterno;
                    $obj_backlog->save();
                }
            }*/
        }

        return $backlogs;
    }
    public function Tramitar($prm_situacion)
    {
        $idOrdenc = "";
        $situacion = $prm_situacion;

        if($situacion->condicion == "APLAZADO")//se actualizan los registros a aplazado para que sean revisados la fecha establecida
        {
            foreach($situacion->seleccionados as $uasignacion)
            {
                $obj_asignacion = (object)[];
                $obj_asignacion->situacionAsi = "APLAZADO";
                $obj_asignacion->fsituacionAsi = $situacion->fpagoOrd;
                $obj_asignacion->observacionAsi = $situacion->observacionOrd;
                Asignacion::where('idAsignacion', $uasignacion->idAsignacion)->update((array)$obj_asignacion);
            }
        }
        elseif($situacion->condicion == "TRAMITADO")
        {

            $obj_ordenc = new Ordenc();
            $obj_ordenc->femisionOrd = $situacion->femisionOrd;
            $obj_ordenc->fcreacionOrd = date("Y-m-d H:i:s");
            //$obj_ordenc->faprobacionOrd = ;
            $obj_ordenc->estadoOrd = "SOLICITADO";
            $obj_ordenc->Externo_idExterno = $situacion->Externo_idExterno;
            $obj_ordenc->totalOrd = $situacion->totalOrd;
                                    //$obj_ordenc->Usuario_idUsuario = ;
            $obj_ordenc->tipoOrd = $situacion->tipoOrd;
            //$obj_ordenc->observacionOrd = ;
            $obj_ordenc->subtotalOrd = $situacion->subtotalOrd;
            $obj_ordenc->igvOrd = $situacion->igvOrd;
            //$obj_ordenc->detraccionOrd = ;
            $obj_ordenc->Moneda_idDato = $situacion->Moneda_idDato;
            $obj_ordenc->pagoOrd = $situacion->pagoOrd;
            //$obj_ordenc->Inversion_idDato = $situacion->;
            $obj_ordenc->Area_idArea = $situacion->Area_idArea;
            
            if($situacion->pagoOrd == "CREDITO")
            {
                $obj_ordenc->fpagoOrd = $situacion->fpagoOrd;
                $obj_ordenc->adelantoOrd = $situacion->adelantoOrd;
            }

            $obj_ordenc->save();

            foreach($situacion->seleccionados as $uasignacion)
            {
                if($uasignacion->idAsignacion == 0)
                {
                    //$obj_asignacion = (object)[];
                    
                    //$obj_asignacion->fsituacionAsi = $situacion->fpagoOrd;
                    //$obj_asignacion->observacionAsi = $situacion->observacionOrd;

                    //Asignacion::where('idAsignacion', $uasignacion->idAsignacion)->update((array)$obj_asignacion);


                    $obj_asignacion = new Asignacion();
                            //$obj_asignacion->nroAsi = ;
                            //$obj_asignacion->femisionAsi = ;
                            //$obj_asignacion->fvencimientoAsi = ;
                            //$obj_asignacion->montoAsi = ;
                    $obj_asignacion->tipoAsi = "OBLIGATORIO";
                            //$obj_asignacion->escaneoAsi = ;
                    $obj_asignacion->Entidad_idEntidad = $uasignacion->idEntidad;
                    $obj_asignacion->situacionAsi = "TRAMITADO";
                    $obj_asignacion->fsituacionAsi = $situacion->faplazamiento;
                    //$obj_asignacion->observacionAsi = ;
                    $obj_asignacion->estadoAsi = "VIGENTE";
                    $obj_asignacion->Ordenc_idOrdenc = $obj_ordenc->idOrdenc;
                    //$obj_asignacion->Distribucion_idDistribucion = ;
                    $obj_asignacion->Implemento_idImplemento = $uasignacion->Implemento_idImplemento;
                    //$obj_asignacion->Medida_idDato = ;
                    $obj_asignacion->save();

                        /*`idAsignacion` INTEGER(11) NOT NULL AUTO_INCREMENT,
                        `` VARCHAR(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `` DATE DEFAULT NULL,
                        `` DATE DEFAULT NULL,
                        `` ENUM('NO CORRESPONDE','OBLIGATORIO','PROVISIONAL','PERMANENTE','NO POSEE') COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `` VARCHAR(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `` INTEGER(11) DEFAULT NULL,
                        `` FLOAT(9,3) DEFAULT NULL,
                        `` ENUM('NINGUNA','TRAMITADO','OBSERVADO','APLAZADO') COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `` DATE DEFAULT NULL,
                        `` VARCHAR(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `` ENUM('ANULADO','VIGENTE','CADUCO') COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `` INTEGER(11) DEFAULT NULL,
                        `` INTEGER(11) DEFAULT NULL,
                        `` INTEGER(11) DEFAULT NULL,
                        `` INTEGER(11) DEFAULT NULL,*/



                }
                else
                {
                    $obj_asignacion = (object)[];
                    $obj_asignacion->situacionAsi = "TRAMITADO";
                    $obj_asignacion->Ordenc_idOrdenc = $obj_ordenc->idOrdenc;
                    //$obj_asignacion->fsituacionAsi = $situacion->fpagoOrd;
                    $obj_asignacion->fsituacionAsi = $situacion->faplazamiento;
                    //$obj_asignacion->observacionAsi = $situacion->observacionOrd;
                    Asignacion::where('idAsignacion', $uasignacion->idAsignacion)->update((array)$obj_asignacion);
                }

                $obj_ordend = new Ordend();
                $obj_ordend->Ordenc_idOrdenc = $obj_ordenc->idOrdenc;
                $obj_ordend->Material_idMaterial = $uasignacion->idMaterial;
                $obj_ordend->cantidadOrd = $uasignacion->cantidad;
                $obj_ordend->precioOrd = $uasignacion->precio;
                $obj_ordend->Entidad_idEntidad = $uasignacion->idEntidad;
                $obj_ordend->observacionOrd = "";
                $obj_ordend->save();
                
                $idOrdenc = $obj_ordenc->idOrdenc;
            }
        }
        else
        {
            //no se hace nada
        }
        return $idOrdenc;
    }
    public function Aplazar($prm_situacion)
    {
        $situacion = $prm_situacion;
        foreach($situacion->seleccionados as $uasignacion)
        {
            if($uasignacion->idAsignacion == 0)
            {
                $obj_asignacion = new Asignacion();
                        //$obj_asignacion->nroAsi = ;
                        //$obj_asignacion->femisionAsi = ;
                        //$obj_asignacion->fvencimientoAsi = ;
                        //$obj_asignacion->montoAsi = ;
                $obj_asignacion->tipoAsi = "OBLIGATORIO";
                        //$obj_asignacion->escaneoAsi = ;
                $obj_asignacion->Entidad_idEntidad = $uasignacion->idEntidad;
                $obj_asignacion->situacionAsi = "APLAZADO";
                $obj_asignacion->fsituacionAsi = $situacion->faplazamiento;
                $obj_asignacion->observacionAsi = $uasignacion->observacion;
                //$obj_asignacion->fsituacionAsi = ;
                //$obj_asignacion->observacionAsi = ;
                $obj_asignacion->estadoAsi = "VIGENTE";
                //$obj_asignacion->Ordenc_idOrdenc = $obj_ordenc->idOrdenc;
                //$obj_asignacion->Distribucion_idDistribucion = ;
                $obj_asignacion->Implemento_idImplemento = $uasignacion->Implemento_idImplemento;
                //$obj_asignacion->Medida_idDato = ;
                $obj_asignacion->save();
            }
            else
            {
                $obj_asignacion = (object)[];
                $obj_asignacion->situacionAsi = "APLAZADO";
                $obj_asignacion->fsituacionAsi = $situacion->faplazamiento;
                $obj_asignacion->observacionAsi = $uasignacion->observacion;
                Asignacion::where('idAsignacion', $uasignacion->idAsignacion)->update((array)$obj_asignacion);    
            }
        }



                            /*$obj_asignacion = new Asignacion();
                            //$obj_asignacion->nroAsi = ;
                            //$obj_asignacion->femisionAsi = ;
                            //$obj_asignacion->fvencimientoAsi = ;
                            //$obj_asignacion->montoAsi = ;
                    $obj_asignacion->tipoAsi = "OBLIGATORIO";
                            //$obj_asignacion->escaneoAsi = ;
                    $obj_asignacion->Entidad_idEntidad = $uasignacion->idEntidad;
                    $obj_asignacion->situacionAsi = "TRAMITADO";
                    //$obj_asignacion->fsituacionAsi = ;
                    //$obj_asignacion->observacionAsi = ;
                    $obj_asignacion->estadoAsi = "VIGENTE";
                    $obj_asignacion->Ordenc_idOrdenc = $obj_ordenc->idOrdenc;
                    //$obj_asignacion->Distribucion_idDistribucion = ;
                    $obj_asignacion->Implemento_idImplemento = $uasignacion->Implemento_idImplemento;
                    //$obj_asignacion->Medida_idDato = ;
                    $obj_asignacion->save();

                }
                else
                {
                    $obj_asignacion = (object)[];
                    $obj_asignacion->situacionAsi = "TRAMITADO";
                    $obj_asignacion->Ordenc_idOrdenc = $obj_ordenc->idOrdenc;
                    //$obj_asignacion->fsituacionAsi = $situacion->fpagoOrd;
                    //$obj_asignacion->observacionAsi = $situacion->observacionOrd;
                    Asignacion::where('idAsignacion', $uasignacion->idAsignacion)->update((array)$obj_asignacion);*/

        return;
    }
    public function Vencimiento($entidad,$area,$plantilla)
    {
        //ricardo
        //reporte de vencimiento actual
        $tabla = "";


        //OBTENIENDO LOS INVOLUCRADOS PARA JALAR SUS IMPLEMENTOS
        $obj_entidad = Dato::select('valorDat')
            ->where('idDato',$entidad)
            ->first();

        $arr_entidades = [];

        switch($obj_entidad->valorDat)
        {
            case "VEHICULO":
                $arr_entidades = Entidad::select('idEntidad','nombreEnt','tmodelo.valorDat as clase','ttipo.valorDat as grupo','ttipo.idDato as igrupo','idVehiculo','grupoVeh')
                    ->join('vehiculo','vehiculo.idVehiculo','entidad.Entidad_idExterno')
                    ->join('dato as tmodelo','tmodelo.idDato','vehiculo.Modelo_idDato')
                    ->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')
                    ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    ->where('Plantilla_idPlantilla',$plantilla)
                    ->where('estadoHom',"ACTIVO")
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break;
            case "PERSONA":
                $arr_entidades = Entidad::select('idEntidad','nombreEnt','cargo.nombreCar as clase','area.nombreAre as grupo','area.idArea as igrupo')
                    ->join('persona','persona.idPersona','entidad.Entidad_idExterno')
                    ->join('area','area.idArea','persona.Area_idArea')
                    ->join('cargo','cargo.idCargo','persona.Cargo_idCargo')
                    ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    ->where('Plantilla_idPlantilla',$plantilla)
                    ->where('estadoHom',"ACTIVO")
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break;
            default://ACTIVO,ALMACEN,AREA,EXTERNO,OTRO
                $arr_entidades = Entidad::select('idEntidad','nombreEnt')
                    ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    ->where('Plantilla_idPlantilla',$plantilla)
                    ->where('estadoHom',"ACTIVO")
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break; 
        }
        
        $entidades = [];
        $eids = [];
        $vids = [];
        $kilometrajes = [];
        $tot_entidades = count($arr_entidades);

        foreach($arr_entidades as $uentidad)
        {
            $eids[] = $uentidad->idEntidad;
            if($uentidad->grupoVeh == "PESADA" || $uentidad->grupoVeh == "LIVIANA")
                $vids[] = $uentidad->idVehiculo;

            $entidad = [];
            $entidad["id"] = $uentidad->idEntidad;
            $entidad["nom"] = $uentidad->nombreEnt;
            $entidad["ent"] = $uentidad->nombreEnt;
            $entidad["gru"] = $uentidad->igrupo;
            $entidad["cla"] = $uentidad->clase;

            $entidades["e".$uentidad->idEntidad] = $entidad;
        }
        /********************************************************************/
        //BUSCA EL ULTIMO KILOMETRAJE POR VEHICULO Y LO AÑADE A LA ENTIDAD ASIGNADA
        
        if($obj_entidad->valorDat == "VEHICULO")
        {
            foreach($vids as $llave => $uid)
            {
                $obj_kilometraje = Kilometraje::select('fechaKil','kilometrajeKil')
                    ->where('Vehiculo_idVehiculo',$uid)
                    //->whereRaw('(tipoKil = "MOVIL" OR tipoKil is null)')
                    ->where('activoKil',1)
                    ->orderBy('kilometrajeKil','DESC')
                    ->first();

                if (!$obj_kilometraje)
                {
                    $kilometrajes["k".$eids[$llave]] = 0;
                }
                else
                {
                    $kilometrajes["k".$eids[$llave]] = $obj_kilometraje->kilometrajeKil;    
                }
            }
        }


        //GENERANDO LA ESTRUCTURA DE IMPLEMENTOS QUE IRAN DENTRO DE LOS GRUPOS
        //obtiene los implementos amarrados a una plantilla
        $arr_implementos = Implemento::select(
            'idImplemento','nombreImp','Grupo_idGrupo','renovableImp','tipoImp',
            'validacionDis','alertaDis',
            'nombreGru',
            )//'implemento.*','distribucion.*')
            ->join('distribucion','distribucion.Implemento_idImplemento','implemento.idImplemento')
            ->join('grupo','grupo.idGrupo','implemento.Grupo_idGrupo')
            ->where('activoImp',1)
            ->where('estadoDis','ACTIVO')
            ->where('Plantilla_idPlantilla',$plantilla)
            ->get();

        $iids = [];
        $implementos = [];
        $grupos = [];
        $parametros = [];

        foreach($arr_implementos as $uimplemento)
        {
            if(!isset($grupos["g".$uimplemento->Grupo_idGrupo]))//crea el grupo si no existe en el array
            {
                $grupo = [];
                $grupo["gru"] = $uimplemento->nombreGru;
                $grupo["id"] = $uimplemento->Grupo_idGrupo;
                $grupo["imp"] = [];

                $grupos["g".$uimplemento->Grupo_idGrupo] = $grupo;    
            }
            
            $iids[] = $uimplemento->idImplemento;

            $parametros["i".$uimplemento->idImplemento] = $uimplemento;

            $implementos["i".$uimplemento->idImplemento] = $uimplemento;
            $implementos["i".$uimplemento->idImplemento]["asi"] = [];
            $implementos["i".$uimplemento->idImplemento]["tot"] = $tot_entidades;//total de entidades que deben tener implementos//total de implementos contabilizados
            $implementos["i".$uimplemento->idImplemento]["enc"] = 0;//encontrados
            $implementos["i".$uimplemento->idImplemento]["fal"] = $tot_entidades;//faltante
            $implementos["i".$uimplemento->idImplemento]["afal"] = $entidades;
            $implementos["i".$uimplemento->idImplemento]["per"] = 0;//permanente
            $implementos["i".$uimplemento->idImplemento]["aper"] = [];
            $implementos["i".$uimplemento->idImplemento]["vig"] = 0;//vigente
            $implementos["i".$uimplemento->idImplemento]["avig"] = [];
            $implementos["i".$uimplemento->idImplemento]["ale"] = 0;//alerta
            $implementos["i".$uimplemento->idImplemento]["aale"] = [];
            $implementos["i".$uimplemento->idImplemento]["ven"] = 0;//vencido
            $implementos["i".$uimplemento->idImplemento]["aven"] = [];
            $implementos["i".$uimplemento->idImplemento]["apl"] = 0;//aplazado
            $implementos["i".$uimplemento->idImplemento]["aapl"] = [];
            $implementos["i".$uimplemento->idImplemento]["urg"] = 0;//urgente
            $implementos["i".$uimplemento->idImplemento]["aurg"] = [];

            $implementos["i".$uimplemento->idImplemento]["tra"] = 0;//tramitado
            $implementos["i".$uimplemento->idImplemento]["atra"] = [];
            $implementos["i".$uimplemento->idImplemento]["apr"] = 0;//aprobado
            $implementos["i".$uimplemento->idImplemento]["aapr"] = [];
            $implementos["i".$uimplemento->idImplemento]["pag"] = 0;//pagado
            $implementos["i".$uimplemento->idImplemento]["apag"] = [];
            $implementos["i".$uimplemento->idImplemento]["fac"] = 0;//facturado
            $implementos["i".$uimplemento->idImplemento]["afac"] = [];
        }




        //OBTENIENDO LA DATA DE ASIGNACIONES Y ASIGNANDOLA AL ARRAY DE IMPLEMENTOS
        $hoy = date("Y-m-d");
        $ahora = strtotime($hoy);
        
        $arr_asignaciones = Asignacion::select('asignacion.*')
            ->whereIn('Entidad_idEntidad',$eids)
            ->whereIn('Implemento_idImplemento',$iids)
            ->where('estadoAsi','VIGENTE')
            ->get();
            
        $situaciones = "";
        $totales = [];
        $totales["total"] = count($eids)*count($iids);
        $totales["vigente"] = 0;
        $totales["faltante"] = 0;
        $totales["xvencer"] = 0;
        $totales["vencido"] = 0;

        foreach($arr_asignaciones as $uasignacion)
        {
            $renovable = $parametros["i".$uasignacion->Implemento_idImplemento]->renovableImp;
            $tipo = $parametros["i".$uasignacion->Implemento_idImplemento]->tipoImp;//activo,consumible,documento,actividad,check
            $validacion = $parametros["i".$uasignacion->Implemento_idImplemento]->validacionDis;//ninguna,kilometraje,fecha,check,horometraje
            $alerta = $parametros["i".$uasignacion->Implemento_idImplemento]->alertaDis;

            $implementos["i".$uasignacion->Implemento_idImplemento]["enc"] += 1;
            $implementos["i".$uasignacion->Implemento_idImplemento]["fal"] -= 1;

            //$implementos["i".$uasignacion->idImplemento]["asi"][] = $implementos["i".$uasignacion->Implemento_idImplemento]["afal"]["e".$uasignacion->Entidad_idEntidad];
            //unset($implementos["i".$uasignacion->Implemento_idImplemento]["afal"]["e".$uasignacion->Entidad_idEntidad]);

            $filas = $implementos["i".$uasignacion->Implemento_idImplemento]["afal"];
            unset($filas["e".$uasignacion->Entidad_idEntidad]);
            $implementos["i".$uasignacion->Implemento_idImplemento]["afal"] = $filas;

            if($renovable <> 1)//documento no se renueva
            {
                $fila = [];
                $fila["ent"] = $entidades["e".$uasignacion->Entidad_idEntidad]["nom"];
                $fila["gru"] = $entidades["e".$uasignacion->Entidad_idEntidad]["gru"];
                $fila["cla"] = $entidades["e".$uasignacion->Entidad_idEntidad]["cla"];

                $implementos["i".$uasignacion->Implemento_idImplemento]["per"] += 1;
                 
                $filas = $implementos["i".$uasignacion->Implemento_idImplemento]["aper"];
                $filas[] = $fila;
                $implementos["i".$uasignacion->Implemento_idImplemento]["aper"] = $filas;

                $totales["vigente"]++;
            }
            elseif($uasignacion->situacionAsi == "TRAMITADO")
            {

                $vencimiento = strtotime($uasignacion->fsituacionAsi);
                $diferencia = $vencimiento - $ahora;

                $fila = [];
                $fila["ent"] = $entidades["e".$uasignacion->Entidad_idEntidad]["nom"];
                $fila["gru"] = $entidades["e".$uasignacion->Entidad_idEntidad]["gru"];
                $fila["cla"] = $entidades["e".$uasignacion->Entidad_idEntidad]["cla"];
                $fila["ven"] = $uasignacion->fsituacionAsi;
                $fila["ret"] = ($diferencia == 0) ? 0 : $diferencia/86400;

                if($vencimiento <= $ahora)//el documento tramitado ya paso su fecha de revision (urgente)
                {
                    $implementos["i".$uasignacion->Implemento_idImplemento]["urg"] += 1;
                                
                    $filas = $implementos["i".$uasignacion->Implemento_idImplemento]["aurg"];
                    $filas[] = $fila;
                    $implementos["i".$uasignacion->Implemento_idImplemento]["aurg"] = $filas;

                    $totales["vencido"]++;
                }
                else//aun no se vencio (aplazado)
                {
                    $implementos["i".$uasignacion->Implemento_idImplemento]["tra"] += 1;
                                
                    $filas = $implementos["i".$uasignacion->Implemento_idImplemento]["atra"];
                    $filas[] = $fila;
                    $implementos["i".$uasignacion->Implemento_idImplemento]["atra"] = $filas;

                    $totales["vigente"]++;
                }

            }
            elseif($uasignacion->situacionAsi == "APLAZADO")
            {        
                
                $vencimiento = strtotime($uasignacion->fsituacionAsi);
                $diferencia = $vencimiento - $ahora;

                $fila = [];
                $fila["ent"] = $entidades["e".$uasignacion->Entidad_idEntidad]["nom"];
                $fila["gru"] = $entidades["e".$uasignacion->Entidad_idEntidad]["gru"];
                $fila["cla"] = $entidades["e".$uasignacion->Entidad_idEntidad]["cla"];
                $fila["ven"] = $uasignacion->fsituacionAsi;
                $fila["ret"] = ($diferencia == 0) ? 0 : $diferencia/86400;

                if($vencimiento <= $ahora)//el documento tramitado ya paso su fecha de revision (urgente)
                {
                    $implementos["i".$uasignacion->Implemento_idImplemento]["urg"] += 1;
                                
                    $filas = $implementos["i".$uasignacion->Implemento_idImplemento]["aurg"];
                    $filas[] = $fila;
                    $implementos["i".$uasignacion->Implemento_idImplemento]["aurg"] = $filas;

                    $totales["vencido"]++;
                }
                else//aun no se vencio (aplazado)
                {
                    $implementos["i".$uasignacion->Implemento_idImplemento]["apl"] += 1;
                                
                    $filas = $implementos["i".$uasignacion->Implemento_idImplemento]["aapl"];
                    $filas[] = $fila;
                    $implementos["i".$uasignacion->Implemento_idImplemento]["aapl"] = $filas;

                    $totales["vigente"]++;
                }
            }
            else//documentos que si se renuevan
            {
                switch($validacion)
                {
                    case "KILOMETRAJE"://falta implementar
                        $vencimiento = $uasignacion->vencimientoAsi;
                        $aviso = $uasignacion->vencimientoAsi - $alerta;

                        $km_actual = 0;
                        if(isset($kilometrajes["k".$uasignacion->Entidad_idEntidad]))
                            $km_actual = $kilometrajes["k".$uasignacion->Entidad_idEntidad];
                        $diferencia = $vencimiento - $km_actual;

                        $fila = [];
                        $fila["ent"] = $entidades["e".$uasignacion->Entidad_idEntidad]["nom"];
                        $fila["gru"] = $entidades["e".$uasignacion->Entidad_idEntidad]["gru"];
                        $fila["cla"] = $entidades["e".$uasignacion->Entidad_idEntidad]["cla"];
                        $fila["ven"] = $uasignacion->vencimientoAsi;
                        $fila["ret"] = $diferencia;

                        
                        if($vencimiento <= $km_actual)//km se ha vencido
                        {
                            $implementos["i".$uasignacion->Implemento_idImplemento]["ven"] += 1;
                            
                            $filas = $implementos["i".$uasignacion->Implemento_idImplemento]["aven"];
                            $filas[] = $fila;
                            $implementos["i".$uasignacion->Implemento_idImplemento]["aven"] = $filas;    

                            $totales["vencido"]++;                        
                        }
                        elseif($vencimiento >= $km_actual && $aviso <= $km_actual)//el documento esta en alerta
                        {
                            $implementos["i".$uasignacion->Implemento_idImplemento]["ale"] += 1;

                            $filas = $implementos["i".$uasignacion->Implemento_idImplemento]["aale"];
                            $filas[] = $fila;
                            $implementos["i".$uasignacion->Implemento_idImplemento]["aale"] = $filas;

                            $totales["xvencer"]++;
                        }
                        else
                        {
                            $implementos["i".$uasignacion->Implemento_idImplemento]["vig"] += 1;

                            $filas = $implementos["i".$uasignacion->Implemento_idImplemento]["avig"];
                            $filas[] = $fila;
                            $implementos["i".$uasignacion->Implemento_idImplemento]["avig"] = $filas;

                            $totales["vigente"]++;
                        }
                    break;
                    case "FECHA":
                        $vencimiento = strtotime($uasignacion->fvencimientoAsi);
                        $aviso = strtotime($uasignacion->fvencimientoAsi."- ".$alerta." days");
                        $diferencia = $vencimiento - $ahora;

                        $fila = [];

                        $fila["ent"] = $entidades["e".$uasignacion->Entidad_idEntidad]["nom"];
                        $fila["gru"] = $entidades["e".$uasignacion->Entidad_idEntidad]["gru"];
                        $fila["cla"] = $entidades["e".$uasignacion->Entidad_idEntidad]["cla"];
                        $fila["ven"] = $uasignacion->fvencimientoAsi;
                        
                        $fila["ret"] = ($diferencia == 0) ? 0 : $diferencia/86400;

                        if($vencimiento <= $ahora)//el documento se ha vencido
                        {
                            $implementos["i".$uasignacion->Implemento_idImplemento]["ven"] += 1;
                            
                            $filas = $implementos["i".$uasignacion->Implemento_idImplemento]["aven"];
                            $filas[] = $fila;
                            $implementos["i".$uasignacion->Implemento_idImplemento]["aven"] = $filas;

                            $totales["vencido"]++;
                        }
                        elseif($vencimiento >= $ahora && $aviso <= $ahora)//el documento esta en alerta
                        {
                            $implementos["i".$uasignacion->Implemento_idImplemento]["ale"] += 1;

                            $filas = $implementos["i".$uasignacion->Implemento_idImplemento]["aale"];
                            $filas[] = $fila;
                            $implementos["i".$uasignacion->Implemento_idImplemento]["aale"] = $filas;

                            $totales["xvencer"]++;
                        }
                        else
                        {
                            $implementos["i".$uasignacion->Implemento_idImplemento]["vig"] += 1;

                            $filas = $implementos["i".$uasignacion->Implemento_idImplemento]["avig"];
                            $filas[] = $fila;
                            $implementos["i".$uasignacion->Implemento_idImplemento]["avig"] = $filas;

                            $totales["vigente"]++;
                        }
                    break;
                    case "CHECK"://falta implementar
                    break;
                    case "HOROMETRAJE"://falta implementar
                    break;
                    default:
                    break;
                }
            }
        }

        foreach($implementos as $uimplemento)
        {
            $grupos["g".$uimplemento->Grupo_idGrupo]["imp"][] = $uimplemento;
        }

        $totales["ptotal"] = 100;
        $totales["faltante"] = $totales["total"] - $totales["vigente"] - $totales["xvencer"] - $totales["vencido"];
        $totales["pvigente"] = round($totales["vigente"] * 100 / $totales["total"],2);
        $totales["pfaltante"] = round($totales["faltante"] * 100 / $totales["total"],2);
        $totales["pxvencer"] = round($totales["xvencer"] * 100 / $totales["total"],2);
        $totales["pvencido"] = round($totales["vencido"] * 100 / $totales["total"],2);

        $respuesta["grupos"] = $grupos;
        $respuesta["totales"] = $totales;
        return $respuesta;
    }
    public function Proyeccion($entidad,$area,$plantilla,$ejex,$ejey,$valores)
    {
        //ricardo
        //reporte de vencimiento proyectado
        $tabla = "";

        //CALULANDO EL EJE Y
        $arr_ejey = [];
        $x_ejey = [];//valores para que esten dentro del ejey
        $limite_inicial = "";//limite inicial de la distribucion de proyeccion del eje y
        $limite_final = "";//limite final de la distribucion de proyeccion del eje y
        $dias = ["","LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO","DOMINGO"];
        $meses = ["","ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"];
        switch($ejey)
        {
            case "DIAS"://30 registros
                $actual = date("Y-m-d");
                $limite_inicial = $actual;
                $arr_ejey["ini"] = ["i" => "Anterior","f" => $actual];
                $x_ejey["ini"] = [];

                for ($i=0; $i < 30; $i++)
                {
                    $fila = [];
                    $fila["i"] = $dias[date("N",strtotime($actual))];
                    $fila["f"] = $actual;

                    $arr_ejey["y".$actual] = $fila;
                    $x_ejey["y".$actual] = [];
                    if($i == 29)//setea el limite final antes que termine el for definitivamente
                    {
                        $limite_final = $actual;
                        $arr_ejey["fin"] = ["i" => "Posterior","f" => $actual];
                        $x_ejey["fin"] = [];
                    }
                    $actual = date("Y-m-d",strtotime($actual."+ 1 days")); 
                }
                break;
            case "SEMANAS":
                $dia_semana = date("N");//1 lunes - 7 domingo

                $actual = date("Y-m-d");
                $actual = date("Y-m-d",strtotime($actual."- ".($dia_semana-1)." days"));//domingo
                $limite_inicial = $actual;
                $arr_ejey["ini"] = ["i" => "Anterior","f" => $actual];
                $x_ejey["ini"] = [];

                for ($i=0; $i < 30; $i++)
                {
                    $inicio = $actual;
                    $fin = date("Y-m-d",strtotime($actual."+ 6 days")); 

                    $fila = [];
                    $fila["i"] = $inicio;
                    $fila["f"] = $fin;

                    $nro_semana = date("W",strtotime($inicio));//el día inicio en lunes
                    $arr_ejey["y".$nro_semana] = $fila;
                    $x_ejey["y".$nro_semana] = [];
                    if($i == 29)//setea el limite final antes que termine el for definitivamente
                    {
                        $limite_final = $fin;
                        $arr_ejey["fin"] = ["i" => "Posterior","f" => $fin];
                        $x_ejey["fin"] = [];
                    }
                    $actual = date("Y-m-d",strtotime($fin."+ 1 days"));
                }
                break;
            case "MESES":
                $actual = date("Y-m")."-01";
                $limite_inicial = $actual;
                $arr_ejey["ini"] = ["i" => "Anterior","f" => $actual];
                $x_ejey["ini"] = [];

                for ($i=0; $i < 12; $i++)
                {
                    $inicio = $actual;
                    $dia_total = date("t", strtotime($inicio));
                    $fin = date("Y-m-d",strtotime($actual."+ ".($dia_total-1)." days"));

                    $fila = [];
                    $fila["i"] = date("Y",strtotime($fin));
                    $fila["f"] = $meses[date("n",strtotime($fin))];

                    //$arr_ejey[] = $fila;
                    $mes_anio = date("Y-m",strtotime($inicio));
                    $arr_ejey["y".$mes_anio] = $fila;
                    $x_ejey["y".$mes_anio] = [];
                    if($i == 11)//setea el limite final antes que termine el for definitivamente
                    {
                        $limite_final = $fin;
                        $arr_ejey["fin"] = ["i" => "Posterior","f" => $fin];
                        $x_ejey["fin"] = [];
                    }
                    $actual = date("Y-m-d",strtotime($fin."+ 1 days"));
                    //echo date("d-m-Y",strtotime($fecha_actual."+ 1 month")); 
                }
                break;
        }
        
        $limite_inicial = strtotime($limite_inicial);
        $limite_final = strtotime($limite_final);
        

        //CALULANDO EL EJE X
        $obj_entidad = Dato::select('valorDat')
            ->where('idDato',$entidad)
            ->first();

        $arr_entidades = [];

        switch($obj_entidad->valorDat)
        {
            case "VEHICULO":
                $arr_entidades = Entidad::select('idEntidad','nombreEnt','tmodelo.valorDat as clase','ttipo.valorDat as grupo','ttipo.idDato as igrupo','idVehiculo','grupoVeh','kmpromedioVeh')
                    ->join('vehiculo','vehiculo.idVehiculo','entidad.Entidad_idExterno')
                    ->join('dato as tmodelo','tmodelo.idDato','vehiculo.Modelo_idDato')
                    ->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')
                    ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    ->where('Plantilla_idPlantilla',$plantilla)
                    ->where('estadoHom',"ACTIVO")
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break;
            case "PERSONA":
                $arr_entidades = Entidad::select('idEntidad','nombreEnt','cargo.nombreCar as clase','area.nombreAre as grupo','area.idArea as igrupo')
                    ->join('persona','persona.idPersona','entidad.Entidad_idExterno')
                    ->join('area','area.idArea','persona.Area_idArea')
                    ->join('cargo','cargo.idCargo','persona.Cargo_idCargo')
                    ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    ->where('Plantilla_idPlantilla',$plantilla)
                    ->where('estadoHom',"ACTIVO")
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break;
            default://ACTIVO,ALMACEN,AREA,EXTERNO,OTRO
                $arr_entidades = Entidad::select('idEntidad','nombreEnt')
                    ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    ->where('Plantilla_idPlantilla',$plantilla)
                    ->where('estadoHom',"ACTIVO")
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break; 
        }
        
        $entidades = [];
        $nentidades = [];
        $eids = [];
        $vids = [];
        $kilometrajes = [];
        $tot_entidades = count($arr_entidades);

        foreach($arr_entidades as $uentidad)
        {
            $eids["v".$uentidad->idVehiculo] = $uentidad->idEntidad;
            if($uentidad->grupoVeh == "PESADA" || $uentidad->grupoVeh == "LIVIANA")
                $vids[] = $uentidad->idVehiculo;

            $entidad = [];
            $entidad["id"] = $uentidad->idEntidad;
            $entidad["nom"] = $uentidad->nombreEnt;
            $entidad["gru"] = $uentidad->igrupo;
            $entidad["cla"] = $uentidad->clase;
            $entidad["pro"] = $uentidad->kmpromedioVeh;
            $entidad["act"] = 0;

            $entidades["e".$uentidad->idEntidad] = $entidad;
            $nentidades["n".$uentidad->idEntidad] = $uentidad->nombreEnt;
        }
        /********************************************************************/
        //BUSCA EL ULTIMO KILOMETRAJE POR VEHICULO Y LO AÑADE A LA ENTIDAD ASIGNADA
        
        if($obj_entidad->valorDat == "VEHICULO")
        {
            foreach($vids as $llave => $uid)
            {
                $obj_kilometraje = Kilometraje::select('fechaKil','kilometrajeKil')
                    ->where('Vehiculo_idVehiculo',$uid)
                    ->where('activoKil',1)
                    ->orderBy('kilometrajeKil','DESC')
                    ->first();

                if (!$obj_kilometraje)
                {
                    $kilometrajes["k".$eids["v".$uid]] = ["km" => 0, "fec" => ""];
                }
                else
                {
                    $kilometrajes["k".$eids["v".$uid]] = ["km" => $obj_kilometraje->kilometrajeKil, "fec" => $obj_kilometraje->fechaKil];
                    $entidades["e".$eids["v".$uid]]["act"] = $obj_kilometraje->kilometrajeKil;
                }
            }
        }

        //GENERANDO LA ESTRUCTURA DE IMPLEMENTOS QUE IRAN DENTRO DE LOS GRUPOS
        //obtiene los implementos amarrados a una plantilla
        $arr_implementos = Implemento::select(
            'idImplemento','nombreImp','Grupo_idGrupo','renovableImp','tipoImp',
            'validacionDis','alertaDis',
            'nombreGru',
            )//'implemento.*','distribucion.*')
            ->join('distribucion','distribucion.Implemento_idImplemento','implemento.idImplemento')
            ->join('grupo','grupo.idGrupo','implemento.Grupo_idGrupo')
            ->where('activoImp',1)
            ->where('estadoDis','ACTIVO')
            ->where('Plantilla_idPlantilla',$plantilla)
            ->get();

        /*******/
        $iids = [];
        $implementos = [];
        $nimplementos = [];
        //$grupos = [];
        $parametros = [];

        foreach($arr_implementos as $uimplemento)
        {
            /*if(!isset($grupos["g".$uimplemento->Grupo_idGrupo]))//crea el grupo si no existe en el array
            {
                $grupo = [];
                $grupo["gru"] = $uimplemento->nombreGru;
                $grupo["id"] = $uimplemento->Grupo_idGrupo;
                $grupo["imp"] = [];

                $grupos["g".$uimplemento->Grupo_idGrupo] = $grupo;    
            }*/
            
            $iids[] = $uimplemento->idImplemento;

            $parametros["i".$uimplemento->idImplemento] = $uimplemento;

            $implemento = [];
            $implemento["id"] = $uimplemento->idImplemento;
            $implemento["nom"] = $uimplemento->nombreImp;

            $implementos["i".$uimplemento->idImplemento] = $implemento;
            $nimplementos["n".$uimplemento->idImplemento] = $uimplemento->nombreImp;
        }


        //SE ASIGNAN LOS EJES A QUIEN DEBERÍA ASIGNARSE PARA PODER VER QUIEN ES EL QUE HARÁ DE LÍNEA BASE
        $arr_ejex = [];
        $eje_entidad = "";
        $eje_implemento = "";
        $arr_ejez = [];

        if($ejex == "IMPLEMENTO")
        {
            foreach($implementos as $uimplemento)
            {
                $uimplemento["y"] = $x_ejey;
                $arr_ejex["x".$uimplemento["id"]] = $uimplemento;
                $arr_ejez = $nentidades;

                $eje_implemento = "ejex";
                $eje_entidad = "ejey";
            }
        }
        elseif($ejex == "ENTIDAD")
        {
            foreach($entidades as $uentidad)
            {
                $uentidad["y"] = $x_ejey;
                $arr_ejex["x".$uentidad["id"]] = $uentidad;
                $arr_ejez = $nimplementos;

                $eje_entidad = "ejex";
                $eje_implemento = "ejey";
            }
        }

        //OBTENIENDO LA DATA DE ASIGNACIONES Y ASIGNANDOLA AL ARRAY DE IMPLEMENTOS
        $hoy = date("Y-m-d");
        $ahora = strtotime($hoy);
        
        $arr_asignaciones = Asignacion::select('asignacion.*','Entidad_idEntidad as '.$eje_entidad,'Implemento_idImplemento as '.$eje_implemento)
            ->whereIn('Entidad_idEntidad',$eids)
            ->whereIn('Implemento_idImplemento',$iids)
            ->where('estadoAsi','VIGENTE')
            ->get();
            
        //$situaciones = "";
        foreach($arr_asignaciones as $uasignacion)
        {
            $renovable = $parametros["i".$uasignacion->Implemento_idImplemento]->renovableImp;
            $tipo = $parametros["i".$uasignacion->Implemento_idImplemento]->tipoImp;//activo,consumible,documento,actividad,check
            $validacion = $parametros["i".$uasignacion->Implemento_idImplemento]->validacionDis;//ninguna,kilometraje,fecha,check,horometraje
            $alerta = $parametros["i".$uasignacion->Implemento_idImplemento]->alertaDis;

            /*$implementos["i".$uasignacion->Implemento_idImplemento]["enc"] += 1;
            $implementos["i".$uasignacion->Implemento_idImplemento]["fal"] -= 1;*/

            /*$filas = $implementos["i".$uasignacion->Implemento_idImplemento]["afal"];
            unset($filas["e".$uasignacion->Entidad_idEntidad]);
            $implementos["i".$uasignacion->Implemento_idImplemento]["afal"] = $filas;*/

            $vencimiento = "";
            $elemento["nom"] = $arr_ejez["n".$uasignacion->ejey];
            
            //$elemento["ven"] = $vencimiento;
            //$elemento[] = ;

            if($renovable <> 1)//documento no se renueva
            {
                //VERIFICAR SI SE MOSTRARAN LOS PERMAMENTES 
                /*$fila = [];
                $fila["ent"] = $entidades["e".$uasignacion->Entidad_idEntidad]["nom"];
                $fila["gru"] = $entidades["e".$uasignacion->Entidad_idEntidad]["gru"];
                $fila["cla"] = $entidades["e".$uasignacion->Entidad_idEntidad]["cla"];

                $implementos["i".$uasignacion->Implemento_idImplemento]["per"] += 1;
                 
                $filas = $implementos["i".$uasignacion->Implemento_idImplemento]["aper"];
                $filas[] = $fila;
                $implementos["i".$uasignacion->Implemento_idImplemento]["aper"] = $filas;*/
            }
            elseif($uasignacion->situacionAsi == "TRAMITADO")
            {
                if($valores == "REAL")//SE CALCULA EN LA FECHA REAL DEL VENCIMIENTO
                {
                    $vencimiento = strtotime($uasignacion->fsituacionAsi);
                }
                elseif($valores == "ANTICIPADO")//SE CALCULA LA ALERTA
                {
                    if($validacion == "FECHA")
                        $vencimiento = strtotime($uasignacion->fsituacionAsi."- ".$alerta." days");
                    else//SI HUBIERAN OTROS TIPOS DE VALIDACION QUE NO SEAN DE FECHA
                        $vencimiento = strtotime($uasignacion->fsituacionAsi."- 10 days");
                }

                $elemento["ven"] = date("Y-m-d",$vencimiento);

                if($vencimiento < $limite_inicial)//SI ESTA ANTERIOR
                {
                    $arr_ejex["x".$uasignacion->ejex]["y"]["ini"][] = $elemento;
                }
                elseif($vencimiento > $limite_final)//SI ESTA POSTERIOR
                {
                    $arr_ejex["x".$uasignacion->ejex]["y"]["fin"][] = $elemento;
                }
                else
                {
                    switch($ejey)
                    {
                        case "DIAS"://30 registros
                            $vencimiento = date("Y-m-d",$vencimiento);
                            $arr_ejex["x".$uasignacion->ejex]["y"]["y".$vencimiento][] = $elemento;
                            break;
                        case "SEMANAS":
                            $nro_semana = date("W",$vencimiento);//el día inicio en lunes
                            $arr_ejex["x".$uasignacion->ejex]["y"]["y".$nro_semana][] = $elemento;
                            break;
                        case "MESES":
                            $mes_anio = date("Y-m",$vencimiento);
                            $arr_ejex["x".$uasignacion->ejex]["y"]["y".$mes_anio][] = $elemento;
                            break;
                    }            
                }
            }
            elseif($uasignacion->situacionAsi == "APLAZADO")
            {        
                if($valores == "REAL")//SE CALCULA EN LA FECHA REAL DEL VENCIMIENTO
                {
                    $vencimiento = strtotime($uasignacion->fsituacionAsi);
                }
                elseif($valores == "ANTICIPADO")//SE CALCULA LA ALERTA
                {
                    if($validacion == "FECHA")
                        $vencimiento = strtotime($uasignacion->fsituacionAsi."- ".$alerta." days");
                    else//SI HUBIERAN OTROS TIPOS DE VALIDACION QUE NO SEAN DE FECHA
                        $vencimiento = strtotime($uasignacion->fsituacionAsi."- 10 days");
                }

                $elemento["ven"] = date("Y-m-d",$vencimiento);

                if($vencimiento < $limite_inicial)//SI ESTA ANTERIOR
                {
                    $arr_ejex["x".$uasignacion->ejex]["y"]["ini"][] = $elemento;
                }
                elseif($vencimiento > $limite_final)//SI ESTA POSTERIOR
                {
                    $arr_ejex["x".$uasignacion->ejex]["y"]["fin"][] = $elemento;
                }
                else
                {
                    switch($ejey)
                    {
                        case "DIAS"://30 registros
                            $vencimiento = date("Y-m-d",$vencimiento);
                            $arr_ejex["x".$uasignacion->ejex]["y"]["y".$vencimiento][] = $elemento;
                            break;
                        case "SEMANAS":
                            $nro_semana = date("W",$vencimiento);//el día inicio en lunes
                            $arr_ejex["x".$uasignacion->ejex]["y"]["y".$nro_semana][] = $elemento;
                            break;
                        case "MESES":
                            $mes_anio = date("Y-m",$vencimiento);
                            $arr_ejex["x".$uasignacion->ejex]["y"]["y".$mes_anio][] = $elemento;
                            break;
                    }            
                }
            }
            else//documentos que si se renuevan
            {
                switch($validacion)
                {
                    case "KILOMETRAJE"://falta implementar
                        $km_vencimiento = 0;
                        $km_dia = $entidades["e".$uasignacion->Entidad_idEntidad]["pro"];

                        if($km_dia == null || $km_dia == 0)
                            $km_dia = 1;
                        $km_actual = 0;
                        $km_fecha = 0;

                        if($valores == "REAL")//SE CALCULA EN LA FECHA REAL DEL VENCIMIENTO
                        {
                            $km_vencimiento = $uasignacion->vencimientoAsi;
                        }
                        elseif($valores == "ANTICIPADO")//SE CALCULA LA ALERTA
                        {
                            $km_vencimiento = $uasignacion->vencimientoAsi - $alerta;
                        }

                        
                        if(isset($kilometrajes["k".$uasignacion->Entidad_idEntidad]))
                        {
                            $km_actual = $kilometrajes["k".$uasignacion->Entidad_idEntidad]["km"];
                            $km_fecha = $kilometrajes["k".$uasignacion->Entidad_idEntidad]["fec"];
                        }

                        $diferencia = $km_vencimiento - $km_actual;
                        $indice = round($diferencia/$km_dia);

                        if($indice > 0)
                            $vencimiento = strtotime($km_fecha."+ ".$indice." days");
                        else
                        {
                            $indice = $indice * (-1);
                            $vencimiento = strtotime($km_fecha."- ".$indice." days");
                        }
                        

                        $elemento["ven"] = date("Y-m-d",$vencimiento);
                        $elemento["km"] = $uasignacion->vencimientoAsi;

                        if($vencimiento < $limite_inicial)//SI ESTA ANTERIOR
                        {
                            $arr_ejex["x".$uasignacion->ejex]["y"]["ini"][] = $elemento;//ponerlo en el nombreencontrado
                        }
                        elseif($vencimiento > $limite_final)//SI ESTA POSTERIOR
                        {
                            $arr_ejex["x".$uasignacion->ejex]["y"]["fin"][] = $elemento;//ponerlo en el nombreencontrado
                        }
                        else
                        {
                            switch($ejey)
                            {
                                case "DIAS"://30 registros
                                    $vencimiento = date("Y-m-d",$vencimiento);
                                    $arr_ejex["x".$uasignacion->ejex]["y"]["y".$vencimiento][] = $elemento;//ponerlo en el nombreencontrado
                                    break;
                                case "SEMANAS":
                                    $nro_semana = date("W",$vencimiento);//el día inicio en lunes
                                    $arr_ejex["x".$uasignacion->ejex]["y"]["y".$nro_semana][] = $elemento;//ponerlo en el nombreencontrado
                                    break;
                                case "MESES":
                                    $mes_anio = date("Y-m",$vencimiento);
                                    $arr_ejex["x".$uasignacion->ejex]["y"]["y".$mes_anio][] = $elemento;//ponerlo en el nombreencontrado
                                    break;
                            }            
                        }

                    break;
                    case "FECHA":
                        if($valores == "REAL")//SE CALCULA EN LA FECHA REAL DEL VENCIMIENTO
                        {
                            $vencimiento = strtotime($uasignacion->fvencimientoAsi);
                        }
                        elseif($valores == "ANTICIPADO")//SE CALCULA LA ALERTA
                        {
                            $vencimiento = strtotime($uasignacion->fvencimientoAsi."- ".$alerta." days");
                        }

                        $elemento["ven"] = date("Y-m-d",$vencimiento);

                        if($vencimiento < $limite_inicial)//SI ESTA ANTERIOR
                        {
                            $arr_ejex["x".$uasignacion->ejex]["y"]["ini"][] = $elemento;
                        }
                        elseif($vencimiento > $limite_final)//SI ESTA POSTERIOR
                        {
                            $arr_ejex["x".$uasignacion->ejex]["y"]["fin"][] = $elemento;
                        }
                        else
                        {
                            switch($ejey)
                            {
                                case "DIAS"://30 registros
                                    $vencimiento = date("Y-m-d",$vencimiento);
                                    $arr_ejex["x".$uasignacion->ejex]["y"]["y".$vencimiento][] = $elemento;
                                    break;
                                case "SEMANAS":
                                    $nro_semana = date("W",$vencimiento);//el día inicio en lunes
                                    $arr_ejex["x".$uasignacion->ejex]["y"]["y".$nro_semana][] = $elemento;
                                    break;
                                case "MESES":
                                    $mes_anio = date("Y-m",$vencimiento);
                                    $arr_ejex["x".$uasignacion->ejex]["y"]["y".$mes_anio][] = $elemento;
                                    break;
                            }            
                        }
                    break;
                    case "CHECK"://falta implementar
                    break;
                    case "HOROMETRAJE"://falta implementar
                    break;
                    default:
                    break;
                }
            }
        }

        $respuesta["arr_ejey"] = $arr_ejey; 
        $respuesta["arr_ejex"] = $arr_ejex;
        return $respuesta;

        foreach($implementos as $uimplemento)
        {
            $grupos["g".$uimplemento->Grupo_idGrupo]["imp"][] = $uimplemento;
        }

        return $grupos;
    }
    public function PdfHistorial($entidad,$area,$plantilla,$ejex,$valorz)
    {
        //ricardo
        //reporte de vencimiento proyectado
        //usa la plantilla, el tipo de ejex (implemento o entidad) y el valor de la entidad
        $tabla = "";


        $filas = [];
        $arr_asignaciones = [];

        if($ejex == "IMPLEMENTO")
        {
            $arr_implementos = Implemento::select(
                'idImplemento','nombreImp','Grupo_idGrupo','renovableImp','tipoImp',
                'validacionDis','alertaDis',
                'nombreGru',
                )//'implemento.*','distribucion.*')
                ->join('distribucion','distribucion.Implemento_idImplemento','implemento.idImplemento')
                ->join('grupo','grupo.idGrupo','implemento.Grupo_idGrupo')
                ->where('activoImp',1)
                ->where('estadoDis','ACTIVO')
                ->where('Plantilla_idPlantilla',$plantilla)
                ->get();

            $iids = [];

            foreach($arr_implementos as $uimplemento)
            {
                $iids[] = $uimplemento->idImplemento;

                $fila = [];
                $fila["nom"] = $uimplemento->nombreImp;
                $fila["asi"] = [];

                $filas["x".$uimplemento->idImplemento] = $fila;
            }

            $arr_asignaciones = Asignacion::select('asignacion.*','trabajo.*')
                ->join('backlog','backlog.Origen_idOrigen','asignacion.idAsignacion')
                ->join('trabajo','trabajo.Backlog_idBacklog','backlog.idBacklog')
                ->where('tipoBac','PREVENTIVO')
                ->where('Entidad_idEntidad',$valorz)
                ->whereIn('Implemento_idImplemento',$iids)
                ->whereIn('estadoAsi',['CADUCO','VIGENTE'])
                ->get();

            /*$arr_asignaciones = Asignacion::select('asignacion.*','trabajo.*')
                ->join('backlog','backlog.Origen_idOrigen','asignacion.idAsignacion')
                ->join('trabajo','trabajo.Backlog_idBacklog','backlog.idBacklog')
                ->where('tipoBac','PREVENTIVO')
                ->whereIn('Entidad_idEntidad',$eids)
                ->where('Implemento_idImplemento',$valorz)
                ->whereIn('estadoAsi',['CADUCO','VIGENTE'])
                ->get();*/
        }
        elseif($ejex == "ENTIDAD")
        {
             //CALULANDO EL EJE X
            $obj_entidad = Dato::select('valorDat')
                ->where('idDato',$entidad)
                ->first();

            $arr_entidades = [];

            switch($obj_entidad->valorDat)
            {
                case "VEHICULO":
                    $arr_entidades = Entidad::select('idEntidad','nombreEnt','tmodelo.valorDat as clase','ttipo.valorDat as grupo','ttipo.idDato as igrupo','idVehiculo','grupoVeh','kmpromedioVeh')
                        ->join('vehiculo','vehiculo.idVehiculo','entidad.Entidad_idExterno')
                        ->join('dato as tmodelo','tmodelo.idDato','vehiculo.Modelo_idDato')
                        ->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')
                        ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                        ->where('activoEnt',1)
                        ->where('Entidad_idDato',$entidad)
                        ->where('Plantilla_idPlantilla',$plantilla)
                        ->where('estadoHom',"ACTIVO")
                        ->orderBy('nombreEnt','asc')
                        ->get();
                    break;
                case "PERSONA":
                    $arr_entidades = Entidad::select('idEntidad','nombreEnt','cargo.nombreCar as clase','area.nombreAre as grupo','area.idArea as igrupo')
                        ->join('persona','persona.idPersona','entidad.Entidad_idExterno')
                        ->join('area','area.idArea','persona.Area_idArea')
                        ->join('cargo','cargo.idCargo','persona.Cargo_idCargo')
                        ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                        ->where('activoEnt',1)
                        ->where('Entidad_idDato',$entidad)
                        ->where('Plantilla_idPlantilla',$plantilla)
                        ->where('estadoHom',"ACTIVO")
                        ->orderBy('nombreEnt','asc')
                        ->get();
                    break;
                default://ACTIVO,ALMACEN,AREA,EXTERNO,OTRO
                    $arr_entidades = Entidad::select('idEntidad','nombreEnt')
                        ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                        ->where('activoEnt',1)
                        ->where('Entidad_idDato',$entidad)
                        ->where('Plantilla_idPlantilla',$plantilla)
                        ->where('estadoHom',"ACTIVO")
                        ->orderBy('nombreEnt','asc')
                        ->get();
                    break; 
            }
            $eids = [];
            foreach($arr_entidades as $uentidad)
            {
                $eids[] = $uentidad->idEntidad;
            }

            $arr_asignaciones = Asignacion::select('asignacion.*','trabajo.*')
                ->join('backlog','backlog.Origen_idOrigen','asignacion.idAsignacion')
                ->join('trabajo','trabajo.Backlog_idBacklog','backlog.idBacklog')
                ->where('tipoBac','PREVENTIVO')
                ->whereIn('Entidad_idEntidad',$eids)
                ->where('Implemento_idImplemento',$valorz)
                ->whereIn('estadoAsi',['CADUCO','VIGENTE'])
                ->get();
        }

        $fechas = [];

        foreach($arr_asignaciones as $uasignacion)
        {
            $fechas[] = $uasignacion->fechaTra;
        }

        sort($fechas, SORT_STRING);
        $fechas = array_unique($fechas);

        $arr_fechas = [];
        foreach($fechas as $ufecha)
        {
            $arr_fechas[$ufecha] = [];
        }

        foreach($filas as $llave => $ufila)
        {
            $filas[$llave]["asi"] = $arr_fechas;
        }

        foreach($arr_asignaciones as $uasignacion)
        {
            $filas["x".$uasignacion->Implemento_idImplemento]["asi"][$uasignacion->fechaTra] = $uasignacion->vencimientoAsi;
        }

        $data["cabecera"] = $fechas;
        $data["cuerpo"] = $arr_fechas;
        //$data["cuerpo"] = $obj_cuerpo;
        //return $data;
        $pdf=PDF::loadView('Pdfs.Gestion.Historial', $data); 
        $pdf->setPaper('A4', 'portrait');
        //return $pdf->stream();
        /*$rutaPDF = public_path('archivos/operaciones')."/vehiculo.pdf";
        $pdf->save($rutaPDF);
        unlink($rutaPDF); //Eliminar Archivo*/
        return $pdf->stream();


    }
    public function PdfActaEntrega($hora)
    {

        $obj_asignaciones = Asignacion::select('asignacion.*','nombreEnt','nombreUsu','dniPer','nombreCar','nombreGru','nombreImp',)
            ->join('entidad','entidad.idEntidad','=','asignacion.Entidad_idEntidad')
            ->leftJoin('persona','persona.idPersona','=','entidad.Entidad_idExterno')
            ->leftJoin('usuario','usuario.Persona_idPersona','=','persona.idPersona')
            ->join('cargo','cargo.idCargo','=','persona.Cargo_idCargo')
            ->join('implemento','idImplemento','=','asignacion.Implemento_idImplemento')
            ->join('grupo','grupo.idGrupo','=','implemento.Grupo_idGrupo')
            ->where('fcreacionAsi', $hora)
            ->get();

        /*$obj_cuerpo = Asignacion::select('idAsignacion','femisionAsi','fvencimientoAsi','tipoAsi','montoAsi','situacionAsi',
                                          'estadoAsi','nombreEnt','fvencimientoAsi')
            ->join('entidad','entidad.idEntidad','=','asignacion.Entidad_idEntidad')
            
            ->where('Ordenc_idOrdenc', $id)
            ->get();*/




        $entidades = [];

        foreach($obj_asignaciones as $uasignacion)
        {
            $asignacion = [];
            $asignacion["gru"] = $uasignacion->nombreGru;
            $asignacion["imp"] = $uasignacion->nombreImp;
            $asignacion["ven"] = $uasignacion->fvencimientoAsi;
            $asignacion["mot"] = "";
            $asignacion["obs"] = "";

            if(!isset($entidades["e".$uasignacion->Entidad_idEntidad]))
            {
                $entidad = [];
                $entidad["nom"] = $uasignacion->nombreEnt;
                $entidad["dni"] = $uasignacion->dniPer;
                $entidad["car"] = $uasignacion->nombreCar;
                $entidad["fec"] = $uasignacion->fcreacionAsi;
                $entidad["asi"] = [];

                $entidades["e".$uasignacion->Entidad_idEntidad] = $entidad;
            }
            $entidades["e".$uasignacion->Entidad_idEntidad]["asi"][] = $asignacion;
        }


        
        /*$obj_cabecera = Asignacion::select('nombreUsu','dniPer','nombreCar','femisionAsi')
            ->join('entidad','entidad.idEntidad','=','asignacion.Entidad_idEntidad')
            ->join('usuario','usuario.Persona_idPersona','=','entidad.Entidad_idExterno')
            ->join('persona','persona.idPersona','=','usuario.Persona_idPersona')
            ->join('cargo','cargo.idCargo','=','persona.Cargo_idCargo')
            ->where('Ordenc_idOrdenc', $id)
            ->first();*/

        /*$obj_cabecera = Asignacion::select(DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS nombreUsu'),
                                                   'dniPer','nombreCar','femisionAsi')
            ->join('entidad','entidad.idEntidad','=','asignacion.Entidad_idEntidad')
            ->join('persona','persona.idPersona','=','entidad.Entidad_idExterno')
            ->join('cargo','cargo.idCargo','=','persona.Cargo_idCargo')
            ->where('Ordenc_idOrdenc', $id)
            ->first();


        $obj_cuerpo = Asignacion::select('idAsignacion','femisionAsi','fvencimientoAsi','tipoAsi','montoAsi','situacionAsi',
                                          'estadoAsi','nombreEnt','nombreGru','nombreImp','fvencimientoAsi')
            ->join('entidad','entidad.idEntidad','=','asignacion.Entidad_idEntidad')
            ->join('implemento','idImplemento','=','asignacion.Implemento_idImplemento')
            ->join('grupo','grupo.idGrupo','=','implemento.Grupo_idGrupo')
            ->where('Ordenc_idOrdenc', $id)
            ->get();*/

        /*$cabecera = []; 
        $cuerpo = []; 
        $data = [];*/

        $data["entidades"] = $entidades;
        //$data["cuerpo"] = $obj_cuerpo;
        //return $data;
        $pdf=PDF::loadView('Pdfs.Gestion.Actaentrega', $data); 
        $pdf->setPaper('A4', 'portrait');
        //return $pdf->stream();
        /*$rutaPDF = public_path('archivos/operaciones')."/vehiculo.pdf";
        $pdf->save($rutaPDF);
        unlink($rutaPDF); //Eliminar Archivo*/
        return $pdf->stream();
        //return $pdf->save("ejemplo.pdf");
        //return $pdf->download($guardarPDF);
    }

    public function CargaMasivo( Request $request )
    {
        $ids = [];
        $asignacion = json_decode($request->asignacion);
        $cabecera = json_decode($request->masivo); 

        foreach ( $asignacion as $uasignacion ) 
        { 
            $obj_asignacion = (object)[];
            $obj_asignacion->nroAsi = $cabecera->nroAsi;
            $obj_asignacion->fvencimientoAsi = ($cabecera->fvencimientoAsi == "") ? null : $cabecera->fvencimientoAsi;
            Asignacion::where('idAsignacion', $uasignacion->idAsignacion)->update((array)$obj_asignacion);
            $ids[] = $uasignacion->idAsignacion;
        }

        return $ids;

    }



    public function ExportarVencimiento($entidad,$area)
    {
        set_time_limit(0);
        ini_set('memory_limit', '-1');
        //ricardo
        //reporte de vencimiento actual
        $tabla = "";


        //OBTENIENDO LOS INVOLUCRADOS PARA JALAR SUS IMPLEMENTOS
        $obj_entidad = Dato::select('valorDat')
            ->where('idDato',$entidad)
            ->first();

        $arr_entidades = [];

        switch($obj_entidad->valorDat)
        {
            case "VEHICULO":
                $arr_entidades = Entidad::select('idEntidad','nombreEnt','tmodelo.valorDat as clase','ttipo.valorDat as grupo','ttipo.valorDat as igrupo','idVehiculo','grupoVeh')
                    ->join('vehiculo','vehiculo.idVehiculo','entidad.Entidad_idExterno')
                    ->join('dato as tmodelo','tmodelo.idDato','vehiculo.Modelo_idDato')
                    ->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')
                    ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    //->where('Plantilla_idPlantilla',$plantilla)
                    ->where('estadoHom',"ACTIVO")
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break;
            case "PERSONA":
                $arr_entidades = Entidad::select('idEntidad','nombreEnt','cargo.nombreCar as clase','area.nombreAre as grupo','area.idArea as igrupo')
                    ->join('persona','persona.idPersona','entidad.Entidad_idExterno')
                    ->join('area','area.idArea','persona.Area_idArea')
                    ->join('cargo','cargo.idCargo','persona.Cargo_idCargo')
                    ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    //->where('Plantilla_idPlantilla',$plantilla)
                    ->where('estadoHom',"ACTIVO")
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break;
            default://ACTIVO,ALMACEN,AREA,EXTERNO,OTRO
                $arr_entidades = Entidad::select('idEntidad','nombreEnt')
                    ->join('homologacion','homologacion.Entidad_idEntidad','entidad.idEntidad')
                    ->where('activoEnt',1)
                    ->where('Entidad_idDato',$entidad)
                    //->where('Plantilla_idPlantilla',$plantilla)
                    ->where('estadoHom',"ACTIVO")
                    ->orderBy('nombreEnt','asc')
                    ->get();
                break; 
        }
        
        $entidades = [];
        $eids = [];
        $vids = [];
        $kilometrajes = [];
        $tot_entidades = count($arr_entidades);

        foreach($arr_entidades as $uentidad)
        {
            $eids[] = $uentidad->idEntidad;
            if($uentidad->grupoVeh == "PESADA" || $uentidad->grupoVeh == "LIVIANA")
            {
                $vids[] = $uentidad->idVehiculo;
                $veids["ve".$uentidad->idVehiculo] = $uentidad->idEntidad;
            }   

            $entidad = [];
            $entidad["id"] = $uentidad->idEntidad;
            $entidad["nom"] = $uentidad->nombreEnt;
            $entidad["ent"] = $uentidad->nombreEnt;
            $entidad["gru"] = $uentidad->igrupo;
            $entidad["cla"] = $uentidad->clase;

            $entidades["e".$uentidad->idEntidad] = $entidad;
        }
        /********************************************************************/
        //BUSCA EL ULTIMO KILOMETRAJE POR VEHICULO Y LO AÑADE A LA ENTIDAD ASIGNADA
        
        if($obj_entidad->valorDat == "VEHICULO")
        {
            foreach($vids as $llave => $uid)
            {
                $obj_kilometraje = Kilometraje::select('fechaKil','kilometrajeKil','Vehiculo_idVehiculo')
                    ->where('Vehiculo_idVehiculo',$uid)
                    //->whereRaw('(tipoKil = "MOVIL" OR tipoKil is null)')
                    ->where('activoKil',1)
                    ->orderBy('kilometrajeKil','DESC')
                    ->first();

                if (!$obj_kilometraje)
                {
                    $kilometrajes["k".$veids["ve".$uid]] = 0;
                }
                else
                {
                    $kilometrajes["k".$veids["ve".$uid]] = $obj_kilometraje->kilometrajeKil;    
                }                
            }
        }

        //GENERANDO LA ESTRUCTURA DE IMPLEMENTOS QUE IRAN DENTRO DE LOS GRUPOS
        //obtiene los implementos amarrados a una plantilla
        /*$arr_implementos = Implemento::select(
            'idImplemento','nombreImp','Grupo_idGrupo','renovableImp','tipoImp',
            'validacionDis','alertaDis',
            'nombreGru','nombrePla'
            )//'implemento.*','distribucion.*')
            ->join('distribucion','distribucion.Implemento_idImplemento','implemento.idImplemento')
            ->join('plantilla','plantilla.idPlantilla','distribucion.Plantilla_idPlantilla')
            ->join('grupo','grupo.idGrupo','implemento.Grupo_idGrupo')
            ->where('activoImp',1)
            ->where('estadoDis','ACTIVO')
            //->where('Plantilla_idPlantilla',$plantilla)
            ->get();*/

        $arr_implementos = Implemento::select(
            'idImplemento','nombreImp','Grupo_idGrupo','renovableImp','tipoImp',
            'validacionDis','alertaDis',
            'nombreGru','nombrePla'
            )//'implemento.*','distribucion.*')
            ->join('distribucion','distribucion.Implemento_idImplemento','implemento.idImplemento')
            ->join('plantilla','plantilla.idPlantilla','distribucion.Plantilla_idPlantilla')
            ->join('grupo','grupo.idGrupo','implemento.Grupo_idGrupo')
            ->where('activoImp',1)
            ->where('estadoDis','ACTIVO')
            ->where('plantilla.Area_idArea',$area)
            //->where('Plantilla_idPlantilla',$plantilla)
            ->get();

        $iids = [];
        $implementos = [];
        $grupos = [];
        $parametros = [];

        foreach($arr_implementos as $uimplemento)
        {
            if(!isset($parametros["i".$uimplemento->idImplemento]))
            {
                $parametro = [];
                $parametro["renovable"] = $uimplemento->renovableImp;
                $parametro["tipo"] = $uimplemento->tipoImp;
                $parametro["validacion"] = $uimplemento->validacionDis;
                $parametro["alerta"] = $uimplemento->alertaDis;

                $parametros["i".$uimplemento->idImplemento] = $parametro;
            }
            
            if(isset($implementos["i".$uimplemento->idImplemento]))
            {
                $implementos["i".$uimplemento->idImplemento]["cue"] .= "-".$uimplemento->nombrePla;
            }
            else
            {
                $implemento = [];
                $implemento["nom"] = $uimplemento->nombreImp;
                $implemento["cre"] = "";
                $implemento["ven"] = "";
                $implemento["sit"] = "";
                $implemento["pre"] = "";
                $implemento["est"] = "";
                $implemento["cue"] = $uimplemento->nombrePla;

                $implementos["i".$uimplemento->idImplemento] = $implemento;   
                $iids[] = $uimplemento->idImplemento;
            }
            
        }

        foreach($entidades as $llave => $uentidad)
        {
            $entidades[$llave]["imp"] = $implementos;
        }

        //OBTENIENDO LA DATA DE ASIGNACIONES Y ASIGNANDOLA AL ARRAY DE IMPLEMENTOS
        $hoy = date("Y-m-d");
        $ahora = strtotime($hoy);
        
        $arr_asignaciones = Asignacion::select('asignacion.*')
            ->whereIn('Entidad_idEntidad',$eids)
            ->whereIn('Implemento_idImplemento',$iids)
            ->where('estadoAsi','VIGENTE')
            ->get();

        foreach($arr_asignaciones as $uasignacion)
        {
            if(isset($parametros["i".$uasignacion->Implemento_idImplemento]))
            {
                $renovable = $parametros["i".$uasignacion->Implemento_idImplemento]["renovable"];
                $tipo = $parametros["i".$uasignacion->Implemento_idImplemento]["tipo"];//activo,consumible,documento,actividad,check
                $validacion = $parametros["i".$uasignacion->Implemento_idImplemento]["validacion"];//ninguna,kilometraje,fecha,check,horometraje
                $alerta = $parametros["i".$uasignacion->Implemento_idImplemento]["alerta"];    
            }
            else
            {
                $renovable = 0;
                $tipo = "DOCUMENTO";
                $validacion = "fecha";
                $alerta = 0;
            }

            if($renovable <> 1)//documento no se renueva
            {
                $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["cre"] = $uasignacion->fcreacionAsi;
                $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["ven"] = "-";
                $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["sit"] = "VIGENTE";
                $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "PERMANENTE";
            }
            elseif($uasignacion->situacionAsi == "TRAMITADO")
            {
                $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["cre"] = $uasignacion->fcreacionAsi;
                $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["ven"] = $uasignacion->fsituacionAsi;
                $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "TRAMITADO";
            
                $vencimiento = strtotime($uasignacion->fsituacionAsi);
                $diferencia = $vencimiento - $ahora;
                $dias = ($diferencia == 0) ? 0 : $diferencia/86400;

                if($vencimiento <= $ahora)//el documento tramitado ya paso su fecha de revision (urgente)
                {
                    $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "TRAMITADO-VENCIDO";
                    $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["sit"] = $dias." días";
                }
                else//aun no se vencio (aplazado)
                {
                    $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "TRAMITADO";
                    $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["sit"] = $dias." días";
                }
            }
            elseif($uasignacion->situacionAsi == "APLAZADO")
            {
                $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["cre"] = $uasignacion->fcreacionAsi;
                $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["ven"] = $uasignacion->fsituacionAsi;
                $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "APLAZADO";

                $vencimiento = strtotime($uasignacion->fsituacionAsi);
                $diferencia = $vencimiento - $ahora;
                $dias = ($diferencia == 0) ? 0 : $diferencia/86400;

                if($vencimiento <= $ahora)//el documento tramitado ya paso su fecha de revision (urgente)
                {
                    $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "APLAZADO-VENCIDO";
                    $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["sit"] = $dias." días";
                }
                else//aun no se vencio (aplazado)
                {
                    $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "APLAZADO";
                    $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["sit"] = $dias." días";
                }
            }
            else//documentos que si se renuevan
            {
                switch($validacion)
                {
                    case "KILOMETRAJE":
                        $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["cre"] = $uasignacion->fcreacionAsi;
                        $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["ven"] = $uasignacion->vencimientoAsi;
                        $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "VIGENTE";

                        $vencimiento = $uasignacion->vencimientoAsi;
                        $aviso = $uasignacion->vencimientoAsi - $alerta;

                        $km_actual = 0;
                        if(isset($kilometrajes["k".$uasignacion->Entidad_idEntidad]))
                            $km_actual = $kilometrajes["k".$uasignacion->Entidad_idEntidad];
                        $diferencia = $vencimiento - $km_actual;
                        
                        if($vencimiento <= $km_actual)//km se ha vencido
                        {
                            $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "VENCIDO";
                            $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["sit"] = $diferencia." km.";
                        }
                        elseif($vencimiento >= $km_actual && $aviso <= $km_actual)//el documento esta en alerta
                        {
                            $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "POR VENCER";
                            $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["sit"] = $diferencia." km.";
                        }
                        else
                        {
                            $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "VIGENTE";
                            $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["sit"] = $diferencia." km.";
                        }
                    break;
                    case "FECHA":
                        $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["cre"] = $uasignacion->fcreacionAsi;
                        $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["ven"] = $uasignacion->fvencimientoAsi;
                        $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "VIGENTE";

                        $vencimiento = strtotime($uasignacion->fvencimientoAsi);
                        $aviso = strtotime($uasignacion->fvencimientoAsi."- ".$alerta." days");
                        $diferencia = $vencimiento - $ahora;
                        $dias = ($diferencia == 0) ? 0 : $diferencia/86400;
                        $sdias = strval($dias);

                        if($vencimiento <= $ahora)//el documento se ha vencido
                        {
                            $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "VENCIDO";
                            $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["sit"] = $sdias;
                        }
                        elseif($vencimiento >= $ahora && $aviso <= $ahora)//el documento esta en alerta
                        {
                            $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "POR VENCER";
                            $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["sit"] = $sdias;
                        }
                        else
                        {
                            $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["est"] = "VIGENTE";
                            $entidades["e".$uasignacion->Entidad_idEntidad]["imp"]["i".$uasignacion->Implemento_idImplemento]["sit"] = $sdias;
                        }
                    break;
                    case "CHECK"://falta implementar
                    break;
                    case "HOROMETRAJE"://falta implementar
                    break;
                    default:
                        /***********************************************************************************/
                        /*$implemento = [];
                        $implemento["nom"] = $uimplemento->nombreImp;
                        $implemento["cre"] = ;//creacion
                        $implemento["ven"] = "";//fecha vencimiento
                        $implemento["sit"] = "";//tiempo de vencimiento o vencido
                        $implemento["est"] = "";//estado: vencido vigente
                        $implemento["pre"] = "";//precio
                        $implemento["cue"] = "";//cuenta o la plantilla a la que está enlazado

                        $implementos["i".$uimplemento->Implemento_idImplemento] = $uimplemento->nombreImp;*/
                        /***********************************************************************************/
                    break;
                }
            }
        }

        $filas = [];
        foreach($entidades as $uentidad)
        {
            foreach($uentidad["imp"] as $uimplemento)
            {

                $fila = [];
                $fila[] = $uentidad["ent"];
                $fila[] = $uentidad["gru"];
                $fila[] = $uentidad["cla"];
                $fila[] = $uimplemento["nom"];
                $fila[] = $uimplemento["cre"];
                $fila[] = $uimplemento["ven"];
                if($uimplemento["est"] == "")
                    $fila[] = "NO APLICA";
                else
                    $fila[] = $uimplemento["est"];
                $fila[] = $uimplemento["sit"];
                $fila[] = $uimplemento["cue"];

                $filas[] = $fila;
            }
        }

        $cabeceras = [  'VEHICULO',
                        'GRUPO',
                        'CLASE',
                        'DOCUMENTO',
                        'F. INGRESO',
                        'F. VENCIMIENTO',
                        'ESTADO',
                        'RESTANTE',
                        'CUENTA',
                    ];

        $export = new VencimientoExport($filas,$cabeceras);
        $nombre = 'Vencimientos.xlsx';
        return Excel::download($export, $nombre);
    }



}