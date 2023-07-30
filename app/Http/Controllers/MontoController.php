<?php
/*** NO SE ESTA VALIDANDO EL TIPOMON NI SE ESTA INGRESANDO EL TIPO VIÁTICO AL MOMENTO DE SOLICITAR VIÁTICOS ***/
namespace App\Http\Controllers;

use App\Monto;
use App\Asistencia;
use App\Rendicion;
use App\Entidad;
use App\Dato;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Exports\DepositosExport;
use App\Exports\MontosExport;
use Maatwebsite\Excel\Facades\Excel;
use PDF;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Persona;

class MontoController extends Controller
{
    public function Listar($estado)
    {
        $arr_montos = [];
        
        $arr_montos = Monto::select('monto.*',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'valorDat as concepto','nombreUsu','bancoPer','Servicio_idServicio','nombreEve')
                ->join('persona','persona.idPersona','monto.Persona_idPersona')
                ->join('dato','dato.idDato','monto.Dato_idDato')
                ->join('usuario','monto.Usuario_idUsuario','usuario.idUsuario')
                ->leftJoin('evento','evento.idEvento','monto.Evento_idEvento')
                ->where('activoMon',1)
                ->where('estadoMon','=',$estado)
                ->get();
        
        return $arr_montos;
    }
    public function ListarUsuario($estado,$usuario)
    {
        $arr_montos = Monto::select('monto.*',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'valorDat as concepto','nombreUsu')
            ->join('persona','persona.idPersona','monto.Persona_idPersona')
            ->join('dato','dato.idDato','monto.Dato_idDato')
            ->join('usuario','monto.Usuario_idUsuario','usuario.idUsuario')
            ->where('activoMon',1)
            ->where('estadoMon','=',$estado)
            ->where('Usuario_idUsuario','=',$usuario)
            ->get();
        return $arr_montos;
    }
    public function ListarRendicion($estado,$persona,$agrupar)
    {
        $obj_persona = Persona::select('dniPer')->where('idPersona',$persona)->first();

        $arr_personas = Persona::select('idPersona')->where('dniPer',$obj_persona->dniPer)->get();
        $ids = [];

        foreach($arr_personas as $upersona)
        {
            $ids[] = $upersona->idPersona;
        }

        if($agrupar == 'true')
        {
            if($estado == "APLICADO")
            {
                $arr_montos = DB::table('monto')
                            ->select('idMonto','detalleMon','totalMon','estadoMon','faplicacionMon','frendicionMon','Dato_idDato','disposicionMon','observacionMon','Usuario_idUsuario','nombreUsu','valorDat as concepto','rendicionMon','saldoMon')
                            //->join('persona','monto.Persona_idPersona','=','persona.idPersona')
                            ->join('dato','dato.idDato','monto.Dato_idDato')
                            ->leftJoin('usuario','monto.Usuario_idUsuario','=','usuario.idUsuario')
                            //->where('monto.Persona_idPersona',$persona)
                            ->whereIn('monto.Persona_idPersona',$ids)
                            ->where('estadoMon','=',$estado)
                            ->where('activoMon',1)
                            //->whereIn('faplicacionMon',$grupos)
                            //->where('disposicionMon',$tipo)
                            //->orderBy('Persona_idPersona')
                                    ->where('faplicacionMon',">=","2022-08-01")//campo especial situacional
                            ->get();

                $registros = [];

                foreach ($arr_montos as $umonto)
                {
                    if($umonto->concepto == "ALIMENTACION" || $umonto->concepto == "ALIMENTACION ADICIONAL")
                    {
                        if(!isset($registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]))
                        {
                            $fila = [];
                            //$fila["tip"] = "ALIMENTACION: ";
                            $fila["tip"] = $umonto->detalleMon.": S/".$umonto->totalMon;
                            //$fila["det"] = $umonto->detalleMon;
                            $fila["tot"] = $umonto->totalMon;
                            $fila["ren"] = $umonto->rendicionMon;
                            $fila["sal"] = round($umonto->totalMon - $umonto->rendicionMon,2);
                            //$fila["per"] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
                            //$fila["dni"] = $umonto->dniPer;
                            //$fila["apr"] = $umonto->nombreUsu;
                            //$fila["ban"] = $umonto->bancoPer;
                            //$fila["nro"] = $umonto->nbancoPer;
                            $fila["fec"] = $umonto->faplicacionMon;
                            $fila["fecr"] = $umonto->frendicionMon;
                            $fila["dis"] = $umonto->disposicionMon;
                            $fila["obs"] = "";
                            //$fila["ren"] = 0;
                            $fila["dev"] = 0;
                            $fila["des"] = 0;
                            $fila["mon"] = [];
                            $fila["mon"][] = $umonto;

                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon] = $fila;
                        }
                        else
                        {
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["ren"] += $umonto->rendicionMon;
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["tot"] += $umonto->totalMon;
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["sal"] += round($umonto->totalMon - $umonto->rendicionMon,2);
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["tip"] .= " - ".$umonto->detalleMon.": S/".$umonto->totalMon;
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["mon"][] = $umonto;
                        }
                    }
                    else
                    {
                        if(!isset($registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]))
                        {
                            $fila = [];
                            //$fila["tip"] = "OTROS: ";
                            $fila["tip"] = $umonto->detalleMon.": S/".$umonto->totalMon;
                            //$fila["det"] = $umonto->detalleMon;
                            $fila["tot"] = $umonto->totalMon;
                            $fila["ren"] = $umonto->rendicionMon;
                            $fila["sal"] = round($umonto->totalMon - $umonto->rendicionMon,2);
                            //$fila["per"] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
                            //$fila["dni"] = $umonto->dniPer;
                            //$fila["apr"] = $umonto->nombreUsu;
                            //$fila["ban"] = $umonto->bancoPer;
                            //$fila["nro"] = $umonto->nbancoPer;
                            $fila["fec"] = $umonto->faplicacionMon;
                            $fila["fecr"] = $umonto->frendicionMon;
                            $fila["dis"] = $umonto->disposicionMon;
                            $fila["obs"] = "";
                            $fila["dev"] = 0;
                            $fila["des"] = 0;
                            $fila["mon"] = [];
                            $fila["mon"][] = $umonto;

                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon] = $fila;
                        }
                        else
                        {
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["ren"] += $umonto->rendicionMon;
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["tot"] += $umonto->totalMon;
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["sal"] += round($umonto->totalMon - $umonto->rendicionMon,2);
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["tip"] .= " - ".$umonto->detalleMon.": S/".$umonto->totalMon;
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["mon"][] = $umonto;
                        }
                    }
                }

                $montos = [];
                foreach($registros as $uregistro)
                {
                    $uregistro["ren"] = round($uregistro["ren"],2);
                    $uregistro["tot"] = round($uregistro["tot"],2);
                    $uregistro["sal"] = round($uregistro["sal"],2);
                    $montos[] = $uregistro;
                }

                return $montos;
            }
            elseif($estado == "RENDIDO")
            {
                $arr_montos = DB::table('monto')
                            ->select('idMonto','detalleMon','totalMon','estadoMon','faplicacionMon','frendicionMon','Dato_idDato','disposicionMon','observacionMon','Usuario_idUsuario','nombreUsu','valorDat as concepto','Rendicion_idRendicion','saldoMon',"rendicionMon")
                            ->join('dato','dato.idDato','monto.Dato_idDato')
                            ->leftJoin('usuario','monto.Usuario_idUsuario','=','usuario.idUsuario')
                            //->where('monto.Persona_idPersona',$persona)
                            ->whereIn('monto.Persona_idPersona',$ids)
                            ->where('estadoMon','=',$estado)
                            ->where('activoMon',1)
                            ->get();

                $registros = [];
                $rendiciones = [];

                foreach ($arr_montos as $umonto)
                {
                    if(!isset($registros["r".$umonto->Rendicion_idRendicion]))
                    {
                        $concepto = "OTROS GASTOS";
                        if($umonto->concepto == "ALIMENTACION" || $umonto->concepto == "ALIMENTACION ADICIONAL")
                            $concepto = "ALIMENTACION";

                        $fila = [];
                        $fila["tip"] = $umonto->detalleMon.": S/".$umonto->totalMon;
                        //$fila["tot"] = $umonto->totalMon;
                        $fila["fec"] = $umonto->faplicacionMon;
                        $fila["fecr"] = $umonto->frendicionMon;
                        $fila["dis"] = $umonto->disposicionMon;
                        $fila["obs"] = $umonto->disposicionMon;
                        //$fila["ren"] = 0;
                        //$fila["sal"] = 0;
                        //$fila["dev"] = 0;
                        //$fila["des"] = 0;
                        $fila["mon"] = [];
                        $fila["mon"][] = $umonto;

                        $registros["r".$umonto->Rendicion_idRendicion] = $fila;
                        $rendiciones[] = $umonto->Rendicion_idRendicion;
                    }
                    else
                    {
                        $registros["r".$umonto->Rendicion_idRendicion]["tip"] .= " - ".$umonto->detalleMon.": S/".$umonto->totalMon;
                        $registros["r".$umonto->Rendicion_idRendicion]["mon"][] = $umonto;
                    }
                }

                $arr_rendiciones = DB::table('rendicion')
                            ->select('rendicion.*')
                            ->whereIn('idRendicion',$rendiciones)
                            ->get();

                foreach ($arr_rendiciones as $urendicion)
                {
                    //$registros["r".$urendicion->idRendicion]["tip"] = "ALIMENTACION";
                    $registros["r".$urendicion->idRendicion]["tot"] = $urendicion->totalRen;
                    //$registros["r".$urendicion->idRendicion]["fec"] = $urendicion->fechaRen;
                    //$registros["r".$urendicion->idRendicion]["dis"] = $urendicion->disposicionMon;
                    $registros["r".$urendicion->idRendicion]["ren"] = $urendicion->rendicionRen;
                    $registros["r".$urendicion->idRendicion]["sal"] = $urendicion->saldoRen;
                    $registros["r".$urendicion->idRendicion]["dev"] = $urendicion->devueltoRen;
                    $registros["r".$urendicion->idRendicion]["des"] = $urendicion->descuentoRen;
                    $registros["r".$urendicion->idRendicion]["dis"] = $urendicion->disposicionRen;
                    $registros["r".$urendicion->idRendicion]["obs"] = $urendicion->observacionRen;
                }

                $montos = [];
                foreach($registros as $uregistro)
                {
                    $montos[] = $uregistro;
                }

                return $montos;
            }
        }
        else
        {
            $arr_montos = Monto::select('monto.*','valorDat as concepto')
                ->join('persona','persona.idPersona','monto.Persona_idPersona')
                ->join('dato','dato.idDato','monto.Dato_idDato')
                ->where('activoMon',1)
                ->where('estadoMon','=',$estado)
                //->where('Persona_idPersona','=',$persona)
                ->whereIn('Persona_idPersona',$ids)
                ->get();
            return $arr_montos;
        }
    }
    /*public function ListarRendicion($estado,$persona,$agrupar)
    {
        if($agrupar == 'true')
        {
            if($estado == "APLICADO")
            {
                $arr_montos = DB::table('monto')
                            ->select('idMonto','detalleMon','totalMon','estadoMon','faplicacionMon','frendicionMon','Dato_idDato','disposicionMon','observacionMon','Usuario_idUsuario','nombreUsu','valorDat as concepto','rendicionMon','saldoMon')
                            //->join('persona','monto.Persona_idPersona','=','persona.idPersona')
                            ->join('dato','dato.idDato','monto.Dato_idDato')
                            ->leftJoin('usuario','monto.Usuario_idUsuario','=','usuario.idUsuario')
                            ->where('monto.Persona_idPersona',$persona)
                            ->where('estadoMon','=',$estado)
                            ->where('activoMon',1)
                            //->whereIn('faplicacionMon',$grupos)
                            //->where('disposicionMon',$tipo)
                            //->orderBy('Persona_idPersona')
                                    ->where('faplicacionMon',">=","2022-08-01")//campo especial situacional
                            ->get();

                $registros = [];

                foreach ($arr_montos as $umonto)
                {
                    if($umonto->concepto == "ALIMENTACION" || $umonto->concepto == "ALIMENTACION ADICIONAL")
                    {
                        if(!isset($registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]))
                        {
                            $fila = [];
                            //$fila["tip"] = "ALIMENTACION: ";
                            $fila["tip"] = $umonto->detalleMon.": S/".$umonto->totalMon;
                            //$fila["det"] = $umonto->detalleMon;
                            $fila["tot"] = $umonto->totalMon;
                            $fila["ren"] = $umonto->rendicionMon;
                            $fila["sal"] = round($umonto->totalMon - $umonto->rendicionMon,2);
                            //$fila["per"] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
                            //$fila["dni"] = $umonto->dniPer;
                            //$fila["apr"] = $umonto->nombreUsu;
                            //$fila["ban"] = $umonto->bancoPer;
                            //$fila["nro"] = $umonto->nbancoPer;
                            $fila["fec"] = $umonto->faplicacionMon;
                            $fila["fecr"] = $umonto->frendicionMon;
                            $fila["dis"] = $umonto->disposicionMon;
                            $fila["obs"] = "";
                            //$fila["ren"] = 0;
                            $fila["dev"] = 0;
                            $fila["des"] = 0;
                            $fila["mon"] = [];
                            $fila["mon"][] = $umonto;

                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon] = $fila;
                        }
                        else
                        {
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["ren"] += $umonto->rendicionMon;
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["tot"] += $umonto->totalMon;
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["sal"] += round($umonto->totalMon - $umonto->rendicionMon,2);
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["tip"] .= " - ".$umonto->detalleMon.": S/".$umonto->totalMon;
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["mon"][] = $umonto;
                        }
                    }
                    else
                    {
                        if(!isset($registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]))
                        {
                            $fila = [];
                            //$fila["tip"] = "OTROS: ";
                            $fila["tip"] = $umonto->detalleMon.": S/".$umonto->totalMon;
                            //$fila["det"] = $umonto->detalleMon;
                            $fila["tot"] = $umonto->totalMon;
                            $fila["ren"] = $umonto->rendicionMon;
                            $fila["sal"] = round($umonto->totalMon - $umonto->rendicionMon,2);
                            //$fila["per"] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
                            //$fila["dni"] = $umonto->dniPer;
                            //$fila["apr"] = $umonto->nombreUsu;
                            //$fila["ban"] = $umonto->bancoPer;
                            //$fila["nro"] = $umonto->nbancoPer;
                            $fila["fec"] = $umonto->faplicacionMon;
                            $fila["fecr"] = $umonto->frendicionMon;
                            $fila["dis"] = $umonto->disposicionMon;
                            $fila["obs"] = "";
                            $fila["dev"] = 0;
                            $fila["des"] = 0;
                            $fila["mon"] = [];
                            $fila["mon"][] = $umonto;

                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon] = $fila;
                        }
                        else
                        {
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["ren"] += $umonto->rendicionMon;
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["tot"] += $umonto->totalMon;
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["sal"] += round($umonto->totalMon - $umonto->rendicionMon,2);
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["tip"] .= " - ".$umonto->detalleMon.": S/".$umonto->totalMon;
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["mon"][] = $umonto;
                        }
                    }
                }
                $montos = [];
                foreach($registros as $uregistro)
                {
                    $montos[] = $uregistro;
                }

                return $montos;
            }
            elseif($estado == "RENDIDO")
            {
                $arr_montos = DB::table('monto')
                            ->select('idMonto','detalleMon','totalMon','estadoMon','faplicacionMon','frendicionMon','Dato_idDato','disposicionMon','observacionMon','Usuario_idUsuario','nombreUsu','valorDat as concepto','Rendicion_idRendicion','saldoMon',"rendicionMon")
                            ->join('dato','dato.idDato','monto.Dato_idDato')
                            ->leftJoin('usuario','monto.Usuario_idUsuario','=','usuario.idUsuario')
                            ->where('monto.Persona_idPersona',$persona)
                            ->where('estadoMon','=',$estado)
                            ->where('activoMon',1)
                            ->get();

                $registros = [];
                $rendiciones = [];

                foreach ($arr_montos as $umonto)
                {
                    if(!isset($registros["r".$umonto->Rendicion_idRendicion]))
                    {
                        $concepto = "OTROS GASTOS";
                        if($umonto->concepto == "ALIMENTACION" || $umonto->concepto == "ALIMENTACION ADICIONAL")
                            $concepto = "ALIMENTACION";

                        $fila = [];
                        $fila["tip"] = $umonto->detalleMon.": S/".$umonto->totalMon;
                        //$fila["tot"] = $umonto->totalMon;
                        $fila["fec"] = $umonto->faplicacionMon;
                        $fila["fecr"] = $umonto->frendicionMon;
                        $fila["dis"] = $umonto->disposicionMon;
                        $fila["obs"] = $umonto->disposicionMon;
                        //$fila["ren"] = 0;
                        //$fila["sal"] = 0;
                        //$fila["dev"] = 0;
                        //$fila["des"] = 0;
                        $fila["mon"] = [];
                        $fila["mon"][] = $umonto;

                        $registros["r".$umonto->Rendicion_idRendicion] = $fila;
                        $rendiciones[] = $umonto->Rendicion_idRendicion;
                    }
                    else
                    {
                        $registros["r".$umonto->Rendicion_idRendicion]["tip"] .= " - ".$umonto->detalleMon.": S/".$umonto->totalMon;
                        $registros["r".$umonto->Rendicion_idRendicion]["mon"][] = $umonto;
                    }
                }

                $arr_rendiciones = DB::table('rendicion')
                            ->select('rendicion.*')
                            ->whereIn('idRendicion',$rendiciones)
                            ->get();

                foreach ($arr_rendiciones as $urendicion)
                {
                    //$registros["r".$urendicion->idRendicion]["tip"] = "ALIMENTACION";
                    $registros["r".$urendicion->idRendicion]["tot"] = $urendicion->totalRen;
                    //$registros["r".$urendicion->idRendicion]["fec"] = $urendicion->fechaRen;
                    //$registros["r".$urendicion->idRendicion]["dis"] = $urendicion->disposicionMon;
                    $registros["r".$urendicion->idRendicion]["ren"] = $urendicion->rendicionRen;
                    $registros["r".$urendicion->idRendicion]["sal"] = $urendicion->saldoRen;
                    $registros["r".$urendicion->idRendicion]["dev"] = $urendicion->devueltoRen;
                    $registros["r".$urendicion->idRendicion]["des"] = $urendicion->descuentoRen;
                    $registros["r".$urendicion->idRendicion]["dis"] = $urendicion->disposicionRen;
                    $registros["r".$urendicion->idRendicion]["obs"] = $urendicion->observacionRen;
                }

                $montos = [];
                foreach($registros as $uregistro)
                {
                    $montos[] = $uregistro;
                }

                return $montos;
            }
        }
        else
        {
            $arr_montos = Monto::select('monto.*','valorDat as concepto')
                ->join('persona','persona.idPersona','monto.Persona_idPersona')
                ->join('dato','dato.idDato','monto.Dato_idDato')
                ->where('activoMon',1)
                ->where('estadoMon','=',$estado)
                ->where('Persona_idPersona','=',$persona)
                ->get();
            return $arr_montos;
        }
    }*/
    public function ListarTodo()
    {   
        $arr_montos = Monto::select('monto.*',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'valorDat as concepto')
            ->join('persona','persona.idPersona','=','monto.Persona_idPersona')
            ->join('dato','dato.idDato','monto.Dato_idDato')
            ->where('activoMon',1)
            ->get();
         return $arr_montos;
    }
    public function ListarDisposicion($disposicion)
    {   
        $arr_montos = Monto::select('monto.*',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'valorDat as concepto','bancoPer','nombreUsu')
            ->join('persona','persona.idPersona','=','monto.Persona_idPersona')
            ->join('usuario','usuario.idUsuario','=','monto.Usuario_idUsuario')
            ->join('dato','dato.idDato','monto.Dato_idDato')
            ->where('disposicionMon','=',$disposicion)
            ->where('estadoMon','=','APROBADO')
            ->get();

        $bancos = [];
        $bancos["VACIO"] = 0;
        foreach($arr_montos as $umonto)
        {
            if($umonto->bancoPer == null || $umonto->bancoPer == "")
            {
                $bancos["VACIO"] += $umonto->totalMon;
            }
            elseif(isset($bancos[$umonto->bancoPer]))
            {
                $bancos[$umonto->bancoPer] += $umonto->totalMon;
            }
            else
            {
                $bancos[$umonto->bancoPer] = $umonto->totalMon;
            }
        }
        foreach($bancos as $llave => $ubanco)
        {
            $bancos[$llave] = floatval($ubanco);
        }

        $hoy = date("Y-m-d");
        $mañana = date("Y-m-d",strtotime($hoy."+ 1 days"));

        $arr_grupos = Monto::select(DB::raw('count(*) as total'),'faplicacionMon')
            /*->join('persona','persona.idPersona','=','monto.Persona_idPersona')
            ->join('dato','dato.idDato','monto.Dato_idDato')*/
            ->where('faplicacionMon','>=',$hoy)
            ->where('faplicacionMon','<=',$mañana)
            //->where('estadoMon','=','APLICADO')
            ->whereIn('estadoMon',['APLICADO','RENDIDO'])
            ->groupBy("faplicacionMon")
            ->get();

        $horas = [];
        foreach($arr_grupos as $llave => $ugrupo)
        {
            $horas[] = str_replace($hoy." ","",$ugrupo->faplicacionMon);
            //$arr_grupos[$llave]->faplicacionMon = subtstr_replace($hoy." ","",$ugrupo->faplicacionMon);
        }

        $resultado["montos"] = $arr_montos;
        $resultado["bancos"] = $bancos;
        $resultado["horas"] = $horas;
        return $resultado;
    }
    public function ListarHistorial($estado,$finicio,$ffin,$persona,$viatico)
    {   
        $variable = '';
        switch ($estado)
        {
            case 'SOLICITADO':
                $variable = "fsolicitudMon"; 
                break;
            case 'APROBADO':
                $variable = "faprobacionMon";
                break;
            case 'APLICADO':
                $variable = "faplicacionMon";
                break;
            case 'RENDIDO':
                $variable = "frendicionMon";
                break;
            case 'REASIGNADO':
                $variable = "frendicionMon";
                break;
        }
        $ffin = date("Y-m-d",strtotime($ffin."+ 1 days"));
        
        $persona_ = '=';
        if ($persona == '0') { $persona_ = '<>'; }

        $viatico_ = '=';
        if ($viatico == '0') { $viatico_ = '<>'; }

        $arr_montos = Monto::select('monto.*',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'valorDat as concepto','nombreUsu')
            ->join('persona','persona.idPersona','=','monto.Persona_idPersona')
            ->join('dato','dato.idDato','monto.Dato_idDato')
            ->join("usuario",'usuario.idUsuario','monto.Usuario_idUsuario')
            //->where('estadoMon','=',$estado)
            ->where('idPersona',$persona_, $persona)
            ->where('idDato',$viatico_, $viatico)
            ->where($variable,'>=',$finicio)
            ->where($variable,'<=',$ffin)
            ->where('activoMon',1)
            ->get();
         return $arr_montos;
    }

    public function ExportarHistorial($estado,$finicio,$ffin,$persona,$viatico)
    {
        ini_set('memory_limit', '-1');

        $variable = '';
        switch ($estado)
        {
            case 'SOLICITADO':
                $variable = "fsolicitudMon"; 
                break;
            case 'APROBADO':
                $variable = "faprobacionMon";
                break;
            case 'APLICADO':
                $variable = "faplicacionMon";
                break;
            case 'RENDIDO':
                $variable = "frendicionMon";
                break;
            case 'REASIGNADO':
                $variable = "frendicionMon";
                break;
        }
        $ffin = date("Y-m-d",strtotime($ffin."+ 1 days"));
        
        $persona_ = '=';
        if ($persona == '0') { $persona_ = '<>'; }

        $viatico_ = '=';
        if ($viatico == '0') { $viatico_ = '<>'; }

        $arr_montos = Monto::select('monto.*',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'valorDat as concepto','usuario.nombreUsu','dniPer','tipoAre','totalRen','rendicionRen','devueltoRen','saldoRen','descuentoRen','observacionRen','observacionRen','tencargado.nombreUsu as encargado')
            ->join('persona','persona.idPersona','=','monto.Persona_idPersona')
            ->join('area','area.idArea','=','persona.Area_idArea')
            ->join('dato','dato.idDato','monto.Dato_idDato')
            ->join("usuario",'usuario.idUsuario','monto.Usuario_idUsuario')
            ->leftJoin('rendicion','monto.Rendicion_idRendicion','rendicion.idRendicion')
            ->leftJoin('usuario as tencargado','rendicion.Encargado_idUsuario','tencargado.idUsuario')
            //->where('estadoMon','=',$estado)
            ->where('idPersona',$persona_, $persona)
            ->where('idDato',$viatico_, $viatico)
            ->where($variable,'>=',$finicio)
            ->where($variable,'<=',$ffin)
            ->where('activoMon',1)
            ->where('estadoMon',"<>","ANULADO")
            ->get();

        //ordenando los viaticos y separandolos en arrays de alimentacion y otros
        $montos = [];

        /*********************************************************************************************************/
        /*if($agrupar == 'true')
        {
            if($estado == "APLICADO")
            {
                $registros = [];

                foreach ($arr_montos as $umonto)
                {
                    if($umonto->concepto == "ALIMENTACION" || $umonto->concepto == "ALIMENTACION ADICIONAL")
                    {
                        if(!isset($registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]))
                        {
                            $fila = [];
                            //$fila["tip"] = "ALIMENTACION: ";
                            $fila["tip"] = $umonto->detalleMon.": S/".$umonto->totalMon;
                            //$fila["det"] = $umonto->detalleMon;
                            $fila["tot"] = $umonto->totalMon;
                            $fila["ren"] = $umonto->rendicionMon;
                            $fila["sal"] = round($umonto->totalMon - $umonto->rendicionMon,2);
                            //$fila["per"] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
                            //$fila["dni"] = $umonto->dniPer;
                            //$fila["apr"] = $umonto->nombreUsu;
                            //$fila["ban"] = $umonto->bancoPer;
                            //$fila["nro"] = $umonto->nbancoPer;
                            $fila["fec"] = $umonto->faplicacionMon;
                            $fila["fecr"] = $umonto->frendicionMon;
                            $fila["dis"] = $umonto->disposicionMon;
                            $fila["est"] = $umonto->disposicionMon;
                            //$fila["ren"] = 0;
                            $fila["dev"] = 0;
                            $fila["des"] = 0;
                            $fila["mon"] = [];
                            $fila["mon"][] = $umonto;

                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon] = $fila;
                        }
                        else
                        {
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["ren"] += $umonto->rendicionMon;
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["tot"] += $umonto->totalMon;
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["sal"] += round($umonto->totalMon - $umonto->rendicionMon,2);
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["tip"] .= " - ".$umonto->detalleMon.": S/".$umonto->totalMon;
                            $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon]["mon"][] = $umonto;
                        }
                    }
                    else
                    {
                        if(!isset($registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]))
                        {
                            $fila = [];
                            //$fila["tip"] = "OTROS: ";
                            $fila["tip"] = $umonto->detalleMon.": S/".$umonto->totalMon;
                            //$fila["det"] = $umonto->detalleMon;
                            $fila["tot"] = $umonto->totalMon;
                            $fila["ren"] = $umonto->rendicionMon;
                            $fila["sal"] = round($umonto->totalMon - $umonto->rendicionMon,2);
                            //$fila["per"] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
                            //$fila["dni"] = $umonto->dniPer;
                            //$fila["apr"] = $umonto->nombreUsu;
                            //$fila["ban"] = $umonto->bancoPer;
                            //$fila["nro"] = $umonto->nbancoPer;
                            $fila["fec"] = $umonto->faplicacionMon;
                            $fila["fecr"] = $umonto->frendicionMon;
                            $fila["dis"] = $umonto->disposicionMon;
                            $fila["dev"] = 0;
                            $fila["des"] = 0;
                            $fila["mon"] = [];
                            $fila["mon"][] = $umonto;

                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon] = $fila;
                        }
                        else
                        {
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["ren"] += $umonto->rendicionMon;
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["tot"] += $umonto->totalMon;
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["sal"] += round($umonto->totalMon - $umonto->rendicionMon,2);
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["tip"] .= " - ".$umonto->detalleMon.": S/".$umonto->totalMon;
                            $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon]["mon"][] = $umonto;
                        }
                    }
                }
                $montos = [];
                foreach($registros as $uregistro)
                {
                    $montos[] = $uregistro;
                }
            }
        }
        else
        {
            foreach($arr_montos as $umonto)
            {
                $montos[] = $umonto;
            }
        }*/



        /**********************************************************************************************************/
        
        //ordenando los viaticos y separandolos en arrays de alimentacion y otros
        $registros = [];
        $unitarios = [];

        foreach ($arr_montos as $umonto)
        {
            if($umonto->concepto == "ALIMENTACION" || $umonto->concepto == "ALIMENTACION ADICIONAL")
            {
                if(!isset($registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon."-".$umonto->Persona_idPersona]))
                {
                    $fila = [];
                    $fila["tip"] = "ALIMENTACION";
                    $fila["det"] = $umonto->detalleMon.": S/".$umonto->totalMon;
                    $fila["est"] = $umonto->estadoMon;
                    $fila["tot"] = $umonto->totalMon;
                    $fila["per"] = $umonto->trabajadorPer;
                    $fila["dni"] = $umonto->dniPer;
                    $fila["apr"] = $umonto->nombreUsu;
                    $fila["ren"] = $umonto->rendicionMon;
                    $fila["sal"] = round($umonto->totalMon - $umonto->rendicionMon,2);
                    $fila["dis"] = $umonto->disposicionMon;
                    $fila["fes"] = "";
                    $fila["fea"] = $umonto->faprobacionMon;
                    $fila["fed"] = $umonto->faplicacionMon;
                    $fila["fer"] = $umonto->frendicionMon;
		            $fila["are"] = $umonto->tipoAre;
                    $fila["dev"] = 0;
                    $fila["des"] = 0;
                    $fila["obs"] = "";
                    $fila["enc"] = "";

                    if($umonto->Rendicion_idRendicion != null && $umonto->Rendicion_idRendicion != 0)
                    {
                        $fila["tot"] = $umonto->totalRen;
                        $fila["ren"] = $umonto->rendicionRen;
                        $fila["sal"] = $umonto->saldoRen - $umonto->devueltoRen - $umonto->descuentoRen;
                        $fila["dev"] = $umonto->devueltoRen;
                        $fila["des"] = $umonto->descuentoRen;
                        $fila["obs"] = $umonto->observacionRen;
                        $fila["enc"] = $umonto->encargado;
                    }
                    
                    //$alimentaciones["p".$umonto->Persona_idPersona] = $fila;
                    $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon."-".$umonto->Persona_idPersona] = $fila;
                }
                else
                {
                    $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon."-".$umonto->Persona_idPersona]["det"] .= $umonto->detalleMon.": S/".$umonto->totalMon;
                    
                    if($umonto->Rendicion_idRendicion == null || $umonto->Rendicion_idRendicion == 0)
                    {
                        $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon."-".$umonto->Persona_idPersona]["tot"] += $umonto->totalMon;
                        $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon."-".$umonto->Persona_idPersona]["ren"] += $umonto->rendicionMon;
                        $registros["a".$umonto->faplicacionMon."-".$umonto->disposicionMon."-".$umonto->Persona_idPersona]["sal"] += round($umonto->totalMon - $umonto->rendicionMon,2);
                    }
                }
            }
            else
            {
                if(!isset($registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon."-".$umonto->Persona_idPersona]))
                {
                    $fila = [];
                    $fila["tip"] = "OTROS GASTOS";
                    $fila["det"] = $umonto->detalleMon.": S/".$umonto->totalMon;
                    $fila["est"] = $umonto->estadoMon;
                    $fila["tot"] = $umonto->totalMon;
                    $fila["per"] = $umonto->trabajadorPer;
                    $fila["dni"] = $umonto->dniPer;
                    $fila["apr"] = $umonto->nombreUsu;
                    $fila["ren"] = $umonto->rendicionMon;
                    $fila["sal"] = round($umonto->totalMon - $umonto->rendicionMon,2);
                    $fila["dis"] = $umonto->disposicionMon;
                    $fila["fes"] = "";
                    $fila["fea"] = $umonto->faprobacionMon;
                    $fila["fed"] = $umonto->faplicacionMon;
                    $fila["fer"] = $umonto->frendicionMon;
		            $fila["are"] = $umonto->tipoAre;
                    $fila["dev"] = 0;
                    $fila["des"] = 0;
                    $fila["obs"] = "";
                    $fila["enc"] = "";

                    if($umonto->Rendicion_idRendicion != null && $umonto->Rendicion_idRendicion != 0)
                    {
                        $fila["tot"] = $umonto->totalRen;
                        $fila["ren"] = $umonto->rendicionRen;
                        $fila["sal"] = $umonto->saldoRen - $umonto->devueltoRen - $umonto->descuentoRen;
                        $fila["dev"] = $umonto->devueltoRen;
                        $fila["des"] = $umonto->descuentoRen;
                        $fila["obs"] = $umonto->observacionRen;
                        $fila["enc"] = $umonto->encargado;
                    }

                    //$otros["p".$umonto->Persona_idPersona] = $fila;
                    $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon."-".$umonto->Persona_idPersona] = $fila;
                }
                else
                {
                    $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon."-".$umonto->Persona_idPersona]["det"] .= $umonto->detalleMon.": S/".$umonto->totalMon;
                    
                    if($umonto->Rendicion_idRendicion == null || $umonto->Rendicion_idRendicion == 0)
                    {
                        $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon."-".$umonto->Persona_idPersona]["tot"] += $umonto->totalMon;
                        $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon."-".$umonto->Persona_idPersona]["ren"] += $umonto->rendicionMon;
                        $registros["o".$umonto->faplicacionMon."-".$umonto->disposicionMon."-".$umonto->Persona_idPersona]["sal"] += round($umonto->totalMon - $umonto->rendicionMon,2);
                    }
                }
            }
            //agregando el registro bruto
            $fila = [];
            $fila["tip"] = $umonto->concepto;
            $fila["det"] = $umonto->detalleMon.": S/".$umonto->totalMon;
            $fila["est"] = $umonto->estadoMon;
            $fila["tot"] = $umonto->totalMon;
            $fila["per"] = $umonto->trabajadorPer;
            $fila["dni"] = $umonto->dniPer;
            $fila["apr"] = $umonto->nombreUsu;
            $fila["ren"] = $umonto->rendicionMon;
            $fila["sal"] = round($umonto->totalMon - $umonto->rendicionMon,2);
            $fila["dis"] = $umonto->disposicionMon;
            $fila["fes"] = $umonto->fsolicitudMon;
            $fila["fea"] = $umonto->faprobacionMon;
            $fila["fed"] = $umonto->faplicacionMon;
            $fila["fer"] = $umonto->frendicionMon;
            $fila["are"] = $umonto->tipoAre;
            $fila["dev"] = "-";
            $fila["des"] = "-";
            $fila["obs"] = "";
            $fila["enc"] = "";
            $unitarios[] = $fila;
        }
        
        $general = [];
        
        $todos = [];
        $todos["unitarios"] = $unitarios;
        $todos["agrupados"] = $registros;

        $export = new MontosExport($todos);

        $nombre = 'Gastos-Viaje.xlsx';

        return Excel::download($export, $nombre);
    }

    /*public function ListarSelectPersona()
    {
        $arr_personas = Persona::join('monto','monto.Persona_idPersona','=','persona.idPersona')
            ->select('idPersona','nombrePer','paternoPer','maternoPer')
            ->where('activoPer',1)
            ->orderBy('nombrePer','asc')
            ->get();
        return $arr_personas;
    }*/

    public function ListarHistorialConvoy($convoy)
    {   

        /*$variable = '';
        switch ($estado)
        {
            case 'SOLICITADO':
                $variable = "fsolicitudMon"; 
                break;
            case 'APROBADO':
                $variable = "faprobacionMon";
                break;
            case 'APLICADO':
                $variable = "faplicacionMon";
                break;
            case 'RENDIDO':
                $variable = "frendicionMon";
                break;
            case 'REASIGNADO':
                $variable = "frendicionMon";
                break;
        }
        $ffin = date("Y-m-d",strtotime($ffin."+ 1 days"));
        
        $persona_ = '=';
        if ($persona == '0') { $persona_ = '<>'; }

        $viatico_ = '=';
        if ($viatico == '0') { $viatico_ = '<>'; }*/

        $arr_montos = Monto::select('monto.*',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'valorDat as concepto','nombreEve')
            ->join('persona','persona.idPersona','=','monto.Persona_idPersona')
            ->join('dato','dato.idDato','monto.Dato_idDato')
            ->leftJoin('evento','evento.idEvento','monto.Evento_idEvento')
            ->join("servicio",'servicio.idServicio','monto.Servicio_idServicio')
            //->where('estadoMon','=',$estado) 
            ->where('Convoy_idConvoy',$convoy)
            //->where('activoMon',1)
            ->orderBy('fsolicitudMon')
            ->orderBy('Persona_idPersona')
            ->orderBy('concepto')
            ->get();

        $grupos = [];
        $adicionales = [];
        foreach($arr_montos as $umonto)//agrupando por hora para ver que recorrido se ha solicitado
        {
            if($umonto->adicionalMon == 1)
            {
                $adicionales[] = $umonto;
            }
            else
            {
                $fecha = $umonto->fsolicitudMon;
                $grupos["f".$fecha][] = $umonto;
            }
        }

        $respuesta = [];
        foreach($grupos as $ugrupo)
        {
            $respuesta[] = $ugrupo;
        }

        $respuesta[] = $adicionales;//garantizar que los adicionales se esten guardando al final


        return $respuesta;
    }

    public function ListarControlConvoy($tipo,$convoy)
    {   
        $dias_sem = ["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];
        $obj_tipo = Dato::select('idDato')
            ->where('valorDat',$tipo)
            ->where('tipoDat',"VIATICO")
            ->where('grupoDat',"PERSONAL")
            ->first();

        $obj_convoy = DB::table('convoy')->select('*')
            ->where('idConvoy',$convoy)
            ->first();

        //Generando fechas en sus arrays
        $finicio = date("Y-m-d",strtotime($obj_convoy->finicioCon));
        $ftermino = date("Y-m-d",strtotime($obj_convoy->fterminoCon));

        $fechas = [];
        $arr_fechas = [];
        $dias = [];
        $actual = $finicio;
        $recorrer = true;
        $contador = 0;//cantidad de dias del convoy
        while($recorrer)
        {
            if($actual > $ftermino)
            {
                $recorrer = false;
                break;
            }

            //estableciendo el array de fechas para el cuerpo
            $contador++;
            $fechas[] = $actual;
            $arr_fechas["f".$actual] = ["a"=>null,"s"=>null,"m"=>null,"p"=>false];
            
            //estableciendo el array de cabecera
            $dia = [];
            $dia["f"] = $actual;//fecha
            $dia_sem = date('w', strtotime($actual));
            $dia["n"] = $dias_sem[$dia_sem];
            $dia["d"] = substr($actual, 8, 2);//fecha
            if($obj_convoy->roundtripCon >= $contador)
                $dia["i"] = true;//ideal
            else
                $dia["i"] = false;//excedido
            $dias[] =  $dia;

            $actual = date("Y-m-d",strtotime($actual."+ 1 days"));
        }
        
        $arr_servicios = DB::table('servicio')->select('idServicio','Persona_idPersona','fcambioSer')
            ->where('Convoy_idConvoy',$convoy)
            ->where('estadoSer','<>','ANULADO')
            ->where('estadoSer','<>','FACTURADO')
            ->where('estadoSer','<>','PAGADO')
            ->where('estadoSer','<>','REEMPLAZADO')
            ->get();

        //Generando personas en sus arrays
        $personas = [];
        $arr_personas = [];
        $servicios = [];
        foreach($arr_servicios as $uservicio)
        {
            $personas[] = $uservicio->Persona_idPersona;
            //$personas[] = $uservicio->Reemplazo_idPersona;
            $servicios[] = $uservicio->idServicio;

            //generando el array del cuerpo
            $arr_personas["p".$uservicio->Persona_idPersona] = [];
            $arr_personas["p".$uservicio->Persona_idPersona]["f"] = $arr_fechas;
            $arr_personas["p".$uservicio->Persona_idPersona]["s"] = $uservicio->idServicio;
            $arr_personas["p".$uservicio->Persona_idPersona]["c"] = $uservicio->fcambioSer;
        }

        //Ordenando datos
        $arr_asistencias = DB::table('asistencia')->select('idAsistencia','tareoAsi','Alimentacion_idMonto','estadoMon','monto.Servicio_idServicio','asistencia.Persona_idPersona','fechaAsi')
            ->leftJoin('monto','asistencia.Alimentacion_idMonto','=','monto.idMonto')
            ->whereIn('asistencia.Persona_idPersona',$personas)
            ->whereIn('fechaAsi',$fechas)
            ->get();

        //$montos = [];
        foreach($arr_asistencias as $uasistencia)
        {
            //$montos[] = $uasistencia->Alimentacion_idMonto;
            $arr_personas["p".$uasistencia->Persona_idPersona]["f"]["f".$uasistencia->fechaAsi]["a"] = $uasistencia->tareoAsi;//asistencia
            $arr_personas["p".$uasistencia->Persona_idPersona]["f"]["f".$uasistencia->fechaAsi]["s"] = $uasistencia->Servicio_idServicio;//servicio
            $arr_personas["p".$uasistencia->Persona_idPersona]["f"]["f".$uasistencia->fechaAsi]["m"] = $uasistencia->Alimentacion_idMonto;//monto
            if(in_array($uasistencia->Servicio_idServicio,$servicios))
                $arr_personas["p".$uasistencia->Persona_idPersona]["f"]["f".$uasistencia->fechaAsi]["p"] = true;//propio
            else
                $arr_personas["p".$uasistencia->Persona_idPersona]["f"]["f".$uasistencia->fechaAsi]["p"] = false;//propio
        }

        $actuales = [];
        foreach($arr_personas as $llave => $upersona)
        {
            if($upersona["c"] == null)
                continue;

            $cambio = date("Y-m-d",strtotime($upersona["c"]));
            $inicio = $finicio;
            $actual = $finicio;
            $termino = $ftermino;

            $recorrer = true;
            while($recorrer)
            {
                if($cambio < $inicio || $cambio > $termino)//si esta fuera de las fechas de inicio y termino
                {
                    $recorrer = false;
                    break;
                }
                if($cambio == $actual)//si es la fecha actual ya no avanza
                {
                    $recorrer = false;
                    break;
                }
                if($actual > $termino)
                {
                    $recorrer = false;
                    break;
                }
                else
                {
                    $arr_personas[$llave]["f"]["f".$actual]["m"] = -1;
                    $actuales[] = $actual;
                    $actual = date("Y-m-d",strtotime($actual."+ 1 days"));
                }
            }
        }

        $respuesta = [];
        $respuesta["cabecera"] = $dias;
        $respuesta["cuerpo"] = $arr_personas;
        
        return $respuesta;

        /*$arr_alimentaciones = Monto::select('monto.*',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'valorDat as concepto')
            ->join('persona','persona.idPersona','=','monto.Persona_idPersona')
            ->join('dato','dato.idDato','monto.Dato_idDato')
            ->join("servicio",'servicio.idServicio','monto.Servicio_idServicio')
            //->where('estadoMon','=',$estado)
            ->where('Convoy_idConvoy',$convoy)
            //->where('activoMon',1)
            ->orderBy('fsolicitudMon')
            ->orderBy('Persona_idPersona')
            ->orderBy('concepto')
            ->get();*/


        /*$variable = '';
        switch ($estado)
        {
            case 'SOLICITADO':
                $variable = "fsolicitudMon"; 
                break;
            case 'APROBADO':
                $variable = "faprobacionMon";
                break;
            case 'APLICADO':
                $variable = "faplicacionMon";
                break;
            case 'RENDIDO':
                $variable = "frendicionMon";
                break;
            case 'REASIGNADO':
                $variable = "frendicionMon";
                break;
        }
        $ffin = date("Y-m-d",strtotime($ffin."+ 1 days"));
        
        $persona_ = '=';
        if ($persona == '0') { $persona_ = '<>'; }

        $viatico_ = '=';
        if ($viatico == '0') { $viatico_ = '<>'; }*/

        /*$arr_montos = Monto::select('monto.*',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'),'valorDat as concepto')
            ->join('persona','persona.idPersona','=','monto.Persona_idPersona')
            ->join('dato','dato.idDato','monto.Dato_idDato')
            ->join("servicio",'servicio.idServicio','monto.Servicio_idServicio')
            //->where('estadoMon','=',$estado) 
            ->where('Convoy_idConvoy',$convoy)
            //->where('activoMon',1)
            ->orderBy('fsolicitudMon')
            ->orderBy('Persona_idPersona')
            ->orderBy('concepto')
            ->get();

        $grupos = [];
        $adicionales = [];
        foreach($arr_montos as $umonto)//agrupando por hora para ver que recorrido se ha solicitado
        {
            if($umonto->adicionalMon == 1)
            {
                $adicionales[] = $umonto;
            }
            else
            {
                $fecha = $umonto->fsolicitudMon;
                $grupos["f".$fecha][] = $umonto;
            }
        }

        $respuesta = [];
        foreach($grupos as $ugrupo)
        {
            $respuesta[] = $ugrupo;
        }

        $respuesta[] = $adicionales;//garantizar que los adicionales se esten guardando al final*/


        //return $respuesta;
    }

    public function ListarControlLibre($tipo,$persona)
    {
        $dias_sem = ["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];
        $obj_tipo = Dato::select('idDato')
            ->where('valorDat',$tipo)
            ->where('tipoDat',"VIATICO")
            ->where('grupoDat',"PERSONAL")
            ->first();

        //Generando fechas en sus arrays
        $hoy = date("Y-m-d");
        $finicio = date("Y-m-d",strtotime($hoy."- 5 days"));
        $ftermino = date("Y-m-d",strtotime($hoy."+ 8 days"));
        $mesVigente = date("n");
        $mesPosterior = ($mesVigente == 12) ? 1 : $mesVigente + 1;
 
        $fechas = [];
        $arr_fechas = [];
        $dias = [];
        $actual = $finicio;
        $recorrer = true;
        //$contador = 0;//cantidad de dias del convoy

        while($recorrer)
        {
            if($actual > $ftermino)
            {
                $recorrer = false;
                break;
            }

            $mesActual = date("n",strtotime($actual));
            if($mesActual != $mesVigente && $mesActual != $mesPosterior)//Verifica si es un mes pasado si lo es continua al siguiente registro
            {
                $actual = date("Y-m-d",strtotime($actual."+ 1 days"));
                continue;
            }

            //estableciendo el array de fechas para el cuerpo
            //$contador++;
            $fechas[] = $actual;
            $arr_fechas["f".$actual] = ["a"=>null,"s"=>null,"m"=>null,"p"=>false];// asistencia,servicio,monto,propio

            //estableciendo el array de cabecera
            $dia = [];
            $dia["f"] = $actual;//fecha
            $dia_sem = date('w', strtotime($actual));
            $dia["n"] = $dias_sem[$dia_sem];
            $dia["d"] = substr($actual, 8, 2);//fecha

            $dias[] =  $dia;

            $actual = date("Y-m-d",strtotime($actual."+ 1 days"));
        }

        //Generando personas en sus arrays
        $personas = explode(",", $persona);
        
        $arr_seleccionados = DB::table('persona')->select('idPersona','fingresoPer',DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer'))
            ->whereIn('idPersona',$personas)            
            ->get();

        $arr_personas = [];
        foreach($arr_seleccionados as $upersona)
        {
            //generando el array del cuerpo
            $arr_personas["p".$upersona->idPersona] = [];
            $arr_personas["p".$upersona->idPersona]["f"] = $arr_fechas;
            $arr_personas["p".$upersona->idPersona]["p"] = $upersona->trabajadorPer;
            $arr_personas["p".$upersona->idPersona]["c"] = null;//fecha cambio o fecha de ingreso
        }

        //Ordenando datos
        $arr_asistencias = DB::table('asistencia')->select('idAsistencia','tareoAsi','Alimentacion_idMonto','estadoMon','monto.Servicio_idServicio','asistencia.Persona_idPersona','fechaAsi')
            ->leftJoin('monto','asistencia.Alimentacion_idMonto','=','monto.idMonto')
            ->whereIn('asistencia.Persona_idPersona',$personas)
            ->whereIn('fechaAsi',$fechas)
            ->get();

        //$montos = [];
        foreach($arr_asistencias as $uasistencia)
        {
            //$montos[] = $uasistencia->Alimentacion_idMonto;

            $arr_personas["p".$uasistencia->Persona_idPersona]["f"]["f".$uasistencia->fechaAsi]["a"] = $uasistencia->tareoAsi;//asistencia
            $arr_personas["p".$uasistencia->Persona_idPersona]["f"]["f".$uasistencia->fechaAsi]["s"] = $uasistencia->Servicio_idServicio;//servicio
            $arr_personas["p".$uasistencia->Persona_idPersona]["f"]["f".$uasistencia->fechaAsi]["m"] = $uasistencia->Alimentacion_idMonto;//monto

            if($uasistencia->Servicio_idServicio == null)
                $arr_personas["p".$uasistencia->Persona_idPersona]["f"]["f".$uasistencia->fechaAsi]["p"] = false;//propio
            else
                $arr_personas["p".$uasistencia->Persona_idPersona]["f"]["f".$uasistencia->fechaAsi]["p"] = true;//propio
        }

        $respuesta = [];
        $respuesta["cabecera"] = $dias;
        $respuesta["cuerpo"] = $arr_personas;
        
        return $respuesta;
    }

    public function Procesar(Request $request)
    {   
        $umonto = json_decode($request->monto);

        $fecha_hora = date("Y-m-d H:i:s");
        
        foreach ($umonto as $monto)
        {
            $obj_monto = (object)[];
            //$obj_monto->estadoMon = $monto->estadoMon;
            if($monto->estadoMon == "APROBADO")
            {
                $obj_monto->faprobacionMon = $fecha_hora;
                $obj_monto->estadoMon = "APROBADO";
                Monto::where('idMonto', $monto->idMonto)->where('estadoMon','SOLICITADO')->where('activoMon',1)->update((array)$obj_monto);
            }
            elseif($monto->estadoMon == "APLICADO")
            {
                $obj_monto->estadoMon = "APLICADO";
                $obj_monto->faplicacionMon = $fecha_hora;
                Monto::where('idMonto', $monto->idMonto)->where('estadoMon','APROBADO')->where('activoMon',1)->update((array)$obj_monto);
            }
            elseif($monto->estadoMon == "ANULADO")
            {
                $obj_monto->estadoMon = "ANULADO";
                $obj_monto->fanulacionMon = $fecha_hora;
                Monto::where('idMonto', $monto->idMonto)->where('estadoMon','SOLICITADO')->where('activoMon',1)->update((array)$obj_monto);
            }

            //Monto::where('idMonto', $monto->idMonto)->('estadoMon','SOLICITADO')->update((array)$obj_monto);
        }
        $hora = substr($fecha_hora, 11, 8);
        return $hora;
    }
    public function ProcesarUnidad(Request $request)
    {
        $monto = json_decode($request->monto);
        $obj_monto = (object)[];
        $obj_monto->estadoMon = $monto->estadoMon;
        $obj_monto->observacionMon = $monto->observacionMon;
        $obj_monto->frendicionMon = date("Y-m-d H:i:s");
        /*if($monto->estadoMon == "REASIGNADO")
            $obj_monto->reasignadoMon = $monto->reasignadoMon;*/

        Monto::where('idMonto', $monto->idMonto)->update((array)$obj_monto);
    }
    public function GuardarRendicion(Request $request,$usuario)
    {
        /*$monto = json_decode($request->monto);
        $obj_monto = (object)[];
        $obj_monto->estadoMon = $monto->estadoMon;
        $obj_monto->observacionMon = $monto->observacionMon;
        $obj_monto->frendicionMon = date("Y-m-d H:i:s");
        if($monto->estadoMon == "REASIGNADO")
            $obj_monto->reasignadoMon = $monto->reasignadoMon;

        Monto::where('idMonto', $monto->idMonto)->update((array)$obj_monto);*/

        $ahora = date("Y-m-d H:i:s");

        $rendicion = json_decode($request->rendicion);


        //verificar si se ha descontado o no la rendición , también verificar si la rendición ha sidoi 
        $obj_rendicion = new Rendicion();
        $obj_rendicion->fechaRen = $ahora;
        $obj_rendicion->totalRen = $rendicion->tot;
        $obj_rendicion->rendicionRen = $rendicion->ren;
        $obj_rendicion->saldoRen = $rendicion->sal;
        $obj_rendicion->devueltoRen = $rendicion->dev;
        $obj_rendicion->descuentoRen = $rendicion->des;
        $obj_rendicion->disposicionRen = $rendicion->dis;
        $obj_rendicion->observacionRen = $rendicion->obs;
        $obj_rendicion->Encargado_idUsuario = $usuario;

        $obj_rendicion->save();

        foreach($rendicion->mon as $umonto)
        {
            $obj_monto = (object)[];
            $obj_monto->estadoMon = "RENDIDO";
            //$obj_monto->observacionMon = $monto->observacionMon;
            $obj_monto->frendicionMon = $ahora;
            $obj_monto->rendicionMon = $umonto->rendicionMon;
            $obj_monto->saldoMon = $umonto->saldoMon;
            $obj_monto->Rendicion_idRendicion = $obj_rendicion->idRendicion;
            /*if($monto->estadoMon == "REASIGNADO")
                $obj_monto->reasignadoMon = $monto->reasignadoMon;*/

            Monto::where('idMonto', $umonto->idMonto)->update((array)$obj_monto);
        }
        return $obj_rendicion->idRendicion;

    }
    public function GuardarParcial(Request $request)
    {
        $ahora = date("Y-m-d H:i:s");

        $rendicion = json_decode($request->rendicion);

        foreach($rendicion->mon as $umonto)
        {
            if($umonto->rendicionMon == "")
                continue;
            $obj_monto = (object)[];
            //$obj_monto->estadoMon = "RENDIDO";
            //$obj_monto->observacionMon = $monto->observacionMon;
            //$obj_monto->frendicionMon = $ahora;
            $obj_monto->rendicionMon = $umonto->rendicionMon;
            $obj_monto->saldoMon = $umonto->saldoMon;
            //$obj_monto->Rendicion_idRendicion = $obj_rendicion->idRendicion;

            Monto::where('idMonto', $umonto->idMonto)->update((array)$obj_monto);
        }
        return;
    }
    public function Guardar($usuario, Request $request)
    {   
        $umonto = json_decode($request->monto);
        
        var_dump($umonto);
        foreach ($umonto as $monto)
        {
            $obj_monto = new Monto();
            $obj_monto->detalleMon = $monto->detalle;
            $obj_monto->Dato_idDato = $monto->idDato;
            $obj_monto->totalMon = $monto->monto;
            $obj_monto->Persona_idPersona = $monto->idPersona;
            $obj_monto->fechaMon = ($monto->fecha == "0000-00-00") ? null : $monto->fecha;
            $obj_monto->disposicionMon = $monto->tipo;
            $obj_monto->estadoMon = "SOLICITADO";
            $obj_monto->tipoMon = "VIATICO";
            $obj_monto->activoMon = 1;
            $obj_monto->fsolicitudMon = date("Y-m-d H:i:s");
            $obj_monto->Usuario_idUsuario = $usuario;
            
            $obj_monto->save();
        }
    }
    public function Anular(Request $request)
    {   
        $jmonto = json_decode($request->monto);

        $obj_monto = (object)[];
        $obj_monto->estadoMon = "ANULADO";

        $afectados = DB::table('monto')
              ->where('idMonto', $jmonto->idMonto)
              ->whereIn('estadoMon',["APROBADO"])
              ->update((array)$obj_monto);

        
        $obj_asistencia = (object)[];
        $obj_asistencia->Alimentacion_idMonto = null;

        $actualizados = DB::table('asistencia')
              ->where('Alimentacion_idMonto', $jmonto->idMonto)
              ->update((array)$obj_asistencia);
              
        return $afectados;


        /*var_dump($umonto);
        foreach ($umonto as $monto)
        {
            $obj_monto = new Monto();
            $obj_monto->detalleMon = $monto->detalle;
            $obj_monto->Dato_idDato = $monto->idDato;
            $obj_monto->totalMon = $monto->monto;
            $obj_monto->Persona_idPersona = $monto->idPersona;
            $obj_monto->fechaMon = ($monto->fecha == "0000-00-00") ? null : $monto->fecha;
            $obj_monto->disposicionMon = $monto->tipo;
            $obj_monto->estadoMon = "SOLICITADO";
            $obj_monto->tipoMon = "VIATICO";
            $obj_monto->activoMon = 1;
            $obj_monto->fsolicitudMon = date("Y-m-d H:i:s");
            $obj_monto->Usuario_idUsuario = $usuario;
            
            $obj_monto->save();
        }*/
    }
    public function GuardarAdicional($usuario, Request $request)//Ricardo
    {
        //agrega montos adicionales al servicio de convoys
        $umonto = json_decode($request->monto);

        $montos = [];
        foreach($umonto->servicio as $uservicio)
        {
            $obj_monto = new Monto();
            $obj_monto->detalleMon = $umonto->concepto->valorDat." (Adicional) del Servicio ".$uservicio->idServicio.": ".$umonto->detalle;
            $obj_monto->Dato_idDato = $umonto->concepto->idDato;
            $obj_monto->Evento_idEvento = $umonto->evento->idEvento;
            $obj_monto->totalMon = $umonto->total;
            $obj_monto->Persona_idPersona = $uservicio->Persona_idPersona;
            //$obj_monto->fechaMon = ($umonto->fecha == "0000-00-00") ? null : $umonto->fecha;
            $obj_monto->fechaMon = null;
            $obj_monto->disposicionMon = $umonto->disposicion;
            $obj_monto->estadoMon = "SOLICITADO";
            $obj_monto->tipoMon = "VIATICO";
            $obj_monto->activoMon = 1;
            $obj_monto->fsolicitudMon = date("Y-m-d H:i:s");
            $obj_monto->Usuario_idUsuario = $usuario;
            $obj_monto->Servicio_idServicio = $uservicio->idServicio;
            $obj_monto->adicionalMon = true;

            $obj_monto->save();

            $obj_monto->trabajadorPer = $uservicio->trabajadorPer;
            $obj_monto->concepto = $umonto->concepto->valorDat;

            $montos[] = $obj_monto;
        }

        return $montos;
    }
    public function GuardarControl($usuario,$tipo, Request $request)//Ricardo
    {
        //agrega montos adicionales al servicio de convoys
        $jconvoy = json_decode($request->convoy);
        $jalimentaciones = json_decode($request->alimentaciones);
        $monto = $request->monto;

        $obj_convoy = DB::table('convoy')
            ->select('alimentacionRut')
            ->join('ruta','convoy.Ruta_idRuta','ruta.idRuta')
            ->where('idConvoy',$jconvoy->idConvoy)
            ->first();

        $obj_dato = DB::table('dato')
            ->select('idDato')
            ->where('tipoDat',"VIATICO")
            ->where('grupoDat',"PERSONAL")
            ->where('valorDat',$tipo)
            ->first();

        $hoy = date("Y-m-d");
        $ahora = date("Y-m-d H:i:s");
        //alimentacion por persona
        foreach($jalimentaciones->cuerpo as $llave => $upersona)
        {
            $idPersona = substr($llave, 1);
            $fechas = [];
            $montos = [];
            $asistencias = [];
            $idServicio = $upersona->s;
            //Buscando las fechas seleccionadas para ingresar la alimentación
            foreach($upersona->f as $llave2 => $udia)
            {
                if($udia->m == '0')
                {
                    $fechas[] = substr($llave2, 1);
                    $montos[$llave2] = null;
                    $asistencias[$llave2] = null;
                }
            }
            if(count($fechas) == 0)
                continue;

            $arr_asistencias = DB::table('asistencia')
                    ->select('idAsistencia','fechaAsi','Alimentacion_idMonto')
                    ->whereIn('fechaAsi',$fechas)
                    ->where('Persona_idPersona',$idPersona)
                    ->get();
            
            //buscando las asistencias en las fechas solicitadas para ver si se solicito viatico
            foreach($arr_asistencias as $uasistencia)
            {
                $montos["f".$uasistencia->fechaAsi] = $uasistencia->Alimentacion_idMonto;
                $asistencias["f".$uasistencia->fechaAsi] = $uasistencia->idAsistencia;
            }

            //guardando la asistencia (si no existe)
            foreach($fechas as $pos => $ufecha)
            {
                //guardando el registro de asistencia
                if($asistencias["f".$ufecha] == null)
                {
                    $obj_asistencia = new Asistencia();
                    $obj_asistencia->fechaAsi = $ufecha;
                    $obj_asistencia->tareoAsi = "A";
                    $obj_asistencia->Persona_idPersona = $idPersona;
                    $obj_asistencia->servicioAsi = 1;

                    $obj_asistencia->save();

                    $asistencias["f".$ufecha] = $obj_asistencia->idAsistencia;
                }
            }

            $tfechas = implode(", ", $fechas);
            $obj_monto = new Monto();
            $obj_monto->detalleMon = "Alimentación del Servicio ".$idServicio.": ".count($fechas)." días (".$tfechas.")";
            $obj_monto->Dato_idDato = $obj_dato->idDato;
            //$obj_monto->totalMon = $obj_convoy->alimentacionRut * count($fechas);
            $obj_monto->totalMon = $monto * count($fechas);
            $obj_monto->Persona_idPersona = $idPersona;
            $obj_monto->fechaMon = date("Y-m-d");
            $obj_monto->disposicionMon = "DEPOSITO";
            $obj_monto->estadoMon = "APROBADO";
            $obj_monto->activoMon = 1;
            $obj_monto->fsolicitudMon = $ahora;
            $obj_monto->faprobacionMon = $ahora;
            $obj_monto->Usuario_idUsuario = $usuario;
            $obj_monto->Servicio_idServicio = $idServicio;
            $obj_monto->tipoMon = "VIATICO";
            $obj_monto->save();

            DB::table('asistencia')
                ->whereIn('idAsistencia', $asistencias)
                ->update(['Alimentacion_idMonto' => $obj_monto->idMonto]);

        }
        return;
    }
    public function GuardarControlLibre($usuario,$tipo, Request $request)//Ricardo
    {
        //agrega montos adicionales al servicio de convoys
        $jalimentaciones = json_decode($request->alimentaciones);
        $alimentacion = $request->monto;

        if($alimentacion == 30)
            $alimentacion = 35;
        /*$obj_convoy = DB::table('convoy')
            ->select('alimentacionRut')
            ->join('ruta','convoy.Ruta_idRuta','ruta.idRuta')
            ->where('idConvoy',$jconvoy->idConvoy)
            ->first();*/

        $obj_dato = DB::table('dato')
            ->select('idDato')
            ->where('tipoDat',"VIATICO")
            ->where('grupoDat',"PERSONAL")
            ->where('valorDat',$tipo)
            ->first();

        $hoy = date("Y-m-d");
        $ahora = date("Y-m-d H:i:s");
        //alimentacion por persona
        foreach($jalimentaciones->cuerpo as $llave => $upersona)
        {
            $idPersona = substr($llave, 1);
            $fechas = [];
            $seleccionados = [];
            $montos = [];
            $asistencias = [];
            //$idServicio = $upersona->s;
            //Buscando las fechas seleccionadas para ingresar la alimentación
            foreach($upersona->f as $llave2 => $udia)
            {
                if($udia->m == '0')
                {
                    $fechas[] = substr($llave2, 1);
                    $montos[$llave2] = null;
                    $asistencias[$llave2] = null;
                }
            }
            if(count($fechas) == 0)
                continue;
            
            $arr_asistencias = DB::table('asistencia')
                    ->select('idAsistencia','fechaAsi','Alimentacion_idMonto')
                    ->whereIn('fechaAsi',$fechas)
                    ->where('Persona_idPersona',$idPersona)
                    ->get();
            
            //buscando las asistencias en las fechas solicitadas para ver si se solicito viatico
            foreach($arr_asistencias as $uasistencia)
            {
                $montos["f".$uasistencia->fechaAsi] = $uasistencia->Alimentacion_idMonto;
                $asistencias["f".$uasistencia->fechaAsi] = $uasistencia->idAsistencia;
            }

            //guardando la asistencia (si no existe) y agregando las fechas que no tienen monto asignado
            foreach($fechas as $pos => $ufecha)
            {
                //guardando el registro de asistencia
                if($asistencias["f".$ufecha] == null)
                {
                    $obj_asistencia = new Asistencia();
                    $obj_asistencia->fechaAsi = $ufecha;
                    $obj_asistencia->tareoAsi = "A";
                    $obj_asistencia->Persona_idPersona = $idPersona;
                    //$obj_asistencia->servicioAsi = 1;

                    $obj_asistencia->save();

                    $asistencias["f".$ufecha] = $obj_asistencia->idAsistencia;
                }
                
                if($montos["f".$ufecha] == null)
                {
                    $seleccionados[] = $ufecha;
                    $ids[] = $asistencias["f".$ufecha];
                }
            }

            $tfechas = implode(", ", $seleccionados);
            $obj_monto = new Monto();
            $obj_monto->detalleMon = "Alimentación en Base: ".count($seleccionados)." días (".$tfechas.")";
            $obj_monto->Dato_idDato = $obj_dato->idDato;
            $obj_monto->totalMon = $alimentacion * count($seleccionados);
            $obj_monto->Persona_idPersona = $idPersona;
            $obj_monto->fechaMon = date("Y-m-d");
            $obj_monto->disposicionMon = "DEPOSITO";
            $obj_monto->estadoMon = "SOLICITADO";
            $obj_monto->activoMon = 1;
            $obj_monto->fsolicitudMon = $ahora;
            //$obj_monto->faprobacionMon = $ahora;
            $obj_monto->Usuario_idUsuario = $usuario;
            //$obj_monto->Servicio_idServicio = $idServicio;
            $obj_monto->tipoMon = "VIATICO";
            $obj_monto->save();

            DB::table('asistencia')
                ->whereIn('idAsistencia', $ids)
                ->update(['Alimentacion_idMonto' => $obj_monto->idMonto]);

        }
        return;
    }
    public function Desactivar(Request $request)
    {
        /*var_dump($request->id);
        $monto = Monto::findOrFail($request->idMonto);
        if($monto->estadoMon == "SOLICITADO")
        {
            $monto->activoMon = 0;
            $monto->save();    
        }*/

        $obj_monto = (object)[];
        $obj_monto->activoMon = 0;
        Monto::where('idMonto', $request->idMonto)->where('estadoMon','SOLICITADO')->update((array)$obj_monto);
    }
    public function ProcesarAplicado(Request $request)
    {   
        $umonto = json_decode($request->monto);
        
        foreach ($umonto as $monto)
        {
            $obj_monto = (object)[];
            $obj_monto->estadoMon = 'APLICADO';

            Monto::where('idMonto', $monto->idMonto)->update((array)$obj_monto);
        }
    }
    public function ExportarDeposito($tipo,$grupos)
    {
        //obteniendo los viaticos solititados
        $horas = $grupos;
        $fecha = date("Y-m-d");
        $grupos = json_decode($grupos);
        foreach($grupos as $pos => $ugrupo)
        {
            $grupos[$pos] = $fecha." ".$ugrupo;
        }

        $arr_montos = DB::table('monto')
                        ->select('monto.*','paternoPer', 'maternoPer','nombrePer','dniPer','nombreUsu','valorDat as concepto','bancoPer','nbancoPer')
                        ->join('persona','monto.Persona_idPersona','=','persona.idPersona')
                        ->join('dato','dato.idDato','monto.Dato_idDato')
                        ->leftJoin('usuario','monto.Usuario_idUsuario','=','usuario.idUsuario')
                        ->whereIn('faplicacionMon',$grupos)
                        ->where('disposicionMon',$tipo)
                        ->orderBy('Persona_idPersona')
                        ->get();

        //ordenando los viaticos y separandolos en arrays de alimentacion y otros
        $alimentaciones = [];
        $otros = [];
        $registros = [];

        foreach ($arr_montos as $umonto)
        {
            if($umonto->concepto == "ALIMENTACION" || $umonto->concepto == "ALIMENTACION ADICIONAL")
            {
                if(!isset($alimentaciones["p".$umonto->Persona_idPersona]))
                {
                    $fila = [];
                    $fila["tip"] = "ALIMENTACION";
                    $fila["det"] = $umonto->detalleMon;
                    $fila["tot"] = $umonto->totalMon;
                    $fila["per"] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
                    $fila["dni"] = $umonto->dniPer;
                    $fila["apr"] = $umonto->nombreUsu;
                    $fila["ban"] = $umonto->bancoPer;
                    $fila["nro"] = strval($umonto->nbancoPer);
                    $fila["fes"] = "-";
                    $fila["fea"] = "-";
                    $fila["fed"] = $umonto->faplicacionMon;

                    $alimentaciones["p".$umonto->Persona_idPersona] = $fila;
                }
                else
                {
                    $alimentaciones["p".$umonto->Persona_idPersona]["det"] .= $umonto->detalleMon;
                    $alimentaciones["p".$umonto->Persona_idPersona]["tot"] += $umonto->totalMon;
                    //$alimentaciones["p".$monto->Persona_idPersona][6] += $umonto->nombreUsu;
                }
            }
            else
            {
                if(!isset($otros["p".$umonto->Persona_idPersona]))
                {
                    $fila = [];
                    $fila["tip"] = "OTROS GASTOS";
                    $fila["det"] = $umonto->detalleMon;
                    $fila["tot"] = $umonto->totalMon;
                    $fila["per"] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
                    $fila["dni"] = $umonto->dniPer;
                    $fila["apr"] = $umonto->nombreUsu;
                    $fila["ban"] = $umonto->bancoPer;
                    $fila["nro"] = strval($umonto->nbancoPer);
                    $fila["fes"] = "-";
                    $fila["fea"] = "-";
                    $fila["fed"] = $umonto->faplicacionMon;

                    $otros["p".$umonto->Persona_idPersona] = $fila;
                }
                else
                {
                    $otros["p".$umonto->Persona_idPersona]["det"] .= $umonto->detalleMon;
                    $otros["p".$umonto->Persona_idPersona]["tot"] += $umonto->totalMon;
                    //$otros["p".$monto->Persona_idPersona][6] += $umonto->nombreUsu;
                }
            }

            //agregando el registro bruto
            $uregistro = [];
            $uregistro["tip"] = $umonto->concepto;
            $uregistro["det"] = $umonto->detalleMon;
            $uregistro["tot"] = $umonto->totalMon;
            $uregistro["per"] = $umonto->paternoPer." ".$umonto->maternoPer." ".$umonto->nombrePer;
            $uregistro["dni"] = $umonto->dniPer;
            $uregistro["apr"] = $umonto->nombreUsu;
            $uregistro["ban"] = "";
            $uregistro["nro"] = "";
            $uregistro["fes"] = $umonto->fsolicitudMon;
            $uregistro["fea"] = $umonto->faprobacionMon;
            $uregistro["fed"] = $umonto->faplicacionMon;
            $registros[] = $uregistro;
        }

        $vacio = [];
        $vacio["tip"] = "";
        $vacio["det"] = "";
        $vacio["tot"] = "";
        $vacio["per"] = "";
        $vacio["dni"] = "";
        $vacio["apr"] = "";
        $vacio["ban"] = "";
        $vacio["nro"] = "";
        $vacio["fes"] = "";
        $vacio["fea"] = "";
        $vacio["fed"] = "";

        $alimentacion_bbva = [];
        $alimentacion_bcp = [];
        $alimentacion_interbank = [];
        $otro_bbva = [];
        $otro_bcp = [];
        $otro_interbank = [];
        $general = [];

        foreach($otros as $uotro)
        {
            $general[] = $uotro;
            if($uotro["ban"] == "BBVA")
                $otro_bbva[] = $uotro;
            elseif($uotro["ban"] == "BCP")
            {
                $otro_bcp[] = $uotro;
                $otro_bcp[] = $vacio;
            }
            elseif($uotro["ban"] == "INTERBANK")
            {
                $uotro["per"] = str_replace([' ','ñ','Ñ'], [';','n','N'], $uotro["per"]);
                $otro_interbank[] = $uotro;
            }
        }

        foreach($alimentaciones as $ualimentacion)
        {
            $general[] = $ualimentacion;
            if($ualimentacion["ban"] == "BBVA")
                $alimentacion_bbva[] = $ualimentacion;
            elseif($ualimentacion["ban"] == "BCP")
            {
                $alimentacion_bcp[] = $ualimentacion;
                $alimentacion_bcp[] = $vacio;
            }
            elseif($ualimentacion["ban"] == "INTERBANK")
            {
                $ualimentacion["per"] = str_replace([' ','ñ','Ñ'], [';','n','N'], $ualimentacion["per"]);
                $alimentacion_interbank[] = $ualimentacion;
            }
        }

        //interbank no acepta duplicados
        //bcp pide punto y coma
        //bcp pide separados por espacio 
        //bbva cuenta adicional concatenada si se hace masivamente

        /*$bbva = [["123","145","789","123"],["123","145","789","123"],["123","145","789","123"]];
        $bcp = ["789","145","789","123"];
        $interbank = ["434","145","789","123"];*/

        $todos = [];
        $todos["consolidado"] = $registros;
        $todos["general"] = $general;
        $todos["alimentacion_bbva"] = $alimentacion_bbva;
        $todos["alimentacion_bcp"] = $alimentacion_bcp;
        $todos["alimentacion_interbank"] = $alimentacion_interbank;
        $todos["otro_bbva"] = $otro_bbva;
        $todos["otro_bcp"] = $otro_bcp;
        $todos["otro_interbank"] = $otro_interbank;

        $export = new DepositosExport($todos);

        $nombre = $tipo."-".$fecha.$horas.'.xlsx';

        return Excel::download($export, $nombre);

        /***************************************************/

        /***************************************************/
        //$fecha_actual = date("Y-m-d");
        //return Excel::download(new DepositoExport($banco,$tipo,$grupos), $tipo.' '.$banco.': '.$fecha_actual.'.xlsx');
    }
    
    public function Pdf($idrendicion, $idpersona)
    {

        $cabecera = []; 
        $cuerpo = [];
        $fechaSistema = now();
        $year = date("Y", strtotime($fechaSistema));
        $month = date("m", strtotime($fechaSistema));
        $day = date("d", strtotime($fechaSistema));
        $mes = "";
        $detalle = "";
        $descuento = "";

        $obj_persona = Persona::select(DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer, " ", persona.nombrePer ) AS trabajadorPer, 
        dniPer as dni, nombreCar as cargo'))
            ->where('idPersona',$idpersona)
            ->leftJoin('cargo','idCargo','=','persona.Cargo_idCargo')
            ->first(); 
        
        $arr_montos = DB::table('monto')
            ->select('idMonto','detalleMon','totalMon','estadoMon','faplicacionMon','frendicionMon','Dato_idDato','disposicionMon','observacionMon','Usuario_idUsuario','nombreUsu','valorDat as concepto','Rendicion_idRendicion','saldoMon',"rendicionMon","descuentoRen")
            ->join('dato','dato.idDato','monto.Dato_idDato')
            ->join('rendicion','rendicion.idRendicion','=','monto.Rendicion_idRendicion')
            ->leftJoin('usuario','monto.Usuario_idUsuario','=','usuario.idUsuario')
            ->where('monto.Persona_idPersona',$idpersona)
            ->where('Rendicion_idRendicion',$idrendicion) 
            ->where('activoMon',1)
            ->get();

        $registros = [];
        $rendiciones = [];
        $cuerpo = [];
        $cabecera["personal"] = $obj_persona->trabajadorPer; 
        $cabecera["dni"] = $obj_persona->dni; 
        $cabecera["cargo"] = $obj_persona->cargo;
        if ( $day > 25 )
        {
            $month = $month + 1;
        }

        $cabecera["month"] = $month;
        $cabecera["year"] = $year;

        foreach ($arr_montos as $umonto)
        {
            if(!isset($registros["r".$umonto->Rendicion_idRendicion]))
            {
                $fila = [];
                $fila["tip"] = $umonto->detalleMon;
                $detalle = $umonto->detalleMon;
                $descuento = $umonto->descuentoRen;
                $registros["r".$umonto->Rendicion_idRendicion] = $fila;
                $rendiciones[] = $umonto->Rendicion_idRendicion;
                $cuerpo["r".$umonto->Rendicion_idRendicion] = $fila;
            }else{
                $registros["r".$umonto->Rendicion_idRendicion]["tip"] .= " - ".$umonto->detalleMon;
                $detalle = $umonto->detalleMon;
                $descuento = $umonto->descuentoRen;
                $registros["r".$umonto->Rendicion_idRendicion]["mon"][] = $umonto;
                $cuerpo["r".$umonto->Rendicion_idRendicion] = $fila;
            }
        }
        $obj_letras = new EnLetras();
        //$personal["tot2"]  = $obj_letras->ValorEnLetras($planilla->netoPla,"Nuevos Soles");

        $cabecera["detalle"] = $detalle;
        $cabecera["descuento"] = $obj_letras->ValorEnLetras($descuento,"Nuevos Soles");
        $data["cabecera"] = $cabecera; 
        $data["cuerpo"] = $registros;

        $pdf=PDF::loadView('Pdfs.Viatico.Descuento', $data);

        $pdf->setPaper('A4', 'portrait');
        return $pdf->stream();
    }
}

class EnLetras
{
    var $Void = "";
    var $SP = " ";
    var $Dot = ".";
    var $Zero = "0";
    var $Neg = "Menos";

    function ValorEnLetras($x, $Moneda )
    {
        $s="";
        $Ent="";
        $Frc="";
        $Signo="";

        if(floatVal($x) < 0)
         $Signo = $this->Neg . " ";
        else
         $Signo = "";

        if(intval(number_format($x,2,'.','') )!=$x) //<- averiguar si tiene decimales
          $s = number_format($x,2,'.','');
        else
          $s = number_format($x,2,'.','');

        $Pto = strpos($s, $this->Dot);

        if ($Pto === false)
        {
          $Ent = $s;
          $Frc = $this->Void;
        }
        else
        {
          $Ent = substr($s, 0, $Pto );
          $Frc =  substr($s, $Pto+1);
        }

        if($Ent == $this->Zero || $Ent == $this->Void)
           $s = "Cero ";
        elseif( strlen($Ent) > 7)
        {
           $s = $this->SubValLetra(intval( substr($Ent, 0,  strlen($Ent) - 6))) .
                 "Millones " . $this->SubValLetra(intval(substr($Ent,-6, 6)));
        }
        else
        {
          $s = $this->SubValLetra(intval($Ent));
        }

        if (substr($s,-9, 9) == "Millones " || substr($s,-7, 7) == "Millón ")
           $s = $s . "de ";

        $s = $s;

        if($Frc != $this->Void)
        {
           $s = $s . "con " . $Frc. "/100";
           //$s = $s . " " . $Frc . "/100";
        }
        $letrass=$Signo . $s . ' ' . $Moneda;
        return ($Signo . $s . ' ' . $Moneda);

    }
    function SubValLetra($numero)
    {
        $Ptr="";
        $n=0;
        $i=0;
        $x ="";
        $Rtn ="";
        $Tem ="";

        $x = trim("$numero");
        $n = strlen($x);

        $Tem = $this->Void;
        $i = $n;

        while( $i > 0)
        {
           $Tem = $this->Parte(intval(substr($x, $n - $i, 1).
                               str_repeat($this->Zero, $i - 1 )));
           If( $Tem != "Cero" )
              $Rtn .= $Tem . $this->SP;
           $i = $i - 1;
        }


        //--------------------- GoSub FiltroMil ------------------------------
        $Rtn=str_replace(" Mil Mil", " Un Mil", $Rtn );
        while(1)
        {
           $Ptr = strpos($Rtn, "Mil ");
           If(!($Ptr===false))
           {
              If(! (strpos($Rtn, "Mil ",$Ptr + 1) === false ))
                $this->ReplaceStringFrom($Rtn, "Mil ", "", $Ptr);
              Else
               break;
           }
           else break;
        }

        //--------------------- GoSub FiltroCiento ------------------------------
        $Ptr = -1;
        do{
           $Ptr = strpos($Rtn, "Cien ", $Ptr+1);
           if(!($Ptr===false))
           {
              $Tem = substr($Rtn, $Ptr + 5 ,1);
              if( $Tem == "M" || $Tem == $this->Void)
                 ;
              else
                 $this->ReplaceStringFrom($Rtn, "Cien", "Ciento", $Ptr);
           }
        }while(!($Ptr === false));

        //--------------------- FiltroEspeciales ------------------------------
        $Rtn=str_replace("Diez Un", "Once", $Rtn );
        $Rtn=str_replace("Diez Dos", "Doce", $Rtn );
        $Rtn=str_replace("Diez Tres", "Trece", $Rtn );
        $Rtn=str_replace("Diez Cuatro", "Catorce", $Rtn );
        $Rtn=str_replace("Diez Cinco", "Quince", $Rtn );
        $Rtn=str_replace("Diez Seis", "Dieciseis", $Rtn );
        $Rtn=str_replace("Diez Siete", "Diecisiete", $Rtn );
        $Rtn=str_replace("Diez Ocho", "Dieciocho", $Rtn );
        $Rtn=str_replace("Diez Nueve", "Diecinueve", $Rtn );
        $Rtn=str_replace("Veinte Un", "Veintiun", $Rtn );
        $Rtn=str_replace("Veinte Dos", "Veintidos", $Rtn );
        $Rtn=str_replace("Veinte Tres", "Veintitres", $Rtn );
        $Rtn=str_replace("Veinte Cuatro", "Veinticuatro", $Rtn );
        $Rtn=str_replace("Veinte Cinco", "Veinticinco", $Rtn );
        $Rtn=str_replace("Veinte Seis", "Veintiseís", $Rtn );
        $Rtn=str_replace("Veinte Siete", "Veintisiete", $Rtn );
        $Rtn=str_replace("Veinte Ocho", "Veintiocho", $Rtn );
        $Rtn=str_replace("Veinte Nueve", "Veintinueve", $Rtn );

        //--------------------- FiltroUn ------------------------------
        If(substr($Rtn,0,1) == "M") $Rtn = "Un " . $Rtn;
        //--------------------- Adicionar Y ------------------------------
        for($i=65; $i<=88; $i++)
        {
          If($i != 77)
             $Rtn=str_replace("a " . Chr($i), "* y " . Chr($i), $Rtn);
        }
        $Rtn=str_replace("*", "a" , $Rtn);
        return($Rtn);
    }
    function ReplaceStringFrom(&$x, $OldWrd, $NewWrd, $Ptr)
    {
      $x = substr($x, 0, $Ptr)  . $NewWrd . substr($x, strlen($OldWrd) + $Ptr);
    }
    function Parte($x)
    {
        $Rtn='';
        $t='';
        $i=0;//$i='';
        Do
        {
          switch($x)
          {
             Case 0:  $t = "Cero";break;
             Case 1:  $t = "Un";break;
             Case 2:  $t = "Dos";break;
             Case 3:  $t = "Tres";break;
             Case 4:  $t = "Cuatro";break;
             Case 5:  $t = "Cinco";break;
             Case 6:  $t = "Seis";break;
             Case 7:  $t = "Siete";break;
             Case 8:  $t = "Ocho";break;
             Case 9:  $t = "Nueve";break;
             Case 10: $t = "Diez";break;
             Case 20: $t = "Veinte";break;
             Case 30: $t = "Treinta";break;
             Case 40: $t = "Cuarenta";break;
             Case 50: $t = "Cincuenta";break;
             Case 60: $t = "Sesenta";break;
             Case 70: $t = "Setenta";break;
             Case 80: $t = "Ochenta";break;
             Case 90: $t = "Noventa";break;
             Case 100: $t = "Cien";break;
             Case 200: $t = "Doscientos";break;
             Case 300: $t = "Trescientos";break;
             Case 400: $t = "Cuatrocientos";break;
             Case 500: $t = "Quinientos";break;
             Case 600: $t = "Seiscientos";break;
             Case 700: $t = "Setecientos";break;
             Case 800: $t = "Ochocientos";break;
             Case 900: $t = "Novecientos";break;
             Case 1000: $t = "Mil";break;
             Case 1000000: $t = "Millón";break;
          }

          If($t == $this->Void)
          {
            $i = $i + 1;
            $x = $x / 1000;
            If($x== 0) $i = 0;
          }
          else
             break;

        }while($i != 0);

        $Rtn = $t;
        Switch($i)
        {
           Case 0: $t = $this->Void;break;
           Case 1: $t = " Mil";break;
           Case 2: $t = " Millones";break;
           Case 3: $t = " Billones";break;
        }
        return($Rtn . $t);
    }
}