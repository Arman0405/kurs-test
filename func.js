function  changeCss() {
    w = screen.width;
    if (w >= '1280') {
        document.getElementById("stylesheet").href="./Big.css";
    } else {
        if (w < '1280' && w >= '720') {
            document.getElementById("stylesheet").href="./Mid.css";
        } else if (w < '720'){
            document.getElementById("stylesheet").href="./Small.css"
        };
    };
};