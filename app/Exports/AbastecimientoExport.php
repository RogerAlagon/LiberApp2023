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

class AbastecimientoExport extends DefaultValueBinder implements FromArray, WithMultipleSheets, WithHeadings, WithColumnFormatting,WithCustomValueBinder
//extends DefaultValueBinder implements FromArray, WithHeadings, WithTitle, ShouldAutoSize, WithColumnFormatting, WithMapping, WithCustomValueBinder, WithStrictNullComparison
{
    protected $todos;
    protected static $textColumns = ['F'];
    protected static $first = true;

    public function __construct( array $todos)
    {
        $this->todos = $todos;
    }

    public function headings(): array
    {
        return [ 
            'GRUPO', 
            'CONDUCTOR',
            'CIUDAD',
            'PROVEEDOR',
            'GRIFO',
            'FECHA ABS.',
            'GAL',
            'PRECIO',
            'MONTO',
            'EXCESO', 
            'RENDIMIENTO',
            'PLACA',
            'MODELO',
            'CUENTA',
            'KM',
            'CLIENTE',
            'OBSERVACION',
            'RETEN',
            'CARRETA C.',
            'CARRETA V.', 
            'KM REC.', 
            'KM ANTERIOR', 
            //'REPORTE',
            'MOTIVO', 
            'TIPO',
            'FACTURA', 
            'INTERVALO', 
            'GALONAJE INTERVALO', 
            'KM INTERVALO', 
            'GAL. IDEAL', 
            'SALDO', 
            'TOLERANCIA', 
            'DESCUENTO', 
            'REGISTRADO POR'
        ];
    }

    public function columnFormats(): array
    {
        return [
            /*'B' => '#,##0',
            'C' => '#,##0',*/
            //'D' => '@',
            'F' => NumberFormat::FORMAT_DATE_YYYYMMDD2,
            //'D' => NumberFormat::FORMAT_PERCENTAGE_00
        ];
    }

    public function array(): array
    {
        return $this->todos;
    }

    public function sheets(): array 
    {
        $todos = [ new AbastecimientoExport($this->todos['cuerpo'])];
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