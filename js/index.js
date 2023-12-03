
//Enlace DOM a elementos HTML

const selectEdad = document.querySelector("select#selectEdad")
const selectConocimiento = document.querySelector("select#selectConocimiento")
const selectAhorro = document.querySelector("select#selectAhorro")
const selectDestino = document.querySelector("select#selectDestino")
const selectTiempo = document.querySelector("select#selectTiempo")
const selectObjetivo = document.querySelector("select#selectObjetivo")
const btnCalcular = document.querySelector("button.button-calcular")
//Cargar los select

function cargarEdad() {
    if (edad.length > 0) {
        edad.forEach((edades)=> {
            selectEdad.innerHTML += `<option>${edades.rango}</option>`
        })
    }  
}
function cargarConocimiento() {
    if (conocimiento.length > 0) {
        conocimiento.forEach((conoc)=> {
            selectConocimiento.innerHTML += `<option>${conoc.rango}</option>`
        })
    }  
}
function cargarAhorro() {
    if (ahorro.length > 0) {
        ahorro.forEach((save)=> {
            selectAhorro.innerHTML += `<option>${save.rango}</option>`
        })
    }  
}

function cargarDestino() {
    if (destino.length > 0) {
        destino.forEach((inversion)=> {
            selectDestino.innerHTML += `<option>${inversion.rango}</option>`
        })
    }  
}

function cargarTiempo() {
    if (tiempo.length > 0) {
        tiempo.forEach((aguante)=> {
            selectTiempo.innerHTML += `<option>${aguante.rango}</option>`
        })
    }  
}

function cargarObjetivo() {
    if (objetivo.length > 0) {
        objetivo.forEach((obj)=> {
            selectObjetivo.innerHTML += `<option>${obj.rango}</option>`
        })
    }  
}

// Calculamos el perfil con los datos del HTML

function calcularPerfil(){
    let edadInformada = selectEdad.value 
    let conocimientoInformado = selectConocimiento.value
    let ahorroInformado = selectAhorro.value
    let destinoInformado = selectDestino.value
    let tiempoInformado = selectTiempo.value
    let objetivoInformado = selectObjetivo.value

    let scoreEdad = edad.find((age) => age.rango === edadInformada)
    let scoreConocimiento = conocimiento.find((know) => know.rango === conocimientoInformado)
    let scoreAhorro = ahorro.find((save) => save.rango === ahorroInformado)
    let scoreDestino = destino.find((invest) => invest.rango === destinoInformado)
    let scoreTiempo = tiempo.find((time) => time.rango === tiempoInformado)
    let scoreObjetivo = objetivo.find((obj) => obj.rango === objetivoInformado)

    let score = scoreEdad.valor + scoreConocimiento.valor + scoreAhorro.valor + scoreDestino.valor + scoreTiempo.valor + scoreObjetivo.valor
    console.log(score)
    guardarEnLS(edadInformada, conocimientoInformado,ahorroInformado,destinoInformado,tiempoInformado,objetivoInformado,score)
    location.href = "perfil.html"
}

// Guardamos en Localstorage

function guardarEnLS(edad, conocimiento, ahorro, destino, tiempo, objetivo, score) {
    let datosDelPerfil = {
        edad: edad,
        conocimiento: conocimiento, 
        ahorro: ahorro,
        destino: destino,
        tiempo: tiempo,
        objetivo: objetivo,
        score: score
    }

    localStorage.setItem("datosDelPerfil", JSON.stringify(datosDelPerfil))
}





//Eventos
btnCalcular.addEventListener("click", ()=> calcularPerfil())

cargarEdad()
cargarAhorro()
cargarConocimiento()
cargarDestino()
cargarObjetivo()
cargarTiempo()