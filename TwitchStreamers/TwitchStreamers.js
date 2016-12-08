$(document).ready(function () {
    var users_TwitchStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
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
    $("#tag_online").on("click", function () {
        $(".offline").hide();
        $(".online").show();
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
    $("#tag_offline").on("click", function () {
        $(".online").hide();
        $(".offline").show();
    });
    $("#tag_all").on("click", function () {
        $(".online").show();
        $(".offline").show();
    });

    //var json = {};
    users_TwitchStreamers.forEach(function (element) {
        //getUserInfo(element);
        // console.log("infoFromTwitchTV is " + json);

        var channelUrl = "https://wind-bow.gomix.me/twitch-api/channels/" + element + "?callback=?";
        var streamlUrl = "https://wind-bow.gomix.me/twitch-api/streams/" + element + "?callback=?";
        var dataGet = {};
        dataGet.Accept = 'application/vnd.twitchtv.v3+json';
        $.ajax({
            method: "GET",
            url: channelUrl,
            dataType: "jsonp",
            data: dataGet,
        }).done(function (channelData) {
            $.ajax({
                method: "GET",
                url: streamlUrl,
                dataType: "jsonp",
                data: dataGet,
            }).done(function (streamData) {
                var jsonStatus = "";
                if (streamData.stream == null) {
                    jsonStatus = "offline";
                } else {
                    jsonStatus = streamData.game;
                    if (jsonStatus.length > 25)
                        jsonStatus = streamData.game.slice(0, 25) + "...";
                }
                console.log(streamData);
                console.log(channelData);
                var onOrOffline = jsonStatus === "offline" ? ' offline' : ' online';
                if (channelData !== undefined) {
                    var myNewElement = $('<div class="row' + onOrOffline + '">\
                        <div class="col-xs-1">\
                            <img class="item_image" src="'+ channelData.logo + '" alt="pic" >\
                        </div>\
                        <div class="col-xs-11">\
                            <div class="row">\
                                <div class="col-sm-4">\
                                    <p class="text-center item_name"><a href="'+ channelData.url + '">' + channelData.display_name + '</a></p>\
                                </div>\
                                <div class="col-sm-8">\
                                    <p class="text-center item_status">'+ jsonStatus + '</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>' );
                }
                myNewElement.appendTo("#TwitchStreamersList");
            }).fail(function () {
                console.log("failed.");
            });

        }).fail(function () {
            console.log("failed.");
        });

    });

});

