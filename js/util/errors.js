const ERROR_BOX_ID = "error-box";

/**
 * Displays an error message in the shared error box.
 * Overwrites any existing message.
 * @param {string} message
 */
export function showError(message) {
    const box = document.getElementById(ERROR_BOX_ID);
    if (!box) return;

    box.textContent = message;
    box.style.display = "block";
    box.classList.add("alert", "alert-danger");
}

/**
 * Appends a message to the existing error box (adds a new line).
 * @param {string} message
 */
export function appendError(message) {
    const box = document.getElementById(ERROR_BOX_ID);
    if (!box) return;

    const line = document.createElement("div");
    line.textContent = message;
    box.appendChild(line);
    box.style.display = "block";
    box.classList.add("alert", "alert-danger");
}

/**
 * Clears all content and hides the error box.
 */
export function clearErrors() {
    const box = document.getElementById(ERROR_BOX_ID);
    if (!box) return;

    box.innerHTML = "";
    box.style.display = "none";
}
