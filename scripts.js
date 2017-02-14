//Use this file to implement Part One of your project

var animal = {};
animal.username = "Mike";
animal['tagline'] = "Meeeoow";
var noises = [];
animal['noises'] = noises;

console.log(animal);
var count = 0;
for(var key in animal) {
    count++;
if (key === 'username') {
    console.log("Hi my name is " + animal[key]);
}
else if ( key === 'tagline'){
    console.log("Hi my name is " + animal[key]);
}
}
console.log(count);
var noiseArray = ['ooowl'];
noiseArray.unshift('arrrgh');
noiseArray.push('rrraawl');
noiseArray['push']('yipe');
console.log(noiseArray);
console.log(noiseArray.length);

noises.push(noiseArray);
console.log(animal);
console.log(animal.noises);

var animals = [];
animals.push(animal);
console.log(animals);

var quackers = {username: 'DaffyDuck', tagline: 'Yippee!', noises: ['quack', 'honk', 'sneeze', 'growl']};
animals.unshift(quackers);
console.log(animals);

var doggie = {username: 'Ole Dawg', tagline: 'What up', noises: ['owwl','arrrg', 'owwiee', 'yeaah']};
var puddy = {username: 'Kitte', tagline: 'Meeewow', noises: ['meme', 'prrr', 'yesssse', 'ohyeah']};
animals.unshift(puddy);
animals.push(doggie);
console.log(animals);

function AnimalMaker(name) {
	return {
		speak: function() {
			console.log('my name is ', name);
		},
		name: name
	};
};

var animalNames = ['Sheep', 'Liger', 'Big Bird'];

var farm = [];


for (var i = 0; i < animalNames.length; i++) {
	farm.push(AnimalMaker(animalNames[i]));
}

console.log(farm);

for (var i = 0; i < farm.lenght; i++) {
	farm[i].speak();
}

var AnimalTestUser = function(username) {
	var argsLen = arguments.length;
	otherArgs = [];
	if (argsLen > 1) {
		for(var i = 1; i < argsLen; i++) {
				otherArgs.push(arguments[i]);
			}
		}
		return {
			'username'  : username,
			'otherArgs' : otherArgs
		}
	}

var testSheep = AnimalTestUser('Cottenball');
console.log(testSheep);
var testSheep = AnimalTestUser('Cottenball', {'loves dancing': true}, [1,2,3]);
console.log(testSheep);

var AnimalCreator = function(username, species, tagline, noises) {
	return {
		'username': username,
		'species': species,
		'tagline': tagline,
		'noises': [noises],
		'friends': []
	};
}
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);

var addFriend = function(animal, friend) {
	animal.friends.push(friend.username);
}

var cow = AnimalCreator('Moo', 'cow', 'got mikl', ['moo', 'moooo']);
var llama = AnimalCreator('Zeny', 'llama', 'llll', ['sdf', 'sdfsd']);

addFriend(sheep, cow);
console.log(sheep);

var myFarm = [sheep, cow, llama];
addFriend(cow, sheep);
addFriend(llama, cow);
console.log(myFarm);

function addMatchesArray(farm) {
	for (var animal in farm) {
		farm[animal].matches = [];
	}
}

addMatchesArray(myFarm);
console.log(myFarm[0]);

function giveMatches(farm) {
	for (var animal in farm) {
		farm[animal].matches.push(farm[animal].friends[0]);
	}
}

giveMatches(myFarm);
console.log(myFarm[0]);























