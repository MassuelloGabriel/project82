const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const btnCor = document.getElementById("cor");

var evento;

var mouseX, mouseY, pmouseX, pmouseY

console.dir(ctx);

var cor = "#0000FF";
btnCor.value = cor;

canvas.addEventListener("mousedown",tipoEvento)
canvas.addEventListener("mouseup",tipoEvento)
canvas.addEventListener("mouseleave",tipoEvento)
canvas.addEventListener("mousemove", desenha)

function tipoEvento(e) {
    evento = e.type;
    console.log(evento);
}

function desenha(e) {
    pmouseX = mouseX;
    pmouseY = mouseY;


    mouseX = e.offsetX;
    mouseY = e.offsetY;

    if (evento === "mousedown"){
        //circulo(mouseX, mouseY);
        linha()
    }
}

function linha() {
     cor = btnCor.value;
     ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = 4;
    ctx.moveTo(pmouseX, pmouseY)
    ctx.lineTo(mouseX, mouseY);
     ctx.stroke();
}


 //function circulo (x,y) {
   // cor = btnCor.value;
    //ctx.beginPath();
   // ctx.strokeStyle = cor;
    //ctx.lineWidht = 6;
   // ctx.arc(x, y, raio, 0, 2 * Math.PI);
    //ctx.stroke();
//}

function limpar() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
}