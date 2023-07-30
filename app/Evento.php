<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Evento extends Model 
{
    protected $table = 'evento'; 
    protected $primaryKey = 'idEvento';
    protected $fillable = ["alteracionEve","nombreEve","origenEve"];
    public $timestamps = false;
}