  var map = L.map('map', {
      zoom: 4.5,
      fullscreenControl: true,
      timeDimension: true,
      timeDimensionControl: true,
      timeDimensionControlOptions: {
          position: 'bottom-left',
      },
      center: [23.2599, 77.4126]
  });
  L.esri.basemapLayer('NationalGeographic').addTo(map);

  var vari = 0;
  var lyr_name;
  var date = document.getElementById('dates');
  var myVar;
  var sp;
  var speed_val;
  var temp = 0;
  $('#test').text('Play');

// url = 'https://api.rootnet.in/covid19-in/stats/latest'
// data = requests.get(url)
// print(data.content)
