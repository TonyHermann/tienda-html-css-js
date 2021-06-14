
let productox = []; //consigo los containers
    productox[0] = document.getElementById("uno");
    productox[1] = document.getElementById("dos");
    productox[2] = document.getElementById("tres");
    productox[3] = document.getElementById("cuatro");
    productox[4] = document.getElementById("cinco");
    productox[5] = document.getElementById("seis");
    productox[6] = document.getElementById("siete");
    productox[7] = document.getElementById("ocho");
    productox[8] = document.getElementById("nueve");
    productox[9] =document.getElementById("diez");
    productox[10] = document.getElementById("once");

for (let x = 0; x < productox.length; x++){
    let id = x+"la"; // consigo una "id" 
    let idx = id.toString(); //hago string el id obtenido xq si no no se pude 
    let img = document.createElement('img'); // creo el img
    img.setAttribute("id", idx); // le pongo el id a la img
    console.log(idx); // el log para ver si todo está bien 
    img.src = "./recursos/imagenes/"+idx+".jpg"; // uso la id como nombre del archivo para poder simular una base de datos
    productox[x].prepend(img); // Poner el nodo antes que cualquier otro.
    // img.setAttribute("src", imagenessss[1]);
    
}

