//for

/* let ingresarNumero = parseInt(prompt("Ingrese un numero"));

for (let i = ingresarNumero; i <= 20; i++){
    console.log(i)
} */

//while

let productoIngresado = prompt("Ingrese producto")
let listaDeProductosIngresados = ""

while(productoIngresado != "ESC"){
    listaDeProductosIngresados += productoIngresado;

    productoIngresado = prompt("Ingrese producto")

    if(productoIngresado != "ESC"){
        listaDeProductosIngresados += ", "
    }
}

console.log("Productos ingresados: " + listaDeProductosIngresados);


