// Defining global variables
var contLos = 0;
var contWin = 0;
var limSup = 0;
var valGem01 = 0;
var valGem02 = 0;
var valGem03 = 0;
var valGem04 = 0;
var ScoreIn = 0;
var totVal = 0;

var usrMessage = "";
function topLimit(){
    limSup = Math.floor(Math.random() * 300);
}

function randValues(){
    ScoreIn = Math.floor(Math.random() * 500);
    $("#topScore").html("<h2> Top Score is: " + ScoreIn + "</h2>");
     console.log("El tope inicial fue: " + ScoreIn);
}

// function randValue01(){ 
    // valGem02 = Math.floor(Math.random() * 50);
    // valGem03 = Math.floor(Math.random() * 25);
    // valGem04 = Math.floor(Math.random() * 5);

// }

$("#Tealgem").on("click", function(){
    valGem01 = Math.floor(Math.random() * 150);
    totVal = totVal + valGem01;
    if(totVal > ScoreIn){
        alert("You loose!");
    }
    alert("Se gano: " + valGem01 + " y llevas " + totVal + " de un máximo de " + ScoreIn);
});

randValues();

