document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("musica");

  function iniciarMusica() {
    if (audio.paused) {
      audio.play().catch(() => {});
    }
    document.removeEventListener("click", iniciarMusica);
    document.removeEventListener("touchstart", iniciarMusica);
  }

  document.addEventListener("click", iniciarMusica);
  document.addEventListener("touchstart", iniciarMusica);
});
