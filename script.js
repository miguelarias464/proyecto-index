let intentos = 0;
const MAX_INTENTOS = 3;

function verificarDatos(usuario, contraseña) {
    return (usuario === "admin@gmail.com" && contraseña === "1234");
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    if (intentos >= MAX_INTENTOS) {
        alert("🚫 Usuario bloqueado");
        return;
    }

    let usuario = document.getElementById("email").value;
    let contraseña = document.getElementById("password").value;
    let rol = document.getElementById("rol").value;

    console.log("Usuario:", usuario);
    console.log("Contraseña:", contraseña);
    console.log("Rol:", rol);

    if (verificarDatos(usuario, contraseña)) {
        alert("✅ Acceso permitido");
        window.location.href = "dashboard.html";
    } else {
        intentos++;
        alert("❌ Datos incorrectos. Intento " + intentos + " de " + MAX_INTENTOS);
    }
});