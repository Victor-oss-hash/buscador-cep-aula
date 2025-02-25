async function getCepInfo(){
    var cep = document.querySelector("#cep");
    if(!(cep.value.length == 8)){
        alert("Invalid CEP");
        return;
    }
   var reply = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
   var data = await reply.json();

   if(data.erro){
    alert("Cep Not Found!")
    return;
   }

   console.log(data.logradouro);
   console.log(data.bairro);
   console.log(data.localidade);
   console.log(data.estado);

   document.querySelector("#Rua").innerHTML = data.logradouro;
   document.querySelector("#Bairro").innerHTML = data.bairro;
   document.querySelector("#Cidade").innerHTML = data.localidade;
   document.querySelector("#Estado").innerHTML = data.estado;
}

function clearcep(){
    document.querySelector("#cep").value = "";
    document.querySelector("#Rua").innerHTML = "";
    document.querySelector("#Bairro").innerHTML = "";
    document.querySelector("#Cidade").innerHTML = "";
    document.querySelector("#Estado").innerHTML = "";
   }