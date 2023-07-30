<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Externo;
use App\Http\Controllers\Controller;

class ExternoController extends Controller
{
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/
    
    public function Listar()
    {
        $arr_rutas = Externo::select('vehiculo.*','vmarca.nombreMar','vmodelo.nombreMod','vtipo.nombreTip')
            ->where('activoVeh', 1)
            ->join('vmarca','vmarca.idMarca','=','vehiculo.Marca_idMarca')
            ->join('vmodelo','vmodelo.idModelo','=','vehiculo.Modelo_idModelo')
            ->join('vtipo','vtipo.idTipo','=','vehiculo.Tipo_idTipo')
            ->get();
        return $arr_vehiculos;
    }

    public function ListarSelect()
    {
        $arr_externos = Externo::select('idExterno','nombreExt','abreviaturaExt')
            ->orderBy('nombreExt','asc')
            ->get();
        return $arr_externos;
    }

    public function GuardarExterno(Request $request)
    {
        $jExterno = json_decode($request->Externo);
        $obj_externo = new Externo();
        $obj_externo->nombreExt = $jExterno->nombreExt;
        $obj_externo->abreviaturaExt = $jExterno->abreviaturaExt; 
        $obj_externo->save();
    }

    public function ActualizarExterno(Request $request)
    {
        $jExterno = json_decode($request->Externo);
        unset($jExterno->acciones);

        $obj_externo = (object)$jExterno; 
        Externo::where('idExterno', $jExterno->idExterno)->update((array)$obj_externo);
        return;
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
}