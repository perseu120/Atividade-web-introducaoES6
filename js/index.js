//  class List {

//     constructor(){
//         this.date = [];
//     }
//     addData(nome){
//         this.date.push(nome);
//         // console.log(this.date);
//     }

//     viewData(){
//         console.log(this.date);
//     }

// }

// class ToList extends List{

//     constructor(){
//         super();
//         this.cesta = "Frutas";
//     }

//     getFrutas(){
//         console.log(this.cesta);
//     }

//     static soma(a, b){
//         return a + b;
//     }
// }
// const lista = new ToList();


// document.getElementById("novotodo").onclick = function(){
//     lista.getFrutas();
//     lista.addData("watermelon");
//     lista.addData("melon");
//     lista.addData("aple");
//     console.log(lista.viewData());
// }

// console.log(ToList.soma(5, 5));

// var variavel; //enxerga em todo o codigo
// let varia; // apenas dentro do escolpo onde foi criada
// const naoAltera; // não pode altera o valor

const array = [1, 2, 3, 4, 5, 6, 8, 9];

const newArr = array.map(function(item){
    return item *2;
})

const somatoria = array.reduce(function(total, next){
    return total + next;
})

const filter = array.filter(function(item){
    return item %2 === 0;
})

const find = array.find(function(item){
    return item === 3;
})

console.log(newArr);
console.log(somatoria);
console.log(filter);
console.log(find);
// #===== Areo Function=======#
const newArr = array.map((item)=> item *2)

const arrayUp = () => [1,2,3,4];

function soma(a = 2,b = 3){ // aqui ele coloca valores default
    return a+b;
}

console.log(soma);

