var mathLib = require('./lib/math');
var jokesLib = require('./lib/jokes');

var app = {};

app.config = {
    'timeBetweenJokes': 1000
};

app.printAJoke = function () {

    var allJokes = jokesLib.allJokes();

    var numberOfJokes = allJokes.length;

    var randomNumber = mathLib.getRandomNumber(1, numberOfJokes);

    var selectedJoke = allJokes[randomNumber - 1];

    console.log(selectedJoke);
}


app.indefinitLoop = function () {

    setInterval(app.printAJoke, app.config.timeBetweenJokes)

}

app.indefinitLoop();