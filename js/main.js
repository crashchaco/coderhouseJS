	// MSJ BIENVENIDA CON ARRAY

function bienvenidaArray(tiempo,contenido,indice_contenido){
	this.tiempo=tiempo
	this.contenido=contenido
	this.indice_contenido=indice_contenido
}

const saludar = ["Hola bienvenido a su lista de tareas virtual v 1.0", "Aquí podra guardar y planificar su agenda"]

let saludo1 = new bienvenidaArray(3000, saludar, 0)

function cambiar_contenido(){
	if (saludo1.indice_contenido>=saludo1.contenido.length)
	saludo1.indice_contenido=0
	document.getElementById("contenedorjs").innerHTML=saludo1.contenido[saludo1.indice_contenido]
	saludo1.indice_contenido++
	setTimeout("cambiar_contenido()",saludo1.tiempo)
}
document.write('<div id="contenedorjs"></div>')
window.onload=cambiar_contenido


	// MSJ AGREGAR TAREAS AL HTML

(function () {

	// Objeto tareas
const tareas = {
		lista : document.getElementById("lista"),
		tareaInput : document.getElementById("tareaInput"),
		btnNuevaTarea : document.getElementById("btn-agregar"),
	}

	// Funciones

	const escribirLocal = (key,value) => (localStorage.setItem(key,JSON.stringify(value)));
	const leerLocal = (key) => JSON.parse(localStorage.getItem(key)) || false;

	var listadoDeTareas = leerLocal("tareas")||[];

	var comprobarInput = function() {
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	
	var agregarTarea = function() {
		
		

		var tarea = tareas.tareaInput.value;

		if (tarea === "") {
			alert("Debe ingresar una tarea valida");
			tareas.tareaInput.setAttribute("placeholder", "Agregar una tarea valida");
			tareas.tareaInput.className = "error";
			return false;
		}


		// PUSH 		//LOCAL STORAGE

		listadoDeTareas.push({nombre : tarea, cantidad : 1})
		console.log(listadoDeTareas);
		escribirLocal("tareas",listadoDeTareas)
		tareas.lista.innerHTML = ""
		listadoDeTareas.forEach(item => {

		let nuevaTarea = document.createElement("li");
		let enlace = document.createElement("a");
		let contenido = document.createTextNode(item.nombre + " " + item.cantidad);

		// Agrega contenido al enlace
		enlace.appendChild(contenido);
		// Establece atributo href
		enlace.setAttribute("href", "#");
		// Agrega el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
 		// Agrega la nueva tarea a la lista
		tareas.lista.appendChild(nuevaTarea);
		})


// Eventos

		tareas.tareaInput.value = "";

		// Borrar Elementos de la lista
		for (var i = 0; i <= lista.children.length - 1; i++) {
			lista.children[i].addEventListener("click", eliminarTarea);
		}
	};

	var eliminarTarea = function () {
		this.parentNode.removeChild(this);
	};

	// Agregar Tarea
	tareas.btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareas.tareaInput.addEventListener("click", comprobarInput);

}());

// CLASE Tareas
class tareas {
	
	constructor(nombre, cantidad){
		this.nombre = nombre;
		this.cantidad = cantidad;
	}
	
}


// >>>>>>>>>>>>>>>>>>>>> CLASE Listado Tarea <<<<<<<<<<<<<<<<<<<<<

// DEVUELVE MAP


// >>>>>>>>>>>>>>>>>>>>> método para agregar tareas  <<<<<<<<<<<<<<<<<<<<<
//find - PUSH



// >>>>>>>>>>>>>>>>>>>>> metodo paara eliminar tareas <<<<<<<<<<<<<<<<<<<<<
// filter






