<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model;

class Eventualidad extends Model 
{
    protected $table = 'eventualidad'; 
    protected $primaryKey = 'idEventualidad';
    protected $fillable = ["Evento_idEvento","Ciudad_idDato","latitudEvt","longitudEvt","fInicioEvt","hinicioEvt","ffinEvt","hfinEvt","activoEvt","tipoEvt","Servicio_idServicio"];
    public $timestamps = false;
}