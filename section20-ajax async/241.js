// notes from es 2018

// 3 main things
// #1 object spread operator

const animals = {
	tiger: 23,
	lion: 5,
	monkey: 2,
	bird: 40
}

const { tiger, ...rest } = animals;

function objSpread(p1, p2, p3) {
	console.log(p1)
	console.log(p2)
	console.log(p3)
}

const { tiger, lion, ...rest } = animals;

objSpread(tiger, lion, rest)
// did we do something like this in react for robots?