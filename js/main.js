let user = prompt("Bienvenidos a su lista de tareas virtual V 1.0 - Ingrese su nombre para comenzar a utilizar el sistema")
alert("Bienvenido " + user)

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

	var comprobarInput = function() {
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	var agregarTarea = function() {
		var tarea = tareas.tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			alert("Debe ingresar una tarea valida");
			tareas.tareaInput.setAttribute("placeholder", "Agregar una tarea valida");
			tareas.tareaInput.className = "error";
			return false;
		}

		// Agrega contenido al enlace
		enlace.appendChild(contenido);
		// Establece atributo href
		enlace.setAttribute("href", "#");
		// Agrega el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agrega la nueva tarea a la lista
		tareas.lista.appendChild(nuevaTarea);

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