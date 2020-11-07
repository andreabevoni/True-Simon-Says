// Variante del Simon Says simile all'originale

$(document).ready(function () {
  // definisco le variabili globali che mi servono
  var arraySimon = [];
  var arrayUser = [];
  var error = false;
  var score = 0;

  // il primo round comincia comincia quando viene premuto il pulsante
  document.getElementById('start').addEventListener('click', round);
  // quando un utente clicca un settore faccio i controlli
  $(".ring.click").click(function() {
    var index = $(this).index() + 1;
    // controllo se il settore cliccato corrisponde al settore illuminato, altrimenti il gioco termina
    if (index === arraySimon[arrayUser.length]) {
      arrayUser.push(index);
    } else {
      error = true;
      console.log("GAMEOVER");
    }
    // se l'utente ha azzeccato tutte le combinazioni, aumento il punteggio di 1 e procedo al round successivo
    if ((arrayUser.length === arraySimon.length) && (error === false)) {
      score++;
      if (score < 10) {
        document.getElementById("score").innerHTML = "00" + score;
      } else if (score < 100) {
        document.getElementById("score").innerHTML = "0" + score;
      } else {
        document.getElementById("score").innerHTML = score;
      }
      round();
    }
  });


  // FUNZIONI

  // funzione che gestisce un round di Simon Says
  function round() {
    // resetto l'array di appoggio per confrontare i click dell'utente con le mosse del simon says
    arrayUser = [];
    // tolgo all'utente la possibilitá di cliccare sui lati del simon says quando questo sta mostrando le mosse
    $(".ring").each(function () {
      $(this).removeClass("click");
    });
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
        // finito il ciclo delle mosse CPU, consento all'utente di poter cliccare sui lati del simon says
        $(".ring").each(function () {
          $(this).addClass("click");
        });
        clearInterval(countdown);
      }
    }
  }

  // funzione che gestisce il gameover
  function gameover() {

  }













});
