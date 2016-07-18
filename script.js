$(document).ready(function(){
    $("#recent-news").click(function(){
      var $arrow = $(this).find('.fa-arrow-right');

      $arrow.toggleClass("fa-rotate-90");
      $("#recent-news-list").toggle();
    });
});
