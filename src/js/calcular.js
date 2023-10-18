// Função para calcular o TDEE e exibir resultados
function calcular() {
    // Coletar dados do usuário
    var idade = parseInt(document.getElementById("idade").value);
    var sexo = "";
    var checkboxesSexo = document.querySelectorAll('input[name="sexo"]');
    checkboxesSexo.forEach(function(checkbox) {
        if (checkbox.checked) {
            sexo = checkbox.value;
        }
    });
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var fatorAtividade = parseFloat(document.getElementById("fator_atividade").value);

    // Elementos para exibir resultados e mensagens de erro
    var resultadoElement = document.getElementById("resultado");
    var mensagemErroElement = document.getElementById("mensagemErro");

    // Validação dos campos
    if (!idade || !sexo || isNaN(peso) || isNaN(altura) || isNaN(fatorAtividade)) {
        mensagemErroElement.textContent = "Preencha todos os campos obrigatórios.";
        resultadoElement.textContent = "";
    } else {
        mensagemErroElement.textContent = "";
        // Cálculos do TDEE
        var tmb = 0;
        if (sexo === "Mulher") {
            tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.33 * idade);
        } else {
            tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
        }

        // Cálculo final do TDEE
        var tdee = tmb * fatorAtividade;
        resultadoElement.textContent = "O Gasto Calórico Total Diário (TDEE) é: " + tdee.toFixed(2) + " calorias";
    }
}

var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});