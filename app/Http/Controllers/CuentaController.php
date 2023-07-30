<?php 
namespace App\Http\Controllers; 

use App\Cuenta;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CuentaController extends Controller 
{
    public function ListarSelect()
    {
        $arr_cuenta = Cuenta::select('idCuenta','nombreCue') 
            ->get();
        return $arr_cuenta;
    }
}