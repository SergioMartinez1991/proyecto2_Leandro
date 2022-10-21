// creacion de variables donde se almacenara cada uno de los elementos
const dateNumber = document.getElementById("dateNumber")
const dateMonth = document.getElementById("dateMonth")
const dateYear = document.getElementById("dateYear")
const dateText = document.getElementById("dateText")

// en tasksContainer se iran agregando cada una de las tareas
const tasksContainer = document.getElementById("tasksContainer")

//creacion de funcion para setear fecha del dia actual con setDate
const setDate = () => {
    const date = new Date();
    // a cada variable se le modifica el textContet usando date 
    //El método toLocaleString() devuelve un cadena con la representación al idioma de la fecha especificada.
    dateNumber.textContent = date.toLocaleString('es', { day: "numeric" })
    //obtener el dia de la semana con long se optiene el nombre completo
    dateText.textContent = date.toLocaleString('es', { weekday: "long" })
    //optencion del mes con short para obtenerlo de manera completa 
    dateMonth.textContent = date.toLocaleString('es', { month: "long" })

    dateYear.textContent = date.toLocaleString('es', { year: "numeric" })
}
//agregamos evento con addNewTask cuando el usuario ingrese una nueva tarea
const addNewTask = event => {
    event.preventDefault()
    // optenemos el valor del imput
    const { value } = event.target.taskText
    //condicion si no hay caraccteres no se ejecuta la funciom
    if(!value) return;
    //creacion de clases
    const task = document.createElement("div")
    task.classList.add("task", "roundBorder")
    //cuando des clic llamamos a la funcion changeState para cambiar el estado que se va a crear
    task.addEventListener('click', changeState)
    //desntro del elemento task agregamos lo que el usuario esta ingresando
    task.textContent = value;

    //agregamos el evento al principio de la lista con la propiedad prepend
    tasksContainer.prepend(task);
    //limpiamos el imput para ingresar nueva tarea
    event.target.reset();
};

//al hacer clic en las tareas se recibe un nuevo evento
var changeState = event => {
    //accedemos a la lista de clases del elemento a traves de classList
    event.target.classList.toggle("done")
};

//creacion de funcion order y crear 2 arreglos uno donde 
var order = () => {
    const done = [];
    const toDo = [];
    //acceder a los elementos de task y con la ayuda de forEach va a iterar task
    tasksContainer.childNodes.forEach( element => {
        //pregunta si el elemento esta la estring agregar un elemento y agregar elemento con push al final del array
        element.classList.contains("done") ? done.push(element) : toDo.push(element)
    })
    //funcion que devuelve un arreglo SPRED
    return [...toDo, ...done];
}

// Creacion de una funcion que para ordenar (viene de html)
const renderOrderedTasks = () => {
    //llamar a order que devulve un array y agregarlo al task al final con la ayuda de appendchild
    order().forEach(element => tasksContainer.appendChild(element))
}

setDate();