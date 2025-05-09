function startSlider() {
  console.log("Slider iniciado!");
}
startSlider();



startSlider();
window.addEventListener("resize", startSlider);

function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  const overlay = document.getElementById("menu-overlay");

  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript carregado!");

  new Typed("#typing", {
      strings: ["Desenvolvedora Web.", "Desenvolvedora Front-End.", "Programadora."],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
  });
});




const carrossel = document.querySelector(".carrossel-container");
const projetos = document.querySelectorAll(".projeto");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

// Atualiza a posição do carrossel
function atualizarCarrossel() {
    carrossel.style.transform = `translateX(-${index * 100}%)`;
}

// Alterna a exibição da descrição do projeto ao clicar
function toggleDescricao(indexProjeto) {
    projetos.forEach((projeto, i) => {
        const descricao = projeto.querySelector(".descricao");
        if (i === indexProjeto) {
            descricao.style.opacity = descricao.style.opacity === "1" ? "0" : "1";
        } else {
            descricao.style.opacity = "0"; // Esconde as outras descrições
        }
    });
}

// Botão de voltar
prevBtn.addEventListener("click", () => {
    index = index > 0 ? index - 1 : projetos.length - 1;
    atualizarCarrossel();
});

// Botão de avançar
nextBtn.addEventListener("click", () => {
    index = index < projetos.length - 1 ? index + 1 : 0;
    atualizarCarrossel();
});



function enviarWhatsApp() {

  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;

 
  var mensagemFinal = "Olá, meu nome é " + nome + ". Meu e-mail é " + email + ".\n\n" + "Mensagem: " + mensagem;

  var numeroWhatsApp = "55" + "21" + "966034883"; // Exemplo de número fictício (substitua pelo seu)

  var link = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensagemFinal);


  window.open(link, "_blank");
}
