var tilereduce = require('tile-reduce');

var dist = {matched: 0, unmatched: 0};

tilereduce({
	zoom: 12,
	sources: [
	{
		name: 'osm', 
		mbtiles: '/data/latest.planet.mbtiles',
		raw: true
	}
	],
	map: __dirname + '/map.js'
});
