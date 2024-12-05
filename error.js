function showError(errorCode) {
    var errorNote = document.getElementById("error-note");
    errorNote.style.display = "block";
    document.getElementById("success-note").style.display = "none";

    switch (errorCode) {
        case "A1":
            errorNote.textContent = "Error Note: Word Don't Exist -Palabra.js-";
            break;
        case "A2":
            errorNote.textContent = "Error Note: Unexpected Error";
            break;
        case "A3":
            errorNote.textContent = "Es el mismo idioma";
            break;
        default:
            errorNote.textContent = "Error desconocido";
            break;
    }
}

function showSuccess() {
    var errorNote = document.getElementById("error-note");
    errorNote.style.display = "none";
    document.getElementById("success-note").style.display = "block";
}