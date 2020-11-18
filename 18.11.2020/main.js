var count = 0;
var currentBoxColor = "../CLISS/photo/c.jpg";
function CreateBox() {
    let strOfBoxes = document.getElementById("Boxnum").value;
    let numberOfboxes = Number(strOfBoxes);
    for (let i = 0; i < numberOfboxes; i++) 
{

        count++
        // let addBox ='<div class = "box>' + currentBoxColor + '">' + count + '</div>';   i had this before
        let addBox ='<div class = "box">' + count + '<img src="' + currentBoxColor + '" alt="image"></div>'

            if(currentBoxColor == "../CLISS/photo/a.jpg")
            {
            currentBoxColor = "../CLISS/photo/b.jpg";
            }
                else
                    if(currentBoxColor == "../CLISS/photo/b.jpg")
                    {
                        currentBoxColor = "../CLISS/photo/c.jpg";
                    }
                        else   
                            if(currentBoxColor == "../CLISS/photo/c.jpg")
                            {
                                currentBoxColor = "../CLISS/photo/a.jpg";
                            }

        document.getElementById("CreateBoxes").innerHTML += addBox;
    }
}
