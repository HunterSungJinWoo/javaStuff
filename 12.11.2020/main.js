
var count = 0;
var currentBoxColor = "boxColor1";
function CreateBox() {
    count++;
    let addBox = '<div class = "box ' + currentBoxColor +'">'+count+'<div>';
    
    if(currentBoxColor == "boxColor1")
    {
        currentBoxColor="boxColor2";
    }
else
    if(currentBoxColor == "boxColor2")
    {
        currentBoxColor="boxColor3";
    }
else 
    if(currentBoxColor == "boxColor3")
    {
        currentBoxColor="boxColor1";
    }

    document.getElementById("myBody").innerHTML += addBox;
}

