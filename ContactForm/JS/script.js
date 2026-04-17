    function validarFormulario(){
    let nome = document.getElementById("nome").value.trim();
    let sobrenome = document.getElementById("sobrenome").value.trim();
    // let email = document.getElementById("email").value.trim();
    // let pais = document.getElementById("pais").value.trim();
    // let ddd = document.getElementById("ddd").value.trim();
    // let telefone = document.getElementById("telefone").value.trim();
    // let cep = document.getElementById("cep").value.trim();
    // let endereco = document.getElementById("endereco").value.trim();
    // let NR = document.getElementById("NR").value.trim();
    // let lugar = document.getElementById("lugar").value.trim();
    // let bairro = document.getElementById("bairro").value.trim();
    // let cidade = document.getElementById("cidade").value.trim();
    // let estado = document.getElementById("estado").value.trim();
    // let anotacoes = document.getElementById("anotacoes").value.trim();

    // let quantidadeDeErros = 0;

    

    if(nome.length == 0){
        formError("nome");
        quantidadeDeErros++;
    }
    else{
        reiniciaBorda("nome");
    }

    if(sobrenome.length == 0){
        formError("sobrenome");
        quantidadeDeErros++;
    }
    else{
        reiniciaBorda("sobrenome");
    }

    // if(email.length == 0){
    //     formError("email");
    //     quantidadeDeErros++;
    // }
    // else{
    //     reiniciaBorda("email");
    // }

    // if(pais.length == 0){
    //     formError("pais");
    //     quantidadeDeErros++;
    // }
    // else{
    //     reiniciaBorda("pais");
    // }

    // if(ddd.length == 0){
    //     formError("ddd");
    //     quantidadeDeErros++;
    // }
    // else{
    //     reiniciaBorda("ddd");
    // }

    // if(telefone.length == 0){
    //     formError("telefone");
    //     quantidadeDeErros++;
    // }
    // else{
    //     reiniciaBorda("telefone");
    // }

    // if(cep.length == 0){
    //     formError("cep");
    //     quantidadeDeErros++;
    // }
    // else{
    //     reiniciaBorda("cep");
    // }

    // if(endereco.length == 0){
    //     formError("endereco");
    //     quantidadeDeErros++;
    // }
    // else{
    //     reiniciaBorda("endereco");
    // }

    // if(NR.length == 0){
    //     formError("NR");
    //     quantidadeDeErros++;
    // }
    // else{
    //     reiniciaBorda("NR");
    // }

    // if(lugar.length == 0){
    //     formError("lugar");
    //     quantidadeDeErros++;
    // }
    // else{
    //     reiniciaBorda("lugar");
    // }

    // if(bairro.length == 0){
    //     formError("bairro");
    //     quantidadeDeErros++;
    // }
    // else{
    //     reiniciaBorda("bairro");
    // }

    // if(cidade.length == 0){
    //     formError("cidade");
    //     quantidadeDeErros++;
    // }
    // else{
    //     reiniciaBorda("cidade");
    // }

    // if(estado.length == 0){
    //     formError("estado");
    //     quantidadeDeErros++;
    // }
    // else{
    //     reiniciaBorda("estado");
    // }

    // if(anotacoes.length == 0){
    //     formError("anotacoes");
    //     quantidadeDeErros++;
    // }
    // else{
    //     reiniciaBorda("anotacoes");
    // }

    // if(quantidadeDeErros != 0){
    //     alert("Existem " + quantidadeDeErros + " campo(s) obrigatório(s) não preenchido(s).")
    //     quantidadeDeErros = 0;
    // }
    // else
    // {
    // alert(`
    // Contato cadastrado

    // Informações inseridas:
    // Nome: ${nome} ${sobrenome}  
    // Email: ${email} 
    // Pais: ${pais}
    // DDD: ${ddd}
    // Telefone: ${telefone}
    // CEP: ${cep}
    // Endereço: ${endereco}
    // Número da casa: ${NR}
    // Lugar: ${lugar}
    // Bairro: ${bairro}
    // Cidade: ${cidade}
    // Estado: ${estado}
    // Anotações: ${anotacoes}
    // `); 
    // }


    // console.log(`
    // Nome: ${nome} ${sobrenome}  
    // Email: ${email} 
    // Pais: ${pais}
    // DDD: ${ddd}
    // Telefone: ${telefone}
    // CEP: ${cep}
    // Endereço: ${endereco}
    // Número da casa: ${NR}
    // Lugar: ${lugar}
    // Bairro: ${bairro}
    // Cidade: ${cidade}
    // Estado: ${estado}
    // Anotações: ${anotacoes}
    // `); 

    let objetoContato = {
        nome : nome,
        sobrenome : sobrenome
    };

     let cadastrado = cadastrarContato(objetoContato);
     return false;


    }

    function formError(findId){
        document.getElementById(findId).style.border = "1px solid red"
        
    }
    function reiniciaBorda(findId){
        document.getElementById(findId).style.border = "none"
    }

    async function buscarEndereco(cep){
        if(cep.trim().length < 8){
            alert("CEP infalido");
            return false;
        }

        try
        {
            aguardandoCampos();
             
            let retorno = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
            let dados = await retorno.json();
            console.log(dados);

            document.getElementById("endereco").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("estado").value = dados.uf;

        }
        catch
        {
           alert("Erro ao buscar indereço");
        }
    }

    function aguardandoCampos(){
        
        document.getElementById("endereco").value = "Aguardando...";
        document.getElementById("bairro").value = "Aguardando...";
        document.getElementById("cidade").value = "Aguardando...";
        document.getElementById("estado").value = "Aguardando...";
        
    }

    async function cadastrarContato(objetoContato){
        console.log(objetoContato);

        //cadastrar na api
       let resposta = await fetch("http://localhost:3000/contatos", {
          method: "POST",
          body: JSON.stringify(objetoContato),
          headers: {
            "Content-Type" : "application-json; charset=UTF=8"
          }
       });



    }