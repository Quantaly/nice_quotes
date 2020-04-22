import niceQuotes from "./nice_quotes.js";

const textarea = document.querySelector("textarea");

document.querySelector("button").addEventListener("click", () => {
    textarea.value = niceQuotes(textarea.value);
});
