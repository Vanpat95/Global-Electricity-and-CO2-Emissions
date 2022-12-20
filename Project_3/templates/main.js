
    const data = {
      labels: ['Africa',
               'Asia Pacific', 
               'Australia', 
               'Russia and Northwest Asia', 
               'Europe', 
               'Middle East', 
               'North America', 
               'South and Central America'],
      datasets: [{
          label: 'Energy Production by Type and Region (TWh)',
          data: [
              {id: 'Africa', electricity:
                  {
                      2000: {coal: 239.068, gas: 930.341, hydro: 75.246, solar: .013 , oil: 46.263 , wind: .176, nuclear: 13.010},
                      2018: {coal: 323.308, gas: 338.3491, hydro: 131.155, solar: 9.850, oil: 79.318, wind: 14.287, nuclear: 11.090},
                  },
              },
              {id: 'Asia Pacific', electricity:
                  {
                      2000: {coal: 2174.519, gas: 599.698, hydro: 521.652, solar: .428 , oil: 421.966 , wind: 2.564, nuclear: 500.040},
                      2018: {coal: 7286.146, gas: 1477.656, hydro: 1710.8557, solar: 219.889, oil: 198.993, wind: 388.003, nuclear: 493.336}
                  },
              },
              {id: 'Australia', electricity:
                  {
                      2000: {coal: 163.477, gas: 15.197, hydro: 16.196, solar: .038 , oil: 2.06 , wind: .056, nuclear: 0},
                      2018: {coal: 149.144, gas: 48.945, hydro: 15.831, solar: 9.929, oil: 5.295, wind: 15.164, nuclear: 0},
                  },
              },
              {id: 'Russia and Northwest Asia', electricity:
                  {
                  2000: {coal: 214.234, gas: 456.761, hydro: 208.430, solar: 0, oil: 44.968, wind: .003, nuclear: 138.992},
                  2018: {coal: 273.952, gas: 680.414, hydro: 244.314, solar: .944, oil: 8.530, wind: .828, nuclear: 206.657},
               },
              },
              {id: 'Europe', electricity:
                  {
                  2000: {coal: 1073.285, gas: 557.227, hydro: 617.664, solar: .134 , oil: 192.969 , wind: 22.455, nuclear: 1048.821},
                  2018: {coal: 856.639, gas: 729.892, hydro: 645.255, solar: 138.557, oil: 56.076, wind: 402.775, nuclear: 935.810},
                  },
              },
              {id: 'Middle East', electricity:
                  {
                  2000: {coal: 29.669, gas: 235.060, hydro: 10.722, solar: 0, oil: 195.093, wind: .040, nuclear: 0},
                  2018: {coal: 21.269, gas: 781.644, hydro: 14.506, solar: 6.102, oil: 392.334, wind: 1.132, nuclear: 6.885},
                  },
              },
              {id: 'North America', electricity:
                  {
                  2000: {coal: 2263.256, gas: 722.012, hydro: 662.596, solar: .542, oil: 229.526, wind: 5.933, nuclear: 874.086},
                  2018: {coal: 1326.302, gas: 1838.025, hydro: 707.879, solar: 101.342, oil: 66.656, wind: 321.679, nuclear: 963.244},
                  },
              },
              {id: 'South and Central America', electricity:
                  {
                  2000: {coal: 26.196, gas: 96.735, hydro: 555.652, solar: .002 , oil: 102.673, wind: 0.252, nuclear: 12.223},
                  2018: {coal: 70.386, gas: 243.535, hydro: 718.207, solar: 12.739, oil: 113.946, wind: 65.752, nuclear: 22.546},
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
                  'rgba(0, 0, 0, 0.2)'
                ],
              borderColor: [
                  'rgba(255, 26, 104, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(0, 0, 0, 1)'
                ],
                borderWidth: 1
              }]
            };
  
  
  const ctx = document.getElementById('myChart')
  
  const myChart = new Chart(ctx, {
      type: 'bar',
      data,
      options: {
          parsing:{
              xAxisKey: 'id',
              yAxisKey:'electricity.2000.coal'
              },
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  function changeElectricity(){
      const year = document.getElementById('year').value;
      const electricity = document.getElementById('electricity').value;
      console.log(year);
      console.log(electricity);
  
      myChart.config.options.parsing.yAxisKey = `electricity.${year}.${electricity}`;
      myChart.update();
  }