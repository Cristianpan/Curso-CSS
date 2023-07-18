const imagenes = document.querySelectorAll(".propiedad__imagen");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY / -15;

  imagenes.forEach((imagen) => {
    imagen.style.backgroundPositionY = `${scroll}px`;
  });
});
