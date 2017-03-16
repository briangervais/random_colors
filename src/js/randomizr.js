// Random Name

var items = Array('Brian', 'Waldo', 'Jes', 'Barnaby');
var random_item = items[Math.floor(Math.random() * items.length)];
var winner_container = document.getElementById('winner');

function randomizr() {
  winner_container.innerHTML = random_item;
}
