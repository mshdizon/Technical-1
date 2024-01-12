function changeBG() {
    var bg = document.body;
    if (bg.style.backgroundColor === "rgb(0, 0, 0)" || bg.style.backgroundColor === "#000000") {
        bg.style.backgroundColor = "#FFFFFF";
        bg.style.color = "#000000";
    } else {
        bg.style.backgroundColor = "#000000";
        bg.style.color = "#FFFFFF";
    }
}
