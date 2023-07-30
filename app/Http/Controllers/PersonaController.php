<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Persona;
use App\Entidad;
use DB;

class PersonaController extends Controller
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
    
    /*public function Listar()
    {
        $arr_personas = Persona::all();
        return $arr_personas;
    }*/

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function ListarSelect()
    {
        $arr_personas = Persona::where('activoPer','=','1')
            //->select('idPersona','CONCAT(paternoPer, maternoPer,nombrePer) As trabajadorPer')
            ->select(DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer, idPersona'))
            ->orderBy('trabajadorPer','asc')
            ->get();
        return $arr_personas;
    }
    public function ListarCesado()
    {
        $arr_personas = Persona::where('activoPer','=','0')
            //->select('idPersona','CONCAT(paternoPer, maternoPer,nombrePer) As trabajadorPer')
            ->select(DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer, idPersona'))
            ->orderBy('trabajadorPer','asc')
            ->get();
        return $arr_personas;
    }
    public function SelectConductor()
    {
        $arr_personas = Persona::where('activoPer','=','1')
            //->select('idPersona','CONCAT(paternoPer, maternoPer,nombrePer) As trabajadorPer')
            ->select(DB::raw('CONCAT(paternoPer, " ",maternoPer, " ", nombrePer) AS trabajadorPer, idPersona'))
            ->whereIn('Area_idArea', [11, 12])
            ->orderBy('trabajadorPer','asc')
            ->get();
        return $arr_personas;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function Guardar(Request $request)
    {
        $obj_persona = new Persona();
        $obj_persona->nombrePer = $request->nombre;
        $obj_persona->paternoPer = $request->paterno;
        $obj_persona->maternoPer = $request->materno;
        $obj_persona->fnacimientoPer = $request->fnacimiento;
        $obj_persona->activoPer = $request->activo;
        $obj_persona->Cargo_idCargo = $request->cargo;
        $obj_persona->Area_idArea = $request->area;
        $obj_persona->fingresoPer = ($request->fingreso == "0000-00-00") ? null : $request->fingreso;
        $obj_persona->fcesePer = ($request->fcese == "0000-00-00") ? null : $request->fcese;
        $obj_persona->planillaPer = $request->planilla;
        $obj_persona->pensionPer = ($request->pension == "0") ? null : $request->pension;
        $obj_persona->comisionPer = ($request->comision == "0") ? null : $request->comision;
        $obj_persona->celularPer = $request->celular;
        $obj_persona->ecelularPer = $request->ecelular;
        $obj_persona->correoPer = $request->correo;
        $obj_persona->dniPer = $request->dni;
        $obj_persona->departamentoPer = $request->departamento;
        $obj_persona->provinciaPer = $request->provincia;
        $obj_persona->distritoPer = $request->distrito;
        $obj_persona->residenciaPer = $request->residencia;
        $obj_persona->direccionPer = $request->direccion;
        $obj_persona->Grupo_idGrupo = $request->grupo;
        $obj_persona->cusppPer = $request->cussp;
        $obj_persona->mcesePer = $request->mcese;

        $obj_persona->save();

        $obj_entidad = new Entidad();
        $obj_entidad->nombreEnt = $request->paterno." ".$request->materno." ".$request->nombre;
        $obj_entidad->tipoEnt = 1;
        $obj_entidad->activoEnt = $request->activo;
        $obj_entidad->Entidad_idExterno = $obj_persona->idPersona;

        $obj_entidad->save();
        //crear usuario para el trabajador
        
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
        $obj_persona = (object)[];

        $obj_persona->nombrePer = $request->nombre;
        $obj_persona->paternoPer = $request->paterno;
        $obj_persona->maternoPer = $request->materno;
        $obj_persona->fnacimientoPer = $request->fnacimiento;
        $obj_persona->activoPer = $request->activo;
        $obj_persona->Cargo_idCargo = $request->cargo;
        $obj_persona->Area_idArea = $request->area;
        $obj_persona->fingresoPer = ($request->fingreso == "0000-00-00") ? null : $request->fingreso;
        $obj_persona->fcesePer = ($request->fcese == "0000-00-00") ? null : $request->fcese;
        $obj_persona->planillaPer = $request->planilla;
        $obj_persona->pensionPer = $request->pension;
        $obj_persona->comisionPer = $request->comision;
        $obj_persona->celularPer = $request->celular;
        $obj_persona->ecelularPer = $request->ecelular;
        $obj_persona->correoPer = $request->correo;
        $obj_persona->dniPer = $request->dni;
        $obj_persona->departamentoPer = $request->departamento;
        $obj_persona->provinciaPer = $request->provincia;
        $obj_persona->distritoPer = $request->distrito;
        $obj_persona->residenciaPer = $request->residencia;
        $obj_persona->direccionPer = $request->direccion;
        $obj_persona->Grupo_idGrupo = $request->grupo;
        $obj_persona->cusppPer = $request->cussp;
        $obj_persona->mcesePer = $request->mcese;

        Persona::where('idPersona', $request->id)->update((array)$obj_persona);

        $obj_entidad = (object)[];

        $obj_entidad->activoEnt = $request->activo;
        $obj_entidad->nombreEnt = $request->paterno." ".$request->materno." ".$request->nombre;

        Entidad::where('tipoEnt', 1)->where('Entidad_idExterno', $request->id)->update((array)$obj_entidad);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function Directorio()
    {
        $arr_personas = Persona::select('idPersona','nombrePer','paternoPer','maternoPer','celularPer','ecelularPer','correoPer')
            ->where('activoPer','=','1')
            ->orderBy('paternoPer','asc')
            ->orderBy('maternoPer','asc')
            ->orderBy('nombrePer','asc')
            ->get();
        return $arr_personas;
    }
}
