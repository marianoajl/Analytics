const google = document.getElementById("google");
const facebook = document.getElementById("facebook");
const apple = document.getElementById("apple");

apple.addEventListener("click", () => {
    gtag ("event", "click_apple", {
        "link_text": apple.innerText,
        "link_id": apple.id,
    } );
} );

facebook.addEventListener("click", () => {
    gtag("event", "click_facebook", {
        link_text: facebook.innerText,
        link_id: facebook.id,
    });
});

google.addEventListener("click", () => {
    gtag("event", "click_google", {
        link_text: google.innerText,
        link_id: google.id,
    });
});