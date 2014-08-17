/**
 * Created by Mario on 19.7.2014 г..
 */
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
canvas.addEventListener('mousedown','doMouseDown',false);
ctx.beginPath();
var mouseClick = 1;
/** draw vertical-lines**/
for (x = 75,y=0;x < 225;x+=75) {
    ctx.moveTo(x,y);
    ctx.lineTo(x,225);
    ctx.lineWidth = 6;
    ctx.stroke();
}
/** draw horizontal-lines**/
for (x = 0,y =75;y < 225;y+=75) {
    ctx.moveTo(x,y);
    ctx.lineTo(225,y);
    ctx.stroke();
}
function doMouseDown(event) {
    mouseClick++;
    canvas_x = event.pageX;
    canvas_y = event.pageY;
    if (mouseClick % 2 == 0) {
        ctx.moveTo(canvas_x,canvas_y);
        ctx.lineTo(canvas_x + 10,canvas_y+10);
        ctx.stroke;
    }
    else {
        ctx.moveTo(canvas_x,canvas_y);
        ctx.lineTo(canvas_x + 10,canvas_y+10);
        ctx.stroke;
    }
}
