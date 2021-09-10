// //  class List {

// //     constructor(){
// //         this.date = [];
// //     }
// //     addData(nome){
// //         this.date.push(nome);
// //         // console.log(this.date);
// //     }

// //     viewData(){
// //         console.log(this.date);
// //     }

// // }

// // class ToList extends List{

// //     constructor(){
// //         super();
// //         this.cesta = "Frutas";
// //     }

// //     getFrutas(){
// //         console.log(this.cesta);
// //     }

// //     static soma(a, b){
// //         return a + b;
// //     }
// // }
// // const lista = new ToList();


// // document.getElementById("novotodo").onclick = function(){
// //     lista.getFrutas();
// //     lista.addData("watermelon");
// //     lista.addData("melon");
// //     lista.addData("aple");
// //     console.log(lista.viewData());
// // }

// // console.log(ToList.soma(5, 5));

// // var variavel; //enxerga em todo o codigo
// // let varia; // apenas dentro do escolpo onde foi criada
// // const naoAltera; // não pode altera o valor

// const array = [1, 2, 3, 4, 5, 6, 8, 9];

// const newArr = array.map(function(item){
//     return item *2;
// })

// const somatoria = array.reduce(function(total, next){
//     return total + next;
// })

// const filter = array.filter(function(item){
//     return item %2 === 0;
// })

// const find = array.find(function(item){
//     return item === 3;
// })

// console.log(newArr);
// console.log(somatoria);
// console.log(filter);
// console.log(find);
// // #===== Areo Function=======#
// const newArr = array.map((item)=> item *2)

// const arrayUp = () => [1,2,3,4];

// function soma(a = 2,b = 3){ // aqui ele coloca valores default
//     return a+b;
// }

// console.log(soma);
// #======= desestruturação ========# 
const usuario ={
    nome: 'judite',
    idade: 50,
    endereco:{
        rua: 'rua flor',
        cidade: 'Salvador'
    }
}

const {nome, idade, endereco:{cidade}} = usuario;

console.log(nome)//poderia usar qualquer um dos paramentro definido a cima que ele identificaria

function getNome({nome}){ //aqui pasa o objeto e ele retorna o parametro passado desde que ele esteja contido em objeto
    console.log(nome);
}

getNome(usuario);

const { nome, ...resto}= usuario; //a variavel nome vai pega o nome do usuario e a variavel depois dos 3 pontos pega o que sobra do objeto

console.log(resto);

const arr = [1,2,3,4,5]

const [a,b,...c] = arr // a e b vai receber o primeiroe e o segundo e ser vai receber o resto do vetor

function somaInfinita(...params){
    return params.reduce((total, next) => total + next);
}

console.log(somaInfinita(1,2,3,4,5,6,7)) // pode passa quantos valores quiser como paramentro

// #====== rest ========#

const usuario1 = {
    nome: 'regia',
    idade: 26,
    empresa: 'uesb'
}

// const usuario2 = usuario1;//faz uma copia

const usuario2 = { ...usuario1, nome:'vitoria'}// faz uma copia e altera o nome da copia feita

console.log(usuario2);

console.log(" meu nome é" + usuario1.nome + "e tenho " + usuario1.idade + "anos");

console.log(` meu nome é ${usuario1.nome} e tenho ${usuario1.idade} anos`);

const idade = 37;
const nome = "joao";

const pessoa = {
    nome,
    idade,
    empresa:'uesb'
}