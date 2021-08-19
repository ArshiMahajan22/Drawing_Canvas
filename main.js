var mouseEvent = "empty";
var lastPositionOf_X, lastPositionOf_Y;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

color = "black";
width = 5;

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e){
    color = document.getElementById("Colour").value;
    width = document.getElementById("Width").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e){
    currentPositionOf_X = e.clientX - canvas.offsetLeft;
    currentPositionOf_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        ctx.moveTo(lastPositionOf_X, lastPositionOf_Y);
        ctx.lineTo(currentPositionOf_X, currentPositionOf_Y);
        ctx.stroke();
    }

    lastPositionOf_X = currentPositionOf_X;
    lastPositionOf_Y = currentPositionOf_Y;
}

canvas.addEventListener("mouseup", my_mouseup); 
function my_mouseup(e){ 
    mouseEvent = "mouseUP"; 
} 

canvas.addEventListener("mouseleave", my_mouseleave); 
function my_mouseleave(e){ 
    mouseEvent = "mouseleave"; 
}

function ClearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var last_position_of_x, last_position_of_y;

    var width = screen.width;
    var new_width = screen.width-70;
     
    var new_height = screen.height-300;

    if(width<992){
        document.getElementsById("myCanvas").height = new_height;
        document.getElementsById("myCanvas").width = new_width;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", myTouchstart);
    
    function myTouchstart(e)
    {
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

        console.log("my_touchmove");

        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
