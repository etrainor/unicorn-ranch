'use strict';

let names = [
  'Sparkle',
  'Brownie',
  'Rainbow',
  'Glitter',
  'Peaches',
  'Honey',
  'Cupcake',
  'Rudolph',
  'Hans',
  'Emma',
  'Pinky-Pie',
  'Dopey'
];

let foods = [
  'apple',
  'blueberries',
  'carrots',
  'strawberries',
  'steak',
  'hay',
  'cupcakes'
];

let locations = ['barn', 'pasture', 'trails'];

let colors = [
  'blue',
  'green',
  'black',
  'silver',
  'glow in the dark',
  'shiny',
  'sparkly gold',
  'red',
  'yellow',
  'silver',
  'turquise',
  'purple'
];

let allUnicorns = [];

function Unicorn(name, color, food, location) {
  this.name = name;
  this.color = color;
  this.food = food;
  this.location = location;
}

function getRandomFood(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function makeUnicorns() {
  for (let i = 0; i < names.length; i++) {
    let unicorn = new Unicorn(
      names[i],
      colors[i],
      foods[getRandomFood(0, foods.length - 1)],
      locations[0]
    );
    allUnicorns.push(unicorn);
  }
}

function addNames() {
  let list = document.getElementById('names');
  for (let i = 0; i < names.length; i++) {
    let option = document.createElement('option');
    option.value = allUnicorns[i].name;
    option.text = allUnicorns[i].name;
    list.appendChild(option);
  }
}

function addLocations() {
  let list = document.getElementById('locations');
  for (let i = 0; i < locations.length; i++) {
    let option = document.createElement('option');
    option.value = locations[i];
    option.text = locations[i];
    list.appendChild(option);
  }
}

function startInBarn() {
  let barnList = document.getElementById('barn-list');
  let ulEl = document.createElement('ul');
  for (let i = 0; i < allUnicorns.length; i++) {
    if ((allUnicorns[i].location = 'barn')) {
      let liEl = document.createElement('li');
      liEl.textContent = `Name: ${allUnicorns[i].name} Color: ${allUnicorns[i].color} Food: ${allUnicorns[i].food}`;
      ulEl.appendChild(liEl);
    }
  }
  barnList.appendChild(ulEl);
}
function populatePasture() {
  let pastureList = document.getElementById('pasture-list');
  let ulEl = document.createElement('ul');
  for (let i = 0; i < allUnicorns.length; i++) {
    if ((allUnicorns[i].location = 'pasture')) {
      let liEl = document.createElement('li');
      liEl.textContent = `Name: ${allUnicorns[i].name} Color: ${allUnicorns[i].color} Food: ${allUnicorns[i].food}`;
      ulEl.appendChild(liEl);
    }
  }
  pastureList.appendChild(ulEl);
}

function populateTrails() {
  let trailsList = document.getElementById('trails-list');
  let ulEl = document.createElement('ul');
  for (let i = 0; i < allUnicorns.length; i++) {
    if ((allUnicorns[i].location = 'trails')) {
      let liEl = document.createElement('li');
      liEl.textContent = `Name: ${allUnicorns[i].name} Color: ${allUnicorns[i].color} Food: ${allUnicorns[i].food}`;
      ulEl.appendChild(liEl);
    }
  }
  trailsList.appendChild(ulEl);
}

document.getElementById('button').addEventListener('click', function(event) {
  event.preventDefault();
  let name = document.getElementById('names').value;
  let location = document.getElementById('locations').value;
  for (let i = 0; i < allUnicorns.length; i++) {
    if (allUnicorns[i].name === name) {
      allUnicorns[i].location = location;
    }
  }
  moveLists();
});

function populatePage() {
  makeUnicorns();
  addNames();
  addLocations();
  startInBarn();
}

function moveLists() {
  startInBarn();
  populatePasture();
  populateTrails();
}
populatePage();
console.log(allUnicorns);
