$( document ).ready(function() {
  // Handler for .ready() called.


  // $( "#nav-ter" ).load( "terca.html", function() {
  //   alert( "Load was performed." );
  // });

  // pusp
  $.get("http://localhost/template-ocupacao-bandejao/pusp/segunda.html", function(data) {
    $("#nav-seg").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/pusp/terca.html", function(data) {
    $("#nav-ter-").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/pusp/quarta.html", function(data) {
    $("#nav-qua").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/pusp/quinta.html", function(data) {
    $("#nav-qui").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/pusp/sexta.html", function(data) {
    $("#nav-sex").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/pusp/sabado.html", function(data) {
    $("#nav-sab").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/pusp/domingo.html", function(data) {
    $("#nav-dom").html(data);
  });


});
