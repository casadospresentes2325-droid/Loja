const params = new URLSearchParams(window.location.search);

const foto = document.getElementById("foto");
const texto = document.getElementById("texto");
const musica = document.getElementById("musica");
const botao = document.getElementById("abrir");

foto.src = params.get("foto");
texto.innerText = params.get("texto");
musica.src = params.get("musica");

botao.onclick = () => {
  foto.style.display = "block";
  texto.style.display = "block";
  musica.play();
  botao.style.display = "none";
};
