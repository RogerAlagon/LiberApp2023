<body>
<table id="cabecera" class="cabecera">
	<thead>
		<tr>
			<th class="logo">
				<img src="{{URL::asset('/images/minilogo.png')}}" height="40">
			</th>
			<th class="titulo">MANTENIMIENTOS PREVENTIVOS</th>
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
			<th class="titulo" colspan="8">REPORTE ZZZ-001</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="subtitulo">MANTENIMIENTO</td>
			@foreach ($cabecera as $ufecha)
				<td class="cdetalle">{{ $ufecha }}</td>				
			@endforeach
		</tr>
		@foreach ($cuerpo as $ucuerpo)
			<tr>
				<td>{{$ucuerpo["nom"]}}</td>
				@foreach ($ucuerpo["asi"] as $uasignacion)
					<td class="cdetalle">{{ $uasignacion }}</td>				
				@endforeach
			</tr>
		@endforeach
</tbody>
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