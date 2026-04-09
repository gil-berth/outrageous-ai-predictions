let quotes = document.querySelectorAll("blockquote");

quotes.forEach(quote => {
    let url = quote.getAttribute("cite");
    quote.addEventListener("click", () => {
        window.location.href = url
    });
});
