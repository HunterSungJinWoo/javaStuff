var countries = ["Luxembourg", "USA" , "France" , "Germany" , "Italy"]

function fillInSelected(){
    for (let i = 0; i < countries.length ; i++){
        document.getElementById("listOfCountries").innerHTML +=
        '<option value=' + i + '">' + countries[i] + "</options>";
    }
}

function SelectThisCountry(){
    let currentSelectCountry = document.getElementById("listOfCountries").value;
    if(currentSelectedCountry == -1){
        alert("Wrong choice");
    }   else    {
        document.getElementById("selectedCountries").innerHTML +=
            "<li>" + countries[currentSelectCountry] + "</li>";
            countries.splice(currentSelectCountry, 1);
            document.getElementById("listOfCountries").innerHTML = 
                "<option value -1> -- Select a Country </option>";
                fillInSelect()
    }
}