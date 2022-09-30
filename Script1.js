// JavaScript source code
function DrawShapes() {
    let ctx = document.querySelector('#line').getContext('2d')
    ctx.beginPath();
    ctx.moveTo(7, 7)
    ctx.lineTo(43, 43)
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.stroke();
    ctx.closePath()

    ctx = document.querySelector('#square').getContext('2d')
    ctx.beginPath();
    ctx.rect(7, 7, 36, 36)
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.stroke();
    ctx.closePath()

    ctx = document.querySelector('#circle').getContext('2d')
    ctx.beginPath();
    ctx.arc(25, 25, 18, 0, 2 * Math.PI)
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.stroke();
    ctx.closePath()

    ctx = document.querySelector('#triangle1').getContext('2d')
    ctx.beginPath();
    ctx.moveTo(43, 43)
    ctx.lineTo(7, 43)
    ctx.lineTo(7, 7)
    ctx.lineTo(43, 43)
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.stroke();
    ctx.closePath()

    ctx = document.querySelector('#triangle2').getContext('2d')
    ctx.beginPath();
    ctx.moveTo(43, 43)
    ctx.lineTo(7, 43)
    ctx.lineTo(25, 7)
    ctx.lineTo(43, 43)
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.stroke();
    ctx.closePath()

    ctx = document.querySelector('#triangle3').getContext('2d')
    ctx.beginPath();
    ctx.moveTo(45, 45)
    ctx.lineTo(7, 45)
    ctx.lineTo(18, 7)
    ctx.lineTo(45, 45)
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.stroke();
    ctx.closePath()

    ctx = document.querySelector('#draw').getContext('2d')
    ctx.beginPath();
    ctx.moveTo(7, 7)
    ctx.bezierCurveTo(7, 43, 43, 7, 43, 43);
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.stroke();
    ctx.closePath()
}
let typeToDraw;
let borderColor = 'black'
let fillColor = 'white';
let myLineWidth = 1;

let startPoint = new point(0, 0);
let endPoint = new point(0, 0);

function point(myX, myY) {
    this.x = myX;
    this.y = myY;
}

function whatToDraw() {
    let choosedType = event.srcElement.id;
    typeToDraw = choosedType;
        // console.log(choosedType);
}
//add style: borderColor, fillColor, lineWidth
function lineColor()
{
    borderColor=event.srcElement.id;
    // console.log(borderColor);
}
function toFill()
{
    fillColor=event.srcElement.id;
    console.log(fillColor);
}
function linewidth()
{
    switch (event.srcElement.id) {
        case 'Xthin':
            myLineWidth = 1;
            break;
        case 'thin':
            myLineWidth = 3;
            break;
        case 'medium':
            myLineWidth = 6;
            break;
        case 'large':
            myLineWidth = 9;
            break;
        case 'Xlarge':
            myLineWidth = 12;
            break;
        case 'XXlarge':
            myLineWidth = 15;
            break;
    }
}
function startDraw() {

    startPoint = new point(event.offsetX, event.offsetY)
    if (typeToDraw == 'draw')
        document.querySelector("#paint").addEventListener("mousemove", draw)
    if(typeToDraw=='btn')
    {
        linWidth = 7;
        borderColor = 'white';
        document.querySelector("#paint").addEventListener("mousemove", draw)
    }
}

function endDraw() {
    let canvas = document.querySelector("#paint");
    let ctx = canvas.getContext("2d");
    endPoint = new point(event.offsetX, event.offsetY)
    switch (typeToDraw) {
        case 'line':
            ctx.moveTo(startPoint.x, startPoint.y)
            ctx.lineTo(endPoint.x, endPoint.y)
             ctx.lineCap = 'round';
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = myLineWidth;
            ctx.stroke();
            //now we don't use it,
            //but for the next shapes...
            //ctx.fillStyle=fillColor;
            //ctx.fill();
            break;
        case 'square':
            ctx.moveTo(startPoint.x, startPoint.y)
            ctx.lineTo(endPoint.x, startPoint.y)
            ctx.lineTo(endPoint.x, endPoint.y)
            ctx.lineTo(startPoint.x, endPoint.y)
            ctx.lineTo(startPoint.x, startPoint.y)
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = myLineWidth;
            ctx.fillStyle=fillColor;
            ctx.fill();
            ctx.stroke();
            break;
        case 'circle':
            ctx.beginPath();
            ctx.arc(((startPoint.x + endPoint.x) / 2), ((startPoint.y + endPoint.y) / 2),
                (Math.sqrt(Math.pow(Math.abs(startPoint.x - endPoint.x), 2) + Math.pow(Math.abs(startPoint.y - endPoint.y), 2)) / 2)
                , 0, 2 * Math.PI)
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = myLineWidth;
            ctx.fillStyle=fillColor;
            ctx.fill();
            ctx.stroke();
            ctx.closePath()
            break;
        case 'triangle1':
            ctx.moveTo(startPoint.x, startPoint.y)
            ctx.lineTo(endPoint.x, endPoint.y)
            ctx.lineTo(startPoint.x, endPoint.y)
            ctx.lineTo(startPoint.x, startPoint.y)
            ctx.closePath()
            ctx.strokeStyle = borderColor;
             ctx.stroke();
            ctx.lineWidth = myLineWidth;
            ctx.fillStyle=fillColor;
            ctx.fill();
            
            break;
        case 'triangle2':
            ctx.moveTo(startPoint.x, startPoint.y);
            ctx.lineTo(endPoint.x, endPoint.y);
            ctx.lineTo(endPoint.x - (2 * (endPoint.x - startPoint.x)), endPoint.y);
            ctx.closePath();
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = myLineWidth;
            ctx.stroke();
            ctx.fillStyle = fillColor;
            ctx.fill();
            break;
        case 'triangle3':
            ctx.moveTo(startPoint.x, startPoint.y)
            ctx.lineTo(endPoint.x, endPoint.y)
            ctx.lineTo((startPoint.x + endPoint.x) / 2, startPoint.y -
                (Math.sqrt(Math.pow(Math.abs(startPoint.x - endPoint.x), 2) + Math.pow(Math.abs(startPoint.y - endPoint.y), 2)) / 2))
            ctx.lineTo(startPoint.x, startPoint.y)
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = myLineWidth;
            ctx.fillStyle=fillColor;
            ctx.fill();
            ctx.stroke();
            ctx.closePath()
            break;
            case 'draw':
                document.querySelector("#paint").removeEventListener("mousemove", draw)
                break;
            case 'btn':
                document.querySelector("#paint").removeEventListener("mousemove", draw)
                break;
        }
    }
    function draw() {
        let canvas = document.querySelector('#paint');
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        endPoint = new point(event.offsetX, event.offsetY);
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        startPoint.x = endPoint.x;
        startPoint.y = endPoint.y;
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = myLineWidth;
        ctx.closePath();
        ctx.stroke();
    }
