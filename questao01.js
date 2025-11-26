function inserirTitulo() {
 
    var inputElemento = document.getElementById("txt-titulo");
    var valorDigitado = inputElemento.value;
    var tituloElemento = document.getElementById("titulo"); 
    tituloElemento.innerText = valorDigitado;
    tituloElemento.style.color = "blue";
}