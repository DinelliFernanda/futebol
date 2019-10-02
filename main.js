const table = [];

const cadJogador = {
    idade:"",
    peso:"",
    altura:""  
}

table.push({
    idade: 17,
    peso: 79,
    altura: 1.81 
});

table.push({
    idade: 16,
    peso: 65,
    altura: 1.62 
});

table.push({
    idade: 22,
    peso: 75,
    altura: 1.83 
});

(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

function CarregarTabela(dados){

    document.getElementById("dadostab").innerHTML = "";
    var mediaalt = 0;
    var mediaid = 0;
    var maior80 = 0;
    var menor18 = 0;

    dados.forEach(element => {

        if(element.idade < 18) menor18++;
        if(element.peso > 80) maior80++;
        mediaalt += element.altura;
        mediaid += element.idade;

   });

   mediaalt = mediaalt / dados.length;
   mediaid = mediaid / dados.length;
   
   var elTr = document.createElement("tr");
   
   tabela_80 = document.createElement("td");
   tabela_80.innerHTML = maior80;

   tabela_18 = document.createElement("td");
   tabela_18.innerHTML = menor18;
   
   tabela_altura = document.createElement("td");
   tabela_altura.innerHTML = mediaalt;
   
   tabela_idade = document.createElement("td");
   tabela_idade.innerHTML = mediaid;
   
   elTr.appendChild(tabela_80);
   elTr.appendChild(tabela_18);
   elTr.appendChild(tabela_altura);
   elTr.appendChild(tabela_idade);

   document.getElementById("dadostab").appendChild(elTr);
}

CarregarTabela(table);

document.getElementById('Calcular').addEventListener('click', () =>{

    idade = +document.getElementById("idade").value;
    peso = +document.getElementById("peso").value;
    altura = +document.getElementById("altura").value;

    table.push({

        peso: peso,
        altura:altura,
        idade:idade

    });

CarregarTabela(table)

})