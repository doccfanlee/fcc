$(document).ready(function() {
    var isDigitLimit_main = false;
    var isDigitLimit_second = false;
    var isCalculated = false;
    var result = '';
    $(".btn-num").on("click",function(){

        if(isCalculated){
            setZero();
            isCalculated = false;
        }
        appendToBottomShowText( $(this).text());
 
        if(["0","-","+","/","×","Digit Limit."].indexOf($("#mainShowText").text()) > -1){
            $("#mainShowText").text($(this).text());
        }else{
            $("#mainShowText").text($("#mainShowText").text() + $(this).text());
        }

        isDigitLimit();
    });

    $(".btn-operator").on("click",function(){
        if(["-","+","/","×"].indexOf($("#mainShowText").text()) > -1)
            return;
        $("#mainShowText").text($(this).text());
        if(isCalculated){
             $("#bottomShowText").text(result);
             isCalculated = false;
        }
           
        appendToBottomShowText( $(this).text());
        isDigitLimit();
    });

     $("#btn-CE").on("click",function(){
        $("#mainShowText").text("0");
        if(isCalculated){
           return $("#bottomShowText").text("0");
        }
        var regExp = /\d+[\+\-\×\/]?$/g;
        var originStr = $("#bottomShowText").text();
        $("#bottomShowText").text(originStr.replace(regExp, ''));
        if($("#bottomShowText").text() === '')
            $("#bottomShowText").text("0");
    });

    $("#btn-AC").on("click",function(){
        setZero();
    });

    $("#btn-equal").on("click",function(){
        var rawResult =  eval($("#bottomShowText").text().replace('×', '*'));
        if (rawResult % 1 !== 0){
            result = rawResult.toFixed(2);
        }else{
            result = rawResult.toString();
        }
        $("#mainShowText").text(result);
        appendToBottomShowText("=");
        appendToBottomShowText(result);

        isDigitLimit();

        isCalculated = true;
    });

    function checkDigitLimit(str, num){
        if(str.length >= num){
            return true;
        }
        return false;
    }

    function appendToBottomShowText(str){
        if($("#bottomShowText").text() === "0" || $("#bottomShowText").text() === "Digit Limit.")
            return $("#bottomShowText").text(str);
        $("#bottomShowText").text($("#bottomShowText").text() + str);
    }

    function setZero(){
        $("#mainShowText").text("0");
        $("#bottomShowText").text("0");
    }

    function isDigitLimit(){
        isDigitLimit_main = checkDigitLimit($("#mainShowText").text(), 12);
        isDigitLimit_second = checkDigitLimit($("#bottomShowText").text(), 28);
        if(isDigitLimit_main || isDigitLimit_second){
            $("#mainShowText").text("0");
            $("#bottomShowText").text("Digit Limit.");
            isCalculated = false;
        }
    }

});