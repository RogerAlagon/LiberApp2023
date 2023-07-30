<?php 
namespace App\Http\Controllers; 

use DB;
use App\Permiso; 
use App\Persona;
use App\Dato; 
use App\Asistencia; 
use DateTime;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;


class PermisoController extends Controller 
{
    public function ListarDato($estado) 
    {
        if ( $estado == 'todo' )
        {
            $arr_dato = Dato::select('idDato','valorDat','tipoDat','grupoDat')
            ->where('tipoDat','=','PERMISO')
            ->where('grupoDat','=','ASISTENCIA')
            ->get(); 
            return $arr_dato;

        } else if ( $estado == 'hora' ) {
            $arr_dato = Dato::select('idDato','valorDat','tipoDat','grupoDat')
            /*->whereIn('valorDat',['COMPENSACIÓN DE TRABAJO','PERMISO ATENCIÓN MÉDICA','PERMISO DESCANSO MÉDICO',
                      'PERMISO PERSONAL','COMISIÓN POR TRABAJO','REFRIGERIO'])*/
            ->whereIn('valorDat',['COMPENSACIÓN DE TRABAJO','PERMISO ATENCIÓN MÉDICA','PERMISO DESCANSO MÉDICO',
                      'PERMISO PERSONAL','COMISIÓN POR TRABAJO','REFRIGERIO','OTRO'])
            ->where('tipoDat','=','PERMISO')
            ->where('grupoDat','=','ASISTENCIA')
            ->get();
            return $arr_dato;

        } else if ( $estado == 'dias' ) {
            $arr_dato = Dato::select('idDato','valorDat','tipoDat','grupoDat')
            /*->whereIn('valorDat',['LICENCIA CON GOCE','LICENCIA SIN GOCE','LICENCIA POR PATERNIDAD','LICENCIA POR MATERNIDAD', 
                                  'LICENCIA POR INCAPACIDAD PARA EL TRABAJO','VACACIONES'])*/
            ->whereIn('valorDat',['COMPENSACIÓN DE TRABAJO','PERMISO PERSONAL','LICENCIA CON GOCE','LICENCIA SIN GOCE','LICENCIA POR PATERNIDAD','LICENCIA POR MATERNIDAD', 
                                  'LICENCIA POR INCAPACIDAD PARA EL TRABAJO','COMISIÓN POR TRABAJO','VACACIONES','OTRO','PERMISO DESCANSO MÉDICO'])               
            ->where('tipoDat','=','PERMISO')
            ->where('grupoDat','=','ASISTENCIA')
            ->get();
            return $arr_dato;
        }
    }
    public function ListarPermiso( $id, $estado )
    { 
        //recuperar idPersona por idUsuario 
        $obj_persona = Persona::select('idPersona')
        ->where('usuario.idUsuario','=',$id)
        ->LeftJoin('usuario','usuario.Persona_idPersona','=','persona.idPersona')
        ->first();
        
        if ( $estado == 'aprobacion' )
        {
            $arr_permiso = Permiso::select(DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer ) AS trabajadorPer, idPermiso, fechaPer, estadoPer, finicioPer, ffinPer, 
            destinoPer, hinicioPer, hfinPer, motivoPer, hdiferenciaPer, observacionPer, jefeareaPer, recursoPer, tareoPer, Responsable_idUsuario, valorDat as motivo'))
            //->where('persona.Responsable_idUsuario','=', $obj_persona->idPersona)
            ->where('persona.Responsable_idUsuario','=', $id)
            ->where('estadoPer','=','SOLICITADO')
            ->where('jefeareaPer','=',null)
            ->LeftJoin('persona','persona.idPersona','=','permiso.Persona_idPersona')
            ->LeftJoin('dato','dato.idDato','=','permiso.Permiso_idDato')
            ->get();
            return $arr_permiso;
        } else if ( $estado == 'rrhh') {
            $arr_permiso = Permiso::select(DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer ) AS trabajadorPer, idPermiso, fechaPer, estadoPer, finicioPer, ffinPer, 
            destinoPer, hinicioPer, hfinPer, motivoPer, hdiferenciaPer, observacionPer, jefeareaPer, recursoPer, tareoPer, Responsable_idUsuario, valorDat as motivo'))
            ->where('estadoPer','=','SOLICITADO')
            ->where('jefeareaPer','=','0')
            ->where('recursoPer','=',null)
            ->LeftJoin('persona','persona.idPersona','=','permiso.Persona_idPersona')
            ->LeftJoin('dato','dato.idDato','=','permiso.Permiso_idDato')
            ->get();
            return $arr_permiso;
        }else if ( $estado == 'solicitud' ) {
            $arr_permiso = Permiso::select(DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer ) AS trabajadorPer, idPermiso,fechaPer, estadoPer, finicioPer, ffinPer, 
            destinoPer, hinicioPer, hfinPer, motivoPer, hdiferenciaPer, observacionPer, jefeareaPer, recursoPer, tareoPer, Responsable_idUsuario, valorDat as motivo'))
            //->where('persona.Responsable_idUsuario','=', $obj_persona->idPersona)
            ->where('Persona_idPersona','=', $obj_persona->idPersona)
            ->where('estadoPer','=','SOLICITADO')
            ->LeftJoin('persona','persona.idPersona','=','permiso.Persona_idPersona')
            ->LeftJoin('dato','dato.idDato','=','permiso.Permiso_idDato')
            ->orderBy('fechaPer','DESC')
            ->get();
            return $arr_permiso;
        }
    }
    public function ListarPermisoReporte( $id, $estado, $estadoPer, $inicio, $fin ) 
    {
        //recuperar idPersona por idUsuario
        $obj_persona = Persona::select('idPersona')
        ->where('usuario.idUsuario','=',$id)
        ->LeftJoin('usuario','usuario.Persona_idPersona','=','persona.idPersona')
        ->first();

        if ( $estado == 'jefearea' )
        {
            $arr_permiso = Permiso::select(DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer ) AS trabajadorPer, idPermiso, fechaPer, estadoPer, finicioPer, ffinPer, 
            destinoPer, hinicioPer, hfinPer, motivoPer, hdiferenciaPer, observacionPer, jefeareaPer, recursoPer, tareoPer, Responsable_idUsuario, valorDat as motivo'))
            ->where('persona.Responsable_idUsuario','=', $obj_persona->idPersona)
            ->where('estadoPer','=', $estadoPer)
            ->whereDate('finicioPer','>=',$inicio)
            ->whereDate('ffinPer','<=', $fin)
            ->LeftJoin('persona','persona.idPersona','=','permiso.Persona_idPersona')
            ->LeftJoin('dato','dato.idDato','=','permiso.Permiso_idDato')
            ->get(); 
            return $arr_permiso;
        } else if ( $estado == 'rrhh' ) {
            $arr_permiso = Permiso::select(DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer ) AS trabajadorPer, idPermiso, fechaPer, estadoPer, finicioPer, ffinPer, 
            ffinPerN, destinoPer, hinicioPer, hfinPer, hfinPerN, motivoPer, hdiferenciaPer, observacionPer, jefeareaPer, recursoPer, tareoPer, Responsable_idUsuario, valorDat, Permiso_idDato'))
            ->where('estadoPer','=',$estadoPer)
            ->whereDate('finicioPer','>=',$inicio)
            ->whereDate('ffinPer','<=', $fin)
            ->LeftJoin('persona','persona.idPersona','=','permiso.Persona_idPersona')
            ->LeftJoin('dato','dato.idDato','=','permiso.Permiso_idDato')
            ->get();
            return $arr_permiso;
        } else if ( $estado == 'persona' ) {
            $arr_permiso = Permiso::select(DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer ) AS trabajadorPer, idPermiso, fechaPer, estadoPer, finicioPer, ffinPer, 
            destinoPer, hinicioPer, hfinPer, motivoPer, hdiferenciaPer, observacionPer, jefeareaPer, recursoPer, tareoPer, Responsable_idUsuario, valorDat as motivoPer'))
            ->where('Persona_idPersona','=', $obj_persona->idPersona)
            ->where('estadoPer','=', $estadoPer)
            ->whereDate('finicioPer','>=',$inicio)
            ->whereDate('ffinPer','<=', $fin)
            ->LeftJoin('persona','persona.idPersona','=','permiso.Persona_idPersona')
            ->LeftJoin('dato','dato.idDato','=','permiso.Permiso_idDato')
            ->get();
            return $arr_permiso;
        }
    }

