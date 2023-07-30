<?php 
namespace App\Http\Controllers; 

use DB;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\Exports\DescuentoExport;
use App\Descuento;
use Maatwebsite\Excel\Facades\Excel;

class DescuentoController extends Controller 
{
    public function ExportarDescuento($tipo, $desde, $hasta)
    {
        $arr_descuentos = Descuento::select('descuento.*', DB::raw('CONCAT(persona.paternoPer," ", persona.maternoPer," ", persona.nombrePer) AS trabajadorPer'),'nombreAre','dniPer','consumo.rutaCon', 'intervalo.nombreInt','galonesAba','diferenciakmAba','rendimientoAba','idealAba','excesoAba','toleranciaAba','saldoAba','descuentoAba')

            ->join('abastecimientod','abastecimientod.idAbastecimientod','=','descuento.Externo_idExterno')
            ->join('abastecimientoc','abastecimientoc.idAbastecimiento','=','abastecimientod.abastecimientoc_idAbastecimiento')

            ->leftJoin('consumo','consumo.idConsumo','=','abastecimientoc.Consumo_idConsumo')
            ->leftJoin('intervalo','intervalo.idIntervalo','=','abastecimientoc.Intervalo_idIntervalo')

            ->join('persona','persona.idPersona','=','descuento.Persona_idPersona')
            ->join('area','area.idArea','=','persona.Area_idArea')
            ->where('tipoDes', $tipo)
            ->where('periodoDes','>=', $desde)
            ->where('periodoDes','<=', $hasta)
            ->where('tipoDes', $tipo)
            ->where('estadoDes', "PENDIENTE")
            ->get();

        $descuentos = [];
        foreach($arr_descuentos as $udescuento)
        {
            $descuento[] = "";
            $descuento[] = $udescuento->nombreAre;
            $descuento[] = $udescuento->trabajadorPer;
            $descuento[] = $udescuento->dniPer;
            $descuento[] = $udescuento->detalleDes;
            $descuento[] = $udescuento->periodoDes;
            $descuento[] = $udescuento->diferenciakmAba/$udescuento->rendimientoAba;//galonaje consumido
            $descuento[] = $udescuento->idealAba;//galonaje ideal
            $descuento[] = $udescuento->excesoAba;//galones de exceso
            $descuento[] = $udescuento->toleranciaAba;//tolerancia
            $descuento[] = $udescuento->saldoAba;//galones descontados
            $descuento[] = $udescuento->rutaCon;////ruta
            $descuento[] = round($udescuento->descuentoAba/$udescuento->saldoAba,2);//precio
            $descuento[] = $udescuento->totalDes;//monto descontado
            $descuento[] = $udescuento->observacionDes;
            $descuentos[] = $descuento;
        }    


        $cabeceras = [  'NRO',
                        'ÁREA',
                        'TRABAJADOR',
                        'DNI',
                        'DETALLE',
                        'FECHA',
                        'GAL. CONSUMIDO',
                        'GAL. IDEAL',
                        'EXCESO',
                        'TOLERANCIA',
                        'GAL. DESCUENTO',
                        'RUTA',
                        'PRECIO',
                        'MONTO',
                        'OBSERVACION'
                    ];

        $export = new DescuentoExport($descuentos,$cabeceras);
        $nombre = 'Descuentos.xlsx';
        return Excel::download($export, $nombre);
    }
}