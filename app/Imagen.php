<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
    protected $table = 'imagen';
    protected $primaryKey = 'idImagen';
    protected $fillable = ["imagenIma","fechaIma","detalleIma"];

    public $timestamps = false;
}