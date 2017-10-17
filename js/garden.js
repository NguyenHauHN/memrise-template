$(document).ready(function(){
   $("#audio").click(function () {
       $(this).toggleClass("icon-play icon-paused");
   });

   $(".sound-button").click(function () {
       $(this).find("#turn-off").toggleClass("block hide");
       $(this).find("#turn-on").toggleClass("hide block");
   });
});