<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
/*use App\Dato;
use DB;*/
use DB;
use App\Ordent;
use App\Trabajo;
use App\Backlog;
use App\Falla;
use App\Asignacion;
use App\Distribucion;
use App\Reportef;
use App\Componente;
use App\Reporte;
use App\Kilometraje;
use App\Traits\KilometrajeTrait;

use App\Http\Controllers\Controller;
use PDF;
use Dompdf\Dompdf;
use Dompdf\Options;


use Maatwebsite\Excel\Facades\Excel;
use App\Exports\OtExport;

class OrdentController extends Controller
{
    use KilometrajeTrait;
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/
    public function ListarAbierto($vehiculo)//Ricardo
    {
        //Listar ordenes de trabajo abiertas 
        $vehiculo_ = '=';

        if ( $vehiculo == '0' ) { $vehiculo_ = '<>'; }

        //$arr_ordent = Ordent::select('ordent.*','cuenta.valorDat as cuenta','taller.valorDat as taller','vehiculo.placaVeh','vehiculo.grupoVeh','vehiculo.idVehiculo','nombreUsu','cuenta.idDato', 
        $arr_ordent = Ordent::select('idOrdent','fechaOrd','ordent.Cuenta_idDato','Taller_idDato','mantenimientoOrd','Vehiculo_idVehiculo','finicioOrd','Kilometraje_idKilometraje','estadoOrd','Usuario_idUsuario',
                                     'cuenta.valorDat as cuenta','taller.valorDat as taller','vehiculo.placaVeh','vehiculo.grupoVeh','vehiculo.idVehiculo','nombreUsu','cuenta.idDato', 
                             DB::raw('DATE_FORMAT(ffinOrd,"%h:%i:%s") as hora'), DB::raw('DATE_FORMAT(ffinOrd, "%Y-%m-%d") as ffinOrd'))
            ->join('vehiculo','vehiculo.idVehiculo','ordent.Vehiculo_idVehiculo')
            ->leftjoin('dato as cuenta','cuenta.idDato','ordent.Cuenta_idDato')
            ->leftjoin('dato as taller','taller.idDato','ordent.Taller_idDato')
            ->leftJoin('usuario','ordent.Usuario_idUsuario','usuario.idUsuario')
            /*->whereDate('fechaOrd','>=', $finicio)
            ->whereDate('fechaOrd','<=', $ffin)*/
            //->where('ordent.Cuenta_idDato', $cuenta_ , $cuenta)
            ->where('ordent.Vehiculo_idVehiculo', $vehiculo_ , $vehiculo)
            //->where('ordent.mantenimientoOrd', $mantt_ , $mantt)
            ->whereIn('estadoOrd', ["INICIADO","EN PROCESO"])
            ->orderBy('fechaOrd','ASC')
            ->get();
         
        return $arr_ordent;
    }
    public function ListarOT($cuenta, $vehiculo, $finicio, $ffin, $estado, $mantt)
    {

        $cuenta_ = '='; 
        $vehiculo_ = '=';
        $estado_ = '=';
        $mantt_ = '=';

        if ( $cuenta == '0' ) { $cuenta_ = '<>'; }
        if ( $vehiculo == '0' ) { $vehiculo_ = '<>'; }
        if ( $estado == '0') { $estado_ = '<>'; }
        if ( $mantt == '0') { $mantt_ = '<>'; }

        /*$arr_ordent = Ordent::select('ordent.*','cuenta.valorDat as cuenta','taller.valorDat as taller','vehiculo.placaVeh',
                                     'vehiculo.idVehiculo','nombreUsu','cuenta.idDato', 
                                    DB::raw('DATE_FORMAT(ffinOrd,"%h:%i:%s") as hora'))
            ->join('vehiculo','vehiculo.idVehiculo','ordent.Vehiculo_idVehiculo')
            ->leftjoin('dato as cuenta','cuenta.idDato','ordent.Cuenta_idDato')
            ->leftjoin('dato as taller','taller.idDato','ordent.Taller_idDato')
            ->leftJoin('usuario','ordent.Usuario_idUsuario','usuario.idUsuario')
            ->whereDate('fechaOrd','>=', $finicio)
            ->whereDate('fechaOrd','<=', $ffin)
            ->where('ordent.Cuenta_idDato', $cuenta_ , $cuenta)
            ->where('ordent.Vehiculo_idVehiculo', $vehiculo_ , $vehiculo)
            ->where('ordent.mantenimientoOrd', $mantt_ , $mantt)
            ->where('estadoOrd', $estado_, $estado)
            ->get();*/

        $historial = Ordent::select('idOrdent','fechaOrd','estadoOrd','mantenimientoOrd','cuenta.valorDat as cuenta','taller.valorDat as taller','vehiculo.placaVeh',
                                     'nombreUsu')
            ->join('vehiculo','vehiculo.idVehiculo','ordent.Vehiculo_idVehiculo')
            ->leftjoin('dato as cuenta','cuenta.idDato','ordent.Cuenta_idDato')
            ->leftjoin('dato as taller','taller.idDato','ordent.Taller_idDato')
            ->leftJoin('usuario','ordent.Usuario_idUsuario','usuario.idUsuario')
            ->whereDate('fechaOrd','>=', $finicio)
            ->whereDate('fechaOrd','<=', $ffin)
            ->where('ordent.Cuenta_idDato', $cuenta_ , $cuenta)
            ->where('ordent.Vehiculo_idVehiculo', $vehiculo_ , $vehiculo)
            ->where('ordent.mantenimientoOrd', $mantt_ , $mantt)
            ->where('estadoOrd', $estado_, $estado)
            ->get();

        //return $historial; 

        /*$arr_backlog = Ordent::select('idOrdent','fechaOrd','finicioOrd','ffinOrd','estadoOrd','cuenta.valorDat as cuenta','taller.valorDat as taller','vehiculo.placaVeh', 
            'tipoBac as mantenimientoOrd','Origen_idOrigen','nombreUsu')
            ->join('trabajo','trabajo.Ordent_idOrdent','=','ordent.idOrdent')
            ->join('backlog','backlog.idBacklog','=','trabajo.Backlog_idBacklog')
            ->join('vehiculo','vehiculo.idVehiculo','backlog.Vehiculo_idVehiculo')
            ->join('dato as cuenta','cuenta.idDato','ordent.Cuenta_idDato')
            ->join('dato as taller','taller.idDato','ordent.Taller_idDato')
            ->leftJoin('usuario','ordent.Usuario_idUsuario','usuario.idUsuario')
            ->where('mantenimientoOrd', null)
            ->whereDate('fechaOrd','>=', $finicio)
            ->whereDate('fechaOrd','<=', $ffin)
            ->where('ordent.Cuenta_idDato', $cuenta_ , $cuenta)
            ->where('ordent.Vehiculo_idVehiculo', $vehiculo_ , $vehiculo)
            ->where('estadoOrd', $estado_, $estado)
            ->where('backlog.tipoBac', $mantt_, $mantt)
            ->orderBy('idOrdent','ASC')
            ->get();*/

        $arr_backlog = Ordent::select('idOrdent','fechaOrd','finicioOrd','ffinOrd','estadoOrd','cuenta.valorDat as cuenta','taller.valorDat as taller','vehiculo.placaVeh', 'vehiculo.idVehiculo','nombreUsu',
                                      'cuenta.idDato', DB::raw('DATE_FORMAT(ffinOrd,"%h:%i:%s") as hora'))
            ->join('vehiculo','vehiculo.idVehiculo','ordent.Vehiculo_idVehiculo')
            ->leftjoin('dato as cuenta','cuenta.idDato','ordent.Cuenta_idDato')
            ->leftjoin('dato as taller','taller.idDato','ordent.Taller_idDato')
            ->leftJoin('usuario','ordent.Usuario_idUsuario','usuario.idUsuario')
            ->whereDate('fechaOrd','>=', $finicio)
            ->whereDate('fechaOrd','<=', $ffin)
            ->where('ordent.Cuenta_idDato', $cuenta_ , $cuenta)
            ->where('ordent.Vehiculo_idVehiculo', $vehiculo_ , $vehiculo)
            ->where('estadoOrd', $estado_, $estado)
            ->get();

        $ordenes = [];

        foreach ( $historial as $uhistorial )
        {
            $ordenes[] = $uhistorial;
        }

        foreach ( $arr_backlog as $ubacklog )
        {
            $ordenes[] = $ubacklog;
        }
        return $ordenes;
    }
    public function Listar()
    {
        /*$arr_convoys = Convoy::select('convoy.*','origenRut','destinoRut','tramoRut','cargaRut','tipoRut','nombreExt')
            ->join('ruta','ruta.idRuta','=','servicio.Ruta_idRuta')
            ->join('externo','externo.idExterno','=','servicio.Cliente_idExterno')
            ->get();
        return $arr_servicios;*/
    }

