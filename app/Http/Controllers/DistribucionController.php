<?php 
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Distribucion;
use App\Implemento;

class DistribucionController extends Controller 
{
    public function Guardar( Request $request )
    {
        $distribucion = json_decode( $request->distribucion);

        $obj_distribucion = new Distribucion(); 
        $obj_distribucion->Plantilla_idPlantilla = $distribucion->idPlantilla; 
        $obj_distribucion->Implemento_idImplemento = $distribucion->idImplemento; 
        $obj_distribucion->validacionDis = $distribucion->validacionDis; 
        $obj_distribucion->alertaDis = $distribucion->alertaDis; 
        $obj_distribucion->renovacionDis = $distribucion->renovacionDis;
        $obj_distribucion->estadoDis = "ACTIVO";
        $obj_distribucion->save(); 

        /*foreach ( $distribucion as $udistribucion) 
        {
            $registroDis = Distribucion::select('idDistribucion')
                ->where('Plantilla_idPlantilla', $udistribucion->idPlantilla)
                ->where('Implemento_idImplemento', $udistribucion->idImplemento)
                ->where('invalidoDis',NULL)
                ->first();
            
            if ( $registroDis == NULL ) 
            {   
                $obj_distribucion = new Distribucion(); 
                $obj_distribucion->Plantilla_idPlantilla = $udistribucion->idPlantilla; 
                $obj_distribucion->Implemento_idImplemento = $udistribucion->idImplemento; 
                $obj_distribucion->validacionDis = $udistribucion->validacionDis; 
                $obj_distribucion->alertaDis = $udistribucion->alertaDis; 
                $obj_distribucion->save(); 
            }
        }*/
    }
    public function Actualizar( Request $request )
    {
        $jDistribucion = json_decode( $request->distribucion );
        //return $jDistribucion;
        $distribucion = [];
        foreach ($jDistribucion as $udistribucion)
        {
            /*$obj_implemento = (object)[]; 
            $obj_implemento->validacionImp = $udistribucion->validacionDis;
            $obj_implemento->alertaImp = $udistribucion->alertaImp;
            $obj_implemento->renovacionImp = $udistribucion->renovacionImp;
            Implemento::where('idImplemento', $udistribucion->idImplemento)->update((array)$obj_implemento);*/

            if ( isset( $udistribucion->idDistribucion ) ) 
            {
                unset($udistribucion->nombreImp);
                unset($udistribucion->sel);
                
                $obj_distribucion = (object)$udistribucion; 
                Distribucion::where('idDistribucion',$udistribucion->idDistribucion)->update((array)$obj_distribucion);
            
            } else if ( isset( $udistribucion->idImplemento )) { 
                $obj_implemento = (object)[]; 
                $obj_implemento->validacionImp = $udistribucion->validacionImp;
                $obj_implemento->alertaImp = $udistribucion->alertaImp;
                $obj_implemento->renovacionImp = $udistribucion->renovacionImp;
                Implemento::where('idImplemento', $udistribucion->idImplemento)->update((array)$obj_implemento);
            }
        }
        return $jDistribucion;
    }

    public function ActualizarM( Request $request ) //Actualizar Materiales y Cantidades 
    {
        $uDistribucion = json_decode( $request->materiales);
        $materiales = []; 
        $cantidades = [];

        foreach( $uDistribucion->materiales as $umaterial )
        {
            $materiales[] = str_replace("-"," ", $umaterial->materialesDis);
            $cantidades[] = str_replace("-"," ", $umaterial->cantidadesDis); 
        }
        $material = implode("-", $materiales);
        $cantidad = implode("-", $cantidades); 

        $obj_distribucion = (object)[]; 
        $obj_distribucion->materialesDis = $material;
        $obj_distribucion->cantidadesDis = $cantidad; 
        Distribucion::where('idDistribucion', $uDistribucion->idDistribucion)->update((array)$obj_distribucion);
    }

    public function Desactivar( Request $request )
    {
        $distribucion = Distribucion::find($request->idDistribucion);
        $distribucion->estadoDis = "ANULADO";
        $distribucion->save(); 
        return $distribucion->idDistribucion;
    }
}