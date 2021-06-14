let productox = []; //consigo los containers
productox[0] = document.getElementById("uno");
productox[0][1] = {
    o: 'LALA'
};
productox[1] = document.getElementById("dos");
productox[2] = document.getElementById("tres");
productox[3] = document.getElementById("cuatro");
productox[4] = document.getElementById("cinco");
productox[5] = document.getElementById("seis");
productox[6] = document.getElementById("siete");
productox[7] = document.getElementById("ocho");
productox[8] = document.getElementById("nueve");
productox[9] = document.getElementById("diez");
productox[10] = document.getElementById("once");

// let ids = [];

for (let x = 0; x < productox.length; x++) {
    let id = x + "la"; // consigo una "id" 
    let idx = id.toString(); //hago string el id obtenido xq si no no se pude 
    // ids.push(idx);
    // console.log(ids);
    let img = document.createElement('img'); // creo el img
    img.setAttribute("id", idx); // le pongo el id a la img
    console.log(idx); // el log para ver si todo está bien 
    img.src = "./recursos/imagenes/" + idx + ".jpg"; // uso la id como nombre del archivo para poder simular una base de datos
    productox[x].prepend(img); // Poner el nodo antes que cualquier otro.
    // img.setAttribute("src", imagenessss[1]);
}

// // console.log(ids);
// // console.log(typeof(ids));
// // let index = ids.length;
// // console.log(index)

// let idssss = []

// // console.log(idssss);

// const longitudDePedazos = ids.length;

// for (let lala = 0; lala > ids.length; lala++){
//     let pedazo = ids.slice(i, i + longitudDePedazos);
//     idssss.push(pedazo);
// }

// console.log(idssss)

// const LONGITUD_PEDAZOS = 11; // Partir en arreglo de 3
// for (let i = 0; i < ids.length; i += 1) {
// 	let pedazo = ids.slice(i, i + 1);
// 	idssss.push(pedazo);
// }
// console.log("Arreglo de arreglos: ", idssss);

// let idss = ids.toString();

// console.log(typeof(idss));

// let idsss = idss.split("");

// console.log(typeof(idsss));

// console.log(idsss);



// let v = 0;

// let setValue = () => {
//     console.log("Inicio de la funcion");
//     for (let v; v < productox.length; v++) {
//         console.log("Valor de v "+v);
//         console.log("Fin del ciclo for");
//         return v
//     };
//     value.push(v);
// }

// let value = [];


let load = (e) => {
    // setValue();
    // console.log("este es el value "+value);
    // // let url = idssss[value];
    // let url = ids.filter(id => id.value = )
    window.location.href = "./pages/"+url+".html";
}



productox[0].addEventListener('click', ()=> {window.location.href = "./pages/0la.html"});
productox[1].addEventListener('click', ()=> {window.location.href = "./pages/1la.html"});
productox[2].addEventListener('click', ()=> {window.location.href = "./pages/2la.html"});
productox[3].addEventListener('click', ()=> {window.location.href = "./pages/3la.html"});
productox[4].addEventListener('click', ()=> {window.location.href = "./pages/4la.html"});
productox[5].addEventListener('click', ()=> {window.location.href = "./pages/5la.html"});
productox[6].addEventListener('click', ()=> {window.location.href = "./pages/6la.html"});
productox[7].addEventListener('click', ()=> {window.location.href = "./pages/7la.html"});
productox[8].addEventListener('click', ()=> {window.location.href = "./pages/8la.html"});
productox[9].addEventListener('click', ()=> {window.location.href = "./pages/9la.html"});
productox[10].addEventListener('click', ()=> {window.location.href = "./pages/10la.html"});