    public function Guardar(Request $request)
    {
        $ordent = json_decode($request->ordent);

        $obj_ordent = new Ordent();
        $obj_ordent->fechaOrd = $ordent->fecha." ".$ordent->hora;
        $obj_ordent->Vehiculo_idVehiculo = $ordent->idVehiculo;
        $obj_ordent->Cuenta_idDato = $ordent->cuenta;
        $obj_ordent->Taller_idDato = $ordent->taller->idDato;
        //$obj_ordent->mantenimientoOrd = $ordent->mantenimiento;
        $obj_ordent->estadoOrd = "INICIADO";
        $obj_ordent->Usuario_idUsuario = $ordent->usuario;
        $obj_ordent->save();

        foreach($ordent->backlogs as $ubacklog)
        {
            $actualizo = DB::table('backlog')
                    ->where('idBacklog', $ubacklog->idBacklog)
                    ->whereIn('estadoBac', ["SOLICITADO","PENDIENTE","REPROGRAMADO"])
                    ->update(['estadoBac' => "INICIADO",]);

            if($actualizo > 0)
            {
                $obj_trabajo = new Trabajo();
                //$obj_trabajo->Falla_idFalla = $ufalla->idFalla;
                $obj_trabajo->Ordent_idOrdent = $obj_ordent->idOrdent;
                $obj_trabajo->estadoTra = 'INICIADO';
                $obj_trabajo->fechaTra = date("Y-m-d");
                $obj_trabajo->Backlog_idBacklog = $ubacklog->idBacklog;
                $obj_trabajo->save();
            }
        }
        
        return $obj_ordent->idOrdent;
    }

