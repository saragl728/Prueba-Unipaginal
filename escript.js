//variables
var titu = document.getElementById("acheUno");
//botones
var prime = document.getElementById("primero");
var segun = document.getElementById("segundo");
var claro = document.getElementById("modo_claro");
var oscuro = document.getElementById("modo_oscuro");
var extr = document.getElementById("extra");
//imagen
var creatura = document.getElementById("criatura");
//otro
var des1 = document.getElementById("desc1");
var ayuIma = document.getElementById("auxImg");
//citas
var mdlLu = document.getElementById("modulo_lunar");
var roca = document.getElementById("come_roca");
var tMuer = document.getElementById("tusMuertos");

var tem = document.getElementById("tema");  //lo usaremos para cambiar el estilo

//funcion(es)
function cambiarEstilo(e) {
  switch (e.target.id) {  //cambio la hoja de estilo dependiendo del id del botón
    case "primero":
      tem.setAttribute("href", "primera.css");
      break;
    case "segundo":
      tem.setAttribute("href", "segunda.css");
      break;
    case "modo_claro":
      tem.setAttribute("href", "modoClaro.css");
      break;
    case "modo_oscuro":
      tem.setAttribute("href", "modoOscuro.css");
      break;
    case "extra":
      tem.setAttribute("href", "extra.css");
      break;
  }
}

//asignación de eventos
prime.addEventListener("click", cambiarEstilo);
segun.addEventListener("click", cambiarEstilo);
claro.addEventListener("click", cambiarEstilo);
oscuro.addEventListener("click", cambiarEstilo);
extr.addEventListener("click", cambiarEstilo);

switch (navigator.language) {
  case "es-ES":
  case "es-AR":
  default:
    titu.innerHTML = "Estoy aquí";
    prime.title = "Primero";
    prime.textContent = "Primero";
    segun.textContent = "Segundo";
    segun.title = "Segundo";
    claro.textContent = "Modo claro";
    claro.title = "Modo claro";
    oscuro.textContent = "Modo oscuro";
    oscuro.title = "Modo oscuro";
    des1.innerHTML = "Se ve diferente si le das a los botones";
    mdlLu.innerHTML = "Haré mi propio módulo lunar";
    roca.innerHTML = "Come roca. Qué listo soy.";
    tMuer.innerHTML = "Todos son idiotas excepto yo.";
    ayuIma.innerHTML = "Pon el ratón encima de la criatura";
    creatura.title = "Criatura";
    break;
  case "en-EN":
  case "en-US":
    titu.innerHTML = "I'm here";
    prime.textContent = "First";
    prime.title = "First";
    segun.textContent = "Second";
    segun.title = "Second";
    claro.textContent = "Light mode";
    claro.title = "Light mode";
    oscuro.textContent = "Dark mode";
    oscuro.title = "Dark mode";
    des1.innerHTML = "It looks different if you click the buttons";
    mdlLu.innerHTML = "I'll make my own moon module";
    roca.innerHTML = "Eat rock. I'm so smart.";
    tMuer.innerHTML = "Everyone is stupid except me.";
    ayuIma.innerHTML = "Put the mouse over the creature.";
    creatura.title = "Creature";
    break;
}
