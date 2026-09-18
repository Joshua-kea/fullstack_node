// hoisting
getRandomInt(5, 10);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomIntArrowFunction = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



function genericActionPerformaner(name, action) {
  return action(name);
  
}

function playingGuitarAction(name) {
    return `${name} likes to play guitar`;
}

console.log(genericActionPerformaner("Elias", playingGuitarAction));


const watchingMoviesAction = (name) => {
    return `${name} likes watching movies`
};
// ; after } if it is a statement not needed for functions

console.log(genericActionPerformaner("Magnus", watchingMoviesAction));

// callback function

console.log(genericActionPerformaner("Jacob", (name) => `${name} likes sailing`));