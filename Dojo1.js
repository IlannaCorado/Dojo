//Questão 5 - Analise o seguinte código e explique por que cada resultado ocorre.

console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);
console.log(false == 0);
console.log(false === 0);

// As impressões correspondentes a cada console.log é:
// 52, 3, 2, true, false

// console.log("5" + 2); o resultado dessa impressão é 52 
// Isso ocorre porque o 5 é uma string, pois está entre aspas, enquanto o 2 é um número.
// Quando utilizamos o operador + nessa situação, não ocorre uma soma, mas sim uma concatenação,
// ou seja, a junção dos valores.

// console.log("5" - 2); o resultado dessa impressão é 3.
// Isso ocorre porque o 5 é uma string, pois está entre aspas, já o 2 é do tipo número.
// Porém, diferente do operador +, o operador - não pode ser utilizado para juntar textos.
// Então o JavaScript converte a string "5" para um número e realiza a subtração.

// console.log(true + 1); o resultado dessa impressão é 2.
// Isso ocorre porque true é um valor booleano, enquanto 1 é um número e quando usamos o 
// operador + entre um booleano e um número, o JavaScript converte o true para o valor numérico 1.
// Então a operação passa a ser 1 + 1.

// console.log(false == 0); o resultado dessa impressão é true.
// Isso ocorre porque false é um valor booleano, enquanto 0 é um número. Quando usamos o operador ==, 
// o JavaScript faz uma conversão automática de tipo para comparar os valores.Nesse caso, false é 
// convertido para o número 0. Então a comparação passa a ser: 0 == 0 Como os valores são iguais, 
// o resultado é true.

// console.log(false === 0); o resultado dessa impressão é false.
// Isso ocorre porque false é um valor booleano, enquanto 0 é um número. O operador === compara tanto o valor 
// quanto o tipo. Nesse caso, apesar de false poder ser convertido para 0 usando
// ==, com === essa conversão não acontece. Como os tipos são diferentes, o resultado é false.

// ATENÇÃO DIFERENÇA ENTRE "==" E "==="
// O "==" compara os valores e pode fazer conversão automática de tipo
// já o "===" compara o valor e o tipo, sem fazer conversão.


//Código 1

const pessoa1 = {
  nome: "Maria",
  falar: function(){
    console.log(this.nome);
  }
};

pessoa1.falar();

//Código 2

const pessoa2 = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome);
  }
};

pessoa2.falar();

// Execute os dois exemplos e responda:

// Qual deles funciona corretamente?
// o código que funciona corretamente é o código 1, pois a função "tradicional" possui seu própio this, que aponta par ao objeto pessoa

// Por que o outro não funciona?
// O código 2 não funciona corretamente, pois a arrow function não possui seu própio this, ela herda o this do contexto externo 

// Qual é o comportamento de this em arrow functions?
// Arrow functions não possuem seu próprio this. Elas herdam o this do contexto externo onde foram criadas.