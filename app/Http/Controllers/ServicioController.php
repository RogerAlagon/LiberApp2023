<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request;

use App\Servicio; 
use DB;

Class ServicioController extends Controller 
{
    public function Listar($cliente, $finicio, $ffin, $estado)
    {
        $cliente_ = '=';
        if ($cliente == '0') { $cliente_ = '<>'; }
        $arr_servicios = Servicio::select( DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer) AS trabajadorPer,  Vehiculo_idVehiculo,
                                                   Acople_idVehiculo, Persona_idPersona, Convoy_idConvoy, estadoSer, tracto.placaVeh, carreta.placaVeh as carreta,
                                                   dato.valorDat as tipoVeh,nombreExt as cliente, finicioCon, fterminoCon, partida.valorDat as partida, origenCon, cargaCon, destinoCon, 
                                                   abreviacionRut, llegada.valorDat as llegada, roundtripCon'))
            ->join('vehiculo as tracto','tracto.idVehiculo','=','servicio.Vehiculo_idVehiculo')
            ->join('persona','persona.idPersona','=','servicio.Persona_idPersona')
            ->join('convoy','convoy.idConvoy','=','servicio.Convoy_idConvoy')
            ->join('externo','externo.idExterno','=','convoy.Cliente_idExterno')
            ->join('ruta','ruta.idRuta','=','convoy.Ruta_idRuta')
            ->join('dato as partida','partida.idDato','=','convoy.Partida_idDato')
            ->join('dato as llegada','llegada.idDato','=','convoy.Llegada_idDato')
            ->leftJoin('vehiculo as carreta','carreta.idVehiculo','=','servicio.Acople_idVehiculo')
            ->leftJoin('dato','dato.idDato','=','tracto.Tipo_idDato')
            ->where('convoy.Cliente_idExterno', $cliente_ ,$cliente)
            ->whereDate('convoy.finicioCon','>=',$finicio)
            ->whereDate('convoy.finicioCon','<=',$ffin)
            ->where('estadoSer','=',$estado)
            ->get(); 
        return $arr_servicios;
    }
    public function ListarConvoy($convoy)
    {
        $arr_servicios = Servicio::select(DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'vehiculo.placaVeh','vehiculo.ejeVeh as vejeVeh','acople.placaVeh as acopleVeh','acople.ejeVeh as aejeVeh','idServicio','Persona_idPersona','Vehiculo_idVehiculo','Acople_idVehiculo','Convoy_idConvoy','cargaSer','Guia_idGuia','valorDat as tipoVeh','escoltaSer','estadoSer')
        ->join('vehiculo','vehiculo.idVehiculo','=','servicio.Vehiculo_idVehiculo')
        ->leftJoin('vehiculo as acople','acople.idVehiculo','=','servicio.Acople_idVehiculo')
        ->join('persona','persona.idPersona','=','servicio.Persona_idPersona')
        ->join('dato','vehiculo.Tipo_idDato','=','dato.idDato')
        ->where('Convoy_idConvoy',$convoy)
        ->where('estadoSer','<>','ANULADO')
        ->where('estadoSer','<>','FACTURADO')
        ->where('estadoSer','<>','PAGADO')
        ->where('estadoSer','<>','REEMPLAZADO')
        ->orderBy('escoltaSer','DESC')
        ->get();

        return $arr_servicios;
    }

    public function Reemplazar(Request $request)
    {
        $jservicio = json_decode($request->servicio);

        $arr_servicios = "";
        if($jservicio->escoltaSer == '1')
        {
            $arr_servicios = Servicio::select('*')
                ->where('Convoy_idConvoy',$jservicio->Convoy_idConvoy)
                ->where('estadoSer','=','RUTA')
                ->where('idServicio','<>',$jservicio->idServicio)
                ->whereRaw('(
                        Persona_idPersona = '.$jservicio->idReemplazop.' OR 
                        Vehiculo_idVehiculo = '.$jservicio->idReemplazov.')')
                ->get();
        }
        else
        {
            $arr_servicios = Servicio::select('*')
                ->where('Convoy_idConvoy',$jservicio->Convoy_idConvoy)
                ->where('estadoSer','=','RUTA')
                ->where('idServicio','<>',$jservicio->idServicio)
                ->whereRaw('(
                        Persona_idPersona = '.$jservicio->idReemplazop.' OR 
                        Vehiculo_idVehiculo = '.$jservicio->idReemplazov.' OR 
                        Vehiculo_idVehiculo = '.$jservicio->idReemplazoa.' OR 
                        Acople_idVehiculo = '.$jservicio->idReemplazov.' OR 
                        Acople_idVehiculo = '.$jservicio->idReemplazoa.')')
                ->get();
        }

        if(count($arr_servicios) > 0)
            return "Ya existe un servicio con datos similares.";

        $obj_servicio = (object)[];
        $obj_servicio->estadoSer = "REEMPLAZADO";

        $afectados = DB::table('servicio')
              ->where('idServicio', $jservicio->idServicio)
              ->whereIn('estadoSer',["RUTA","PROGRAMADO"])
              ->update((array)$obj_servicio);

        if($afectados > 0)
        {
            $obj_servicio = new Servicio((array) $jservicio);
            $obj_servicio->estadoSer = "RUTA";
            $obj_servicio->Persona_idPersona = $jservicio->idReemplazop;
            $obj_servicio->Vehiculo_idVehiculo = $jservicio->idReemplazov;
            $obj_servicio->Acople_idVehiculo = ($jservicio->escoltaSer == '1') ? null : $jservicio->idReemplazoa;
            $obj_servicio->Reemplazo_idServicio = $jservicio->idServicio;
            $obj_servicio->fcambioSer = $jservicio->fcambioSer." ".$jservicio->hcambioSer;
            $obj_servicio->save();
        }
        else
            return "El Servicio ya no está vigente.";

        return 1;
    }
    /*public function Agregar(Request $request)
    {
        $jservicio = json_decode($request->servicio);

        $arr_servicios = Servicio::select('*')
            ->where('Convoy_idConvoy',$jservicio->Convoy_idConvoy)
            ->where('estadoSer','=','RUTA')
            ->where('idServicio','<>',$jservicio->idServicio)
            ->whereRaw('(
                    Persona_idPersona = '.$jservicio->idReemplazop.' OR 
                    Vehiculo_idVehiculo = '.$jservicio->idReemplazov.' OR 
                    Vehiculo_idVehiculo = '.$jservicio->idReemplazoa.' OR 
                    Acople_idVehiculo = '.$jservicio->idReemplazov.' OR 
                    Acople_idVehiculo = '.$jservicio->idReemplazoa.')')
            ->get();

        if(count($arr_servicios) > 0)
            return "Ya existe un servicio con datos similares.";

        $obj_servicio = (object)[];
        $obj_servicio->estadoSer = "REEMPLAZADO";

        $afectados = DB::table('servicio')
              ->where('idServicio', $jservicio->idServicio)
              ->where('estadoSer',"RUTA")
              ->update((array)$obj_servicio);

        if($afectados > 0)
        {
            $obj_servicio = new Servicio((array) $jservicio);
            $obj_servicio->estadoSer = "RUTA";
            $obj_servicio->Persona_idPersona = $jservicio->idReemplazop;
            $obj_servicio->Vehiculo_idVehiculo = $jservicio->idReemplazov;
            $obj_servicio->Acople_idVehiculo = $jservicio->idReemplazoa;
            $obj_servicio->Reemplazo_idServicio = $jservicio->idServicio;
            $obj_servicio->fcambioSer = $jservicio->fcambioSer." ".$jservicio->hcambioSer;
            $obj_servicio->save();
        }
        else
            return "El Servicio ya no está vigente.";

        return 1;
    }*/
    public function Anular(Request $request)
    {
        $jservicio = json_decode($request->servicio);

        $obj_servicio = (object)[];
        $obj_servicio->estadoSer = "ANULADO";

        $afectados = DB::table('servicio')
              ->where('idServicio', $jservicio->idServicio)
              ->whereIn('estadoSer',["RUTA","PROGRAMADO"])
              ->update((array)$obj_servicio);
              
        return $afectados;


    }
}
