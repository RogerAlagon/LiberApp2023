<?php 
namespace App\Http\Controllers;

use App\Combustible;
use App\Grifo; 
use App\Dato;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;

class CombustibleController extends Controller 
{

    public function Listar()
    {

    }

    public function ListarSelect()
    {

        $arr_grifos = Grifo::select('idGrifo','nombreGri','ciudadGri','empresaGri')
            ->get();
        
        $indices = [];
        $registros = [];
        $fechas = [];
        $filas = [];

        $dias = date("t", strtotime("2022-07-07"));
        $pdia = date("01", strtotime("2022-07-07"));

        /*$fecha_actual = date("Y-m-d"); 
        $fecha_actual = date("Y-m-d",strtotime($fecha_actual."- 9 days"));*/
        $fecha_actual = date("Y-m-01", strtotime("2022-07-07"));
        $fechas[] = $fecha_actual;
        $filas[$fecha_actual] = "-";

        $ifecha = array();

        //return $fecha_actual;
        for ($i=1; $i < $dias ; $i++)
        {
            $fecha_actual = date("Y-m-d",strtotime($fecha_actual."+ 1 days"));
            $fechas[] = $fecha_actual;
            $filas[$fecha_actual] = "";
            //$filas[$fecha_actual] = $fecha_actual;
        }

        $indices = $fechas;


        foreach( $arr_grifos as $ugrifo)
        {
            $registro = $ugrifo;
            $precios = $filas;
            //$fecha = $precios; 

            $arr_precios = Combustible::select('idCombustible','Tipo_idDato','precioCom','fechaCom','Grifo_idGrifo')
            ->where('Grifo_idGrifo', $ugrifo->idGrifo)
            ->whereIn('fechaCom', $indices)
            /*->whereIn('fechaCom', ['2022-07-01','2022-07-02','2022-07-03','2022-07-04','2022-07-05','2022-07-06','2022-07-07',
            '2022-07-08','2022-07-09','2022-07-10','2022-07-11','2022-07-12','2022-07-13','2022-07-14','2022-07-15','2022-07-16',
            '2022-07-17','2022-07-18','2022-07-19','2022-07-20','2022-07-21','2022-07-22','2022-07-23','2022-07-24','2022-07-25',
            '2022-07-26','2022-07-27','2022-07-28','2022-07-29','2022-07-30','2022-07-31',])*/
            //->join('grifo','grifo.idGrifo','=','combustible.Grifo_idGrifo')
            ->get();
            
            foreach( $arr_precios as $uprecios)
            {
                $fecha_sel = date("Y-m-d",strtotime($uprecios->fechaCom));
                $precios[$fecha_sel] = number_format($uprecios->precioCom, 0, '.', ' '); 
            }

            $arr_precios = [];
            foreach( $precios as $uprecios )
            {
                //$arr_precios[] = ($uprecios == "" ? "-" : $uprecios);
                $arr_precios[] = ($uprecios == "" ? "-" : $uprecios);
            }
            $registro["precios"] = $arr_precios;
            $registros["v".$ugrifo->idGrifo.$ugrifo->ciudadGri.$ugrifo->empresaGri] = $registro;
            //return $registros;
        }

        $resultado["registros"] = $registros;
        $resultado["indices"] = $indices;

        //$dias = date("t", strtotime("2022-09-07"));
        return $resultado; 


        /*$arr_precios = Combustible::select('idCombustible','nombreCom','precioCom','fechaCom','Grifo_idGrifo','nombreGri')
            ->join('grifo','grifo.idGrifo','=','combustible.Grifo_idGrifo')
            ->get();
        return $arr_precios;*/
    }

