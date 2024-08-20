const textArea = document.querySelector(".Textarea");
const mensaje = document.querySelector(".Mensaje");

const textoPredeterminado = "Ingrese el texto aquí";

function Boton_1(){

    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = textoPredeterminado;
    mensaje.style.backgroundImage = "none"
    

}

function encriptar (stringeEncriptado){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ]
    stringeEncriptado = stringeEncriptado.toLowerCase()

    for(let i = 0; i  < matrizCodigo.length; i++){
       if(stringeEncriptado.includes (matrizCodigo[i][0])){
        stringeEncriptado = stringeEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

       }
        
    }
    return stringeEncriptado

}

function Boton_2(){


    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    textArea.value = mensajeOriginal;

}

function desencriptar (stringeDesencriptado){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ]
    stringeDesencriptado = stringeDesencriptado.toLowerCase()

    for(let i = 0; i  < matrizCodigo.length; i++){
       if(stringeDesencriptado.includes (matrizCodigo[i][1])){
        stringeDesencriptado = stringeDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

       }
        
    }
    return stringeDesencriptado

}

function Copiar(){
    const mensaje = document.querySelector(".Mensaje");
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles: " + mensaje.value);
}

