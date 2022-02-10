// Desafio 11
function generatePhoneNumber(array) {
  let telNumber = array.join("");
  if (array.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for(index of array) {
    let counter = 0;
    for (index2 of array) {
      if (index === index2) {  
        counter += 1;
      }
    }
    if (counter >= 3 || index < 0 || index > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  return  "(" + telNumber.substring(0, 2) + ") " + telNumber.substring(2, 7) + "-" + telNumber.substring(7, 11);
}
// Foi usado o ".join()" para transformar o array em uma string e utilizar as propriedades de ".substring()". Informações retiradas da documentação.
// Links: .Join() - [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join#example_joining_an_array_three_different_ways], .substring() - [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring].

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB && lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB))
  {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};