    public function CerrarOT(Request $request)
    {
        $idKilometraje = null;
        $ordent = json_decode($request->ordent); 
        $preventivos = json_decode($request->preventivos);
        $correctivos = json_decode($request->correctivos);
        $pendientes = json_decode($request->pendientes);
        //$fecha = explode(" ",$ordent->ffinOrd);

        if ( $ordent->kilometrajeKil !== "") 
        {
            //Guardar Kilometraje               
            $obj_kilometraje = new Kilometraje(); 
            $obj_kilometraje->kilometrajeKil = $ordent->kilometrajeKil;
            $obj_kilometraje->fechaKil = now();
            $obj_kilometraje->Vehiculo_idVehiculo = $ordent->idVehiculo;
            $obj_kilometraje->tipoKil = "REPARACION";
            $obj_kilometraje->activoKil = "1";
            $obj_kilometraje->save();
            $idKilometraje = $obj_kilometraje->idKilometraje;
            $this->ValidarUltimoKm( $obj_kilometraje->Vehiculo_idVehiculo );
        }
        
        //verificar que las ordenes
        $actualizo = DB::table('ordent')
            ->where('idOrdent', $ordent->idOrdent)
            ->whereIn('estadoOrd', ["INICIADO","EN PROCESO"])
            ->update(['estadoOrd' => $ordent->estadoOrd, //TERMINADO O ANULADO
                      'ffinOrd' => $ordent->ffinOrd.' '.$ordent->hora, 
                      'Kilometraje_idKilometraje' => $idKilometraje, 
                      'Terminado_idUsuario' => $ordent->idUsuario]);

        if($actualizo > 0 && $ordent->estadoOrd == "TERMINADO")
        {
            foreach($correctivos as $ucorrectivo)
            {
                if($ucorrectivo->estadoTra == "TERMINADO")//cerrando los trabajos,backlog y fallas
                {
                    $actualizo2 = DB::table('trabajo')
                        ->where('idTrabajo', $ucorrectivo->idTrabajo)
                        ->whereIn('estadoTra', ["INICIADO","PROCESO"])
                        ->update(['estadoTra' => "TERMINADO"]);

                    $actualizo3 = DB::table('backlog')
                            ->where('idBacklog', $ucorrectivo->idBacklog)
                            ->whereIn('estadoBac', ["SOLICITADO","PENDIENTE","REPROGRAMADO"])
                            ->update(['estadoBac' => "CERRADO"]);

                    $actualizo4 = DB::table('falla')
                            ->where('idFalla', $ucorrectivo->Origen_idOrigen)
                            ->update(['estadoFal' => "TERMINADO"]);
                }
                elseif($ucorrectivo->estadoTra == "REPROGRAMADO")//cerrando trabajo backlog y reprogramando 
                {
                    $actualizo2 = DB::table('trabajo')
                        ->where('idTrabajo', $ucorrectivo->idTrabajo)
                        ->whereIn('estadoTra', ["INICIADO","PROCESO"])
                        ->update(['estadoTra' => "DEPRECIADO"]);

                    $actualizo3 = DB::table('backlog')
                            ->where('idBacklog', $ucorrectivo->idBacklog)
                            ->whereIn('estadoBac', ["SOLICITADO","PENDIENTE","REPROGRAMADO"])
                            ->update(['estadoBac' => "DEPRECIADO"]);

                    $obj_backlog = new Backlog();//NO SE CIERRA LA FALLA PORQUE SE HA REPROGRAMADO
                    $obj_backlog->tipoBac = "CORRECTIVO";
                    $obj_backlog->fechaBac = $ucorrectivo->fechaBac;
                    $obj_backlog->estadoBac = "REPROGRAMADO";
                    $obj_backlog->Origen_idOrigen = $ucorrectivo->Origen_idOrigen;
                    $obj_backlog->Vehiculo_idVehiculo = $ordent->idVehiculo;
                    $obj_backlog->save();
                }
            }

            foreach($preventivos as $upreventivo)
            {
                if($upreventivo->estadoTra == "TERMINADO")//cerrando trabajo backlog y asignacion, reasignando el mantenimiento
                {
                    $actualizo2 = DB::table('trabajo')
                        ->where('idTrabajo', $upreventivo->idTrabajo)
                        ->whereIn('estadoTra', ["INICIADO","PROCESO"])
                        ->update(['estadoTra' => "TERMINADO"]);

                    $actualizo3 = DB::table('backlog')
                            ->where('idBacklog', $upreventivo->idBacklog)
                            ->whereIn('estadoBac', ["SOLICITADO","PENDIENTE","REPROGRAMADO"])
                            ->update(['estadoBac' => "CERRADO"]);

                    //cerrando la asignacion y volviendo a programar la siguiente
                    $obj_asignacion = Asignacion::select('vencimientoAsi','fvencimientoAsi','Entidad_idEntidad')//obteniendo las asignaciones de origen
                        ->where('idAsignacion', $upreventivo->Origen_idOrigen)
                        ->first();

                    //obteniendo las asignaciones que coincidan para hacer una actualizacion masiva
                    $arr_asignaciones = [];
                    if($obj_asignacion->vencimientoAsi != "" && $obj_asignacion->vencimientoAsi != null)
                    {
                        $arr_asignaciones = Asignacion::select('*')//jalando todos los que vencen el mismo kilometraje
                            ->where('vencimientoAsi', $obj_asignacion->vencimientoAsi)
                            ->where('Entidad_idEntidad', $obj_asignacion->Entidad_idEntidad)
                            ->where('estadoAsi','VIGENTE')
                            ->get();    
                    }
                    elseif($obj_asignacion->fvencimientoAsi != "" && $obj_asignacion->fvencimientoAsi != null)
                    {
                        $arr_asignaciones = Asignacion::select('*')//jalando todos los que vencen la misma fecha
                            ->where('fvencimientoAsi', $obj_asignacion->fvencimientoAsi)
                            ->where('Entidad_idEntidad', $obj_asignacion->Entidad_idEntidad)
                            ->where('estadoAsi','VIGENTE')
                            ->get();    
                    }

                    //organizando las asignacionesp ara ser encontradas segun la plantilla a la que pertenezcan
                    $ids = [];
                    $asignaciones = [];
                    foreach($arr_asignaciones as $uasignacion)
                    {
                        $ids[] = $uasignacion->Implemento_idImplemento;
                        $asignaciones["i".$uasignacion->Implemento_idImplemento] = $uasignacion;
                    }

                    $arr_distribuciones = Distribucion::select('*')
                        ->whereIn('Implemento_idImplemento', $ids)
                        ->where('estadoDis', "ACTIVO")
                        ->orderBy('renovacionDis','ASC')
                        ->get();
                    //cerrando las asignaciones que coincidan con la plantilla y generando la nueva asignaicon
                    foreach($arr_distribuciones as $udistribucion)
                    {
                        $asignacion = $asignaciones["i".$udistribucion->Implemento_idImplemento];

                        $actualizo4 = DB::table('asignacion')
                            ->where('idAsignacion', $asignacion->idAsignacion)
                            ->where('estadoAsi', "VIGENTE")
                            ->update(['estadoAsi' => "CADUCO"]);

                        if($actualizo4 > 0)//reemplaza el preventivo vencido por el nuevo preventivo
                        {
                            $obj_asignacion = new Asignacion();
                            //$obj_asignacion->nroAsi = $asignacion->nroAsi;
                            $obj_asignacion->femisionAsi = date("Y-m-d");
                            
                            if($asignacion->vencimientoAsi != "" && $asignacion->vencimientoAsi != null)
                            {
                                $vencimiento = $asignacion->vencimientoAsi + $udistribucion->renovacionDis;    
                                $obj_asignacion->vencimientoAsi = $vencimiento;
                            }
                            elseif($asignacion->fvencimientoAsi != "" && $asignacion->fvencimientoAsi != null)
                            {
                                $fvencimiento = date("Y-m-d",strtotime($asignacion->fvencimientoAsi."+ ".$udistribucion->renovacionDis." month"));
                                $obj_asignacion->fvencimientoAsi = $fvencimiento; 
                            }
                            
                            $obj_asignacion->Entidad_idEntidad = $asignacion->Entidad_idEntidad;
                            $obj_asignacion->montoAsi = ($asignacion->montoAsi == "") ? 0 : $asignacion->montoAsi;
                            $obj_asignacion->situacionAsi = "NINGUNA";
                            $obj_asignacion->estadoAsi = "VIGENTE";
                            $obj_asignacion->Implemento_idImplemento = $asignacion->Implemento_idImplemento;
                            $obj_asignacion->Medida_idDato = $asignacion->Medida_idDato;
                            $obj_asignacion->save();
                        }
                    }

                }
                elseif($upreventivo->estadoTra == "REPROGRAMADO")//cerrando trabajo,backlog y reprogramando
                {
                    $actualizo2 = DB::table('trabajo')
                        ->where('idTrabajo', $upreventivo->idTrabajo)
                        ->whereIn('estadoTra', ["INICIADO","PROCESO"])
                        ->update(['estadoTra' => "DEPRECIADO"]);

                    $actualizo3 = DB::table('backlog')
                            ->where('Backlog', $upreventivo->idBacklog)
                            ->whereIn('estadoBac', ["SOLICITADO","PENDIENTE","REPROGRAMADO"])
                            ->update(['estadoBac' => "DEPRECIADO"]);

                    $obj_backlog = new Backlog();//NO SE CIERRA LA ASIGNACION PORQUE SE HA REPROGRAMADO
                    $obj_backlog->tipoBac = "PREVENTIVO";
                    $obj_backlog->fechaBac = $upreventivo->fechaBac;
                    $obj_backlog->estadoBac = "REPROGRAMADO";
                    $obj_backlog->Origen_idOrigen = $upreventivo->Origen_idOrigen;
                    $obj_backlog->Vehiculo_idVehiculo = $ordent->idVehiculo;
                    $obj_backlog->save();
                }
            }

            $obj_reportef = new Reportef();

            if(count($pendientes) > 0)
            {
                $obj_reportef->fechaRep = date("Y-m-d"); 
                $obj_reportef->Vehiculo_idVehiculo = $ordent->idVehiculo;
                $obj_reportef->Cuenta_idDato = $ordent->idDato;
                $obj_reportef->estadoRep = "SOLICITADO";
                $obj_reportef->tipoRep = "CORRECTIVO";
                $obj_reportef->save();    
            }
            
            foreach($pendientes as $upendiente)
            {
                $obj_falla = new Falla(); 
                $obj_falla->Componente_idComponente = $upendiente->id;
                $obj_falla->detalleFal = $upendiente->falla;
                $obj_falla->Reporte_idReporte = $obj_reportef->idReportef;
                $obj_falla->tipoFal = "VEHICULO";
                $obj_falla->estadoFal = "PENDIENTE";
                $obj_falla->save();

                $obj_backlog = new Backlog();
                $obj_backlog->tipoBac = "CORRECTIVO";
                $obj_backlog->fechaBac = date("Y-m-d");
                $obj_backlog->estadoBac = "PENDIENTE";
                $obj_backlog->Origen_idOrigen = $obj_falla->idFalla;
                $obj_backlog->Vehiculo_idVehiculo = $ordent->idVehiculo;
                $obj_backlog->save();
            }
        }
        return "";
    }



