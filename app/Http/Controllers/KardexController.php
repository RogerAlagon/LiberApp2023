<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request;
use App\Kardex;
use App\Material;

use App\Http\Controllers\Controller;

class KardexController extends Controller 
{
    public function Guardar( Request $request )
    {
        $ukardex = json_decode( $request->kardex );
        $obj_kardex = new Kardex();
        $obj_kardex->stockKar = $ukardex->stockKar;
        $obj_kardex->tipoKar = $ukardex->tipoKar;
        $obj_kardex->conceptoKar = $ukardex->conceptoKar;
        if ( $ukardex->Almacen_idAlmacen ) { $obj_kardex->Almacen_idAlmacen = $ukardex->Almacen_idAlmacen; } else { $obj_kardex->Almacen_idAlmacen = 1; } 
        $obj_kardex->Material_idMaterial = $ukardex->idMaterial;
        $obj_kardex->fechaKar = now(); 
        $obj_kardex->save();

        /*$up_kardex = Kardex::select('idKardex')
            ->where('idKardex', $ukardex->idKardex)
            ->update(['stockKar' => $ukardex->stockKar, 
                      'tipoKar' => $ukardex->tipoKar, 
                      'conceptoKar' => $ukardex->conceptoKar, 
                      'fechaKar' => now()]);*/

        if ( $ukardex->tipoKar == 'SALIDA' ) 
        {
            $up_material = Material::select('idMaterial')
            ->where('idMaterial', $ukardex->idMaterial)
            ->update(['stockMat' => intval($ukardex->stockMat) - intval($ukardex->stockKar)]);
        }

        if ( $ukardex->tipoKar == 'ENTRADA' )
        {
            $up_material = Material::select('idMaterial')
            ->where('idMaterial', $ukardex->idMaterial)
            ->update(['stockMat' => intval($ukardex->stockMat) + intval($ukardex->stockKar)]);
        }
    }
}
