$(document).ready(function(){
  $("#btnClickMe").on("click", function(){
    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
        method: "POST",
        headers: {
            'X-Mashape-Key':'7W3hiAySoymshH3URP5uJ6bkkTqQp190k94jsnkCkHc3zoUxHE',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
    },
        dataType : "json",})
      .done(function( json ){
       var randomColor = colorRandom();
       var quoteJson = json.quote;
       var authorJson = json.author;
      $("#quoteTxt").html(quoteJson);
      $("#author").html('- '+authorJson);
      $("body").css("background-color",randomColor);
      $(".btn").css("background-color", randomColor);
      //$("#btnTwitter").attr("href", "https://twitter.com/intent/tweet?text="+'"'+quoteJson+'"'+authorJson);
    }).fail(function() {
        $("#quoteTxt").html("Fail to get JSON");});
   });
});



function colorRandom(){
  function oneColorRandom(){
    return Math.floor(Math.random()*256);
 }
  return "rgb(" + oneColorRandom() + "," + oneColorRandom() +"," + oneColorRandom() + ")";
}

$(".btn").mouseup(function(){
    $(this).blur();
})