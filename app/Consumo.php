<?php 

namespace App;

use Illuminate\Database\Eloquent\Model;

class Consumo extends Model 
{
    protected $table = 'consumo'; 
    protected $primaryKey = 'idConsumo';
    protected $fillable = ["Cuenta_idDato","Grupo_idDato","rutaCon","nombreCon","Externo_idExterno"];
    public $timestamps = false;
}

