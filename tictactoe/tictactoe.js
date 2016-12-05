$(document).ready(function () {
    // Set default pawn 0 is circle, 1 is rect
    var choosePawn = 0;

    // Initialize Won[]
    var Won= [[0,1,2],[3,4,5],[6,7,8],
              [0,3,6],[1,4,7],[2,5,8],
              [0,4,8],[2,4,6]];
    var Pawn = [];

    Setup();

    $("#canvasCircle").on("click", function () {
        choosePawn = 0;
    });
    $("#canvasRect").on("click", function () {
        choosePawn = 1;
    });

    $(".grid").on("click", function(event){
        //Draw pawn


        if(IsWon()){
            ShowWonMessage();
        } else {
            ComputerAI();
        }
        console.log(event.target.id);
    });
    
});

function DrawCircle(x, y, radius, canvasId) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, 1);
    ctx.fill();
}

function DrawRect(x, y, width, canvasId) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(x, y, width, width);
}

function Setup(){
    DrawRect(80, 30, 100, "canvasRect");
    DrawCircle(130, 80, 50, "canvasCircle");
}

function IsWon(){
    return true;
}

function ShowWonMessage(){

}

function ComputerAI(){
    // Calcuate next step

    if(IsWon()){
        ShowWonMessage();
    }
}