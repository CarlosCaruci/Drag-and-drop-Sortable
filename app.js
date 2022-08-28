
    const example1 = document.querySelector('.listPrueba1');
    const example2 = document.querySelector('.listPrueba2');
    const example3 = document.querySelector('.listPrueba3');
    const example4 = document.querySelector('.listPrueba4');
    const items = document.querySelectorAll('.items');
    const coloresNum = ['Verde', 'Azul', 'Amarillo', 'Blanco'];
    let arrayContenedor=[];
    let arrayCuadros=[];

        new Sortable(example1, {
            group: {
                name: 'shared',
            },
            swap: true,
            swapClass: 'flota',
            animation: 150,
            ghostClass: 'blue-background-class',

        });
        new Sortable(example2, {
            group: {
                name: 'shared',
            },
            swap: true,
            swapClass: 'flota',
            animation: 150,
            ghostClass: 'blue-background-class',

        });
        new Sortable(example3, {
            group: {
                name: 'shared',
            },
            swap: true,
            swapClass: 'flota',
            animation: 150,
            ghostClass: 'blue-background-class',

        });
        new Sortable(example4, {
            group: {
                name: 'shared',
            },
            swap: true,
            swapClass: 'flota',
            animation: 150,
            ghostClass: 'blue-background-class',
        });

function crearListHtml(listaCrear){

    for (let index = 0; index < 5; index++) {
        listaCrear.insertAdjacentHTML('beforeend', `
    <li class="items li${coloresNum[0]}"><span class="sol">⌧</span></li>`);
        arrayCuadros.push('azul')
    }
    for (let index = 0; index < 5; index++) {
        listaCrear.insertAdjacentHTML('beforeend', `
    <li class="items li${coloresNum[1]}"><span class="sol">⌧</span></li>`);
        arrayCuadros.push('amarillo')
    }
    for (let index = 0; index < 5; index++) {
        listaCrear.insertAdjacentHTML('beforeend', `
    <li class="items li${coloresNum[2]}"><span class="sol">⌧</span></li>`);
        arrayCuadros.push('verde')
    }
    for (let index = 0; index < 5; index++) {
        listaCrear.insertAdjacentHTML('beforeend', `
    <li class="items li${coloresNum[3]}"><span class="sol">⌧</span></li>`);
        arrayCuadros.push('blanco')
    }   
}
  function OrdenRmadon(lista){
return [...lista]
.sort(()=>Math.random()-0.5)
  }



   // console.log(OrdenRmadon(items))

    crearListHtml(example1);
    crearListHtml(example2);
    crearListHtml(example3);
    crearListHtml(example4);


    example1.addEventListener('drop', (e)=>{
       
    console.log(almacenamientoDeVecesRepetidas)
    console.log(almacenamientoDeVecesRepetidas)
    console.log(arrayCuadros)
})

let contador=0;
let almacenamientoDeVecesRepetidas=[];

   arrayCuadros.forEach(element => {
   });

   for (let index = 0; index < arrayCuadros.length; index++) {
    
    if(arrayCuadros[index+1]==arrayCuadros[index]){
     //   console.log('Se repite '+ arrayCuadros[index])
        contador++
        if(contador==20){
            console.log('se hizieron 20 cuadros')
        }
       // console.log(contador)
    } else{
       // console.log('upsss')
        almacenamientoDeVecesRepetidas.push(contador)
        contador=1;
    }
    //console.log(contador)
   }
   
//console.log(almacenamientoDeVecesRepetidas)