    public function ProcesarJefearea(Request $request)
    {
        $obj_jefearea = json_decode($request->aprobacionP); 
        foreach ( $obj_jefearea as $ujefe )
        {
            $arr_jefearea = (object)[]; 
            if ( isset( $ujefe->jefeareaPer ) && $ujefe->jefeareaPer == "true")
            {
                $arr_jefearea->jefeareaPer = '0';
            }
            if ( isset( $ujefe->jefeareaPer ) && $ujefe->jefeareaPer == 'false')
            {
                $arr_jefearea->jefeareaPer = '1';
                $arr_jefearea->estadoPer = 'ANULADO';

            }
            Permiso::where('idPermiso', $ujefe->idPermiso)->update((array)$arr_jefearea);
        }
    }
    public function ProcesarRecursoH( Request $request )
    {
        $obj_recurso = json_decode($request->aprobacionR);
        $aprobados  = [];
        foreach ( $obj_recurso as $urecurso )
        {
            $arr_recurso = (object)[]; 
            if ( isset( $urecurso->recursoPer ) && $urecurso->recursoPer == 'true')
            {
                $arr_recurso->recursoPer = '0';
                $arr_recurso->estadoPer = 'APROBADO';
                $aprobados[] = $urecurso->idPermiso;
            }
            if ( isset( $urecurso->recursoPer ) && $urecurso->recursoPer == 'false')
            {
                $arr_recurso->recursoPer = '1';
                $arr_recurso->estadoPer = 'ANULADO';
            }
            Permiso::where('idPermiso', $urecurso->idPermiso)->update((array)$arr_recurso);
        }
                //obteniendo todos los permisos aprobados
                $arr_permisos = Permiso::select('finicioPer','ffinPer','Persona_idPersona','hdiferenciaPer','dato.valorDat')
                ->join('dato','dato.idDato','=','permiso.Permiso_idDato')
                ->whereIn('idPermiso',$aprobados)
                ->get();
    
            //guardando las asistencias de los permisos aprobados
            foreach($arr_permisos as $upermiso)
            {
                //clasificando el tareo
                $tareo = "";
                if($upermiso->hdiferenciaPer != '')
                {
                    switch($upermiso->valorDat)
                    {
                        case "COMPENSACIÓN DE TRABAJO":
                            $tareo = "D";
                            break;
                        case "PERMISO ATENCIÓN MEDICA":
                            $tareo = "P";
                            break;
                        case "PERMISO PERSONAL":
                            $tareo = "P";
                            break;
                        case "LICENCIA CON GOCE":
                            $tareo = "LG";
                            break;
                        case "LICENCIA SIN GOCE":
                            $tareo = "LSG";
                            break;
                        case "LICENCIA POR PATERNIDAD":
                            $tareo = "LP";
                            break;
                        case "LICENCIA POR MATERNIDAD":
                            $tareo = "LP";
                            break;
                        case "LICENCIA POR INCAPACIDAD PARA EL TRABAJO":
                            $tareo = "LI";
                            break;
                        case "COMISIÓN POR TRABAJO":
                            $tareo = "A";
                            break;
                        case "REFRIGERIO":
                            $tareo = "A";
                            break;
                        case "VACACIONES":
                            $tareo = "V";
                            break;
                        case "PERMISO DESCANSO MÉDICO":
                            $tareo = "DM";
                            break;
                        default: 
                            $tareo = "Z";
                            break;
                    } 
                }
                else
                    $tareo = "Z";            
    
                //obteniendo el array de fechas del permiso
                $factual = $upermiso->finicioPer;
                $continuar = true;
                $fechas = [];
    
                while($continuar)
                {
                    $fechas[$factual] = 0;
                    if($factual == $upermiso->ffinPer)
                        $continuar = false;
                    $factual = date("Y-m-d",strtotime($factual."+ 1 days"));
                }
    
                //obteniendo el historial de asistencias
                $arr_asistencias = Asistencia::select('idAsistencia','fechaAsi','tareoAsi','comentarioAsi')
                    ->where('Persona_idPersona',$upermiso->Persona_idPersona)
                    ->where('fechaAsi','>=',$upermiso->finicioPer)
                    ->where('fechaAsi','<=',$upermiso->ffinPer)
                    ->get();
    
                
                foreach($arr_asistencias as $uasistencia)
                {
                    $obj_asistencia = (object)[];
                    
                    if($uasistencia->comentarioAsi == "" || $uasistencia->comentarioAsi == null)
                        $obj_asistencia->comentarioAsi = $upermiso->observacionPer;
                    else
                        $obj_asistencia->comentarioAsi .= ",".$upermiso->observacionPer;
    
                    if($upermiso->hdiferenciaPer != '')
                    {
                        $obj_asistencia->tareoAsi = $tareo;
                        //$obj_asistencia->cerradoAsi = 1;
                    }
    
                    Asistencia::where('idAsistencia', $uasistencia->idAsistencia)->update((array)$obj_asistencia);
                    //mostrando la asistencia cerrada
                    $fechas[$uasistencia->fechaAsi] = 1;
                }
                foreach($fechas as $ufecha => $valor)
                {
                    if($valor == 0)
                    {
                        $obj_asistencia = new Asistencia();
                        $obj_asistencia->tareoAsi = $tareo;
                        $obj_asistencia->comentarioAsi = $upermiso->observacionPer;
                        $obj_asistencia->Persona_idPersona = $upermiso->Persona_idPersona;
                        $obj_asistencia->fechaAsi = $ufecha;
                        $obj_asistencia->save();
                    }
                }
            }
    }
    public function Guardar( Request $request )
    {
        $jpermiso = json_decode($request->permiso); 
        //recuperar idPersona por idUsuario
        $obj_persona = Persona::select('idPersona')
        ->where('usuario.idUsuario','=',$jpermiso->Persona_idPersona)
        ->LeftJoin('usuario','usuario.Persona_idPersona','=','persona.idPersona')
        ->first();

        $obj_permiso = new Permiso(); 
        $obj_permiso->fechaPer = now(); 
        $obj_permiso->estadoPer = 'SOLICITADO'; 
        $obj_permiso->finicioPer = $jpermiso->finicioPer; 
        $obj_permiso->ffinPer = $jpermiso->ffinPer; 
        $obj_permiso->destinoPer = $jpermiso->destinoPer; 
        if ( isset( $jpermiso->hinicioPer ) ) { $obj_permiso->hinicioPer = $jpermiso->hinicioPer; } else { $obj_permiso->hinicioPer = NULL; } 
        if ( isset( $jpermiso->hfinPer ) ) { $obj_permiso->hfinPer = $jpermiso->hfinPer; } else { $obj_permiso->hfinPer = NULL;} 
        //$obj_permiso->motivoPer = $jpermiso->motivoPer; 
        if ( isset( $jpermiso->hdiferenciaPer ) ) { $obj_permiso->hdiferenciaPer = $jpermiso->hdiferenciaPer; } else { $obj_permiso->hdiferenciaPer  = ''; }
        $obj_permiso->observacionPer = $jpermiso->observacionPer;
        $obj_permiso->Persona_idPersona = $obj_persona->idPersona;
        $obj_permiso->Permiso_idDato = $jpermiso->Permiso_idDato;
        $obj_permiso->save();
    }
    public function Actualizar( Request $request )
    {
        $obj_permiso = json_decode($request->permiso); 
        $hinicio = ''; 
        $hfin = ''; 
        $hdiferencia = '';
        $hfinPerN = ''; 
        $ffinPerN = '';


        if ( isset( $obj_permiso->hinicioPer ) ) { $hinicio = $obj_permiso->hinicioPer; } else { $hinicio = NULL; }
        if ( isset( $obj_permiso->hfinPer ) ) { $hfin = $obj_permiso->hfinPer; } else { $hfin = ''; }
        if ( isset( $obj_permiso->hdiferenciaPer ) ) { $hdiferencia = $obj_permiso->hdiferenciaPer; } else { $hdiferencia = ''; }
        if ( isset( $obj_permiso->hfinPerN ) ) {  $hfinPerN = $obj_permiso->hfinPerN; } else { $hfinPerN = ''; }
        if ( isset( $obj_permiso->ffinPerN ) ) { $ffinPerN = $obj_permiso->ffinPerN; } else { $ffinPerN = NULL; }

        $up_papeleta = Permiso::select('idPermiso.*')
        ->where('idPermiso', $obj_permiso->idPermiso) 
        ->update(['finicioPer' => $obj_permiso->finicioPer, 
                  'ffinPer' => $obj_permiso->ffinPer, 
                  'ffinPerN' => $ffinPerN,
                  'destinoPer' => $obj_permiso->destinoPer, 
                  'hinicioPer' => $hinicio, 
                  'hfinPer' => $hfin,
                  'hfinPerN' => $hfinPerN,
                  'hdiferenciaPer' => $hdiferencia, 
                  'observacionPer' => $obj_permiso->observacionPer, 
                  'Permiso_idDato' => $obj_permiso->Permiso_idDato]);
    }
    public function Anular( Request $request ) 
    {
        $obj_permiso = json_decode($request->permiso);
        $obj_papeleta = Permiso::select('idPermiso.*')
        ->where('idPermiso', $obj_permiso->idPermiso)
        ->update(['estadoPer' => $obj_permiso->estadoPer]);
    }
}