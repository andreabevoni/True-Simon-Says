$(document).ready(function () {

  var arraySimon = [];

  // il gioco comincia quando viene premuto il pulsante
  document.getElementById('start').addEventListener('click',
    function() {

      // creo un numero random fra 0 e 3 e lo inserisco nell'array
      arraySimon.push(Math.floor(Math.random()*4) + 1);

      console.log(arraySimon);

      var i = 0;

      var countdown = setInterval(simonSays, 500);

      function simonSays() {
        if (i < arraySimon.length) {
          var x = i;
          $(".ring:nth-child(" + arraySimon[i] + ")").addClass("active");
          setTimeout(function(){
            $(".ring:nth-child(" + arraySimon[x] + ")").removeClass("active");
          },500);
          i++;
        } else {
          clearInterval(countdown);
        }

      }

  });

});
