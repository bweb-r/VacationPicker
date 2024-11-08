function updatescreen(){
    var Temperature = document.getElementById("Temperature").value;
    var vactionSpot = document.getElementById("vacationSpot").value;


console.log(Temperature);
console.log(vacationSpot);


document.getElementById("output").innerHTML = text;
document.getElementById("output").style.fontFamily = font;
document.getElementById("output").style.fontSize = size + "px";
document.getElementById("outputBox").style.backgroundColor = color;


if (Temperature=70 && vactionSpot == "Beach"){
document.getElementById("feedback").innerHTML = "St. Bartz"; //this is the feedback
}
 else if(Temperature=30 && vacationSpot == "Beach"){
document.getElementById("feedback").innerHTML = "Cape Horn, Chile";
}
else if(Temperature=70 && vacationSpot == "Mountains"){ 
document.getElementById("feedback").innerHTML = "Yellow Stone National park";
}

else if(Temperature=30 && vacationSpot == "Mountains"){ 
document.getElementById("feedback").innerHTML = "Aspen, in the winter";
}
//use just "else" for everything else!
    
// maybe find a way to turn temperature vales into a numerical slider and all numbers on the slider over and under 60 make a difference
console.log (feedback);
}
