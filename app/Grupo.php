<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Grupo extends Model 
{
    protected $table = 'grupo'; 
    protected $primaryKey = 'idGrupo';
    protected $fillable = ["nombreGru","Entidad_idDato","Area_idArea"];
    public $timestamps = false;
}