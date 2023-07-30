<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comprobante extends Model
{
    protected $table = 'comprobante';
    protected $primaryKey = 'idComprobante';
    protected $fillable = ["serieCom","numeroCom","femisionCom","fvencimientoCom","fpagoCom","Externo_idExterno","Usuario_idUsuario","estadoCom", 
                           "fprogramacionCom","totalCom","pagadoCom","saldoCom","clienteCom","fingresoCom","encuadreCom","observacionCom","Facturado_idUsuario"];
    public $timestamps = false;
}