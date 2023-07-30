<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Empresa extends Model 
{
    protected $table = 'empresa'; 
    protected $primaryKey = 'idEmpresa'; 
    protected $fillable = ["rucEmp","nombreEmp","mtcEmp","entidadSunatEmp","principalEmp"]; 
    public $timestamps = false;
}