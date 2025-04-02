$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

let limit = 2;
var checks = document.querySelectorAll(".input-checkbox");
var max = 2;
for (var i = 0; i < checks.length; i++)
    checks[i].onclick = selectiveCheck;
function selectiveCheck(event) {
    var checkedChecks = document.querySelectorAll(".input-checkbox:checked");
    if (checkedChecks.length >= max + 1)
        return false;
}