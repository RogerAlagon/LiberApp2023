<?php 
namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithHeadings;

use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\WithMapping;

use PhpOffice\PhpSpreadsheet\Cell\Cell;
use Maatwebsite\Excel\Concerns\ToModel;
use PhpOffice\PhpSpreadsheet\Cell\DataType;
use Maatwebsite\Excel\Concerns\WithCustomValueBinder;
use PhpOffice\PhpSpreadsheet\Cell\DefaultValueBinder;

use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use PhpOffice\PhpSpreadsheet\Shared\Date;


class OtExport extends DefaultValueBinder implements FromArray, WithMultipleSheets, WithHeadings, WithColumnFormatting,WithCustomValueBinder
{
    protected $todos;
    protected static $textColumns = ['B'];
    protected static $first = true;

    public function __construct( array $todos)
    {
        $this->todos = $todos;
    }

    public function headings(): array
    {
        return [ 
            'OT', 
            'FECHA',
            'PLACA',
            'ESTADO',
            'TIPO',
            'T.PREVENTIVO',
            'K.PREVENTIVO',
            'TALLER',
            'CUENTA',
            'APARTADO',
            'COMPONENTE',
            'DETALLE_FALLA',
            'ESTADO_TRABAJO', 
            'ACTIVIDAD',
            'TECNICO'
        ];
    }

    public function columnFormats(): array
    {
        return [
            /*'B' => '#,##0',
            'C' => '#,##0',*/
            //'D' => '@',
            'B' => NumberFormat::FORMAT_DATE_YYYYMMDD2,
            //'D' => NumberFormat::FORMAT_PERCENTAGE_00
        ];
    }

    public function array(): array
    {
        return $this->todos;
    }

    public function sheets(): array 
    {
        $todos = [ new OtExport($this->todos['cuerpo'])];
        return $todos;
    }

    public function bindValue(Cell $cell, $value)
    {
        if(in_array($cell->getColumn(), self::$textColumns))
        {
            if(self::$first)
                self::$first = false;
            else
            {
                $cell->setValueExplicit($value, DataType::TYPE_ISO_DATE);
                return true;    
            }
            
        }    
        return parent::bindValue($cell, $value);
    }
}

/*namespace App\Exports;

use App\User; 
use DB;
use App\Ordent;
use App\Trabajo;
use App\Falla;
use Maatwebsite\Excel\Concerns\FromCollection; 
use Maatwebsite\Excel\Concerns\WithHeadings;

class OtExport implements FromCollection,WithHeadings
{

    * @return \Illuminate\Support\Collection


    protected $cuenta;
    protected $vehiculo;
    protected $finicio;
    protected $ffin;
    protected $estado;
    protected $mantt;

    function __construct($prm_cuenta, $prm_vehiculo, $prm_finicio, $prm_ffin, $prm_estado, $prm_mantt)
    {

        $this->cuenta = $prm_cuenta;
        $this->vehiculo = $prm_vehiculo;
        $this->finicio = $prm_finicio;
        $this->ffin = $prm_ffin;
        $this->estado = $prm_estado;
        $this->mantt = $prm_mantt;
    }

    public function headings(): array
    {
        $indices = []; 

        return [
            'OT', 
            'FECHA',
            'PLACA',
            'ESTADO',
            'TIPO',
            'T.PREVENTIVO',
            'TALLER',
            'CUENTA',
            'APARTADO',
            'COMPONENTE',
            'DETALLE_FALLA',
            'ESTADO_TRABAJO', 
            'ACTIVIDAD',
            'TECNICO'
        ];
    }

    public function collection()
    {
        $filas = [];

        $cuenta_ = '='; 
        $vehiculo_ = '=';
        $estado_ = '=';
        $mantt_ = '=';

        if ( $this->cuenta == '0' ) { $cuenta_ = '<>'; }
        if ( $this->vehiculo == '0' ) { $vehiculo_ = '<>'; }
        if ( $this->estado == '0') { $estado_ = '<>'; }
        if ( $this->mantt == '0') { $mantt_ = '<>'; }

        $arr_ordent = Ordent::select('ordent.*','cuenta.valorDat as cuenta','taller.valorDat as taller','vehiculo.placaVeh','Asignacion_idAsignacion','nombreImp', 
                        DB::raw('DATE_FORMAT(ffinOrd,"%h:%i:%s") as hora'),
                        DB::raw('CONCAT(paternoPer," ", maternoPer," ", nombrePer) as nombrePer'),'nombreApa','nombreCom',
                        'detalleFal','tipoFal','estadoFal','estadoTra','actividadTra')
            ->leftjoin('vehiculo','vehiculo.idVehiculo','ordent.Vehiculo_idVehiculo')
            ->leftjoin('trabajo','trabajo.Ordent_idOrdent','=','ordent.idOrdent')
            ->leftjoin('falla','falla.idFalla','=','trabajo.Falla_idFalla')
            ->leftjoin('componente','componente.idComponente','=','falla.Componente_idComponente')
            ->leftjoin('apartado','apartado.idApartado','=','componente.Apartado_idApartado')
            ->leftjoin('dato as cuenta','cuenta.idDato','ordent.Cuenta_idDato')
            ->leftjoin('dato as taller','taller.idDato','ordent.Taller_idDato')
            ->leftjoin('persona','persona.idPersona','trabajo.Persona_idPersona')
            ->leftjoin('asignacion','asignacion.idAsignacion','=','trabajo.Asignacion_idAsignacion')
            ->leftjoin('implemento','implemento.idImplemento','=','asignacion.Implemento_idImplemento')
            //->leftJoin('usuario','ordent.Usuario_idUsuario','usuario.idUsuario')
            ->whereDate('fechaOrd','>=', $this->finicio)
            ->whereDate('fechaOrd','<=', $this->ffin)
            ->where('ordent.Cuenta_idDato', $cuenta_ , $this->cuenta)
            ->where('ordent.Vehiculo_idVehiculo', $vehiculo_ , $this->vehiculo)
            ->where('ordent.mantenimientoOrd', $mantt_ , $this->mantt)
            ->where('estadoOrd', $estado_, $this->estado)
            ->orderBy('idOrdent','ASC')
            ->get();

        foreach ( $arr_ordent as $ord ) 
        {
            $fila = []; 
            $fila[] = $ord->idOrdent; 
            $fila[] = $ord->fechaOrd; 
            $fila[] = $ord->placaVeh; 
            $fila[] = $ord->estadoOrd; 
            $fila[] = $ord->mantenimientoOrd; 
            $fila[] = $ord->nombreImp;
            $fila[] = $ord->taller; 
            $fila[] = $ord->cuenta;
            $fila[] = $ord->nombreApa;
            $fila[] = $ord->nombreCom;
            $fila[] = $ord->detalleFal;
            if ( $ord->estadoTra == 'ANULADO') { $fila[] = 'REPROGRAMADO'; } else { $fila[] = $ord->estadoTra; }
            $fila[] = $ord->actividadTra;
            $fila[] = $ord->nombrePer;
            $filas[] = $fila;
        }
        return collect($filas);
    }
}*/