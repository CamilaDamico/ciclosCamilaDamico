function calcularSubtotal () {
	const precio_collar = 15
	const precio_jabon = 4
	const precio_alimento = 26

	console.log("1 - Collar: " + precio_collar + " pesos")
	console.log("2 - Jabon: " + precio_jabon + " pesos")
	console.log("3 - Alimento: " + precio_alimento + " pesos")

	let subtotal = 0;
	let cantidad = 0;

	let productoIngresado = prompt("Ingrese codigo de producto")

	while(productoIngresado !== "s") {
		switch(productoIngresado) {
			case "1":
				cantidad = prompt("Cuantos desea?")
				subtotal += cantidad * precio_collar
				break;
			case "2":
				cantidad = prompt("Cuantos desea?")
				subtotal += cantidad * precio_jabon
				break;
			case "3":
				cantidad = prompt("Cuantos desea?")
				subtotal += cantidad * precio_alimento
				break;
		}
		productoIngresado = prompt("Ingrese codigo de producto")	
	}
	return subtotal;
}

function aplicarDescuentoSiCorresponde(subtotal) {
	let total = subtotal
	if (subtotal > 50) {
		total = subtotal - subtotal / 10
	}
	return total
}

const subtotal = calcularSubtotal()
console.log("El subtotal es " + subtotal)

const total = aplicarDescuentoSiCorresponde(subtotal)
console.log("El total es " + total)