let avisarMiAprendisajeJs = ["Soy Fabio", 25 + "años", "Recien arranco con Js", "Me fascina las tecnologias"];
console.log(avisarMiAprendisajeJs);

let avisarUsuario = document.getElementById("movie");
avisarUsuario.addEventListener('click', explicacion);

function explicacion() {
    alert("Disculpas por no usar js es que estoy aprendiendo en este lenguaje , saludos")
}