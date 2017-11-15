
$(document).ready(function () {
    var AIAudioPlayOrder = [];
    var PlayerAudioPlayOrder = [];
    var WINCOUNT = 20;
    var OnOff = false;
    var IsStrict = false;
    var IsStart = false;
    SetDisplay("!!");

    $("#audio1Btn").on("click", function () {
        AudioBtnHander(1);
    });
    $("#audio2Btn").on("click", function () {
        AudioBtnHander(2);
    });
    $("#audio3Btn").on("click", function () {
        AudioBtnHander(3);
    });
    $("#audio4Btn").on("click", function () {
        AudioBtnHander(4);
    });

    $(".roundBtn").on("mousedown", function () {
        $(this).removeClass("mainBtnShadow");
    }).on("mouseup", function () {
        $(this).addClass("mainBtnShadow");
    });

    $("#startBtn").on("click", function () {
        IsStart = true;
        $(this).css("background-color", "#00dd00");
        start();
    }).on("mousedown", function () {
        $(this).removeClass("btnShadow");
    }).on("mouseup", function () {
        $(this).addClass("btnShadow");
    });

    $("#strictBtn").on("click", function () {
        IsStrict = !IsStrict;
        if (IsStrict) {
            $(this).css("background-color", "#dd0000");
        } else {
            $(this).css("background-color", "#990000");
        }
    }).on("mousedown", function () {
        $(this).removeClass("btnShadow");
    }).on("mouseup", function () {
        $(this).addClass("btnShadow");
    });

    $("#OnOffSwitchBtn").on("click", function () {
        if (OnOff) {
            TurnOff();
        } else {
            TurnOn();
        }
    });

    function TurnOn() {
        $("#OnOffSwitchBtn").css("margin-left", "20px");
        OnOff = true;
        $("#outer").addClass("TurnOn").removeClass("TurnOff");
    }
    function TurnOff() {
        // $("#OnOffSwitchBtn").css("margin-left", "0px");
        // OnOff = false;
        // IsStart = false;
        // $("#startBtn").css("background-color", "#009900");
        // IsStrict = false;
        // $("#strictBtn").css("background-color", "#990000");
        // $("#outer").addClass("TurnOff").removeClass("TurnOn");
        // SetDisplay("!!");
        location.reload();
    }

    function PlayAudioOnce(audioId) {
        $(audioId).off("ended");
        PlayAudio(audioId);
    }

    function AudioBtnHander(id) {
        PlayAudioOnce("#audio" + id);
        setTimeout(function () {
            BtnHandler(id);
        }, 1000);
    }
    function BtnHandler(btnId) {
        PlayerAudioPlayOrder.push(btnId);

        if (ComparePlayer_AIPlayerOrder(PlayerAudioPlayOrder, AIAudioPlayOrder)) {
            if (PlayerAudioPlayOrder.length === WINCOUNT) {
                PlayerWin();
            } else if (PlayerAudioPlayOrder.length === AIAudioPlayOrder.length) {
                setTimeout(function () {
                    PlayerAudioPlayOrder = [];
                    AddOnePlayAudio();
                    BuildAudioName_PlayAudioSequence(AIAudioPlayOrder);
                }, 1000);
                console.log("we equal");
            }
        } else if (IsStrict) {
            start();
        } else {
            PlayerAudioPlayOrder = [];
            SetDisplay("NO");
            setTimeout(function () {
                BuildAudioName_PlayAudioSequence(AIAudioPlayOrder);
            }, 2000);
        }
    }

    function PlayerWin() {
        SetDisplay("WIN");
        setTimeout(function () {
            start();
        }, 5000);

    }
    /** generate AIAudioPlayOrder */
    function getRandomPlayOrder() {
        return Math.floor(Math.random() * 4) + 1;
    }
    /** play AIAudioPlayOrder */
    function BuildAudioName_PlayAudioSequence(audioSequence) {
        var fullnameAudioSequence = audioSequence.map(function (element) {
            return "#audio" + element;
        });
        console.log("fullnameAudioSequence is " + fullnameAudioSequence);
        PlayAudioSequence(fullnameAudioSequence);
    }
    function PlayAudioSequence(audioSequence) {
        PlayAudio(audioSequence[0]);
        $(audioSequence[0] + "Btn").trigger("mousedown");

        if (audioSequence.length > 1) {
            setTimeout(function () {
                $(audioSequence[0] + "Btn").trigger("mouseup");
                PlayAudioSequence(audioSequence.slice(1));
            }, 1000);
        } else {
            setTimeout(function () {
                $(audioSequence[0] + "Btn").trigger("mouseup");
            }, 1000);
        }
    }

    /** check PlayerAudioPlayOrder with AIAudioPlayOrder */
    function ComparePlayer_AIPlayerOrder(playerArray, aiArray) {
        return aiArray[playerArray.length - 1] === playerArray[playerArray.length - 1];
    }

    /** reset game */
    function start() {
        AIAudioPlayOrder = [];
        PlayerAudioPlayOrder = [];
        SetDisplay("!!");
        setTimeout(function () {
            AddOnePlayAudio();
            BuildAudioName_PlayAudioSequence(AIAudioPlayOrder);
        }, 1000);
    }

    function PlayAudio(audioId) {
        $(audioId)[0].play();
    }

    function AddOnePlayAudio() {
        AIAudioPlayOrder.push(getRandomPlayOrder());
        SetDisplay(AIAudioPlayOrder.length);
    }

    function SetDisplay(message) {
        $("#countText").html(message);
    }

});
