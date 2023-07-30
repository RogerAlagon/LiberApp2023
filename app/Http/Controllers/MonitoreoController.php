<?php 
namespace App\Http\Controllers; 

use DB;
use App\Monitoreo;

use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;

class MonitoreoController extends Controller 
{
    public function Listar()
    {
        $hoy = date("Y-m-d");

        $arr_monitoreos = Monitoreo::select('monitoreo.*','vehiculo.placaVeh','acople.placaVeh as acopleVeh',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),DB::raw('TIME_FORMAT(idealMon, "%H:%i") as idealMon, TIME_FORMAT(hinicioMon, "%H:%i") as hinicioMon'))
            ->leftjoin('vehiculo','vehiculo.idVehiculo','=','monitoreo.Vehiculo_idVehiculo')
            ->leftjoin('vehiculo as acople','acople.idVehiculo','=','monitoreo.Acople_idVehiculo')
            ->join('persona','persona.idPersona','=','monitoreo.Persona_idPersona')
            ->where('finicioMon',$hoy)
            ->orWhere('fterminoMon',$hoy)
            //->where('estadoMon','<>','ANULADO')
            //->whereIn('estado',['APLICADO','REGISTRADO'])
            ->orderBy('vehiculo.placaVeh','asc')
            ->orderBy('acople.placaVeh','asc')
            //->orderBy('trabajadorPer','asc')
            ->get();

        $actual = date("H:i");
        $ahora = date("H:i");
        $ahora = strtotime($ahora);
        

        foreach($arr_monitoreos as $llave => $umonitoreo)
        {
            date_default_timezone_set('America/Lima');
            $inicio = strtotime($umonitoreo->hinicioMon);

            if($umonitoreo->estadoMon == "TERMINADO")
            {
                $termino = strtotime($umonitoreo->hterminoMon);
                date_default_timezone_set('UTC');
                $diferencia = $termino - $inicio;
                //$diferencia = $inicio."---".$ahora."---".$diferencia."---".date("H:i:s",($diferencia))."---".$actual;
                $diferencia = date("H:i",($diferencia));
                $arr_monitoreos[$llave]->diferencia = $diferencia;
            }
            /*elseif($umonitoreo->estadoMon == "PENDIENTE")
            {
                $arr_monitoreos[$llave]->diferencia = "00:00";
            }
            elseif($umonitoreo->estadoMon == "ESPERA")
            {
                $arr_monitoreos[$llave]->diferencia = "00:00";
            }*/
            elseif($umonitoreo->estadoMon == "EN PROCESO" || $umonitoreo->estadoMon == "ESPERA" || $umonitoreo->estadoMon == "PENDIENTE")
            {
                if($inicio >= $ahora && $umonitoreo->finicioMon == $umonitoreo->fterminoMon)
                {
                    $arr_monitoreos[$llave]->diferencia = "00:00";
                }
                else
                {
                    date_default_timezone_set('UTC');
                    $diferencia = $ahora - $inicio;
                    //$diferencia = $inicio."---".$ahora."---".$diferencia."---".date("H:i:s",($diferencia))."---".$actual;
                    $diferencia = date("H:i",($diferencia));
                    $arr_monitoreos[$llave]->diferencia = $diferencia;
                }
            }
            
            
        }

        return $arr_monitoreos;
    }


    public function Guardar(Request $request)
    {
        //Ricardo
        //guarda la información del monitoreo
        $jmonitoreo = json_decode($request->monitoreo);

        $obj_monitoreo = new Monitoreo();
        $obj_monitoreo->Vehiculo_idVehiculo = $jmonitoreo->Vehiculo_idVehiculo;
        $obj_monitoreo->Acople_idVehiculo = $jmonitoreo->Acople_idVehiculo;
        $obj_monitoreo->Persona_idPersona = $jmonitoreo->Persona_idPersona;
        $obj_monitoreo->detalleMon = $jmonitoreo->detalleMon;
        $obj_monitoreo->finicioMon = $jmonitoreo->finicioMon;
        $obj_monitoreo->hinicioMon = $jmonitoreo->hinicioMon;
        $obj_monitoreo->fterminoMon =  ($jmonitoreo->fterminoMon != "") ? $jmonitoreo->fterminoMon : null;
        $obj_monitoreo->hterminoMon = ($jmonitoreo->hterminoMon != "") ? $jmonitoreo->hterminoMon : null;
        $obj_monitoreo->bahiaMon = $jmonitoreo->bahiaMon;
        $obj_monitoreo->idealMon = $jmonitoreo->idealMon;
        $obj_monitoreo->estadoMon = $jmonitoreo->estadoMon;
        $obj_monitoreo->observacionMon = $jmonitoreo->observacionMon;
        $obj_monitoreo->save();

        return $obj_monitoreo;
    }
    public function Actualizar(Request $request)
    {
        //Ricardo
        //actualiza la información del monitoreo
        $jmonitoreo = json_decode($request->monitoreo);

        $obj_abastecimientoc = Monitoreo::where('idMonitoreo', $jmonitoreo->idMonitoreo)
        ->update([

                "Vehiculo_idVehiculo" => $jmonitoreo->Vehiculo_idVehiculo,
                "Acople_idVehiculo" => $jmonitoreo->Acople_idVehiculo,
                "Persona_idPersona" => $jmonitoreo->Persona_idPersona,
                "detalleMon" => $jmonitoreo->detalleMon,
                "finicioMon" => $jmonitoreo->finicioMon,
                "hinicioMon" => $jmonitoreo->hinicioMon,
                "fterminoMon" =>  ($jmonitoreo->fterminoMon != "") ? $jmonitoreo->fterminoMon : null,
                "hterminoMon" => ($jmonitoreo->hterminoMon != "") ? $jmonitoreo->hterminoMon : null,
                "bahiaMon" => $jmonitoreo->bahiaMon,
                "idealMon" => $jmonitoreo->idealMon,
                "estadoMon" => $jmonitoreo->estadoMon,
                "observacionMon" => $jmonitoreo->observacionMon,
              ]);
        return;
    }
}