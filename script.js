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

// Seleciona o botão e a janela modal
const buttonIcon = document.querySelector('.button-icon-contato');
const modalContato = document.querySelector('.modal-icon-contato');

// Adiciona um evento de clique ao botão
buttonIcon.addEventListener('click', function() {
    // Mostra a janela modal ao clicar no botão
    modalContato.style.display = 'flex';
    modalContato.style.display = 'flex-direction: column';
});

// Adiciona um evento de clique ao botão dentro da modal para fechar a modal
const buttonCloseModal = document.querySelector('.button-modal-contato');
buttonCloseModal.addEventListener('click', function() {
    // Fecha a janela modal ao clicar no botão de fechar
    modalContato.style.display = 'none';
});

const buttonIconCarrinho = document.querySelector('.button-icon-carrinho');
const modalCarrinho = document.querySelector('.modal-carrinho');
const buttonClose = document.querySelector('.button-modal-carrinho');

buttonIconCarrinho.onclick = function() {
    modalCarrinho.showModal()
}

buttonClose.onclick = function() {
    modalCarrinho.close()
}

const lista = document.querySelectorAll('.menu-lista a');

function ativarLink(item) {
    const href = item.href;
    const url = document.location.href;
    if (href === url) {
        // item.style.backgroundColor = 'black';
        item.style.fontWeight = '600';
        item.style.color = '#593528';
    }
}

lista.forEach(ativarLink);

function ativarLinkMenu(item) {
    const href = item.href;
    const url = document.location.href;
    if (href === url) {
        item.classList.add('active');
    }
}

function mudarCorAoClicar(event) {
    // Remove a classe 'active' de todos os itens do menu
    menuItems.forEach(item => item.classList.remove('active'));

    // Adiciona a classe 'active' ao item clicado
    event.target.classList.add('active');
}

    const menuItems = document.querySelectorAll('.lista-item__link');
    menuItems.forEach(ativarLinkMenu);
    menuItems.forEach(item => item.addEventListener('click', mudarCorAoClicar));
