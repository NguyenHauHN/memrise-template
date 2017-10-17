!function (e, o, r) {
    "use strict";
    var n = o("body").data("course-id");
    e(r.courses).on("unenrolled", function () {
        window.location = "/home/"
    }), r.renderer.ready(function () {
        function e(e) {
            o.ajax({
                url: "/ajax/course/restart/", type: "POST", data: {course_id: e}, success: function (e) {
                    e.success && window.location.reload()
                }
            })
        }

        if (r.user.is_authenticated) {
            var t = o(".leaderboard-container"), a = r.newLeaderboard({
                fullBoardUrl: window.location.pathname + "leaderboard/",
                endPoint: "/ajax/leaderboard/course/" + n + "/",
                howMany: t.hasClass("wide") ? 50 : 10,
                large: t.hasClass("wide"),
                showTabs: !0
            });
            t.length > 0 && m.mount(t[0], a)
        }
        o("[data-placement]").tooltip({container: "body"}), o(document).on("click", '[data-role="course-restart"]', function () {
            return r.modal.yes_no(_t("Restart?"), _t("This will __s1__wipe your learning history for this course__s2__. __br__You will start from the beginning again. __br__Are you sure?", {
                s1: "<strong>",
                s2: "</strong>",
                br: "<br /><br />"
            }), function () {
                r.modal.spinner_open(_t("Restarting"), _t("Wiping your learning history...")), e(n)
            }), !1
        }), o(".course-description .text").width() > 300 && o("span.text-expand").show().on("click", function () {
            o(".course-description span").removeClass("ellipsis"), o(this).remove()
        })
    })
}(_, jQuery, MEMRISE);