    public function Actualizar(Request $request)
    {
        //$asignacion = [];
        $ordent = json_decode($request->ordent); 
        $falla = json_decode($request->falla);
        $pendientes = json_decode($request->pendientes);
        $fecha = ( explode(" ",$ordent->ffinOrd)); 

        $up_ordent = Ordent::select('idOrdent.*')
        ->where('idOrdent', $ordent->idOrdent)
        ->update(['estadoOrd' => $ordent->estadoOrd, 
                  'ffinOrd' => $fecha[0].' '.$ordent->hora,
                  'mantenimientoOrd' => $ordent->mantenimientoOrd]);

        if ( $ordent->mantenimientoOrd == 'CORRECTIVO' ) 
        {
            $Reporte_idReporte = "";
            $Ordent_idOrdent = "";
            //Modificacion de fallas
            foreach ( $falla as $ufalla )
            {
                $estadoAnulado = "";
                $Reporte_idReporte = $ufalla->Reporte_idReporte;
                $Ordent_idOrdent = $ufalla->Ordent_idOrdent;
                if ($ufalla->estadoTra == 'REPROGRAMADO') 
                {
                    $estadoAnulado = "ANULADO";
                } else { 
                    $estadoAnulado = $ufalla->estadoTra;
                }
    
                $up_trabajo = Trabajo::select('trabajo.*')
                    //->where('Ordent_idOrdent', $ordent->idOrdent)
                    ->where('idTrabajo', $ufalla->idTrabajo)
                    ->where('Falla_idFalla', $ufalla->idFalla)
                    ->update(['estadoTra' => $estadoAnulado,
                              'actividadTra' => $ufalla->actividadTra, 
                              'Persona_idPersona' => $ufalla->Persona_idPersona ]);
    
                if( $ufalla->estadoTra !== 'PENDIENTE')
                {
                    $up_falla = Falla::select('falla.*')
                    ->where('idFalla', $ufalla->idFalla)
                    ->update(['estadoFal' => $ufalla->estadoTra, 
                              'detalleFal' => $ufalla->detalleFal]);
                }
            }
            // Guardo todos los Pendientes y/o trabajos realizados
            if ( isset( $pendientes ) )
            {
                foreach ( $pendientes as $upendientes )
                {
                    if ( $Ordent_idOrdent == "") 
                    {
                        $Ordent_idOrdent = $ordent->idOrdent;
                    }
                    //Ingresar datos a reportef para trabajos realizados y/o pendientes
                    if ( $Reporte_idReporte == "") 
                    {
                        $obj_reportef = new Reportef(); 
                        $obj_reportef->fechaRep = now(); 
                        $obj_reportef->Vehiculo_idVehiculo = $ordent->idVehiculo;
                        $obj_reportef->Cuenta_idDato = $ordent->idDato;
                        $obj_reportef->estadoRep = "SOLICITADO";
                        $obj_reportef->tipoRep = "CORRECTIVO";
                        $obj_reportef->save();
                        $Reporte_idReporte = $obj_reportef->idReportef;
                    }
    
                    if ( $upendientes->estadoTra == 'PENDIENTE')
                    {
                        $obj_falla = new Falla(); 
                        $obj_falla->Componente_idComponente = $upendientes->id; 
                        $obj_falla->detalleFal = $upendientes->falla;
                        $obj_falla->Reporte_idReporte = $Reporte_idReporte;
                        $obj_falla->tipoFal = "VEHICULO";
                        $obj_falla->estadoFal = "PENDIENTE";
                        $obj_falla->save();
                        
                        $obj_trabajo = new Trabajo(); 
                        $obj_trabajo->Falla_idFalla = $obj_falla->idFalla; 
                        $obj_trabajo->Ordent_idOrdent = $Ordent_idOrdent;
                        $obj_trabajo->fechaTra = $fecha[0]; 
                        $obj_trabajo->estadoTra = $upendientes->estadoTra;
                        $obj_trabajo->save();
                    }
                }
            }
        } else if ( $ordent->mantenimientoOrd == 'PREVENTIVO' ) { 
            $Reporte_idReporte = ""; 
            $Ordent_idOrdent = "";
            //Cambiando estado de Falla 
            foreach( $falla as $ufalla )
            {
                /*$obj_asignacion = Asignacion::select('femisionAsi','fvencimientoAsi','Entidad_idEntidad','montoAsi','situacionAsi', 
                                             'estadoAsi','Implemento_idImplemento','Medida_idDato','vencimientoAsi')
                    ->where('idAsignacion', $ufalla->idAsignacion)
                    ->first();

                $asignacion = new Asignacion(); 
                $asignacion->femisionAsi = $obj_asignacion->femisionAsi; 
                $asignacion->fvencimientoAsi = $obj_asignacion->fvencimientoAsi; 
                $asignacion->Entidad_idEntidad = $obj_asignacion->Entidad_idEntidad; 
                $asignacion->montoAsi = $obj_asignacion->montoAsi; 
                $asignacion->situacionAsi = $obj_asignacion->situacionAsi; 
                $asignacion->estadoAsi = $obj_asignacion->estadoAsi;
                $asignacion->Implemento_idImplemento = 89; 
                $asignacion->Medida_idDato = $obj_asignacion->Medida_idDato; 
                $asignacion->vencimientoAsi = $obj_asignacion->vencimientoAsi;
                $asignacion->save();*/

                //$asignacion[] = $obj_asignacion;
                $up_trabajo = Trabajo::select('trabajo.*')
                    ->where('idTrabajo', $ufalla->idTrabajo)
                    ->update(['estadoTra' => $ufalla->estadoTra]);

                
                /*$up_asignacion = Asignacion::select('asignacion.*')
                    ->where('idAsignacion', $ufalla->idAsignacion )*/
            }

            /*$obj_asignacion = new Asignacion(); 
            $obj_asignacion->femisionAsi = date("Y-m-d");
            $obj_asignacion->situacionAsi = "NINGUNA"; 
            $obj_asignacion->estadoAsi = "VIGENTE";
            $obj_asignacion->save(); */
        }
        //return $asignacion;

    }

    public function PDF($ordent)
    {
        $obj_ordent = Ordent::select('ordent.*','vehiculo.placaVeh','tmarca.valorDat as marca','tmodelo.valorDat as modelo','ttipo.valorDat as tipo','tcuenta.valorDat as cuenta','ttipo.valorDat as tipo','ttaller.valorDat as taller')
        ->join('vehiculo','vehiculo.idVehiculo','=','ordent.Vehiculo_idVehiculo')
        ->leftjoin('dato as tmarca','tmarca.idDato','=','vehiculo.Marca_idDato')
        ->leftjoin('dato as tmodelo','tmodelo.idDato','=','vehiculo.Modelo_idDato')
        ->leftjoin('dato as ttipo','ttipo.idDato','=','vehiculo.Tipo_idDato')
        ->leftjoin('dato as tcuenta','tcuenta.idDato','=','ordent.Cuenta_idDato')
        ->leftjoin('dato as ttaller','ttaller.idDato','=','ordent.Taller_idDato')
        ->where('idOrdent', $ordent)
        ->first();

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
            $backlog["Vehiculo_idVehiculo"] = $ubacklog->Vehiculo_idVehiculo;
            $backlog["placaVeh"] = $ubacklog->placaVeh;
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
            elseif($ubacklog->tipoBac == "CAMPANA")
            {
                $campanas[] = $ubacklog->Origen_idOrigen;
                $backlogs["cc".$ubacklog->Origen_idOrigen] = $backlog;
            }
        }

        //obteniendo las fallas correctivas
        $arr_fallas = Falla::select('idFalla','estadoFal','detalleFal','nombreCom','nombreApa','Vehiculo_idVehiculo','vehiculo.placaVeh','Acople_idVehiculo','fechaRep','motivoRep','reportef.Cuenta_idDato','idReportef','motivoRep')
            ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
            ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->leftJoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
            ->leftJoin('vehiculo','vehiculo.idVehiculo','=','reportef.Vehiculo_idVehiculo')
            //->where('activoFal', 1)
            ->whereIn('idFalla',$correctivos)
            ->get();

        //obteniendo las fallas preventivas1
        $arr_asignaciones = Asignacion::select('implemento.*','nombreImp','nombreGru','idAsignacion','vencimientoAsi','fvencimientoAsi')
            ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
            ->join('grupo','grupo.idGrupo','=','implemento.Grupo_idGrupo')
            //->join('entidad','entidad.idEntidad','=','asignacion.Entidad_idEntidad')
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
            //$backlog["mot"] = $ufalla->motivoRep;
            if ( $ufalla->motivoRep == null ) { $backlog["mot"] = $ufalla->estadoFal; } else { $backlog["mot"] = $ufalla->motivoRep; }
            if ( $backlogs["c".$ufalla->idFalla]["estadoTra"] == "DEPRECIADO") { $backlog["mot"] = "BACKLOG"; } else { $backlog["mot"] = $ufalla->motivoRep; }

