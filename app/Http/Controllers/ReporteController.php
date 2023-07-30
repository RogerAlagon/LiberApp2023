<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use App\Reportef;
//use App\Falla;
use App\Apartado;
use App\Componente;
use App\Reporte;
use DB;
/*use PDF;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Http\Controllers\Controller;
use App\Firma;
use App\Imagen;*/

class ReporteController extends Controller
{    
    public function Listar()
    {
        /*$arr_reportesf = Reporte::select('reportef.*','vehiculo.placaVeh','remolque.placaVeh as acopleVeh',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'))
            ->join('vehiculo','vehiculo.idVehiculo','=','reportef.Vehiculo_idVehiculo')
            ->leftjoin('vehiculo as remolque','remolque.idVehiculo','=','reportef.Acople_idVehiculo')
            ->join('persona','persona.idPersona','=','reportef.Persona_idPersona')
            //->whereIn('estadoCon', ['SOLICITADO','','ENTREGA','RETORNO','TERMINADO'])
            ->get();*/

        /*$ids = [];
        $servicios = [];
        foreach ($arr_convoys as $uconvoy)
        {
            $ids[] = $uconvoy->idConvoy;
            $servicios["s".$uconvoy->idConvoy] = [];
        }*/

        /*****************************************************************************************************************/
        /*$arr_servicios = Servicio::select(DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'vehiculo.placaVeh','acople.placaVeh as acopleVeh','idServicio','Persona_idPersona','Vehiculo_idVehiculo','Acople_idVehiculo','Convoy_idConvoy','cargaSer')
            ->join('vehiculo','vehiculo.idVehiculo','=','servicio.Vehiculo_idVehiculo')
            ->join('vehiculo as acople','acople.idVehiculo','=','servicio.Acople_idVehiculo')
            ->join('persona','persona.idPersona','=','servicio.Persona_idPersona')
            ->whereIn('Convoy_idConvoy',$ids)
            ->where('estadoSer','<>','ANULADO')
            ->where('estadoSer','<>','FACTURADO')
            ->where('estadoSer','<>','PAGADO')
            ->get();

        foreach ($arr_servicios as $uservicio)
        {
            $servicios["s".$uservicio->Convoy_idConvoy][] = $uservicio;
        }

        foreach ($arr_convoys as $llave => $uconvoy)
        {
            $arr_convoys[$llave]["servicios"] = $servicios["s".$uconvoy->idConvoy];
        }*/

        return $arr_reportesf;
    }

    public function ListarUnidad($reporte)
    {
                /*$arr_apartados = Apartado::select('nombreApa','idApartado')
            ->join('reporte','reporte.idReporte','=','apartado.Reporte_idReporte')
            ->where('activoRep', 1)
            ->where('nombreRep',$reporte)
            ->orderBy('ordenApa')
            ->get();

        $apartados = [];
        $reporte = [];
        foreach ($arr_apartados as $uapartado)
        {
            $apartado = [];
            $apartado["id"] = $uapartado->idApartado;
            $apartado["nom"] = $uapartado->nombreApa;
            $apartado["com"] = [];

            $reporte["a".$uapartado->idApartado] = $apartado;
            $apartados[] = $uapartado->idApartado;
        }

        $arr_componentes = Componente::select('nombreCom','idComponente','Apartado_idApartado')
            ->whereIn('Apartado_idApartado', $apartados)
            ->orderBy('ordenCom')
            ->get();

        foreach ($arr_componentes as $ucomponente)
        {
            $componente = [];
            $componente["id"] = $ucomponente->idComponente;
            $componente["nom"] = $ucomponente->nombreCom;

            $reporte["a".$ucomponente->Apartado_idApartado]["com"][] = $componente;
        }*/


        $componentes = [];

        $arr_apartados = Apartado::select('nombreApa','idApartado','idReporte')
            ->join('reporte','reporte.idReporte','=','apartado.Reporte_idReporte')
            ->where('activoRep', 1)
            ->where('nombreRep',$reporte)
            ->orderBy('ordenApa')
            ->get();

        $id = 0;
        $apartados = [];
        $napartados = [];
        foreach ($arr_apartados as $uapartado)
        {
            $apartados[] = $uapartado->idApartado;
            $napartados["a".$uapartado->idApartado] = $uapartado->nombreApa;
            $id = $uapartado->idReporte;
        }

        $arr_componentes = Componente::select('nombreCom','idComponente','Apartado_idApartado')
            ->whereIn('Apartado_idApartado', $apartados)
            ->orderBy('idComponente')
            ->get();

        foreach ($arr_componentes as $ucomponente)
        {
            $componente = [];
            $componente["id"] = $ucomponente->idComponente;
            //$componente["com"] = $napartados["a".$ucomponente->Apartado_idApartado].": ".$ucomponente->nombreCom;
            $componente["com"] = $componente["id"]." - ".$napartados["a".$ucomponente->Apartado_idApartado].": ".$ucomponente->nombreCom;

            
            $componentes[] = $componente;
        }

        $arr_reporte = Reporte::select('versionRep')
            ->where('idReporte',$id)
            ->first();

        $respuesta = [];
        $respuesta["reporte"] = $id;
        $respuesta["version"] = $arr_reporte->versionRep;
        $respuesta["componentes"] = $componentes;
        return $respuesta;
    }

}
