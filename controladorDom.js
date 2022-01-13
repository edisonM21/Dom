let nombre= "Edison"



//rutina par detectar el click sobre un boton
let BotondeCambio=document.getElementById("boton")
BotondeCambio.addEventListener('click',cambiarArtista)

function cambiarArtista(){
    let etiquetaImagen=document.getElementById("carta1")
    etiquetaImagen.src="imagenes/luis.jpg"
    
    let etiquetavideo=document.getElementById("video1")
    etiquetavideo.src="videos/video1.mp4"
    
    let etiquetapresentacion=document.getElementById("presentacion")
    etiquetapresentacion.textContent="se presentan en semana santa"
    
}

