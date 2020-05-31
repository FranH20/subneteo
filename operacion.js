var ip, mask,
subred, resultado,
bitprestado, newmask,
saltodered;
function mtdResolver(){
    ip = document.getElementById('txt_ip').value;
    mask = document.getElementById('txt_mask').value;
    subred = document.getElementById('txt_subred').value;
    //BITS A PRESTAR
    bitprestado = prestarBits(subred);
    //OBTENER NUEVA MASCARA
    newmask = nuevaMascara(bitprestado);
    //SALTOS DE RED
    saltodered = saltodeRed(newmask);
    
    console.log('BITS PRESTADOS: ' + bitprestado);
    console.log('MASCARA FINAL : ' + newmask);
    console.log('SALTO DE RED  : ' + saltodered);

    resultado = 0;
    for(var i=0; i < subred; i++){
        console.log(resultado);
        resultado = resultado + saltodered;
    }

}

function prestarBits(numero){
    resultado = 0;
    for(var i=1; i <= 8 ; i++){
        //FORMULA 2 ELEVADO A I TIENE QUE SER MAYOR O IGUAL NUMERO
        resultado = 2 ** i;
        if(resultado >= 4){
            resultado = i;
            break;
        }
    }
    return resultado;
}

function nuevaMascara(numero){
    resultado = 0;
    for(var i=7; i >=0; i--){
        resultado = resultado + 2**i;
        --numero;
        if(numero == 0){ break;}
    }
    return(resultado);
}

function saltodeRed(numero){
    resultado = 0;
    resultado = 256 - numero;
    return resultado;
}