var arrayOfCities = ["Luxembourg city", "Esch","Wiltz","Junglinster","Wormeldange","bla","Yet another city","aaa"];

function DoDisplay()
{

    document.getElementById("Where").innerHTML = "";
    for(let i=0;i<arrayOfCities.length;i++)
    {
        let cityNumber = i+1;
        document.getElementById("Where").innerHTML += cityNumber + " -" + arrayOfCities[i] + "<BR>";
    }    

}

var arrayOfCities = ["Luxembourg city", "Esch","Junglinster"];

function DoDisplayReversed()
{

    document.getElementById("Where").innerHTML = "";
    for(let i=arrayOfCities.length-1;i>=0;i--)
    {
        let cityNumber = i+1;
        document.getElementById("Where").innerHTML += cityNumber + " -" + arrayOfCities[i] + "<BR>";

    } 

}

function AddCityToArray()
{
    let myNEwCity = document.getElementById("CityName").value;
    arrayOfCities.push(myNEwCity);
    DoDisplay();
}

function DeleteLastCity()
{
    arrayOfCities.pop();
    DoDisplay();
}