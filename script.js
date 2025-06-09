function enviarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "5582988886434";

  const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  console.log(url);

  window.open(url, "_blank");
}

// Script to update the footer year dynamically
document.addEventListener("DOMContentLoaded", function () {
  const anoSpan = document.getElementById("ano");
  if (anoSpan) {
    anoSpan.textContent = new Date().getFullYear();
  }

  // Add click event listeners to all project images to open in new tab and keep visual effects
  const projectImages = document.querySelectorAll('.projeto-imagem');
  projectImages.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      // Open image src in new tab
      window.open(img.src, '_blank');
    });
  });
});

