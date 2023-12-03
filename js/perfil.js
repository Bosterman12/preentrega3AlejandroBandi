const btnContratar = document.querySelector("button.button-contratar")

// me enlazo con los elementos HTML del detalle del préstamo
const spanEdad = document.querySelector("span.label-edad")
const spanConocimiento = document.querySelector("span.label-conocimiento")
const spanAhorro = document.querySelector("span.label-ahorro") 
const spanDestino = document.querySelector("span.label-destino")
const spanTiempo = document.querySelector("span.label-tiempo")
const spanObjetivo = document.querySelector("span.label-objetivo")
const divMensajeFinal = document.querySelector("span.label-perfil")

//Recupero de local storage
function recuperarDeLS() {
    const datosDelPerfil = JSON.parse(localStorage.getItem("datosDelPerfil"))

    spanEdad.textContent =  datosDelPerfil.edad
    spanConocimiento.textContent = datosDelPerfil.conocimiento
    spanAhorro.textContent = datosDelPerfil.ahorro
    spanDestino.textContent = datosDelPerfil.destino
    spanTiempo.textContent = datosDelPerfil.tiempo
    spanObjetivo.textContent = datosDelPerfil.objetivo
    score = datosDelPerfil.score
}

function analizarPerfil(){
    const scoreLS = JSON.parse(localStorage.getItem("datosDelPerfil"))
    const scoreInv = scoreLS.score
    let mensaje = ""
    //console.log(scoreInv)
    if (scoreInv <=6){
        const inversor = 0
        let mensaje = perfil.find((perfil) => perfil.id === inversor)
        divMensajeFinal.innerHTML = `"Su perfil de inversor es" ${mensaje.inversor} ${mensaje.recomendacion} `
        
    }
    else if (scoreInv <= 12){
        const inversor = 1
        let mensaje = perfil.find((perfil) => perfil.id === inversor)
        
        divMensajeFinal.innerHTML = `"Su perfil de inversor es" ${mensaje.inversor} ${mensaje.recomendacion} `
    }
    else if (scoreInv <= 18){
        const inversor = 2
        let mensaje = perfil.find((perfil) => perfil.id === inversor)
        divMensajeFinal.innerHTML = `"Su perfil de inversor es" ${mensaje.inversor} ${mensaje.recomendacion} `
        
        
    }
    else if (scoreInv <= 24){
        const inversor = 3
        let mensaje = perfil.find((perfil) => perfil.id === inversor)
        divMensajeFinal.innerHTML = `"Su perfil de inversor es" ${mensaje.inversor} ${mensaje.recomendacion} `
        
       
    }
    else{
        alert ("los datos ingresados no son válidos")
 } 
   
  }

 //Eventos
 btnContratar.addEventListener("click", ()=> {
    // ALTERNATIVA 01 - validar con el Tutor
    // alert("Un asesor de créditos lo contactará para finalizar la acreditación del dinero. ¡Muchas gracias por confiar en nuestra entidad para hacer realidad sus sueños!")
    // localStorage.clear()
    // location.href = "index.html"

    // ALTERNATIVA 02 - Usar un DIV en pantalla
    analizarPerfil()
    divMensajeFinal.classList.add("transition-div-show") 
    localStorage.clear()
})

 recuperarDeLS()