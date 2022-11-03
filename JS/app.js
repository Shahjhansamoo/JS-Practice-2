// Program for generating Result

var a = +prompt("Enter English Marks");
var b = +prompt("Enter Urdu Marks");
var c = +prompt("Enter Maths Marks");
var d = +prompt("Enter Islamiat Marks");
var e = +prompt("Enter Computer Science Marks");
var f = a + b + c + d + e;
console.log(f); 
var g = (f*100)/500;


if(g > 80 && g >= 79 ){

    console.log(" A+ Grade" + g +"%")
}

else if (g > 70){

    console.log(" B Grade" + g +"%")

}


else if (g > 60 ){

    console.log(" C Grade" + g +"%")
}else if (g > 50 ){

    console.log(" D Grade" + g +"%")
}else if (g > 40 ){

    console.log(" E Grade" + g +"%")
}else{

    console.log("You're failed")
}