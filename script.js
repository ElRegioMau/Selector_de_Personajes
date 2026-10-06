function cambiarImagen() {

    //Esta es una variable
    let imagen = document.getElementById("imagen"); 

    if (imagen.src.match("pika.png")) {
        imagen.src = "bulbasaur.jpg";
    }
    else {
        imagen.src = "pika.png";
    }
    
}