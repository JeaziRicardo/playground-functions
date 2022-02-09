// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let myArray = string.split(' ');
  return myArray;
}

// Desafio 4
function concatName(string) {
  let array = string[string.length - 1] + ', ' + string[0];
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties * 1;
  let points = wins + ties;
  return points;
}

// Desafio 6
function highestCount(numbes) {
  let highNumber = numbes[0];
  let repetHighestNumber = 0;
  for (let index = 0; index < numbes.length; index += 1) {
    if (highNumber < numbes[index]) {
      highNumber = numbes[index];
      repetHighestNumber = 1;
    } else if (highNumber == numbes[index]) {
      repetHighestNumber += 1;
    }
  }
  return repetHighestNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 > distanceCat2){
    return "cat2";
  } else if (distanceCat2 > distanceCat1) {
    return "cat1";
  } else {
  return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 5 === 0 && array[index] % 3 === 0) {
      arrayFizzBuzz.push("fizzBuzz");
    } else if (array[index] % 5 === 0) {
      arrayFizzBuzz.push("buzz");
    } else if (array[index] % 3 === 0) {
      arrayFizzBuzz.push("fizz");
    } else {
      arrayFizzBuzz.push("bug!");
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
