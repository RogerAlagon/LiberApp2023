<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use App\Reportef;
use App\Falla;
use App\Trabajo;
use App\Asignacion;
use App\Implemento;
use App\Backlog;
use App\Ordent;
use App\Exports\HistorialFallaExport;
use Maatwebsite\Excel\Facades\Excel;
//use App\Componente;
//use App\Reporte;
use DB;
//use PDF;
/*use Dompdf\Dompdf;
use Dompdf\Options;
use App\Http\Controllers\Controller;
use App\Firma;
use App\Imagen;*/

class FallaController extends Controller
{   
    public function Listar($id )
    {
        $registros = [];
        
        $arr_trabajo = Trabajo::select('Falla_idFalla','idTrabajo','Ordent_idOrdent','Persona_idPersona','actividadTra','estadoTra')
            ->where('Ordent_idOrdent', $id)
            ->get();

        /*if( $tipo == 'CORRECTIVO') 
        {*/   
            $cont = 0;
            foreach ( $arr_trabajo as $utrabajo )
            {
                $arr_falla = Falla::select('idFalla','detalleFal','falla.Reporte_idReporte','estadoTra','nombreCom','nombreApa',
                    'Vehiculo_idVehiculo','Acople_idVehiculo','Ordent_idOrdent','fechaRep','estadoFal')
                    ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
                    ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
                    ->leftjoin('trabajo', 'trabajo.Falla_idFalla','=','falla.idFalla')
                    ->leftJoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
                    ->where('idFalla', $utrabajo->Falla_idFalla)
                    ->where('trabajo.Ordent_idOrdent', $utrabajo->Ordent_idOrdent)
                    ->get();

                $arr_falla[0]->idTrabajo = $utrabajo->idTrabajo;
                $arr_falla[0]->Persona_idPersona = $utrabajo->Persona_idPersona;
                $arr_falla[0]->actividadTra = $utrabajo->actividadTra;
                $registros[$cont] = $arr_falla[0];
                $cont++;
            }
        /*} else if ( $tipo == 'PREVENTIVO') {
            $cont = 0;
            foreach ( $arr_trabajo as $utrabajo ) 
            {
                $arr_asignacion = Asignacion::select('idAsignacion','vencimientoAsi','nombreImp')
                    ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
                    ->where('idAsignacion', $utrabajo->Asignacion_idAsignacion)
                    ->get();

                $arr_asignacion[0]->idTrabajo = $utrabajo->idTrabajo;
                $arr_asignacion[0]->actividadTra = $utrabajo->actividadTra; 
                $arr_asignacion[0]->estadoTra = $utrabajo->estadoTra; 
                $registros[$cont] = $arr_asignacion[0];
                $cont++;
            }
        }*/

        return $registros;
    }

