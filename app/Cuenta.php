<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Cuenta extends Model 
{
    protected $table = 'cuenta'; 
    protected $primaryKey = 'idCuenta';
    protected $fillable = ["nombreCue"]; 
    public $timestamps = false;
}