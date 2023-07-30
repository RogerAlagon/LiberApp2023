<body>
<table id="cabecera" class="cabecera">
	<thead>
		<tr>
			<th class="logo">
				<img src="{{URL::asset('/images/minilogo.png')}}" height="40">
			</th>
			<th class="titulo">ORDEN DE TRABAJO Nro. {{ $cabecera["idOrdent"] }}</th>
			<th class="codificacion">
				Código:  TL-MU-F-003<br>
				Versión: 003<br>
				Fecha:   10/12/2020<br>
				Página:  1 de 1<br>
			</th>
		</tr>
	</thead>
</table>
<table id="trabajo" class="trabajo">
	<thead>
		<tr>
			<th class="titulo" colspan="8">DATOS PRINCIPALES</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="subtitulo">PLACA</td>
			<td class="cdetalle">{{ $cabecera["placaVeh"] }}</td>
			<td class="subtitulo">MARCA</td>
			<td class="cdetalle">{{ $cabecera["marca"] }}</td>
			<td class="subtitulo">MODELO</td>
			<td class="cdetalle">{{ $cabecera["modelo"] }}</td>
			<td class="subtitulo">TIPO UND.</td>
			<td class="cdetalle">{{ $cabecera["tipo"] }}</td>
			
		</tr>
		<tr>
			<td class="subtitulo">F.INGRESO</td>
			<td class="cdetalle">{{ date('Y-m-d', strtotime($cabecera["fechaOrd"])) }}</td>
			<td class="subtitulo">H. INGRESO</td>
			<td class="cdetalle">{{ date('H:i:s', strtotime($cabecera["fechaOrd"])) }}</td>
			<td class="subtitulo">F.SALIDA</td>
			<td class="cdetalle"></td>
			<td class="subtitulo">H. SALIDA</td>
			<td class="cdetalle"></td>
			<!--<td class="subtitulo">REQ.</td>
			<td class="cdetalle"></td>-->
		</tr>
</tbody>
</table>
<table id="trabajo" class="trabajo">
	<tbody>
		<tr>
			<td class="subtitulo">OPERACIÓN</td>
			<td class="cdetalle">{{ $cabecera["cuenta"] }}</td>
			<!--<td class="subtitulo">T. MANTTO.</td>
			<td class="cdetalle">{{ $cabecera["mantenimientoOrd"] }}</td>-->
			<td class="subtitulo">TALLER</td>
			<td class="cdetalle">{{ $cabecera["taller"] }}</td>
			<td class="subtitulo">Km.</td>
			<td class="cdetalle"></td>
			<!--<td class="subtitulo">O.T.</td>
			<td class="cdetalle">{{ $cabecera["idOrdent"] }}</td>-->
		</tr>
	</tbody>
</table>
<table class="contenedor" id="fallas" width="100%">
	<tr class="dtitulo">
		<th colspan="8" class="titulo">CORRECTIVOS</th>
	</tr>
	<tr class="dtitulo">
		<th>ITEM</th>
		<th>APARTADO</th>
		<th>COMPONENTE</th>
		<th>FALLA</th>
		<th>CLASIFICACIÓN</th>
		<th>FECHA</th>
		<th>R.F.</th>
		<th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TÉCNICO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
	</tr>
	@foreach ($correctivos as $nro => $ucorrectivo)
	<tr class="ddetalle">
    	<td>C{{$nro+1}}</td>
		<td>{{$ucorrectivo["apa"]}}</td>
		<td>{{$ucorrectivo["com"]}}</td>
		<td>{{$ucorrectivo["det"]}}</td>
		<td>{{$ucorrectivo["mot"]}}</td>
		<td>{{$ucorrectivo["fechaBac"]}}</td>
		@if ( $ucorrectivo["estadoBac"] == 'REPROGRAMADO')
			<td>BACKLOG</td>
		@elseif( $ucorrectivo["estadoBac"] == 'PENDIENTE' )
			<td>PENDIENTE</td>
		@else 
			<td>{{ $ucorrectivo["rf"] }}</td>
		@endif
		<td></td>
    </tr>
	@endforeach
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>

</table>
@if(count($preventivos) > 0)
<table class="contenedor" id="fallas" width="100%">
	<tr class="dtitulo">
		<th colspan="6" class="titulo">PREVENTIVOS</th>
	</tr>
	<tr class="dtitulo">
		<th>ITEM</th>
		<th>GRUPO</th>
		<th>TIPO MANTENIMIENTO</th>
		<th>FRECUENCIA</th>
		<th>FECHA</th>
		<th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TÉCNICO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
	</tr>
	@foreach ($preventivos as $nro => $upreventivo)
		<tr class="ddetalle">
	    	<td>P{{$nro+1}}</td>
			<td>{{$upreventivo["apa"]}}</td>
			<td>{{$upreventivo["com"]}}</td>
			<td>{{$upreventivo["det"]}}</td>
			<td>{{$upreventivo["fechaBac"]}}</td>
			<td></td>
	    </tr>
	@endforeach
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
</table>
@endif
<table class="contenedor" id="actividades" width="100%">
	<tr class="dtitulo">
		<th>ITEM</th>
		<th>TRABAJOS REALIZADOS</th>
		<th>CAUSA/MOTIVO DE LA FALLA</th>
		<th>TÉCNICO</th>
		<th>H. INICIO</th>
		<th>H.FIN</th>
		<th>FIRMA</th>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<!--<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>-->
