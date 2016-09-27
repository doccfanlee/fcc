$(document).ready(function () {
    $("#tag_online").on("mouseenter", function () {
        $(this).animate({
            "margin-left": "0px",
        }, 500, function () {
            $("#tag_online > p").show().fadeIn("slow");
        });
    });

    $("#tag_online").on("mouseleave", function () {
        $("#tag_online > p").hide();
        $(this).animate({
            "margin-left": "95px",
        }, 500);
    });

    $("#tag_offline").on("mouseenter", function () {
        $(this).animate({
            "margin-left": "0px",
        }, 500, function () {
            $("#tag_offline > p").show().fadeIn("slow");
        });
    });

    $("#tag_offline").on("mouseleave", function () {
        $("#tag_offline > p").hide();
        $(this).animate({
            "margin-left": "95px",
        }, 500);
    });
});