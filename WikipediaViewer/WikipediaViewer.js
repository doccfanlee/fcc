$(document).ready(function () {

    $("#btn-search").on("click", getInfo);
    $("#searchInput").on("keypress", function (event) {
        if (event.which == 13) {
            event.preventDefault();
            getInfo();
            
        }
    });

    function getInfo() {
        var dataGet = {};
        dataGet.action = "query";
        dataGet.titles = $("#searchInput").val();
        dataGet.prop = "extracts";
        dataGet.exintro = 1;
        dataGet.format = "json";
        console.log("the title is: " + dataGet.titles);

        $.ajax({
            method: "GET",
            url: "https://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: dataGet,
        }).done(function (json) {
            var contentKeys = Object.keys(json.query.pages);
            console.log("the contentKeys is: " + contentKeys);
            console.log("the type of contentKeys is: " + typeof contentKeys);
            $("#content").html(json.query.pages[contentKeys].extract);
        }).fail(function () {
            alert("error");
        });
    }

});

