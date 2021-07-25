let user = prompt("Bienvenidos a su lista de tareas virtual V 1.0 - Ingrese su nombre para comenzar a utilizar el sistema")
alert("Bienvenido " + user)

var tiempo=3000
var contenido=new Array(5)
contenido[0]="Bienvenido " + user + " a su Agenda Virtual"
contenido[1]="Aquí podras agregar tareas y su descripción"
contenido[2]="Agendar hora y fecha de realización"
contenido[3]="Y modificarla cuando quieras, ¡Hasta podrás anexar imagenes, documentos y sonidos!"
contenido[4]="Que la disfrutes"
var indice_contenido=0

function cambiar_contenido(){
	if (indice_contenido>=contenido.length)
	indice_contenido=0
	document.getElementById("contenedorjs").innerHTML=contenido[indice_contenido]
	indice_contenido++
	setTimeout("cambiar_contenido()",tiempo)
}

document.write('<div id="contenedorjs"></div>')
window.onload=cambiar_contenido

(function () {
	// Objeto tareas
const tareas = {
		lista : document.getElementById("lista"),
		tareaInput : document.getElementById("tareaInput"),
		btnNuevaTarea : document.getElementById("btn-agregar"),
	}

	// Funciones

	var comprobarInput = function () {
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	var agregarTarea = function () {
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

			// Borrando Elementos de la lista
		for (var i = 0; i <= lista.children.length - 1; i++) {
			lista.children[i].addEventListener("click", eleminarTarea);
		}
	};


	var eleminarTarea = function () {
		this.parentNode.removeChild(this);
	};

	// Agregar Tarea
	tareas.btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareas.tareaInput.addEventListener("click", comprobarInput);

}());