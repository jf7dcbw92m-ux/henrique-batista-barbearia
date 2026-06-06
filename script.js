// Mensagem ao abrir o site
console.log("Site Henrique Batista Barbearia carregado!");

// Animação ao rolar a página
const elementos = document.querySelectorAll(".galeria, .contato, .fotos img, .contatos a");

function animarScroll() {
    elementos.forEach((item) => {
        const topo = item.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (topo < alturaTela - 100) {
            item.classList.add("ativo");
        }
    });
}

window.addEventListener("scroll", animarScroll);
window.addEventListener("load", animarScroll);

// Botão voltar ao topo
const botaoTopo = document.createElement("button");
botaoTopo.innerText = "↑";
botaoTopo.classList.add("topo");
document.body.appendChild(botaoTopo);

botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        botaoTopo.classList.add("mostrar");
    } else {
        botaoTopo.classList.remove("mostrar");
    }
});