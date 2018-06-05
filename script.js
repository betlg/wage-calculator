let	arrayCategorias = ["-", "Junior", "Intermedio", "Senior"]
let arrayFormaPago 	= ["-", "Planilla", "Recibo por Honorarios"]
let arrayObjetivos	= ["-", "Si", "No"]

let cmbCategorias = document.getElementById("cmbCategorias")	

	for (var i = 0; i < arrayCategorias.length; i++) {
		let option = document.createElement("option")
		option.value = arrayCategorias[i]
		option.innerHTML = arrayCategorias[i]

	cmbCategorias.add(option)
	}

let cmbFormaPago = document.getElementById("cmbFormaPago")

	for (var i = 0; i < arrayFormaPago.length; i++) {
		let option = document.createElement("option")
		option.value = arrayFormaPago[i]
		option.innerHTML = arrayFormaPago[i]

	cmbFormaPago.add(option)
	}

let cmbObjetivos = document.getElementById("cmbObjetivos")

	for (var i = 0; i < arrayObjetivos.length; i++) {
		let option = document.createElement("option")
		option.value = arrayObjetivos[i]
		option.innerHTML = arrayObjetivos[i]

	cmbObjetivos.add(option)
	}

function calcularSueldo() {

	let txtFaltas 		= document.getElementById("txtFaltas")
	let lblSueldoNeto 	= document.getElementById("lblSueldoNeto")
	let lblPlanilla 	= document.getElementById("lblPlanilla")
	let lblFaltas	 	= document.getElementById("lblFaltas")
	let lblBono 		= document.getElementById("lblBono")
	let lblSueldoBruto 	= document.getElementById("lblSueldoBruto")

	lblSueldoNeto.innerHTML		= ""
	lblPlanilla.innerHTML 		= ""
	lblFaltas.innerHTML 		= ""
	lblBono.innerHTML 			= ""
	lblSueldoBruto.innerHTML 	= ""

	var sueldoNeto = 0
	var desPlanilla = 0
	var desFaltas = 0
	var bono = 0

	if (cmbCategorias.value == "-") {
		alert("Seleccione una categoría de trabajador válida")
	}else if (cmbCategorias.value == "Junior") {
		sueldoNeto = 1500
	}else if (cmbCategorias.value == "Intermedio") {
		sueldoNeto = 3000
	}else{
		sueldoNeto = 5000
	}

	if (cmbFormaPago.value == "-") {
		alert("Seleccione una forma de pago válida")
	}else if (cmbFormaPago.value == "Planilla"){
		desPlanilla = sueldoNeto * 0.19
	}else{
		desPlanilla = sueldoNeto * 0.08
	}

	if (cmbObjetivos.value == "-") {
		alert("Mencione si cumplió los objetivos")
	}else if (cmbObjetivos.value == "Si") {
		bono = sueldoNeto * 0.05
	}

	let sueldoPorHora = sueldoNeto / 80
	if (!esNumero(txtFaltas.value)){
		alert("Ingrese un numero de tardanzas valido")
	}else {
	desFaltas = parseInt(txtFaltas.value) * sueldoPorHora * 2
	}

	let sueldoBruto = sueldoNeto - desPlanilla - desFaltas + bono

	lblSueldoNeto.innerHTML  = "Sueldo neto: S/." + sueldoNeto.toFixed(2)
	lblPlanilla.innerHTML 	 = "Impuesto a la renta: S/." + desPlanilla.toFixed(2)
	lblFaltas.innerHTML 	 = "Descuento por tardanzas: S/." + desFaltas.toFixed(2)
	lblBono.innerHTML 		 = "Bono por objetivos: S/." + bono.toFixed(2)
	lblSueldoBruto.innerHTML = "TOTAL A PAGAR: S/." + sueldoBruto.toFixed(2)
}

function esNumero(valor){

	if((valor - 0) == valor ){
		return true
	}else{
		return false
	}
}
