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


class DepositoExport extends DefaultValueBinder implements FromArray, WithHeadings, WithTitle, ShouldAutoSize, WithColumnFormatting, WithMapping, WithCustomValueBinder, WithStrictNullComparison
{
    //protected $rows;
    protected $filas;
    protected $titulo;
    protected $banco;
    protected static $textColumns = ['I',"K","k"];

    public function __construct(array $filas,$titulo,$banco)
    {
        $this->filas = $filas;
        $this->titulo = $titulo;
        $this->banco = $banco;
    }

    public function map($row): array
    {
        return [
            $row["tip"],
            $row["fes"],
            $row["fea"],
            $row["fed"],
            $row["det"],
            $row["tot"],
            $row["per"],
            $row["dni"],
            $row["apr"],
            $row["ban"],
            //$row["nro"],
            strval($row["nro"]),
        ];
    }

    public function headings(): array
    {
        return [
            'TIPO',
            'FECHA SOLICITUD',
            'FECHA APROBACION',
            'FECHA DEPOSITO',
            'DETALLE',
            'TOTAL',
            'TRABAJADOR',
            'DNI',
            'SOLICITADO POR',
            'BANCO',
            'NRO',
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
            'F' => NumberFormat::FORMAT_DATE_YYYYMMDD2,
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