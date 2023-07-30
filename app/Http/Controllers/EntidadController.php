<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request;
use DB;
use App\Entidad;
use App\Dato;
use App\Elemento;
use App\Estructura;
use App\Http\Controllers\Controller;

class EntidadController extends Controller 
{
    public function Listar()
    {
        $arr_entidad = Entidad::select('idEntidad','nombreEnt','activoEnt','Entidad_idExterno','Entidad_idDato')
            ->get();
        return $arr_entidad;
    }
    public function ListarSelect($tipos)
    {
        $tipos = explode("-", $tipos);

        $arr_tipos = Dato::select('idDato')
                    ->whereIn('valorDat',$tipos)
                    ->where('tipoDat',"ENTIDAD")
                    ->where('grupoDat',"GENERAL")
                    ->get();

        $ids = [];
        foreach($arr_tipos as $utipo)
        {
            $ids[] = $utipo->idDato;
        }

        $arr_entidades = Entidad::select('idEntidad','nombreEnt')
                            ->whereIn('Entidad_idDato',$ids)
                            ->get();

        return $arr_entidades;
    }
    public function ListarElementos($tipo, $entidad)
    {
        //$tipos = explode("-", $tipos);

        $arr_elementos = [];
        switch($tipo)
        {
            case "montaje":
                $arr_elementos = Elemento::select('idElemento','codigoEle','tmarca.valorDat as marca','tmodelo.valorDat as modelo')
                    ->join('dato as tmarca','tmarca.idDato','elemento.Marca_idDato')
                    ->join('dato as tmodelo','tmodelo.idDato','elemento.Modelo_idDato')
                    ->where('Actual_idEntidad',$entidad)
                    ->where('activoEle',1)
                    ->get();

                foreach($arr_elementos as $llave => $uelemento)
                {
                    $arr_elementos[$llave]["origen"] = $entidad;
                    $arr_elementos[$llave]["destino"] = $entidad;
                }

                break;
            case "desmontaje":
                $arr_elementos = Elemento::select('idElemento','codigoEle','tmarca.valorDat as marca','tmodelo.valorDat as modelo')
                    ->join('dato as tmarca','tmarca.idDato','elemento.Marca_idDato')
                    ->join('dato as tmodelo','tmodelo.idDato','elemento.Modelo_idDato')
                    ->where('Actual_idEntidad',$entidad)
                    ->where('activoEle',1)
                    ->get();

                foreach($arr_elementos as $llave => $uelemento)
                {
                    $arr_elementos[$llave]["origen"] = $entidad;
                    $arr_elementos[$llave]["destino"] = $entidad;
                }

                break;
            case "unidad":
                $arr_elementos = Elemento::select('idElemento','codigoEle','tmarca.valorDat as marca','tmodelo.valorDat as modelo','posicionMov')
                    ->join('dato as tmarca','tmarca.idDato','elemento.Marca_idDato')
                    ->join('dato as tmodelo','tmodelo.idDato','elemento.Modelo_idDato')
                    ->leftJoin('movimiento','movimiento.idMovimiento','elemento.Ultimo_idMovimiento')
                    ->where('Actual_idEntidad',$entidad)
                    ->where('activoEle',1)
                    ->get();

                foreach($arr_elementos as $uelemento)
                {
                    if(isset($asignados["e".$uelemento->posicionMov]))//verifica si hay duplicidad VERIFICARRRRRRR
                        $asignados["e".$uelemento->posicionMov] = $uelemento;
                    else
                        $asignados["e".$uelemento->posicionMov] = $uelemento;
                }

                $obj_aplicacion = Estructura::select('estructuraEst','cantidadEst')
                    ->join('aplicacion','aplicacion.Estructura_idEstructura','estructura.idEstructura')
                    ->where('Entidad_idEntidad',$entidad)
                    ->first();
                
                $estructura = [];
                $filas = explode("-", $obj_aplicacion->estructuraEst);
                foreach($filas as $ufila)
                {
                    $columnas = explode(",",$ufila);
                    $elementos = [];

                    foreach($columnas as $ucolumna)
                    {
                        $elemento = [];
                        if($ucolumna != "")
                        {
                            $elemento["nro"] = $ucolumna;
                            $elemento["est"] = "elemento";
                            $elemento["ele"] = [];
                            if(isset($asignados["e".$ucolumna]))
                            {
                                $uelemento = $asignados["e".$ucolumna];
                                $uelemento["caracteristicas"] = [];
                                $uelemento["origen"] = [];
                                $uelemento["destino"] = [];

                                $elemento["ele"][] = $uelemento;
                                
                                /*$elemento["codigoEle"] = $uelemento->codigoEle;
                                $elemento["marca"] = $uelemento->marca;
                                $elemento["modelo"] = $uelemento->modelo;
                                $elemento["caracteristicas"] = [];*/
                            }
                            else
                            {
                                $elemento["ele"] = [];
                                /*$uelemento["codigoEle"] = "";
                                $uelemento["marca"] = "";
                                $uelemento["modelo"] = "";
                                $uelemento["caracteristicas"] = [];*/
                            }    
                        }
                        elseif(count($columnas) == 1)
                            $elemento["est"] = "fila";
                        else
                            $elemento["est"] = "columna";
                        $elementos[] = $elemento;
                    }
                    $estructura[] = $elementos;
                }
                $arr_elementos["filas"] = $estructura;
                break;
        }

        return $arr_elementos;
    }
}