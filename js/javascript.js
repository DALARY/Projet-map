//Choisir la longitude et la lititude de l'endroit choisi
var mymap = L.map('mapid').setView([44.235, 2.754], 8);

//Définir la taille du cercle
// var circle = L.circle([44.235, 2.754], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 40000
// }).addTo(mymap);

//Définir les points du polygon
var polygon = L.polygon([
    [44.479567, 1.839733],
    [44.587467, 2.082088],
    [44.660922, 2.266965],
    [44.642943, 2.467686],
    [44.941268, 2.738469],
    [44.392286, 3.140387],
    [44.261839, 3.120250],
    [44.230270, 3.230589],
    [44.201448, 3.362680],
    [44.093700, 3.261928],
    [44.021811, 3.451395],
    [43.894299, 3.342767],
    [43.893420, 3.263468],
    [43.829951, 3.249032],
    [43.834251, 3.062533],
    [43.693060, 3.061108],
    [43.729129, 2.742337],
    [44.122429, 2.289052],
    [44.149677, 1.990343],
    [44.213508, 1.890654],
    [44.276365, 1.970678],
], {color: 'grey'}).addTo(mymap);

//Permet de choisir l'icon du marker
var blueIcon = L.icon({
    iconUrl: 'icones/gps.png',
    iconSize:     [38, 40], // size of the icon
    iconAnchor:   [22, 39], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//Créer des markers
var markerPontDeMilliau = L.marker([44.078086, 3.022732], {icon: blueIcon}).addTo(mymap);
var markerConques = L.marker([44.599241, 2.398108], {icon: blueIcon}).addTo(mymap);
var markerGorgesDeLaveyron = L.marker([44.223854, 1.977285], {icon: blueIcon}).addTo(mymap);
var markerGorgesDuTarn = L.marker([44.194958, 3.147970], {icon: blueIcon}).addTo(mymap);
var markerRoquefort = L.marker([43.975285, 2.991374], {icon: blueIcon}).addTo(mymap);
var markerCathedraleRodez = L.marker([44.350798, 2.574138], {icon: blueIcon}).addTo(mymap);

//Ajouter des popup pour les différents markers et autres, ainsi que des images
markerPontDeMilliau.bindPopup("<img src='icones/viaducdemilliau2.ico' style='margin-left: 40%'><br><b>Viaduc de Milliau</b><br>Le Viaduc de Milliau fut ouvert le 16 décembre 2004, ce Viaduc à permis de réduire le temps de trajet pour l'A75 qui va de Bézier jusqu'à Clermont-Ferrand. Cette construction est pratique mais aussi esthétiquement innovante tant dans sa conception que dans son architecture.").openPopup();
markerConques.bindPopup("<img src='icones/conques2.ico' style='margin-left: 40%'><br><b>Conques</b><br>Conques est une étape très fréquentée sur la route du pèlerinage de Saint-Jacques-de-Compostelle.<br>L'abbatiale de Conques est un chef-d'oeuvre de l'art roman. Depuis l'an 2000 les travaux de restauration continu pour préserver les vestiges du passé.").openPopup();
markerGorgesDeLaveyron.bindPopup("<img src='icones/gorgeaveyron2.ico' style='margin-left: 40%'><br><b>Gorges de L'aveyron</b><br>C’est là que les plus vaillants s’amuseront dans les tumultes de la rivière Aveyron. Mais vous aimerez aussi les bastides du Rouergue telles que Najac, Villefranche-de-Rouergue ou même, en vous éloignant un peu de la rivière, Sauveterre-de-Rouergue, qui vous feront revivre un riche passé médiéval.").openPopup();
markerGorgesDuTarn.bindPopup("<img src='icones/gorgeaveyron2.ico' style='margin-left: 40%'><br><b>Gorges du Tarn</b><br>Joyaux du sud Aveyron, les gorges du Tarn, sont situées en bordure du Parc Naturel Régional des Grands Causses, au cœur du territoire Causses et Cévennes, classé au Patrimoine Mondial de l’UNESCO. Entre villages troglodytiques et forteresses médiévales perchées, les gorges du Tarn abritent un patrimoine bâti remarquable, preuve d’un passé riche d’histoire, souvent situé sur les flancs ensoleillés.").openPopup();
markerRoquefort.bindPopup("<img src='icones/roquefort2.ico' style='margin-left: 40%'><br><b>Roquefort</b><br>Le Roquefort est un célèbre fromage de l’Aveyron. Fleuron de la gastronomie française et à la renommée internationale, il est affiné dans les caves du village dont il porte le nom : Roquefort… oui mais sur Soulzon ! Ventilées par les fissures naturelles (ou fleurines) formées après l’effondrement de la montagne du Combalou il y a un million d’années, les caves de Roquefort abritent des milliers de fromages.").openPopup();
markerCathedraleRodez.bindPopup("<img src='icones/cathedrale2.ico' style='margin-left: 40%'><br><b>Cathédrale Notre-Dame de Rodez</b><br>La cathédrale Notre-Dame de Rodez, construite entre le <var>XIII<sup>e</sup></var> et <var>XVI<sup>e</sup></var> siècles, est une cathédrale catholique située à Rodez dans le département de l'Aveyron. C'est la cathédrale du diocèse de Rodez et Vabres.").openPopup();

//Configurer l'affichage de la carte
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1Ijoid2hpbGVyYXplIiwiYSI6ImNraGV2bDRkMTA1b2wyenFwZXowNTJzMnEifQ.XIi-30vMJ9ry-O_Z5kUg4A'
}).addTo(mymap);