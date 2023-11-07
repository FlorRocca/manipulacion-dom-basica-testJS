let nombre = 'Flor';
let apellido = 'Rocca';
let username = '@Flor_Rocca';
let edad = 33;
let correoElectronioc = 'lala@gmail.com';
let isMayorEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;

let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;

//FUNCIONES//


const name = 'Florencia Paola';
const lastName = 'Rocca';
const completeName = name + ' ' + lastName 
const nickname = 'FloRocca';

console.log('Mi nombre es ' + completeName + ', pero prefiero que me digas ' + nickname + '.');

function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
};

function saludo(name, lastName, nickname) {const completeName = nombreCompleto(name, lastName); console.log('Mi nombre es ' + completeName + ', pero prefiero que me digas ' + nickname + '.');};

saludo('Ana', 'Pons', 'AniP');

//CONDICIONALES//

function tipoSuscripcion (suscripcion){
    if (suscripcion == 'Basic'){
        console.log('Es basic');
        return;
    }else if(suscripcion =='Free'){
        console.log('Es free');
        return;
    }else{
        console.log('no tienes suscripción');
        return;
    }};

    tipoSuscripcion('Free')

    // CICLOS//

    for (let i= 0; i<5; i++){
        console.log('El valor de i es:' + i);
    }
    let i= 10;
    while (i>=2){
        console.log('El valor de i es:' + i);
        i--;
    };

    //CICLO WHILE CON PROMPT//
    let respuesta;
    while(respuesta !='4'){
        let pregunta = prompt('Cuánto es 2 + 2');
        respuesta = pregunta;
    }

    //LISTAS: ARRAY - OBJETOS//
    const array = [1, true, 'oscar', false]; 
    // array van directamente los elementos y los llamamos por el indice (palabras claves para recorrer y ordenar array)
    const obj = {
        nombre: 'Juan',
        edad: 3,
        mayor: true,
    };
// objetos tienen elementos pero estos están ordenados por keys (palabras claves que se usa para guardar y llemar esos elementos)

//FUNCIONES Y ARRAYS
//solo usando if

function conseguirTipoSuscripcion(suscripcion){
    if(suscripcion == 'Free'){
        console.log('Solo puedes tomar cursos gratis');
        return;
    }
    if(suscripcion == 'Basic'){
        console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
        return
    }
    if(suscripcion == 'Expert'){
        console.log('Puedes tomar todos los cursos de Plazti durante un año');
        return;
    }
    if(suscripcion == 'ExpertDuo'){
        console.log('Tú y tu amigo pueden tomar todos los cursos de programación durante un año');
        return;
    }
    console.warn('Ese tipo de suscripción no existe');} // si corremos el código, va a salir la suscripción y también el alerta! Debemos usar return para finalizar la ejecución de las condicionales y código!!

//usando objetos/array

const arrray = [1, true, false, 'María', 0.21]; //algunos lenguajes definen la cantidad de elementos a guardar en el array y también que sean todos del mismo tipo de datos

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos grates',
    basic: 'Puedes tomar los cursos durante un mes',
    expert: 'Puedes tomar todos los cursos durante un año',
    expertduo:'Tú y tu amigo pueden tomar todos los cursos durante un año',
};

//convinación de objetos con array:

const objeConArray ={
    nombre: 'Oscar',
    edad: 32,
    isMayoredad: true,
    comidaFavorita: ['milanesa', 'lasagna', 'asado'],
    nickname: 'OSca'
};
const arrayConObje =[1, true, 'lalala', {nombre: 'Flor', edad: 32}]
//Cómo llamar a objetos
tiposDeSuscripciones.free
tiposDeSuscripciones['free']

// Cómo imprimir y luego tabajar con el elemento del array (lista) con una función
function imprimirPrimerElementoArray(arr){
    console.log(arr[0])
}
imprimirPrimerElementoArray(['juanita', true, false, 235])

//Cómo recorremos el array: con una función y ciclo for
function imprimirElemntosPorElementos(arr){
    for (let i=0; i <= arr.length; i ++){
        console.log(arr[i])}}

imprimirElemntosPorElementos(['juanita',true, false, 235]);

//Cómo recorremos un objeto  - debemos convertirlo en un array con: object.values() - función especial

Object.values(objeConArray)
const arr1 = Object.values(objeConArray)
function imprimirElementoPorElementoObjeto(objeto){
    const arr1 = Object.values(objeConArray);
    for(let i =0; i <= arr1.length; i++){
        console.log(arr1[i])}}

imprimirElementoPorElementoObjeto(objeConArray);

//también se puede poner la palabra clave (key) de un objeto en una variable y llamarla indirectamente

function conseguirTiposSuscripciones(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
    console.log(tiposDeSuscripciones[suscripcion]);
    return;} 
    console.warn('Ese tipo de suscripción no existe')
}



