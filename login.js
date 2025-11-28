// ===== CONFIGURACIÓN FIREBASE (ya inicializado en index.html) =====
window.currentUser = null; // Variable de usuario global

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    // No es necesario asignar window.currentUser aquí, 
    // el listener onAuthStateChanged en quiz.js se encargará de ello.

    // La lógica de visualización se maneja en el listener para evitar redundancia
    // document.getElementById("login-page").style.display = "none";
    // document.getElementById("app-container").style.display = "block";

  } catch (error) {
    alert("Error de inicio de sesión: " + error.message);
  }
}

// Contar intentos al enviar el examen
function registerAttempt() {
  // Usamos la variable global
  if (window.currentUser && window.currentUser.email !== "sebastian.neto@593teveoenlau.ec") {
    let attempts = localStorage.getItem(`attempts_${window.currentUser.email}`) || 0;
    attempts = parseInt(attempts) + 1;
    localStorage.setItem(`attempts_${window.currentUser.email}`, attempts);
  }
}

// Cierra sesión y recarga la página
async function logoutAndReload() {
  try {
    await auth.signOut();
    // La recarga de la página y el cambio de vista serán manejados por onAuthStateChanged
    window.location.reload();
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    window.location.reload();
  }
}
