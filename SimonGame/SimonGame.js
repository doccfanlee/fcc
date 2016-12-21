
$(document).ready(function () {
    var AIAudioPlayOrder = [];
    var PlayerAudioPlayOrder = [];
    $("#redBtnId").on("click", function () {
        PlayAudio("#audio1");
    });
    $("#greenBtnId").on("click", function () {
        PlayAudio("#audio2");
    });
    $("#blueBtnId").on("click", function () {
        PlayAudio("#audio3");
    });
    $("#yellowBtnId").on("click", function () {
        PlayAudio("#audio4");
    });

    function PlayAudio(audioId){
        $(audioId)[0].play();
    }
});
