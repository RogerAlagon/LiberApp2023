<?php 
namespace App\Http\Controllers; 

use App\Almacen;

class AlmacenController extends Controller 
{
    public function ListarSelect()
    {
        $arr_almacen = Almacen::select('idAlmacen','nombreAlm')
            ->get(); 

        return $arr_almacen;
    }
}
