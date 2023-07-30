<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Material extends Model 
{
    protected $table = 'material'; 
    protected $primaryKey = 'idMaterial'; 
    protected $fillable = ["nombreMat","codigoMat","stockMat","unidadMat","maximoMat","minimoMat"]; 
    public $timestamps = false;
}