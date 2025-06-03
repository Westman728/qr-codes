function toggleInfo() {
    const infoDiv = document.getElementById("info");
    if (infoDiv.style.display === "none") {
        infoDiv.style.display = "flex";
    } else {
        infoDiv.style.display = "none";
    }
}