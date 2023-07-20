const imagenes = document.querySelectorAll(".propiedad__imagen");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY / -20;

  imagenes.forEach((imagen) => {
    if (window.innerWidth > 768) {
      imagen.style.backgroundPositionY = `${scroll}px`;
    }
  });
});
