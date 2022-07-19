const google = document.getElementById("google");
const facebook = document.getElementById("facebook");
const apple = document.getElementById("apple");

apple.addEventListener("click", () => {
    gtag ("event", "click_apple", {
        "link_text": innerText,
        "link_id": id,
    } );
} );

facebook.addEventListener("click", () => {
    gtag("event", "click_facebook", {
        link_text: innerText,
        link_id: id,
    });
});

google.addEventListener("click", () => {
    gtag("event", "click_google", {
        link_text: innerText,
        link_id: id,
    });
});