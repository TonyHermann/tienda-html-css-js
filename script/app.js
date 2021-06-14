
let productox = [];
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
    let id = x+"la";
    let idx = id.toString();
    let img = document.createElement('img');
    img.setAttribute("id", idx);
    console.log(idx);
    img.src = "./recursos/imagenes/"+idx+".jpg";
    productox[x].prepend(img);
    // img.setAttribute("src", imagenessss[1]);
    
}

