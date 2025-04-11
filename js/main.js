function mostrarDato() {
  document.getElementById("dato").textContent = "¿Sabías que Moyobamba tiene más de 3,000 especies de orquídeas registradas?";
}
document.querySelectorAll('.cuadro img').forEach((img, index) => {
  img.style.position = 'relative';
  let direction = 1;
  let distance = 1;
  
  setInterval(() => {
    let currentTop = parseFloat(img.style.top) || 0;
    if (currentTop >= 5 || currentTop <= -5) direction *= -1;
    img.style.top = (currentTop + distance * direction) + 'px';
  }, 50 + index * 20);
});
