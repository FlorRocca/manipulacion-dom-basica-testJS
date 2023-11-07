const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.querySelector('#pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#result');
// console.log(input.value);
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML = 'patito <br> feo'
// h1.innerText = 'Mejor está función'
// h1.getAttribute('pantalla');
// console.log(h1.getAttribute('class'))

// h1.setAttribute('class', 'rojo');
// h1.classList.add('azul')
// h1.classList.remove('rojo')

// input.value = '456'

// console.log((document.createElement('img')));

// const img=document.createElement('img');
// // img.setAttribute('src', 'https://images.pexels.com/photos/16776919/pexels-photo-16776919/free-photo-of-vespa-pavimento-estacionario-centro-de-belleza.jpeg');
// console.log(img);

// pid.append(img);
form.addEventListener('submit', formOnSubmit);

function formOnSubmit(event){
    console.log({event});
    event.preventDefault(); 
    const sumaInput= (Number(input1.value) + parseInt(input2.value));
    pResult.innerText = 'Resultado: ' + sumaInput;
    
}