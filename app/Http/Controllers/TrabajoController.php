<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Trabajo;
use App\Falla;
use App\Asignacion;
use DB;

class TrabajoController extends Controller
{   
    public function Listar($ordent)
    {
        $arr_backlog = Trabajo::select('backlog.*','trabajo.*')
            ->join('backlog','backlog.idBacklog','=','trabajo.Backlog_idBacklog')
            ->where('Ordent_idOrdent', $ordent)
            ->get();

        $backlogs = [];
        $preventivos = [];
        $correctivos = [];
        $campanas = [];
        $arr_preventivos = [];
        $arr_correctivos = [];
        $arr_campanas = [];

        foreach($arr_backlog as $ubacklog)
        {
            $backlog = [];
            $backlog["idBacklog"] = $ubacklog->idBacklog;
            $backlog["tipoBac"] = $ubacklog->tipoBac;
            $backlog["fechaBac"] = $ubacklog->fechaBac;
            $backlog["estadoBac"] = $ubacklog->estadoBac;
            $backlog["Origen_idOrigen"] = $ubacklog->Origen_idOrigen;
            $backlog["idTrabajo"] = $ubacklog->idTrabajo;
            $backlog["estadoTra"] = $ubacklog->estadoTra;

            if($ubacklog->tipoBac == "PREVENTIVO")
            {
                $preventivos[] = $ubacklog->Origen_idOrigen;
                $backlogs["p".$ubacklog->Origen_idOrigen] = $backlog;
            }
            elseif($ubacklog->tipoBac == "CORRECTIVO")
            {
                $correctivos[] = $ubacklog->Origen_idOrigen;
                $backlogs["c".$ubacklog->Origen_idOrigen] = $backlog;
            }
            elseif($ubacklog->tipoBac == "CAMPAÑA") 
            {
                $campanas[] = $ubacklog->Origen_idOrigen;
                $backlogs["cc".$ubacklog->Origen_idOrigen] = $backlog;
            }
        }

        //obteniendo las fallas correctivas
        $arr_fallas = Falla::select('idFalla','estadoFal','detalleFal','nombreCom','nombreApa','Vehiculo_idVehiculo','vehiculo.placaVeh','Acople_idVehiculo','fechaRep','motivoRep','reportef.Cuenta_idDato','idReportef')
            ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->leftJoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
            ->leftJoin('vehiculo','vehiculo.idVehiculo','=','reportef.Vehiculo_idVehiculo')
            ->whereIn('idFalla',$correctivos)
            ->get();

        //obteniendo las fallas preventivas1
        $arr_asignaciones = Asignacion::select('implemento.*','nombreImp','nombreGru','idAsignacion','vencimientoAsi','fvencimientoAsi')
            ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
            ->join('grupo','grupo.idGrupo','=','implemento.Grupo_idGrupo')
            ->whereIn('idAsignacion',$preventivos)
            ->get();
        
        //obteniendo las campañas
        $arr_asignaciones_c = Asignacion::select('implemento.*','nombreImp','nombreGru','idAsignacion','vencimientoAsi','fvencimientoAsi','observacionAsi')
            ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
            ->join('grupo','grupo.idGrupo','=','implemento.Grupo_idGrupo')
            ->whereIn('idAsignacion',$campanas)
            ->get();
    
        //obteniendo las fallas de campaña
        $arr_fallas_c = Falla::select('idFalla','estadoFal','detalleFal','nombreCom','nombreApa','Vehiculo_idVehiculo','Acople_idVehiculo','fechaRep','motivoRep','reportef.Cuenta_idDato','motivoRep')
            ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->leftJoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
            ->whereIn('idFalla',$campanas)
            ->get();
    

        foreach($arr_fallas as $ufalla)
        {
            $backlog = [];
            $backlog["apa"] = $ufalla->nombreApa;
            $backlog["com"] = $ufalla->nombreCom;
            $backlog["det"] = $ufalla->detalleFal;
            $backlog["rf"] = $ufalla->idReportef;

            $arr_correctivos[] = array_merge($backlogs["c".$ufalla->idFalla], $backlog);
        }

        foreach($arr_asignaciones as $uasignacion)
        {
            $backlog = [];
            $backlog["apa"] = $uasignacion->nombreGru;
            $backlog["com"] = $uasignacion->nombreImp;
            $backlog["det"] = number_format($uasignacion->vencimientoAsi, 0, '', ' ')." km.";

            $arr_preventivos[] = array_merge($backlogs["p".$uasignacion->idAsignacion], $backlog);
        }
        
        foreach($arr_asignaciones_c as $ucampana)
        {
            if ( $ucampana->nombreGru == "CAMPAÑAS" ) 
            {
                $backlog = [];
                $backlog["apa"] = $ucampana->nombreGru;
                $backlog["com"] = $ucampana->nombreImp;
                $backlog["det"] = number_format($ucampana->vencimientoAsi, 0, '', ' ')." km.";
                $backlog["detc"] = $ucampana->observacionAsi;
                $backlog["mot"] = "";
                
                $arr_campanas[] = array_merge($backlogs["cc".$ucampana->idAsignacion], $backlog);
            }
        }

        foreach($arr_fallas_c as $ufalla)
        {
            $backlog = [];
            $backlog["apa"] = $ufalla->nombreApa;
            $backlog["com"] = $ufalla->nombreCom;
            $backlog["det"] = $ufalla->detalleFal;
            if ( $ufalla->motivoRep == null ) { $backlog["mot"] = $ufalla->estadoFal; } else { $backlog["mot"] = $ufalla->motivoRep; }
            $arr_campanas[] = array_merge($backlogs["cc".$ufalla->idFalla], $backlog);
        }

        /*************************************************************************/

        $respuesta["preventivos"] = $arr_preventivos;
        $respuesta["correctivos"] = $arr_correctivos;
        $respuesta["campanas"] = $arr_campanas;

        return $respuesta;
    }
}
