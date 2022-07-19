
// --- EVENTOS PARA GOOGLE ANALYTICS --- //
const portal = document.getElementById("login-portal");
const google = document.getElementById("google-login");
const facebook = document.getElementById("facebook-login");
const apple = document.getElementById("apple-login");
const register = document.getElementById("register");

//Evento IngresarPortal
portal.addEventListener("click", () => {
    gtag("event", "ingresarPortal", {
        link_text: portal.innerText,
        link_id: portal.id,
    });
});

// Evento IngresarApple
apple.addEventListener("click", () => {
    gtag("event", "IngresarApple", {
        link_text: apple.innerText,
        link_id: apple.id,
    });
});

// Evento IngresarFacebook
facebook.addEventListener("click", () => {
    gtag("event", "IngresarFacebook", {
        link_text: facebook.innerText,
        link_id: facebook.id,
    });
});

// Evento IngresarGoogle
google.addEventListener("click", () => {
    gtag("event", "IngresarGoogle", {
        link_text: google.innerText,
        link_id: google.id,
    });
});

// Evento RegistrarPortal
register.addEventListener("click", () => {
    gtag("event", "RegistrarPortal", {
        link_text: register.innerText,
        link_id: register.id,
    });
});
// --- FIN DE EVENTOS --- //
