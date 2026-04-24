function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat( document.getElementById('n1').value ) ;
    let n2 = parseFloat( document.getElementById("n2").value );
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;
    
    if( isNaN(n1) || isNaN(n2)){
        document.getElementById('resultado').innerText = 'Preencha todos os números!'
        return false;
    }


    //processamento
    if(op == 'soma'){
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if(op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao'){
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao'){

        if(n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }
            
    } else {
        resultado = "Operação Inválida";
        return false;
    }

    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    document.getElementById('resultado').innerHTML = resultado;

    let cadastroAPI = {
     n1 : n1,
     n2 : n2,
     operacao : op,
     resultado : resultado
    };

    const cadastrado = cadastrarApi(cadastroAPI);


    const historico = document.getElementById("data");
    
     historico.innerHTML += `
    <article class="data__card-result">
    <span><strong>Primeiro Número:</strong> ${n1}</span>
     <span><strong>Segundo Número:</strong> ${n2}</span>
     <span><strong>Operação:</strong> ${operacao.value}</span>
    <span><strong>Resultado:</strong> ${resultado}</span>
    </article>
    `;

    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("op").value = "";
}

/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
 function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if(valor2 == 0) {
        return 'Não é um número';
    }
    
    return valor1 / valor2;
}

async function cadastrarApi(obj) {

try {
    const cadastro = await fetch ("http://localhost:3000/Calculadora", {
     method : "POST",
    body : JSON.stringify(obj),
     headers : {
    "Content-Type" : "application-json; charset=UTF=8"  
    }
    });

    return true;

} catch (error) {

    console.log(error);
    return false;

}
}

async function BuscarHis() {
    const retorno = await fetch ("http://localhost:3000/Calculadora");
    const dados = await retorno.json();

    console.log(dados);

    const historico = document.getElementById("data");
    
     for (let i = 0; i < dados.length; i++) {
       
        historico.innerHTML += `
       <article class="data__card-result">
       <span><strong>Primeiro Número:</strong> ${dados[i].n1}</span>
        <span><strong>Segundo Número:</strong> ${dados[i].n2}</span>
        <span><strong>Operação:</strong> ${dados[i].operacao}</span>
       <span><strong>Resultado:</strong> ${dados[i].resultado}</span>
       </article>
    `;
    }
}