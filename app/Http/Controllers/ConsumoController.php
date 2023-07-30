<?php
namespace App\Http\Controllers; 

use DB; 
use App\Consumo;
use App\Intervalo;
use App\Abastecimientod;
use App\Abastecimientoc;
use App\Vehiculo;
use App\Kilometraje;
use App\Comprobante; 
use App\Combustible;
use App\Grifo;
use App\Dato;
use App\Descuento;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use PDF;
use Dompdf\Dompdf;
use Dompdf\Options;


class ConsumoController extends Controller 
{
    public function ListarSelect()
    {
        /*$arr_consumo = Consumo::select(DB::raw('idConsumo, kilometrajeCon, galonajeCon, rendimientoCon, statusCon, observacionCon,
                                        dato.valorDat, nombreExt, ruta.valorDat as Ruta, Ruta_idDato, consumo.Externo_idExterno, Modelo_idDato, ciudad.valorDat as ciudad, Ciudad_idDato, pesocarretaCon'))
            ->join('dato','idDato','=','consumo.Modelo_idDato')
            ->join('dato as ruta','ruta.idDato','=','consumo.Ruta_idDato')
            ->leftjoin('dato as ciudad', 'ciudad.idDato','=','consumo.Ciudad_idDato')
            ->join('externo as ext','ext.idExterno','=','consumo.externo_idExterno')
            ->where('idConsumo','>','88')
            ->get();*/
        $arr_consumo = Consumo::select('idConsumo','Cuenta_idDato','Externo_idExterno','Grupo_idDato','cuenta.valorDat as cuenta','grupo.valorDat as grupo','rutaCon','nombreCon','nombreExt')
            ->join('dato as cuenta','cuenta.idDato','=','consumo.Cuenta_idDato')
            ->join('dato as grupo','grupo.idDato','=','consumo.Grupo_idDato')
            ->join('externo','externo.idExterno','=','consumo.Externo_idExterno')
            ->get();
        return $arr_consumo;
    }
    public function ListarSelectIntervalo( $idConsumo ) //Roger
    {
        $cabeceras = []; 
        $intervalos = [];
        $idsV = [];

        $arr_cabecera = Intervalo::select('intervalo.*')
            ->where('Consumo_idConsumo','=', $idConsumo)
            ->where('estadoInt', NULL)
            ->get();

        /*foreach( $arr_cabecera as $ucabecera )
        {
            $cont = 0;
            $cont_recorrido = 0;
            $cabecera = []; 
            $ucabecera["intervalos"] = [];
            $cabeceras["c".$ucabecera->idIntervalo] = $ucabecera;
            $unidades = explode('-', $ucabecera->unidadesInt);
            
            $idsV[] = $unidades;
            
            $arr_vehiculo = Dato::select('idDato','valorDat')
            ->whereIn('idDato', $idsV)
            ->get();

            $cabeceras["c".$ucabecera->idIntervalo]["intervalos"] = $arr_vehiculo;

        }*/

        return $arr_cabecera;
    }
    public function Desactivar(Request $request)
    {
        $abastecimiento = Abastecimientod::find($request->idAbastecimiento);
        //$abastecimiento->invalidoAbad = 1;
        $abastecimiento->estadodAba = 'ANULADO';
        $abastecimiento->save();
        return $request->idAbastecimiento;
    }
    public function Guardar(Request $request) //Roger
    {
        $cont = 0;
        $id = 0;
        $jconsumo = json_decode($request->consumo);
        
        foreach ( $jconsumo as $uconsumo )
        {
            $galonajes = [];
            $unidades = [];
            $nombreInt = ""; 
            $cargaInt = ""; 
            $kilometrajeInt = "";

            if ( $cont == 0)
            {
                //Agregar solo cosumos creados // obviar eliminados
                if ( $uconsumo->eliminar == false ) 
                {
                    $obj_consumo = new Consumo(); 
                    $obj_consumo->Cuenta_idDato = $uconsumo->Cuenta_idDato; 
                    $obj_consumo->Grupo_idDato = $uconsumo->Grupo_idDato; 
                    $obj_consumo->rutaCon = $uconsumo->rutaCon;
                    $obj_consumo->nombreCon = $uconsumo->nombreCon; 
                    $obj_consumo->Externo_idExterno = $uconsumo->Externo_idExterno;
                    $obj_consumo->save();
                    
                    $id = $obj_consumo->idConsumo;
                }
            }
            //Agregar solo consumos creados // obviar eliminados
            if ( $uconsumo->eliminar == false )
            {

                $nombreInt = $uconsumo->nombreInt; 
                $cargaInt = $uconsumo->cargaInt; 
                $kilometrajeInt = $uconsumo->kilometrajeInt;
                
                $cont++;
                
                foreach( $uconsumo->intervalos as $uintervalo )
                {
                    $galonajes[] = str_replace("-"," ", $uintervalo->galonajesInt);
                    $unidades[] = str_replace("-"," ", $uintervalo->unidadesInt);
                }

                $galones = implode("-", $galonajes);
                $unidad = implode("-", $unidades);

                $obj_intervalo = new Intervalo(); 
                $obj_intervalo->nombreInt = $nombreInt; 
                $obj_intervalo->cargaInt = $cargaInt;
                $obj_intervalo->kilometrajeInt = $kilometrajeInt;
                $obj_intervalo->galonajesInt = $galones;
                $obj_intervalo->unidadesInt = $unidad;
                $obj_intervalo->Consumo_idConsumo = $id;
                $obj_intervalo->save();
            }
        }

        return $obj_consumo;
    }
    public function Actualizar(Request $request) //Roger 
    {
        $jconsumo = json_decode($request->consumo);
        $cont = 0;
        $idConsumo = "";
        $idsIntervalos = [];
        
        foreach ( $jconsumo as $uconsumo ) 
        {
            $galonajes = [];
            $unidades = [];

            if ( isset($uconsumo->idConsumo ) && $cont == 0)
            {
                $obj_consumo = (object)[]; 
                $obj_consumo->Grupo_idDato = $uconsumo->Grupo_idDato;
                $obj_consumo->Cuenta_idDato = $uconsumo->Cuenta_idDato;
                $obj_consumo->rutaCon = $uconsumo->rutaCon;
                $obj_consumo->nombreCon = $uconsumo->nombreCon;
                $obj_consumo->Externo_idExterno = $uconsumo->Externo_idExterno;
                Consumo::where('idConsumo', $uconsumo->idConsumo)->update((array)$obj_consumo);

                $idConsumo = $uconsumo->idConsumo;
                $cont++;
            }

            foreach( $uconsumo->intervalos as $uintervalo )
            {
                $galonajes[] = str_replace("-"," ", $uintervalo->galonajesInt);
                $unidades[] = str_replace("-"," ", $uintervalo->unidadesInt);
            }
            
            $galones = implode("-", $galonajes);
            $unidad = implode("-", $unidades);
            $galonajes[] = $galones;
            
            foreach( $uconsumo->intervalos as $uintervalo )
            {
                //$idsIntervalos[] = $uconsumo;
                if ( isset( $uintervalo->idIntervalo ) ) 
                {
                    $obj_intervalo = (object)[]; 
                    $obj_intervalo->nombreInt = $uconsumo->nombreInt;  
                    $obj_intervalo->cargaInt = $uconsumo->cargaInt; 
                    $obj_intervalo->galonajesInt = $galones; 
                    $obj_intervalo->unidadesInt = $unidad; 
                    $obj_intervalo->kilometrajeInt = $uconsumo->kilometrajeInt;
                    Intervalo::where('idIntervalo', $uintervalo->idIntervalo)->update((array)$obj_intervalo);
                } 
            }

            if ( count( $uconsumo->intervalos ) == 0) 
            {
                $intervalo = Intervalo::find( $uconsumo->intervalo->idIntervalo ); 
                $intervalo->estadoInt = 'ANULADO';
                $intervalo->save();
            }
            //Agregar intervalos nuevos 
            if ( isset( $uconsumo->estado ) ) 
            { 
                foreach( $uconsumo->intervalos as $uintervalo )
                {
                    $obj_intervalo = new Intervalo(); 
                    $obj_intervalo->nombreInt = $uconsumo->nombreInt; 
                    $obj_intervalo->cargaInt = $uconsumo->cargaInt;
                    $obj_intervalo->kilometrajeInt = $uintervalo->kilometrajeInt;
                    $obj_intervalo->galonajesInt = $galones;
                    $obj_intervalo->unidadesInt = $unidad;
                    $obj_intervalo->Consumo_idConsumo = $idConsumo;
                    $obj_intervalo->save();
                    break;
                }
            }
            
            //Eliminar Intervalo 
            if ( isset( $uconsumo->eliminar ) ) 
            {
                foreach( $uconsumo->intervalos as $uintervalo )
                {
                    if ( $uconsumo->eliminar == true && isset( $uintervalo->idIntervalo ) ) 
                    {
                        $intervalo = Intervalo::find( $uintervalo->idIntervalo );
                        $intervalo->estadoInt = 'ANULADO';
                        $intervalo->save();
                    }
                }
            }
        }
        return $jconsumo;
        //return $jconsumo;
        
        /*$observacionCon = '';
        if ( isset( $jconsumo->observacionCon))
        {
            $observacionCon = $jconsumo->observacionCon;
        }

        $up_consumo = Consumo::select('idConsumo.*')
            ->where('idConsumo', $jconsumo->idConsumo)
            ->update(['kilometrajeCon' => $jconsumo->kilometrajeCon, 
                      'galonajeCon' => $jconsumo->galonajeCon, 
                      'rendimientoCon' => $jconsumo->rendimientoCon,
                      'observacionCon' => $observacionCon, 
                      'statusCon' => $jconsumo->statusCon, 
                      'Ruta_idDato' => $jconsumo->Ruta_idDato, 
                      'Ciudad_idDato' => $jconsumo->Ciudad_idDato, 
                      'Externo_idExterno' => $jconsumo->Externo_idExterno,
                      'pesocarretaCon' => $jconsumo->pesocarretaCon,
                      'Modelo_idDato' => $jconsumo->Modelo_idDato]);*/
        /*unset($jconsumo->acciones);
        $obj_consumo = (object)$jconsumo;
        Consumo::where('idConsumo', $jconsumo->idConsumo)->update((array)$obj_consumo);
        return;*/
    }
    
