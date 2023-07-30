<?php 
namespace App\Http\Controllers; 

use DB; 
use App\Comprobante; 
use App\Abastecimientod; 
use App\Combustible;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;

Class ComprobanteController extends Controller 
{

    public function GuardarComprobanteCombustible(Request $request)
    {
        $comprobante = json_decode( $request->comprobante); 
        $vale = json_decode( $request->vale);

        $obj_comprobante = new Comprobante(); 
        $obj_comprobante->serieCom = $comprobante->serieCom;
        $obj_comprobante->numeroCom = $comprobante->numeroCom; 
        $obj_comprobante->totalCom = $comprobante->totalCom;
        $obj_comprobante->femisionCom = $comprobante->femisionCom; 
        $obj_comprobante->clienteCom = $comprobante->clienteCom;
        $obj_comprobante->encuadreCom = $comprobante->encuadreCom;
        $obj_comprobante->fingresoCom = now();
        $obj_comprobante->save();

        foreach ( $vale as $uvale)
        {

            if ( isset( $uvale->abastecimiento2))
            {
                $idAbastecimiento1 = ""; 
                if ($uvale->tipoAba == "FULL")
                {

                    if ( isset( $uvale->abastecimiento1)) 
                    { 
                        $idAbastecimiento1 = $uvale->abastecimiento1;
                        $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
                        ->where('idAbastecimientod', $uvale->abastecimiento1)
                        ->update(['cerradoAba' => true]); 
                    }

                    $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
                    ->where('idAbastecimientod', $uvale->abastecimiento2)
                    ->update(['facturaAba'=> $obj_comprobante->serieCom,
                          'Comprobante_idComprobante'=> $obj_comprobante->idComprobante, 
                          'estadodAba' =>'FACTURADO',
                          'galonesAba' => $uvale->gal2,
                          'rendimientoAba' => $uvale->rendimiento,
                          'diferenciakmAba' => $uvale->diferencia, 
                          'enlaceAba' => $idAbastecimiento1.$uvale->ids,
                          'precioAba' => $uvale->precioGri,
                          'cerradoAba' => false]);
                    
                    /*$up_vale = Abastecimientod::select('idAbastecimientod.*')
                      ->where('idAbastecimientod', $uvale->abastecimiento2)
                      ->update(['galonesAba' => $uvale->gal2, 
                                'rendimientoAba' => $uvale->rendimiento,
                                'diferenciakmAba' => $uvale->diferencia, 
                                'precioAba' => $uvale->precioGri]);*/


                    $id = explode('-',$uvale->ids);
                    $up_abastecimientod = Abastecimientod::select('idabastecimientod.*')
                    ->whereIn('idAbastecimientod', $id )
                    ->update(['cerradoAba' => true, 
                              'rendimientoAba' => $uvale->rendimiento]);

                } elseif ($uvale->tipoAba == 'RELLENO') { 
                    
                    if ( isset( $uvale->abastecimiento1)) 
                    { 
                        $idAbastecimiento1 = $uvale->abastecimiento1;
                    }

                    $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
                    ->where('idAbastecimientod', $uvale->abastecimiento2)
                    ->update(['facturaAba'=> $obj_comprobante->serieCom,
                          'Comprobante_idComprobante'=> $obj_comprobante->idComprobante, 
                          'galonesAba'=> $uvale->gal2, 
                          'estadodAba' =>'FACTURADO', 
                          'rendimientoAba' => "",
                          'enlaceAba' => $idAbastecimiento1.$uvale->ids]);
                } /*elseif ( $uvale->tipoAba == NULL ) {
                    if ( isset( $uvale->abastecimiento1)) 
                    { 
                        $idAbastecimiento1 = $uvale->abastecimiento1;
                    }

                    $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
                    ->where('idAbastecimientod', $uvale->abastecimiento2)
                    ->update(['facturaAba'=> $obj_comprobante->serieCom,
                          'Comprobante_idComprobante'=> $obj_comprobante->idComprobante, 
                          'estadodAba' =>'FACTURADO', 
                          'enlaceAba' => $idAbastecimiento1.$uvale->ids]);
                }*/
                

                /*if ( isset( $uvale->abastecimiento1))
                {
                    $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
                    ->where('idAbastecimientod', $uvale->abastecimiento1)
                    ->update(['enlaceAba'=> $uvale->abastecimiento2.$uvale->ids]);
                }*/

            }
            /*if ( isset( $uvale->abastecimiento1))
            {

                $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
                ->where('idAbastecimientod', $uvale->abastecimiento1)
                ->update(['facturaAba'=> $obj_comprobante->serieCom,
                          'Comprobante_idComprobante'=> $obj_comprobante->idComprobante, 
                          'estadodAba' =>'FACTURADO']);
            }
            if ( isset( $uvale->abastecimiento2))
            {
               $up_abastecimientod = Abastecimientod::select('idAbastecimientod.*')
                ->where('idAbastecimientod', $uvale->abastecimiento2)
                ->update(['facturaAba'=> $obj_comprobante->serieCom,
                          'Comprobante_idComprobante'=> $obj_comprobante->idComprobante, 
                          'estadodAba' =>'FACTURADO']);
            }*/
        }
    }

    public function ListarComprobante($externo, $desde, $hasta, $tipo, $condicion)
    {
        $_externo = "=";
        if ($externo == '0') { $_externo = '<>'; }
        $_condicion = "=";
        if ($condicion == 'TODO') { $_condicion = '<>'; }
        $_tipo = "=";
        if ($tipo == 'TODO') { $_tipo = '<>'; }

        $arr_comprobante = Comprobante::select('comprobante.*')
            ->join('externo','externo.idExterno','comprobante.Externo_idExterno')
            ->where('Externo_idExterno',$_externo, $externo)
            //->where('Externo_idExterno',$_externo, $externo)
            //->where('Externo_idExterno',$_externo, $externo)
            ->where('femisionCom','>=',$desde)
            ->where('femisionCom','<=',$hasta)
            ->orderBy('femisionCom','ASC')
            ->get(); 
        return $arr_comprobante;
    }
}