function calcular(){
    //alert("Função calcular rolando");
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    
    if(nome.trim().length == 0 || isNaN(altura) || isNaN(peso)){
        alert("PREENCHA OS CAMPOS PARÇA");
        return false;
    }  
    
    const IMC = calcularImc(altura, peso);
    const TextoSituacao = gerarTextoImc(IMC);

    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(IMC);
    console.log(TextoSituacao);

}

function calcularImc(altura, peso){
  return IMC = peso / (altura * altura);
}

function gerarTextoImc(IMC){
   if(IMC < 16){
    return "Magreza Grave";
   } else if (IMC < 17){
    return "Magreza moderada";
   } else if (IMC < 18.5){
    return "Magreza Leve";
   } else if (IMC < 25){
    return "Saudavel";
   } else if (IMC < 30){
    return "Sobrepeso";
   } else if (IMC < 35){
    return "Obesidade Grau I";
   } else if (IMC < 40){
    return "Obesidade Grau II";
   } else if (IMC > 40){
    return "Obesidade Grau III";
   } else if (IMC > 70){
    return "papo de undaia";
   } else {
    return "peso invalido";
   }
}