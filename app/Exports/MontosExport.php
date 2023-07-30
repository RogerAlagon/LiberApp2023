<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class MontosExport implements FromArray, WithMultipleSheets
{
    protected $todos;

    public function __construct(array $todos)
    {
        $this->todos = $todos;
    }

    public function array(): array
    {
        return $this->todos;
    }

    public function sheets(): array
    {
        $todos = [
            new MontoExport($this->todos['unitarios'],"Detallado"),
            new MontoExport($this->todos['agrupados'],"Agrupado"),
        ];

        return $todos;
    }
}

