<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Usuario;
use App\Vista;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $usuario = auth()->user();

        $vistas = Vista::select('vista.*','uvista.*')
            ->join('uvista','uvista.Vista_idVista','=','vista.idVista')
            ->join('usuario','usuario.idUsuario','=','uvista.Usuario_idUsuario')
            ->where('activoVis',1)
            ->where('tipoVis','DESKTOP')
            ->where('Usuario_idUsuario',$usuario->idUsuario)
            ->get();

        $arr_vistas = [];
        foreach ($vistas as $uvista)
        {
            $arr_vistas[$uvista->codigoVis] = $uvista->nivelVis;
        }

        $modulos = [];
        $modulos["PERSONAL"] = false;
        $modulos["ASISTENCIA"] = false;
        $modulos["PLANILLA"] = false;
        $modulos["TRANSPORTE"] = false;
        $modulos["MANTENIMIENTO"] = false;
        $modulos["NEUMATICO"] = false;
        $modulos["COMBUSTIBLE"] = false;

        $user = [];
        $user["id"] = $usuario->idUsuario;
        $user["fullName"] = $usuario->nombreUsu;
        $user["username"] = $usuario->usuarioUsu;
        $user["password"] = $usuario->contraseniaUsu;
        //$resultado["avatar"] = '@/assets/images/avatars/13-small.png';
        $user["avatar"] = "/images/_/_/_/_/full-version/resources/js/src/assets/images/avatars/13-small.png";
        $user["email"] = 'generic@grupolibertad.pe';
        $user["role"] = 'client';
        $user["ability"][0]["action"] = 'manage';
        $user["ability"][0]["subject"] = 'all';
        $user["eCommerceCartItemsCount"] = '5';
        $user["views"] = $arr_vistas;
        /*$user["mods"] = $modulos;
        $user["current"] = "";*/



        $resultado["userData"] = $user;
        $resultado["accessToken"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQzMTIwNjE2LCJleHAiOjE2NDMxMjEyMTZ9.CWlEMC6HrYoOu0okkQxCzbkxXKkp2E9hM5N6AruLB4E";
        $resultado["refreshToken"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQzMTIwNjE2LCJleHAiOjE2NDMxMjEyMTZ9.ou0K5XvTfEehXS6gOsOa_MI8TU--Tn46b2uutggNrs8";

      
        /*{
          "userData": {
            "id": 1,
            "fullName": "John Doe",
            "username": "johndoe",
            "avatar": "/images/_/_/_/_/full-version/resources/js/src/assets/images/avatars/13-small.png",
            "email": "admin@demo.com",
            "role": "admin",
            "ability": [
              {
                "action": "manage",
                "subject": "all"
              }
            ],
            "extras": {
              "eCommerceCartItemsCount": 5
            }
          },
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQzMTIwNjE2LCJleHAiOjE2NDMxMjEyMTZ9.CWlEMC6HrYoOu0okkQxCzbkxXKkp2E9hM5N6AruLB4E",
          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQzMTIwNjE2LCJleHAiOjE2NDMxMjEyMTZ9.ou0K5XvTfEehXS6gOsOa_MI8TU--Tn46b2uutggNrs8"
        }*/
        
        return $resultado;

        //return view('home');
    }
}
