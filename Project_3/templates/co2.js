const data2 = {
    labels: ['Africa',
             'Asia Pacific', 
             'Australia', 
             'Russia and Northwest Asia', 
             'Europe', 
             'Middle East', 
             'North America', 
             'South and Central America',
            'World',
            ],
    datasets: [{
        label: 'Co2 Emissions by Region (Metric Tons per capita)',
        data: [
            {id: 'Africa', emissions:
                {
                    2000: {MT: 1.35},
                    2018: {MT: 1.45},
                },
            },
            {id: 'Asia Pacific', emissions:
                {
                    2000: {MT: .77},
                    2018: {MT: 1.53},
                },

            },
            {id: 'Australia', emissions:
                {
                    2000: {MT:17.69},
                    2018: {MT:15.48},
                },

            },
            {id: 'Russia and Northwest Asia', emissions:
                {
                    2000: {MT: 6.53},
                    2018: {MT: 6.6},
                },

            },
            {id: 'Europe', emissions:
                {
                    2000: {MT: 7.83},
                    2018: {MT: 6.42},
                },

            },
            {id: 'Middle East', emissions:
                {
                    2000: {MT: 4.08},
                    2018: {MT: 5.64},
                },

            },
            {id: 'North America', emissions:
                {
                    2000: {MT: 20.11},
                    2018: {MT: 15.27},
                },

            },
            {id: 'South and Central America', emissions:
                {
                    2000: {MT: 2.45},
                    2018: {MT: 2.64},
                },

            },
            {id: 'World Average', emissions:
                {
                    2000: {MT: 3.81},
                    2018: {MT: 4.48},
                },

            },
        ],
        backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
        borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      };

const graph = document.getElementById('myGraph')
  
  const myGraph = new Chart(graph, {
      type: 'bar',
      data2,
      options: {
          parsing:{
              xAxisKey: 'id',
              yAxisKey:'emissions.2000.MT'
              },
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  function changeEmissions(){
      const years = document.getElementById('years').value;
      const emissions = document.getElementById('emissions').value;
      console.log(years);
      console.log(emissions);
  
      myGraph.config.options.parsing.yAxisKey = `emissions.${years}.${emissions}`;
      myGraph.update();
  }

