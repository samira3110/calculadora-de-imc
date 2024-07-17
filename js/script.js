

function calcular(){
    var pU = parseFloat(document.getElementById("pUsuario").value);
    var aU = parseFloat(document.getElementById("aUsuario").value);
    var resultado = document.getElementById("resultado");
    var classificação = document.getElementById("classificação");
    var IMC = pU / (aU*aU);
    resultado.innerHTML = "Seu IMC é " + IMC.toFixed(2);

    if ( IMC < 18.5) {
        classificação.innerHTML = "classificação: Magreza";
    } else if ( IMC < 24.9) {
        classificação.innerHTML = "classsificação: Normal";
    } else if ( IMC < 29.9) {
        classificação.innerHTML = "classificação: Sobrepeso";
    } else if ( IMC < 39.9) {
        classificação.innerHTML = "classificação: Obesidade";
    } else {
        classificação.innerHTML = "classificação: Obesidade Grave";
    }
    
    
        
        
}


    


    

    

    