    public function ListarSelectGrifo($grifo, $tcombustible, $empresa, $finicio, $ffin, $ciudad)
    {
        
        $grifo_ = '='; 
        $tcombustible_ = '='; 
        $empresa_ = "=";
        $ciudad_ = "=";

        if ( $grifo == '0' ) { $grifo_ = '<>'; }
        if ( $tcombustible == 'TODOS' ) { $tcombustible_ = '<>'; }
        if ( $empresa == 'TODOS') { $empresa_ = '<>'; }
        if ( $ciudad == 'TODOS' ) { $ciudad_ = '<>'; }
        /*
        $arr_precios = Combustible::select('idCombustible','nombreCom','precioCom','fechaCom','Grifo_idGrifo','nombreGri')
            ->join('grifo','grifo.idGrifo','=','combustible.Grifo_idGrifo')
            ->where('Grifo_idGrifo', $grifo_ , $grifo)
            ->where('nombreCom', $tcombustible_ , $tcombustible)
            ->orderBy('fechaCom','DESC')
            ->get();
        return $arr_precios;*/



        $arr_grifos = Grifo::select('idGrifo','nombreGri','ciudadGri','empresaGri')
            ->where('idGrifo', $grifo_ , $grifo)
            ->where('empresaGri', $empresa_ , $empresa)
            ->where('Ciudad_idDato', $ciudad_, $ciudad)
            ->get();
        
        $indices = [];
        $registros = [];
        $fechas = [];
        $filas = [];

        $finicio = date_create($finicio);
        $ffin = date_create($ffin);
        $contd = date_diff($finicio,$ffin)->format('%a');

        //return $contd;

        $contdias = date("t", strtotime("2022-07-07"));
        $pdia = date("01", strtotime("2022-07-07"));

        /*$fecha_actual = date("Y-m-d"); 
        $fecha_actual = date("Y-m-d",strtotime($fecha_actual."- 9 days"));*/
        //$fecha_actual = date("Y-m-01", strtotime("2022-07-07"));
        $fecha_actual = $finicio->format("Y-m-d");
        $fechas[] = $fecha_actual;
        $filas[$fecha_actual] = "-";

        //return $contd;
        //return $fecha_actual;
        if ( $contd >= 1 )
        {
            $contd = $contd + 1;
        }

        for ($i=1; $i < $contd ; $i++)
        {
            $fecha_actual = date("Y-m-d",strtotime($fecha_actual."+ 1 days"));
            $fechas[] = $fecha_actual;
            $filas[$fecha_actual] = "";
            //$filas[$fecha_actual] = $fecha_actual;
        }

        $indices = $fechas;


        foreach( $arr_grifos as $ugrifo)
        {
            $registro = $ugrifo;
            $precios = $filas;
            //$fecha = $precios; 

            $arr_precios = Combustible::select('idCombustible','Tipo_idDato','precioCom','fechaCom','Grifo_idGrifo')
                ->where('Tipo_idDato', $tcombustible_ , $tcombustible)
                ->where('Grifo_idGrifo', $ugrifo->idGrifo)
                ->whereIn('fechaCom', $indices)
            ->get();
            
            foreach( $arr_precios as $uprecios)
            {
                $fecha_sel = date("Y-m-d",strtotime($uprecios->fechaCom));
                //$precios[$fecha_sel] = number_format($uprecios->precioCom, 0, '.', ' '); 
                $precios[$fecha_sel] = $uprecios->precioCom; 
            }

            $arr_precios = [];
            foreach( $precios as $uprecios )
            {
                //$arr_precios[] = ($uprecios == "" ? "-" : $uprecios);
                $arr_precios[] = ($uprecios == "" ? "-" : $uprecios);
            }
            $registro["precios"] = $arr_precios;
            $registros["v".$ugrifo->idGrifo.$ugrifo->ciudadGri.$ugrifo->empresaGri] = $registro;
            //return $registros;
        }

        $resultado["registros"] = $registros;
        $resultado["indices"] = $indices;

        return $resultado; 
    }

    public function ListarDato()
    {
        $arr_precios = Dato::select('valorDat','tipoDat','grupoDat')
            ->where('tipoDat','COMBUSTIBLE')
            ->where('grupoDat','COMBUSTIBLE')
            ->get(); 
        return $arr_precios;
    }

