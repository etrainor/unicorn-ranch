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

// Create a unicorn
function Unicorn(name, color, food, location) {
  this.name = name;
  this.color = color;
  this.food = food;
  this.location = location;
  this.display = `Name: ${this.name} Color: ${this.color} Food: ${this.food}`;
}

//Randomly generates a food index
function getRandomFood(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

//Instantiate unicorn objects
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
//Populate the form names select drop down
function addNames() {
  let list = document.getElementById('names');
  for (let i = 0; i < names.length; i++) {
    let option = document.createElement('option');
    option.value = allUnicorns[i].name;
    option.text = allUnicorns[i].name;
    list.appendChild(option);
  }
}

//Populate the form locations select drop down
function addLocations() {
  let list = document.getElementById('locations');
  for (let i = 0; i < locations.length; i++) {
    let option = document.createElement('option');
    option.value = locations[i];
    option.text = locations[i];
    list.appendChild(option);
  }
}

//FIXME: This still could be dryer
function populateLists() {
  //remove list data if exists
  let barnList = document.getElementById('barn-list');
  if (barnList.childNodes[2]) {
    barnList.removeChild(barnList.childNodes[2]);
  }
  let pastureList = document.getElementById('pasture-list');
  if (pastureList.childNodes[2]) {
    pastureList.removeChild(pastureList.childNodes[2]);
  }
  let trailsList = document.getElementById('trails-list');
  if (trailsList.childNodes[2]) {
    trailsList.removeChild(trailsList.childNodes[2]);
  }

  //create ul for new data
  let barn = document.createElement('ul');
  let pasture = document.createElement('ul');
  let trail = document.createElement('ul');

  // create an li for each unicorn and append it to the appropirate ul element
  for (let i = 0; i < allUnicorns.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = allUnicorns[i].display;
    let currentLocation = allUnicorns[i].location;
    if (currentLocation === 'barn') {
      barn.appendChild(liEl);
    } else if (currentLocation === 'pasture') {
      pasture.appendChild(liEl);
    } else {
      trail.appendChild(liEl);
    }
  }
  barnList.appendChild(barn);
  pastureList.appendChild(pasture);
  trailsList.appendChild(trail);
  saveMe();
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
  populateLists();
});

function populatePage() {
  checkStorage();
  addNames();
  addLocations();
  populateLists();
}

function saveMe() {
  localStorage.setItem('allUnicorns', JSON.stringify(allUnicorns));
}

function checkStorage() {
  if (localStorage.allUnicorns) {
    let data = JSON.parse(localStorage.getItem('allUnicorns'));
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let unicorn = new Unicorn(
        data[i].name,
        data[i].color,
        data[i].food,
        data[i].location
      );
      allUnicorns.push(unicorn);
    }
  } else {
    makeUnicorns();
  }
}

populatePage();
