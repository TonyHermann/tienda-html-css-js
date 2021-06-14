// let productox = { 
//     producto1 : {id : [document.getElementById("uno")]},
//     producto2 : {id : [document.getElementById("dos")]},
//     producto3 : {id : [document.getElementById("tres")]},
//     producto4 : {id : [document.getElementById("cuatro")]},
//     producto5 : {id : [document.getElementById("cinco")]},
//     producto6 : {id : [document.getElementById("seis")]},
//     producto7 : {id : [document.getElementById("siete")]},
//     producto8 : {id : [document.getElementById("ocho")]},
//     producto9 : {id : [document.getElementById("nueve")]},
//     producto10 : {id : [document.getElementById("diez")]},
//     producto11 : {id : [document.getElementById("once")]}
// };

// puedo agarrar a cada uno de los que ya están creados y añadirles la imagen (borrandola desde el html) y añadiendola
// con el appendchild img

// let imagenes = [];
// let imagenes[""] = "";
// let imagenes[""] = "";
// let imagenes[""] = "";
// let imagenes[""] = "";
// let imagenes[""] = "";
// let imagenes[""] = "";
// let imagenes[""] = "";
// let imagenes[""] = "";
// let imagenes[""] = "";
// let imagenes[""] = "";
// let imagenes[""] = "";
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

// let producto2 = document.getElementById("dos");
// let producto3 = document.getElementById("tres");
// let producto4 = document.getElementById("cuatro");
// let producto5 = document.getElementById("cinco");
// let producto6 = document.getElementById("seis");
// let producto7 = document.getElementById("siete");
// let producto8 = document.getElementById("ocho");
// let producto9 = document.getElementById("nueve");
// let producto10 =document.getElementById("diez");
// let producto11 = document.getElementById("once");


// let img = document.createElement('img');


// productox["producto1"].appendChild(img);

var imagenessss = [];
imagenessss[1] = './1.jpg/';

for (let x = 0; x < productox.length; x++){
    let id = x+"la";
    let idx = id.toString();
    let img = document.createElement('img');
    img.setAttribute("id", idx);
    console.log(idx);
    img.src = "./recursos/imagenes/"+idx+".jpg";
    productox[x].appendChild(img);
    // img.setAttribute("src", imagenessss[1]);
    
}




// let contenedorprincipal = document.getElementById("contenedor-cards")
// console.log(contenedorprincipal)



// let card = document.createElement('div');

// let h3 = document.createElement('h3');
// let span = document.createElement('span');

// contenedorprincipal.appendChild(card)

// card.appendChild(img);
// card.appendChild(h3);
// card.appendChild(span);

// img.src = "entrada.jpg";




// class Producto
// {
//     constructor(n, id, p)
//     {
//         this.identificador = id;
//         this.imagen = Image();
//         this.imagen.scr = imagenes[this.id];
//         this.nombre = n;
//         this.precio = p; 
//     }

// }



