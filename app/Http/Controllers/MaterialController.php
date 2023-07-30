<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request;
use App\Material;
use App\Kardex;
use App\Almacen;
use App\Dato;
use App\Http\Controllers\Controller;

class MaterialController extends Controller 
{
    public function Listar()
    {
        /*$arr_material = Material::select('idMaterial','nombreMat','stockMat','Unidad_idDato','valorDat','Almacen_idAlmacen','tipoKar','idKardex')
            ->join('dato','dato.idDato','=','material.Unidad_idDato')
            ->leftjoin('kardex','kardex.Material_idMaterial','=','material.idMaterial')
            ->leftjoin('almacen','almacen.idAlmacen','=','kardex.Almacen_idAlmacen')
            ->get();*/ 
        
        $arr_material = Material::select('idMaterial','nombreMat','stockMat','Unidad_idDato','valorDat')
            ->join('dato','dato.idDato','=','material.Unidad_idDato')
            ->get();

        $ids = [];
        $kardex = [];

        foreach ( $arr_material as $umaterial ) 
        {
            $ids [] = $umaterial->idMaterial;
        }

        $arr_kardex = Kardex::select('Almacen_idAlmacen','Material_idMaterial','tipoKar')
            ->whereIn('Material_idMaterial',$ids)
            ->get();

        foreach ( $arr_kardex as $ukardex) 
        {
            $kardex[ "u".$ukardex->Material_idMaterial] = $ukardex; 
        }

        foreach ( $arr_material as $umaterial ) 
        {
            if ( isset( $kardex[ "u".$umaterial->idMaterial ]) ) 
            {
                $umaterial->Almacen_idAlmacen = $kardex[ "u".$umaterial->idMaterial]["Almacen_idAlmacen"];
                $umaterial->Material_idMaterial = $kardex[ "u".$umaterial->idMaterial]["Material_idMaterial"];
                $umaterial->tipoKar = $kardex[ "u".$umaterial->idMaterial]["tipoKar"];
            } else { 
                $umaterial->tipoKar = "ENTRADA";
            }
        }
        return $arr_material;
        //return $arr_material;
    }

    public function Guardar( Request $request )
    {
        $umaterial = json_decode( $request->material );

        $obj_material = new Material(); 
        $obj_material->nombreMat = $umaterial->nombreMat; 
        $obj_material->Unidad_idDato = $umaterial->Unidad_idDato;
        $obj_material->stockMat = $umaterial->stockMat; 
        $obj_material->save();

        $obj_kardex = new Kardex(); 
        $obj_kardex->Almacen_idAlmacen = $umaterial->Almacen_idAlmacen;
        $obj_kardex->Material_idMaterial = $obj_material->idMaterial; 
        $obj_kardex->tipoKar = 'ENTRADA';
        $obj_kardex->stockKar = $umaterial->stockMat;
        $obj_kardex->conceptoKar = 'APERTURA';
        $obj_kardex->fechaKar = now();
        $obj_kardex->save();
    }

    public function Actualizar( Request $request )
    {
        $umaterial = json_decode( $request->material ); 

        $obj_material = (object)[]; 
        $obj_material->nombreMat = $umaterial->nombreMat; 
        $obj_material->Unidad_idDato = $umaterial->Unidad_idDato;
        Material::where('idMaterial', $umaterial->idMaterial)->update((array)$obj_material);
    } 
}