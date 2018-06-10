$( document ).ready(function() {
  // Handler for .ready() called.


  // $( "#nav-ter" ).load( "terca.html", function() {
  //   alert( "Load was performed." );
  // });

  // pusp
  $.get("http://127.0.0.1:8080/pusp/segunda.html", function(data) {
    $("#nav-seg").html(data);
  });
  $.get("http://127.0.0.1:8080/pusp/terca.html", function(data) {
    $("#nav-ter").html(data);
  });
  $.get("http://127.0.0.1:8080/pusp/quarta.html", function(data) {
    $("#nav-qua").html(data);
  });
  $.get("http://127.0.0.1:8080/pusp/quinta.html", function(data) {
    $("#nav-qui").html(data);
  });
  $.get("http://127.0.0.1:8080/pusp/sexta.html", function(data) {
    $("#nav-sex").html(data);
  });
  $.get("http://127.0.0.1:8080/pusp/sabado.html", function(data) {
    $("#nav-sab").html(data);
  });
  $.get("http://127.0.0.1:8080/pusp/domingo.html", function(data) {
    $("#nav-dom").html(data);
  });

  loadData(4,0)
});

function loadData(restaurant, dayOfWeek){
  $.ajax({
    url: 'https://hackaton-usp-api.herokuapp.com/api/v1/occupation?restaurant='+restaurant,
    success: function (data) {

      console.log(data.data[dayOfWeek].occupation)
      plotChart(dayOfWeek, data.data[dayOfWeek].occupation, 1)
      plotChart(dayOfWeek, data.data[dayOfWeek].occupation, 2)
    }
  });
}


function plotChart(dayOfWeek, data, type){
  
  formattedData = [];
  for (var i = 0; i < data.length; i++) {

    hour = data[i].hour.split(":")[0];
    valid = false;
    if(type == 1 && hour < 16){
      valid = true
    }

    if(type == 2 && hour > 16){
      valid = true
    }

    if(valid){
      var item = {};
        item.x = moment(data[i].hour, "HH:mm:ss")
        item.y = data[i].occupation * 25

        formattedData.push(item);
    }
      
  }
  
  element = document.getElementById("myChart_"+dayOfWeek+"_"+type);
  if(!element){
    console.log('Nao', "myChart_"+dayOfWeek+"_"+type)
    return;
  }

  var ctx = element.getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            // label: ['Votes', 'askda'],
              // labels: ["11:15", "11:30", "11:45", "12:15", "12:30", "12:45", "13:15", "13:30", "13:45", "14:15"],
              datasets: [{
                  label: 'Lotação',

                  borderColor: 'rgb(11,130,151)',
                  backgroundColor: 'rgb(11,130,151,0.15)',
                  fill: true,
                    borderDash: [5, 10],
                  data: formattedData,
                    // 30, 55, 60, 85, 88, 75, 54, 40, 35, 20, 6, 5, 2, 1, 10],
                  borderWidth: 1
              },


            ]
          },
          options: {
            // showAllTooltips: true,

            tooltips: {
              callbacks: {
                // title: (items, data) => data.datasets[items[0].datasetIndex].data[items[0].index].x,
                title: (items, data) => '',
                label: (item, data) => data.datasets[item.datasetIndex].data[item.index].y + '%'
              }
            },
              scales: {
                  yAxes: [{
                      type: 'linear',
                      scaleLabel: {
                        display: true,
                        labelString: "% Lotação"
                      },
                      ticks: {
                          beginAtZero:true,
                          stepSize: 25,
                          suggestedMax: 100
                      },
                      gridLines: {
                        display: true
                      }
                  }],
                  xAxes: [{
                    // scaleLabel: {
                    //   display: true
                    // },
                    type: 'time',
                    distribution: 'series',
                    time: {
                      unit: "minute",
                      // unitStepSize: 15,
                      displayFormats: {
                        minute: "HH:mm"
                      },
                      ticks: {
                          // stepSize: 0.5,
                          source: 'auto',
                          autoSkip: false,
                          offset: true,
                          beginAtZero:true
                      }

                    },
                      // bounds: {
                      //   ticks: true
                      // },

                  }]
              },
              elements: {
                  line: {
                      // tension: 0, // disables bezier curves
                  },
                  // yAxisID: 'oi'
              }
          }
      });
}