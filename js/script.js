// Variante del Simon Says simile all'originale

$(document).ready(function () {

  // definisco le variabili globali che mi servono
  var arraySimon = [];

  // il gioco comincia quando viene premuto il pulsante
  document.getElementById('start').addEventListener('click',
    function() {

      // creo un numero random fra 0 e 3 e lo inserisco nell'array
      arraySimon.push(Math.floor(Math.random()*4) + 1);

      // utilizzo un countdown per mostrare le mosse da fare ad intervalli regolari
      var i = 0;
      var countdown = setInterval(simonSays, 400);
      function simonSays() {

        if (i < arraySimon.length) {

          // mi salvo la variabile di controllo perché questa viene modificata prima che parta il timeout che toglie la classe
          var x = i;

          // aggiungo la classe active per mostrare la mossa
          $(".ring:nth-child(" + arraySimon[i] + ")").addClass("active");

          // tolgo la classe active dopo un piccolo intervallo (deve essere inferiore a quello del countdown o non funziona)
          setTimeout(function(){
            $(".ring:nth-child(" + arraySimon[x] + ")").removeClass("active");
          },200);

          i++;
        } else {
          clearInterval(countdown);
        }

      }

  });

});
