document.addEventListener("DOMContentLoaded", function() {
    const inputPesquisa = document.querySelector(".cabecalho__pesquisa");
    const modalPesquisa = document.querySelector(".modal-pesquisa");

    inputPesquisa.addEventListener("focus", function() {
        modalPesquisa.style.display = "block";
    });

    inputPesquisa.addEventListener("blur", function() {
        // Adiciona um pequeno delay para permitir clicar no modal antes que ele desapareça
        setTimeout(function() {
            modalPesquisa.style.display = "none";
        }, 200);
    });
});

document.getElementById('close-modal').addEventListener('click', function() {
    alert('Fechar modal');
  });