    public function CalcularConsumo($desde,$hasta,$calculado,$situacion)//Ricardo
    {


        if($calculado == "true")
            $calculado = 1;
        else
            $calculado = 0;

        $arr_consumos = Abastecimientod::select( DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer," ", reten.nombrePer) AS retenPer'), 
                                                 DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS trabajadorPer, 
                                                         idAbastecimientod,  Kilometraje_idKilometraje, abastecimientod.Vehiculo_idVehiculo, Abastecimientoc_idAbastecimiento, vehiculo.placaVeh, Modelo_idDato, tmodelo.valorDat as modelo , kilometrajeKil, galonesAba,estadodAba, tipoAba,empresaGri, tciudad.valorDat as ciudad, fecharegAba, fechaAba, empresaGri, observacionAba, Comprobante_idComprobante,  abastecimientoc.Grifo_idGrifo, consumo.rutaCon, nombreInt, idIntervalo, empresaGri, cargadoAba'))
            ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')
            ->leftJoin('consumo','consumo.idConsumo','=','abastecimientoc.Consumo_idConsumo')
            ->leftJoin('intervalo','intervalo.idIntervalo','=','abastecimientoc.Intervalo_idIntervalo')
            //->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')
            ->leftjoin('grifo','grifo.idGrifo','=','abastecimientoc.Grifo_idGrifo')
            ->leftjoin('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
            ->leftjoin('dato as tmodelo','vehiculo.Modelo_idDato','=','tmodelo.idDato')
            ->leftjoin('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje')
            ->leftjoin('dato as tciudad','tciudad.idDato','=','grifo.Ciudad_idDato')
            ->leftjoin('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
            ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
            ->where('fechaAba','>=',$desde)
            ->where('fechaAba','<=',$hasta)
            //->where('estadodAba',$estado)
            ->where('calculadoAba','=',$calculado)
            //->whereNULL('invalidoAba')
            ->orderBy('vehiculo.placaVeh','ASC')
            ->orderBy('abastecimientoc.fechaAba','ASC')
            ->get();

        
        $registros = [];
        $recargas = [];//ayudata a identificar las relaciones que hay entre las recargas y el ultimo full

        $idsIntervalos = [];

        foreach($arr_consumos as $uconsumo)
        {
            /*$arr_vehiculo = [];
            $galones = 0;
            $idVehiculo = "";
            $ids = "";*/

            //$arr_vehiculo["idComprobante"] = $uconsumo->Comprobante_idComprobante;
            $arr_vehiculo["idAbastecimientoc"] = $uconsumo->Abastecimientoc_idAbastecimiento;
            $arr_vehiculo["fecha1"] = "";//fecha de ultimo full
            $arr_vehiculo["fecha2"] = $uconsumo->fechaAba;
            $arr_vehiculo["ciudad1"] = "";//ciudad de ultimo full
            $arr_vehiculo["ciudad2"] = $uconsumo->ciudad;//
            $arr_vehiculo["km1"] = "";//fecha de ultimo kilometraje full
            $arr_vehiculo["km2"] = $uconsumo->kilometrajeKil;
            $arr_vehiculo["tipoAba1"] = "";//ultimo abastecimiento full o relleno
            $arr_vehiculo["tipoAba2"] = $uconsumo->tipoAba;
            $arr_vehiculo["cargadoAba1"] = "";
            $arr_vehiculo["cargadoAba2"] = $uconsumo->cargadoAba;
            $arr_vehiculo["idAbastecimientod1"] = 0;
            $arr_vehiculo["idAbastecimientod2"] = $uconsumo->idAbastecimientod;
            $arr_vehiculo["galonaje1"] = 0;
            $arr_vehiculo["galonaje2"] = $uconsumo->galonesAba;
            $arr_vehiculo["grecarga"] = 0;//galones de recarga
            $arr_vehiculo["gtotal"] = 0;//galones de recarga
            $arr_vehiculo["diferencia"] = 0;//diferencia de kilometraje
            $arr_vehiculo["kmdia"] = 0;//kilometraje recorrido por dia
            $arr_vehiculo["rendimiento"] = 0;
            $arr_vehiculo["idVehiculo"] = $uconsumo->Vehiculo_idVehiculo;
            $arr_vehiculo["placaVeh"] = $uconsumo->placaVeh;
            $arr_vehiculo["idModelo"] = $uconsumo->Modelo_idDato;
            $arr_vehiculo["modelo"] = $uconsumo->modelo;
            $arr_vehiculo["obs1"] = "";
            $arr_vehiculo["obs2"] = $uconsumo->observacionAba;
            
            $arr_vehiculo["idIntervalo"] = $uconsumo->idIntervalo;
            $arr_vehiculo["intervalo1"] = "";
            $arr_vehiculo["intervalo2"] = $uconsumo->nombreInt;
            $arr_vehiculo["ruta1"] = "";
            $arr_vehiculo["ruta2"] = $uconsumo->rutaCon;

            $arr_vehiculo["operador1"] = "";
            $arr_vehiculo["operador2"] = $uconsumo->trabajadorPer;
            $arr_vehiculo["reten1"] = "";
            $arr_vehiculo["reten2"] = $uconsumo->retenPer;

            $arr_vehiculo["trabajadores"] = [];//trabajadores si hay recargas
            $arr_vehiculo["ids"] = "";//ids de las recargas
            $arr_vehiculo["recargas"] = [];//registros de recarga
            $arr_vehiculo["precioGri"] = 0;
            $arr_vehiculo["proveedor1"] = "";
            $arr_vehiculo["proveedor2"] = $uconsumo->empresaGri;
            $arr_vehiculo["tipo1"] = "";
            $arr_vehiculo["tipo2"] = $uconsumo->tipoAba;
            $arr_vehiculo["tipo"] = $uconsumo->tipoAba;
            $arr_vehiculo["edit1"] = false;
            $arr_vehiculo["edit2"] = true;
            //$arr_vehiculo["recorrido"] = ;

            $arr_vehiculo["kmint"] = 0;
            $arr_vehiculo["galonajeint"] = 0;
            $arr_vehiculo["ideal"] = 0;
            $arr_vehiculo["exceso"] = 0;

            $idsIntervalos[] = $uconsumo->idIntervalo;
        
            //$arr_vehiculo["precioGri"] = "0";
            //$arr_vehiculo["km2"] = number_format($uconsumo->kilometrajeKil, 0, '.', ' '); 

            $arr_recargas = Abastecimientod::select(DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS trabajadorPer'), DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer," ", reten.nombrePer) AS retenPer'), 'idAbastecimientod','Kilometraje_idKilometraje','abastecimientod.Vehiculo_idVehiculo','Abastecimientoc_idAbastecimiento','kilometrajeKil','galonesAba','estadodAba','tipoAba','empresaGri','tciudad.valorDat as ciudad','fechaAba','enlaceAba','cargadoAba','consumo.rutaCon','intervalo.nombreInt','empresaGri','observacionAba')
                ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')
                ->leftJoin('consumo','consumo.idConsumo','=','abastecimientoc.Consumo_idConsumo')
                ->leftJoin('intervalo','intervalo.idIntervalo','=','abastecimientoc.Intervalo_idIntervalo')
                ->join('grifo','grifo.idGrifo','=','abastecimientoc.Grifo_idGrifo')
                //->join('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
                ->join('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje')
                ->join('dato as tciudad','tciudad.idDato','=','grifo.Ciudad_idDato')
                ->leftjoin('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
                ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
                ->where('fechaAba','>=','2022-09-01')
                ->where('abastecimientod.Vehiculo_idVehiculo', $uconsumo->Vehiculo_idVehiculo)
                ->whereIn('tipoAba', ["FULL","RELLENO"])
                ///////////////////->where('abastecimientoc.fechaAba','<=',$uconsumo->fechaAba) Reemplazado con el kilometraje
                ->where('kilometraje.kilometrajeKil','<',$uconsumo->kilometrajeKil)
                ->where('cerradoAba','<>',1)
                //->whereNULL('invalidoAba')
                ->orderBy('kilometraje.kilometrajeKil','DESC')
                ->get();

            $arr_precios = Combustible::select('precioCom')
                ->where('Grifo_idGrifo',"=", $uconsumo->Grifo_idGrifo)
                ->where('fechaCom', $arr_vehiculo["fecha2"])
                ->first();

            if(isset( $arr_precios["precioCom"])) 
            {
                $arr_vehiculo["precioGri"] = $arr_precios["precioCom"];
            }

            foreach($arr_recargas as $urecarga)//se recorren las recargas para buscar una full si no se agrega al array de recargas
            {
                if($uconsumo->idAbastecimientod != $urecarga->idAbastecimientod)
                {
                    if($urecarga->tipoAba == 'FULL')// si es full se agrega como recarga anterior si no es full no se llena nada
                    {
                        $arr_vehiculo["ciudad1"] = $urecarga->ciudad; 
                        $arr_vehiculo["km1"] = $urecarga->kilometrajeKil;
                        $arr_vehiculo["galonaje1"] = $urecarga->galonesAba;
                        $arr_vehiculo["fecha1"] = $urecarga->fechaAba;
                        $arr_vehiculo["idAbastecimientod1"] = $urecarga->idAbastecimientod;
                        $arr_vehiculo["tipoAba1"] = $urecarga->tipoAba;
                        $arr_vehiculo["cargadoAba1"] = $urecarga->cargadoAba;
                        $arr_vehiculo["operador1"] = $urecarga->trabajadorPer;
                        $arr_vehiculo["reten1"] = $urecarga->retenPer;
                        $arr_vehiculo["proveedor1"] = $urecarga->empresaGri;
                        $arr_vehiculo["intervalo1"] = $urecarga->nombreInt;
                        $arr_vehiculo["ruta1"] = $urecarga->rutaCon;
                        $arr_vehiculo["tipo1"] = $urecarga->tipoAba;
                        $arr_vehiculo["obs1"] = $urecarga->observacionAba;
                        if($urecarga->estadodAba == "REGISTRADO")
                            $arr_vehiculo["edit1"] = true;

                        $arr_vehiculo["tipo"] = $urecarga->tipoAba."-".$arr_vehiculo["tipo"];
                        break;
                    }
                    else
                    {
                        $arr_vehiculo["recargas"][] = $urecarga;
                    }
                }
            }

            $ids = [];
            $galones = 0;

            foreach($arr_vehiculo["recargas"] as $urecarga)//recorre las recargas para buscar la primera recarga y así poder tener un anterior
            {
                if($arr_vehiculo["fecha1"] == "")//si no encontro un full agarrara el primer registro y cierra todo
                {
                    $arr_vehiculo["ciudad1"] = $urecarga->valorDat; 
                    $arr_vehiculo["km1"] = $urecarga->kilometrajeKil;
                    $arr_vehiculo["galonaje1"] = $urecarga->galonesAba;
                    $arr_vehiculo["fecha1"] = $urecarga->fechaAba;
                    $arr_vehiculo["idAbastecimientod1"] = $urecarga->idAbastecimientod;
                    $arr_vehiculo["tipoAba1"] = $urecarga->tipoAba;
                    $arr_vehiculo["cargadoAba1"] = $urecarga->cargadoAba;
                    $arr_vehiculo["operador1"] = $urecarga->trabajadorPer;
                    $arr_vehiculo["reten1"] = $urecarga->retenPer;
                    $arr_vehiculo["proveedor1"] = $urecarga->empresaGri;
                    $arr_vehiculo["intervalo1"] = $urecarga->nombreInt;
                    $arr_vehiculo["ruta1"] = $urecarga->rutaCon;
                    $arr_vehiculo["tipo1"] = $urecarga->tipoAba;
                    $arr_vehiculo["obs1"] = $urecarga->observacionAba;
                    if($urecarga->estadodAba == "REGISTRADO")
                            $arr_vehiculo["edit1"] = true;

                    $arr_vehiculo["recargas"] = [];
                    $arr_vehiculo["tipo"] = $urecarga->tipoAba."-".$arr_vehiculo["tipo"];

                    break;
                }
                else//si es full acumula registros
                {
                    $ids[] = $urecarga["idAbastecimientod"];
                    $galones = $galones + $urecarga["galonesAba"];
                }
            }

            //$arr_vehiculo["ids"] = implode("-",$ids);
            $arr_vehiculo["ids"] = implode("-",$ids);
            $arr_vehiculo["grecarga"] = $galones;
            $arr_vehiculo["gtotal"] = $galones + $arr_vehiculo["galonaje2"];
            //$arr_vehiculo["recorrido"] = sizeof($arr_vehiculo["recargas"]);

            $arr_vehiculo["diferencia"] = floatval($arr_vehiculo["km2"]) - floatval($arr_vehiculo["km1"]);

            $diferencia = 1;
            if($arr_vehiculo["fecha1"] != "")
                $diferencia = (strtotime($arr_vehiculo["fecha2"]) - strtotime($arr_vehiculo["fecha1"]))/60/60/24;
            if($diferencia == 0)
                $diferencia = 1;

            $arr_vehiculo["kmdia"] = round($arr_vehiculo["diferencia"]/$diferencia);

            $arr_vehiculo["km1"] = number_format(floatval($arr_vehiculo["km1"]), 0, '.', ' ');
            $arr_vehiculo["km2"] = number_format(floatval($arr_vehiculo["km2"]), 0, '.', ' ');

            if($arr_vehiculo["tipoAba1"] == "FULL" && $arr_vehiculo["tipoAba2"] == "FULL")
            {
                $arr_vehiculo["rendimiento"] = number_format($arr_vehiculo["diferencia"] / $arr_vehiculo["gtotal"], 2);
            }
            elseif($arr_vehiculo["tipoAba1"] == "RELLENO" && $arr_vehiculo["tipoAba2"] == "FULL")
            {
                $arr_vehiculo["rendimiento"] = number_format($arr_vehiculo["diferencia"] / $arr_vehiculo["gtotal"], 2);
            }

            $registros[] = $arr_vehiculo;
        }



        //ELIMINANDO SEGÚN EL REQUERIMIENTO LOS QUE ESTAN CON VUELTA CERRADA Y LOS QUE NO ESTAN CON VUELTA CERRADA
        
        $registros2 = [];
        $registros3 = [];
        foreach($registros as $llave => $uregistro)//buscando los que tienen rellenos de por medio
        {
            if($uregistro["tipo"] == "FULL-FULL")
                $registros2[] = $uregistro;
            else
                $registros3[] = $uregistro;
        }

        if($situacion == "TERMINADO")
            $registros = $registros2;
        else
            $registros = $registros3;

        $registros2 = null;
        $registros3 = null;

        //ASIGNAR A LOS RELLENOS EL VALOR DEL FULL RELACIONADO ( TODOS LOS RELLENOS QUE PARTICIPEN EN EL RENDIMIENTO DE UN FULL DEBEN ENLAZAR SUS VALORES AL FULL)
        $recargas = [];
        foreach($registros as $uregistro)//buscando los que tienen rellenos de por medio
        {
            if($uregistro["ids"] != "")
            {
                $ids = explode("-", $uregistro["ids"]);
                foreach($ids as $urecarga)
                {
                    $recargas["r".$urecarga] = $uregistro;//agregando a un array de recargas el registro full para que se añada a los registros de recarga en la proxima vuelta
                }
            }
            //FALTA AGREGAR AL RELLENO SI ES QUE HUBIERA
        }
        
        foreach($registros as $llave => $uregistro)
        {
            $idAbastecimientod = $uregistro["idAbastecimientod2"];
            if(isset($recargas["r".$idAbastecimientod]))//if($uregistro["tipoAba2"] == "RELLENO")
            {
                $full = $recargas["r".$idAbastecimientod];
                            //$arr_vehiculo["idComprobante"] = $uconsumo->Comprobante_idComprobante;
                $arr_vehiculo["fecha1"] = $full["fecha1"];
                $arr_vehiculo["ciudad1"] = $full["ciudad1"];
                $arr_vehiculo["km1"] = $full["km1"];
                $arr_vehiculo["tipoAba1"] = $full["tipoAba1"];
                $arr_vehiculo["idAbastecimientod1"] = $full["idAbastecimientod1"];
                $arr_vehiculo["galonaje1"] = $full["galonaje1"];
                $arr_vehiculo["cargadoAba1"] = $full["cargadoAba1"];
                $arr_vehiculo["operador1"] = $full["operador1"];
                $arr_vehiculo["reten1"] = $full["reten1"];
                $arr_vehiculo["proveedor1"] = $full["proveedor1"];
                $arr_vehiculo["intervalo1"] = $full["intervalo1"];
                $arr_vehiculo["ruta1"] = $full["ruta1"];
                $arr_vehiculo["tipo1"] = $full["tipo1"];
                $arr_vehiculo["obs1"] = $full["obs1"];
                $arr_vehiculo["edit1"] = $full["edit1"];

                $arr_vehiculo["gtotal"] = $full["gtotal"];
                $arr_vehiculo["diferencia"] = $full["diferencia"];
                $arr_vehiculo["rendimiento"] = $full["rendimiento"];
            }
        }

        //OBTENIENDO TODOS LOS INTERVALOS Y ORDENANDOLOS PARA PODER CALCULAR EL CONSUMO POR UNDIAD
        $arr_intervalos = Intervalo::select('*')
                ->whereIn('idIntervalo', $idsIntervalos)
                ->get();

        $intervalos = [];
        foreach($arr_intervalos as $uintervalo)
        {
            $arr_unidades = explode("-", $uintervalo->unidadesInt);
            $arr_galones = explode("-", $uintervalo->galonajesInt);

            $unidades = [];

            foreach($arr_unidades as $indice => $uunidad)
            {
                $unidades["u".$uunidad] = $arr_galones[$indice];
            }

            $intervalo = [];
            $intervalo["kil"] = $uintervalo->kilometrajeInt;
            $intervalo["unidades"] = $unidades;

            $intervalos["i".$uintervalo->idIntervalo] = $intervalo;
        }

        //RECORRIENDO LOS FULL PARA PODER ASIGNARLES LOS INTERVALOS QUE HAN SIDO DEFINIDOS PARA ELLOS
        foreach($registros as $llave => $uregistro)
        {

            if($uregistro["tipo2"] == "FULL")//SOLO SE CALCULA CON EL INTERVALO A LOS CONSUMOS QUE TENGAN FULL
            {
                $idIntervalo = $uregistro["idIntervalo"];
                $idModelo = $uregistro["idModelo"];

                $galones = 0;
                $kilometraje = 0;

                if(isset($intervalos["i".$idIntervalo]))
                {
                    $intervalo = $intervalos["i".$idIntervalo];
                    if(isset($intervalo["unidades"]["u".$idModelo]))//VERIFICA SI EL MODELO EXISTE EN EL INTERVALO SELECCIONADO
                        $galones = $intervalo["unidades"]["u".$idModelo];
                    $kilometraje = $intervalo["kil"];
                }
                if($kilometraje == 0)
                    $kilometraje = 1;

                $ideal = $uregistro["diferencia"] * $galones / $kilometraje;//GALONAJE IDEAL
                $ideal = round($ideal,4);
                //$exceso = $uregistro["galonaje2"] - $ideal;
                $exceso = $uregistro["gtotal"] - $ideal;
                $exceso = round($exceso,4);

                $registros[$llave]["kmint"] = $kilometraje;
                $registros[$llave]["galonajeint"] = $galones;
                $registros[$llave]["ideal"] = $ideal;
                $registros[$llave]["exceso"] = $exceso;
            }
        }


        $resultado = [];
        $resultado["consumos"] = $registros;
        return $resultado;
    }

    public function ActualizarConsumos(Request $request)//Ricardo
    {
        $jconsumos = json_decode($request->consumos);
        
        /*$observacionCon = '';
        if ( isset( $jconsumo->observacionCon))
        {
            $observacionCon = $jconsumo->observacionCon;
        }*/


        // FULL - RELLENO - FULL -> SE CIERRA FULL Y RELLENO -> SE ENLAZA FULL 2
        // FULL - FULL -> SE CIERRA FULL -> SE ENLAZA FULL 2
        // RELLENO - FULL -> SE CIERRA RELLENO -> SE ENLAZA FULL 2
        // FULL - RELLENO -> NO SE GUARDA NI SE CIERRA NADA HASTA ENCONTRAR UN FULL
        // RELLENO - RELLENO -> NO SE GUARDA NI SE CIERRA NADA HASTA ENCONTRAR UN FULL
        foreach($jconsumos as $uconsumo)
        {
            if($uconsumo->tipoAba2 == "FULL")
            {
                //cerrando el abastecimiento base
                $validacion1 = Abastecimientod::where('idAbastecimientod', $uconsumo->idAbastecimientod1)
                                    ->where('cerradoAba',false)
                                    ->update(['cerradoAba' => true]);

                //cerrando las recargas las recargas
                $ids = explode('-',$uconsumo->ids);
                $validacion2 = Abastecimientod::whereIn('idAbastecimientod', $ids )
                                    ->update(['cerradoAba' => true, 'rendimientoAba' => $uconsumo->rendimiento]);

                array_unshift($ids, $uconsumo->idAbastecimientod1);

                $obj_abastecimientod = Abastecimientod::where('idAbastecimientod', $uconsumo->idAbastecimientod2)
                                            ->update([
                                                      'idealAba' => $uconsumo->ideal,
                                                      'rendimientoAba' => $uconsumo->rendimiento,
                                                      'diferenciakmAba' => $uconsumo->diferencia,
                                                      'calculadoAba' => 1,
                                                      'enlaceAba' => implode("-", $ids),
                                                      'excesoAba' => $uconsumo->exceso,
                                                  ]);
            }
        }
    }
    public function ListarFacturas( $cliente, $estado ) 
    {
        $cliente_ = "=";
        if ($cliente == 'TODOS') 
            $cliente_ = '<>';

        $arr_facturas = Comprobante::select(DB::raw('CONCAT(serieCom,"-", numeroCom) as factura'),'idComprobante','estadoCom')
            ->where('clienteCom', $cliente_, $cliente)
            ->where('estadoCom', $estado)
            ->get();

        return $arr_facturas;
    }
    public function ValidarConsumo( $cliente, $estado ) //Roger
    {   
        $cliente_ = "=";
        $estadoCom = "FACTURADO"; 
        $arr_consumos = [];
        //$estado = "FACTURADO";
        if ( $cliente == 'TODOS' ) { $cliente_ = '<>'; };
        if ( $estado == 'CERRADO') 
        { 
            $estadoCom = 'CERRADO';
            $estado = 'FACTURADO'; 
            $arr_consumos = Abastecimientod::select( DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer," ", reten.nombrePer) AS retenPer'), 
                                                     DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS trabajadorPer'), 
                                                     DB::raw('CONCAT(com.serieCom,"-", com.numeroCom) AS factura, idAbastecimientod, Kilometraje_idKilometraje,
                                                     abastecimientod.Vehiculo_idVehiculo, Abastecimientoc_idAbastecimiento, vehiculo.placaVeh, kilometrajeKil, 
                                                     galonesAba, estadodAba, tipoAba, empresaGri, tciudad.valorDat as ciudad, fecharegAba, fechaAba, empresaGri, 
                                                     Comprobante_idComprobante, abastecimientoc.Grifo_idGrifo, empresaGri, facturaAba, numeroCom, Comprobante_idComprobante,
                                                     rendimientoAba, diferenciakmAba, calculadoAba, enlaceAba, estadoCom, observacionAba'))
                    ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')
                    ->leftjoin('grifo','grifo.idGrifo','=','abastecimientoc.Grifo_idGrifo')
                    ->leftjoin('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
                    ->leftjoin('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje')
                    ->leftjoin('dato as tciudad','tciudad.idDato','=','grifo.Ciudad_idDato')
                    ->leftjoin('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
                    ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
                    ->leftJoin('comprobante as com','com.idComprobante','=','abastecimientod.Comprobante_idComprobante')

                    ->where('fechaAba','>=','2022-10-01')
                    ->where('estadodAba', $estado)
                    ->Where('estadoCom', $estadoCom)
                    ->where('empresaGri', $cliente_ , $cliente)
                    ->where('estadodAba','<>','ANULADO')
                    ->orderBy('vehiculo.placaVeh','ASC')
                    ->orderBy('abastecimientoc.fechaAba','ASC')
                    ->get();

        } else if( $estado == 'FACTURADO'){ 
            $arr_consumos = Abastecimientod::select( DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer," ", reten.nombrePer) AS retenPer'), 
                                                     DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS trabajadorPer'), 
                                                     DB::raw('CONCAT(com.serieCom,"-", com.numeroCom) AS factura, idAbastecimientod, Kilometraje_idKilometraje,
                                                     abastecimientod.Vehiculo_idVehiculo, Abastecimientoc_idAbastecimiento, vehiculo.placaVeh, kilometrajeKil, 
                                                     galonesAba, estadodAba, tipoAba, empresaGri, tciudad.valorDat as ciudad, fecharegAba, fechaAba, empresaGri, 
                                                     Comprobante_idComprobante, abastecimientoc.Grifo_idGrifo, empresaGri, facturaAba, numeroCom, Comprobante_idComprobante,
                                                     rendimientoAba, diferenciakmAba, calculadoAba, enlaceAba, estadoCom, observacionAba'))
                    ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')
                    ->leftjoin('grifo','grifo.idGrifo','=','abastecimientoc.Grifo_idGrifo')
                    ->leftjoin('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
                    ->leftjoin('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje')
                    ->leftjoin('dato as tciudad','tciudad.idDato','=','grifo.Ciudad_idDato')
                    ->leftjoin('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
                    ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
                    ->leftJoin('comprobante as com','com.idComprobante','=','abastecimientod.Comprobante_idComprobante')

                    ->where('fechaAba','>=','2022-10-01')
                    ->where('estadodAba', $estado)
                    ->where('estadoCom', $estado)
                    ->where('empresaGri', $cliente_ , $cliente)
                    ->where('estadodAba','<>','ANULADO')
                    ->orderBy('vehiculo.placaVeh','ASC')
                    ->orderBy('abastecimientoc.fechaAba','ASC')
                    ->get();

        } else if ( $estado == 'REGISTRADO' ) { 
            $arr_consumos = Abastecimientod::select( DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer," ", reten.nombrePer) AS retenPer'), 
                                                     DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS trabajadorPer'), 
                                                     DB::raw('CONCAT(com.serieCom,"-", com.numeroCom) AS factura, idAbastecimientod, Kilometraje_idKilometraje,
                                                     abastecimientod.Vehiculo_idVehiculo, Abastecimientoc_idAbastecimiento, vehiculo.placaVeh, kilometrajeKil, 
                                                     galonesAba, estadodAba, tipoAba, empresaGri, tciudad.valorDat as ciudad, fecharegAba, fechaAba, empresaGri, 
                                                     Comprobante_idComprobante, abastecimientoc.Grifo_idGrifo, empresaGri, facturaAba, numeroCom, Comprobante_idComprobante,
                                                     rendimientoAba, diferenciakmAba, calculadoAba, enlaceAba, estadoCom, observacionAba'))
            ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')
            ->leftjoin('grifo','grifo.idGrifo','=','abastecimientoc.Grifo_idGrifo')
            ->leftjoin('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
            ->leftjoin('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje')
            ->leftjoin('dato as tciudad','tciudad.idDato','=','grifo.Ciudad_idDato')
            ->leftjoin('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
            ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
            ->leftJoin('comprobante as com','com.idComprobante','=','abastecimientod.Comprobante_idComprobante')

            ->where('fechaAba','>=','2022-10-01')
            ->where('estadodAba', $estado)
            ->where('empresaGri', $cliente_ , $cliente)
            ->where('estadodAba','<>','ANULADO')
            ->orderBy('vehiculo.placaVeh','ASC')
            ->orderBy('abastecimientoc.fechaAba','ASC')
            ->get();
        }


        /*$arr_consumos = Abastecimientod::select( DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer," ", reten.nombrePer) AS retenPer'), 
                                                 DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS trabajadorPer'), 
                                                 DB::raw('CONCAT(com.serieCom,"-", com.numeroCom) AS factura, idAbastecimientod, Kilometraje_idKilometraje,
                                                         abastecimientod.Vehiculo_idVehiculo, Abastecimientoc_idAbastecimiento, vehiculo.placaVeh, kilometrajeKil, 
                                                         galonesAba, estadodAba, tipoAba, empresaGri, tciudad.valorDat as ciudad, fecharegAba, fechaAba, empresaGri, 
                                                         Comprobante_idComprobante, abastecimientoc.Grifo_idGrifo, empresaGri, facturaAba, numeroCom, Comprobante_idComprobante,
                                                         rendimientoAba, diferenciakmAba, calculadoAba, enlaceAba, estadoCom, observacionAba'))
            ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')
            //->leftJoin('consumo','consumo.idConsumo','=','abastecimientoc.Consumo_idConsumo')
            //->leftJoin('intervalo','intervalo.idIntervalo','=','abastecimientoc.Intervalo_idIntervalo')
            ->leftjoin('grifo','grifo.idGrifo','=','abastecimientoc.Grifo_idGrifo')
            ->leftjoin('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
            ->leftjoin('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje')
            ->leftjoin('dato as tciudad','tciudad.idDato','=','grifo.Ciudad_idDato')
            ->leftjoin('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
            ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
            ->leftJoin('comprobante as com','com.idComprobante','=','abastecimientod.Comprobante_idComprobante')
            
            ->where('fechaAba','>=','2022-09-01')
            //->where('fechaAba','<=',$hasta)
            ->where('estadodAba', $estado)
            //->orWhere('estadoCom', $estadoCom)
            //->where('estadoCom', $estadoCom)
            ->where('empresaGri', $cliente_ , $cliente)
            //->where('abastecimientoc.Grifo_idGrifo', $cliente_ , $cliente)
            //->whereNULL('invalidoAbad')
            ->where('estadodAba','<>','ANULADO')
            ->orderBy('vehiculo.placaVeh','ASC')
            ->orderBy('abastecimientoc.fechaAba','ASC')
            ->get();*/

        //return $arr_consumos;
        $registros = [];
        $recargas = [];//ayudata a identificar las relaciones que hay entre las recargas y el ultimo full
        $ids = [];
        $duplicados = [];
        $arr_vehiculo = [];

        foreach($arr_consumos as $uconsumo)
        {
            //$arr_vehiculo["idComprobante"] = $uconsumo->Comprobante_idComprobante;
            $arr_vehiculo["idAbastecimientoc"] = $uconsumo->Abastecimientoc_idAbastecimiento;
            $arr_vehiculo["fecha2"] = $uconsumo->fechaAba;
            $arr_vehiculo["ciudad2"] = $uconsumo->ciudad;//
            $arr_vehiculo["km2"] = $uconsumo->kilometrajeKil;
            $arr_vehiculo["tipoAba2"] = $uconsumo->tipoAba;
            $arr_vehiculo["idAbastecimientod2"] = $uconsumo->idAbastecimientod;
            $arr_vehiculo["galonaje2"] = $uconsumo->galonesAba;
            $arr_vehiculo["observacionAba"] = $uconsumo->observacionAba;
            $arr_vehiculo["idVehiculo"] = $uconsumo->Vehiculo_idVehiculo;
            $arr_vehiculo["placaVeh"] = $uconsumo->placaVeh;
            $arr_vehiculo["trabajadorPer"] = $uconsumo->trabajadorPer;
            $arr_vehiculo["retenPer"] = $uconsumo->retenPer;
            $arr_vehiculo["precioGri"] = 0;
            $arr_vehiculo["proveedor"] = $uconsumo->empresaGri;
            $arr_vehiculo["estadoGrifo"] = "";
            $arr_vehiculo["idCombustible"] = 0;
            $arr_vehiculo["facturaAba"] = $uconsumo->factura;
            $arr_vehiculo["idComprobante"] = $uconsumo->Comprobante_idComprobante;
            $arr_vehiculo["estadoCom"] = $uconsumo->estadoCom;
            $arr_vehiculo["idGrifo"] = $uconsumo->Grifo_idGrifo;
            //$arr_vehiculo["idGrifo"] = 0;
            
            
            if ( $uconsumo->calculadoAba !== 0 )
            {
                //$duplicados[] = $uconsumo->idAbastecimientod;
                /*$temporal = explode("-", $uconsumo->enlaceAba); 
                //$ids[] = $uconsumo->enlaceAba;
                for ( $i = 0; $i < sizeof($temporal); $i++ )
                {
                    //$ids[] = $temporal[$i];
                    //$ids[] = intval($temporal[$i]);
                    $ids[] = $uconsumo->idAbastecimientod; 
                    //array_splice($ids, 2);
                }*/
                //if( ($clave = array_search(3691, $ids)) !== false)
                /*if( ($clave = array_search($uconsumo->idAbastecimientod, $ids)) !== false)
                {
                    unset($ids[$clave]);
                    //print_r($ids);
                }*/
                //$ids = array_diff($ids, array($uconsumo->idAbastecimientod));
                $arr_vehiculo["rendimientoAba"] = $uconsumo->rendimientoAba;
                $arr_vehiculo["diferenciakmAba"] = $uconsumo->diferenciakmAba;
            } else { 
                $arr_vehiculo["rendimientoAba"] = 0;
                $arr_vehiculo["diferenciakmAba"] = 0;
            }

            $arr_precios = Combustible::select('precioCom','idCombustible','estadoCom','Grifo_idGrifo')
                ->where('Grifo_idGrifo',"=", $uconsumo->Grifo_idGrifo)
                //->where('fechaCom', $arr_vehiculo["fecha2"])
                ->whereDate('fechaCom', date('Y-m-d', strtotime($arr_vehiculo["fecha2"])))
                ->first();

            if(isset( $arr_precios["precioCom"])) 
            {
                $arr_vehiculo["idGrifo"] = $arr_precios["Grifo_idGrifo"];
                $arr_vehiculo["precioGri"] = $arr_precios["precioCom"];
                $arr_vehiculo["estadoGrifo"] = $arr_precios["estadoCom"];
                $arr_vehiculo["idCombustible"] = $arr_precios["idCombustible"];
            }
            $registros[] = $arr_vehiculo;
        }
        /*if( ($clave = array_search(3691, $ids)) !== false)
        {
            unset($ids[$clave]);
            //print_r($ids);
        }
        foreach( $ids as $id) 
        {
            $duplicados[] = $id;
        }*/
        //return $duplicados;
        // Recupero todos los enlaces del Abastecimiento
        for ( $i = 0; $i < sizeof($duplicados); $i++)
        {

            $enlaces = Abastecimientod::select( DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer," ", reten.nombrePer) AS retenPer'), 
                                                DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS trabajadorPer'), 
                                                DB::raw('CONCAT(com.serieCom,"-", com.numeroCom) AS factura, idAbastecimientod, Kilometraje_idKilometraje,
                                                        abastecimientod.Vehiculo_idVehiculo, Abastecimientoc_idAbastecimiento, vehiculo.placaVeh, kilometrajeKil, 
                                                        galonesAba, estadodAba, tipoAba, empresaGri, tciudad.valorDat as ciudad, fecharegAba, fechaAba, empresaGri, 
                                                        Comprobante_idComprobante, abastecimientoc.Grifo_idGrifo, empresaGri, facturaAba, Comprobante_idComprobante,
                                                        rendimientoAba, diferenciakmAba, calculadoAba, enlaceAba'))
                                        ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')
                                        ->leftjoin('grifo','grifo.idGrifo','=','abastecimientoc.Grifo_idGrifo')
                                        ->leftjoin('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
                                        ->leftjoin('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje')
                                        ->leftjoin('dato as tciudad','tciudad.idDato','=','grifo.Ciudad_idDato')
                                        ->leftjoin('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
                                        ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
                                        ->leftJoin('comprobante as com','com.idComprobante','=','abastecimientod.Comprobante_idComprobante')
                                        ->orderBy('abastecimientoc.fechaAba','ASC')
                                        //->where('idAbastecimientod','<>', '3691')
                                        ->where('idAbastecimientod', $duplicados[$i])
                                        ->get();

            $arr_vehiculo["idAbastecimientoc"] = $enlaces[0]["Abastecimientoc_idAbastecimiento"];
            $arr_vehiculo["fecha2"] = $enlaces[0]["fechaAba"];
            $arr_vehiculo["ciudad2"] = $enlaces[0]["ciudad"];//
            $arr_vehiculo["km2"] = $enlaces[0]["kilometrajeKil"];
            $arr_vehiculo["tipoAba2"] = $enlaces[0]["tipoAba"];
            $arr_vehiculo["idAbastecimientod2"] = $enlaces[0]["idAbastecimientod"];
            $arr_vehiculo["galonaje2"] = $enlaces[0]["galonesAba"];
            $arr_vehiculo["idVehiculo"] = $enlaces[0]["Vehiculo_idVehiculo"];
            $arr_vehiculo["placaVeh"] = $enlaces[0]["placaVeh"];
            $arr_vehiculo["trabajadorPer"] = $enlaces[0]["trabajadorPer"];
            $arr_vehiculo["retenPer"] = $enlaces[0]["retenPer"];
            $arr_vehiculo["precioGri"] = 0;
            $arr_vehiculo["proveedor"] = $enlaces[0]["empresaGri"];
            $arr_vehiculo["estadoGrifo"] = "";
            $arr_vehiculo["idCombustible"] = 0;
            $arr_vehiculo["facturaAba"] = $enlaces[0]["factura"];
            //$arr_vehiculo["facturaAba"] = $enlaces[0]["facturaAba"];
            $arr_vehiculo["idComprobante"] = $enlaces[0]["Comprobante_idComprobante"];
            $arr_vehiculo["rendimientoAba"] = $enlaces[0]["rendimientoAba"];
        
            $arr_precios = Combustible::select('precioCom','idCombustible','estadoCom')
                ->where('Grifo_idGrifo',"=", $enlaces[0]["Grifo_idGrifo"])
                ->whereDate('fechaCom', date('Y-m-d', strtotime($arr_vehiculo["fecha2"])))
                ->first();
            
            if(isset( $arr_precios["precioCom"])) 
            {
                $arr_vehiculo["precioGri"] = $arr_precios["precioCom"];
                $arr_vehiculo["estadoGrifo"] = $arr_precios["estadoCom"];
                $arr_vehiculo["idCombustible"] = $arr_precios["idCombustible"];
            }
            //$registros[] = $enlaces[0];
            $registros[] = $arr_vehiculo;
        }

        $resultado = [];
        $resultado["consumos"] = $registros;
        //$resultado["duplicados"] = $duplicados;
        //$resultado["ids"] = $ids;
        return $resultado;
    }
    public function GuardarComprobanteCombustible(Request $request) //Roger
    {
        //Roger
        $comprobante = json_decode( $request->comprobante); 
        $vale = json_decode( $request->vale);

        $obj_comprobante = new Comprobante(); 
        $obj_comprobante->serieCom = $comprobante->serieCom;
        $obj_comprobante->numeroCom = $comprobante->numeroCom; 
        $obj_comprobante->totalCom = $comprobante->totalCom;
        $obj_comprobante->femisionCom = $comprobante->femisionCom; 
        $obj_comprobante->clienteCom = $comprobante->clienteCom;
        $obj_comprobante->encuadreCom = $comprobante->encuadreCom;
        $obj_comprobante->encuadretotalCom = $comprobante->encuadretotalCom;
        $obj_comprobante->fingresoCom = now();
        $obj_comprobante->observacionCom = $comprobante->observacionCom;
        $obj_comprobante->estadoCom = 'FACTURADO';
        $obj_comprobante->save();

        foreach ( $vale as $uvale)
        {

            $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
                ->where('idAbastecimientod', $uvale->idAbastecimientod2)
                ->update(['facturaAba'=> $obj_comprobante->serieCom,
                        'Comprobante_idComprobante'=> $obj_comprobante->idComprobante, 
                        'estadodAba' =>'FACTURADO',
                        'galonesAba' => $uvale->galonaje2,
                        'precioAba' => $uvale->precioGri,
                        'observacionAba' => $uvale->observacionAba]);
                        //'calculadoAba' => true]);
                        //'cerradoAba' => true]);
            
            $up_combustible = Combustible::select('idCombustible.*')
                ->where('idCombustible', $uvale->idCombustible)
                ->update(['estadoCom' => "FACTURADO"]);


            /*if ( isset( $uvale->abastecimiento2))
            {
                $idAbastecimiento1 = ""; 
                if ($uvale->tipoAba == "FULL")
                {

                    if ( isset( $uvale->abastecimiento1)) 
                    { 
                        $idAbastecimiento1 = $uvale->abastecimiento1;
                        $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
                        ->where('idAbastecimientod', $uvale->abastecimiento1)
                        ->update(['cerradoAba' => true]); 
                    }

                    $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
                    ->where('idAbastecimientod', $uvale->abastecimiento2)
                    ->update(['facturaAba'=> $obj_comprobante->serieCom,
                          'Comprobante_idComprobante'=> $obj_comprobante->idComprobante, 
                          'estadodAba' =>'FACTURADO',
                          'galonesAba' => $uvale->gal2,
                          'rendimientoAba' => $uvale->rendimiento,
                          'diferenciakmAba' => $uvale->diferencia, 
                          'enlaceAba' => $idAbastecimiento1.$uvale->ids,
                          'precioAba' => $uvale->precioGri,
                          'cerradoAba' => false]);

                    $id = explode('-',$uvale->ids);
                    $up_abastecimientod = Abastecimientod::select('idabastecimientod.*')
                    ->whereIn('idAbastecimientod', $id )
                    ->update(['cerradoAba' => true, 
                              'rendimientoAba' => $uvale->rendimiento]);

                } elseif ($uvale->tipoAba == 'RELLENO') { 
                    
                    if ( isset( $uvale->abastecimiento1)) 
                    { 
                        $idAbastecimiento1 = $uvale->abastecimiento1;
                    }

                    $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
                    ->where('idAbastecimientod', $uvale->abastecimiento2)
                    ->update(['facturaAba'=> $obj_comprobante->serieCom,
                          'Comprobante_idComprobante'=> $obj_comprobante->idComprobante, 
                          'galonesAba'=> $uvale->gal2, 
                          'estadodAba' =>'FACTURADO', 
                          'rendimientoAba' => "",
                          'enlaceAba' => $idAbastecimiento1.$uvale->ids]);
                } 
            }*/
        }
    }
    
    public function ActualizarComprobanteCombustible( Request $request ) //Roger
    {
        // Roger
        $comprobante = json_decode( $request->comprobante); 
        $vale = json_decode( $request->vale);
        $eliminados = json_decode( $request->eliminados);

        if ( $comprobante->estado == 'guardar') 
        {
            $up_comprobante = Comprobante::select('idComprobante.*')
            ->where('idComprobante', $comprobante->idComprobante)
            ->update(['serieCom' => $comprobante->serieCom, 
                      'numeroCom' => $comprobante->numeroCom, 
                      'totalCom' => $comprobante->totalCom, 
                      'femisionCom' => $comprobante->femisionCom, 
                      'clienteCom' => $comprobante->clienteCom, 
                      'encuadreCom' => $comprobante->encuadreCom, 
                      'encuadretotalCom' => $comprobante->encuadretotalCom,
                      'observacionCom' => $comprobante->observacionCom]);
        }

        if ( $comprobante->estado == 'cerrar') 
        {
            $up_comprobante = Comprobante::select('idComprobante.*')
            ->where('idComprobante', $comprobante->idComprobante)
            ->update(['serieCom' => $comprobante->serieCom, 
                      'numeroCom' => $comprobante->numeroCom, 
                      'totalCom' => $comprobante->totalCom, 
                      'femisionCom' => $comprobante->femisionCom, 
                      'clienteCom' => $comprobante->clienteCom, 
                      'encuadreCom' => $comprobante->encuadreCom,
                      'encuadretotalCom' => $comprobante->encuadretotalCom, 
                      'estadoCom' => 'CERRADO', 
                      'observacionCom' => $comprobante->observacionCom]);
        }

        foreach ( $vale as $uvale ) 
        {
            $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
            ->where('idAbastecimientod', $uvale->idAbastecimientod2)
            ->update(['facturaAba'=> $comprobante->serieCom,
                    'Comprobante_idComprobante'=> $comprobante->idComprobante, 
                    'estadodAba' =>'FACTURADO',
                    'galonesAba' => $uvale->galonaje2,
                    'observacionAba' => $uvale->observacionAba,
                    'precioAba' => $uvale->precioGri]);
                    //'cerradoAba' => true]);

            $up_combustible = Combustible::select('idCombustible.*')
                ->where('idCombustible', $uvale->idCombustible)
                ->update(['estadoCom' => "FACTURADO"]);
        }
        // vales Eliminados
        foreach ( $eliminados as $ueliminados )
        {
            $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
            ->where('idAbastecimientod', $ueliminados->idAbastecimientod2)
            ->update(['facturaAba'=> null,
                    'Comprobante_idComprobante'=> null, 
                    'estadodAba' =>'REGISTRADO']);
                    //'cerradoAba' => false]);

            /*$up_combustible = Combustible::select('idCombustible.*')
            ->where('idCombustible', $uvale->idCombustible)
            ->update(['estadoCom' => "FACTURADO"]);*/
        }
    }
    
    public function ListarDetalle( $idComprobante ) //Roger
    {
        // Roger
        // Recuperar consumo para editar 
        $arr_facturados = Abastecimientod::select( DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer," ", reten.nombrePer) AS retenPer'), 
                                                   DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS trabajadorPer'), 
                                                   DB::raw('CONCAT(com.serieCom,"-", com.numeroCom) AS factura, 
                                                    idAbastecimientod, Kilometraje_idKilometraje, abastecimientod.Vehiculo_idVehiculo, Abastecimientoc_idAbastecimiento,
                                                    vehiculo.placaVeh, kilometrajeKil, galonesAba, estadodAba, tipoAba, empresaGri, tciudad.valorDat as ciudad, fecharegAba,
                                                    fechaAba, empresaGri, Comprobante_idComprobante, abastecimientoc.Grifo_idGrifo, empresaGri, facturaAba, Comprobante_idComprobante, 
                                                    rendimientoAba, observacionAba'))
            ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')
            ->leftjoin('grifo','grifo.idGrifo','=','abastecimientoc.Grifo_idGrifo')
            ->leftjoin('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
            ->leftjoin('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje')
            ->leftjoin('dato as tciudad','tciudad.idDato','=','grifo.Ciudad_idDato')
            ->leftjoin('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
            ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
            ->leftJoin('comprobante as com','com.idComprobante','=','abastecimientod.Comprobante_idComprobante')
            ->where('Comprobante_idComprobante', $idComprobante)
            ->orderBy('vehiculo.placaVeh','ASC')
            ->orderBy('abastecimientoc.fechaAba','ASC')
            ->get();

        $arr_comprobante = Comprobante::select('idComprobante','serieCom','numeroCom','totalCom','clienteCom','fingresoCom','encuadreCom','encuadretotalCom','observacionCom')
            ->where('idComprobante', $idComprobante)
            ->get();

        $registros = [];
        
        foreach($arr_facturados as $uconsumo)
        {
            $arr_vehiculo["idAbastecimientoc"] = $uconsumo->Abastecimientoc_idAbastecimiento;
            $arr_vehiculo["fecha2"] = $uconsumo->fechaAba;
            $arr_vehiculo["ciudad2"] = $uconsumo->ciudad;//
            $arr_vehiculo["km2"] = $uconsumo->kilometrajeKil;
            $arr_vehiculo["tipoAba2"] = $uconsumo->tipoAba;
            $arr_vehiculo["idAbastecimientod2"] = $uconsumo->idAbastecimientod;
            $arr_vehiculo["galonaje2"] = $uconsumo->galonesAba;
            $arr_vehiculo["rendimientoAba"] = $uconsumo->rendimientoAba;
            //$arr_vehiculo["rendimiento"] = 0;
            $arr_vehiculo["idVehiculo"] = $uconsumo->Vehiculo_idVehiculo;
            $arr_vehiculo["placaVeh"] = $uconsumo->placaVeh;
            $arr_vehiculo["trabajadorPer"] = $uconsumo->trabajadorPer;
            $arr_vehiculo["retenPer"] = $uconsumo->retenPer;
            $arr_vehiculo["precioGri"] = 0;
            $arr_vehiculo["proveedor"] = $uconsumo->empresaGri;
            $arr_vehiculo["estadoGrifo"] = "";
            $arr_vehiculo["idCombustible"] = 0;
            $arr_vehiculo["facturaAba"] = $uconsumo->facturaAba;
            $arr_vehiculo["idComprobante"] = $uconsumo->Comprobante_idComprobante;
            $arr_vehiculo["observacionAba"] = $uconsumo->observacionAba;

            $arr_precios = Combustible::select('precioCom','idCombustible','estadoCom')
            ->where('Grifo_idGrifo',"=", $uconsumo->Grifo_idGrifo)
            ->whereDate('fechaCom', date('Y-m-d', strtotime($arr_vehiculo["fecha2"])))
            ->first();

            if(isset( $arr_precios["precioCom"])) 
            {
                $arr_vehiculo["precioGri"] = $arr_precios["precioCom"];
                $arr_vehiculo["estadoGrifo"] = $arr_precios["estadoCom"];
                $arr_vehiculo["idCombustible"] = $arr_precios["idCombustible"];
            }
            $registros[] = $arr_vehiculo;
        }
        
        $resultado = [];
        $resultado["consumos"] = $registros;
        $resultado["cabecera"] = $arr_comprobante;

        return $resultado;

        //return $arr_facturados;
    }
    
    public function ListarDescuentos($desde,$hasta,$descontado)
    {

        /*$estados = [];
        if($calculado=="true")
        {
            $estados = ["FACTURADO"];
        }
        else
        {
            //$estados = ["REGISTRADO","APLICADO"];
            $estados = ["REGISTRADO"];
        }*/

        if($descontado == "DESCONTADO")
            $descontado = 1;
        else
            $descontado = 0;

        $arr_abastecimientos = [];
        if($descontado == 0)
        {
            $arr_abastecimientos = Abastecimientod::select('abastecimientod.*','abastecimientoc.*','consumo.rutaCon', 'intervalo.nombreInt','vehiculo.placaVeh','empresaGri','tciudad.valorDat as ciudad', DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer," ", reten.nombrePer) AS retenPer'), DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS trabajadorPer'))
                ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')
                
                ->leftJoin('consumo','consumo.idConsumo','=','abastecimientoc.Consumo_idConsumo')
                ->leftJoin('intervalo','intervalo.idIntervalo','=','abastecimientoc.Intervalo_idIntervalo')

                ->leftjoin('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
                ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
                ->leftjoin('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')

                ->leftjoin('grifo','grifo.idGrifo','=','abastecimientoc.Grifo_idGrifo')
                ->leftjoin('dato as tciudad','tciudad.idDato','=','grifo.Ciudad_idDato')

                ->where('fechaAba','>=',$desde)
                ->where('fechaAba','<=',$hasta)
                ->where('descontadoAba','=',$descontado)
                //->where('estadodAba','=','FACTURADO')
                ->where('calculadoAba','=',1)
                ->where('excesoAba','>',0)
                ->orderBy('vehiculo.placaVeh','ASC')
                ->orderBy('abastecimientoc.fechaAba','ASC')
                ->get();

            foreach($arr_abastecimientos as $llave => $uaba)
            {
                $enlaces = explode("-", $uaba->enlaceAba);

                $arr_recargas = Abastecimientod::select('precioAba','galonesAba','Persona_idPersona','Reten_idPersona',
                                DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS trabajadorPer'),
                                DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer," ", reten.nombrePer) AS retenPer'))
                    ->leftjoin('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
                    ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
                    
                    ->where('abastecimientod.Vehiculo_idVehiculo', $uaba->Vehiculo_idVehiculo)

                    ->whereIn('idAbastecimientod', $enlaces)

                    ->get();

                $trabajadores = [];

                if($uaba->Persona_idPersona != null)
                {
                    $trabajador = [];
                    $trabajador["id"] = $uaba->Persona_idPersona;
                    $trabajador["per"] = $uaba->trabajadorPer;
                    $trabajador["des"] = 0;
                    $trabajador["tot"] = "";
                    $trabajador["obs"] = "";

                    $trabajadores["p".$uaba->Persona_idPersona] = $trabajador;
                }

                if($uaba->Reten_idPersona != null)
                {
                    $trabajador = [];
                    $trabajador["id"] = $uaba->Reten_idPersona;
                    $trabajador["per"] = $uaba->retenPer;
                    $trabajador["des"] = 0;
                    $trabajador["tot"] = "";
                    $trabajador["obs"] = "";

                    $trabajadores["p".$uaba->Reten_idPersona] = $trabajador;
                }

                $total = $uaba->galonesAba * $uaba->precioAba;
                $tgalones = $uaba->galonesAba;

                foreach($arr_recargas as $urecarga)
                {
                    $monto = $urecarga->galonesAba * $urecarga->precioAba;
                    $total += $monto;
                    $tgalones += $urecarga->galonesAba;

                    if($urecarga->Persona_idPersona != null)
                    {
                        $trabajador = [];
                        $trabajador["id"] = $urecarga->Persona_idPersona;
                        $trabajador["per"] = $urecarga->trabajadorPer;
                        $trabajador["des"] = 0;
                        $trabajador["tot"] = "";
                        $trabajador["obs"] = "";

                        $trabajadores["p".$urecarga->Persona_idPersona] = $trabajador;
                    }

                    if($urecarga->Reten_idPersona != null)
                    {
                        $trabajador = [];
                        $trabajador["id"] = $urecarga->Reten_idPersona;
                        $trabajador["per"] = $urecarga->retenPer;
                        $trabajador["des"] = 0;
                        $trabajador["tot"] = "";
                        $trabajador["obs"] = "";

                        $trabajadores["p".$urecarga->Reten_idPersona] = $trabajador;
                    }
                }

                $tprecio = $total / $tgalones;
                $saldo = $uaba->excesoAba;
                $descuento = round($uaba->excesoAba * $tprecio,4);

                $gal_persona = $saldo / count($trabajadores);
                $tot_persona = round($gal_persona * $tprecio,2);

                $nombres = "";
                foreach($trabajadores as $llavet => $utrabajador)
                {
                    $nombres .= $utrabajador["per"]." - ";

                    $trabajadores[$llavet]["des"] = $gal_persona;
                    $trabajadores[$llavet]["tot"] = $tot_persona;
                }
                
                $arr_abastecimientos[$llave]["recargas"] = $arr_recargas;
                $arr_abastecimientos[$llave]["galones"] = $tgalones;
                $arr_abastecimientos[$llave]["precio"] = $tprecio;
                $arr_abastecimientos[$llave]["exceso"] = $uaba->excesoAba;
                $arr_abastecimientos[$llave]["tolerancia"] = 0;
                $arr_abastecimientos[$llave]["saldo"] = $saldo;
                $arr_abastecimientos[$llave]["descuento"] = $descuento;
                $arr_abastecimientos[$llave]["total"] = $total;
                $arr_abastecimientos[$llave]["trabajadores"] = $trabajadores;
                $arr_abastecimientos[$llave]["nombres"] = $nombres;
            }
        }
        else
        {
            /************************************************************************/
            $arr_abastecimientos = Abastecimientod::select('abastecimientod.*','abastecimientoc.*','consumo.rutaCon', 'intervalo.nombreInt','vehiculo.placaVeh','empresaGri','tciudad.valorDat as ciudad', DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer," ", reten.nombrePer) AS retenPer'), DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS trabajadorPer'))
                ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')
                
                ->leftJoin('consumo','consumo.idConsumo','=','abastecimientoc.Consumo_idConsumo')
                ->leftJoin('intervalo','intervalo.idIntervalo','=','abastecimientoc.Intervalo_idIntervalo')

                ->leftjoin('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
                ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
                ->leftjoin('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')

                ->leftjoin('grifo','grifo.idGrifo','=','abastecimientoc.Grifo_idGrifo')
                ->leftjoin('dato as tciudad','tciudad.idDato','=','grifo.Ciudad_idDato')

                ->where('fechaAba','>=',$desde)
                ->where('fechaAba','<=',$hasta)
                ->where('descontadoAba','=',$descontado)
                ->orderBy('vehiculo.placaVeh','ASC')
                ->orderBy('abastecimientoc.fechaAba','ASC')
                ->get();

            foreach($arr_abastecimientos as $llave => $uaba)
            {
                $enlaces = explode("-", $uaba->enlaceAba);

                $arr_recargas = Abastecimientod::select('precioAba','galonesAba','Persona_idPersona','Reten_idPersona',
                                DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS trabajadorPer'),
                                DB::raw('CONCAT(reten.paternoPer," ", reten.maternoPer," ", reten.nombrePer) AS retenPer'))
                    ->leftjoin('persona','persona.idPersona','=','abastecimientod.Persona_idPersona')
                    ->leftJoin('persona as reten','reten.idPersona','=','abastecimientod.Reten_idPersona')
                    
                    ->where('abastecimientod.Vehiculo_idVehiculo', $uaba->Vehiculo_idVehiculo)

                    ->whereIn('idAbastecimientod', $enlaces)

                    ->get();

                $trabajadores = [];

                if($uaba->Persona_idPersona != null)
                {
                    $trabajador = [];
                    $trabajador["id"] = $uaba->Persona_idPersona;
                    $trabajador["per"] = $uaba->trabajadorPer;
                    $trabajador["des"] = 0;
                    $trabajador["tot"] = "";
                    $trabajador["obs"] = "";

                    $trabajadores["p".$uaba->Persona_idPersona] = $trabajador;
                }

                if($uaba->Reten_idPersona != null)
                {
                    $trabajador = [];
                    $trabajador["id"] = $uaba->Reten_idPersona;
                    $trabajador["per"] = $uaba->retenPer;
                    $trabajador["des"] = 0;
                    $trabajador["tot"] = "";
                    $trabajador["obs"] = "";

                    $trabajadores["p".$uaba->Reten_idPersona] = $trabajador;
                }

                $total = $uaba->galonesAba * $uaba->precioAba;
                $tgalones = $uaba->galonesAba;

                foreach($arr_recargas as $urecarga)
                {
                    $monto = $urecarga->galonesAba * $urecarga->precioAba;
                    $total += $monto;
                    $tgalones += $urecarga->galonesAba;

                    if($urecarga->Persona_idPersona != null)
                    {
                        $trabajador = [];
                        $trabajador["id"] = $urecarga->Persona_idPersona;
                        $trabajador["per"] = $urecarga->trabajadorPer;
                        $trabajador["des"] = 0;
                        $trabajador["tot"] = "";
                        $trabajador["obs"] = "";

                        $trabajadores["p".$urecarga->Persona_idPersona] = $trabajador;
                    }


                    if($urecarga->Reten_idPersona != null)
                    {
                        $trabajador = [];
                        $trabajador["id"] = $urecarga->Reten_idPersona;
                        $trabajador["per"] = $urecarga->retenPer;
                        $trabajador["des"] = 0;
                        $trabajador["tot"] = "";
                        $trabajador["obs"] = "";

                        $trabajadores["p".$urecarga->Reten_idPersona] = $trabajador;
                    }
                }

                $nombres = "";
                foreach($trabajadores as $utrabajador)
                {
                    $nombres .= $utrabajador["per"]." - ";
                }

                $tprecio = $total / $tgalones;
                
                $saldo = $uaba->excesoAba;
                $descuento = round($uaba->excesoAba * $tprecio,4);

                //obteniendo los descuentos guardados
                $arr_descuentos = Descuento::select('*')
                    ->where('idAbastecimientod', $uaba->idAbastecimientod)
                    ->get();

                foreach($arr_descuentos as $udescuento)
                {
                    $trabajadores["p".$udescuento->Persona_idPersona]["des"] = round($udescuento->totalDes/tprecio,4);
                    $trabajadores["p".$udescuento->Persona_idPersona]["tot"] = $udescuento->totalDes;
                    $trabajadores["p".$udescuento->Persona_idPersona]["obs"] = $udescuento->observacionDes;
                }               

                $arr_abastecimientos[$llave]["recargas"] = $arr_recargas;
                $arr_abastecimientos[$llave]["galones"] = $tgalones;
                $arr_abastecimientos[$llave]["precio"] = $tprecio;
                $arr_abastecimientos[$llave]["exceso"] = $uaba->excesoAba;
                $arr_abastecimientos[$llave]["tolerancia"] = 0;
                $arr_abastecimientos[$llave]["saldo"] = $saldo;
                $arr_abastecimientos[$llave]["descuento"] = $descuento;
                $arr_abastecimientos[$llave]["total"] = $total;
                $arr_abastecimientos[$llave]["trabajadores"] = $trabajadores;
                $arr_abastecimientos[$llave]["nombres"] = $nombres;
            }
            /**********************************************************************/
        }

        $resultado = [];
        $resultado["registros"] = $arr_abastecimientos;
        return $resultado;
    }

    public function GuardarDescuentos(Request $request)
    {
        $jdescuento = json_decode($request->descuentos);
        
        foreach($jdescuento->trabajadores as $utrabajador)
        {
            $obj_descuento = new Descuento(); 
            $obj_descuento->Persona_idPersona = $utrabajador->id;
            $obj_descuento->Externo_idExterno = $jdescuento->idAbastecimientod;
            $obj_descuento->tipoDes = "COMBUSTIBLE";
            $obj_descuento->totalDes = round($utrabajador->des * $jdescuento->precio,2);
            //$obj_descuento->detalleDes = "Exceso de Consumo de Combustible en Unidad ".$placaVeh." ruta ".$rutaCon." por ".$utrabajador->des." Gal. a S/.".$jdescuento->precio."/Gal.";
            //$obj_descuento->observacionDes = $utrabajador->obs;
            $obj_descuento->estadoDes = "PENDIENTE";
            $obj_descuento->periodoDes = date("Y-m")."-01";
            $obj_descuento->save();        
        }
        $obj_abastecimientod = Abastecimientod::where('idAbastecimientod', $jdescuento->idAbastecimientod)
                                            ->update([
                                                      'descontadoAba' => 1,
                                                      'toleranciaAba' => $jdescuento->tolerancia,
                                                      'saldoAba' => $jdescuento->saldo,
                                                      'descuentoAba' => $jdescuento->descuento,
                                                      //galones totales (incluido la recarga)
                                                  ]);
    }

    public function PDFConsumo($idComprobante) //Roger
    {
        //Roger
        $obj_comprobante = Comprobante::select('idComprobante','serieCom','numeroCom','femisionCom','estadoCom','totalCom','clienteCom','fingresoCom',
                                               'encuadreCom','encuadretotalCom','observacionCom')
            ->where('idComprobante', $idComprobante)
            ->first();
        //$obj_comprobante->totalCom = number_format($obj_comprobante->totalCom, 0, '.', ' '); 
        $arr_vconsumo = Abastecimientod::select('idAbastecimientod','Kilometraje_idKilometraje','abastecimientod.Vehiculo_idVehiculo','Abastecimientoc_idAbastecimiento',
                                                         'vehiculo.placaVeh', 'kilometrajeKil', 'galonesAba', 'estadodAba', 'tipoAba', 'empresaGri', 'dato.valorDat', 'fechaAba', 
                                                         'enlaceAba', 'nombreCue', 'abastecimientoc.Grifo_idGrifo', 'rendimientoAba', 'modelo.valorDat as modelo', 'precioAba')
            ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')
            ->leftjoin('grifo','grifo.idGrifo','=','abastecimientoc.Grifo_idGrifo')
            ->leftjoin('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
            ->leftjoin('dato as modelo','modelo.idDato','=','vehiculo.Modelo_idDato')
            ->leftjoin('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje')
            ->leftjoin('dato','dato.idDato','=','grifo.Ciudad_idDato')
            ->leftJoin('cuenta','cuenta.idCuenta','=','abastecimientoc.Cuenta_idCuenta')
            ->where('Comprobante_idComprobante',$idComprobante)
            ->orderBy('vehiculo.placaVeh','ASC')
            ->orderBy('abastecimientoc.fechaAba','ASC')
            ->get();

            $registros = [];
            $cabecera = []; 
            $cuerpo = [];
            $data = [];
            $cont = 0;
            $totalGal = 0;
    
        foreach( $arr_vconsumo as $uconsumo )
        {

            $id = explode('-',$uconsumo->enlaceAba);
            $arr_vehiculo = [];
            $galones = 0;
            $totalGal = $totalGal + $uconsumo->galonesAba;

            $arr_vehiculo["idVehiculo"] = $uconsumo->Vehiculo_idVehiculo;
            $arr_vehiculo["modelo"] = $uconsumo->modelo;
            $arr_vehiculo["trabajadorPer"] = $uconsumo->trabajadorPer;
            $arr_vehiculo["reten"] = $uconsumo->reten;
            $arr_vehiculo["placaVeh"] = $uconsumo->placaVeh;
            $arr_vehiculo["fecha2"] = $uconsumo->fechaAba;
            $arr_vehiculo["kmAnterior"] = number_format($uconsumo->kilometrajeKil, 0, '.', ' '); 
            $arr_vehiculo["gal2"] = $uconsumo->galonesAba;
            $arr_vehiculo["abastecimiento2"] = $uconsumo->idAbastecimientod;
            $arr_vehiculo["ciudad"] = $uconsumo->valorDat;
            $arr_vehiculo["tipoAba"] = $uconsumo->tipoAba;
            $arr_vehiculo["cliente"] = $uconsumo->empresaGri;
            $arr_vehiculo["diferencia"] = ""; 
            $arr_vehiculo["rendimiento"] = $uconsumo->rendimientoAba;
            $arr_vehiculo["ciudad1"] = ""; 
            $arr_vehiculo["tipoAba1"] = ""; 
            $arr_vehiculo["km"] = ""; 
            $arr_vehiculo["gal1"] = ""; 
            $arr_vehiculo["galrecarga"] = "";
            $arr_vehiculo["nombreCue"] = $uconsumo->nombreCue;
            $arr_vehiculo["precioGri"] = $uconsumo->precioAba;
            $arr_vehiculo["idGrifo"] = $uconsumo->Grifo_idGrifo;
            

            $arr_recargas = Abastecimientod::select('idAbastecimientod','Kilometraje_idKilometraje','abastecimientod.Vehiculo_idVehiculo','Abastecimientoc_idAbastecimiento',
                                                    'kilometrajeKil','galonesAba','estadodAba','tipoAba','empresaGri','valorDat','fecharegAba','fechaAba','enlaceAba','placaVeh')
                ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')
                ->join('grifo','grifo.idGrifo','=','abastecimientoc.Grifo_idGrifo')
                ->join('vehiculo','vehiculo.idVehiculo','=','abastecimientod.Vehiculo_idVehiculo')
                ->join('kilometraje','kilometraje.idKilometraje','=','abastecimientod.Kilometraje_idKilometraje')
                ->join('dato','dato.idDato','=','grifo.Ciudad_idDato')
                ->where('idAbastecimientod','=',$id)
                ->orderBy('kilometraje.kilometrajeKil','DESC')
                ->get();
            
            foreach ( $arr_recargas as $urecarga) 
            {
                $arr_vehiculo["ciudad1"] = $urecarga->valorDat; 
                $arr_vehiculo["km"] = number_format($urecarga->kilometrajeKil, 0, '.', ' '); 
                $arr_vehiculo["gal1"] = $urecarga->galonesAba;
                $arr_vehiculo["fecha1"] = $urecarga->fechaAba;
                $arr_vehiculo["abastecimiento1"] = $urecarga->idAbastecimientod;
                $arr_vehiculo["diferencia"] = $uconsumo->kilometrajeKil - $urecarga->kilometrajeKil;
                $arr_vehiculo["tipoAba1"] = $urecarga->tipoAba;

                $galones = $galones + $urecarga->galonesAba;
                $arr_vehiculo["galrecarga"] = $galones;
                $galones = 0;
            }
            $registros[$cont] = $arr_vehiculo;
            $cont++;
            $data["cuerpo"] = $registros;

        }
        $obj_comprobante->totalGal = $totalGal;
        $data["cabecera"] = $obj_comprobante; 
        //return $data;
        $pdf=PDF::loadView('Pdfs.Combustible.Rendimiento', $data);
        $pdf->setPaper('A4','portrait');
        return $pdf->stream();
    }   
}