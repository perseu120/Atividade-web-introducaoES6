 class List {

    constructor(){
        this.date = [];
    }
    addData(nome){
        this.date.push(nome);
        // console.log(this.date);
    }

    viewData(){
        console.log(this.date);
    }

}

class ToList extends List{

    constructor(){
        super();
        this.cesta = "Frutas";
    }

    getFrutas(){
        console.log(this.cesta);
    }

    static soma(a, b){
        return a + b;
    }
}
const lista = new ToList();


document.getElementById("novotodo").onclick = function(){
    lista.getFrutas();
    lista.addData("watermelon");
    lista.addData("melon");
    lista.addData("aple");
    console.log(lista.viewData());
}

console.log(ToList.soma(5, 5));

var variavel; //enxerga em todo o codigo
let varia; // apenas dentro do escolpo onde foi criada
const naoAltera; // não pode altera o valor
