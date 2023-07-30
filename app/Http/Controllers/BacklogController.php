<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\HistorialFallaExport;
use Maatwebsite\Excel\Facades\Excel;

use App\Falla;
use App\Trabajo;
use App\Asignacion;
use App\Implemento;
use App\Backlog;
use APP\Dato;
use DB;

class BacklogController extends Controller
{   
    public function Listar($vehiculo, $tipo)
    {
        $vehiculo_ = "=";
        if ( $vehiculo == "0")
        {
            $vehiculo_ = "<>";
        }

        $arr_backlog = Backlog::select('backlog.*','placaVeh')
            ->join('vehiculo','vehiculo.idVehiculo','=','backlog.Vehiculo_idVehiculo')
            ->whereIn('estadoBac', ["SOLICITADO","PENDIENTE","REPROGRAMADO"])
            ->where('Vehiculo_idVehiculo',$vehiculo_,$vehiculo)
            ->get();

        $backlogs = [];
        $preventivos = [];
        $correctivos = [];
        $campanas = [];
        foreach($arr_backlog as $ubacklog)
        {
            $backlog = [];
            $backlog["idBacklog"] = $ubacklog->idBacklog;
            $backlog["tipoBac"] = $ubacklog->tipoBac;
            $backlog["fechaBac"] = $ubacklog->fechaBac;
            $backlog["estadoBac"] = $ubacklog->estadoBac;
            $backlog["Origen_idOrigen"] = $ubacklog->Origen_idOrigen;
            $backlog["Vehiculo_idVehiculo"] = $ubacklog->Vehiculo_idVehiculo;
            $backlog["placaVeh"] = $ubacklog->placaVeh;

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
            elseif( $ubacklog->tipoBac == "CAMPAÑA" ) 
            {
                $campanas[] = $ubacklog->Origen_idOrigen;
                $backlogs["cc".$ubacklog->Origen_idOrigen] = $backlog;
            }
        }
        //obteniendo las fallas correctivas
        $arr_fallas = Falla::select('idFalla','estadoFal','detalleFal','nombreCom','nombreApa','Vehiculo_idVehiculo','Acople_idVehiculo','fechaRep','motivoRep','reportef.Cuenta_idDato','motivoRep')
            ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->leftJoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
            ->whereIn('idFalla',$correctivos)
            ->get();

        //obteniendo las fallas preventivas1
        $arr_preventivos = Asignacion::select('implemento.*','nombreImp','nombreGru','idAsignacion','vencimientoAsi','fvencimientoAsi')
            ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
            ->join('grupo','grupo.idGrupo','=','implemento.Grupo_idGrupo')
            ->whereIn('idAsignacion',$preventivos)
            ->get();

        //obteniendo las campañas
        $arr_campanas = Asignacion::select('implemento.*','nombreImp','nombreGru','idAsignacion','vencimientoAsi','fvencimientoAsi')
            ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
            ->join('grupo','grupo.idGrupo','=','implemento.Grupo_idGrupo')
            ->whereIn('idAsignacion',$campanas)
            ->get();

        //obteniendo las fallas de campaña
        $arr_campanas_fal = Falla::select('idFalla','estadoFal','detalleFal','nombreCom','nombreApa','Vehiculo_idVehiculo','Acople_idVehiculo','fechaRep','motivoRep','reportef.Cuenta_idDato','motivoRep')
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
            //$backlog["mot"] = $ufalla->motivoRep;
            if ( $ufalla->motivoRep == null ) { $backlog["mot"] = $ufalla->estadoFal; } else { $backlog["mot"] = $ufalla->motivoRep; }
            //if ( $backlogs["c".$ufalla->idFalla]["estadoTra"] == "DEPRECIADO") { $backlog["mot"] = "BACKLOG"; } else { $backlog["mot"] = $ufalla->motivoRep; }
            
            $backlogs["c".$ufalla->idFalla] = array_merge($backlogs["c".$ufalla->idFalla], $backlog);
        }

