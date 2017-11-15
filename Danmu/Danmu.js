$(document).ready(function () {

    var currentWidth = 10;
    var currentHeight = 100;
    var TxtArray = [];
    var TextObj1 = {
        "text": "hello",
        "xPos": 10,
        "yPos": 20,
        "color": "rgb(23,34,67)",
        "speed": 1
    };
    var TextObj2 = {
        "text": "hello",
        "xPos": 10,
        "yPos": 40,
        "color": "rgb(45,124,67)",
        "speed": 2
    };
    TxtArray.push(TextObj1);
    TxtArray.push(TextObj2);

    window.requestAnimationFrame(draw);


    function draw() {
        var canvas = document.getElementById("danmuCanvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        var time = new Date();
        ctx.font = "24px serif";

        TxtArray.forEach(function (element) {
            ctx.fillStyle = element.color;
            element.xPos = (element.xPos+ element.speed) % canvas.clientWidth ;
            ctx.fillText(element.text, element.xPos, element.yPos);
        }, this);

        window.requestAnimationFrame(draw);
    }

    function TextObjGenerator(inputTxt) {

        var randomColorR = Math.floor(Math.random() * 256);
        var randomColorG = Math.floor(Math.random() * 256);
        var randomColorB = Math.floor(Math.random() * 256);
        var randomColor = "rgb(" + randomColorR + "," + randomColorG + "," + randomColorB + ")";

        var randomSpeed = Math.random() + 1;

        var randomHeight = Math.floor(Math.random() * 12 + 1) * 30;

        var newTxtObj = {
            "text": inputTxt,
            "xPos": 10,
            "yPos": randomHeight,
            "color": randomColor,
            "speed": randomSpeed
        };

        TxtArray.push(newTxtObj);
    }

    $("#sendBtn").on("click", function(){
        var inputTextValue = document.getElementById("inputText").value;
        console.log("inputTextValue is "+inputTextValue);
        console.log("typeof inputTextValue is "+inputTextValue);
        if(inputTextValue !== undefined){
            TextObjGenerator(inputTextValue);
        }
    });

    $("#clearBtn").on("click", function(){
        TxtArray = [];
    });

    $("#inputText").keypress(function(event) {
		if(event.keyCode == "13") {
			$("#sendBtn").trigger('click');
		}
	});
});