            $arr_correctivos[] = array_merge($backlogs["c".$ufalla->idFalla], $backlog);
        }

        foreach($arr_asignaciones as $uasignacion)
        {
            $backlog = [];
            $backlog["apa"] = $uasignacion->nombreGru;
            $backlog["com"] = $uasignacion->nombreImp;
            $backlog["det"] = $uasignacion->vencimientoAsi." km.";

            $arr_preventivos[] = array_merge($backlogs["p".$uasignacion->idAsignacion], $backlog);
        }

        foreach($arr_asignaciones_c as $ucampana)
        {
            if ( $ucampana->nombreGru == 'CAMPAÑAS') 
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
            //$backlog["mot"] = $ufalla->motivoRep;
            if ( $ufalla->motivoRep == null ) { $backlog["mot"] = $ufalla->estadoFal; } else { $backlog["mot"] = $ufalla->motivoRep; }
            //if ( $backlogs["c".$ufalla->idFalla]["estadoTra"] == "DEPRECIADO") { $backlog["mot"] = "BACKLOG"; } else { $backlog["mot"] = $ufalla->motivoRep; }
            
            $arr_campanas[] = array_merge($backlogs["cc".$ufalla->idFalla], $backlog);
            
        }

        /*$respuesta = [];
        foreach($backlogs as $ubacklog)
        {
            $respuesta[] = $ubacklog;
        }*/

        /*************************************************************************/

        $cabecera = [];
        $cuerpo = [];

        $data["cabecera"] = $obj_ordent;
        $data["cuerpo"] = $backlogs;
        $data["preventivos"] = $arr_preventivos;
        $data["correctivos"] = $arr_correctivos;
        $data["campanas"] = $arr_campanas;
        //$data["trabajo"] = $trabajo;
        //return $data;
        $pdf=PDF::loadView('Pdfs.Mantenimiento.Trabajo', $data);

        $pdf->setPaper('A4', 'portrait');

        return $pdf->stream();

    }

    public function ExportarOT($cuenta, $vehiculo, $finicio, $ffin, $estado, $mantt)
    {

        /*$fecha_actual = date("Y-m-d"); 
        return Excel::download(new OtExport($cuenta, $vehiculo, $finicio, $ffin, $estado, $mantt), 'Ordenest:'.$fecha_actual.'.xlsx'); */

        $cuerpo = [];
        $arr_ordenes = [];
        $cuenta_ = '='; 
        $vehiculo_ = '=';
        $estado_ = '=';
        $mantt_ = '=';

        if ( $cuenta == '0' ) { $cuenta_ = '<>'; }
        if ( $vehiculo == '0' ) { $vehiculo_ = '<>'; }
        if ( $estado == '0') { $estado_ = '<>'; }
        if ( $mantt == '0') { $mantt_ = '<>'; }

        /*$arr_ordent = Ordent::select('idOrdent','fechaOrd','placaVeh','estadoOrd','mantenimientoOrd','taller.valorDat as taller','cuenta.valorDat as cuenta')
            ->leftjoin('dato as taller','taller.idDato','=','ordent.Taller_idDato')
            ->leftjoin('dato as cuenta','cuenta.idDato','=','ordent.Cuenta_idDato')
            ->leftjoin('vehiculo','vehiculo.idVehiculo','ordent.Vehiculo_idVehiculo')
            ->where('fechaOrd','>=',$finicio)
            ->where('fechaOrd','<=',$ffin)
            ->where('ordent.Cuenta_idDato', $cuenta_, $cuenta)
            ->orderBy('idOrdent','ASC')
            ->get();

        $historial_correctivos = []; //correctivos sin backlog
        $id_correctivos = [];
        $backlog_correctivos = [];
        foreach ( $arr_ordent as $uordent) 
        {
            if ( $uordent->mantenimientoOrd !==null) 
                $historial_correctivos[$uordent->idOrdent] = $uordent;
                $id_correctivos[] = $uordent->idOrdent;
            if ( $uordent->mantenimientoOrd == null)
                $backlog_correctivos[$uordent->idOrdent] = $uordent;
        } 

        $arr_trabajos = Trabajo::select('Ordent_idOrdent','estadoTra','nombreApa','nombreCom','detalleFal')
            ->leftjoin('falla','falla.idFalla','=','trabajo.Falla_idFalla')
            ->leftjoin('componente','componente.idComponente','=','falla.Componente_idComponente')
            ->leftjoin('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->whereIn('Ordent_idOrdent', $id_correctivos)
            ->get();*/

            /*$arr_ordent = Ordent::select('ordent.*','cuenta.valorDat as cuenta','taller.valorDat as taller','vehiculo.placaVeh','Asignacion_idAsignacion','nombreImp', 
                          DB::raw('DATE_FORMAT(ffinOrd,"%h:%i:%s") as hora'),
                          DB::raw('CONCAT(paternoPer," ", maternoPer," ", nombrePer) as nombrePer'),'nombreApa','nombreCom',
                          'detalleFal','tipoFal','estadoFal','estadoTra','actividadTra')
            ->leftjoin('vehiculo','vehiculo.idVehiculo','ordent.Vehiculo_idVehiculo')
            ->leftjoin('trabajo','trabajo.Ordent_idOrdent','=','ordent.idOrdent')
            ->leftjoin('falla','falla.idFalla','=','trabajo.Falla_idFalla')
            ->leftjoin('componente','componente.idComponente','=','falla.Componente_idComponente')
            ->leftjoin('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->leftjoin('dato as cuenta','cuenta.idDato','ordent.Cuenta_idDato')
            ->leftjoin('dato as taller','taller.idDato','ordent.Taller_idDato')
            ->leftjoin('persona','persona.idPersona','trabajo.Persona_idPersona')
            ->leftjoin('asignacion','asignacion.idAsignacion','=','trabajo.Asignacion_idAsignacion')
            ->leftjoin('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
            ->whereDate('fechaOrd','>=', $finicio)
            ->whereDate('fechaOrd','<=', $ffin)
            ->where('ordent.Cuenta_idDato', $cuenta_ , $cuenta)
            ->where('ordent.Vehiculo_idVehiculo', $vehiculo_ , $vehiculo)
            ->where('ordent.mantenimientoOrd', $mantt_ , $mantt)
            ->where('estadoOrd', $estado_, $estado)
            ->orderBy('idOrdent','ASC')
            ->get();*/
            
            $historial = Ordent::select('ordent.*','cuenta.valorDat as cuenta','taller.valorDat as taller','vehiculo.placaVeh','Asignacion_idAsignacion','nombreImp', 
                              DB::raw('DATE_FORMAT(ffinOrd,"%h:%i:%s") as hora'),
                              DB::raw('CONCAT(paternoPer," ", maternoPer," ", nombrePer) as nombrePer'),'nombreApa','nombreCom',
                              'detalleFal','tipoFal','estadoFal','estadoTra','actividadTra','tipo.valorDat as tipoVeh')
                ->leftjoin('vehiculo','vehiculo.idVehiculo','ordent.Vehiculo_idVehiculo')
                ->leftjoin('trabajo','trabajo.Ordent_idOrdent','=','ordent.idOrdent')
                ->leftjoin('falla','falla.idFalla','=','trabajo.Falla_idFalla')
                ->leftjoin('componente','componente.idComponente','=','falla.Componente_idComponente')
                ->leftjoin('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
                ->leftjoin('dato as cuenta','cuenta.idDato','ordent.Cuenta_idDato')
                ->leftjoin('dato as taller','taller.idDato','ordent.Taller_idDato')
                ->leftjoin('dato as tipo','tipo.idDato','vehiculo.Tipo_idDato')
                ->leftjoin('persona','persona.idPersona','trabajo.Persona_idPersona')
                ->leftjoin('asignacion','asignacion.idAsignacion','=','trabajo.Asignacion_idAsignacion')
                ->leftjoin('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
                ->whereDate('fechaOrd','>=', $finicio)
                ->whereDate('fechaOrd','<=', $ffin)
                ->where('ordent.Cuenta_idDato', $cuenta_ , $cuenta)
                ->where('ordent.Vehiculo_idVehiculo', $vehiculo_ , $vehiculo)
                ->where('ordent.mantenimientoOrd', $mantt_ , $mantt)
                ->where('estadoOrd', $estado_, $estado)
                ->orderBy('idOrdent','ASC')
                ->get();
    

            /*$arr_backlog = Ordent::select('ordent.*','cuenta.valorDat as cuenta','taller.valorDat as taller','vehiculo.placaVeh','nombreApa','nombreCom','detalleFal', 
                                          'tipoFal','estadoFal','estadoTra','tipoBac as mantenimientoOrd')
                ->join('vehiculo','vehiculo.idVehiculo','ordent.Vehiculo_idVehiculo')
                ->join('trabajo','trabajo.Ordent_idOrdent','=','ordent.idOrdent')
                ->join('backlog','backlog.idBacklog','=','trabajo.Backlog_idBacklog')
                ->join('falla','falla.idFalla','=','backlog.Origen_idOrigen')
                ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
                ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
                ->join('dato as cuenta','cuenta.idDato','ordent.Cuenta_idDato')
                ->join('dato as taller','taller.idDato','ordent.Taller_idDato')
                ->where('mantenimientoOrd', null)
                ->whereDate('fechaOrd','>=', $finicio)
                ->whereDate('fechaOrd','<=', $ffin)
                ->where('ordent.Cuenta_idDato', $cuenta_ , $cuenta)
                ->where('ordent.Vehiculo_idVehiculo', $vehiculo_ , $vehiculo)
                ->where('estadoOrd', $estado_, $estado)
                ->orderBy('idOrdent','ASC')
                ->get();*/
            
            $arr_backlog = Ordent::select('idOrdent','fechaOrd','finicioOrd','ffinOrd','estadoOrd','cuenta.valorDat as cuenta','taller.valorDat as taller','vehiculo.placaVeh', 
                                          'tipoBac as mantenimientoOrd','Origen_idOrigen','tipo.valorDat as tipoVeh')
                ->join('trabajo','trabajo.Ordent_idOrdent','=','ordent.idOrdent')
                ->join('backlog','backlog.idBacklog','=','trabajo.Backlog_idBacklog')
                ->join('vehiculo','vehiculo.idVehiculo','backlog.Vehiculo_idVehiculo')
                ->join('dato as cuenta','cuenta.idDato','ordent.Cuenta_idDato')
                ->join('dato as taller','taller.idDato','ordent.Taller_idDato')
                ->leftjoin('dato as tipo','tipo.idDato','vehiculo.Tipo_idDato')
                ->where('mantenimientoOrd', null)
                ->whereDate('fechaOrd','>=', $finicio)
                ->whereDate('fechaOrd','<=', $ffin)
                ->where('ordent.Cuenta_idDato', $cuenta_ , $cuenta)
                ->where('ordent.Vehiculo_idVehiculo', $vehiculo_ , $vehiculo)
                ->where('estadoOrd', $estado_, $estado)
                ->orderBy('idOrdent','ASC')
                ->get();
            
            $backlogs = []; 
            $preventivos = []; 
            $correctivos = []; 
            $campanas = [];

            foreach ( $historial as $uordent )
            {
                $backlogs["h".$uordent->idOrdent] = $uordent;
            }

            foreach( $arr_backlog as $ubacklog )
            {
                $backlog = []; 
                $backlog["idOrdent"] = $ubacklog->idOrdent;
                $backlog["fechaOrd"] = $ubacklog->fechaOrd;
                $backlog["finicioOrd"] = $ubacklog->finicioOrd;
                $backlog["ffinOrd"] = $ubacklog->ffinOrd;
                $backlog["estadoOrd"] = $ubacklog->estadoOrd;
                $backlog["cuenta"] = $ubacklog->cuenta;
                $backlog["taller"] = $ubacklog->taller;
                $backlog["placaVeh"] = $ubacklog->placaVeh;
                $backlog["tipoVeh"] = $ubacklog->tipoVeh;
                $backlog["mantenimientoOrd"] = $ubacklog->mantenimientoOrd;

                if($ubacklog->mantenimientoOrd == "PREVENTIVO")
                {
                    $preventivos[] = $ubacklog->Origen_idOrigen;
                    $backlogs["p".$ubacklog->Origen_idOrigen] = $backlog;
                }
                elseif($ubacklog->mantenimientoOrd == "CORRECTIVO")
                {
                    $correctivos[] = $ubacklog->Origen_idOrigen;
                    $backlogs["c".$ubacklog->Origen_idOrigen] = $backlog;
                } 
                elseif( $ubacklog->mantenimientoOrd == "CAMPAÑA")
                {
                    $correctivos[] = $ubacklog->Origen_idOrigen;
                    $campanas[] = $ubacklog->Origen_idOrigen;
                    $preventivos[] = $ubacklog->Origen_idOrigen;
                    $backlogs["cc".$ubacklog->Origen_idOrigen] = $backlog;
                }
            }

            /*$arr_ordent = Trabajo::select('estadoTra','idFalla','estadoFal','detalleFal','nombreCom','nombreApa')
                ->join('falla','falla.idFalla','=','trabajo.Falla_idFalla')
                ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
                ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
                ->whereIn('idFalla',$correctivos)
                ->get();*/
        
            //obteniendo las fallas correctivas    
            $arr_fallas = Falla::select('idFalla','estadoFal','detalleFal','nombreCom','nombreApa','estadoTra','Origen_idOrigen')
                ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
                ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
                ->join('backlog','backlog.Origen_idOrigen','=','falla.idFalla')
                ->join('trabajo','trabajo.Backlog_idBacklog','=','backlog.idBacklog')
                ->whereIn('idFalla',$correctivos)
                ->where('backlog.tipoBac', $mantt_ , $mantt)
                ->get();

            //obteniendo las fallas preventivas
            $arr_preventivos = Asignacion::select('idAsignacion','nombreImp','vencimientoAsi','estadoTra','observacionAsi')
                ->join('backlog','backlog.Origen_idOrigen','=','asignacion.idAsignacion')
                ->join('trabajo','trabajo.Backlog_idBacklog','=','backlog.idBacklog')
                ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
                ->whereIn('idAsignacion',$preventivos)
                ->where('backlog.tipoBac', $mantt_ , $mantt)
                ->get(); 

            //obteniendo las fallas de campaña
            $arr_fallas_c = Falla::select('idFalla','estadoFal','detalleFal','nombreCom','nombreApa','Vehiculo_idVehiculo','Acople_idVehiculo','fechaRep','motivoRep','reportef.Cuenta_idDato','motivoRep')
                ->join('componente','componente.idComponente','=','falla.Componente_idComponente')
                ->join('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
                ->leftJoin('reportef','reportef.idReportef','=','falla.Reporte_idReporte')
                ->whereIn('idFalla',$campanas)
                ->get();

            /*$arr_preventivos = Asignacion::select('nombreImp','vencimientoAsi')
                ->join('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
                ->whereIn('idAsignacion',$preventivos)
                ->get();*/
            //return $backlogs;
            foreach($arr_fallas as $ufalla)
            {
                $backlog = [];
                $backlog["nombreApa"] = $ufalla->nombreApa;
                $backlog["nombreCom"] = $ufalla->nombreCom;
                $backlog["detalleFal"] = $ufalla->detalleFal;
                $backlog["estadoTra"] = $ufalla->estadoTra;
                
                if ( isset( $backlogs["c".$ufalla->idFalla])) 
                {
                    $backlogs["c".$ufalla->idFalla] = array_merge($backlogs["c".$ufalla->idFalla], $backlog);
                }
                if ( isset( $backlogs["cc".$ufalla->idFalla])) 
                {
                    $backlogs["cc".$ufalla->idFalla] = array_merge($backlogs["cc".$ufalla->idFalla], $backlog);
                }
            }

            /*foreach($arr_fallas_c as $ufalla)
            {
                $backlog = [];
                $backlog["apa"] = $ufalla->nombreApa;
                $backlog["com"] = $ufalla->nombreCom;
                $backlog["det"] = $ufalla->detalleFal;
                if ( $ufalla->motivoRep == null ) { $backlog["mot"] = $ufalla->estadoFal; } else { $backlog["mot"] = $ufalla->motivoRep; }
                $backlogs["cc".$ufalla->idFalla] = array_merge($backlogs["cc".$ufalla->idFalla], $backlog);
            }*/

            foreach($arr_preventivos as $upreventivo)
            {
                $backlog = [];
                $backlog["vencimientop"] = $upreventivo->vencimientoAsi;
                $backlog["estadoTra"] = $upreventivo->estadoTra;
                $backlog["detalleFal"] = $upreventivo->observacionAsi;
                
                if ( $upreventivo->nombreGru !== "CAMPAÑA" && isset( $backlogs["p".$upreventivo->idAsignacion]))
                {
                    $backlog["preventivo"] = $upreventivo->nombreImp;
                    $backlogs["p".$upreventivo->idAsignacion] = array_merge($backlogs["p".$upreventivo->idAsignacion], $backlog);
                }
                else {
                    $backlogs["cc".$upreventivo->idAsignacion] = array_merge($backlogs["cc".$upreventivo->idAsignacion], $backlog);
                }
            }
            foreach($backlogs as $ubacklog)
            {
                $arr_ordenes[] = $ubacklog;
            }


        //return $historial_ordent;
            
        /*
            foreach ( $arr_ordent as $uordent ) 
            {
                $historial_ordent[] = $uordent;
            }
            
            foreach ( $arr_backlog as $ubacklog )
            {
                $historial_ordent[] = $ubacklog;
            }*/

            foreach ( $arr_ordenes as $uhistorial ) 
            {
                //return $uhistorial->['idOrdent'];
                if ( isset( $uhistorial['estadoTra'] )) 
                {
                    $fila = [];
                    $fila["ot"] = $uhistorial['idOrdent'];
                    $fila["fecha"] = $uhistorial['fechaOrd'];
                    $fila["placa"] = $uhistorial['placaVeh'];
                    $fila["tipoVeh"] = $uhistorial['tipoVeh'];
                    $fila["estado"] = $uhistorial['estadoOrd'];
                    $fila["tipo"] = $uhistorial['mantenimientoOrd'];
                    if ( isset( $uhistorial['preventivo']) ) { $fila["t. preventivo"] = $uhistorial['preventivo']; } else { $fila["t. preventivo"] = ''; }
                    if ( isset( $uhistorial['vencimientop']) ) { $fila["k. preventivo"] = $uhistorial['vencimientop']; } else { $fila["k. preventivo"] = ''; }
                    $fila["taller"] = $uhistorial['taller'];
                    $fila["cuenta"] = $uhistorial['cuenta'];
                    if ( isset( $uhistorial['nombreApa'])) { $fila["apartado"] = $uhistorial['nombreApa']; } else { $fila["apartado"] = ''; }
                    if ( isset( $uhistorial['nombreCom'])) { $fila["componente"] = $uhistorial['nombreCom']; } else { $fila["componente"] = ''; }
                    if ( isset( $uhistorial['detalleFal'])) { $fila["detalleFalla"] = $uhistorial['detalleFal']; } else { $fila["detalleFalla"] = ''; }
                    $fila["estadoTrabajo"] = ( $uhistorial['estadoTra'] == 'DEPRECIADO') ? 'REPROGRAMADO' : $uhistorial['estadoTra'];
                    //$fila["retraso"] = ( isset( $ufallas['retraso'])) ? $ufallas['retraso']: '';


                    /*
                    $fila["ot"] = $uhistorial->idOrdent;
                    $fila["fecha"] = $uhistorial->fechaOrd;
                    $fila["placa"] = $uhistorial->placaVeh;
                    $fila["estado"] = $uhistorial->estadoOrd;
                    $fila["tipo"] = $uhistorial->mantenimientoOrd;
                    $fila["t. preventivo"] = $uhistorial->preventivo;
                    $fila["k. preventivo"] = $uhistorial->vencimientop;
                    $fila["taller"] = $uhistorial->taller;
                    $fila["cuenta"] = $uhistorial->cuenta;
                    $fila["apartado"] = $uhistorial->nombreApa;
                    $fila["componente"] = $uhistorial->nombreCom;
                    $fila["detalleFalla"] = $uhistorial->detalleFal;
                    $fila["estadoTrabajo"] = $uhistorial->estadoTra;
                    */
                    $cuerpo[] = $fila;
                }
            }
            $todos = []; 
            $todos["cuerpo"] = $cuerpo;
            //return $todos; 

        //return $historial_ordent;

        /*$arr_ordent = Ordent::select('ordent.*','cuenta.valorDat as cuenta','taller.valorDat as taller','vehiculo.placaVeh','Asignacion_idAsignacion','nombreImp', 
                          DB::raw('DATE_FORMAT(ffinOrd,"%h:%i:%s") as hora'),
                          DB::raw('CONCAT(paternoPer," ", maternoPer," ", nombrePer) as nombrePer'),'nombreApa','nombreCom',
                          'detalleFal','tipoFal','estadoFal','estadoTra','actividadTra')
            ->leftjoin('vehiculo','vehiculo.idVehiculo','ordent.Vehiculo_idVehiculo')
            ->leftjoin('trabajo','trabajo.Ordent_idOrdent','=','ordent.idOrdent')
            ->leftjoin('falla','falla.idFalla','=','trabajo.Falla_idFalla')
            ->leftjoin('componente','componente.idComponente','=','falla.Componente_idComponente')
            ->leftjoin('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->leftjoin('dato as cuenta','cuenta.idDato','ordent.Cuenta_idDato')
            ->leftjoin('dato as taller','taller.idDato','ordent.Taller_idDato')
            ->leftjoin('persona','persona.idPersona','trabajo.Persona_idPersona')
            ->leftjoin('asignacion','asignacion.idAsignacion','=','trabajo.Asignacion_idAsignacion')
            ->leftjoin('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
            ->whereDate('fechaOrd','>=', $finicio)
            ->whereDate('fechaOrd','<=', $ffin)
            ->where('ordent.Cuenta_idDato', $cuenta_ , $cuenta)
            ->where('ordent.Vehiculo_idVehiculo', $vehiculo_ , $vehiculo)
            ->where('ordent.mantenimientoOrd', $mantt_ , $mantt)
            ->where('estadoOrd', $estado_, $estado)
            ->orderBy('idOrdent','ASC')
            ->get();*/

        $export = new OtExport($todos);
        $nombre = 'OrdenTrabajo.xlsx';
        return Excel::download($export, $nombre);
        //return Excel::download(new OtExport($cuenta, $vehiculo, $finicio, $ffin, $estado, $mantt), 'Ordenest:'.$fecha_actual.'.xlsx'); */

    }


    /*public function ListarSelect($tipo,$grupo)
    {
        $arr_datos = Dato::select('idDato','valorDat')
            ->where('tipoDat','=',$tipo)
            ->where('grupoDat','=',$grupo)
            ->orderBy('valorDat','asc')
            ->get();
        return $arr_datos;
    }*/
    /*public function ListarDetalle($servicio)
    {
        $arr_detalles = SDetalle::select(DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer, idPersona'),'vehiculo.placaVeh','sdetalle.*','acople.placaVeh as acopleVeh')
            ->join('vehiculo','vehiculo.idVehiculo','=','sdetalle.Vehiculo_idVehiculo')
            ->join('vehiculo as acople','acople.idVehiculo','=','sdetalle.Acople_idVehiculo')
            ->join('persona','persona.idPersona','=','sdetalle.Persona_idPersona')
            ->where('Servicio_idServicio','=',$servicio)
            ->where('estadoDet','<>','ANULADO')
            ->get();

        $convoy = [];
        foreach ($arr_detalles as $udetalle)
        {
            $uconvoy = [];
            $uconvoy["icon"] = $udetalle->idDetalle;
            $uconvoy["econ"] = $udetalle->estadoDet;
            $uconvoy["iper"] = $udetalle->Persona_idPersona;
            $uconvoy["nper"] = $udetalle->trabajadorPer;
            $uconvoy["iveh"] = $udetalle->Vehiculo_idVehiculo;
            $uconvoy["nveh"] = $udetalle->placaVeh;
            $uconvoy["ncon"] = $udetalle->nroDet;
            $uconvoy["ccon"] = $udetalle->cargaDet;
            $uconvoy["iaco"] = $udetalle->Acople_idVehiculo;
            $uconvoy["naco"] = $udetalle->acopleVeh;
            $convoy[] = $uconvoy;
        }
        return $convoy;
    }*/

    /*public function Guardar(Request $request)
    {
        $obj_servicio = new Servicio();
        $obj_servicio->codigoSer = $request->codigo;
        $obj_servicio->fcargaSer = $request->fcarga;
        $obj_servicio->finicioSer = $request->finicio;
        $obj_servicio->fterminoSer = $request->ftermino;
        $obj_servicio->estadoSer = "INICIADO";
        $obj_servicio->Ruta_idRuta = $request->ruta;
        $obj_servicio->Cliente_idExterno = $request->externo;
        //$obj_servicio->montoSer = $request->monto;
        

        $obj_servicio->save();

        $convoy = json_decode($request->convoy);

        foreach ($convoy as $uconvoy)
        {
            $obj_detalle = new SDetalle();

            $obj_detalle->Vehiculo_idVehiculo = $uconvoy->iveh;
            $obj_detalle->Acople_idVehiculo = $uconvoy->iaco;
            $obj_detalle->Persona_idPersona = $uconvoy->iper;
            $obj_detalle->estadoDet = $uconvoy->econ;
            $obj_detalle->Servicio_idServicio = $obj_servicio->idServicio;
            $obj_detalle->nroDet = $uconvoy->ncon;
            $obj_detalle->cargaDet = $uconvoy->ccon;

            $obj_detalle->save();
        }
    }*/

    /*public function Actualizar(Request $request)
    {
        

        $obj_servicio = (object)[];
        //$obj_servicio->estadoSer = "INICIADO";
        $obj_servicio->codigoSer = $request->codigo;
        $obj_servicio->fcargaSer = $request->fcarga;
        $obj_servicio->finicioSer = $request->finicio;
        $obj_servicio->fterminoSer = $request->ftermino;
        $obj_servicio->estadoSer = "INICIADO";
        $obj_servicio->Ruta_idRuta = $request->ruta;
        $obj_servicio->Cliente_idCliente = $request->externo;
        //$obj_servicio->montoSer = $request->monto;
        
        Servicio::where('idServicio', $request->id)->update((array)$obj_servicio);

        $convoy = json_decode($request->convoy);

        foreach ($convoy as $uconvoy)
        {
            if($uconvoy->icon > 0)
            {
                $obj_detalle = (object)[];
                $obj_detalle->Vehiculo_idVehiculo = $uconvoy->iveh;
                $obj_detalle->Acople_idVehiculo = $uconvoy->iaco;
                $obj_detalle->Persona_idPersona = $uconvoy->iper;
                $obj_detalle->estadoDet = $uconvoy->econ;
                $obj_detalle->Servicio_idServicio =  $request->id;
                $obj_detalle->nroDet = $uconvoy->ncon;
                $obj_detalle->cargaDet = $uconvoy->ccon;
                SDetalle::where('idDetalle', $uconvoy->icon)->update((array)$obj_detalle);                
            }
            else
            {
                $obj_detalle = new SDetalle();
                $obj_detalle->Vehiculo_idVehiculo = $uconvoy->iveh;
                $obj_detalle->Acople_idVehiculo = $uconvoy->iaco;
                $obj_detalle->Persona_idPersona = $uconvoy->iper;
                $obj_detalle->estadoDet = $uconvoy->econ;
                $obj_detalle->Servicio_idServicio =  $request->id;
                $obj_detalle->nroDet = $uconvoy->ncon;
                $obj_detalle->cargaDet = $uconvoy->ccon;
                $obj_detalle->save();
            }
        }

    }*/

    /*public function Ruta(Request $request)
    {
        //ENVÍO A RUTA ES DECIR QUE EL SERVICIO CAMBIARA SU ESTADO Y SE GENERARA LA ASISTENCIA DE LOS TRABAJADORES ASIGNADOS Y DE LOS SERVICIOS ASIGNADOS
        $obj_servicio = (object)[];
        $obj_servicio->estadoSer = "RUTA";
        Servicio::where('idServicio', $request->id)->update((array)$obj_servicio);

        $obj_servicio = Servicio::select('servicio.*','ruta.*')
            ->join('ruta','ruta.idRuta','=','servicio.Ruta_idRuta')
            ->where('idServicio','=',$request->id)
            ->first();

        $arr_detalles = SDetalle::select('sdetalle.Vehiculo_idVehiculo','sdetalle.Acople_idVehiculo','sdetalle.idDetalle','cargaDet')
            //->join('vehiculo','vehiculo.idVehiculo','=','sdetalle.Vehiculo_idVehiculo')
            //->join('persona','persona.idPersona','=','sdetalle.Persona_idPersona')
            ->where('Servicio_idServicio','=',$request->id)
            ->where('estadoDet','<>','ANULADO')
            ->get();

        
        $vehiculos = [];
        $detalles = [];
        
        foreach ($arr_detalles as $udetalle)
        {
            $vehiculos[] = $udetalle->Vehiculo_idVehiculo;
            $vehiculos[] = $udetalle->Acople_idVehiculo;
        }

        $finicio = date("Y-m-d",strtotime($obj_servicio->finicioSer));
        $ftermino = date("Y-m-d",strtotime($obj_servicio->fterminoSer));

        $arr_seguimientos = Seguimiento::select('idSeguimiento')
                //->join('vehiculo','vehiculo.idVehiculo','=','sdetalle.Vehiculo_idVehiculo')
                //->join('persona','persona.idPersona','=','sdetalle.Persona_idPersona')
                ->whereIn('Vehiculo_idVehiculo', $vehiculos)
                ->where('fechaSeg','>=',$finicio)
                ->where('fechaSeg','<=',$ftermino)
                ->where('estadoSeg','<>','VACIO')
                ->get();

        if(count($arr_seguimientos) > 0)
            return "LOS VEHICULOS Y/O ACOPLES YA HAN SIDO ASIGNADOS EN LAS FECHAS INDICADAS DEL SERVICIO";

        $factual = $finicio;
        $fechas = [];
        while($factual <= $ftermino)
        {
            $fechas[] = $factual;
            $factual = date("Y-m-d",strtotime($factual."+ 1 days")); 
        }

        $nrodias = count($fechas);
        $moneda = $obj_servicio->monedaRut;
        $precio = $obj_servicio->precioRut;

        foreach ($arr_detalles as $udetalle)
        {
            foreach ($fechas as $ufecha)
            {
                $obj_seguimiento = new Seguimiento();
                $obj_seguimiento->Vehiculo_idVehiculo = $udetalle->Vehiculo_idVehiculo;
                $obj_seguimiento->fechaSeg = $ufecha;
                $obj_seguimiento->estadoSeg = "LABORADO";
                $obj_seguimiento->Servicio_idServicio = $request->id;
                $obj_seguimiento->Detalle_idDetalle = $udetalle->idDetalle;
                $obj_seguimiento->precioSeg = ($udetalle->cargaDet * $precio)/$nrodias;
                //$obj_seguimiento->comentarioSeg = $request->comentario;
                $obj_seguimiento->save();

                $obj_seguimiento = new Seguimiento();
                $obj_seguimiento->Vehiculo_idVehiculo = $udetalle->Acople_idVehiculo;
                $obj_seguimiento->fechaSeg = $ufecha;
                $obj_seguimiento->estadoSeg = "LABORADO";
                $obj_seguimiento->Servicio_idServicio = $request->id;
                $obj_seguimiento->Detalle_idDetalle = $udetalle->idDetalle;
                $obj_seguimiento->precioSeg = 0;
                //$obj_seguimiento->comentarioSeg = $request->comentario;
                $obj_seguimiento->save();
                ////////////////////////////////falta agregar la query para que el registro ya existe como vacio hay ue actualizarlo
            }
        }
        return;
    }*/

}
