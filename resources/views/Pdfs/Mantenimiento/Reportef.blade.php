<body>
<table id="cabecera" class="cabecera">
	<thead>
		<tr>
			<th class="logo">
				<img src="{{URL::asset('/images/minilogo.png')}}" height="40">
			</th>
			<th class="titulo">REPORTE DE FALLAS PARA FLOTA PESADA</th>
			<th class="codificacion">
				Código:  TL-MU-F-001<br>
				Versión: 001<br>
				Fecha:   19/03/2019<br>
				Página:  1 de 1<br>
			</th>
		</tr>
	</thead>
</table>
<table id="reportef" class="reportef">
	<thead>
		<tr>
			<th class="titulo" colspan="7">DATOS PRINCIPALES</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="subtitulo">OPERACION</td>
			<td colspan="3" class="cdetalle">{{ $cabecera["oper"] }}</td>
			<td class="subtitulo">DATOS DE LA UNIDAD</td>
			<td class="subtitulo">PLACA</td>
			<td class="subtitulo">KM.</td>
		</tr>
		<tr>
			<td class="subtitulo">OPERADOR</td>
			<td colspan="3" class="cdetalle">{{ $cabecera["ope"] }}</td>
			<td class="subtitulo">REMOLCADOR</td>
			<td class="cdetalle">{{ $cabecera["veh"] }}</td>
			<td class="cdetalle">{{ $cabecera["km"] }}</td>
		</tr>
		<tr>
			<td class="subtitulo">LIC. DE COND.</td>
			<td class="cdetalle">{{ $cabecera["lic"] }}</td>
			<td class="subtitulo">FECHA</td>
			<td class="cdetalle">{{ $cabecera["fec"] }}</td>
			<td class="subtitulo">SEMIREMOLQUE</td>
			<td class="cdetalle">{{ $cabecera["aco"] }}</td>
			<td class="cdetalle"></td>
		</tr>
	</tbody>
</table>
<table id="contenedor" width="100%">
	<tr>
		@foreach ($cuerpo as $fila)
			@if ($loop->first)
	        	<td><table class="reported" width="100%">
	    	@endif

		    @if($fila["tip"] == "a")
		    	<tr class="dtitulo">
		    		<th colspan="2">{{ $fila["det"] }}</th>
		    		<th>R</th>
		    		<th>S</th>
		    		<th>DETALLE</th>
		    	</tr>
		    @else
		    	<tr class="ddetalle">
		    		<td>{{ $fila["cod"] }}</td>
		    		<td>&nbsp;{{ $fila["det"] }}</td>
		    		@if($fila["tip"] == "VEHICULO")
		    			<td>X</td>
		    			<td></td>
		    		@elseif($fila["tip"] == "ACOPLE")
			    		<td></td>
			    		<td>X</td>
		    		@elseif($fila["tip"] == "AMBOS")
		    			<td>X</td>
		    			<td>X</td>
		    		@else
		    			<td></td>
		    			<td></td>
		    		@endif		    		
		    		<td>&nbsp;{{ $fila["val"] }}</td>
		    	</tr>
		    @endif

		    @if (isset($fila["div"]))
	        	</table></td><td><table class="reported" width="100%">
	    	@endif
		    @if ($loop->last)
		       </table></td>
		    @endif
		@endforeach
	 </tr>
</table>
<table class="firma">
	<tr>
		<th>FIRMA OPERADOR</th><th>FIRMA SUPERVISOR</th><th>FIRMA MANTENIMIENTO</th><th></th>
	</tr>
	<tr>
		<td class="fespacio"><img src="data:image/png;base64,{{$firma}}" height="60" /></td><td class="fespacio"></td><td class="fespacio"></td><td class="fespacio"></td>
	</tr>
