
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const maxCharacters = 200;

message.addEventListener("input", function () {
    const typedCharacters = message.value.length;
    const remainingCharacters = maxCharacters - typedCharacters;

    counter.textContent =
        typedCharacters + "/" + maxCharacters + " characters";

    if (remainingCharacters === 0) {
        warning.textContent = "Warning: Character limit reached!";
    } else {
        warning.textContent = "";
    }
});
