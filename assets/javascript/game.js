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
var sigue = false;
var txtResultado = "You loose ";

//Start functions to generate & evaluate game values 

function topLimit () {
    limSup = Math.floor(Math.random() * 300);
}

// Get Top Score to beat
function randValues () {
    ScoreIn = Math.floor(Math.random() * 500);
    $("#topScore").html("<h2> Top Score is: " + ScoreIn + "</h2>");
     console.log("El tope inicial fue: " + ScoreIn);
}

// Ask for confirmation to continue playing
function verify() {
    sigue = confirm(txtResultado + "Would you like continue playing?");
    console.log(sigue);
    if (sigue == true) {
        randValues();
        totVal = 0;
        $("#yourScore").html("<h2> Your score is: " + totVal + "</h2>");
    }
}


// Determine random value for teal gem
$("#Tealgem").on("click", function(){
    valGem01 = Math.floor(Math.random() * 100);
    totVal = totVal + valGem01;
    $("#yourScore").html("<h2> Your score is: " + totVal + "</h2>");

    if (totVal > ScoreIn) {
        contLos++;
        $("#looser").html("<h2> Defeats: " + contLos + "</h2>");
        txtResultado="You loose ";
        verify();
    }
    // When win add counter 
    if (totVal === ScoreIn) {
        contWin++;
        txtResultado = "You won!";
        $("#winner").html("<h2> Victories: " + contWin + "</h2>");
        verify();
    }
});

// Determine random value for yellow gem
$("#Yellgem").on("click", function(){
    valGem02 = Math.floor(Math.random() * 50);
    totVal = totVal + valGem02;
    $("#yourScore").html("<h2> Your score is: " + totVal + "</h2>");

    if (totVal > ScoreIn) {
        contLos++;
        $("#looser").html("<h2> Defeats: " + contLos + "</h2>");
        verify();
        txtResultado="You loose ";        
        }
    
    // When win add counter 
    if (totVal === ScoreIn) {
        contWin++;
        txtResultado="You won! ";
        $("#winner").html("<h2> Victories: " + contWin + "</h2>");
        verify();
    }
});

// Determine random value for blue gem
$("#Bluegem").on("click", function(){
    valGem03 = Math.floor(Math.random() * 25);
    totVal = totVal + valGem03;
    $("#yourScore").html("<h2> Your score is: " + totVal + "</h2>");

    if (totVal > ScoreIn) {
        contLos++;
        $("#looser").html("<h2> Defeats: " + contLos + "</h2>");
        verify();
        txtResultado="You loose ";        
        }
    
    // When win add counter 
    if (totVal === ScoreIn) {
        contWin++;
        txtResultado="You won! ";
        $("#winner").html("<h2> Victories: " + contWin + "</h2>");
        verify();
    }
});

// Determine random value for pink gem
$("#Pinkgem").on("click", function(){
    valGem04 = Math.floor(Math.random() * 5);
    totVal = totVal + valGem04;
    $("#yourScore").html("<h2> Your score is: " + totVal + "</h2>");

    if (totVal > ScoreIn) {
        contLos++;
        $("#looser").html("<h2> Defeats: " + contLos + "</h2>");
        verify();
        txtResultado="You loose ";        
        }
    
    // When win add counter 
    if (totVal === ScoreIn) {
        contWin++;
        txtResultado="You won! ";
        $("#winner").html("<h2> Victories: " + contWin + "</h2>");
        verify();
    }
});

randValues();