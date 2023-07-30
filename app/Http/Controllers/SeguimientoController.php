<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vehiculo;
use App\Seguimiento;
use App\SDetalle;
use App\Grifo;

class SeguimientoController extends Controller
{
   /*public function Fecha()
    {
        $conglomerado["anio"] = date("Y");
        $conglomerado["mes"] = (int)date("m");
        return $conglomerado;
    }*/
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/
    
    public function Periodo($prm_fecha,$prm_tipo,$prm_cuenta)
    {
        $conglomerado = [];
        if($prm_tipo == "BASICO")
            $conglomerado = $this->SeguimientoBasico($prm_fecha,$prm_tipo,$prm_cuenta);
        elseif($prm_tipo == "HORAS")
            $conglomerado = $this->SeguimientoHora($prm_fecha,$prm_tipo,$prm_cuenta);
        return $conglomerado;
    }


    /*public function Seguimiento($prm_anio,$prm_mes,$prm_lista,$prm_servicio)
    {
        $conglomerado = [];
        if($prm_lista == 1)
            $conglomerado = $this->SeguimientoBasico($prm_anio,$prm_mes,$prm_servicio);
        elseif($prm_lista == 2)
            $conglomerado = $this->SeguimientoRecurso($prm_anio,$prm_mes,$prm_servicio);
        elseif($prm_lista == 3)
            $conglomerado = $this->SeguimientoTrafico($prm_anio,$prm_mes);
        return $conglomerado;
    }*/
    public function SeguimientoBasico($prm_fecha,$prm_tipo,$prm_cuenta)
    {
        $fecha = strtotime($prm_fecha);
        $mes = date("n",$fecha);
        $anio = date("Y",$fecha);
        $adia = date("j");
        $nrodias = cal_days_in_month(CAL_GREGORIAN, (int)$mes, (int)$anio);

        //GENERANDO LOS ARRAYS DE ASISTENCIA
        $dias = array();//dias para la cabecera
        $dias2 = array();//dias para el cuerpo

        for ($i = 1; $i <= $nrodias; $i++)
        {
            $dias["d".$i] = $i;
            $dias2["d".$i]["id"] = 0;//idasistencia
            $dias2["d".$i]["asi"] = "";//asistencia
            $dias2["d".$i]["pre"] = 0;//precio
        }

        if(strlen($mes) == 1)
            $mes = "0".$mes;

        $finicio = $anio."-".$mes."-01";
        $ffin = $anio."-".$mes."-".$nrodias;
        
        $seguimientos = array();
        $dia_semana = date("w",strtotime($finicio));

        $arr_vehiculos = Vehiculo::select('vehiculo.idVehiculo','vehiculo.placaVeh')
            //->where('Servicio_idServicio','=',$prm_servicio)
            //->orderBy('placaVeh','asc')
            ->where('activoVeh','=','1')
            //->limit(50)
            ->get();

        /*
        $arr_vehiculos = SDetalle::select('vehiculo.idVehiculo','vehiculo.placaVeh','acople.idVehiculo as idAcople','acople.placaVeh as acopleVeh')
            ->join('vehiculo', 'sdetalle.Vehiculo_idVehiculo', '=', 'vehiculo.idVehiculo')
            ->leftJoin('vehiculo as acople', 'sdetalle.Acople_idVehiculo', '=', 'acople.idVehiculo')
            ->where('Servicio_idServicio','=',$prm_servicio)
            //->orderBy('placaVeh','asc')
            ->get();
        */
            
        $vehiculos = [];
        foreach ($arr_vehiculos as $uvehiculo)
        {
            $vehiculos[] = $uvehiculo->idVehiculo;
        }
        
        $arr_seguimiento = Seguimiento::select('seguimiento.*','externo.nombreExt','externo.abreviaturaExt')
            ->leftJoin('servicio', 'servicio.idServicio', '=', 'seguimiento.Servicio_idServicio')
            ->leftJoin('convoy', 'convoy.idConvoy', '=', 'servicio.Convoy_idConvoy')
            ->leftJoin('externo', 'externo.idExterno', '=', 'convoy.Cliente_idExterno')
            ->whereIn('seguimiento.Vehiculo_idVehiculo',$vehiculos)
            ->where('fechaSeg','>=',$finicio)
            ->where('fechaSeg','<=',$ffin)
            ->get();

        //GENERANDO LAS FILAS
        $nro = 0;
        foreach ($arr_vehiculos as $uvehiculo)
        {
            $nro++;
            $seguimientos["p".$uvehiculo->idVehiculo]["nro"] = $nro;
            $seguimientos["p".$uvehiculo->idVehiculo]["pla"] = $uvehiculo->placaVeh;
            $seguimientos["p".$uvehiculo->idVehiculo]["vi"] = 0;//Viaje
            $seguimientos["p".$uvehiculo->idVehiculo]["man"] = 0;//Mantenimento
            $seguimientos["p".$uvehiculo->idVehiculo]["vac"] = 0;//Vacio
            $seguimientos["p".$uvehiculo->idVehiculo]["par"] = 0;//Parado
            $seguimientos["p".$uvehiculo->idVehiculo]["com"] = 0;//Comision a otros servicios
            //$seguimientos["p".$uvehiculo->idVehiculo]["tot"] = $nrodias;//Ocupacion (viaje)
            $seguimientos["p".$uvehiculo->idVehiculo]["ocu"] = 0;//Ocupacion (viaje)
            $seguimientos["p".$uvehiculo->idVehiculo]["ren"] = 0;//Rendimiento (viaje + mantenimiento + comision)
            $seguimientos["p".$uvehiculo->idVehiculo]["asi"] = $dias2;//generar asistencia del vehiculo en vacio
        }

        foreach ($arr_seguimiento as $useguimiento)
        {
            $dia = date("j",strtotime($useguimiento->fechaSeg));
            $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["id"] = $useguimiento->idSeguimiento;
            $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["com"] = $useguimiento->comentarioSeg;
            
            if($useguimiento->estadoSeg == "MAN")
            {
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = "MAN";
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["man"] += 1;
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["ren"] += 1;
            }
            elseif($useguimiento->estadoSeg == "COM")
            {
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = "COM";
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["com"] += 1;
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["ren"] += 1;
            }
            elseif($useguimiento->estadoSeg == "PAR")
            {
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = "PAR";
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["par"] += 1;
            }
            elseif($useguimiento->estadoSeg == "VAC")
            {
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = "VAC";
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["vac"] += 1;
            }
            else
            {
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = "VI";
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["vi"] += 1;
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["ren"] += 1;
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["ocu"] += 1;

                //$seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = $useguimiento->codigoSer."-".$useguimiento->nroDet;
                //$seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["pre"] = round($useguimiento->precioSeg,2);
                /*$seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["lab"] += 1;
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["pre"] += $useguimiento->precioSeg;*/
                /*if($seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["pre"] != '')
                    $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["pre"] += $useguimiento->precioSeg;*/
            }
        }

        foreach ($seguimientos as $indice => $useguimiento)
        {
            $ocupacion = 0;
            $rendimiento = 0;

            if($useguimiento["vi"] != 0)
            {
                $ocupacion = round($useguimiento["ocu"] / $nrodias * 100);
                $rendimiento = round($useguimiento["ren"] / $nrodias * 100);
            }
            $seguimientos[$indice]["ocu"] = $ocupacion;
            $seguimientos[$indice]["ren"] = $rendimiento;
            /*if($useguimiento["pre"] == 0)
                $seguimientos[$indice]["pre"] = "-";
            else
                $seguimientos[$indice]["pre"] = round($useguimiento["pre"] ,2);*/
        }

        $conglomerado["adia"] = $adia-1;
        $conglomerado["dias"] = $dias;
        $conglomerado["seguimientos"] = $seguimientos;
        $conglomerado["dia_semana"] = $dia_semana;
        return $conglomerado;
    }
    public function SeguimientoBasico2($prm_anio,$prm_mes,$prm_servicio)
    {
        $adia = date("j");

        //asistencia normal
        $nrodias = cal_days_in_month(CAL_GREGORIAN, (int)$prm_mes, (int)$prm_anio);
        //$nrodias = $this->DiasMes($prm_anio,$prm_mes);

        $dias = array();//dias para la cabecera
        $dias2 = array();//dias para el cuerpo

        for ($i = 1; $i <= $nrodias; $i++)
        {
            $dias["d".$i] = $i;
            $dias2["d".$i]["id"] = 0;//idasistencia
            $dias2["d".$i]["asi"] = "";//asistencia
        }

        if(strlen($prm_mes) == 1)
            $prm_mes = "0".$prm_mes;

        $finicio = $prm_anio."-".$prm_mes."-01";
        $ffin = $prm_anio."-".$prm_mes."-".$nrodias;
        $seguimientos = array();
        $dia_semana = date("w",strtotime($finicio));

        $arr_vehiculos = SDetalle::select('vehiculo.idVehiculo','vehiculo.placaVeh','acople.idVehiculo as idAcople','acople.placaVeh as acopleVeh')
            ->join('vehiculo', 'sdetalle.Vehiculo_idVehiculo', '=', 'vehiculo.idVehiculo')
            ->leftJoin('vehiculo as acople', 'sdetalle.Acople_idVehiculo', '=', 'acople.idVehiculo')
            ->where('Servicio_idServicio','=',$prm_servicio)
            //->orderBy('placaVeh','asc')
            ->get();
            
        $vehiculos = [];
        foreach ($arr_vehiculos as $uvehiculo)
        {
            $vehiculos[] = $uvehiculo->idVehiculo;
            $vehiculos[] = $uvehiculo->idAcople;
        }
        
        $arr_seguimiento = Seguimiento::select('seguimiento.*','sdetalle.nroDet')
            //->join('vehiculo', 'vehiculo.idVehiculo', '=', 'seguimiento.Vehiculo_idVehiculo')
            ->leftJoin('servicio', 'servicio.idServicio', '=', 'seguimiento.Servicio_idServicio')
            ->leftJoin('sdetalle', 'sdetalle.idDetalle', '=', 'seguimiento.Detalle_idDetalle')
            //->where('activoVeh','=','1')
            ->whereIn('seguimiento.Vehiculo_idVehiculo',$vehiculos)
            ->where('fechaSeg','>=',$finicio)
            ->where('fechaSeg','<=',$ffin)
            //->limit(10)
            ->get();

        $nro = 0;
        foreach ($arr_vehiculos as $uvehiculo)
        {
            $nro++;
            $seguimientos["p".$uvehiculo->idVehiculo]["nro"] = $nro;
            $seguimientos["p".$uvehiculo->idVehiculo]["pla"] = $uvehiculo->placaVeh;//." ".$upersona->maternoPer." ".$upersona->nombrePer;
            $seguimientos["p".$uvehiculo->idVehiculo]["lab"] = 0;//laborado
            $seguimientos["p".$uvehiculo->idVehiculo]["par"] = 0;//parado
            $seguimientos["p".$uvehiculo->idVehiculo]["man"] = 0;//mantenimiento
            $seguimientos["p".$uvehiculo->idVehiculo]["asi"] = $dias2;//generar asistencia del vehiculo en vacio

            $nro++;
            $seguimientos["p".$uvehiculo->idAcople]["nro"] = $nro;
            $seguimientos["p".$uvehiculo->idAcople]["pla"] = $uvehiculo->acopleVeh;//." ".$upersona->maternoPer." ".$upersona->nombrePer;
            $seguimientos["p".$uvehiculo->idAcople]["lab"] = 0;//laborado
            $seguimientos["p".$uvehiculo->idAcople]["par"] = 0;//parado
            $seguimientos["p".$uvehiculo->idAcople]["man"] = 0;//mantenimiento
            $seguimientos["p".$uvehiculo->idAcople]["asi"] = $dias2;//generar asistencia del vehiculo en vacio
        }

        foreach ($arr_seguimiento as $useguimiento)
        {
            $dia = date("j",strtotime($useguimiento->fechaSeg));
            $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["id"] = $useguimiento->idSeguimiento;
            $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["com"] = $useguimiento->comentarioSeg;

            if($useguimiento->estadoSeg == "MANTENIMIENTO")
            {
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = "M";
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["man"] += 1;
            }
            elseif($useguimiento->estadoSeg == "PARADA")
            {
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = "P";
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["par"] += 1;
            }
            elseif($useguimiento->estadoSeg == "VACIO")
            {
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = "V";
                //$seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["par"] += 1;
            }
            else
            {
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = $useguimiento->codigoSer."-".$useguimiento->nroDet;
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["lab"] += 1;
            }
        }

        $conglomerado["adia"] = $adia-1;
        $conglomerado["dias"] = $dias;
        $conglomerado["seguimientos"] = $seguimientos;
        $conglomerado["dia_semana"] = $dia_semana;
        return $conglomerado;
    }
    public function SeguimientoRecurso($prm_anio,$prm_mes,$prm_servicio)
    {
        $adia = date("j");

        //asistencia normal
        $nrodias = cal_days_in_month(CAL_GREGORIAN, (int)$prm_mes, (int)$prm_anio);
        //$nrodias = $this->DiasMes($prm_anio,$prm_mes);

        $dias = array();//dias para la cabecera
        $dias2 = array();//dias para el cuerpo

        for ($i = 1; $i <= $nrodias; $i++)
        {
            $dias["d".$i] = $i;
            $dias2["d".$i]["id"] = 0;//idasistencia
            $dias2["d".$i]["asi"] = "";//asistencia
            $dias2["d".$i]["gal"] = "";//galonaje
            $dias2["d".$i]["kil"] = "";//kilometraje
            $dias2["d".$i]["ure"] = "";//urea
        }

        if(strlen($prm_mes) == 1)
            $prm_mes = "0".$prm_mes;

        $finicio = $prm_anio."-".$prm_mes."-01";
        $ffin = $prm_anio."-".$prm_mes."-".$nrodias;
        $seguimientos = array();
        $dia_semana = date("w",strtotime($finicio));

        //VALIDAR LA FECHA DE CESE QUE VALIDE CON LA FECHA DE INICIO Y LA FECHA DE CESE PARA QUE APAREZCA CORRECTAMENTE EN EL TAREO
        $arr_vehiculos = Vehiculo::select('idVehiculo','placaVeh')
            //->whereRaw('((activoPer = 1 AND fingresoPer <= "'.$ffin.'") OR (activoPer = 0 AND fcesePer <= "'.$ffin.'" AND fcesePer >= "'.$finicio.'")) AND Area_idArea = '.$prm_area)
            ->join('sdetalle', 'sdetalle.Vehiculo_idVehiculo', '=', 'vehiculo.idVehiculo')
            //->join('servicio', 'servicio.idServicio', '=', 'sdetalle.Servicio_idServicio')
            //->where('activoVeh','=','1')
            //->where('Servicio_idServicio','=',$prm_servicio)
            ->orderBy('placaVeh','asc')
            //->limit(10)
            ->get();
            
        $vehiculos = [];
        foreach ($arr_vehiculos as $uvehiculo)
        {
            $vehiculos[] = $uvehiculo->idVehiculo;
        }

        $arr_seguimiento = Seguimiento::select('seguimiento.*')
            //->join('vehiculo', 'vehiculo.idVehiculo', '=', 'seguimiento.Vehiculo_idVehiculo')
            ->leftJoin('servicio', 'servicio.idServicio', '=', 'seguimiento.Servicio_idServicio')
            //->where('activoVeh','=','1')
            ->whereIn('seguimiento.Vehiculo_idVehiculo',$vehiculos)
            ->where('fechaSeg','>=',$finicio)
            ->where('fechaSeg','<=',$ffin)
            //->limit(10)
            ->get();

        $nro = 0;
        foreach ($arr_vehiculos as $uvehiculo)
        {
            $nro++;
            $seguimientos["p".$uvehiculo->idVehiculo]["nro"] = $nro;
            $seguimientos["p".$uvehiculo->idVehiculo]["pla"] = $uvehiculo->placaVeh;//." ".$upersona->maternoPer." ".$upersona->nombrePer;
            $seguimientos["p".$uvehiculo->idVehiculo]["lab"] = 0;//laborado
            $seguimientos["p".$uvehiculo->idVehiculo]["par"] = 0;//parado
            $seguimientos["p".$uvehiculo->idVehiculo]["man"] = 0;//mantenimiento
            $seguimientos["p".$uvehiculo->idVehiculo]["asi"] = $dias2;//generar asistencia del vehiculo en vacio

        }

        foreach ($arr_seguimiento as $useguimiento)
        {
            $dia = date("j",strtotime($useguimiento->fechaSeg));
            $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["id"] = $useguimiento->idSeguimiento;
            $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["com"] = $useguimiento->comentarioSeg;
            $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["gal"] = $useguimiento->cgalonajeSeg;
            $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["kil"] = $useguimiento->kilometrajeSeg;
            $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["ure"] = $useguimiento->ureaSeg;

            if($useguimiento->estadoSeg == "MANTENIMIENTO")
            {
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = "M";
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["man"] += 1;
            }
            elseif($useguimiento->estadoSeg == "PARADA")
            {
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = "P";
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["par"] += 1;
            }
            elseif($useguimiento->estadoSeg == "PARADA")
            {
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = "V";
                //$seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["par"] += 1;
            }
            else
            {
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["asi"]["d".$dia]["asi"] = $useguimiento->codigoSer;
                $seguimientos["p".$useguimiento->Vehiculo_idVehiculo]["lab"] += 1;
            }
        }

        $conglomerado["adia"] = $adia-1;
        $conglomerado["dias"] = $dias;
        $conglomerado["seguimientos"] = $seguimientos;
        $conglomerado["dia_semana"] = $dia_semana;
        return $conglomerado;
    }
    /*public function AsistenciaMarcaciones($prm_tipo,$prm_anio,$prm_mes,$prm_area)
    {
        $adia = date("j");
        //asistencia con entrada y salida

        $nrodias = cal_days_in_month(CAL_GREGORIAN, (int)$prm_mes, (int)$prm_anio);
        //$nrodias = $this->DiasMes($prm_anio,$prm_mes);

        $dias = array();//dias para la cabecera
        $dias2 = array();//dias para el cuerpo
        //$dias["d0"] = "Trabajador";
        for ($i = 1; $i <= $nrodias; $i++)
        {
            $dias["d".$i] = $i;
            $dias2["d".$i]["id"] = 0;//idasistencia
            $dias2["d".$i]["asi"] = "";//asistencia
            $dias2["d".$i]["ent"] = "";//hora de entrada
            $dias2["d".$i]["sal"] = "";//hora de salida
        }

        if(strlen($prm_mes) == 1)
            $prm_mes = "0".$prm_mes;

        $finicio = $prm_anio."-".$prm_mes."-01";
        $ffin = $prm_anio."-".$prm_mes."-".$nrodias;
        $asistencias = array();
        $dia_semana = date("w",strtotime($finicio));

        $arr_personas = Persona::select('idPersona','nombrePer','paternoPer','maternoPer')
            ->whereRaw('((activoPer = 1 AND fingresoPer <= "'.$ffin.'") OR (activoPer = 0 AND fcesePer <= "'.$ffin.'" AND fcesePer >= "'.$finicio.'")) AND Area_idArea = '.$prm_area)
            ->orderBy('paternoPer','asc')
            ->orderBy('maternoPer','asc')
            ->orderBy('nombrePer','asc')
            ->get();

        $arr_asistencias = Asistencia::select('asistencia.*')
            ->join('persona', 'persona.idPersona', '=', 'asistencia.Persona_idPersona')
            ->whereRaw('((activoPer = 1 AND fingresoPer <= "'.$ffin.'") OR (activoPer = 0 AND fcesePer <= "'.$ffin.'" AND fcesePer >= "'.$finicio.'")) AND Area_idArea = '.$prm_area)
            ->where('fechaAsi','>=',$finicio)
            ->where('fechaAsi','<=',$ffin)
            ->get(); 

        $nro = 0;
        foreach ($arr_personas as $upersona)
        {
            $nro++;
            $asistencias["p".$upersona->idPersona]["nro"] = $nro;
            $asistencias["p".$upersona->idPersona]["per"] = $upersona->paternoPer." ".$upersona->maternoPer." ".$upersona->nombrePer;
            $asistencias["p".$upersona->idPersona]["lab"] = 0;
            $asistencias["p".$upersona->idPersona]["des"] = 0;
            $asistencias["p".$upersona->idPersona]["nla"] = 0;
            $asistencias["p".$upersona->idPersona]["vac"] = $nrodias;
            $asistencias["p".$upersona->idPersona]["tar"] = 0;
            $asistencias["p".$upersona->idPersona]["asi"] = $dias2;//generar asistencia del trabajador en vacio
        }
        foreach ($arr_asistencias as $uasistencia)
        {
            $dia = date("j",strtotime($uasistencia->fechaAsi));
            $asistencias["p".$uasistencia->Persona_idPersona]["asi"]["d".$dia]["id"] = $uasistencia->idAsistencia;
            if($uasistencia->tareoAsi == "T")
            {
                $asistencias["p".$uasistencia->Persona_idPersona]["asi"]["d".$dia]["asi"] = "T";
                $asistencias["p".$uasistencia->Persona_idPersona]["tar"] += 1;
            }
            else
                $asistencias["p".$uasistencia->Persona_idPersona]["asi"]["d".$dia]["asi"] = $uasistencia->tareoAsi;

            $entrada = "";
            $salida = "";

            //setear hora de entrada
            if($uasistencia->entradaAsi != "00:00:00" && $uasistencia->entradaAsi != null)
            {
                $entrada = substr($uasistencia->entradaAsi, 0, -3);
            }
            elseif($uasistencia->intermedioAsi != "" && $uasistencia->intermedioAsi != null)
            {
                $asis = explode(",",$uasistencia->intermedioAsi,2);
                $entrada = $asis[1];
            }
            elseif($uasistencia->erefrigerioAsi != "00:00:00" && $uasistencia->erefrigerioAsi != null)
            {
                $entrada = substr($uasistencia->erefrigerioAsi, 0, -3);
            }
            elseif($uasistencia->srefrigerioAsi != "00:00:00" && $uasistencia->srefrigerioAsi != null)
            {
                $entrada = substr($uasistencia->srefrigerioAsi, 0, -3);
            }
            elseif($uasistencia->intermedio2Asi != "" && $uasistencia->intermedio2Asi != null)
            {
                $asis = explode(",",$uasistencia->intermedio2Asi,2);
                $entrada = $asis[1];
            }
            //setear hora de salida
            if($uasistencia->salidaAsi != "00:00:00" && $uasistencia->salidaAsi != null)
            {
                $salida = substr($uasistencia->salidaAsi, 0, -3);
            }
            elseif($uasistencia->intermedio2Asi != "" && $uasistencia->intermedio2Asi != null)
            {
                $asis = explode(",",$uasistencia->intermedio2Asi,2);
                $salida = $asis[1];
            }
            elseif($uasistencia->srefrigerioAsi != "00:00:00" && $uasistencia->srefrigerioAsi != null)
            {
                $salida = substr($uasistencia->srefrigerioAsi, 0, -3);
            }
            elseif($uasistencia->erefrigerioAsi != "00:00:00" && $uasistencia->erefrigerioAsi != null)
            {
                $salida = substr($uasistencia->erefrigerioAsi, 0, -3);
            }
            elseif($uasistencia->intermedioAsi != "" && $uasistencia->intermedioAsi != null)
            {
                $asis = explode(",",$uasistencia->intermedioAsi,2);
                $salida = $asis[1];
            }

            $asistencias["p".$uasistencia->Persona_idPersona]["asi"]["d".$dia]["ent"] = $entrada;
            $asistencias["p".$uasistencia->Persona_idPersona]["asi"]["d".$dia]["sal"] = $salida;


            if($uasistencia->tareoAsi == "A" || $uasistencia->tareoAsi == "T")
            {
                $asistencias["p".$uasistencia->Persona_idPersona]["lab"] += 1;
                $asistencias["p".$uasistencia->Persona_idPersona]["vac"] -= 1;
            }
            elseif($uasistencia->tareoAsi == "D" || $uasistencia->tareoAsi == "DA")
            {
                $asistencias["p".$uasistencia->Persona_idPersona]["des"] += 1;
                $asistencias["p".$uasistencia->Persona_idPersona]["vac"] -= 1;
            }
            elseif($uasistencia->tareoAsi == "Z")
                $asistencias["p".$uasistencia->Persona_idPersona]["vac"] += 0;
            else
            {
                $asistencias["p".$uasistencia->Persona_idPersona]["nla"] += 1;
                $asistencias["p".$uasistencia->Persona_idPersona]["vac"] -= 1;
            }
        }

        $conglomerado["adia"] = $adia-1;
        $conglomerado["dias"] = $dias;
        $conglomerado["asistencias"] = $asistencias;
        $conglomerado["dia_semana"] = $dia_semana;
        return $conglomerado;
    }*/
    public function Guardar(Request $request)
    {
        $seleccionados = json_decode($request->seleccionados);

        foreach ($seleccionados as $useleccionado)
        {
            $datos = explode("-", $useleccionado);

            if($datos[0] == 0)
            {

                $obj_seguimiento = new Seguimiento();
                $obj_seguimiento->Vehiculo_idVehiculo = $datos[1];
                $obj_seguimiento->fechaSeg = $request->anio."-".$request->mes."-".$datos[2];
                $obj_seguimiento->estadoSeg = $request->asistencia;
                //if($request->asistencia == "LABORADO")
                $obj_seguimiento->comentarioSeg = $request->comentario;
                $obj_seguimiento->save();
            }
            else
            {
                $obj_seguimiento = (object)[];
                $obj_seguimiento->Vehiculo_idVehiculo = $datos[1];
                $obj_seguimiento->fechaSeg = $request->anio."-".$request->mes."-".$datos[2];
                $obj_seguimiento->estadoSeg = $request->asistencia;
                //if($request->asistencia == "LABORADO")
                $obj_seguimiento->comentarioSeg = $request->comentario;                
                Seguimiento::where('idSeguimiento', $datos[0])->update((array)$obj_seguimiento);

                /*if (in_array($datos[1], $conductores))
                {
                    if($request->anio == "2019" && $request->mes == "10")
                    {
                        //no hacer nada
                    }
                    else
                    {
                        $obj_asistencia = (object)[];
                        $obj_asistencia->Persona_idPersona = $datos[1];
                        $obj_asistencia->fechaAsi = $request->anio."-".$request->mes."-".$datos[2];
                        $obj_asistencia->tareoAsi = $request->asistencia;
                        $obj_asistencia->hextraAsi = $request->hextra;
                        $obj_asistencia->hpermisoAsi = $request->hpermiso;
                        $obj_asistencia->comentarioAsi = $request->comentario;
                        Asistencia::where('idAsistencia', $datos[0])->update((array)$obj_asistencia);
                    }
                }
                else
                {
                    
                }*/
                
            }
        }
    }
    public function GuardarRecurso(Request $request)
    {
        $seleccionados = json_decode($request->seleccionados);

        foreach ($seleccionados as $useleccionado)
        {
            $datos = explode("-", $useleccionado);

            if($datos[0] == 0)
            {
                $obj_seguimiento = new Seguimiento();
                $obj_seguimiento->Vehiculo_idVehiculo = $datos[1];
                $obj_seguimiento->fechaSeg = $request->anio."-".$request->mes."-".$datos[2];
                $obj_seguimiento->estadoSeg = "VACIO";
                $obj_seguimiento->kilometrajeSeg = $request->kilometraje;
                $obj_seguimiento->cgalonajeSeg = $request->galonaje;
                $obj_seguimiento->cprecioSeg = $request->precio;
                $obj_seguimiento->Grifo_idGrifo = $request->grifo;
                //$obj_seguimiento->comentarioSeg = $request->comentario;
                $obj_seguimiento->save();
            }
            else
            {
                $obj_seguimiento = (object)[];
                $obj_seguimiento->Vehiculo_idVehiculo = $datos[1];
                //$obj_seguimiento->fechaSeg = $request->anio."-".$request->mes."-".$datos[2];
                //$obj_seguimiento->estadoSeg = $request->asistencia;
                $obj_seguimiento->kilometrajeSeg = $request->kilometraje;
                $obj_seguimiento->cgalonajeSeg = $request->galonaje;
                $obj_seguimiento->cprecioSeg = $request->precio;
                $obj_seguimiento->Grifo_idGrifo = $request->grifo;
                //if($request->asistencia == "LABORADO")
                //$obj_seguimiento->comentarioSeg = $request->comentario;                
                Seguimiento::where('idSeguimiento', $datos[0])->update((array)$obj_seguimiento);

                /*if (in_array($datos[1], $conductores))
                {
                    if($request->anio == "2019" && $request->mes == "10")
                    {
                        //no hacer nada
                    }
                    else
                    {
                        $obj_asistencia = (object)[];
                        $obj_asistencia->Persona_idPersona = $datos[1];
                        $obj_asistencia->fechaAsi = $request->anio."-".$request->mes."-".$datos[2];
                        $obj_asistencia->tareoAsi = $request->asistencia;
                        $obj_asistencia->hextraAsi = $request->hextra;
                        $obj_asistencia->hpermisoAsi = $request->hpermiso;
                        $obj_asistencia->comentarioAsi = $request->comentario;
                        Asistencia::where('idAsistencia', $datos[0])->update((array)$obj_asistencia);
                    }
                }
                else
                {
                    
                }*/
                
            }
        }
    }
    public function AnalisisRecurso(Request $request)
    {

        $arr_grifos = Grifo::select('grifo.*')
            //->where('activoPer','=','1')
            ->get();

        $grifos = [];

        foreach ($arr_grifos as $ugrifo)
        {
            $grifo = [];
            $grifo["nom"] = $ugrifo->nombreGri;
            $grifo["val"] = 0;

            $grifos["g".$ugrifo->idGrifo] = $grifo;
        }

        $arr_seguimientos = Seguimiento::select('seguimiento.*')
            ->where('fechaSeg','>=',$request->finicio)
            ->where('fechaSeg','<=',$request->ftermino)
            ->where('cgalonajeSeg','>',0)
            //->limit(10)
            ->get();

        foreach ($arr_seguimientos as $useguimiento)
        {
            $grifos["g".$useguimiento->Grifo_idGrifo]["val"] += $useguimiento->cgalonajeSeg;
        }

        $respuesta = [];
        
        $fila = [];
        $fila[] = "GRIFOS";
        $fila[] = "GALONES";

        $respuesta[] = $fila;        
        
        foreach ($grifos as $ugrifo)
        {
            $fila = [];
            $fila[] = $ugrifo["nom"];
            $fila[] = $ugrifo["val"];

            $respuesta[] = $fila;
        }

        return $respuesta;
        /*chartData: [
                    ['Year', 'Sales', 'Expenses', 'Profit'],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350]
                ],*/

    }
    public function Marcaciones($prm_fecha,$prm_area)
    {
        $asistencias = array();

        $arr_personas = Persona::select('idPersona','nombrePer','paternoPer','maternoPer')

            ->where('activoPer','=','1')
            ->where('Area_idArea','=',$prm_area)
            ->orderBy('paternoPer','asc')
            ->orderBy('maternoPer','asc')
            ->orderBy('nombrePer','asc')
            ->get();

        $arr_asistencias = Asistencia::select('asistencia.*')
            ->join('persona', 'persona.idPersona', '=', 'asistencia.Persona_idPersona')
            ->where('activoPer','=','1')
            ->where('Area_idArea','=',$prm_area)
            ->where('fechaAsi','=',$prm_fecha)
            ->get(); 

        foreach ($arr_personas as $upersona)
        {
            $asistencias["p".$upersona->idPersona]["per"] = $upersona->paternoPer." ".$upersona->maternoPer." ".$upersona->nombrePer;
            $asistencias["p".$upersona->idPersona]["asi"] = "";
            $asistencias["p".$upersona->idPersona]["ent"] = "";
            $asistencias["p".$upersona->idPersona]["sal"] = "";
            $asistencias["p".$upersona->idPersona]["ere"] = "";
            $asistencias["p".$upersona->idPersona]["sre"] = "";
            $asistencias["p".$upersona->idPersona]["in1"] = "";
            $asistencias["p".$upersona->idPersona]["in2"] = "";
        }
        foreach ($arr_asistencias as $uasistencia)
        {
            $asistencias["p".$uasistencia->Persona_idPersona]["asi"] = $uasistencia->tareoAsi;
            $asistencias["p".$uasistencia->Persona_idPersona]["ent"] = $uasistencia->entradaAsi;
            $asistencias["p".$uasistencia->Persona_idPersona]["sal"] = $uasistencia->salidaAsi;
            $asistencias["p".$uasistencia->Persona_idPersona]["ere"] = $uasistencia->erefrigerioAsi;
            $asistencias["p".$uasistencia->Persona_idPersona]["sre"] = $uasistencia->srefrigerioAsi;
            $asistencias["p".$uasistencia->Persona_idPersona]["in1"] = $uasistencia->intermedioAsi;
            $asistencias["p".$uasistencia->Persona_idPersona]["in2"] = $uasistencia->intermedio2Asi;
        }
        $conglomerado["asistencias"] = $asistencias;
        return $conglomerado;
    }



    function DiasMes($prm_anio,$prm_mes)
    {
        if((int)$prm_mes == 6)
            return 30;
        elseif((int)$prm_mes == 7)
            return 31;
        elseif((int)$prm_mes == 8)
            return 31;
        else
            return 30;
    }
}

