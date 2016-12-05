$(document).ready(function () {
    // Set default pawn 0 is circle, 1 is rect
    var choosePawn = 0;

    // Initialize Won[]
    var Won = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [3, 6, 9],
    [0, 4, 8], [2, 4, 6]];
    var AIPawns = [];
    var PlayerPawns = [];
    var AllPawns = [];
    // var GridID = {
    //     'leftTopGrid': 1,
    //     'topGrid': 2,
    //     'rightTopGrid': 3,
    //     'leftMiddleGrid': 4,
    //     'middleGrid': 5,
    //     'rightMiddleGrid': 6,
    //     'leftBottomGrid': 7,
    //     'bottomGrid': 8,
    //     'rightBottomGrid': 9
    // };

    var GridID = ['leftTopGrid',
        'topGrid',
        'rightTopGrid',
        'leftMiddleGrid',
        'middleGrid',
        'rightMiddleGrid',
        'leftBottomGrid',
        'bottomGrid',
        'rightBottomGrid'];

    Setup();

    $("#canvasCircle").on("click", function () {
        choosePawn = 0;
        $('#choosePawnModal').modal('hide');
    });
    $("#canvasRect").on("click", function () {
        choosePawn = 1;
        $('#choosePawnModal').modal('hide');
    });
    $('#resetBtn').on("click", Reset);

    $(".grid").on("click", function (event) {
        var currentGridId = GridID.indexOf(event.target.id);

        if (AIPawns.includes(currentGridId) || PlayerPawns.includes(currentGridId))
            return;

        //Draw pawn
        var newCanvasId = 'canvas'.concat(currentGridId);
        var newCanvas = $('<canvas id="' + newCanvasId + '" width="150", height="150"></canvas>');
        newCanvas.appendTo($(this));
        DrawPawn("Player", newCanvasId);

        console.log("currentGridId is " + currentGridId);
        PlayerPawns.push(currentGridId);

        if (IsWon(PlayerPawns, Won)) {
            ShowWonMessage("You Win!");
        } else {
            var NextGo = AICompute();
            AIPawns.push(NextGo);
            console.log("NextGo is " + NextGo);
            //Computer DrawPawn
            newCanvasId = 'canvas'.concat(NextGo);
            newCanvas = $('<canvas id="' + newCanvasId + '" width="150", height="150"></canvas>');
            newCanvas.appendTo('#' + GridID[NextGo]);
            DrawPawn("Computer", newCanvasId);
            if (IsWon(AIPawns, Won)) {
                ShowWonMessage("Computer Wins!");
            }
        }
        console.log(event.target.id);
    });

    function DrawPawn(who, canvasId) {
        if (who == 'Player') {
            currentPawn = choosePawn;
        } else {
            currentPawn = 1 - choosePawn;
        }

        if (currentPawn == 0) {
            DrawCircle(75, 75, 50, canvasId);
        } else {
            DrawRect(25, 25, 100, canvasId);
        }
    }

    function AICompute() {
        // Calcuate next step
        AllPawns = PlayerPawns.concat(AIPawns);
        var PawnToGo = [];
        [0, 1, 2, 3, 4, 5, 6, 7, 8].forEach(function (element) {
            if (!AllPawns.includes(element))
                PawnToGo.push(element);
        });
        console.log("PawnToGo is " + PawnToGo);
        console.log("AllPawns is " + AllPawns);

        if (PawnToGo.length === 0) {
            ShowWonMessage("We become a draw play!");
        }
        var NextPawn = PawnToGo.find(function (element) {
            return IsWon(AIPawns.concat(element), Won);
        });
        if (NextPawn === undefined) {
            return PawnToGo[0];
        }
        return NextPawn;

    }

    function Reset() {
        AIPawns = [];
        PlayerPawns = [];

        $('.grid').empty();
        $('#winModal').modal('hide');
        $('#choosePawnModal').modal('show');

    }

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


    function Setup() {
        DrawRect(80, 30, 100, "canvasRect");
        DrawCircle(130, 80, 50, "canvasCircle");
        $('#choosePawnModal').modal('show');
    }

    function IsWon(pawn, AllWin) {
        return AllWin.some(function (element, index, array) {
            return element.every(function (elem) {
                return pawn.includes(elem);
            });
        });
    }

    function ShowWonMessage(text) {
        $('#winModalTxt h1').text(text);
        $('#winModal').modal('show');
    }

});