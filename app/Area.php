<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Area extends Model 
{
    protected $table = 'area'; 
    protected $primaryKey = 'idArea';
    protected $fillable = ["nombreAre","tipoAre"];
    public $timestamps = false;
}