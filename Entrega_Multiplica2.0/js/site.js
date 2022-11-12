

// VARIABLES //
const NombreWeb = "Carwash generico";
const Cliente1 = new Cliente();
let Producto1 = new Producto("Limpia Tapizado", 200, "tapizado");
let Producto2 = new Producto("Perfume vehiculo", 250, "tapizado");
let Producto3 = new Producto("Tratamiento acrilico", 425, "Detailing");

const listDeProductos = [Producto1, Producto2, Producto3];

const carritoDeCompras = [];
carritoDeCompras.push(new Producto("Otro Pro", 500, "unKnown"));

const productosJSON = [
    { id: 1, servicio: "Arroz", precio: 125 },
    { id: 2, servicio: "Fideo", precio: 70 },
    { id: 3, servicio: "Pan" , precio: 50},
    { id: 4, servicio: "Flan" , precio: 100}
];

var preferencias = {
    index: 0,
    nombreUsario: "",
}

// ----- Clases  ----- //
function Producto (nombre, precio, categoria){
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;

    this.informacionProducto = function(){
        console.log("Nombre: " + this.nombre);
        console.log("Precio: " + this.precio);
        console.log("Categoria: " + this.categoria);
    }
}

function Cliente(_nombre, _telefono, _auto){
    this.nombre = _nombre;
    this.telefono = _telefono;
    this.auto = _auto;
    this.darInfo = function(){
        console.log(this.nombre);
    }
}

class Persona {
    constructor(nombre, telefono, auto){
        this.nombre = _nombre;
        this.telefono = _telefono;
        this.auto = _auto;
    }
    darInfo(){
        console.log(this.nombre);
    }    
}


// ----- ----- FUNCIONES ----- ----- //

function Presentacion(){
    alert("Hola, bienvenido a " + NombreWeb + ". A continuacion ingrese sus datos de contacto.");
    SolicitarCliente(Cliente1);    
}

function ImprimirArray(array){
    console.log(array);
    for(let i = 0; i < array.lenght ; i++){
        console.log(array[i].this.nombre);
    }
}



function SolicitarServicio(){
    const servicios = []; 
    while(confirm("¿Desea agregar otro servicio?")){
        const servicio = prompt("Que servicio desea adquirir? [Ingresar numero correspondiente]");
        servicios.push(servicio);
    }
    //Hacer algo con la lista de solicitada...
}


// ----- ----- ----- DOM y JSON ----- ----- ----- //

let botonContacto = document.getElementById("contact");
botonContacto.onclick = () => console.log("Pronto nos pondremos en contacto con usted...");

let botondos = document.querySelector('.boton');

botondos.onclick = () =>{
    $(".boton").css({"background-color": "red"});
    $(".boton").css({"cursor": "progress"});
    console.log("HAZ SOLICITADO UN TURNO");
}


var selectElem = document.getElementById('select');
selectElem.addEventListener('change', function() {
  var index = selectElem.selectedIndex;
  CambiarBackground(index);
  
})

function CambiarBackground(index){
    if(index == 0){
        $("#body").css({"background-color": "#111b3e"});
        $("#select").css({"background-color": "rgb(123, 105, 166)"});        
        $("#select").css({"border": "solid 2px"});        
        $("#select").css({"color": "black"});        
    }
    else {
        $("#body").css({"background-color": "rgb(123, 105, 166)"});
        $("#select").css({"background-color": "#111b3e"});        
        $("#select").css({"border": "solid white 2px"});        
        $("#select").css({"color": "white"});        
    }
    localStorage.setItem("background", index);
}
//---------- TESTING ------------ //

function onLoad(){
    if(i = localStorage.getItem("background") != null){
        console.log("LOOP");
        var index = localStorage.getItem("background");
        CambiarBackground(index);
    }
    else console.error("localStorage Es Null!");
}


const bodyReady = document.getElementById('select');
if(bodyReady.onLoad) onLoad();
else{ console.log("FALLO");}