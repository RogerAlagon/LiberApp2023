<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dato;
use DB;
use App\Http\Controllers\Controller;

class DatoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/
    
    public function Listar()
    {
        /*$arr_convoys = Convoy::select('convoy.*','origenRut','destinoRut','tramoRut','cargaRut','tipoRut','nombreExt')
            ->join('ruta','ruta.idRuta','=','servicio.Ruta_idRuta')
            ->join('externo','externo.idExterno','=','servicio.Cliente_idExterno')
            ->get();
        return $arr_servicios;*/
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function ListarSelect($tipo,$grupo)
    {
        $tipo_ = '>';
        $rango = '0';
        
	$arr_datos = [];
        if($tipo == "VIATICO" && $grupo == "PERSONAL")
        {
            $arr_datos = Dato::select('idDato','valorDat')
            ->where('tipoDat','=',$tipo)
            ->where('grupoDat','=',$grupo)
            ->whereNotIn('valorDat',["ALIMENTACION","ALIMENTACION ADICIONAL","ALIMENTACION EN BASE"])
            ->orderBy('valorDat','asc')
            ->get();
        }
        else
        {
            if ( $tipo == 'RUTA' ) { $rango = '253'; }

            $arr_datos = Dato::select('idDato','valorDat')
                ->where('tipoDat','=',$tipo)
                ->where('grupoDat','=',$grupo)
                ->orderBy('valorDat','asc')
                ->where('idDato', $tipo_ , $rango)
                ->get();    
        }


        return $arr_datos;
    }
    public function ListarDetalle($servicio)
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
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function Guardar(Request $request)
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
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function Mostrar($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function Actualizar(Request $request)
    {
        /*$obj_persona = (object)[];

        $obj_persona->nombrePer = $request->nombre;
        $obj_persona->paternoPer = $request->paterno;
        $obj_persona->maternoPer = $request->materno;
        $obj_persona->fnacimientoPer = $request->fnacimiento;
        $obj_persona->activoPer = $request->activo;
        $obj_persona->Cargo_idCargo = $request->cargo;

        Persona::where('idPersona', $request->id)->update((array)$obj_persona);*/
        

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

    }

    public function Ruta(Request $request)
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
    }
}
