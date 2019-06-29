// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function divisao(y, x){
    return y + x;
}


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = divisao(10, 20);

// Qual o valor atualizado dessa variável?

console.log('o valor atualizado da var é, ', resultado);


// Declare uma nova variável, sem valor.

var novaVar;


//Crie uma função que adicione um valor à variável criada acima, e retorne a string:
// O valor da variável agora é VALOR.
//Onde VALOR é o novo valor da variável.
function variavel(novaVar){
    return(novaVar = 'VAlOR');
}

// Invoque a função criada acima.
console.log('Novo valor da variavel é, ', variavel(novaVar));


// Qual o retorno da função? (Use comentários de bloco).
/* 
 Novo valor 
 da variavel é,  
 VALOR
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

//1.
function receberParametros(n1, n2, n3) {
    if (n1 === undefined || n2 === undefined || n3 === undefined ) {
       return 'retornando uma string';
   
   }

}   



// Invoque a função criada acima, passando só dois números como argumento.
receberParametros(1,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// NaN

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// resultado da conta:  8


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
