$( document ).ready(function() {
  // Handler for .ready() called.


  // $( "#nav-ter" ).load( "terca.html", function() {
  //   alert( "Load was performed." );
  // });

  // quimicas
  $.get("http://localhost/template-ocupacao-bandejao/quimicas/segunda.html", function(data) {
    $("#nav-seg").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/quimicas/terca.html", function(data) {
    $("#nav-ter").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/quimicas/quarta.html", function(data) {
    $("#nav-qua").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/quimicas/quinta.html", function(data) {
    $("#nav-qui").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/quimicas/sexta.html", function(data) {
    $("#nav-sex").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/quimicas/sabado.html", function(data) {
    $("#nav-sab").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/quimicas/domingo.html", function(data) {
    $("#nav-dom").html(data);
  });


});
