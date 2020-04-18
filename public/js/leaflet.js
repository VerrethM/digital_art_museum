let mymap = L.map('mapid').setView([51.21126, 4.397278], 13);

//let basicmap = L.tileLayer('https://api.mapbox.com/styles/v1/marijkeverreth/ck8yimvwt27x61ip9xgjsy1j0/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFyaWprZXZlcnJldGgiLCJhIjoiY2sxdnQwMmpyMTl4NDNja2F0MjE5bjR3NCJ9.eBxPTCUMEQDhh8w8ZxMImw');
let basicmap = L.tileLayer('https://api.mapbox.com/styles/v1/marijkeverreth/ck8ykph8r4hgc1ipbgm3sprbr/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFyaWprZXZlcnJldGgiLCJhIjoiY2sxdnQwMmpyMTl4NDNja2F0MjE5bjR3NCJ9.eBxPTCUMEQDhh8w8ZxMImw');



basicmap.addTo(mymap);

let Icon = L.icon({
  iconUrl: '../img/marker-multicolor.svg',

  iconSize:       [67, 87],     // size of the icon
  iconAnchor:     [33.5, 87],     // point of the icon which will correspond to marker's location
  popupAnchor:    [0, -90]     // point from which the popup should open relative to the iconAnchor
});

let marker = L.marker([51.202319, 4.413540], {icon: Icon}).addTo(mymap);
marker.bindPopup("<h3>Address</h3><p>Belgiëlei 195<br>2018 Antwerpen</p>");