</table>
<table class="contenedor" width="100%">
	<tr class="dtitulo">
		<th>ITEM</th>
		<th>OBSERVACIONES Y TAREAS PENDIENTES</th>
		<th>REPUESTOS PENDIENTES</th>
		<th>TEC. QUE REPORTA</th>
	</tr>
	<tr class="ddetalle2">
		<td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle2">
		<td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle2">
		<td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle2">
		<td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle2">
		<td></td><td></td><td></td><td></td>
	</tr>
	<!--<tr class="ddetalle">
		<td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td>
	</tr>
	<tr class="ddetalle">
		<td></td><td></td><td></td><td></td>
	</tr>-->
</table>
<table class="firma">
	<tr>
		<th>FIRMA SUPERVISOR</th><th>FIRMA OPERACIONES</th><th>FIRMA MANTENIMIENTO</th>
	</tr>
	<tr>
		<td class="fespacio"></td><td class="fespacio"></td><td class="fespacio"></td>
	</tr>
</table>
</body>


	<style>
		@page
		{
            margin: 0.6cm;
        }
        @font-face
        {
  			font-family: 'Helvetica';
  			/*font-style: normal;
  			font-weight: normal;
  			src: url(http://themes.googleusercontent.com/static/fonts/opensans/v8/cJZKeOuBrn4kERxqtaUH3aCWcynf_cDxXwCLxiixG1c.ttf) format('truetype');*/
		}
		body
		{
			font-family: 'Helvetica';
		}
        /*CABECERA*/
		#cabecera
		{
			width: 100%;
		}
		#cabecera, #cabecera tr, #cabecera th
		{
			border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;
		}
		#cabecera .logo
		{
			width: 4cm;
		}
		#cabecera .titulo
		{
			text-align: center;
		}
		#cabecera .codificacion
		{
			font-size: 0.2cm;
			width: 4cm;
		}
		/*CABECERA DEL REPORTE*/
		#trabajo
		{
			width: 100%;
		}
		#trabajo, #trabajo tr, #trabajo th, #trabajo td
		{
			border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;
			text-align: center;
		}
		#trabajo .titulo
		{
			background-color: rgb(64,64,64);
			color: white;
			font-weight: bold;
			text-align: center;
			font-size: 0.3cm;
		}
		#trabajo .subtitulo
		{
			background-color: rgb(64,64,64);
			color: white;
			font-weight: bold;
			font-size: 0.25cm;
			width: 8% !important;
		}
		#trabajo .cdetalle
		{
			font-size: 0.26cm;
			font-weight: bold;
		}
		/*DETALLE DEL REPORTE*/
		.contenedor
		{
			width: 100%;
			margin: 0;
			padding: 0;
			font-size: 0.25cm !important;
			vertical-align: top;
		}

		.contenedor, .contenedor tr, .contenedor th, .contenedor td
		{
			border-collapse: collapse;
			border:  0.005cm solid black;
		}
		
		.contenedor .dtitulo th
		{
			background-color: rgb(64,64,64);
			color: white;
			/*font-weight: bold;*/
			/*font-size: 0.25cm;*/
			text-align: center;
			height: 0.35cm !important;
			font-size: 0.20cm !important;
		}
		.contenedor .ddetalle td
		{
			height: 0.5cm !important;
			text-align: center;
		}

		.contenedor .ddetalle2 td
		{
			height: 0.3cm !important;
			text-align: center;
		}

		#fallas tr th:nth-child(1)
		{
			width: 3% !important;
		}
		#fallas tr th:nth-child(2)
		{
			width: 20% !important;
		}
		#fallas tr th:nth-child(3)
		{
			width: 27% !important;
		}
		#fallas tr th:nth-child(4)
		{
			width: 20% !important;
		}
		#fallas tr th:nth-child(5)
		{
			width: 10% !important;
		}
		#fallas tr th:nth-child(6)
		{
			width: 10% !important;
		}
		#fallas tr th:nth-child(7)
		{
			width: 10% !important;
		}
		#actividades tr th:nth-child(1)
		{
			width: 3% !important;
		}
		#actividades tr th:nth-child(2)
		{
			width: 67% !important;
		}
		#actividades tr th:nth-child(3)
		{
			width: 8% !important;
		}
		#actividades tr th:nth-child(4)
		{
			width: 7% !important;
		}
		#actividades tr th:nth-child(5)
		{
			width: 5% !important;
		}
		#actividades tr th:nth-child(6)
		{
			width: 5% !important;
		}
		#actividades tr th:nth-child(7)
		{
			width: 5% !important;
		}




		/*.reported tr td:nth-child(1)
		{
			width: 10% !important;
			text-align: center;
		}
		.reported tr td:nth-child(3), .reported tr td:nth-child(4)
		{
			width: 5% !important;
			text-align: center;
		}
		.reported tr td:nth-child(2)
		{
			width: 40% !important;
		}
		.reported tr td:nth-child(5)
		{
			width: 40% !important;
			font-size: 0.2cm !important;
		}*/

		.firma
		{
			width: 9.85cm;
			position: absolute;
			left: 0.05cm;
			top: 26.5cm;
		}
		.firma, .firma tr, .firma th, .firma td
		{
			border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;
			font-size: 0.25cm !important
		}
		.firma th
		{
			background-color: rgb(64,64,64);
			color: white;
			text-align: center;
			height: 0.4cm !important;
		}
		.fespacio
		{
			width: 6.4833cm;
			height: 1.5cm;
			text-align: center;
		}
		.fespacio img
		{
			margin: 0 auto;
		}
		/*.evidencia, .evidencia tr, .evidencia tr td
		{
			border: 1px solid black;
			border-collapse: collapse;
		}
		.evidencia .tobservacion
		{
			background-color: rgb(64,64,64);
			color: white;
			font-weight: bold;
			text-align: center;
		}
		.evidencia .dobservacion
		{
			text-align: center;
		}*/
	</style>