
function markerSize(emissions) {
  return Math.sqrt(emissions) * 250000;
}

var regions = [
  {
    location: [-9.622414, 38.991708],
    yr2000: {
      name:"Eastern & Southern Africa",
      emissions:0.9003991497578829
    },
    latest: {
      name: "Eastern & Southern Africa",
      emissions:0.9335412011362272
    }
  },
  {
    location: [6.630212, 1.894516],
    yr2000: {
      name:"Western & Central Africa",
      emissions:0.447243620092775
    },
    latest: {
      name: "Western & Central Africa",
      emissions:0.515544238958445
    }
  },
  {
    location: [28.686362, 34.520106],
    yr2000: {
      name:"Western Asia",
      emissions:3.16330493711316
    },
    latest: {
      name: "Western Asia",
      emissions:4.438715965413571
    }
  },
  {
    location: [-24.748223, 133.404932],
    yr2000: {
      name:"Australia",
      emissions:17.689656972797998
    },
    latest: {
      name: "Australia",
      emissions:15.475516485656
    }
  },
  {
    location: [50.099039, 24.973782],
    yr2000: {
      name:"Central Europe and the Baltic States",
      emissions:6.53438652674119
    },
    latest: {
      name: "Central Europe and the Baltic States",
      emissions:6.59723248598714
    }
  },
  {
    location: [63.574458, 83.411099],
    yr2000: {
      name:"Europe & Central Asia",
      emissions:7.48216015938433
    },
    latest: {
      name: "Europe & Central Asia",
      emissions:6.69010595705676
    }
  },
  {
    location: [47.237146, 7.348560],
    yr2000: {
      name:"European Union",
      emissions:7.83150674729532
    },
    latest: {
      name: "European Union",
      emissions:6.4240387413347495
    }
  },
  {
    location: [-10.739228, -60.698493],
    yr2000: {
      name:"Latin America & Caribbean",
      emissions:2.44607972360996
    },
    latest: {
      name: "Latin America & Caribbean",
      emissions:2.63736256899646
    }
  },
  {
    location: [20.687522, 15.551274],
    yr2000: {
      name:"Middle East & North Africa",
      emissions:4.07884205379951
    },
    latest: {
      name: "Middle East & North Africa",
      emissions:5.638657141208559
    }
  },
  {
    location: [45.075622, -100.365481],
    yr2000: {
      name:"North America",
      emissions:20.1148175290478
    },
    latest: {
      name: "North America",
      emissions:15.2708756112257
    }
  },
  {
    location: [25.537123, 88.795954],
    yr2000: {
      name:"South Asia",
      emissions:0.773531071458188
    },
    latest: {
      name: "South Asia",
      emissions:1.52665123826178
    }
  }
];
var yr2000Markers = [];
var latestMarkers = [];

for (var i = 0; i < regions.length; i++) {
  yr2000Markers.push(
    L.circle(regions[i].location, {
      stroke: false,
      fillOpacity: 0.8,
      color: "green",
      fillColor: "green",
      radius: markerSize(regions[i].yr2000.emissions)
    })
  );
  latestMarkers.push(
    L.circle(regions[i].location, {
      stroke: false,
      fillOpacity: 0.75,
      color: "purple",
      fillColor: "purple",
      radius: markerSize(regions[i].latest.emissions)
    })
  );
}

var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var yr2000 = L.layerGroup(yr2000Markers);
var latest = L.layerGroup(latestMarkers);

var baseMaps = {
  "Street Map": street,
  "Topographic Map": topo
};
var overlayMaps = {
  "Co2 Emissions in 2000": yr2000,
  "Co2 Emissions in 2018": latest
};

var myMap = L.map("map", {
  center: [18.646245, 6.816072],
  zoom: 2.45,
  layers: [street, yr2000, latest]

});

L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);