        foreach($arr_preventivos as $upreventivo)
        {
            $backlog = [];
            $backlog["apa"] = $upreventivo->nombreGru;
            $backlog["com"] = $upreventivo->nombreImp;
            $backlog["det"] =  number_format($upreventivo->vencimientoAsi, 0, '', ' ')." km.";
            $backlog["mot"] = "";

            $backlogs["p".$upreventivo->idAsignacion] = array_merge($backlogs["p".$upreventivo->idAsignacion], $backlog);
        }
        foreach($arr_campanas as $ucampana)
        {
            if ( $ucampana->nombreGru == "CAMPAÑAS")
            {
                $backlog = [];
                $backlog["apa"] = $ucampana->nombreGru;
                $backlog["com"] = $ucampana->nombreImp;
                $backlog["det"] =  number_format($ucampana->vencimientoAsi, 0, '', ' ')." km.";
                $backlog["mot"] = "";
                
                $backlogs["cc".$ucampana->idAsignacion] = array_merge($backlogs["cc".$ucampana->idAsignacion], $backlog);
            }
        }

        foreach($arr_campanas_fal as $ufalla)
        {
            
                $backlog = [];
                $backlog["apa"] = $ufalla->nombreApa;
                $backlog["com"] = $ufalla->nombreCom;
                $backlog["det"] = $ufalla->detalleFal;
                //$backlog["mot"] = $ufalla->motivoRep;
                if ( $ufalla->motivoRep == null ) { $backlog["mot"] = $ufalla->estadoFal; } else { $backlog["mot"] = $ufalla->motivoRep; }
                //if ( $backlogs["c".$ufalla->idFalla]["estadoTra"] == "DEPRECIADO") { $backlog["mot"] = "BACKLOG"; } else { $backlog["mot"] = $ufalla->motivoRep; }
                
                $backlogs["cc".$ufalla->idFalla] = array_merge($backlogs["cc".$ufalla->idFalla], $backlog);
            
        }

        //return $backlogs;
        $respuesta = [];
        foreach($backlogs as $ubacklog)
        {
            $respuesta[] = $ubacklog;
        }

        if(count($respuesta) == 0)
            $respuesta[] = [];

