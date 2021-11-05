//Utilizando informações de um pacote criado:

//O ideal é que eu sempre instale um pacote em um projeto que também esteja dentro de um pacote.
//Por isso, primeiramente criamos um pacote para o projeto my_program no terminal via npm init;

//Feito isso:
//npm install "/Volumes/Media/Igor/front-end/progbr/node/modulos_node/pacotes"

//Agora podemos utilizar as funções do módulo importado:

let calc = require('matematica');

console.log(calc.area_quadrado(5));
