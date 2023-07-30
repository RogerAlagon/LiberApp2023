<?php 
namespace App\Http\Controllers; 

use App\Kilometraje;
use App\Vehiculo;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Exports\KilometrajeExport; 
use Maatwebsite\Excel\Facades\Excel;


/*use App\Exports\DepositoExport;
use Maatwebsite\Excel\Facades\Excel;*/

class KilometrajeController extends Controller 
{
    public function ListarKilometrajePromedio( $dia )
    {
        $registros = [];
        $kilometrajes = []; 
        $vehiculos = [];
        $indices = [];
        $fecha_actual = date("Y-m-d");
        //$fecha_actual = "2023-01-01";
        //$fecha_actual = "2022-11-01";
        $dias = 28; //variable 
        $rango = "- ".$dia." days";
        $fecha_anterior = date("Y-m-d",strtotime($fecha_actual.$rango));

        $arr_vehiculo = Vehiculo::select('idVehiculo','placaVeh','grupoVeh')
            ->where('activoVeh', 1)
            ->whereIn('grupoVeh',['LIVIANA','PESADA'])
            ->get();
        
        foreach ( $arr_vehiculo as $uvehiculo ) 
        {
            $obj_kmInicial = Kilometraje::select('idKilometraje','kilometrajeKil','fechaKil')
                ->where('Vehiculo_idVehiculo', $uvehiculo->idVehiculo)
                ->where('fechaKil','>=',$fecha_actual)
                ->whereRaw('(tipoKil = "MOVIL" or tipoKil is null)')
                ->whereNull('invalidoKil')
                ->orderBy('fechaKil', 'DESC')
                ->first();

            $obj_kmAnterior = Kilometraje::select('idKilometraje','kilometrajeKil','fechaKil')
                ->where('Vehiculo_idVehiculo', $uvehiculo->idVehiculo)
                ->where('fechaKil','<=',$fecha_anterior)
                ->whereRaw('(tipoKil = "MOVIL" or tipoKil is null)')
                ->whereNull('invalidoKil')
                ->orderBy('fechaKil', 'DESC')
                ->first();

            //if ( sizeof( $arr_kilometrajes ) > 0 ) { $kilometrajes["v".$uvehiculo->idVehiculo] = $arr_kilometrajes;  $vehiculos["v".$uvehiculo->idVehiculo] = $uvehiculo->idVehiculo; }
            
            $registro["idVehiculo"] = $uvehiculo->idVehiculo;
            $registro["vehiculo"] = $uvehiculo->placaVeh;
            $registro["fecha_actual"] = $fecha_actual;
            $registro["fecha_anterior"] = $fecha_anterior;
            //$registro["tam"] = sizeof( $arr_kilometrajes );
            $registro["ultimokm"] = $obj_kmInicial["kilometrajeKil"];
            $registro["km_inicial"] = $obj_kmInicial;
            $registro["km_anterior"] = $obj_kmAnterior;
            if ( $registro["km_inicial"] !== null )  
            { 
                $registro["promedio"] = number_format( ( $obj_kmInicial["kilometrajeKil"] - $obj_kmAnterior["kilometrajeKil"] ) / $dia); 
            } else { 
                $registro["promedio"] = null;
            }
            //$registros["v".$uvehiculo->idVehiculo] = $registro;
            $registros[] = $registro;
        }

        /*foreach ( $vehiculos as $uvehiculo ) 
        {
            $km_actual = 0;
            $km_total = 0;
            $km_promedio = 0;
            foreach ( $kilometrajes["v".$uvehiculo] as $clave=>$valor) 
            {
                $km_actual = intval($kilometrajes["v".$uvehiculo][0]["kilometrajeKil"]);
                $km_total += intval($kilometrajes["v".$uvehiculo][$clave]["kilometrajeKil"]);
                $km_promedio = sizeof($kilometrajes["v".$uvehiculo]);
            }
            $registros["v".$uvehiculo]["km_actual"] = number_format( $km_actual );
            $registros["v".$uvehiculo]["km_total"] = $km_total;
            $registros["v".$uvehiculo]["km_promedio"] = number_format( $km_total / $km_promedio );
        }*/

        $resultado["registros"] = $registros;
        
        /*$registros = [];
        $kilometrajes = []; 
        $vehiculos = [];
        $indices = [];
        $fecha_actual = date("Y-m-d");
        $lim = 21;
        $rango = "- ".$lim." days";
        //$fecha_anterior = date("Y-m-d",strtotime($fecha_actual."- 21 days"));
        $fecha_anterior = date("Y-m-d",strtotime($fecha_actual.$rango));

        $arr_vehiculo = Vehiculo::select('idVehiculo','placaVeh','grupoVeh')
            ->where('activoVeh', 1)
            ->whereIn('grupoVeh',['LIVIANA','PESADA'])
            ->get();
        
        foreach ( $arr_vehiculo as $uvehiculo ) 
        {
            $arr_kilometrajes = Kilometraje::select('idKilometraje','kilometrajeKil','fechaKil')
                ->where('Vehiculo_idVehiculo', $uvehiculo->idVehiculo)
                ->where('fechaKil','<=',$fecha_actual)
                ->where('fechaKil','>=',$fecha_anterior)
                ->whereRaw('(tipoKil = "MOVIL" or tipoKil is null)')
                ->whereNull('invalidoKil')
                ->orderBy('fechaKil', 'DESC')
                ->get();

            if ( sizeof( $arr_kilometrajes ) > 0 ) { $kilometrajes["v".$uvehiculo->idVehiculo] = $arr_kilometrajes;  $vehiculos["v".$uvehiculo->idVehiculo] = $uvehiculo->idVehiculo; }
            
            $registro["idVehiculo"] = $uvehiculo->idVehiculo;
            $registro["vehiculo"] = $uvehiculo->placaVeh;
            $registro["fecha_actual"] = $fecha_actual;
            $registro["fecha_anterior"] = $fecha_anterior;
            $registro["tam"] = sizeof( $arr_kilometrajes );
            $registro["kilometrajes"] = $arr_kilometrajes;
            $registros["v".$uvehiculo->idVehiculo] = $registro;
        }

        foreach ( $vehiculos as $uvehiculo ) 
        {
            $km_actual = 0;
            $km_total = 0;
            $km_promedio = 0;
            foreach ( $kilometrajes["v".$uvehiculo] as $clave=>$valor) 
            {
                $km_actual = intval($kilometrajes["v".$uvehiculo][0]["kilometrajeKil"]);
                $km_total += intval($kilometrajes["v".$uvehiculo][$clave]["kilometrajeKil"]);
                $km_promedio = sizeof($kilometrajes["v".$uvehiculo]);
            }
            $registros["v".$uvehiculo]["km_actual"] = number_format( $km_actual );
            $registros["v".$uvehiculo]["km_total"] = $km_total;
            $registros["v".$uvehiculo]["km_promedio"] = number_format( $km_total / $km_promedio );
        }

        $resultado["registros"] = $registros;*/
        return $resultado;
    }
    public function ListarUltimoKm($id)
    {
        $arr_abastecimientod = Kilometraje::select('fechaKil','kilometrajeKil','tipoKil')
            ->where('Vehiculo_idVehiculo',$id)
            ->whereDate('fechaKil','>','2022-09-01')
            ->where('tipoKil','=','COMBUSTIBLE')
            ->orderBy('kilometrajeKil','DESC')
            ->first();

        $respuesta = [];
        $respuesta["kilometrajeKil"] = "Sin Kilometraje";
        $respuesta["fechaKil"] = "";

        if($arr_abastecimientod)
        {
            $respuesta["kilometrajeKil"] = $arr_abastecimientod["kilometrajeKil"];
            $respuesta["fechaKil"] = $arr_abastecimientod["fechaKil"];
        }

        return $respuesta;
    }
    public function CalcularRendimiento($id,$km)//DEPRECIADO
    {
        $arr_abastecimientod = Kilometraje::select('fechaKil','kilometrajeKil','tipoKil')
            ->where('Vehiculo_idVehiculo',$id)
            ->where('tipoKil','=',NULL)
            ->orderBy('kilometrajeKil','DESC')
            ->limit(10)
            ->get();
        
        return $arr_abastecimientod;
    }
    public function ListarKilometrajes($cuenta,$vehiculo,$tipo,$finicio,$ffin)
    {
        $km_actual = 0;
        $cuenta_ = '='; 
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
            ->get();

        $indices = [];

        $registros = [];

        if($tipo == "DIA")
        {
            
            $f_ini = date_create($finicio);
            $f_fin = date_create($ffin);
            $diferencia = date_diff($f_ini, $f_fin)->format('%a'); //diferencia en dias 
            //return $contd;
            $fechas = [];
            $filas = [];
            $fecha_actual = $ffin; 
            //$fecha_actual = date("Y-m-d");
            //$fecha_actual = date("Y-m-d",strtotime($fecha_actual."- 9 days"));
            $limite = intval($diferencia);
            $fecha_actual = date("Y-m-d",strtotime($fecha_actual."- ".$limite." days"));
            $fechas[] = $fecha_actual;
            $filas[$fecha_actual] = "-";
            //for ($i=1; $i < 10 ; $i++)
            for ($i=0; $i < $diferencia; $i++)
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
                $kilometrajesC = $filas;
                $escoltas_km = $filas;
                $combustible_km = $filas;

                $arr_kilometrajes = Kilometraje::whereIn(DB::raw("DATE(fechaKil)"), $fechas)
                    ->select('kilometrajeKil','fechaKil','tipoKil','nombreUsu')
                    ->leftjoin('usuario','usuario.idUsuario','=','kilometraje.usuarioKil')
                    //->where('Vehiculo_idVehiculo',381)
                    ->where('Vehiculo_idVehiculo',$uvehiculo->idVehiculo)
                    ->whereNull('invalidoKil')
                    ->whereRaw('(tipoKil = "MOVIL" or tipoKil is null or tipoKil = "COMBUSTIBLE")')
                    //->whereRaw('(tipoKil = "MOVIL" or tipoKil is null)')
                    ->orderBy('fechaKil','desc')
                    ->orderBy('idKilometraje','desc')
                    ->get();
                
                foreach( $arr_kilometrajes as $ukilometraje )
                {
                    /*$fecha_sel = date("Y-m-d",strtotime($ukilometraje->fechaKil));
                    if ( $ukilometraje->tipoKil !== 'COMBUSTIBLE')
                        $kilometrajes[$fecha_sel] = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                    if ( $ukilometraje->tipoKil == 'COMBUSTIBLE')
                        $kilometrajesC[$fecha_sel] = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');*/
                    
                    $fecha_sel = date("Y-m-d",strtotime($ukilometraje->fechaKil));
                    if ( $ukilometraje->tipoKil !== 'COMBUSTIBLE')
                    {
                        $ukilometraje->movil = true;
                        $ukilometraje->kilometrajeKil = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                        $kilometrajes[$fecha_sel] = $ukilometraje;
                        $escoltas_km[$fecha_sel] = $ukilometraje->kilometrajeKil;
                        //$escoltas_km[$fecha_sel] = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                    }
                    if ( $ukilometraje->tipoKil == 'COMBUSTIBLE')
                    {
                        $ukilometraje->combustible = true;
                        $ukilometraje->kilometrajeKil = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                        $kilometrajesC[$fecha_sel] = $ukilometraje;
                        $combustible_km[$fecha_sel] = $ukilometraje->kilometrajeKil;
                        //$combustible_km[$fecha_sel] = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                    }
                }
                $arr_kilometrajes = [];
                
                /*foreach( $fechas as $ufecha )
                {
                    $km_actual = intval($kilometrajes[$ufecha]) - intval($kilometrajesC[$ufecha]);
                    if ( abs( $km_actual ) >= 1500 ) {
                        $arr_kilometrajes[] = $kilometrajes[$ufecha];
                    } else if( abs( $km_actual ) <= 1500 && $kilometrajes[$ufecha] == "-" ) { // muestro km combustible si no hay registro de movil
                        $arr_kilometrajes[] = $kilometrajesC[$ufecha];
                    } else if ( $kilometrajes[$ufecha] == "-") {
                        $arr_kilometrajes[] = $kilometrajesC[$ufecha];
                    } else { 
                        $arr_kilometrajes[] = $kilometrajes[$ufecha];
                    }
                }*/
                
                foreach( $fechas as $ufecha )
                {
                    $km_actual = intval($escoltas_km[$ufecha]) - intval($combustible_km[$ufecha]);
                    
                    if ( abs( $km_actual ) >= 1500  ) {
                        $arr_kilometrajes[] = $kilometrajes[$ufecha];
                    } else if( abs( $km_actual ) <= 1500 && $kilometrajes[$ufecha] == "-" ) { // muestro km combustible si no hay registro de movil
                        $arr_kilometrajes[] = $kilometrajesC[$ufecha];
                    } else if ( $kilometrajes[$ufecha] == "-") {
                        $arr_kilometrajes[] = $kilometrajesC[$ufecha];
                    } else { 
                        $arr_kilometrajes[] = $kilometrajes[$ufecha];
                    }
                    
                    /*
                    if( $kilometrajes[$ufecha] !== "-") {
                        $arr_kilometrajes[] = $kilometrajes[$ufecha];
                    } else if ( $kilometrajes[$ufecha] == "-" ) {
                        $arr_kilometrajes[] = $kilometrajesC[$ufecha];
                    } else if( $kilometrajesC[$ufecha] == "-"){ 
                        $arr_kilometrajes[] = $kilometrajes[$ufecha];
                    }*/
                }
                
                /*$arr_kilometrajes = [];
                foreach( $kilometrajes as $ukilometraje )
                {
                    if ( isset( $ukilometraje->kilometrajeKil )) 
                    {
                        $ukilometraje->kilometrajeKil = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                    }
                    $arr_kilometrajes[] = $ukilometraje;
                }*/

                /*foreach($kilometrajes as $ukilometraje)
                {
                    $arr_kilometrajes[] = ($ukilometraje == "" ? "-" : $ukilometraje);
                }*/
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

        return $resultado;
    }
    public function Historial($vehiculo)
    {   
        /*$variable = '';
        switch ($estado)
        {
            case 'SOLICITADO':
                $variable = "fsolicitudMon"; 
                break;
            case 'APROBADO':
                $variable = "faprobacionMon";
                break;
            case 'APLICADO':
                $variable = "faplicacionMon";
                break;
            case 'RENDIDO':
                $variable = "frendicionMon";
                break;
            case 'REASIGNADO':
                $variable = "frendicionMon";
                break;
        }
        $ffin = date("Y-m-d",strtotime($ffin."+ 1 days"));*/
        
        $arr_kilometrajes = Kilometraje::select('kilometraje.*','nombreUsu')
            //->join('dato','dato.idDato','monto.Dato_idDato')
            //->where('estadoMon','=',$estado)
            //->where('activoMon',1)
            ->leftjoin('usuario','usuario.idUsuario','=','kilometraje.usuarioKil')
            ->where('Vehiculo_idVehiculo',$vehiculo)
            ->whereNull('invalidoKil')
            ->orderBy('fechaKil','desc')
            ->take(30)
            ->get()
            ->reverse()
            ->values();

        $kactual = 0;
        $factual = 0;
        $primero = false;
        $kilometrajes = [];
        foreach($arr_kilometrajes as $ukilometraje)
        {
            $kilometraje = [];
            $kilometraje = $ukilometraje;
            if($primero)
            {
                $kilometraje["variacion"] = "-";
                $kilometraje["error"] = false;
                $primero = false;
                $kactual = $ukilometraje->kilometrajeKil;
                $factual = strtotime($ukilometraje->fechaKil);
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
        
         return $arr_kilometrajes;
    }
    public function GuardarUnidad(Request $request)
    {   
        $kilometraje = json_decode($request->kilometraje);

        $registroKm = Kilometraje::select('idKilometraje')
            ->where('Vehiculo_idVehiculo', $kilometraje->Vehiculo_idVehiculo)
            ->whereRaw('(tipoKil = "MOVIL" or tipoKil is null)')
            ->where('fechaKil', $kilometraje->fechaKil)
            ->where('invalidoKil', NULL)
            ->first();

        if ( $registroKm == NULL )
        {
            if ($kilometraje->seleccionado == true) 
            {
                $registroMovil = Kilometraje::select('idKilometraje')
                    ->where('Vehiculo_idVehiculo', $kilometraje->Vehiculo_idVehiculo)
                    ->where('tipoKil','MOVIL')
                    ->where('activoKil',1)
                    ->first();

                //Actualizo activoKil kilometraje anterior...    
                $uregistroMovil = Kilometraje::select('idKilometraje')
                    ->where('idKilometraje', $registroMovil["idKilometraje"])
                    ->update(['activoKil' => 0]);
                    
                $obj_kilometraje = new Kilometraje();
                $obj_kilometraje->kilometrajeKil = $kilometraje->kilometrajeTotal;
                $obj_kilometraje->horometrajeKil = ($kilometraje->horometrajeKil == "" ) ? 0 : $kilometraje->horometrajeKil;
                $obj_kilometraje->fechaKil = $kilometraje->fechaKil;
                $obj_kilometraje->Vehiculo_idVehiculo = $kilometraje->Vehiculo_idVehiculo;
                $obj_kilometraje->usuarioKil = $kilometraje->usuarioKil;
                $obj_kilometraje->tipoKil = 'MOVIL';
                $obj_kilometraje->activoKil = 1;
                $obj_kilometraje->save();
            
            } else if( $kilometraje->seleccionado == false ) { 
                
                $obj_kilometraje = new Kilometraje();
                $obj_kilometraje->kilometrajeKil = $kilometraje->kilometrajeTotal;
                $obj_kilometraje->horometrajeKil = ($kilometraje->horometrajeKil == "" ) ? 0 : $kilometraje->horometrajeKil;
                $obj_kilometraje->fechaKil = $kilometraje->fechaKil;
                $obj_kilometraje->Vehiculo_idVehiculo = $kilometraje->Vehiculo_idVehiculo;
                $obj_kilometraje->usuarioKil = $kilometraje->usuarioKil;
                $obj_kilometraje->save();
            }

            /*
            $obj_kilometraje = new Kilometraje();
            //$obj_kilometraje->kilometrajeKil = $kilometraje->kilometrajeKil;
            $obj_kilometraje->kilometrajeKil = $kilometraje->kilometrajeTotal;
            $obj_kilometraje->horometrajeKil = ($kilometraje->horometrajeKil == "" ) ? 0 : $kilometraje->horometrajeKil;
            $obj_kilometraje->fechaKil = $kilometraje->fechaKil;
            $obj_kilometraje->Vehiculo_idVehiculo = $kilometraje->Vehiculo_idVehiculo;
            $obj_kilometraje->usuarioKil = $kilometraje->usuarioKil;
            $obj_kilometraje->save();*/

        } else if( $registroKm != NULL) {

            $up = Kilometraje::select('idKilometraje')
            ->where('idKilometraje', $registroKm["idKilometraje"])
            ->update(['kilometrajeKil' => $kilometraje->kilometrajeTotal]);
            //->update(['kilometrajeKil' => $kilometraje->kilometrajeKil]);
        }  

        //return $obj_kilometraje->idKilometraje;
        return $registroKm;
    }
    public function Desactivar(Request $request)
    {   
        $kilometraje = Kilometraje::find($request->idKilometraje);
 
        $kilometraje->invalidoKil = 1;
 
        $kilometraje->save();

        return $request->idKilometraje;
    }
    public function ExportarKilometrajes($cuenta,$vehiculo,$tipo,$finicio,$ffin)
    {
        $fecha_actual = date("Y-m-d");
        return Excel::download(new KilometrajeExport($cuenta, $vehiculo, $tipo, $finicio, $ffin ), 'kilometrajes:'.$fecha_actual.'.xlsx');

        /*
        $cuenta_ = '='; 
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
            ->get();

        $indices = [];
        $registros = [];

        if($tipo == "DIA")
        {
            
            $f_ini = date_create($finicio);
            $f_fin = date_create($ffin);
            $diferencia = date_diff($f_ini, $f_fin)->format('%a'); //diferencia en dias 
            //return $contd;
            $fechas = [];
            $filas = [];
            $fecha_actual = $ffin; 
            $limite = intval($diferencia);
            $fecha_actual = date("Y-m-d",strtotime($fecha_actual."- ".$limite." days"));
            $fechas[] = $fecha_actual;
            $filas[$fecha_actual] = "-";
            for ($i=0; $i < $diferencia; $i++)
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
                $kilometrajesC = $filas;
                $escoltas_km = $filas;
                $combustible_km = $filas;

                $arr_kilometrajes = Kilometraje::whereIn(DB::raw("DATE(fechaKil)"), $fechas)
                    ->select('kilometrajeKil','fechaKil','tipoKil')
                    ->where('Vehiculo_idVehiculo',$uvehiculo->idVehiculo)
                    ->whereNull('invalidoKil')
                    ->whereRaw('(tipoKil = "MOVIL" or tipoKil is null or tipoKil = "COMBUSTIBLE")')
                    ->orderBy('fechaKil','desc')
                    ->orderBy('idKilometraje','desc')
                    ->get();
                
                foreach( $arr_kilometrajes as $ukilometraje )
                {
                    $fecha_sel = date("Y-m-d",strtotime($ukilometraje->fechaKil));
                    if ( $ukilometraje->tipoKil !== 'COMBUSTIBLE')
                        $ukilometraje->movil = true;
                        $kilometrajes[$fecha_sel] = $ukilometraje;
                        $escoltas_km[$fecha_sel] = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                    if ( $ukilometraje->tipoKil == 'COMBUSTIBLE')
                        $ukilometraje->combustible = true;
                        $kilometrajesC[$fecha_sel] = $ukilometraje;
                        $combustible_km[$fecha_sel] = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                }

                $arr_kilometrajes = [];
                foreach( $fechas as $ufecha )
                {
                    $km_actual = intval($escoltas_km[$ufecha]) - intval($combustible_km[$ufecha]);
                        
                    if ( abs( $km_actual ) >= 1500  ) {
                        $arr_kilometrajes[] = $kilometrajes[$ufecha];
                    } else if( abs( $km_actual ) <= 1500 && $kilometrajes[$ufecha] == "-" ) { // muestro km combustible si no hay registro de movil
                        $arr_kilometrajes[] = $kilometrajesC[$ufecha];
                    } else if ( $kilometrajes[$ufecha] == "-") {
                        $arr_kilometrajes[] = $kilometrajesC[$ufecha];
                    } else { 
                        $arr_kilometrajes[] = $kilometrajes[$ufecha];
                    }
                }
                $arr_kilometrajes = [];
                foreach( $kilometrajes as $ukilometraje )
                {
                    if ( isset( $ukilometraje->kilometrajeKil )) 
                    {
                        $ukilometraje->kilometrajeKil = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                    }
                    $arr_kilometrajes[] = $ukilometraje;
                }

                $registro["kilometrajes"] = $arr_kilometrajes;

                $registros["v".$uvehiculo->idVehiculo] = $registro;
            }
        }
        $resultado["cuerpo"] = $registros;
        $resultado["indices"] = $indices;
        return count( $resultado['indices']);
        $cont = 0;
        foreach ( $resultado["cuerpo"] as $uregistro )
        {
            $fila = [];
            //$fila['kilometraje'] = $uregistro->kilometrajes;
            /*$fila['1'] =  $uregistro->kilometrajes;
            $fila['2'] =  $uregistro->kilometrajes;
            $fila['3'] =  $uregistro->kilometrajes;
            $fila['4'] =  $uregistro->kilometrajes;
            $fila['5'] =  $uregistro->kilometrajes;
            $fila['6'] =  $uregistro->kilometrajes;
            $fila['7'] =  $uregistro->kilometrajes;
            $fila['8'] =  $uregistro->kilometrajes;
            $fila['9'] =  $uregistro->kilometrajes;
            $fila['10'] =  $uregistro->kilometrajes;
            $fila['11'] =  $uregistro->kilometrajes;
            $fila['12'] =  $uregistro->kilometrajes;
            $fila['13'] =  $uregistro->kilometrajes;
            $fila['14'] =  $uregistro->kilometrajes;
            $fila['15'] =  $uregistro->kilometrajes;
            
            $cuerpo[] = ( isset( $uregistro->kilometrajes ))? $uregistro->kilometrajes;


        }
        $todos = [];
        $todos["cuerpo"] = $cuerpo;
        $export = new KilometrajeExport($todos); 
        $nombre = 'Kilometrajes.xlsx';
        return Excel::download($export, $nombre);*/
    }
}