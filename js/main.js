// MSJ BIENVENIDA CON ARRAY
// CLASE Tareas
class tareas {

	constructor(nombre, cantidad) {
		this.nombre = nombre;
		this.cantidad = cantidad;
	}

}

function bienvenidaArray(tiempo, contenido, indice_contenido) {
	this.tiempo = tiempo
	this.contenido = contenido
	this.indice_contenido = indice_contenido
}

const saludar = ["Hola bienvenido a su lista de tareas virtual v 1.0", "Aquí podra guardar y planificar su agenda"]

let saludo1 = new bienvenidaArray(3000, saludar, 0)

function cambiar_contenido() {
	if (saludo1.indice_contenido >= saludo1.contenido.length)
		saludo1.indice_contenido = 0
	document.getElementById("contenedorjs").innerHTML = saludo1.contenido[saludo1.indice_contenido]
	saludo1.indice_contenido++
	setTimeout("cambiar_contenido()", saludo1.tiempo)
}
document.write('<div id="contenedorjs"></div>')
window.onload = cambiar_contenido();


// MSJ AGREGAR TAREAS AL HTML

// 	// Objeto tareas
// const tareas = {
// 		lista : $("#lista"), // document.getElementById("lista"),
// 		tareaInput : $("#tareaInput"), //document.getElementById("tareaInput"),
// 		btnNuevaTarea : $("#btn-agregar"), //document.getElementById("btn-agregar"),
// 	}

let lista = $("#lista");
// UTILICE EL SELECTOR QUERY SELECTOR PARA QUE TOME EL VALOR, YA QUE CON EL $ NO LO HACE
let tareaInput = document.querySelector("#tareaInput");
let btnNuevaTarea = $("#btn-agregar");

// Funciones

const escribirLocal = (key, value) => (localStorage.setItem(key, JSON.stringify(value)));
const leerLocal = (key) => JSON.parse(localStorage.getItem(key)) || false;


var listadoDeTareas = leerLocal("tareas") || [];

var eliminarTarea = function () {
	this.parentNode.removeChild(this);
};

// LO QUE HICE ACÁ ES BÁSICAMENTE CREAR UNA FUNCTION PARA QUE SE HAGA EL CLICK, CON AL FUNCION AGREGAR TAREA DENTRO
// // Agregar Tarea
// btnNuevaTarea.addEventListener("click", agregarTarea);

btnNuevaTarea.click(function () {
	let tarea = tareaInput.value;
	console.log(tarea);

	if (tarea == "") {
		alert("Debe ingresar una tarea valida");
		// COMENTE ESTE CÓDIGO PORQUE CREO QUE NO ES NECESARIO
		// tareaInput.setAttribute("placeholder", "Agregar una tarea valida");
		tareaInput.className = "error";
	} else {
		
	// PUSH 		//LOCAL STORAGE

	listadoDeTareas.push({ nombre: tarea, cantidad: 1 })
	console.log(listadoDeTareas);
	escribirLocal("tareas", listadoDeTareas)
	// COMENTÉ ESTE CÓDIGO QUE NO UTILIZAMOS, CREO QUE SE PUEDE OPTIMIZAR UTILIZANDOLO DESDE OTRO LADO
	// lista.innerHTML = "";
	
	listadoDeTareas.forEach(item => {

		let nuevaTarea = document.createElement("li");
		let enlace = document.createElement("a");
		let contenido = document.createTextNode(item.nombre + " " + item.cantidad);
		console.log(contenido);

		// Agrega contenido al enlace
		enlace.innerText = contenido;
		// Establece atributo href
		enlace.setAttribute("href", "#");
		// Agrega el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agrega la nueva tarea a la lista
		lista.innetHTML += nuevaTarea;
	})
	// COMENTÉ ESTAS LINEAS YA QUE TRAEN CONFLICTOS Y CREO QUE SE PUEDEN OPTIMIZAR UTILIZANDOLOS DESDE OTRO LADO
		// Eventos
		// tareaInput.value = "";

		// Borrar Elementos de la lista
		// for (var i = 0; i <= lista.children.length - 1; i++) {
		// 	lista.children[i].addEventListener("click", eliminarTarea);
		// }
	}
});

// LO QUE HICE ACÁ ES BÁSICAMENTE CREAR UNA FUNCTION PARA QUE SE HAGA EL CLICK, CON AL FUNCION COMPROBAR INPUT DENTRO
// Comprobar Input
// tareaInput.addEventListener("click", comprobarInput);

	// tareaInput.click(function() {
	// 	tareaInput.className = "";
	// 	tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	// });

// >>>>>>>>>>>>>>>>>>>>> CLASE Listado Tarea <<<<<<<<<<<<<<<<<<<<<

// DEVUELVE MAP


// >>>>>>>>>>>>>>>>>>>>> método para agregar tareas  <<<<<<<<<<<<<<<<<<<<<
//find - PUSH



// >>>>>>>>>>>>>>>>>>>>> metodo paara eliminar tareas <<<<<<<<<<<<<<<<<<<<<
// filter






