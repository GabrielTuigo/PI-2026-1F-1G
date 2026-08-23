function alternarTema() {
  document.body.classList.toggle("light");
}
function alternarTema() {
  const html = document.documentElement;
  const estaClaro = html.getAttribute("data-tema") === "claro";
  const botao = document.getElementById("botao-tema");

  if (estaClaro) {
    html.removeAttribute("data-tema");
    if (botao) botao.textContent = "🌙";
  } else {
    html.setAttribute("data-tema", "claro");
    if (botao) botao.textContent = "☀️";
  }
}