        return $respuesta;
    }
    public function ListarReporte( $vehiculo, $tipo, $estado, $cuenta, $finicio, $ffin ) 
    {
        $cuenta_ = "=";
        $vehiculo_ = "=";
        $tipo_ = "=";
        $estado_ = "=";
        if ( $vehiculo == "0") { $vehiculo_ = "<>"; }
        if ( $cuenta == "0") { $cuenta_ = "<>"; } 
        if ( $tipo == "TODOS") { $tipo_ = "<>"; }
        if ( $estado == "TODOS") { $estado_ = "<>"; }
     
        /*$arr_backlog = Backlog::select('backlog.*','placaVeh','marca.valorDat as marca','fabricacionVeh','tipo.valorDat as tipo','ordent.Cuenta_idDato','trabajo.estadoTra')
            ->leftjoin('vehiculo','vehiculo.idVehiculo','=','backlog.Vehiculo_idVehiculo')
            ->leftjoin('dato as marca','marca.idDato','=','vehiculo.Marca_idDato')
            ->leftjoin('trabajo','trabajo.Backlog_idBacklog','=','backlog.idBacklog')
            ->leftjoin('ordent','ordent.idOrdent','=','trabajo.Ordent_idordent')
            ->leftjoin('dato as tipo','tipo.idDato','=','vehiculo.Tipo_idDato')
            ->where('backlog.Vehiculo_idVehiculo',$vehiculo_,$vehiculo)
            ->where('ordent.Cuenta_idDato',$cuenta_,$cuenta)
            ->whereDate('fechaBac','>=', $finicio)
            ->whereDate('fechaBac','<=', $ffin)
            ->where('trabajo.estadoTra',$estado_, $estado)
            ->get();*/

        $arr_backlog = Backlog::select('backlog.*','placaVeh','marca.valorDat as marca','fabricacionVeh','tipo.valorDat as tipo','ordent.Cuenta_idDato','trabajo.estadoTra')
            ->leftjoin('vehiculo','vehiculo.idVehiculo','=','backlog.Vehiculo_idVehiculo')
            ->leftjoin('dato as marca','marca.idDato','=','vehiculo.Marca_idDato')
            ->leftjoin('trabajo','trabajo.Backlog_idBacklog','=','backlog.idBacklog')
            ->leftjoin('ordent','ordent.idOrdent','=','trabajo.Ordent_idordent')
            ->leftjoin('dato as tipo','tipo.idDato','=','vehiculo.Tipo_idDato')
            ->where('backlog.Vehiculo_idVehiculo',$vehiculo_,$vehiculo)
            ->whereDate('fechaBac','>=', $finicio)
            ->whereDate('fechaBac','<=', $ffin)
            //->where('backlog.estadoBac',$estado_, $estado)
            ->get();

        //return $arr_backlog;
        $backlogs = [];
        $temporal = [];
        $ordenado = [];
        $preventivos = [];
        $correctivos = [];
        $campanas = [];
        foreach($arr_backlog as $ubacklog)
        {
            $backlog = [];
            $backlog["idBacklog"] = $ubacklog->idBacklog;
            $backlog["tipoBac"] = $ubacklog->tipoBac;
            $backlog["fechaBac"] = $ubacklog->fechaBac;
            $backlog["estadoTra"] = $ubacklog->estadoTra;
            $backlog["Origen_idOrigen"] = $ubacklog->Origen_idOrigen;
            $backlog["Vehiculo_idVehiculo"] = $ubacklog->Vehiculo_idVehiculo;
            $backlog["placaVeh"] = $ubacklog->placaVeh;
            $backlog["marca"] = $ubacklog->marca;
            $backlog["tipoVeh"] = $ubacklog->tipo;
            $backlog["fabricacionVeh"] = $ubacklog->fabricacionVeh;


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
        /*$arr_fallas = Falla::select('idFalla','estadoFal','detalleFal','nombreCom','nombreApa','reportef.Vehiculo_idVehiculo','Acople_idVehiculo','fechaRep',
                    'motivoRep','reportef.Cuenta_idDato','kilometrajeKil','idReportef','estadofal','fechaOrd','estadoOrd','dato.valorDat as cuenta','idOrdent')
            ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->leftjoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
            ->leftjoin('backlog','backlog.Origen_idOrigen','=','falla.idFalla')
            ->leftjoin('trabajo','trabajo.Backlog_idBacklog','=','backlog.idBacklog')
            ->leftjoin('ordent','ordent.idOrdent','=','trabajo.Ordent_idOrdent')
            ->leftjoin('dato','dato.idDato','=','ordent.Cuenta_idDato')
            ->leftJoin('kilometraje','kilometraje.idKilometraje','=','reportef.Kilometraje_idKilometraje')
            ->whereIn('idFalla',$correctivos)
            ->whereDate('fechaOrd','>=', $finicio)
            ->whereDate('fechaOrd','<=', $ffin)
            ->where('reportef.Vehiculo_idVehiculo',$vehiculo_,$vehiculo)
            ->where('ordent.Cuenta_idDato', $cuenta_,$cuenta)
            ->where('reportef.motivoRep', $tipo_,$tipo)
            ->get();*/


        $arr_fallas = Falla::select('idFalla','estadoFal','detalleFal','nombreCom','nombreApa','reportef.Vehiculo_idVehiculo','Acople_idVehiculo','fechaRep','motivoRep','reportef.Cuenta_idDato','motivoRep')
            ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->leftjoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
            ->leftjoin('backlog','backlog.Origen_idOrigen','=','falla.idFalla')
            ->leftjoin('trabajo','trabajo.Backlog_idBacklog','=','backlog.idBacklog')
            ->leftjoin('ordent','ordent.idOrdent','=','trabajo.Ordent_idOrdent')
            ->leftjoin('dato','dato.idDato','=','ordent.Cuenta_idDato')
            ->leftJoin('kilometraje','kilometraje.idKilometraje','=','reportef.Kilometraje_idKilometraje')
            ->whereIn('idFalla',$correctivos)
            ->whereDate('fechaBac','>=', $finicio)
            ->whereDate('fechaBac','<=', $ffin)
            ->where('reportef.Vehiculo_idVehiculo',$vehiculo_,$vehiculo)
            //->where('ordent.Cuenta_idDato', $cuenta_,$cuenta)
            ->where('reportef.Cuenta_idDato', $cuenta_,$cuenta)
            ->where('reportef.motivoRep', $tipo_,$tipo)
            ->where('trabajo.estadoTra', $estado_,$estado)
            ->get();

        //obteniendo las fallas preventivas1
        $arr_preventivos = Asignacion::select('idImplemento','nombreImp','nombreGru','idAsignacion','vencimientoAsi','fvencimientoAsi', 
                              'estadoTra','idOrdent','fechaOrd')
            ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
            ->join('grupo','grupo.idGrupo','=','implemento.Grupo_idGrupo')
            ->leftjoin('backlog','backlog.Origen_idOrigen','=','asignacion.idAsignacion')
            ->leftjoin('trabajo','trabajo.Backlog_idBacklog','=','backlog.idBacklog')
            ->leftjoin('ordent','ordent.idOrdent','=','trabajo.Ordent_idOrdent')
            ->whereIn('idAsignacion',$preventivos)
            ->get();

        //obteniendo las fallas campañas
        $arr_campanas = Asignacion::select('idImplemento','nombreImp','nombreGru','idAsignacion','vencimientoAsi','fvencimientoAsi', 
                              'estadoTra','idOrdent','fechaOrd','observacionAsi')
            ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
            ->join('grupo','grupo.idGrupo','=','implemento.Grupo_idGrupo')
            ->leftjoin('backlog','backlog.Origen_idOrigen','=','asignacion.idAsignacion')
            ->leftjoin('trabajo','trabajo.Backlog_idBacklog','=','backlog.idBacklog')
            ->leftjoin('ordent','ordent.idOrdent','=','trabajo.Ordent_idOrdent')
            ->whereIn('idAsignacion',$campanas)
            ->get();
        
        $arr_fallas_c = Falla::select('idFalla','estadoFal','detalleFal','nombreCom','nombreApa','reportef.Vehiculo_idVehiculo','Acople_idVehiculo','fechaRep','motivoRep','reportef.Cuenta_idDato','motivoRep')
            ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->leftjoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
            ->leftjoin('backlog','backlog.Origen_idOrigen','=','falla.idFalla')
            ->leftjoin('trabajo','trabajo.Backlog_idBacklog','=','backlog.idBacklog')
            ->leftjoin('ordent','ordent.idOrdent','=','trabajo.Ordent_idOrdent')
            ->leftjoin('dato','dato.idDato','=','ordent.Cuenta_idDato')
            ->leftJoin('kilometraje','kilometraje.idKilometraje','=','reportef.Kilometraje_idKilometraje')
            ->whereIn('idFalla',$campanas)
            ->whereDate('fechaBac','>=', $finicio)
            ->whereDate('fechaBac','<=', $ffin)
            ->where('reportef.Vehiculo_idVehiculo',$vehiculo_,$vehiculo)
            //->where('ordent.Cuenta_idDato', $cuenta_,$cuenta)
            //->where('reportef.Cuenta_idDato', $cuenta_,$cuenta)
            //->where('reportef.motivoRep', $tipo_,$tipo)
            //->where('trabajo.estadoTra', $estado_,$estado)
            ->get();
        //return $arr_fallas_c;

        $temporal = $backlogs;
        foreach($arr_fallas as $ufalla)
        {
            $backlog = [];
            $backlog["Ordent_idOrdent"] = $ufalla->idOrdent;
            $backlog["cuenta"] = $ufalla->cuenta;
            $backlog["fechaRep"] = $ufalla->fechaRep;
            $backlog["nombreApa"] = $ufalla->nombreApa;
            $backlog["nombreCom"] = $ufalla->nombreCom;
            $backlog["detalleFal"] = $ufalla->detalleFal;
            $backlog["kilometraje"] = $ufalla->kilometrajeKil;
            $backlog["Reporte_idReporte"] = $ufalla->idReportef;
            $backlog["motivoRep"] = $ufalla->motivoRep;
            $backlog["estadoFal"] = $ufalla->estadoFal;
            $backlog["fechaOrd"] = $ufalla->fechaOrd;
            $backlog["estadoOrd"] = $ufalla->estadoOrd;
            //$backlogs["c".$ufalla->idFalla] = array_merge($backlogs["c".$ufalla->idFalla], $backlog);
            if ( $tipo !== 'TODOS') 
            {
                if ( $temporal["c".$ufalla->idFalla]) 
                {
                    $ordenado["c".$ufalla->idFalla] = array_merge($temporal["c".$ufalla->idFalla], $backlog);
                }
            } else { 
                $ordenado["c".$ufalla->idFalla] = array_merge($backlogs["c".$ufalla->idFalla], $backlog);
            }
        }

        foreach($arr_preventivos as $upreventivo)
        {
            $backlog = [];
            $backlog["Ordent_idOrdent"] = $upreventivo->idOrdent;
            $backlog["fechaOrd"] = $upreventivo->fechaOrd;
            $backlog["estadoFal"] = $upreventivo->estadoTra;
            $backlog["mantenimiento"] = $upreventivo->nombreGru;
            $backlog["tipo_preventivo"] = $upreventivo->nombreImp;
            $backlog["frecuencia"] =  number_format($upreventivo->vencimientoAsi, 0, '', ' ')." km.";
            $backlog["motivoRep"] = $backlogs["p".$upreventivo->idAsignacion]['tipoBac'];
            $backlog["fechaRep"] = $backlogs["p".$upreventivo->idAsignacion]['fechaBac'];        
            //$backlogs["p".$upreventivo->idAsignacion] = array_merge($backlogs["p".$upreventivo->idAsignacion], $backlog);
            if ( $tipo !== 'TODOS') 
            {
                if ( $temporal["p".$upreventivo->idAsignacion]) 
                {
                    $ordenado["p".$upreventivo->idAsignacion] = array_merge($temporal["p".$upreventivo->idAsignacion], $backlog);
                }
            } else { 
                $ordenado["p".$upreventivo->idAsignacion] = array_merge($backlogs["p".$upreventivo->idAsignacion], $backlog);
            }
        }

        foreach($arr_campanas as $ucampana)
        {
            if ( $ucampana->nombreGru == "CAMPAÑAS") 
            {
                $backlog = [];
                $backlog["Ordent_idOrdent"] = $ucampana->idOrdent;
                $backlog["fechaOrd"] = $ucampana->fechaOrd;
                $backlog["estadoFal"] = $ucampana->estadoTra;
                $backlog["mantenimiento"] = $ucampana->nombreGru;
                $backlog["tipo_preventivo"] = $ucampana->nombreImp;
                $backlog["detalleFal"] = $ucampana->observacionAsi;
                $backlog["frecuencia"] =  number_format($ucampana->vencimientoAsi, 0, '', ' ')." km.";
                $backlog["motivoRep"] = $backlogs["cc".$ucampana->idAsignacion]['tipoBac'];
                $backlog["fechaRep"] = $backlogs["cc".$ucampana->idAsignacion]['fechaBac'];        
                
                if ( $tipo !== 'TODOS') 
                {
                    if ( $temporal["cc".$ucampana->idAsignacion]) 
                    {
                        $ordenado["cc".$ucampana->idAsignacion] = array_merge($temporal["cc".$ucampana->idAsignacion], $backlog);
                    }
                } else { 
                    $ordenado["cc".$ucampana->idAsignacion] = array_merge($backlogs["cc".$ucampana->idAsignacion], $backlog);
                }
            }
        }
        
        foreach($arr_fallas_c as $ufalla)
        {
            $backlog = [];
            $backlog["Ordent_idOrdent"] = $ufalla->idOrdent;
            $backlog["cuenta"] = $ufalla->cuenta;
            $backlog["fechaRep"] = $ufalla->fechaRep;
            $backlog["nombreApa"] = $ufalla->nombreApa;
            $backlog["nombreCom"] = $ufalla->nombreCom;
            $backlog["detalleFal"] = $ufalla->detalleFal;
            $backlog["kilometraje"] = $ufalla->kilometrajeKil;
            $backlog["Reporte_idReporte"] = $ufalla->idReportef;
            $backlog["motivoRep"] = $ufalla->motivoRep;
            $backlog["estadoFal"] = $ufalla->estadoFal;
            $backlog["fechaOrd"] = $ufalla->fechaOrd;
            $backlog["estadoOrd"] = $ufalla->estadoOrd;
            if ( $tipo !== 'TODOS') 
            {
                if ( $temporal["cc".$ufalla->idFalla]) 
                {
                    $ordenado["cc".$ufalla->idFalla] = array_merge($temporal["cc".$ufalla->idFalla], $backlog);
                }
            } else { 
                $ordenado["cc".$ufalla->idFalla] = array_merge($backlogs["cc".$ufalla->idFalla], $backlog);
            }
        }

        $fallas = [];
        foreach($ordenado as $ubacklog) 
        {
            $fallas[] = $ubacklog;
        }
        return $fallas;
    }
    public function Desactivar( Request $request )
    {
        if ( $request->tipoBac == 'CORRECTIVO') 
        {
            $backlog = Backlog::find($request->idBacklog);
            $backlog->estadoBac = 'ANULADO'; 
            $backlog->save();
            
            $falla = Falla::find($request->idFalla); 
            $falla->estadoFal = 'ANULADO'; 
            $falla->save();
            
            return $request->idBacklog;
        } elseif( $request->tipoBac == 'PREVENTIVO') { 
            $backlog = Backlog::find($request->idBacklog);
            $backlog->estadoBac = 'ANULADO'; 
            $backlog->save();
        } elseif( $request->tipoBac == 'CAMPAÑA') { //Falta Implementar 

        }
    }
    public function AgregarAot( Request $request ) //roger
    {
        $ordent = json_decode( $request->ordent); 
        
        foreach( $ordent->backlogs as $ubacklog ) 
        {
            if ( $ubacklog->estadoBac == 'PENDIENTE' || $ubacklog->estadoBac == 'SOLICITADO' || $ubacklog->estadoBac == 'REPROGRAMADO') 
            {
                $obj_trabajo = new Trabajo();
                $obj_trabajo->Ordent_idOrdent = $ordent->idOrdent; 
                $obj_trabajo->fechaTra = $ubacklog->fechaBac; 
                $obj_trabajo->estadoTra = 'INICIADO'; 
                $obj_trabajo->Backlog_idBacklog = $ubacklog->idBacklog;
                $obj_trabajo->save();

                $actualizo = Backlog::select('idBacklog')
                    ->where('idBacklog', $ubacklog->idBacklog)
                    ->update(['estadoBac' => "INICIADO"]);
            }
        }

        return $ordent->idOrdent;
    }
}
