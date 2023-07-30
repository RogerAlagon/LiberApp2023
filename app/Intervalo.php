<?php 

namespace App;

use Illuminate\Database\Eloquent\Model;

class Intervalo extends Model 
{
    protected $table = 'intervalo'; 
    protected $primaryKey = 'idIntervalo';
    protected $fillable = ["nombreInt","cargaInt","galonajesInt","unidadesInt","kilometrajeInt","Consumo_idConsumo"];
    public $timestamps = false;
}