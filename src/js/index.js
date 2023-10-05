const botoes = document.querySelectorAll(".botao");
const atores = document.querySelectorAll(".ator");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarAtor();

        botao.classList.add("selecionado");
        atores[indice].classList.add("selecionado");
    });
});


function desselecionarAtor() {
	const atorSelecionado = document.querySelector(".ator.selecionado");
	atorSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}