    public function Historial($vehiculo, $estado, $finicio, $ffin)
    {

            $vehiculo_ = "="; 
            if ( $vehiculo == "0") 
            {
                $vehiculo_ = "<>";
            }
            $estados = [];
            $temporal = [];
            $fallas = [];
            $fechas = [];
            $estados[] = $estado;

            $finicio = date_create($finicio);
            $ffin = date_create($ffin);
            $contd = date_diff($finicio,$ffin)->format('%a');
            $fecha_actual = $finicio->format("Y-m-d");
            $fechas[] = $fecha_actual;
    
            if($estado == "SOLICITADO")
            {
                $estados[] = "REPROGRAMADO";
                $estados[] = "PENDIENTE";
                //$estados[] = "SOLICITADO";
            } else if ( $estado == "TODOS") { 
                $estados[] = "SOLICITADO"; 
                $estados[] = "INICIADO";
                $estados[] = "REVISADO";
                $estados[] = "TERMINADO";
                $estados[] = "REPROGRAMADO";
                $estados[] = "PENDIENTE";
                $estados[] = "TRABAJO REALIZADO";
            }
            //return $estados;
            $hoy = date("Y-m-d");
            $tiempo = strtotime($hoy);
    
            $arr_fallas = Falla::select('falla.*','nombreCom','nombreApa','Vehiculo_idVehiculo','vehiculo.placaVeh','Acople_idVehiculo','Ordent_idOrdent','fechaRep','motivoRep','reportef.Cuenta_idDato')
            //, 'vehiculo.placaVeh','remolque.placaVeh as acopleVeh',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'))
                ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
                ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
                ->leftjoin('trabajo', 'trabajo.Falla_idFalla','=','falla.idFalla')
                ->leftJoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
                ->leftJoin('vehiculo','vehiculo.idVehiculo','=','reportef.Vehiculo_idVehiculo')
                /*->where('Vehiculo_idVehiculo',$vehiculo)
                ->orWhere('Acople_idVehiculo',$vehiculo)*/
                //->where('estadoFal','<>','INICIADO')
                //->where('estadoFal', $estado)
                ->whereIn('estadoFal', $estados)
                ->where('activoFal', 1)
                ->whereRaw('(reportef.Vehiculo_idVehiculo '.$vehiculo_." ".$vehiculo.' AND tipoFal != "ACOPLE") || (Acople_idVehiculo '.$vehiculo_." ".$vehiculo.' AND tipoFal != "VEHICULO")')
                //->whereRaw('(reportef.Vehiculo_idVehiculo = '.$vehiculo.' AND tipoFal != "ACOPLE") || (Acople_idVehiculo = '.$vehiculo.' AND tipoFal != "VEHICULO")')
                //->whereDate('fechaRep','>=',$finicio)
                //->whereDate('fechaRep','<=',$ffin)
                //->whereIn('estadoCon', ['SOLICITADO','','ENTREGA','RETORNO','TERMINADO'])
                ->get();
    
            for( $i=0; $i < $contd; $i++ ) 
            {
                $fecha_actual = date("Y-m-d", strtotime($fecha_actual."+ 1 days"));
                $fechas[] = $fecha_actual;
            }

            foreach( $arr_fallas as $obj_fallas )
            {
                $temporal["u".$obj_fallas->idFalla.$obj_fallas->fechaRep] = $obj_fallas;
            }

            foreach ( $arr_fallas as $obj_fallas )
            {
                for( $j=0; $j < count($fechas); $j++ )
                {
                    if ( isset( $temporal["u".$obj_fallas->idFalla.$fechas[$j]] )) 
                    {
                        $fallas[] = $temporal["u".$obj_fallas->idFalla.$fechas[$j]];  
                    }
                }
            }
            //return $fallas;


            foreach($fallas as $llave => $ufalla)
            {
                $ffecha = strtotime($ufalla->fechaRep);
                $retraso = $tiempo - $ffecha;
                $retraso = $retraso/86400;
                $arr_fallas[$llave]["retraso"] = $retraso;
            }
    
            //return $arr_fallas;
            return $fallas;
    }
    public function ExportarHistorial($vehiculo, $estado, $finicio, $ffin, $cuenta, $tipo)
    {
        //return $estado;
        /*$fecha_actual = date("Y-m-d"); 
        return Excel::download(new HistorialFallaExport($vehiculo, $estado, $finicio, $ffin), 'HistorialFalla'.$fecha_actual.'.xlsx');*/
        $hoy = date("Y-m-d");
        $tiempo = strtotime($hoy);
        $cuenta_ = "=";
        $vehiculo_ = "=";
        $tipo_ = "=";
        $estado_ = "=";
        if ( $vehiculo == "0") { $vehiculo_ = "<>"; }
        if ( $cuenta == "0") { $cuenta_ = "<>"; } 
        if ( $tipo == "TODOS") { $tipo_ = "<>"; }
        if ( $estado == "TODOS") { $estado_ = "<>"; }
        if ( $estado == "REPROGRAMADO") { $estado = "DEPRECIADO"; }

        /*$arr_backlog = Backlog::select('backlog.*','placaVeh','marca.valorDat as marca','fabricacionVeh','tipo.valorDat as tipo','ordent.Cuenta_idDato','trabajo.estadoTra')
            ->leftjoin('vehiculo','vehiculo.idVehiculo','=','backlog.Vehiculo_idVehiculo')
            ->leftjoin('dato as marca','marca.idDato','=','vehiculo.Marca_idDato')
            ->leftjoin('trabajo','trabajo.Backlog_idBacklog','=','backlog.idBacklog')
            ->leftjoin('ordent','ordent.idOrdent','=','trabajo.Ordent_idordent')
            ->join('dato as tipo','tipo.idDato','=','vehiculo.Tipo_idDato')
            //->whereIn('estadoBac', ["SOLICITADO","PENDIENTE","REPROGRAMADO","INICIADO"])
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

            $backlogs = [];
            $idbacklogs = [];
            $idFallaC = []; //Fallas Campaña
            $temporal = [];
            $ordenado = [];
            $preventivos = [];
            $correctivos = [];
            $campanas = [];
            $solicitados = [];

            foreach($arr_backlog as $ubacklog)
            {
                $backlog = [];
                $backlog["idBacklog"] = $ubacklog->idBacklog;
                $backlog["tipoBac"] = $ubacklog->tipoBac;
                $backlog["estadoBac"] = $ubacklog->estadoBac;
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
                    if( $ubacklog->estadoBac == "SOLICITADO") 
                    {
                        $solicitados[] = $ubacklog->Origen_idOrigen;
                    }
                } 
                elseif( $ubacklog->tipoBac == "CAMPAÑA" ) 
                {
                    $preventivos[] = $ubacklog->Origen_idOrigen;
                    $campanas[] = $ubacklog->Origen_idOrigen;
                    $backlogs["cc".$ubacklog->Origen_idOrigen] = $backlog;
                }
            }
            //return $backlogs;
            //obteniendo las fallas correctivas
            $arr_fallas = Falla::select('idFalla','estadoFal','detalleFal','nombreCom','nombreApa','reportef.Vehiculo_idVehiculo','Acople_idVehiculo','fechaRep',
                                        'motivoRep','reportef.Cuenta_idDato','kilometrajeKil','idReportef','estadofal','fechaOrd','estadoOrd','dato.valorDat as cuenta',
                                        'idOrdent','estadoTra')
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
                ->where('trabajo.estadoTra', $estado_,$estado)
                ->get();

            // Fallas sin Ot
            $arr_fallasO = Falla::select('idFalla','estadoFal','detalleFal','nombreCom','nombreApa','reportef.Vehiculo_idVehiculo','Acople_idVehiculo','fechaRep',
                'motivoRep','reportef.Cuenta_idDato','dato.valorDat as cuenta','kilometrajeKil','idReportef','estadofal')
                ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
                ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
                ->leftjoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
                ->leftjoin('backlog','backlog.Origen_idOrigen','=','falla.idFalla')
                ->leftJoin('kilometraje','kilometraje.idKilometraje','=','reportef.Kilometraje_idKilometraje')
                ->leftjoin('dato','dato.idDato','=','reportef.Cuenta_idDato')
                ->whereIn('idFalla',$solicitados)
                ->whereDate('fechaBac','>=', $finicio)
                ->whereDate('fechaBac','<=', $ffin)
                ->where('reportef.Vehiculo_idVehiculo',$vehiculo_,$vehiculo)
                ->where('reportef.Cuenta_idDato', $cuenta_,$cuenta)
                ->where('reportef.motivoRep', $tipo_,$tipo)
                ->where('backlog.estadoBac', $estado_, $estado)
                ->get();
            
            //obteniendo las fallas preventivas1
            /*$arr_preventivos = Ordent::select('idImplemento','nombreImp','nombreGru','idAsignacion','vencimientoAsi','fvencimientoAsi', 
                                              'estadoTra','idOrdent','fechaOrd','dato.valorDat as cuenta','idBacklog','ordent.Vehiculo_idVehiculo')
                ->join('trabajo','trabajo.Ordent_idOrdent','=','ordent.idOrdent')
                ->join('backlog','backlog.idBacklog','=','trabajo.Backlog_idBacklog')
                ->join('asignacion','asignacion.idAsignacion','=','backlog.Origen_idOrigen')
                ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
                ->join('grupo','grupo.idGrupo','=','implemento.Grupo_idGrupo')
                ->join('vehiculo','vehiculo.idVehiculo','=','ordent.Vehiculo_idVehiculo')
                ->join('dato','dato.idDato','=','ordent.Cuenta_idDato')
                ->where('asignacion.idAsignacion',$preventivos)
                ->where('backlog.tipoBac','PREVENTIVO')
                ->get(); 
            return $arr_preventivos;*/

            /*$arr_preventivos = Asignacion::select('idImplemento','nombreImp','nombreGru','idAsignacion','vencimientoAsi','fvencimientoAsi', 
                                                  'estadoTra','idOrdent','fechaOrd','dato.valorDat as cuenta','idBacklog','ordent.Vehiculo_idVehiculo', 
                                                  'vehiculo.placaVeh')
                ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
                ->join('grupo','grupo.idGrupo','=','implemento.Grupo_idGrupo')
                ->leftjoin('backlog','backlog.Origen_idOrigen','=','asignacion.idAsignacion')
                ->leftjoin('trabajo','trabajo.Backlog_idBacklog','=','backlog.idBacklog')
                ->leftjoin('ordent','ordent.idOrdent','=','trabajo.Ordent_idOrdent')
                ->leftjoin('dato','dato.idDato','=','ordent.Cuenta_idDato')
                ->leftjoin('vehiculo','vehiculo.idVehiculo','=','ordent.Vehiculo_idVehiculo')
                ->whereIn('idAsignacion',$preventivos)
                ->whereIn('backlog.tipoBac',['PREVENTIVO'])
                ->where('ordent.Cuenta_idDato', $cuenta_, $cuenta)
                ->where('trabajo.estadoTra', $estado_, $estado)
                ->get();*/


            $arr_preventivos_campanas = Asignacion::select('idImplemento','nombreImp','nombreGru','idAsignacion','vencimientoAsi','fvencimientoAsi','observacionAsi')
                ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
                ->join('grupo','grupo.idGrupo','=','implemento.Grupo_idGrupo')
                //->leftjoin('backlog','backlog.Origen_idOrigen','=','asignacion.idAsignacion')
                //->leftjoin('trabajo','trabajo.Backlog_idBacklog','=','backlog.idBacklog')
                //->leftjoin('ordent','ordent.idOrdent','=','trabajo.Ordent_idOrdent')
                //->leftjoin('dato','dato.idDato','=','ordent.Cuenta_idDato')
                //->leftjoin('vehiculo','vehiculo.idVehiculo','=','ordent.Vehiculo_idVehiculo')
                ->whereIn('idAsignacion',$preventivos)
                ->get();

            $temporal = $backlogs;

            foreach ( $arr_preventivos_campanas as $upreventivo_campana ) 
            {
                if ( $upreventivo_campana->nombreGru !== 'CAMPAÑAS' && isset( $backlogs["p".$upreventivo_campana->idAsignacion]))
                {
                    $backlog = [];
                    $backlog["vencimientoAsi"] = $upreventivo_campana->vencimientoAsi;
                    $backlog["fechaRep"] = $backlogs["p".$upreventivo_campana->idAsignacion]['fechaBac'];
                    $backlog["mantenimiento"] = $upreventivo_campana->nombreGru;
                    $backlog["tipo_preventivo"] = $upreventivo_campana->nombreImp;
                    $backlog["frecuencia"] =  number_format($upreventivo_campana->vencimientoAsi, 0, '', ' ')." km.";
                    $backlog["motivoRep"] = $backlogs["p".$upreventivo_campana->idAsignacion]['tipoBac'];
                    $backlog["fechaRep"] = $backlogs["p".$upreventivo_campana->idAsignacion]['fechaBac'];
                    $backlog["estadoFal"] = $backlogs["p".$upreventivo_campana->idAsignacion]['estadoBac'];

                    $idbacklogs[] = $backlogs["p".$upreventivo_campana->idAsignacion]['idBacklog'];

                    if ( $tipo !== 'TODOS' ) 
                    {
                        if ( $temporal["p".$upreventivo_campana->idAsignacion]) 
                        {
                            $ordenado["p".$upreventivo_campana->idAsignacion] = array_merge($backlogs["p".$upreventivo_campana->idAsignacion], $backlog);
                        }
                    } else { 
                        $ordenado["p".$upreventivo_campana->idAsignacion] = array_merge($backlogs["p".$upreventivo_campana->idAsignacion], $backlog);
                    } 
                    $backlog = [];
                } else if( $upreventivo_campana->nombreGru == 'CAMPAÑAS' ) {

                    $backlog["nombreImp"] = $upreventivo_campana->nombreImp;
                    $backlog["nombreGru"] = $upreventivo_campana->nombreGru;
                    $backlog["vencimientoAsi"] = $upreventivo_campana->vencimientoAsi;
                    $backlog["fechaRep"] = $backlogs["cc".$upreventivo_campana->idAsignacion]['fechaBac'];
                    $backlog["mantenimiento"] = $upreventivo_campana->nombreGru;
                    $backlog["tipo_preventivo"] = $upreventivo_campana->nombreImp;
                    $backlog["frecuencia"] =  number_format($upreventivo_campana->vencimientoAsi, 0, '', ' ')." km.";
                    $backlog["motivoRep"] = $backlogs["cc".$upreventivo_campana->idAsignacion]['tipoBac'];
                    $backlog["fechaRep"] = $backlogs["cc".$upreventivo_campana->idAsignacion]['fechaBac'];
                    $backlog["estadoFal"] = $backlogs["cc".$upreventivo_campana->idAsignacion]['estadoBac'];
                    $backlog["detalleFal"] = $upreventivo_campana->observacionAsi;

                    $idbacklogs[] = $backlogs["cc".$upreventivo_campana->idAsignacion]['idBacklog'];

                    if ( $tipo !== 'TODOS' ) 
                    {
                        if ( $temporal["cc".$upreventivo_campana->idAsignacion]) 
                        {
                            $ordenado["cc".$upreventivo_campana->idAsignacion] = array_merge($backlogs["cc".$upreventivo_campana->idAsignacion], $backlog);
                        }
                    } else { 
                        $ordenado["cc".$upreventivo_campana->idAsignacion] = array_merge($backlogs["cc".$upreventivo_campana->idAsignacion], $backlog);
                    } 
                } else { 
                    $idFallaC[] = $backlogs["cc".$upreventivo_campana->idAsignacion]['Origen_idOrigen'];                    
                }
            }

            //return $backlogs;
            //return $idFallaC;

            $arr_fallas_campana = Falla::select('idBacklog','idFalla','estadoFal','detalleFal','nombreCom','nombreApa','reportef.Vehiculo_idVehiculo','Acople_idVehiculo','fechaRep',
                                                'motivoRep','reportef.Cuenta_idDato','idReportef','estadofal','Origen_idOrigen')
                ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
                ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
                ->leftjoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
                ->join('backlog','backlog.Origen_idOrigen','=','falla.idFalla')
                ->whereIn('idFalla',$idFallaC)
                ->where('reportef.Vehiculo_idVehiculo',$vehiculo_,$vehiculo)
                ->where('backlog.tipoBac','CAMPAÑA')
                //->where('reportef.motivoRep', $tipo_,$tipo)
                ->get();
            //return $arr_fallas_campana;

            foreach( $arr_fallas_campana as $ucampanaf)
            {
                $fallac = [];
                $fallac["nombreApa"] = $ucampanaf->nombreApa;
                $fallac["nombreCom"] = $ucampanaf->nombreCom;
                $fallac["detalleFal"] = $ucampanaf->detalleFal;
                $fallac["motivoRep"] = $ucampanaf->motivoRep;
                $fallac["estadoFal"] = $ucampanaf->estadofal;
                $fallac["fechaRep"] = $ucampanaf->fechaRep;
                
                if ( isset( $backlogs["cc".$ucampanaf->Origen_idOrigen])) 
                {
                    $ordenado["cc".$ucampanaf->Origen_idOrigen] = array_merge($backlogs["cc".$ucampanaf->Origen_idOrigen], $fallac);
                    $idbacklogs[] = $ucampanaf->idBacklog;
                }

            }            

            $arr_ordenest = Ordent::select('estadoTra','idOrdent','fechaOrd','dato.valorDat as cuenta','idBacklog','Origen_idOrigen','ordent.Vehiculo_idVehiculo')
                ->leftjoin('trabajo','trabajo.Ordent_idOrdent','=','ordent.idOrdent')
                ->leftjoin('backlog','backlog.idBacklog','=','trabajo.Backlog_idBacklog')
                ->leftjoin('vehiculo','vehiculo.idVehiculo','=','ordent.Vehiculo_idVehiculo')
                ->leftjoin('dato','dato.idDato','=','ordent.Cuenta_idDato')
                ->whereIn('trabajo.Backlog_idBacklog', $idbacklogs)
                ->where('ordent.Cuenta_idDato', $cuenta_, $cuenta)
                ->where('trabajo.estadoTra', $estado_, $estado)
                ->get();

                foreach ( $arr_ordenest as $uordent ) 
                {
                    $ordent = []; 
                    $ordent["estadoFal"] = $uordent->estadoTra;
                    $ordent["fechaOrd"] = $uordent->fechaOrd;
                    $ordent["cuenta"] = $uordent->cuenta;
                    
                    if( isset( $ordenado["p".$uordent->Origen_idOrigen])) //agrego solo preventivos
                    {
                        $ordenado["p".$uordent->Origen_idOrigen] = array_merge($ordenado["p".$uordent->Origen_idOrigen], $ordent);
                    }
                    if( isset( $ordenado["cc".$uordent->Origen_idOrigen])) //agrego solo campañas
                    {
                        $ordenado["cc".$uordent->Origen_idOrigen] = array_merge($ordenado["cc".$uordent->Origen_idOrigen], $ordent);
                    }
                }
            //Fallas sin Ot
            foreach( $arr_fallasO as $ufalla )
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
                    
                    if ( $temporal["c".$ufalla->idFalla]) 
                    {
                        $ordenado["c".$ufalla->idFalla] = array_merge($temporal["c".$ufalla->idFalla], $backlog);
                    }
                } else { 
                    $ordenado["c".$ufalla->idFalla] = array_merge($backlogs["c".$ufalla->idFalla], $backlog);
                }
            }

            foreach($arr_fallas as $ufalla)
            {
                $backlog = [];
                $backlog["Ordent_idOrdent"] = $ufalla->idOrdent;
                $backlog["estadoTra"] = $ufalla->estadoTra;
                $backlog["cuenta"] = $ufalla->cuenta;
                $backlog["fechaRep"] = $ufalla->fechaRep;
                $backlog["nombreApa"] = $ufalla->nombreApa;
                $backlog["nombreCom"] = $ufalla->nombreCom;
                $backlog["detalleFal"] = $ufalla->detalleFal;
                $backlog["kilometraje"] = $ufalla->kilometrajeKil;
                $backlog["Reporte_idReporte"] = $ufalla->idReportef;
                $backlog["motivoRep"] = $ufalla->motivoRep;
                if ( $ufalla->estadoTra == 'DEPRECIADO' ) { $backlog["estadoFal"] = "REPROGRAMADO"; } else { $backlog["estadoFal"] = $ufalla->estadoTra; }
                $backlog["fechaOrd"] = $ufalla->fechaOrd;
                $backlog["estadoOrd"] = $ufalla->estadoOrd;

                
                if ( $tipo !== 'TODOS') 
                {
                    
                    if ( $temporal["c".$ufalla->idFalla]) 
                    {
                        //$backlogs["c".$ufalla->idFalla] = array_merge($temporal["c".$ufalla->idFalla], $backlog);
                        $ordenado["c".$ufalla->idFalla] = array_merge($temporal["c".$ufalla->idFalla], $backlog);
                        //$backlogs = $temporal;
                    }
                } else { 

                    //$backlogs["p".$upreventivo->idAsignacion] = array_merge($backlogs["p".$upreventivo->idAsignacion], $backlog);
                    //$backlogs["c".$ufalla->idFalla] = array_merge($backlogs["c".$ufalla->idFalla], $backlog);
                    $ordenado["c".$ufalla->idFalla] = array_merge($backlogs["c".$ufalla->idFalla], $backlog);
                }
            }

            $fallas = [];
            foreach($ordenado as $ubacklog)
            {
                $fallas[] = $ubacklog;
            }
            
            foreach( $fallas as $llave => $ubacklog )
            {
                $ffecha = strtotime($ubacklog['fechaRep']);
                $retraso = $tiempo - $ffecha;
                $retraso = $retraso/86400;
                $fallas[$llave]["retraso"] = $retraso;
            }
            //return $fallas;
            foreach ( $fallas as $ufallas ) 
            {
                //return $ufallas;
                //return $ufallas['cuenta'];
                $fila = []; 
                $fila["cuenta"] = ( isset( $ufallas['cuenta'] ) ) ? $ufallas['cuenta']: '';
                $fila["placa"] = ( isset( $ufallas['placaVeh'])) ? $ufallas['placaVeh']: '';
                $fila["marca"] = ( isset( $ufallas['marca'])) ? $ufallas['marca']: '';
                $fila["año"] = ( isset( $ufallas['fabricacionVeh'])) ? $ufallas['fabricacionVeh']: '';
                $fila["tipo_unidad"] = ( isset( $ufallas['tipoVeh'])) ? $ufallas['tipoVeh']: '';
                $fila["km"] = ( isset($ufallas['kilometraje'] )) ? $ufallas['kilometraje']: '';
                $fila["nro_rf"] = ( isset( $ufallas['Reporte_idReporte'])) ? $ufallas['Reporte_idReporte']: '';
                $fila["nro_ot"]  = ( isset( $ufallas['Ordent_idOrdent'])) ? $ufallas['Ordent_idOrdent']: '';
                $fila["tipo_reporte"] = ( isset( $ufallas['motivoRep'])) ? $ufallas['motivoRep']: '';
                //Mantenimiento Preventivo 
                $fila["mantenimiento"] = ( isset( $ufallas['mantenimiento'])) ? $ufallas['mantenimiento']: '';
                $fila["tipo_preventivo"] = ( isset( $ufallas['tipo_preventivo'])) ? $ufallas['tipo_preventivo']: '';
                $fila["frecuencia"] = ( isset( $ufallas['frecuencia'])) ? $ufallas['frecuencia']: '';
                //
                $fila["sistema"] = ( isset( $ufallas['nombreApa'])) ? $ufallas['nombreApa']: '';
                $fila["componente"] = ( isset( $ufallas['nombreCom'])) ? $ufallas['nombreCom']: '';
                $fila["detalle_falla"] = ( isset( $ufallas['detalleFal'])) ? $ufallas['detalleFal']: '';
                $fila["fecha_rf"] = ( isset( $ufallas['fechaRep'])) ? $ufallas['fechaRep']: '';
                $fila["fecha_ot"] = ( isset( $ufallas['fechaOrd'])) ? $ufallas['fechaOrd']: '';
                $fila["estado"] = ( isset( $ufallas['estadoFal'])) ? $ufallas['estadoFal']: '';
                $fila["retraso"] = ( isset( $ufallas['retraso'])) ? $ufallas['retraso']: '';
                $cuerpo[] = $fila;
            }

            $todos = []; 
            $todos["cuerpo"] = $cuerpo;
            //return $cuerpo;
            $export = new HistorialFallaExport($todos); 
            $nombre = 'HistorialFalla.xlsx';
            return Excel::download($export, $nombre);

        /* $cuerpo = [];
        $vehiculo_ = "="; 
        $mayor_que = ">=";
        $menor_que = "<=";
        if ( $vehiculo == "0" ) 
        {
            $vehiculo_ = "<>";
        }

        if ($estado == "SOLICITADO")
        {
            $estados[] = "REPROGRAMADO";
            $estados[] = "PENDIENTE";
        } else if ( $estado == "TODOS") { 
            $estados[] = "SOLICITADO"; 
            $estados[] = "INICIADO";
            $estados[] = "REVISADO";
            $estados[] = "TERMINADO";
            $estados[] = "REPROGRAMADO";
            $estados[] = "PENDIENTE";
            $estados[] = "TRABAJO REALIZADO";
        }

        $hoy = date("Y-m-d");
        $tiempo = strtotime($hoy);

        $arr_fallas = Falla::select( DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer ) AS trabajadorPer,
                                    falla.*,nombreCom,nombreApa,reportef.Vehiculo_idVehiculo,Acople_idVehiculo,Ordent_idOrdent,fechaRep, 
                                    placaVeh,marca.valorDat as marca,fabricacionVeh,tipo.valorDat as tipoVeh,kilometrajeKil as kilometraje,motivoRep, usuario.nombreUsu as usuario, cuenta.valorDat as cuenta'))
            ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->leftjoin('trabajo', 'trabajo.Falla_idFalla','=','falla.idFalla')
            ->leftJoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
            ->leftjoin('persona','persona.idPersona','=','reportef.Persona_idPersona')                        
            ->leftJoin('vehiculo','vehiculo.idVehiculo','=','reportef.Vehiculo_idVehiculo')
            ->leftjoin('dato as marca','marca.idDato','=','vehiculo.Marca_idDato')
            ->leftjoin('dato as tipo','tipo.idDato','=','vehiculo.Tipo_idDato')
            ->leftJoin('dato as cuenta','cuenta.idDato','=','reportef.Cuenta_idDato')
            ->leftjoin('kilometraje','kilometraje.idKilometraje','=','reportef.Kilometraje_idKilometraje')
            ->leftjoin('usuario','usuario.idUsuario','=','reportef.Usuario_idUsuario')
            ->whereIn('estadoFal', $estados)
            ->where('estadoFal', '<>', NULL)
            ->whereRaw('(reportef.Vehiculo_idVehiculo '.$vehiculo_." ".$vehiculo.' AND tipoFal != "ACOPLE") || (Acople_idVehiculo '.$vehiculo_." ".$vehiculo.' AND tipoFal != "VEHICULO")')  
                        //(fechaRep '.$mayor_que." ".$finicio.' AND fechaRep '.$menor_que." ".$ffin.')')
            ->whereDate('fechaRep','>=', $finicio)
            ->whereDate('fechaRep','<=', $ffin)
            //->whereRaw('(reportef.Vehiculo_idVehiculo = '.$this->vehiculo.' AND tipoFal != "ACOPLE") || (Acople_idVehiculo = '.$this->vehiculo.' AND tipoFal != "VEHICULO")')
            ->get();

        foreach ( $arr_fallas as $ufallas )
        {
            $fila = []; 
            $fila["cuenta"] = $ufallas->cuenta;
            $fila["placa"] = $ufallas->placaVeh;
            $fila["marca"] = $ufallas->marca;
            $fila["año"] = $ufallas->fabricacionVeh;
            $fila["tipo_unidad"] = $ufallas->tipoVeh;
            $fila["km"] = $ufallas->kilometraje;
            $fila["nro_rf"] = $ufallas->Reporte_idReporte;
            $fila["nro_ot"]  = $ufallas->Ordent_idOrdent;
            $fila["tipo_reporte"] = $ufallas->motivoRep;;
            $fila["sistema"] = $ufallas->nombreApa;
            $fila["componente"] = $ufallas->nombreCom;
            $fila["detalle_falla"] = $ufallas->detalleFal;
            $fila["fecha_rf"] = $ufallas->fechaRep;
            $fila["fecha_ot"] = $ufallas->fechaRep;
            $fila["estado"] = $ufallas->estadoFal;
            $fila["creado_por"] = $ufallas->usuario;
            $fila["reportado_por"] = $ufallas->trabajadorPer;
            $cuerpo[] = $fila;
        }
        $todos = []; 
        $todos["cuerpo"] = $cuerpo;
        return $cuerpo;
        $export = new HistorialFallaExport($todos); 
        $nombre = 'HistorialFalla.xlsx';
        return Excel::download($export, $nombre);*/

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
        }
        
        /* $falla = Falla::find($request->idFalla);
        $falla->activoFal = 0; 
        $falla->save();
        return $request->idFalla;*/
    }

    /*public function Pdf($reporte)
    {
        $obj_reportef = Reportef::select('reportef.*','vehiculo.placaVeh','remolque.placaVeh as acopleVeh',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'kilometraje.kilometrajeKil')
            ->join('vehiculo','vehiculo.idVehiculo','=','reportef.Vehiculo_idVehiculo')
            ->leftjoin('vehiculo as remolque','remolque.idVehiculo','=','reportef.Acople_idVehiculo')
            ->join('kilometraje','kilometraje.idKilometraje','=','reportef.Kilometraje_idKilometraje')
            ->join('persona','persona.idPersona','=','reportef.Persona_idPersona')
            ->where('idReportef', $reporte)
            ->first();

        $arr_fallas = Falla::select('falla.*')
            ->where('Reporte_idReporte', $reporte)
            ->get();

        $arr_componentes = Componente::select('componente.*','apartado.nombreApa')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->where('versionApa', $obj_reportef->versionRep)
            ->where('Reporte_idReporte', $obj_reportef->Reporte_idReporte)
            ->orderBy('apartado.ordenApa',"ASC")
            ->orderBy('componente.ordenCom',"ASC")
            ->get();

        $obj_reporte = Reporte::select('reporte.*')
            ->where('idReporte', $obj_reportef->Reporte_idReporte)
            ->get();

        $obj_firma = Firma::select('*')
            ->where('idFirma', $obj_reportef->Firma_idFirma)
            ->first();

        $obj_imagenes = Imagen::select('*')
            ->whereIn('idImagen', [$obj_reportef->Imagen_idImagen1, $obj_reportef->Imagen_idImagen2, $obj_reportef->Imagen_idImagen3, $obj_reportef->Imagen_idImagen4])
            ->get();

        $cabecera = [];
        $cuerpo = [];

        $cabecera["ope"] = $obj_reportef->trabajadorPer;
        $cabecera["oper"] = $obj_reportef->operacionRep;
        $cabecera["lic"] = "";
        $cabecera["fec"] = $obj_reportef->fechaRep;
        $cabecera["veh"] = $obj_reportef->placaVeh;
        $cabecera["aco"] = $obj_reportef->acopleVeh;
        $cabecera["km"] = $obj_reportef->kilometrajeKil;
        $cabecera["obs"] = $obj_reportef->observacionRep;


        $cuerpo = [];
        $apa_actual = 0;
        foreach ($arr_componentes as $ucomponente)
        {
            if($apa_actual != $ucomponente->Apartado_idApartado)
            {
                $fila = [];
                $fila["tip"] = "a";
                $fila["det"] = $ucomponente->nombreApa;

                $cuerpo["a".$ucomponente->Apartado_idApartado] = $fila;

                $apa_actual = $ucomponente->Apartado_idApartado;
            }

            $fila = [];
            $fila["tip"] = "c";
            $fila["cod"] = $ucomponente->codigoCom;
            $fila["det"] = $ucomponente->nombreCom;
            $fila["val"] = "";
            $fila["tip"] = "";

            $cuerpo["c".$ucomponente->idComponente] = $fila;
        }

        foreach ($arr_fallas as $ufalla)
        {
            $cuerpo["c".$ufalla->Componente_idComponente]["val"] = $ufalla->detalleFal;
            $cuerpo["c".$ufalla->Componente_idComponente]["tip"] = $ufalla->tipoFal;
        }

        //$filas = count($cuerpo);
        $division = 78;
        $contador = 0;
        $aindice = null;


        foreach($cuerpo as $indice => $ucuerpo)
        {
            if($ucuerpo["tip"] == "a")
            {
                $contador = $contador + 2;
                if($contador >= $division-1)
                {
                    $cuerpo[$aindice]["div"] = true;
                    break;
                }
            }
            else
            {
                $contador++;
                if($contador >= $division)
                {
                    $cuerpo[$aindice]["div"] = true;
                    break;
                }
            }
            $aindice = $indice;
        }

        $imagenes = [];
        foreach($obj_imagenes as $uimagen)
        {
            $imagenes[] = $uimagen->imagenIma;
        }

        $data["cabecera"] = $cabecera;
        $data["cuerpo"] = $cuerpo;
        $data["firma"] = $obj_firma->firmaFir;
        $data["imagenes"] = $imagenes;

        $pdf=PDF::loadView('Pdfs.Mantenimiento.Reportef', $data);

        $pdf->setPaper('A4', 'portrait');

        //$pdf->setOptions(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true]);
        //return $pdf->setOptions(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true])->stream();
        return $pdf->stream();

    }

    public function PdfOT($reporte)
    {


        $obj_reportef = Reportef::select('reportef.*','vehiculo.placaVeh','remolque.placaVeh as acopleVeh',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'kilometraje.kilometrajeKil')
            ->join('vehiculo','vehiculo.idVehiculo','=','reportef.Vehiculo_idVehiculo')
            ->leftjoin('vehiculo as remolque','remolque.idVehiculo','=','reportef.Acople_idVehiculo')
            ->join('kilometraje','kilometraje.idKilometraje','=','reportef.Kilometraje_idKilometraje')
            ->join('persona','persona.idPersona','=','reportef.Persona_idPersona')
            ->where('idReportef', $reporte)
            ->first();

        $arr_fallas = Falla::select('falla.*')
            ->where('Reporte_idReporte', $reporte)
            ->get();

        $arr_componentes = Componente::select('componente.*','apartado.nombreApa')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->where('versionApa', $obj_reportef->versionRep)
            ->where('Reporte_idReporte', $obj_reportef->Reporte_idReporte)
            ->orderBy('apartado.ordenApa',"ASC")
            ->orderBy('componente.ordenCom',"ASC")
            ->get();

        $obj_reporte = Reporte::select('reporte.*')
            ->where('idReporte', $obj_reportef->Reporte_idReporte)
            ->get();

        $obj_firma = Firma::select('*')
            ->where('idFirma', $obj_reportef->Firma_idFirma)
            ->first();

        $obj_imagenes = Imagen::select('*')
            ->whereIn('idImagen', [$obj_reportef->Imagen_idImagen1, $obj_reportef->Imagen_idImagen2, $obj_reportef->Imagen_idImagen3, $obj_reportef->Imagen_idImagen4])
            ->get();

        $cabecera = [];
        $cuerpo = [];

        $cabecera["ope"] = $obj_reportef->trabajadorPer;
        $cabecera["oper"] = $obj_reportef->operacionRep;
        $cabecera["lic"] = "";
        $cabecera["fec"] = $obj_reportef->fechaRep;
        $cabecera["veh"] = $obj_reportef->placaVeh;
        $cabecera["aco"] = $obj_reportef->acopleVeh;
        $cabecera["km"] = $obj_reportef->kilometrajeKil;
        $cabecera["obs"] = $obj_reportef->observacionRep;


        $cuerpo = [];
        $apa_actual = 0;
        foreach ($arr_componentes as $ucomponente)
        {
            if($apa_actual != $ucomponente->Apartado_idApartado)
            {
                $fila = [];
                $fila["tip"] = "a";
                $fila["det"] = $ucomponente->nombreApa;

                $cuerpo["a".$ucomponente->Apartado_idApartado] = $fila;

                $apa_actual = $ucomponente->Apartado_idApartado;
            }

            $fila = [];
            $fila["tip"] = "c";
            $fila["cod"] = $ucomponente->codigoCom;
            $fila["det"] = $ucomponente->nombreCom;
            $fila["val"] = "";
            $fila["tip"] = "";

            $cuerpo["c".$ucomponente->idComponente] = $fila;
        }

        foreach ($arr_fallas as $ufalla)
        {
            $cuerpo["c".$ufalla->Componente_idComponente]["val"] = $ufalla->detalleFal;
            $cuerpo["c".$ufalla->Componente_idComponente]["tip"] = $ufalla->tipoFal;
        }

        //$filas = count($cuerpo);
        $division = 78;
        $contador = 0;
        $aindice = null;


        foreach($cuerpo as $indice => $ucuerpo)
        {
            if($ucuerpo["tip"] == "a")
            {
                $contador = $contador + 2;
                if($contador >= $division-1)
                {
                    $cuerpo[$aindice]["div"] = true;
                    break;
                }
            }
            else
            {
                $contador++;
                if($contador >= $division)
                {
                    $cuerpo[$aindice]["div"] = true;
                    break;
                }
            }
            $aindice = $indice;
        }

        $imagenes = [];
        foreach($obj_imagenes as $uimagen)
        {
            $imagenes[] = $uimagen->imagenIma;
        }

        $data["cabecera"] = $cabecera;
        $data["cuerpo"] = $cuerpo;
        $data["firma"] = $obj_firma->firmaFir;
        $data["imagenes"] = $imagenes;

        $pdf=PDF::loadView('Pdfs.Mantenimiento.Trabajo', $data);

        $pdf->setPaper('A4', 'portrait');

        //$pdf->setOptions(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true]);
        //return $pdf->setOptions(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true])->stream();
        return $pdf->stream();


    }


    public function Verificar($reportef)
    {
        $obj_reportef = Reportef::select('reportef.*','vehiculo.placaVeh','remolque.placaVeh as acopleVeh',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'kilometraje.kilometrajeKil')
            ->join('vehiculo','vehiculo.idVehiculo','=','reportef.Vehiculo_idVehiculo')
            ->leftjoin('vehiculo as remolque','remolque.idVehiculo','=','reportef.Acople_idVehiculo')
            ->join('kilometraje','kilometraje.idKilometraje','=','reportef.Kilometraje_idKilometraje')
            ->join('persona','persona.idPersona','=','reportef.Persona_idPersona')
            ->where('idReportef', $reportef)
            ->first();

        $arr_fallas = Falla::select('falla.*')
            ->where('Reporte_idReporte', $reportef)
            ->get();

        $arr_componentes = Componente::select('componente.*','apartado.nombreApa')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->where('versionApa', $obj_reportef->versionRep)
            ->where('Reporte_idReporte', $obj_reportef->Reporte_idReporte)
            ->orderBy('apartado.ordenApa',"ASC")
            ->orderBy('componente.ordenCom',"ASC")
            ->get();

        $obj_reporte = Reporte::select('reporte.*')
            ->where('idReporte', $obj_reportef->Reporte_idReporte)
            ->get();

        $cabecera = [];
        $cuerpo = [];

        $cabecera["ope"] = $obj_reportef->trabajadorPer;
        $cabecera["oper"] = $obj_reportef->operacionRep;
        $cabecera["lic"] = "";
        $cabecera["fec"] = $obj_reportef->fechaRep;
        $cabecera["veh"] = $obj_reportef->placaVeh;
        $cabecera["aco"] = $obj_reportef->acopleVeh;
        $cabecera["km"] = $obj_reportef->kilometrajeKil;
        $cabecera["obs"] = $obj_reportef->observacionRep;
        $cabecera["id"] = $obj_reportef->idReportef;

        $cuerpo = [];
        $apa_actual = 0;
        $cuerpo = [];

        foreach ($arr_componentes as $ucomponente)
        {
            if($apa_actual != $ucomponente->Apartado_idApartado)
            {
                $fila = [];
                $fila["det"] = $ucomponente->nombreApa;
                $fila["com"] = [];
                $cuerpo2["a".$ucomponente->Apartado_idApartado] = $fila;

                $apa_actual = $ucomponente->Apartado_idApartado;
            }
            $fila = [];
            //$fila["tip"] = "c";
            $fila["cod"] = $ucomponente->codigoCom;
            $fila["det"] = $ucomponente->nombreCom;
            $fila["apa"] = $ucomponente->Apartado_idApartado;
            $fila["val"] = "";
            $fila["tip"] = "";
            $fila["lev"] = false;
            $fila["id"] = 0;

            $cuerpo["c".$ucomponente->idComponente] = $fila;
        }

        foreach ($arr_fallas as $ufalla)
        {
            $cuerpo["c".$ufalla->Componente_idComponente]["val"] = $ufalla->detalleFal;
            $cuerpo["c".$ufalla->Componente_idComponente]["tip"] = $ufalla->tipoFal;
            $cuerpo["c".$ufalla->Componente_idComponente]["lev"] = $ufalla->levantadoFal;
            $cuerpo["c".$ufalla->Componente_idComponente]["id"] = $ufalla->idFalla;
        }

        foreach($cuerpo as $ucuerpo)
        {
            if($ucuerpo["val"] != "")
                $cuerpo2["a".$ucuerpo["apa"]]["com"][] = $ucuerpo;
        }

        $data["cabecera"] = $cabecera;
        $data["cuerpo"] = $cuerpo2;
       
        return $data;
    }


    public function Validar(Request $request)
    {
        $jreporte = json_decode($request->reportef);

        $obj_reportef = (object)[];
        $obj_reportef->estadoRep = "TERMINADO";
        
        Reportef::where('idReportef', $jreporte->cabecera->id)->update((array)$obj_reportef);


        foreach ($jreporte->cuerpo as $ucomponente)
        {
            foreach($ucomponente->com as $ufalla)
            {
                $obj_falla = (object)[];
                $obj_falla->levantadoFal = $ufalla->lev;
                
                Falla::where('idFalla', $ufalla->id)->update((array)$obj_falla);
            }
        }
        return "";
    }*/

}
