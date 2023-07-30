<?php 
namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithHeadings;

class VencimientoExport  implements FromArray, WithMultipleSheets, WithHeadings
{
    protected $vencimientos;
    protected $cabeceras;

    public function __construct( array $vencimientos,array $cabeceras)
    {
        $this->vencimientos = $vencimientos;
        $this->cabeceras = $cabeceras;
    }

    public function headings(): array
    {
        return $this->cabeceras;
    }

    public function array(): array
    {
        return $this->vencimientos;
    }

    public function sheets(): array 
    {
        $vencimientos = [ new DescuentoExport($this->vencimientos,$this->cabeceras)];
        return $vencimientos;
    }
}