$(document).ready(function () {
    // var baseURL = "https://en.wikipedia.org/w/api.php";
    $("#btn-search").on("click", getInfo);
    $("#searchInput").on("keypress", function (event) {
        if (event.which == 13) {
            event.preventDefault();
            getInfo();

        }
    });

    function getInfo() {
        $("#wikiArticle").html("");
        var dataGet = {};
        dataGet.action = "query";
        dataGet.prop = "extracts";
        dataGet.format = "json";
        dataGet.generator = "search";
        dataGet.exsentences = 1;
        dataGet.exlimit = 10;
        dataGet.exintro = 1;
        dataGet.explaintext = 1;
        dataGet.gsrsearch = $("#searchInput").val();
        dataGet.gsrlimit = 10;

        // $.ajax({
        //     method: "GET",
        //     url: "https://en.wikipedia.org/w/api.php",
        //     dataType: "jsonp",
        //     data: dataGet,
        // }).done(function (json) {
        //    // var result = json.query.pages;
        //     for (var element in json.query.pages) {
        //         $("#wikiArticle").append('<div class="resultList"><a href="http://en.wikipedia.org/?curid=' +json.query.pages[element].pageid + '">' + json.query.pages[element].title + '<a></div>');
        //     }

        //     // var contentKeys = Object.keys(json.query.pages);
        //     // console.log("the contentKeys is: " + contentKeys);
        //     // console.log("the type of contentKeys is: " + typeof contentKeys);
        //     // $("#content").html(json.query.pages[contentKeys].extract);
        // }).fail(function () {
        //     alert("error");
        // });

        $.ajax({
            method: "GET",
            url: "https://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: dataGet,
            success: function (json) {
                for (var element in json.query.pages) {
                    $("#wikiArticle").append('<div class="resultList"><a href="http://en.wikipedia.org/?curid=' + json.query.pages[element].pageid + '">' + json.query.pages[element].title + '<a></div>');
                }
            }
        });
    }

});

