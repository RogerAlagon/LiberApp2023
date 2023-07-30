<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

  <title>LiberAPP</title>

  <!-- Splash Screen/Loader Styles -->
  <link rel="stylesheet" type="text/css" href="{{ asset(mix('css/loader.css')) }}" />

  <!-- Styles -->
  <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">

  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ asset('images/logo/favicon.png') }}">

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
    rel="stylesheet">
</head>

<body>
  <noscript>
    <strong>LiberAPP funciona con JavaScript por favor habilite JavaScript para continuar.</strong>
  </noscript>
  <div id="loading-bg">
    <div class="loading-logo">
      <img src="{{ asset('logo.png') }}" alt="Logo" />
    </div>
    <div class="loading">
      <div class="effect-1 effects"></div>
      <div class="effect-2 effects"></div>
      <div class="effect-3 effects"></div>
    </div>
  </div>
  <div id="app">
  </div>

  <script src="{{ asset(mix('js/app.js')) }}"></script>
  <script>
    var registrarInactividad = function () {
      var t;
      window.onload = reiniciarTiempo;
      // Eventos del DOM
      document.onmousemove = reiniciarTiempo;
      document.onkeypress = reiniciarTiempo;
      document.onload = reiniciarTiempo;
      document.onmousemove = reiniciarTiempo;
      document.onmousedown = reiniciarTiempo; // aplica para una pantalla touch
      document.ontouchstart = reiniciarTiempo;
      document.onclick = reiniciarTiempo;     // aplica para un clic del touchpad
      document.onscroll = reiniciarTiempo;    // navegando con flechas del teclado
      document.onkeypress = reiniciarTiempo;

      function tiempoExcedido() {
        alert("Sesión Caducada: 2 Horas de Inactividad.")
        window.location.reload();
      }

    function reiniciarTiempo() {
        clearTimeout(t);
        t = setTimeout(tiempoExcedido, 6300000);
        //window.location.reload();
        // 1000 milisegundos = 1 segundo
    }
};

registrarInactividad();
  </script>

</body>

</html>
