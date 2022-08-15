function criptografar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
    var textoCriptografado = texto.replace(/e/,"enter");
    var textoCriptografado = textoCriptografado.replace(/i/igm,"imes");
    var textoCriptografado = textoCriptografado.replace(/a/igm,"ai");
    var textoCriptografado = textoCriptografado.replace(/o/igm,"ober");
    var textoCriptografado = textoCriptografado.replace(/u/igm,"ufat");

    document.getElementById("imgMenino").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCriptografado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function descriptografar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var textoCriptografado = texto.replace(/enter/,"e");
    var textoCriptografado = textoCriptografado.replace(/imes/igm,"i");
    var textoCriptografado = textoCriptografado.replace(/ai/igm,"a");
    var textoCriptografado = textoCriptografado.replace(/ober/igm,"o");
    var textoCriptografado = textoCriptografado.replace(/ufat/igm,"u");

    document.getElementById("imgMenino").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCriptografado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copy() {
    var conteudo = document.querySelector("#texto2");
    conteudo.select();
    document.execCommand("copy");
    alert("Copiou");
}