    public function Guardar(Request $request)
    {
        $jcombustible = json_decode($request->combustible); 
        $finicio = date_create($jcombustible->fechaCom); 
        $ffin = date_create($jcombustible->fechaFin);
        $ddias = date_diff( $finicio, $ffin)->format('%a');

        for ( $i = 0; $i <= $ddias; $i++ ) 
        {
            $sdias = "+ ".$i." days";
            $nfecha = date("Y-m-d", strtotime($jcombustible->fechaCom.$sdias));
            $id = "";

            $arr_precios = Combustible::select('idCombustible')
                ->where('Tipo_idDato', $jcombustible->nombreCom)
                ->where('Grifo_idGrifo', $jcombustible->Grifo_idGrifo)
                ->where('fechaCom', $nfecha)
                ->first();

            if ( $arr_precios == NULL )
            {
                $obj_combustible = new Combustible();
                $obj_combustible->Tipo_idDato = $jcombustible->nombreCom;
                $obj_combustible->precioCom = $jcombustible->precioCom;
                $obj_combustible->fechaCom = $nfecha; 
                $obj_combustible->Grifo_idGrifo = $jcombustible->Grifo_idGrifo;   
                $obj_combustible->save();
                $id = $obj_combustible->idCombustible;
            }

            if ( $arr_precios !== NULL )
            {
                $idCombustible = Combustible::select('idCombustible')
                    ->where('Grifo_idGrifo', $jcombustible->Grifo_idGrifo)
                    ->where('fechaCom', $nfecha)
                    ->where('Tipo_idDato', $jcombustible->nombreCom)
                    ->first();
                
                $up_precios = Combustible::select('idCombustible.*')
                ->where('idCombustible', $idCombustible["idCombustible"])
                ->update(['Tipo_idDato' => $jcombustible->nombreCom, 
                          'precioCom' => $jcombustible->precioCom, 
                          'Grifo_idGrifo' => $jcombustible->Grifo_idGrifo]);
                $id = $idCombustible["idCombustible"];
            }
        }
        return $id;
        /*var_dump($cont);
        return; */      
        /*echo($ddias);
        return $ddias;*/

        /*$obj_combustible->nombreCom = $jcombustible->nombreCom;
        $obj_combustible->precioCom = $jcombustible->precioCom;
        $obj_combustible->fechaCom = $jcombustible->fechaCom; 
        $obj_combustible->Grifo_idGrifo = $jcombustible->Grifo_idGrifo;*/

        //$obj_combustible = new Combustible((array) $jcombustible);
        //$obj_combustible->save();
        //return;
    }

    public function Actualizar(Request $request)
    {
        $jprecio = json_decode($request->precio);
        $finicio = date_create($jprecio->fechaCom); 
        $ffin = date_create($jprecio->fechaFin);
        $ddias = date_diff( $finicio, $ffin)->format('%a');

        for ( $i = 0; $i <= $ddias; $i++ ) 
        {
            $sdias = "+ ".$i." days";
            $nfecha = date("Y-m-d", strtotime($jprecio->fechaCom.$sdias));

            $idCombustible = Combustible::select('idCombustible')
            ->where('Grifo_idGrifo', $jprecio->Grifo_idGrifo)
            ->where('fechaCom', $nfecha)
            //->where('nombreCom', $jprecio->nombreCom)
            ->first();

            $up_precios = Combustible::select('idCombustible.*')
            ->where('idCombustible', $idCombustible["idCombustible"])
            ->update(['nombreCom' => $jprecio->nombreCom, 
                      'precioCom' => $jprecio->precioCom, 
                      'Grifo_idGrifo' => $jprecio->Grifo_idGrifo]);

        }

        /*$jprecio = json_decode($request->precio);
        unset($jprecio->acciones);  //Elimino acciones good-table
        unset($jprecio->nombreGri); //Elimino nombreGri dato de otra tabla
        $obj_precio = (object)$jprecio;
        Combustible::where('idCombustible', $jprecio->idCombustible)->update((array)$obj_precio);*/
        return;
    }
}