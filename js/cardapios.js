$( document ).ready(function() {
  // Handler for .ready() called.


  // $( "#nav-ter" ).load( "terca.html", function() {
  //   alert( "Load was performed." );
  // });

  $.get("http://localhost/template-ocupacao-bandejao/central/segunda.html", function(data) {
    $("#nav-seg").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/central/terca.html", function(data) {
    $("#nav-ter").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/central/quarta.html", function(data) {
    $("#nav-qua").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/central/quinta.html", function(data) {
    $("#nav-qui").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/central/sexta.html", function(data) {
    $("#nav-sex").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/central/sabado.html", function(data) {
    $("#nav-sab").html(data);
  });
  $.get("http://localhost/template-ocupacao-bandejao/central/domingo.html", function(data) {
    $("#nav-dom").html(data);
  });



var raw_quimicas_data = [];

$.ajax({
  url: 'https://hackaton-usp-api.herokuapp.com/api/v1/occupation?restaurant=1&callback=?',
  success: function (data) {
    console.log(data);
    $.each(data, function() {
          $.each(this, function(k, v) {
              day_of_week = k;
              console.log(day_of_week);
              occupation = v;
          });
      })
  }
});

var monday = [];
var tuesday = [];
var wednesday = [];

$.each(raw_quimicas_data, function() {
      $.each(this, function(k, v) {
          day_of_week = k;
          console.log(day_of_week);
          occupation = v;
      });
  });

});
