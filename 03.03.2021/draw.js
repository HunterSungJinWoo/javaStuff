function drawSomething(x, y, windowandDoor) 
{
    var canvas = document.getElementById("myDrawing");
    var ctx = canvas.getContext("2d");
 
    ctx.beginPath()
    ctx.moveTo(x+0, y+150) //House
    ctx.lineTo(x+0, y+300)
    ctx.lineTo(x+200, y+300)
    ctx.lineTo(x+200, y+150)
    ctx.lineTo(x+0, y+150)
    ctx.lineTo(x+100, y+0)
    ctx.lineTo(x+200, y+150)

    if (windowandDoor%3 ==0) {
        ctx.moveTo(x+140, y+240) //Window
        ctx.lineTo(x+180, y+240)
        ctx.lineTo(x+180, y+200)
        ctx.lineTo(x+140, y+200)
        ctx.lineTo(x+140, y+240)
    }
    if (windowandDoor%2==0){ 
        ctx.moveTo(x+80, y+300) //Door
        ctx.lineTo(x+80, y+240)
        ctx.lineTo(x+120, y+240)
        ctx.lineTo(x+120, y+300)
    }
    ctx.stroke()
}



// drawSomething(0,0,1)     nothing
// drawSomething(200,0,2)   just door
// drawSomething(400,0,3)   just window
// drawSomething(600,0,0)   everything
