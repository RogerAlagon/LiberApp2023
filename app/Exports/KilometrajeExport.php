<?php 

namespace App\Exports;

use App\User; 
use DB;
use App\Kilometraje;
use Maatwebsite\Excel\Concerns\FromCollection; 
use Maatwebsite\Excel\Concerns\WithHeadings;

class KilometrajeExport implements FromCollection,WithHeadings
{
        /**
    * @return \Illuminate\Support\Collection
    */

    protected $cuenta; 
    protected $vehiculo;
    protected $tipo;

    function __construct($prm_cuenta, $prm_vehiculo, $prm_tipo, $prm_finicio, $prm_ffin)
    {
        $this->cuenta = $prm_cuenta;
        $this->vehiculo = $prm_vehiculo; 
        $this->tipo = $prm_tipo;
        $this->finicio = $prm_finicio; 
        $this->ffin = $prm_ffin;
    }
    public function headings(): array
    {

            $indices = [];

            if($this->tipo == "DIA")
            {
                $fechas = [];
                $fil = [];
                $f_ini = date_create( $this->finicio );
                $f_fin = date_create( $this->ffin );
                $diferencia = date_diff( $f_ini, $f_fin )->format('%a');
                $limite = intval($diferencia);

                //$fecha_actual = date("Y-m-d");
                //$fecha_actual = date("Y-m-d",strtotime($fecha_actual."- 9 days"));
                
                $fecha_actual = $this->ffin;
                $fecha_actual = date("Y-m-d",strtotime($fecha_actual."- ".$limite." days"));
                $fechas[] = "NRO";
                $fechas[] = "VEHICULO";
                $fechas[] = "MARCA";
                $fechas[] = "MODELO";
                $fechas[] = "TIPO";
                $fechas[] = "OPERADOR";
                $fechas[] = $fecha_actual;
                $fil[$fecha_actual] = "-";
                
                //for ($i=1; $i < 10 ; $i++)
                for ($i=0; $i < $diferencia ; $i++)
                {
                    $fechas[] = "OPERADOR";
                    $fecha_actual = date("Y-m-d",strtotime($fecha_actual."+ 1 days"));
                    $fechas[] = $fecha_actual;
                    $fil[$fecha_actual] = "-";
                }
                $indices = $fechas;

            } elseif($this->tipo == "REGISTRO")
            {
                $indices = ['NRO','VEHICULO','MARCA','MODELO','TIPO',1,2,3,4,5,6,7,8,9,10];
                //$indices = [1,2,3,4,5,6,7,8,9,10];
            }

            $resultado["indices"] = $indices;
        //var_dump($resultado["indices"]["1"]);
            /*$f1 = $resultado["indices"]["0"];
            $f2 = $resultado["indices"]["1"];
            $f3 = $resultado["indices"]["2"];
            $f4 = $resultado["indices"]["3"];
            $f5 = $resultado["indices"]["4"];
            $f6 = $resultado["indices"]["5"];
            $f7 = $resultado["indices"]["6"];
            $f8 = $resultado["indices"]["7"];
            $f9 = $resultado["indices"]["8"];
            $f10 = $resultado["indices"]["9"];*/

            return $indices;
            /*return [
            'NRO', 
            'VEHICULO', 
            'MARCA', 
            'MODELO', 
            'TIPO', 
            $f1, 
            $f2,
            $f3,
            $f4,
            $f5,
            $f6,
            $f7,
            $f8,
            $f9,
            $f10,
        ];*/
    }

