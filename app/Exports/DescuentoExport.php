<?php 
namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithHeadings;

class DescuentoExport  implements FromArray, WithMultipleSheets, WithHeadings
{
    protected $descuentos;
    protected $cabeceras;

    public function __construct( array $descuentos,array $cabeceras)
    {
        $this->descuentos = $descuentos;
        $this->cabeceras = $cabeceras;
    }

    public function headings(): array
    {
        return $this->cabeceras;
    }

    public function array(): array
    {
        return $this->descuentos;
    }

    public function sheets(): array 
    {
        $descuentos = [ new DescuentoExport($this->descuentos,$this->cabeceras)];
        return $descuentos;
    }
}