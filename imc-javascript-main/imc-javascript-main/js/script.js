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

    let cadastroAPI = {
    Nome : nome,
    Altura : altura,
    Peso : peso,
    Imc : IMC,
    TextoSituacao : TextoSituacao
    }

    const cadastrado = cadastrarNaApi(cadastroAPI);
    

  if (cadastrado) {
      const cadastro = document.getElementById("cadastro");
    
      cadastro.innerHTML += `
      <tr>
      <td>${nome}</td>
      <td>${altura}</td>
      <td>${peso}</td>
      <td>${IMC.toFixed(2)}</td>
      <td>${TextoSituacao}</td>
      </tr>
      `;

      document.getElementById("nome").value = "";
      document.getElementById("altura").value = "";
      document.getElementById("peso").value = " ";

      alert(`${nome} foi cadastrado com sucesso `);

  } else {
    alert("não foi possivel cadastrar");
  }
  }

  async function cadastrarNaApi(objIMC){
  try {

      const resposta = await fetch ("http://localhost:3000/CadastroIMC", {
      method : "POST",
      body : JSON.stringify(objIMC),
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
    } else {
      return "peso invalido";
    }
  } 
    
  async function BuscarIMCs(){

    try {

    const retorno = await fetch ("http://localhost:3000/CadastroIMC");
    const dados = await retorno.json();

    console.log(dados); //dados do cadastro

    dados.sort((a, b) => {
    return a.Nome.localeCompare(b.Nome);
    });

    const cadastro = document.getElementById("cadastro");

    for (let i = 0; i < dados.length; i++){
      cadastro.innerHTML += `
        <tr>
          <td>${dados[i].Nome}</td>
          <td>${dados[i].Altura}</td>
          <td>${dados[i].Peso}</td>
          <td>${dados[i].Imc.toFixed(2)}</td>
          <td>${dados[i].TextoSituacao}</td>
        </tr>
      `;
    }

    } catch (error) {

      console.log(error); 

    }
  }