    public function collection()
    {
        $filas = [];

        $cuenta_ = '='; 
        $vehiculo_ = '=';

        if ($this->cuenta == '0') { $cuenta_ = '<>'; }
        if ($this->vehiculo == '0') { $vehiculo_ = '<>'; }
    
        $arr_vehiculos = DB::table('vehiculo')
            ->select('idVehiculo','placaVeh','tmarca.valorDat as marca','tmodelo.valorDat as modelo')
            ->select('idVehiculo','placaVeh','tmarca.valorDat as marca','tmodelo.valorDat as modelo','ttipo.valorDat as tipo')
            ->join('dato as tmarca','tmarca.idDato','vehiculo.Marca_idDato')
            ->join('dato as tmodelo','tmodelo.idDato','vehiculo.Modelo_idDato')
            ->join('dato as ttipo','ttipo.idDato','vehiculo.Tipo_idDato')
            ->where('activoVeh',1)
            ->where('idvehiculo',$vehiculo_, $this->vehiculo)
            ->where('Cuenta_idDato', $cuenta_ ,$this->cuenta)
            ->orderBy('placaVeh','asc')
            ->get();

            $indices = [];

            $registros = [];

        if($this->tipo == "DIA")
        {

            $fechas = [];
            $fil = [];

            $f_ini = date_create( $this->finicio );
            $f_fin = date_create( $this->ffin );
            $diferencia = date_diff( $f_ini, $f_fin )->format('%a');
            $limite = intval($diferencia);

            $fecha_actual = $this->ffin;
            $fecha_actual = date("Y-m-d",strtotime($fecha_actual."- ".$limite." days"));
            
            $fechas[] = $fecha_actual;
            $fil[$fecha_actual] = "-";
            
            for ($i=0; $i < $limite; $i++)
            {
                $fecha_actual = date("Y-m-d",strtotime($fecha_actual."+ 1 days"));
                $fechas[] = $fecha_actual;
                $fil[$fecha_actual] = "-";
            }
            $indices = $fechas;

            foreach($arr_vehiculos as $uvehiculo)
            {
                $registro = $uvehiculo;
                $kilometrajes = $fil;
                $kilometrajesC = $fil;
                $escoltas_km = $fil;
                $combustible_km = $fil;

                
                $arr_kilometrajes = Kilometraje::whereIn(DB::raw("DATE(fechaKil)"), $fechas)
                    ->select('kilometrajeKil','fechaKil','tipoKil','nombreUsu')
                    ->leftjoin('usuario','usuario.idUsuario','=','kilometraje.usuarioKil')
                    ->where('Vehiculo_idVehiculo',$uvehiculo->idVehiculo)
                    ->whereNull('invalidoKil')
                    ->whereRaw('(tipoKil = "MOVIL" or tipoKil is null or tipoKil = "COMBUSTIBLE")')
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
                            $kilometrajes[$fecha_sel] = $ukilometraje;
                            //$escoltas_km[$fecha_sel] = $ukilometraje->nombreUsu;
                            $escoltas_km[$fecha_sel] = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                        }
                        if ( $ukilometraje->tipoKil == 'COMBUSTIBLE')
                        {
                            $ukilometraje->combustible = true;
                            $kilometrajesC[$fecha_sel] = $ukilometraje;
                            //$combustible_km[$fecha_sel] = $ukilometraje->nombreUsu;
                            $combustible_km[$fecha_sel] = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                        }
                    }
                    $arr_kilometrajes = [];
                    foreach( $fechas as $ufecha )
                    {
                        //$arr_kilometrajes[] = $escoltas_km[$ufecha];
                        $km_actual = intval($escoltas_km[$ufecha]) - intval($combustible_km[$ufecha]);
                        
                        if ( abs( $km_actual ) >= 1500  ) {
                            $arr_kilometrajes[] = $kilometrajes[$ufecha]->nombreUsu;
                            $arr_kilometrajes[] = $escoltas_km[$ufecha];
                        } else if( abs( $km_actual ) <= 1500 && $kilometrajes[$ufecha] == "-" ) { // muestro km combustible si no hay registro de movil
                            $arr_kilometrajes[] = "";
                            $arr_kilometrajes[] = $combustible_km[$ufecha];
                        } else if ( $kilometrajes[$ufecha] == "-") {
                            $arr_kilometrajes[] = "";
                            $arr_kilometrajes[] = $combustible_km[$ufecha];
                        } else { 
                            $arr_kilometrajes[] = $kilometrajes[$ufecha]->nombreUsu;
                            $arr_kilometrajes[] = $escoltas_km[$ufecha];
                        }
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

                /*$arr_kilometrajes = Kilometraje::whereIn(DB::raw("DATE(fechaKil)"), $fechas)
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
                    $kilometrajes[$fecha_sel] = number_format($ukilometraje->kilometrajeKil, 0, '.', ',');
                }

                $arr_kilometrajes = [];
                foreach($kilometrajes as $ukilometraje)
                {
                    $arr_kilometrajes[] = ($ukilometraje == "" ? "-" : $ukilometraje);
                }*/

                $registro->kilometrajes = $arr_kilometrajes;
                $registros["v".$uvehiculo->idVehiculo] = $registro;
            }
        }
        elseif($this->tipo == "REGISTRO")
        {
            $indices = [1,2,3,4,5,6,7,8,9,10];
            foreach($arr_vehiculos as $uvehiculo)
            {
                $registro = $uvehiculo;
                $kilometrajes = [];

                $arr_kilometrajes = DB::table('kilometraje')
                ->select('kilometrajeKil','fechaKil')
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
                    //$kilometraje["kilometraje"] = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');
                    $kilometraje->kilometraje = number_format($ukilometraje->kilometrajeKil, 0, '.', ' ');

                    if($primero)
                    {
                        //$kilometraje["variacion"] = "-";
                        $kilometraje->variacion = "-";
                        //$kilometraje["error"] = false;
                        $kilometraje->error = false;
                        $primero = false;
                        $kactual = $ukilometraje->kilometrajeKil;
                        $factual = strtotime($ukilometraje->fechaKil);
                    }
                    else
                    {
                        $fposterior = strtotime($ukilometraje->fechaKil);
                        $fdiferencia = ($fposterior-$factual)/(60*60*24)+1;

                        $kdiferencia = ($ukilometraje->kilometrajeKil - $kactual)/$fdiferencia;

                        //$kilometraje["variacion"] = round($kdiferencia);
                        $kilometraje->variacion = round($kdiferencia);
                        if($kdiferencia > 1000 || $kdiferencia < 0)
                            //$kilometraje["error"] = true;
                            $kilometraje->error = true;
                        else
                            //$kilometraje["error"] = false;
                            $kilometraje->error = false;
                        $kactual  = $ukilometraje->kilometrajeKil;
                        $factual = $fposterior;
                    }
                    $kilometrajes[] = $kilometraje;
                }
                $registro->kilometrajes = $kilometrajes;

                $registros["v".$uvehiculo->idVehiculo] = $registro;
            }
        }
        
        $resultado["registros"] = $registros;
        $resultado["indices"] = $indices;
            $cont = 1;
            if ( $this->tipo == "DIA" ) 
            {
                foreach( $resultado["registros"] as $rs )
                {
                    $fila = [];
                    //$fila[] = $cont;
                    //$fila[] = $rs->placaVeh;
                    //$fila[] = $rs->marca;
                    //$fila[] = $rs->modelo;
                    //$fila[] = $rs->tipo;
                    
                    /*if ( isset( $rs->kilometrajes[0] )) { $fila[] = $rs->kilometrajes[0]; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[1] )) { $fila[] = $rs->kilometrajes[1]; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[2] )) { $fila[] = $rs->kilometrajes[2]; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[3] )) { $fila[] = $rs->kilometrajes[3]; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[4] )) { $fila[] = $rs->kilometrajes[4]; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[5] )) { $fila[] = $rs->kilometrajes[5]; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[6] )) { $fila[] = $rs->kilometrajes[6]; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[7] )) { $fila[] = $rs->kilometrajes[7]; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[8] )) { $fila[] = $rs->kilometrajes[8]; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[9] )) { $fila[] = $rs->kilometrajes[9]; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[10] )) { $fila[] = $rs->kilometrajes; } else { $fila[] = ''; }*/

                    //$filas[] = $fila;
                    array_unshift($rs->kilometrajes, $cont, $rs->placaVeh, $rs->marca, $rs->modelo, $rs->tipo );
                    $filas[] = $rs->kilometrajes;
                    $cont++;
                    
                }
            } else if ( $this->tipo == "REGISTRO" ) 
            {
                foreach( $resultado["registros"] as $rs )
                {
                    $fila = [];
                    $fila[] = $cont;
                    $fila[] = $rs->placaVeh;
                    $fila[] = $rs->marca;
                    $fila[] = $rs->modelo;
                    $fila[] = $rs->tipo;
                    if ( isset( $rs->kilometrajes[0]->kilometrajeKil )) { $fila[] = $rs->kilometrajes[0]->kilometrajeKil; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[1]->kilometrajeKil )) { $fila[] = $rs->kilometrajes[1]->kilometrajeKil; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[2]->kilometrajeKil )) { $fila[] = $rs->kilometrajes[2]->kilometrajeKil; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[3]->kilometrajeKil )) { $fila[] = $rs->kilometrajes[3]->kilometrajeKil; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[4]->kilometrajeKil )) { $fila[] = $rs->kilometrajes[4]->kilometrajeKil; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[5]->kilometrajeKil )) { $fila[] = $rs->kilometrajes[5]->kilometrajeKil; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[6]->kilometrajeKil )) { $fila[] = $rs->kilometrajes[6]->kilometrajeKil; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[7]->kilometrajeKil )) { $fila[] = $rs->kilometrajes[7]->kilometrajeKil; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[8]->kilometrajeKil )) { $fila[] = $rs->kilometrajes[8]->kilometrajeKil; } else { $fila[] = ''; }
                    if ( isset( $rs->kilometrajes[9]->kilometrajeKil )) { $fila[] = $rs->kilometrajes[9]->kilometrajeKil; } else { $fila[] = ''; }
                    $filas[] = $fila;
                    $cont++;
                    
                }
            }
            return collect($filas);
    }
}