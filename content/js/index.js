// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

// --- EVENTOS PARA GOOGLE ANALYTICS --- //
// Evento NRf_FromHome (Reintegro desde la Home)
const refund = document.getElementById("requestRefund");
refund.addEventListener("click", () => {
    console.log(refund);
    gtag("event", "NRf_FromHome", {
        link_text: refund.innerText,
        link_id: refund.id,
    });
})

// Evento RegistrarPortal
const register = document.getElementById("register");
register.addEventListener("click", () => {
    gtag("event", "RegistrarPortal", {
        link_text: register.innerText,
        link_id: register.id,
        link_url: register.href,
    });
});
