// # Desafio Semana #1


// Declarar uma variável chamada `myvar`, sem valor.

var myvar;
console.log('Ainda sou uma var indefinida... :( ', myvar);

// Após declarada, atribua o valor 10 à variável `myvar`.

myvar = 10;
console.log('Agora estou começando a me sentir definida (: ', myvar);

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.

var soma = 15 + 8;
console.log('Olhem, agora sou uma soma" "-" ',soma);

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.

soma++;
console.log('E, agora uma super soma! wow *-* ',soma);

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

soma*= 3;
console.log('Sai da frente! Se não for pra causar, nois nem se multiplica! @.@',soma);


// Qual é o valor da variável `soma` até aqui?
console.log('Meu score até o momento é, ', soma,'. Caraca! º.º');

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.

var souNinja = true;
console.log('Sou ninja? *-*', souNinja);

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.

var comida = ['arroz', 'feijao', 'ovo'];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.

console.log('Sou um array de comida, dá licença?', comida);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo)

console.log('Tão pedindo para eu me verificar, aff... @_@', soma === myvar);

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.

console.log('Não existe menor ou igual, todo mundo é menor e todo mundo é igual! AFF... ', myvar <= soma);

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(y, x){
    return y / x;
}
// Invoque a função criada acima, passando os parâmetros 10 e 2.

console.log('Dividimos agora, que evolução! ', divisao(10,2));