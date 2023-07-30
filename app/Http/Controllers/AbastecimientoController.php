<?php 
namespace App\Http\Controllers; 

use DB;
use App\Abastecimientoc;
use App\Abastecimientod; 
use App\Kilometraje;
use App\Combustible;
use App\Imagen;
use App\Traits\KilometrajeTrait;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\Exports\AbastecimientoExport;
use Maatwebsite\Excel\Facades\Excel;
//define('dar_baja','3');

class AbastecimientoController extends Controller 
{
    use KilometrajeTrait;
    public function Listar($desde,$hasta,$consumos)
    {
        //Ricardo
        //lista todos los abastecimientoc
        /*$hasta = date("Y-m-d");
        $desde = date("Y-m-d",strtotime($hasta."- 10 days"));*/

        $jconsumos = json_decode($consumos);

        $arr_abastecimiento = Abastecimientoc::select('abastecimientoc.*','nombreGri','ciudadGri','empresaGri','nombreUsu','nombreExt','nombreCon','nombreInt','tcuenta.valorDat as cuenta')//cuenta no esta hay que ver como se harña
            ->join('externo','idExterno','=','abastecimientoc.Externo_idExterno')
            ->join('grifo','idGrifo','=','abastecimientoc.Grifo_idGrifo')
            ->leftjoin('usuario','idUsuario','=','abastecimientoc.Usuario_idUsuario')
            ->leftJoin('consumo','idConsumo','=','abastecimientoc.Consumo_idConsumo')
            ->leftJoin('intervalo','idIntervalo','=','abastecimientoc.Intervalo_idIntervalo')
            ->leftJoin('cuenta','idCuenta','=','abastecimientoc.Cuenta_idCuenta')
            ->leftJoin('dato as tcuenta','tcuenta.idDato','=','abastecimientoc.Cuenta_idDato')
            ->whereIn('estadoAba',['APLICADO','REGISTRADO'])
            ->where('fechaAba','>=',$desde)
            ->where('fechaAba','<=',$hasta)
            ->orderBy('fechaAba','desc');
            //->get();

        if(count($jconsumos) > 0)
            $arr_abastecimiento = $arr_abastecimiento->whereIn('idConsumo',$jconsumos)->get();
        else
            $arr_abastecimiento = $arr_abastecimiento->get();


        //listar los vehiculos que estan faltando
        return $arr_abastecimiento;
    }
    public function ListarDetalle($id)
    {
        //Ricardo
        //lista el abastecimientod segun la cabecera
        $arr_abastecimientod = Abastecimientod::select(DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer ) AS trabajadorPer'),
                DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer, " ",reten.nombrePer ) AS retenPer'), 'abastecimientod.*', 'vehiculo.placaVeh', 'kilometrajeKil','Kilometraje_idKilometraje', 'fechaKil as fechaK', 'kilometrajeKil as kmAnt', 'abastecimientod.cargadoAba', 'abastecimientod.carretaAba', 'abastecimientod.carretaopAba','estadodAba')
            ->where('Abastecimientoc_idAbastecimiento',$id)            
            ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
            ->join('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
            //->leftjoin('vehiculo as acople','acople.idVehiculo','=','abastecimientod.Acople_idVehiculo')
            ->join('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
            ->leftJoin('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje') //Actualizado 
            //->leftJoin('dato','dato.idDato','=','abastecimientod.Ruta_idDato')
            ->get();
        return $arr_abastecimientod;
    }


    /*public function ListarSelect()
    {
        //Roger ->Ricardo
        //se está inhabilitando para el maestro principal
        $arr_abastecimiento = Abastecimientoc::select(DB::raw('idAbastecimiento, fechaAba, fecharegAba, Grifo_idGrifo, estadoAba, nombreCue, Cuenta_idCuenta as idCuenta, Externo_idExterno ,nombreExt, nombreGri, ciudadGri, nombreUsu'))
            //->where('idAbastecimiento','<>',constant('dar_baja'))
            ->whereIn('estadoAba',['APLICADO','REGISTRADO'])
            //->whereDate('fecharegAba','2022-08-19')
            ->join('grifo','idGrifo','=','abastecimientoc.Grifo_idGrifo')
            ->join('usuario','idUsuario','=','abastecimientoc.Usuario_idUsuario')
            ->leftJoin('cuenta','idCuenta','=','abastecimientoc.Cuenta_idCuenta')
            ->join('externo','idExterno','=','abastecimientoc.Externo_idExterno')
            ->orderBy('fechaAba','desc')
            ->get();
        return $arr_abastecimiento;
    }*/

    /*public function ordenarAbastecimiento($externo, $cuenta, $orden )
    {
        if ( $externo == 0 ) { $externo == 'Externo_idExterno'; }
        if ( $cuenta == 0 ) { $cuenta == 'Cuenta_idCuenta'; }
         
        $arr_abastecimiento = Abastecimientoc::select(DB::raw('idAbastecimiento, fechaAba, fecharegAba, Grifo_idGrifo, estadoAba, nombreCue, Cuenta_idCuenta as idCuenta, Externo_idExterno ,nombreExt, nombreGri, ciudadGri, nombreUsu, Ruta_idRuta'))
            ->where('idAbastecimiento','<>',constant('dar_baja'))
            ->where('estadoAba','=','APLICADO')
            ->where('Externo_idExterno', $externo)
            ->where('Cuenta_idCuenta', $cuenta)
            ->join('grifo','idGrifo','=','abastecimientoc.Grifo_idGrifo')
            ->join('usuario','idUsuario','=','abastecimientoc.Usuario_idUsuario')
            ->join('cuenta','idCuenta','=','abastecimientoc.Cuenta_idCuenta')
            ->join('externo','idExterno','=','abastecimientoc.Externo_idExterno')
            ->orderBy('fecharegAba',$orden)
            ->get();
        return $arr_abastecimiento;
    }*/

    public function ListarAbastecimiento()
    {
        $arr_abastecimiento = Abastecimientoc::select(DB::raw('idAbastecimiento, fechaAba, Grifo_idGrifo, estadoAba, nombreCue, Cuenta_idCuenta as idCuenta, Externo_idExterno ,nombreExt, nombreGri, ciudadGri, nombreUsu'))
        ->where('idAbastecimiento','<>',constant('dar_baja'))
        ->where('estadoAba','=','SOLICITADO')
        ->join('grifo','idGrifo','=','abastecimientoc.Grifo_idGrifo')
        ->join('usuario','idUsuario','=','abastecimientoc.Usuario_idUsuario')
        ->join('cuenta','idCuenta','=','abastecimientoc.Cuenta_idCuenta')
        ->join('externo','idExterno','=','abastecimientoc.Externo_idExterno')
        ->get();

        return $arr_abastecimiento;
    }


    /*
    public function ListarSelectDet($id)
    {
        //Ricardo
        $arr_abastecimientod = Abastecimientod::select(DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer ) AS trabajadorPer'),
        DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer, " ",reten.nombrePer ) AS retenPer, idAbastecimientod, vehiculo.placaVeh, abastecimientod.Persona_idPersona,
        abastecimientod.Reten_idPersona, abastecimientod.Vehiculo_idVehiculo, galonesAba, tablaAba, dato.valorDat as rutaAba, observacionAba, rendimientoAba, diferenciakmAba,
        Abastecimientoc_idAbastecimiento, kilometrajeKil,Kilometraje_idKilometraje, fechaKil as fechaK, kilometrajeKil as kmAnt, abastecimientod.cargadoAba, 
        acople.placaVeh as placaAcople, abastecimientod.carretaAba, abastecimientod.carretaopAba'))
            ->where('Abastecimientoc_idAbastecimiento',$id)
            ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
            ->join('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
            ->leftjoin('vehiculo as acople','acople.idVehiculo','=','abastecimientod.Acople_idVehiculo')
            ->join('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
            ->leftJoin('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje') //Actualizado 
            ->leftJoin('dato','dato.idDato','=','abastecimientod.Ruta_idDato')
            ->get();
        return $arr_abastecimientod;
    }*/

    public function ListarFecha()
    {
        $ufecha_ini = Abastecimientoc::select('fechaAba')
            ->where('fechaAba',DB::raw('(select MIN(fechaAba) from abastecimientoc)'))
            ->first();

        $ufecha_fin = Abastecimientoc::select('fechaAba')
            ->where('fechaAba', DB::raw('(select MAX(fechaAba) from abastecimientoc)'))
            ->first();
            
        /*$respuesta = [];
        $respuesta[0]["fechaIni"] = $ufecha_ini[0]["fechaAba"];
        $respuesta[0]["fechaFin"] = $ufecha_fin[0]["fechaAba"];
        return $respuesta;*/
        $respuesta = [];
        //$respuesta[0]["fechaIni"] = $ufecha_ini["fechaAba"];
        $respuesta[0]["fechaIni"] = '2022-09-01';
        $respuesta[0]["fechaFin"] = $ufecha_fin["fechaAba"];
        return $respuesta;
    }

    public function ListarSelectDetR()
    {
        /* array  */
        $combustible = [];
        /*$ufecha_ini = Abastecimientoc::select('fechaAba')
            ->where('fechaAba',DB::raw('(select MIN(fechaAba) from abastecimientoc)'))
            ->get();*/

        $ufecha_ini[0]= "2022-09-01";
        $ufecha_fin = Abastecimientoc::select('fechaAba')
            ->where('fechaAba', DB::raw('(select MAX(fechaAba) from abastecimientoc)'))
            ->get();

        $ucombustible = Combustible::select('precioCom','fechaCom','Grifo_idGrifo')
            ->get();
        
        foreach( $ucombustible as $obj_combustible) 
        {
            $arr_combustible[$obj_combustible->fechaCom.'-'.$obj_combustible->Grifo_idGrifo] = $obj_combustible->precioCom;
            array_push($combustible, $arr_combustible);
        }
        $tam_combustible = count($combustible) - 1;

        $arr_abastecimientod = Abastecimientod::select(DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer, " - ",IFNULL( reten.paternoPer,""), " ", 
        IFNULL( reten.maternoPer,""), " ", IFNULL( reten.nombrePer,"") ) AS trabajadorPer'), 
        DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer, " ",reten.nombrePer ) AS retenPer'),
        DB::raw('CONCAT(fechaAba,"-",idGrifo) AS idCombustible, idAbastecimientod, placaVeh, abastecimientod.Persona_idPersona,
        abastecimientod.Reten_idPersona, abastecimientod.Vehiculo_idVehiculo, galonesAba, rutaAba, observacionAba, nombreExt, nombreCue, fechaAba, estadoAba, nombreGri,
        Abastecimientoc_idAbastecimiento, kilometrajeKil, Kilometraje_idKilometraje, diferenciakmAba, rendimientoAba'))
            //->where('Abastecimientoc_idAbastecimiento','<>',constant('dar_baja'))
            ->whereDate('abastecimientoc.fechaAba','>=', '2022-09-01')
            ->whereDate('abastecimientoc.fechaAba','<=', $ufecha_fin[0]["fechaAba"])
            ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
            ->join('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
            ->join('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
            ->join('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje')
            ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.Abastecimientoc_idAbastecimiento')
            ->join('cuenta','idCuenta','=','abastecimientoc.Cuenta_idCuenta')
            ->join('grifo','idGrifo','=','abastecimientoc.Grifo_idGrifo')
            ->join('externo','idExterno','=','abastecimientoc.Externo_idExterno')
            ->get();
        
        //return $combustible;
        foreach ( $arr_abastecimientod as $abastecimientod ) 
        {
            try
            {
                $precioCom = $combustible[$tam_combustible][$abastecimientod->idCombustible];
                //$abastecimientod["precioCom"] = $precioCom;
                $abastecimientod->precioCom = $precioCom;
            }catch(\Exception $e) {

            }

        }
        return $arr_abastecimientod;
    }

    public function ListarSelectDetRF($persona, $grifo, $operacion, $vehiculo, $estado, $fechai, $fechaf, $externo)
    {
        $persona_ = '=';
        $grifo_ = '=';
        $operacion_ = '=';
        $vehiculo_ = '=';
        $estado_ = '=';
        $externo_ = '=';

        if ( $persona == '0' ) { $persona_ = '<>'; }
        if ( $grifo == '0') { $grifo_ = '<>'; }
        if ( $operacion == '0' ) { $operacion_ = '<>'; }
        if ( $vehiculo == '0' ) { $vehiculo_ = '<>'; }
        if ( $estado == '0' ) { $estado_ = '<>'; }
        if ( $externo == '0' ) { $externo_ = '<>'; }

        /*$f_fechai = date('Y-m-d', strtotime($ ));
        $f_fechaf = date('Y-m-d', strtotime($fechaf));*/
        $combustible = [];

        $ucombustible = Combustible::select('precioCom','fechaCom','Grifo_idGrifo')
            ->get();
        foreach( $ucombustible as $obj_combustible) 
        {
            $arr_combustible[$obj_combustible->fechaCom.'-'.$obj_combustible->Grifo_idGrifo] = $obj_combustible->precioCom;
            array_push($combustible, $arr_combustible);
        }
        $tam_combustible = count($combustible) - 1;

        $arr_abastecimientod = Abastecimientod::select(DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer ) AS trabajadorPer'), 
        DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer, " ",reten.nombrePer ) AS retenPer'),
        DB::raw('CONCAT(fechaAba,"-",idGrifo) AS idCombustible, idAbastecimientod, placaVeh, abastecimientod.Persona_idPersona,
        abastecimientod.Reten_idPersona, abastecimientod.Vehiculo_idVehiculo, galonesAba, rutaAba, observacionAba, nombreExt, nombreCue, fechaAba, estadoAba, nombreGri,
        Abastecimientoc_idAbastecimiento, kilometrajeKil, Kilometraje_idKilometraje, diferenciakmAba, rendimientoAba, Vale_idImagen as vale, Surtidor_idImagen as surtidor, 
        Kil_idImagen as kilometraje, Tanquei_idImagen as tanquei, Tanqued_idImagen as tanqued'))
            //->where('Abastecimientoc_idAbastecimiento','<>',constant('dar_baja'))
            ->where('abastecimientod.Persona_idPersona',$persona_ ,$persona)
            ->where('abastecimientoc.Grifo_idGrifo',$grifo_ ,$grifo)
            ->where('abastecimientoc.Cuenta_idCuenta',$operacion_ ,$operacion)
            ->where('abastecimientod.Vehiculo_idVehiculo',$vehiculo_ ,$vehiculo)
            ->where('abastecimientoc.Externo_idExterno',$externo_ ,$externo)
            ->where('abastecimientoc.estadoAba', $estado_ ,$estado)
            ->whereDate('fechaAba','>=', $fechai)
            ->whereDate('fechaAba','<=', $fechaf)
            ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
            ->join('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
            ->join('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
            ->LeftJoin('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje')
            ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.Abastecimientoc_idAbastecimiento')
            ->join('cuenta','idCuenta','=','abastecimientoc.Cuenta_idCuenta')
            ->join('grifo','idGrifo','=','abastecimientoc.Grifo_idGrifo')
            ->join('externo','idExterno','=','abastecimientoc.Externo_idExterno')
            ->get();

            foreach ( $arr_abastecimientod as $abastecimientod ) 
            {
                try 
                {
                    $precioCom = $combustible[$tam_combustible][$abastecimientod->idCombustible];
                    $abastecimientod->precioCom = $precioCom;
                }catch(\Exception $e) {
                }
            }
        return $arr_abastecimientod;
    }

    public function Guardar(Request $request)
    {
        //Roger -> Ricardo
        //guarda la información de la cabecera y el detalle de un convoy de abastecimiento

        //Guardar cabecera
        $jabastecimientoc = json_decode($request->abastecimientoc);
        $jabastecimientod = json_decode($request->abastecimientod);
        
        $fechaAba = $jabastecimientoc->fechaAba;
        $hora = date('H:i:s', time());


        $obj_abastecimientoc = new Abastecimientoc();
        $obj_abastecimientoc->fechaAba = $jabastecimientoc->fechaAba;
        $obj_abastecimientoc->fecharegAba = date("Y-m-d H:i:s");
        $obj_abastecimientoc->Grifo_idGrifo = $jabastecimientoc->Grifo_idGrifo;
        $obj_abastecimientoc->estadoAba = "APLICADO"; 
        $obj_abastecimientoc->Realizado_idUsuario = $jabastecimientoc->Realizado_idUsuario;
        ///////////////////////////$obj_abastecimientoc->Cuenta_idCuenta = $jabastecimientoc->idCuenta;
        $obj_abastecimientoc->Externo_idExterno = $jabastecimientoc->Externo_idExterno;
        $obj_abastecimientoc->Consumo_idConsumo = $jabastecimientoc->Consumo_idConsumo;
        $obj_abastecimientoc->Intervalo_idIntervalo = $jabastecimientoc->Intervalo_idIntervalo;
        $obj_abastecimientoc->Cuenta_idDato = $jabastecimientoc->Cuenta_idCuenta;
        //$obj_abastecimientoc->Ruta_idDato NO SE USA
        //$obj_abastecimientoc->grupo NO SE USA
        //$obj_abastecimientoc->grupo operacionAba
        $obj_abastecimientoc->save();

        foreach ($jabastecimientod as $uabastecimientod)
        {
            $obj_kilometraje = new Kilometraje();
            $obj_kilometraje->kilometrajeKil = $uabastecimientod->kilometrajeKil;
            $obj_kilometraje->tipoKil = 'COMBUSTIBLE';
            $obj_kilometraje->fechaKil = $jabastecimientoc->fechaAba;
            $obj_kilometraje->Vehiculo_idVehiculo = $uabastecimientod->Vehiculo_idVehiculo;
            $obj_kilometraje->Persona_idPersona = $uabastecimientod->Persona_idPersona;
            $obj_kilometraje->save();
	    $this->ValidarUltimoKm( $uabastecimientod->Vehiculo_idVehiculo );
            
            $obj_abastecimientod = new Abastecimientod();
            $obj_abastecimientod->Vehiculo_idVehiculo = $uabastecimientod->Vehiculo_idVehiculo;
            //$obj_abastecimientod->Vehiculo_registro = ;NO SE USA
            $obj_abastecimientod->Persona_idPersona = $uabastecimientod->Persona_idPersona;
            if ( isset($uabastecimientod->Reten_idPersona) ) { $obj_abastecimientod->Reten_idPersona = $uabastecimientod->Reten_idPersona; } else { $obj_abastecimientod->Reten_idPersona = NULL; }
            $obj_abastecimientod->galonesAba = $uabastecimientod->galonesAba;
            //$obj_abastecimientod->tablaAba = ; NO SE USA
            //$obj_abastecimientod->rutaAba = ; NO SE USA
            $obj_abastecimientod->observacionAba = $uabastecimientod->observacionAba;
            //$obj_abastecimientod->rendimientoAba = ;
            $obj_abastecimientod->diferenciakmAba = $uabastecimientod->diferenciakmAba;
            $obj_abastecimientod->Abastecimientoc_idAbastecimiento = $obj_abastecimientoc->idAbastecimiento;
            //$obj_abastecimientod->Vale_idImagen = ; 
            //$obj_abastecimientod->Surtidor_idImagen = ;
            //$obj_abastecimientod->Kil_idImagen = ;
            //$obj_abastecimientod->Tanquei_idImagen = ;
            //$obj_abastecimientod->Tanqued_idImagen = ;
            $obj_abastecimientod->Kilometraje_idKilometraje = $obj_kilometraje->idKilometraje;
            //$obj_abastecimientod->Acople_idVehiculo = ; NO SE USA
            $obj_abastecimientod->cargadoAba = $jabastecimientoc->unidad;
            if ($uabastecimientod->carretaAba !="" ) { $obj_abastecimientod->carretaAba = $uabastecimientod->carretaAba; }
            if ($uabastecimientod->carretaopAba !="" ) { $obj_abastecimientod->carretaopAba = $uabastecimientod->carretaopAba; }
            //$obj_abastecimientod->Ruta_idDato = ; NO SE USA
            $obj_abastecimientod->motivoAba = $jabastecimientoc->motivo;
            $obj_abastecimientod->tipoAba = $uabastecimientod->tipoAba;
            $obj_abastecimientod->estadodAba = "REGISTRADO";
            //$obj_abastecimientod->enlaceAba = ;
            //$obj_abastecimientod->facturaAba = ;
            //$obj_abastecimientod->Comprobante_idComprobante = ;
            //$obj_abastecimientod->precioAba = ;
            $obj_abastecimientod->cerradoAba = 0;
            $obj_abastecimientod->calculadoAba = 0;
            $obj_abastecimientod->descontadoAba = 0;
            //$obj_abastecimientod->excesoAba = 0;
            $obj_abastecimientod->save();
        }
        return;
    }
    public function Actualizar(Request $request)
    {
        $jabastecimientoc = json_decode($request->abastecimientoc);
        $jabastecimientod = json_decode($request->abastecimientod);

        $obj_abastecimientoc = Abastecimientoc::select('idAbastecimiento.*')
        ->where('idAbastecimiento', $jabastecimientoc->idAbastecimiento)
        ->update([
                'fechaAba' => $jabastecimientoc->fechaAba, 
                'Grifo_idGrifo' => $jabastecimientoc->Grifo_idGrifo, 
                'estadoAba' => "APLICADO",
                'Externo_idExterno' => $jabastecimientoc->Externo_idExterno,
                'Consumo_idConsumo' => $jabastecimientoc->Consumo_idConsumo,
                'Intervalo_idIntervalo' => $jabastecimientoc->Intervalo_idIntervalo,
                'Cuenta_idDato' => $jabastecimientoc->Cuenta_idCuenta,
                //'Cuenta_idCuenta' => $jabastecimientoc->idCuenta, 
              ]);

        /*return;*/

        $cont = 0;
        foreach($jabastecimientod as $uabastecimientod)
        {
            if($uabastecimientod->placaVeh != 'DELETE')
            {
                if($uabastecimientod->idAbastecimientod != 0)
                {
                    $obj_kilometraje = Kilometraje::select('idKilometraje.*')
                        ->where('idKilometraje', $uabastecimientod->Kilometraje_idKilometraje)
                        ->update([
                                'kilometrajeKil' => $uabastecimientod->kilometrajeKil,
                                'fechaKil' => $jabastecimientoc->fechaAba,
                                'Vehiculo_idVehiculo' => $uabastecimientod->Vehiculo_idVehiculo,
                                'Persona_idPersona' => $uabastecimientod->Persona_idPersona
                            ]);

                    $obj_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
                        ->where('idAbastecimientod', $uabastecimientod->idAbastecimientod)
                        ->update([
                                'galonesAba' => $uabastecimientod->galonesAba,
                                'tipoAba' => $uabastecimientod->tipoAba,
                                'observacionAba' => $uabastecimientod->observacionAba,
                                'cargadoAba' => $jabastecimientoc->unidad,
                                'motivoAba' => $jabastecimientoc->motivo,
                        ]);

                }
                else
                {
                    $obj_kilometraje = new Kilometraje();
                    $obj_kilometraje->kilometrajeKil = $uabastecimientod->kilometrajeKil;
                    $obj_kilometraje->tipoKil = 'COMBUSTIBLE';
                    $obj_kilometraje->fechaKil = $jabastecimientoc->fechaAba;
                    $obj_kilometraje->Vehiculo_idVehiculo = $uabastecimientod->Vehiculo_idVehiculo;
                    $obj_kilometraje->Persona_idPersona = $uabastecimientod->Persona_idPersona;
                    $obj_kilometraje->save();
            
                    $obj_abastecimientod = new Abastecimientod();
                    $obj_abastecimientod->Vehiculo_idVehiculo = $uabastecimientod->Vehiculo_idVehiculo;
                    $obj_abastecimientod->Persona_idPersona = $uabastecimientod->Persona_idPersona;
                    if ( isset($uabastecimientod->Reten_idPersona) ) { $obj_abastecimientod->Reten_idPersona = $uabastecimientod->Reten_idPersona; } else { $obj_abastecimientod->Reten_idPersona = NULL; }
                    $obj_abastecimientod->galonesAba = $uabastecimientod->galonesAba;
                    $obj_abastecimientod->observacionAba = $uabastecimientod->observacionAba;
                    $obj_abastecimientod->diferenciakmAba = $uabastecimientod->diferenciakmAba;
                    $obj_abastecimientod->Abastecimientoc_idAbastecimiento = $jabastecimientoc->idAbastecimiento;
                    $obj_abastecimientod->Kilometraje_idKilometraje = $obj_kilometraje->idKilometraje;
                    $obj_abastecimientod->cargadoAba = $jabastecimientoc->unidad;
                    if ($uabastecimientod->carretaAba !="" ) { $obj_abastecimientod->carretaAba = $uabastecimientod->carretaAba; }
                    if ($uabastecimientod->carretaopAba !="" ) { $obj_abastecimientod->carretaopAba = $uabastecimientod->carretaopAba; }
                    $obj_abastecimientod->motivoAba = $jabastecimientoc->motivo;
                    $obj_abastecimientod->tipoAba = $uabastecimientod->tipoAba;
                    $obj_abastecimientod->estadodAba = "REGISTRADO";
                    $obj_abastecimientod->cerradoAba = 0;
                    $obj_abastecimientod->calculadoAba = 0;
                    $obj_abastecimientod->descontadoAba = 0;
                    $obj_abastecimientod->save();
                }
            }
            elseif($uabastecimientod->placaVeh == 'DELETE')
            {
                $obj_kilometraje = Kilometraje::select('idKilometraje.*')
                        ->where('idKilometraje', $uabastecimientod->Kilometraje_idKilometraje)
                        ->update([
                                'kilometrajeKil' => $uabastecimientod->kilometrajeKil,
                                'fechaKil' => $jabastecimientoc->fechaAba,
                                'Vehiculo_idVehiculo' => $uabastecimientod->Vehiculo_idVehiculo,
                                'Persona_idPersona' => $uabastecimientod->Persona_idPersona
                            ]);

                $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
                ->where('idAbastecimientod', $uabastecimientod->idAbastecimientod)
                ->update(['estadodAba' => "ANULADO"]);
            }
        }
        return $cont;
    }

    public function Desactivar(Request $request)
    {
        //Ricardo
        //Anula un Abastecimientod
        $abastecimiento = Abastecimientod::find($request->idAbastecimiento);
        if($abastecimiento->estadodAba == "REGISTRADO")
        {
            $abastecimiento->estadodAba = "ANULADO";
            $abastecimiento->save();    
        }
        
        return $abastecimiento->idAbastecimientod;
    }

    /*public function Guardar(Request $request)
    {
        //Guardar cabecera
        $jabastecimientoc = json_decode($request->abastecimientoc);
        $jabastecimientod = json_decode($request->abastecimientod);
        
        $fechaAba = $jabastecimientoc->fechaAba;
        $hora = date('H:i:s', time());

        $obj_abastecimientoc = new Abastecimientoc();
        //$obj_abastecimientoc->fechaAba = $jabastecimientoc->fechaAba; 
        $obj_abastecimientoc->fechaAba = strval($fechaAba.' '.$hora);
        $obj_abastecimientoc->fecharegAba = now(); 
        $obj_abastecimientoc->Grifo_idGrifo = $jabastecimientoc->Grifo_idGrifo; 
        $obj_abastecimientoc->estadoAba = "APLICADO"; 
        $obj_abastecimientoc->Usuario_idUsuario = $jabastecimientoc->Usuario_idUsuario;
        $obj_abastecimientoc->Cuenta_idCuenta = $jabastecimientoc->idCuenta;
        $obj_abastecimientoc->Externo_idExterno = $jabastecimientoc->Externo_idExterno;
        //$obj_abastecimientoc->Ruta_idDato = $jabastecimientoc->Ruta_idDato;
        $obj_abastecimientoc->save();

        foreach ( $jabastecimientod as $uabastecimientod)
        {
            //var_dump($uabastecimientod->motivoAba); 
            //return;
            $kilometrajeKil = str_replace(',','',$uabastecimientod->kilometrajeKil);
            $galonesAba = str_replace(',','',$uabastecimientod->galonesAba);
            $obj_kilometraje = new Kilometraje();
            $obj_kilometraje->kilometrajeKil = $kilometrajeKil;
            $obj_kilometraje->tipoKil = 'COMBUSTIBLE';
            $obj_kilometraje->fechaKil = $jabastecimientoc->fechaAba;
            $obj_kilometraje->Vehiculo_idVehiculo = $uabastecimientod->Vehiculo_idVehiculo;
            $obj_kilometraje->Persona_idPersona = $uabastecimientod->Persona_idPersona;
            $obj_kilometraje->save();

            $obj_abastecimientod = new Abastecimientod(); 
            $obj_abastecimientod->Vehiculo_idVehiculo = $uabastecimientod->Vehiculo_idVehiculo; 
            $obj_abastecimientod->Persona_idPersona = $uabastecimientod->Persona_idPersona;

            if ( isset($uabastecimientod->Reten_idPersona) ) { $obj_abastecimientod->Reten_idPersona = $uabastecimientod->Reten_idPersona; } else { $obj_abastecimientod->Reten_idPersona = NULL; }
            //if ( $uabastecimientod->Acople_idVehiculo != "" ) { $obj_abastecimientod->Acople_idVehiculo = $uabastecimientod->Acople_idVehiculo; }
            if ($uabastecimientod->cargadoAba !="" ) { $obj_abastecimientod->cargadoAba = $uabastecimientod->cargadoAba; }
            if ($uabastecimientod->carretaAba !="" ) { $obj_abastecimientod->carretaAba = $uabastecimientod->carretaAba; }
            if ($uabastecimientod->carretaopAba !="" ) { $obj_abastecimientod->carretaopAba = $uabastecimientod->carretaopAba; }
            if ($uabastecimientod->motivoAba != "" ) { $obj_abastecimientod->motivoAba = $uabastecimientod->motivoAba; } 
            if ($uabastecimientod->tipoAba !="" ) { $obj_abastecimientod->tipoAba = $uabastecimientod->tipoAba; }
            $obj_abastecimientod->galonesAba = $galonesAba;
            if ( isset( $uabastecimientod->tablaAba ) ) { $tablaAba = str_replace(',','',$uabastecimientod->tablaAba); $obj_abastecimientod->tablaAba = $tablaAba; } else { $obj_abastecimientod->tablaAba = NULL; }
            if ( isset( $uabastecimientod->Ruta_idDato ) && $uabastecimientod->Ruta_idDato !== "" ) { $obj_abastecimientod->Ruta_idDato = $uabastecimientod->Ruta_idDato; } else { $obj_abastecimientod->Ruta_idDato = NULL; }
            //if ( $uabastecimientod->Ruta_idDato == "") { $obj_abastecimientod->Ruta_idDato = NULL; }
            //$obj_abastecimientod->Ruta_idDato = $uabastecimientod->Ruta_idDato;
            $obj_abastecimientod->rendimientoAba = $uabastecimientod->rendimientoAba;
            $obj_abastecimientod->diferenciakmAba = $uabastecimientod->diferenciakmAba;
            $obj_abastecimientod->observacionAba = $uabastecimientod->observacionAba;
            $obj_abastecimientod->Abastecimientoc_idAbastecimiento = $obj_abastecimientoc->idAbastecimiento;
            $obj_abastecimientod->Kilometraje_idKilometraje = $obj_kilometraje->idKilometraje;
            $obj_abastecimientod->estadodAba = 'REGISTRADO';
            $obj_abastecimientod->save();
        }
        return;
    }*/
    public function ProcesarAbastecimiento( Request $request)
    {
        $obj_abastecimiento = json_decode($request->abastecimiento); 
        foreach ( $obj_abastecimiento as $uabastecimiento )
        {
            $arr_abastecimiento = (object)[]; 
            $arr_abastecimiento->estadoAba = $uabastecimiento->estadoAba;
            Abastecimientoc::where('idAbastecimiento', $uabastecimiento->idAbastecimiento)->update((array)$arr_abastecimiento);
        }
    }    
    public function ExportarAbastecimiento($persona, $grifo, $operacion, $vehiculo, $estado, $fechai, $fechaf, $externo )
    {
         /*$fecha_actual = date("Y-m-d"); 
        return Excel::download(new AbastecimientoExport($persona, $grifo, $operacion, $vehiculo, $estado, $fechai, $fechaf, $externo), 
        'abastecimiento:'.$fecha_actual.'.xlsx');*/

        $cuerpo = [];
        $combustible = [];

        $persona_ = '=';
        $grifo_ = '=';
        $operacion_ = '=';
        $vehiculo_ = '=';
        $estado_ = '=';
        $externo_ = '=';

        if ( $persona == '0' ) { $persona_ = '<>'; }
        if ( $grifo == '0') { $grifo_ = '<>'; }
        if ( $operacion == '0' ) { $operacion_ = '<>'; }
        if ( $vehiculo == '0' ) { $vehiculo_ = '<>'; }
        if ( $estado == '0' ) { $estado_ = '<>'; }
        if ( $externo == '0' ) { $externo_ = '<>'; }
        
        $abastecimientoc = DB::table('abastecimientoc')
            ->select('Grifo_idGrifo','fechaAba')
            ->whereDate('fechaAba','>=',$fechai)
            ->whereDate('fechaAba','<=', $fechaf)
            ->get();
            
        foreach( $abastecimientoc as $uabastecimiento ) 
        {
            $ucombustible = DB::table('combustible')
             ->select('precioCom','fechaCom','Grifo_idGrifo')
             ->where('Grifo_idGrifo', $uabastecimiento->Grifo_idGrifo)
             ->where('fechaCom', $uabastecimiento->fechaAba)
             ->get();
             
            foreach( $ucombustible as $obj_combustible) 
            {
                $arr_combustible[$obj_combustible->fechaCom.'-'.$obj_combustible->Grifo_idGrifo] = $obj_combustible->precioCom;
                array_push($combustible, $arr_combustible);
            }
        }
        
        $tam_combustible = count($combustible) - 1;


        $abastecimientod = DB::table('abastecimientod')
            ->select( DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer ) AS trabajadorPer'), 
                      DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer, " ",reten.nombrePer ) AS retenPer'), 
                      DB::raw('CONCAT(fechaAba,"-",idGrifo) AS idCombustible, idAbastecimientod, vehiculo.placaVeh as vehiculo, abastecimientod.cargadoAba, abastecimientod.carretaAba as carretaCargada, 
                      abastecimientod.carretaopAba as carretaVacia, abastecimientod.Persona_idPersona,
                      abastecimientod.Reten_idPersona, abastecimientod.Vehiculo_idVehiculo, galonesAba, rutaAba, observacionAba, motivoAba, tipoAba, fechaAba, estadoAba, nombreGri, ciudadGri, idGrifo, empresaGri,
                      Abastecimientoc_idAbastecimiento, kilometrajeKil, Kilometraje_idKilometraje, abastecimientoc.idAbastecimiento as idAbastecimiento, tablaAba, nombreExt, idExterno, 
                      rendimientoAba, abastecimientod.Ruta_idDato, abastecimientod.precioAba as precio, dato.valorDat as modeloVeh, dato.idDato as Modelo_idDato, cuenta.valorDat as nombreCue, tipoKil, facturaAba, precioAba, numeroCom, 
                      nombreInt, galonajesInt, kilometrajeInt, unidadesInt, idIntervalo, excesoAba, diferenciakmAba, idealAba, saldoAba, toleranciaAba, descuentoAba, enlaceAba'))
            ->where('abastecimientod.Persona_idPersona',$persona_ ,$persona)
            ->where('abastecimientoc.Grifo_idGrifo',$grifo_ ,$grifo)
            //->where('abastecimientoc.Cuenta_idCuenta',$operacion_ ,$this->operacion)
            ->where('abastecimientod.estadodAba','<>','ANULADO')
            ->where('abastecimientod.Vehiculo_idVehiculo',$vehiculo_ ,$vehiculo)
            ->where('abastecimientoc.Externo_idExterno', $externo_ ,$externo)
            ->where('abastecimientoc.estadoAba', $estado_ ,$estado)
            ->whereDate('fechaAba','>=',$fechai)
            ->whereDate('fechaAba','<=', $fechaf)
            ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
            ->join('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
            ->join('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
            ->leftJoin('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje')
            ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.Abastecimientoc_idAbastecimiento')
            ->join('grifo','idGrifo','=','abastecimientoc.Grifo_idGrifo')
            //->join('externo','idExterno','=','abastecimientoc.Externo_idExterno')
            ->join('dato','idDato','=','vehiculo.Modelo_idDato')
            ->leftJoin('comprobante','comprobante.idComprobante','=','abastecimientod.Comprobante_idComprobante')
            ->leftJoin('consumo','consumo.idConsumo','=','abastecimientoc.Consumo_idConsumo')
            ->leftJoin('externo','idExterno','=','consumo.Externo_idExterno')
            ->leftJoin('intervalo','intervalo.idIntervalo','=','abastecimientoc.Intervalo_idIntervalo')
            ->leftjoin('dato as cuenta','cuenta.idDato','=','consumo.Cuenta_idDato')
            ->orderBy('fechaAba','ASC')
            ->whereNULL('invalidoAbad')
            ->get();

        foreach ( $abastecimientod as $uabastecimientod ) 
        {
            $intervalos = [];
            try 
            {
                $arr_abastecimientod = DB::table('kilometraje')
                ->select('fechaKil','kilometrajeKil','tipoKil')
                ->where('Vehiculo_idVehiculo', $uabastecimientod->Vehiculo_idVehiculo)
                ->where('kilometrajeKil','<', $uabastecimientod->kilometrajeKil)
                ->where('tipoKil','=','COMBUSTIBLE')
                ->orderBy('kilometrajeKil','DESC')
                ->first();

                $kilometrajeAnterior = $arr_abastecimientod->kilometrajeKil;
                $uabastecimientod->kilometrajeAnterior = $kilometrajeAnterior;
            } catch(\Exception $e) { }

            /*try 
            {
                if ( isset($combustible[$tam_combustible][$uabastecimientod->idCombustible]) ) 
                {
                    $precioCom = $combustible[$tam_combustible][$uabastecimientod->idCombustible];
                    $uabastecimientod->precioCom = $precioCom;
                }
            }catch(\Exception $e) {
            }*/
            
            //return $uabastecimientod->precioCom; 
            //agregando registros
            //$fecha = (explode(" ", $uabastecimientod->fechaAba)); 
            $fila = []; 
            $fila["grupo"] = $uabastecimientod->idAbastecimiento;
            $fila["conductor"] = $uabastecimientod->trabajadorPer;
            $fila["ciudad"] = $uabastecimientod->ciudadGri;
            $fila["proveedor"] = $uabastecimientod->empresaGri;
            $fila["grifo"] = $uabastecimientod->nombreGri;
            
            //$fila["fecha Abs"] = date("d/m/Y", strtotime($fecha[0]));
            $fila["fecha Abs"] = $uabastecimientod->fechaAba;
            
            $fila["gal"] = $uabastecimientod->galonesAba;
            if( isset( $uabastecimientod->precio )) { $fila["precio"] = $uabastecimientod->precio; } else { $fila["precio"] = ""; }
            //if( isset( $uabastecimientod->precioCom )) { $fila["precio"] = $uabastecimientod->precioCom; } else { $fila["precio"] = ""; }
            //$fila["precio"] = $uabastecimientod->precioAba;
            if( isset( $uabastecimientod->precio )) { $fila["monto"] = floatval($uabastecimientod->galonesAba) * floatval($uabastecimientod->precio); } else { $fila["monto"] = ""; }
            //if( isset( $uabastecimientod->precioCom )) { $fila["monto"] = floatval($uabastecimientod->galonesAba) * floatval($uabastecimientod->precioCom); } else { $fila["monto"] = ""; }
            //if( isset( $uabastecimientod->kilometrajeAnterior )) { $fila["exceso"] = number_format( floatval($uabastecimientod->galonesAba / (intval($uabastecimientod->kilometrajeKil) - intval($uabastecimientod->kilometrajeAnterior))), 3); } else { $fila["exceso"] = ''; } 30-01
            $fila["exceso"] = $uabastecimientod->excesoAba;
            $fila["rendimiento"] = number_format( floatval($uabastecimientod->rendimientoAba), 2);
            $fila["placa"] = $uabastecimientod->vehiculo;
            $fila["modeloVeh"] = $uabastecimientod->modeloVeh; 
            $fila["cuenta"] = $uabastecimientod->nombreCue;
            $fila["km"] = $uabastecimientod->kilometrajeKil;
            $fila["cliente"] = $uabastecimientod->nombreExt;
            $fila["observacion"] = $uabastecimientod->observacionAba;
            $fila["reten"] = $uabastecimientod->retenPer;
            $fila["carretaCargada"] = $uabastecimientod->carretaCargada;
            $fila["carretaVacia"] = $uabastecimientod->carretaVacia;
            //if ( isset( $uabastecimientod->kilometrajeAnterior )) { $fila["km_recorrido"] = intval( $uabastecimientod->kilometrajeKil ) - intval( $uabastecimientod->kilometrajeAnterior ); } else { $fila["km_recorrido"] = ''; } //30-01
            $fila["km_recorrido"] = $uabastecimientod->diferenciakmAba;
            //if ( isset( $uabastecimientod->kilometrajeAnterior )) { $fila["km_anterior"] = $uabastecimientod->kilometrajeAnterior; } else { $fila["km_anterior"] = ''; } 30-01
            $arr_kilometraje = explode("-", $uabastecimientod->enlaceAba);
            $fila["km_anterior"] = "";
            //$fila["reporte"] = $uabastecimientod->tipoKil; 30-01
            $fila["motivo"] = $uabastecimientod->motivoAba;
            $fila["tipo"] = $uabastecimientod->tipoAba; 
            $fila["factura"] = $uabastecimientod->facturaAba."-".$uabastecimientod->numeroCom;
            $fila["nombreInt"] = $uabastecimientod->nombreInt; 
            //$fila["galonajesInt"] = $uabastecimientod->galonajesInt;
          

            $arr_unidades = explode("-", $uabastecimientod->unidadesInt);
            $arr_galonajes = explode("-", $uabastecimientod->galonajesInt);
            
            $unidades = []; 

            foreach ( $arr_unidades as $indice => $uunidad) 
            {
                $unidades["u".$uunidad] = $arr_galonajes[$indice];
            }

            $intervalo = []; 
            $intervalos["unidades"] = $unidades; 

            //$intervalos["i".$uabastecimientod->idIntervalo] = $intervalo;
            if ( isset( $unidades["u".$uabastecimientod->Modelo_idDato] )) 
            {
                $fila["galonajesInt"] = $unidades["u".$uabastecimientod->Modelo_idDato];

            } else { 
                $fila["galonajesInt"] = "";
            }

            $fila["kilometrajeInt"] = $uabastecimientod->kilometrajeInt;
            $fila["idealAba"] = $uabastecimientod->idealAba; 
            $fila["saldoAba"] = $uabastecimientod->saldoAba; 
            $fila["toleranciaAba"] = $uabastecimientod->toleranciaAba;
            $fila["descuentoAba"] = $uabastecimientod->descuentoAba;
            //$fila["modelo"] = $uabastecimientod->Modelo_idDato;
            $cuerpo[] = $fila;
        }
        $todos = [];
        $todos["cuerpo"] = $cuerpo;

        //return $todos;
        $export = new AbastecimientoExport($todos);
        $nombre = 'Abastecimientod.xlsx';
        return Excel::download($export, $nombre);
    }
    
    public function Analizar(Request $request)
    {
        $ejex = $request->ejex;
        $ejey = $request->ejey;
        $finicio = $request->finicio;
        $ffin = $request->ffin;

        $vehiculos = json_decode($request->vehiculos);
        $grifos = json_decode($request->grifos);
        $ciudades = json_decode($request->ciudades);
        $externos = json_decode($request->externos);
        $personas = json_decode($request->personas);
        $cuentas = json_decode($request->cuentas);

        //GENERANDO LA VARIABLE NUMERAL QUE SE CONSULTAR?
        $variable = "";
        switch($ejey)
        {
            case "POR COMBUSTIBLE":
                $variable = "galonesAba";
                break;
            case "POR FACTURACION":
                $variable = "galonesAba";
                break;
            case "POR RENDIMIENTO":
                $variable = "galonesAba";
                break;
        }

        //GENERANDO LA CONSULTA DINAMICA EN BASE A LOS FILTROS Y ESTRUCTURA ESTADISTICA QUE SOLICITA
        $consulta = Abastecimientod::select('abastecimientoc.*','abastecimientod.*', $variable.' as valor','ciudadGri')
            ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.Abastecimientoc_idAbastecimiento')
            ->join('grifo','grifo.idGrifo','=','abastecimientoc.Grifo_idGrifo')
            ->where("fechaAba",'>=',$finicio)
            ->where("fechaAba",'<=',$ffin);

        if(count($vehiculos) > 0)
            $consulta->whereIn('Vehiculo_idVehiculo',$vehiculos);
        if(count($grifos) > 0)
            $consulta->whereIn('Grifo_idGrifo',$vehiculos);
        if(count($ciudades) > 0)
            $consulta->whereIn('ciudadGri',$ciudades);
        if(count($externos) > 0)
            $consulta->whereIn('Externo_idExterno',$externos);
        if(count($personas) > 0)
            $consulta->whereIn('Persona_idPersona',$personas);
        if(count($cuentas) > 0)
            $consulta->whereIn('Cuenta_idCuenta',$cuentas);

        $arr_abastecimientos = $consulta->get();

        //ASIGNANDO LOS VALORES AL ARRAY DE COORDENADAS X E Y PARA QUE ACUMULE LOS VALORES SELECCIONADOS
        $coordenada_x = [];
        $coordenada_y = [];

        foreach($arr_abastecimientos as $uabas)
        {
            switch($ejex)
            {
                case "POR PLACA":
                    $coordenada_x["x".$uabas->Vehiculo_idVehiculo] = $uabas->Vehiculo_idVehiculo;

                    if(isset($coordenada_y["y".$uabas->Vehiculo_idVehiculo]))
                        $coordenada_y["y".$uabas->Vehiculo_idVehiculo] += $uabas->valor;
                    else
                        $coordenada_y["y".$uabas->Vehiculo_idVehiculo] = $uabas->valor;
                    break;
                case "POR TRABAJADOR":
                    $coordenada_x["x".$uabas->Persona_idPersona] = $uabas->Persona_idPersona;

                    if(isset($coordenada_y["y".$uabas->Persona_idPersona]))
                        $coordenada_y["y".$uabas->Persona_idPersona] += $uabas->valor;
                    else
                        $coordenada_y["y".$uabas->Persona_idPersona] = $uabas->valor;
                    break;
                case "POR CIUDAD":
                    $coordenada_x["x".$uabas->ciudadGri] = $uabas->ciudadGri;
                    
                    if(isset($coordenada_y["y".$uabas->ciudadGri]))
                        $coordenada_y["y".$uabas->ciudadGri] += $uabas->valor;
                    else
                        $coordenada_y["y".$uabas->ciudadGri] = $uabas->valor;
                    break;
                case "POR GRIFO":
                    $coordenada_x["x".$uabas->Grifo_idGrifo] = $uabas->Grifo_idGrifo;
                    
                    if(isset($coordenada_y["y".$uabas->Grifo_idGrifo]))
                        $coordenada_y["y".$uabas->Grifo_idGrifo] += $uabas->valor;
                    else
                        $coordenada_y["y".$uabas->Grifo_idGrifo] = $uabas->valor;
                    break;
                case "POR CLIENTE":
                    $coordenada_x["x".$uabas->Externo_idExterno] = $uabas->Externo_idExterno;
                    
                    if(isset($coordenada_y["y".$uabas->Externo_idExterno]))
                        $coordenada_y["y".$uabas->Externo_idExterno] += $uabas->valor;
                    else
                        $coordenada_y["y".$uabas->Externo_idExterno] = $uabas->valor;
                    break;
                case "POR CUENTA":
                    $coordenada_x["x".$uabas->Cuenta_idCuenta] = $uabas->Cuenta_idCuenta;
                    
                    if(isset($coordenada_y["y".$uabas->Cuenta_idCuenta]))
                        $coordenada_y["y".$uabas->Cuenta_idCuenta] += $uabas->valor;
                    else
                        $coordenada_y["y".$uabas->Cuenta_idCuenta] = $uabas->valor;
                    break;
                case "POR MESES":
                    $periodo = date("Y-m",strtotime($uabas->fechaAba));
                    $coordenada_x["x".$periodo] = $periodo;

                    if(isset($coordenada_y["y".$periodo]))
                        $coordenada_y["y".$periodo] += $uabas->valor;
                    else
                        $coordenada_y["y".$periodo] = $uabas->valor;
                    break;
            }
        }

        //BUSCANDO LOS VALORES A PARTIR DE LAS LLAVES PARA PONERLAS EN EL EJE X
        $valores_x = [];
        $brutos_x = [];
        switch($ejex)
        {
            case "POR PLACA":
                $brutos_x = Vehiculo::select('idVehiculo','placaVeh')
                    ->whereIn("idVehiculo",$coordenada_x)
                    ->get();
                foreach($brutos_x as $ubruto)
                {
                    $coordenada_x["x".$ubruto->idVehiculo] = $ubruto->placaVeh;
                }
                break;
            case "POR TRABAJADOR":
                $brutos_x = Persona::select(DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer, idPersona'))
                    ->whereIn("idPersona",$coordenada_x)
                    ->get();
                foreach($brutos_x as $ubruto)
                {
                    $coordenada_x["x".$ubruto->idPersona] = $ubruto->trabajadorPer;
                }
                break;
            case "POR CIUDAD":
                break;
            case "POR GRIFO":
                $brutos_x = Grifo::select('nombreGri','idGrifo')
                    ->whereIn("idGrifo",$coordenada_x)
                    ->get();
                foreach($brutos_x as $ubruto)
                {
                    $coordenada_x["x".$ubruto->idGrifo] = $ubruto->nombreGri;
                }
                break;
            case "POR CLIENTE":
                $brutos_x = Externo::select('nombreExt','idExterno')
                    ->whereIn("idExterno",$coordenada_x)
                    ->get();
                foreach($brutos_x as $ubruto)
                {
                    $coordenada_x["x".$ubruto->idExterno] = $ubruto->nombreExt;
                }
                break;
            case "POR CUENTA":
                $brutos_x = Cuenta::select('nombreCue','idCuenta')
                    ->whereIn("idCuenta",$coordenada_x)
                    ->get();
                foreach($brutos_x as $ubruto)
                {
                    $coordenada_x["x".$ubruto->idCuenta] = $ubruto->nombreCue;
                }
                break;
            case "POR MESES":
                break;
        }

        //GENERANDO LA ESTRUCTURA DE ARRAY PARA EL BARCHART
        $respuesta_x = [];
        foreach($coordenada_x as $ucoordenada)
        {
            $respuesta_x[] = $ucoordenada;
        }

        $respuesta_y = [];
        foreach($coordenada_y as $ucoordenada)
        {
            $respuesta_y[] = round($ucoordenada,2);
        }

        $respuesta["ejex"] = $respuesta_x;
        $respuesta["ejey"] = $respuesta_y;
        return $respuesta;
    }
    /*public function ProcesarUnidad(Request $request)
    {
        $monto = json_decode($request->monto);
        $obj_monto = (object)[];
        $obj_monto->estadoMon = $monto->estadoMon;
        $obj_monto->observacionMon = $monto->observacionMon;
        $obj_monto->frendicionMon = date("Y-m-d H:i:s");

        Monto::where('idMonto', $monto->idMonto)->update((array)$obj_monto);
    }*/
}