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

function clickBut1() {
    if (document.getElementById("block1").style.display = "none") {
        document.getElementById("kinos").style.color = "#ff7900";
        document.getElementById("dubliaj").style.color = "grey";
        document.getElementById("block1").style.display = "block";
        document.getElementById("block2").style.display = "none";
    };
};

function clickBut2() {
    if (document.getElementById("block2").style.display = "none") {
        document.getElementById("dubliaj").style.color = "#ff7900";
        document.getElementById("kinos").style.color = "grey";
        document.getElementById("block2").style.display = "block";
        document.getElementById("block1").style.display = "none";
    };
};