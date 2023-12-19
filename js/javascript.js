   // Cria um input element
   var inserirN1 = document.createElement("input");
   var inserirN2 = document.createElement("input");


  //tipo do input
   inserirN1.type = "number";
   inserirN1.placeholder = "Digite o 1º número: ";

   inserirN2.type = "number";
   inserirN2.placeholder = "Digite o 2º número: ";




   // Adiciona o input element ao corpo do HTML
   document.body.appendChild(inserirN1);
   document.body.appendChild(inserirN2);

   //classe para estilizar no CSS depois
   inserirN1.classList.add("estiloInput");
   inserirN2.classList.add("estiloInput");


   //criação do botão
   var botao = document.createElement("button");
   //valor ao campo do botão
   botao.innerHTML = "Confirmar"
   //adicionar o botao ao html
   document.body.appendChild(botao);
   //estilo ao botão
   botao.classList.add("estiloBotao");

   var botaoReset = document.createElement("button");
   botaoReset.innerHTML = "Resetar";
   document.body.appendChild(botaoReset);
   botaoReset.classList.add("estiloBotao");



   var botoes = document.getElementById("botoes");
   botoes.appendChild(botao);
   botoes.appendChild(botaoReset);


   // Cria um parágrafo para exibir o número digitado
   var paragrafoNumeroDigitado = document.createElement("p");
   paragrafoNumeroDigitado.classList.add("paragrafoNumero")


   //evento de clique
   botao.addEventListener("click", function () {
       
       // var corpoDocumento = document.body;
       var caixaConteudo = document.getElementById("caixaConteudo");

       const numeros = [];
       let numeroSorteado = 0;
    
       numeros.push(inserirN1.value);
       numeros.push(inserirN2.value);

    
       for (let i = 0; i < numeros.length; i++) {
    
           const numero = numeros[i];
           
           if(numero > numeroSorteado) {
    
               numeroSorteado = numero
           }
    
    }
    // Cria um parágrafo para o número
    var paragrafoNumeroDigitado = document.createElement("p");
    paragrafoNumeroDigitado.textContent = numeroSorteado;

    // Adiciona o novo parágrafo ao corpo do documento
    // corpoDocumento.appendChild(paragrafoNumeroDigitado);
     caixaConteudo.appendChild(paragrafoNumeroDigitado);

      

       
   });

   botaoReset.addEventListener("click", function () {
       // Limpar o conteúdo da caixaConteudo
       caixaConteudo.innerHTML = "";
       // Limpar o valor no input
       inserirN1.value = "";
       inserirN2.value = "";
       // Remover a classe 'corpo'
       caixaConteudo.classList.remove("corpo");
   });



