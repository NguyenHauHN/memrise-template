$(document).ready(function () {
    $("#audio").click(function () {
        $(this).toggleClass("icon-play icon-paused");
    });

    $(".sound-button").click(function () {
        $(this).find("#turn-off").toggleClass("block hide");
        $(this).find("#turn-on").toggleClass("hide block");
    });

    $("button.answer-item").click(function () {
        var parent = $(this).closest(".answer-row");
        var listAnswerItem = $(parent).find(".answer-item");
        $(this).removeClass("choosed").addClass("correct");
        $.each(listAnswerItem, function (idx, item) {
            if (!$(item).hasClass("incorrect") && !$(item).hasClass("correct")) {
               $(item).addClass("disable");
            }
        });
    });
});