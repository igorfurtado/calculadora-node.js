//Um pacote é um conjunto de um ou mais módulos javascript.

//Quando criamos um pacote, podemos reaproveitar o código desenvolvido
//em outros programas, basta instalar esse programa.

//Podemos criar pacotes ou instalar pacotes de terceiros.

const operacoesBasicas = require('./operacoesBasicas');
const areas = require('./areas');

module.exports = { ...operacoesBasicas, ...areas };

//npm -> é o gerenciador de pacotes do node.
//Package manager for Node.js

//Para criar um novo pacote via terminal: npm init

//Algumas perguntas são feitas no terminal e então preenchemos:
// {
//     "name": "matematica",
//     "version": "1.0.0",
//     "description": "Funções matemáticas",
//     "main": "index.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "Targino",
//     "license": "ISC"
//   }

//Com isso, é criado um pacote package.json com as informações passadas no entry point.
//entry point é o arquivo em qual estamos juntando os demais módulos para criação de um pacote.