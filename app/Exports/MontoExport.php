<?php
namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;
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


class MontoExport extends DefaultValueBinder implements FromArray, WithHeadings, WithTitle, ShouldAutoSize, WithColumnFormatting, WithMapping, WithCustomValueBinder, WithStrictNullComparison
{
    //protected $rows;
    protected $filas;
    protected $titulo;
    //protected static $textColumns = ['I',"K","k"];
    protected static $textColumns = [];

    public function __construct(array $filas,$titulo)
    {
        $this->filas = $filas;
        $this->titulo = $titulo;
    }

    public function map($row): array
    {
        return [
            $row["dni"],
            $row["per"],
            $row["are"],
            $row["est"],
            $row["tip"],
            $row["det"],
            $row["fes"],
            $row["fea"],
            $row["fed"],
            $row["fer"],
            $row["tot"],
            $row["ren"],
            $row["dev"],
            $row["des"],
            $row["sal"],
            $row["dis"],
            $row["obs"],
            $row["apr"],
            $row["enc"],
        ];
    }

    public function headings(): array
    {
        return [
            'DNI',
            'TRABAJADOR',
            'CUENTA',
            'ESTADO',
            'TIPO',
            'DETALLE',
            'FECHA SOLICITUD',
            'FECHA APROBACION',
            'FECHA DEPOSITO',
            'FECHA RENDICION',
            'TOTAL',
            'RENDIDO',
            'DEVUELTO',
            'DESCUENTO',
            'PENDIENTE',
            'DISPOSICION',
            'OBSERVACION',
            'SOLICITANTE',
            'RECEPCIONADO POR',
        ];
    }

    public function array(): array
    {
        return $this->filas;
    }

    public function title(): string
    {
        return $this->titulo;
    }

    public function columnFormats(): array
    {
        return [
            /*'B' => '#,##0',
            'C' => '#,##0',*/
            /*'D' => '@',
            'I' => '@',
            'K' => NumberFormat::FORMAT_TEXT,*/
            //'D' => NumberFormat::FORMAT_PERCENTAGE_00
        ];
    }


    public function bindValue(Cell $cell, $value)
    {
        if(in_array($cell->getColumn(), self::$textColumns)) {
            $cell->setValueExplicit($value, DataType::TYPE_STRING);

            return true;
        }
        
        return parent::bindValue($cell, $value);
    }
}


