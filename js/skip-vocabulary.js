$(document).ready(function () {
   $("#btn-skip").click(function () {
    console.log(123);
    $(".item-vocabulary").find("input").removeClass("hide").addClass("block");
    $(".item-vocabulary").find(".icon-learned").removeClass("block").addClass("hide");
   });

   $(".select-all").click(function () {
      $(".item-vocabulary").find("input").prop("checked", true);
   });

   $(".unselect-all").click(function () {
      $(".item-vocabulary").find("input").prop("checked", false);
   });
});