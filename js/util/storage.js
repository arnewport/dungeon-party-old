/**
 * Triggers a download of the current application state as a JSON file.
 * @param {Object} state - The full party state to save
 * @param {string} [filename="party-state.json"]
 */
export function saveStateToFile(state, filename = "party-state.json") {
    const json = JSON.stringify(state, null, 2); // pretty-print
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
}

/**
 * Loads a JSON file and parses it into a JavaScript object.
 * @param {File} file - The uploaded file object from an <input type="file">
 * @returns {Promise<Object>} parsed state object
 */
export function loadStateFromFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                resolve(data);
            } catch (err) {
                reject(new Error("Invalid JSON file"));
            }
        };

        reader.onerror = () => {
            reject(new Error("File could not be read"));
        };

        reader.readAsText(file);
    });
}