</table>
<div class="page_break"></div>
<table class="evidencia">
	@if(count($imagenes)>0)
		<tr>
			<td>
				@if(isset($imagenes[0]))
					<img src="data:image/png;base64,{{$imagenes[0]}}" width="49%" />
				@endif
			</td>
			<td>
				@if(isset($imagenes[1]))
					<img src="data:image/png;base64,{{$imagenes[1]}}" width="49%" />
				@endif
			</td>
		</tr>
		<tr>
			<td>
				@if(isset($imagenes[2]))
					<img src="data:image/png;base64,{{$imagenes[2]}}" width="49%" />
				@endif
			</td>
			<td>
				@if(isset($imagenes[3]))
					<img src="data:image/png;base64,{{$imagenes[3]}}" width="49%" />
				@endif
			</td>
		</tr>
	@endif
	<tr><td class="tobservacion" colspan="2">Observaciones</td></tr>
	<tr><td class="dobservacion" colspan="2"> {{$cabecera["obs"]}} </td></tr>
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
		.page_break
		{
			page-break-before: always;
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
		#reportef
		{
			width: 100%;
		}
		#reportef, #reportef tr, #reportef th, #reportef td
		{
			border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;
			text-align: center;
		}
		#reportef .titulo
		{
			background-color: rgb(64,64,64);
			color: white;
			font-weight: bold;
			text-align: center;
			font-size: 0.4cm;
		}
		#reportef .subtitulo
		{
			background-color: rgb(64,64,64);
			color: white;
			font-weight: bold;
			font-size: 0.25cm;
			width: 15% !important;
		}
		#reportef .cdetalle
		{
			font-size: 0.3cm;
			font-weight: bold;
		}
		/*DETALLE DEL REPORTE*/
		#contenedor
		{
			width: 100%;
			margin: 0;
			padding: 0;
		}
		#contenedor tr td
		{
			width: 50%;
			margin: 0;
			padding: 0;
			vertical-align: top;

		}
		.reported
		{
			/*width: 100%;*/
			font-size: 0.24cm !important;
		}
		
		.reported, .reported tr, .reported th, .reported td
		{
			border-collapse: collapse;
			border:  0.005cm solid black;
		}
		
		.reported .dtitulo th
		{
			background-color: rgb(64,64,64);
			color: white;
			/*font-weight: bold;*/
			/*font-size: 0.25cm;*/
			text-align: center;
			height: 0.55cm !important;
		}
		.reported .ddetalle td
		{
			height: 0.275cm !important;
		}

		.reported tr td:nth-child(1)
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
		}

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
			width: 4.8625cm;
			height: 1.5cm;
			text-align: center;
		}
		.fespacio img
		{
			margin: 0 auto;
		}
		.evidencia, .evidencia tr, .evidencia tr td
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
		}

		/*ESTILOS GENERALES*/
		/*td
		{
			margin-top: 0.05cm !important;
			margin-bottom: 0.05cm !important;
		}
		#Contenedor
		{
			width: 100%;
			font-family: sans-serif;
		}
		#Espacio
		{
			width: 0.4cm;
			color: rgba(255,255,255,0);
		}
		#Contenedor2
		{
			border: 0.03cm solid black;
			width: 100%;
			border-collapse:  collapse;
		}*/
		





		/*#t1
		{
			font-weight: bold;
			text-align: center;
			font-size: 0.5cm;
		}
		#t2
		{
			font-weight: bold;
			text-align: center;
			font-size: 0.4cm;
		}
		#t3
		{
			text-align: center;
			font-size: 0.3cm;
		}
		#t4
		{
			font-weight: bold;
			text-align: center;
			font-size: 0.5cm;
			margin-bottom: 0.5cm !important;
		}
		#t5
		{
			border: 0.03cm solid black;
			font-weight: bold;
			text-align: center;
			font-size: 0.4cm;
		}
		#t6
		{
			font-weight: bold;
			text-align: center;
			font-size: 0.3cm;
			margin-top: 0.2cm !important;
			margin-bottom: 0.2cm !important;
		}
		.Datos td
		{
			font-size: 0.2cm;
			border: 0.03cm solid black;
			border-collapse:  collapse;
			margin-left: 0.05cm !important;
		}
		.Datos td:nth-child(1), .Datos td:nth-child(3)
		{
			width: 12%;
		}
		.Datos td:nth-child(2), .Datos td:nth-child(4)
		{
			width: 38%;
		}
		.Datos2 td
		{
			font-size: 0.3cm;
		}
		.Neto td
		{
			font-weight:  bold;
		}
		.Neto td:first-child
		{
			text-align:  right;
			font-size: 0.25cm;
		}
		.Fecha td
		{
			text-align: center;
		}
		.Firma td
		{
			margin-top:  1.5cm !important;
			text-align: center;
			font-weight: bold;
		}*/
		/*ESTILOS TABLA INGRESOS Y EGRESOS*/
		/*#Montos
		{
			width:  100%;
			border: 0.03cm solid black;
			border-collapse: collapse;
			margin-top:  0 !important;
			font-size: 0.25cm;
		}
		.Subtitulo
		{
			text-align:  center;
			font-weight:  bold;
			border: 0.03cm solid black;
			height: 0.33cm !important;
		}
		#Montos td
		{
			border: 0.03cm solid black;
			margin-left: 0.05cm !important;
			height: 0.33cm !important;
		}
		#Montos tr td:first-child
		{
			width: 60%;
		}
		#Montos tr td:nth-child(2)
		{
			text-align: center;
		}*/

	</style>