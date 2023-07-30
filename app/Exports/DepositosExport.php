<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class DepositosExport implements FromArray, WithMultipleSheets
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
            new DepositoExport($this->todos['general'],"General","GENERAL"),
            new DepositoExport($this->todos['consolidado'],"Consolidado","CONSOLIDADO"),
            new DepositoExport($this->todos['alimentacion_bbva'],"BBVA Alim","BBVA"),
            new DepositoExport($this->todos['alimentacion_bcp'],"BCP Alim","BCP"),
            new DepositoExport($this->todos['alimentacion_interbank'],"IBK Alim","INTERBANK"),
            new DepositoExport($this->todos['otro_bbva'],"BBVA Otros","BBVA"),
            new DepositoExport($this->todos['otro_bcp'],"BCP Otros","BCP"),
            new DepositoExport($this->todos['otro_interbank'],"IBK Otros","INTERBANK"),
        ];

        return $todos;
    }
}

