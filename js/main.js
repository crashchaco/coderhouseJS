	// MSJ BIENVENIDA CON ARRAY

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
	window.onload = cambiar_contenido






	let contenedor = document.getElementById("lista");



	// MSJ AGREGAR TAREAS AL HTML

	(function () {

		// Objeto tareas
		const tareas = {
			lista: document.getElementById("lista"),
			tareaInput: document.getElementById("tareaInput"),
			btnNuevaTarea: document.getElementById("btn-agregar"),
			// AGREGUÉ EL BOTON PARA QUITAR
			btnQuitarTarea: document.getElementById("btn-quitar"),
			// AGREGUÉ EL BOTON PARA VER LAS TAREAS
			btnMostrarTareas: document.getElementById("btn-ver-tareas"),
			// AGREGUÉ EL BOTON PARA ELIMINAR EL HISTORIAL DE TAREAS
			btnEliminarHistorial: document.getElementById("btn-borrar-historial")
		}

		// Funciones

		const escribirLocal = (key, value) => (localStorage.setItem(key, JSON.stringify(value)));

		const leerLocal = (key) => JSON.parse(localStorage.getItem(key)) || false;


		var listadoDeTareas = leerLocal("tareas") || [];

		var comprobarInput = function () {
			tareaInput.className = "";
			tareaInput.setAttribute("placeholder", "Agrega tu tarea");
		};


		// AGREGAR TAREA TANTO EN ARRAY COMO EN LOCAL STORAGE
		var agregarTarea = function () {

			var tarea = tareas.tareaInput.value;

			if (tarea === "") {
				alert("Debe ingresar una tarea valida");
				tareas.tareaInput.setAttribute("placeholder", "Agregar una tarea valida");
				tareas.tareaInput.className = "error";
				return false;
			}

			// PUSH 		//LOCAL STORAGE

			listadoDeTareas.push({
				nombre: tarea
			})

			console.log(listadoDeTareas);

			escribirLocal("tareas", listadoDeTareas)

			tareas.lista.innerHTML = "";

		};

		// QUITAR TAREA TANTO DEL ARRAY COMO DEL LOCAL STORAGE

		var quitarTarea = function () {

			var tarea = tareas.tareaInput.value;

			if (tarea === "") {
				alert("Debe ingresar una tarea valida");
				tareas.tareaInput.setAttribute("placeholder", "Agregar una tarea valida");
				tareas.tareaInput.className = "error";
				return false;
			}

			// FUNCION LOCAL PARA OBNTENER EL INDICE DE LA TAREA A ELIMINAR
			function obtenerIndice(nombreTarea) {
				var Indice = -1;
				listadoDeTareas.filter(function (producto, i) {
					if (producto.nombre === nombreTarea) {
						Indice = i;
					} else if (!producto.nombre === nombreTarea) {
						alert("Esa tarea no existe en nuestra base de datos");
					}
				});
				return Indice;
			}

			listadoDeTareas = listadoDeTareas.splice(obtenerIndice(tarea), 1);

			escribirLocal("tareas", listadoDeTareas);

			// MOSTRAMOS EL ARRAY RESULTANTE
			console.log(listadoDeTareas);

			// SOBRE-ESCRIBIMOS EL ARRAY SIN EL ELEMENTO ELIMINADO
			return listadoDeTareas;
		};


		// MOSTRADO DE TAREAS DESDE LOCAL STORAGE

		const verTareas = () => {

			listadoDeTareas.forEach(item => {

				let nuevaTarea = document.createElement("li");
				let enlace = document.createElement("a");
				let contenido = document.createTextNode(item.nombre);

				// Agrega contenido al enlace
				enlace.appendChild(contenido);
				// Establece atributo href
				enlace.setAttribute("href", "#");
				// Agrega el enlace (a) a la nueva tarea (li)
				nuevaTarea.appendChild(enlace);
				// Agrega la nueva tarea a la lista
				contenedor.appendChild(nuevaTarea);
				
			})
		}

		// Agregar Tarea
		tareas.btnNuevaTarea.addEventListener("click", agregarTarea);

		// Quitar Tarea
		tareas.btnQuitarTarea.addEventListener("click", quitarTarea);

		// Mostrar Tareas
		tareas.btnMostrarTareas.addEventListener("click", verTareas);

		// Comprobar Input
		tareas.tareaInput.addEventListener("click", comprobarInput);

		// Limpiar el Array y el Local Storage
		tareas.btnEliminarHistorial.addEventListener("click", function () {
			localStorage.clear();
			listadoDeTareas.splice(0, listadoDeTareas.length);

			console.log(listadoDeTareas);
		});

	}());

	// CLASE Tareas
	class tareas {

		constructor(nombre, cantidad) {
			this.nombre = nombre;
			this.cantidad = cantidad;
		}

	}