

module.exports = function (sources, tile, write, done) {
  var osm = sources.osm.osm;
  
  for(var i = 0; i < osm.length; i++) {
    var ft = osm.feature(i);

    var name = ft.properties['name:en'] || ft.properties.name;
    if (!ft.properties.highway || !name) continue;
     
    name = name.toLowerCase();
    if (name.indexOf('martin luther king') > -1) {
      write(JSON.stringify(ft.toGeoJSON(tile[0], tile[1], tile[2])) + '\n');
    }
  }
  done();
};
