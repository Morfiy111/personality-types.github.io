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

const checkbox = document.querySelector('.checkbox-block1');
const checkbox2 = document.querySelector('.checkbox-block2');
const checkbox3 = document.querySelector('.checkbox-block3');
const checkbox4 = document.querySelector('.checkbox-block4');
const checkbox5 = document.querySelector('.checkbox-block5');
const checkbox6 = document.querySelector('.checkbox-block6');
const checkbox7 = document.querySelector('.checkbox-block7');
const checkbox8 = document.querySelector('.checkbox-block8');
const checkbox9 = document.querySelector('.checkbox-block9');
const checkboxesBlock = document.querySelector('.flex-buttons-types');
checkboxesBlock.addEventListener('click', function () {
    if (checkbox.checked && checkbox6.checked) {
        document.querySelector('.text-out1').style.display = 'block';
    } else {
        document.querySelector('.text-out1').style.display = 'none';
    }
});
checkboxesBlock.addEventListener('click', function () {
    if (checkbox.checked && checkbox2.checked) {
        document.querySelector('.text-out2').style.display = 'block';
    } else {
        document.querySelector('.text-out2').style.display = 'none';
    }
});
checkboxesBlock.addEventListener('click', function () {
    if (checkbox.checked && checkbox3.checked) {
        document.querySelector('.text-out3').style.display = 'block';
    } else {
        document.querySelector('.text-out3').style.display = 'none';
    }
});
checkboxesBlock.addEventListener('click', function () {
    if (checkbox.checked && checkbox7.checked) {
        document.querySelector('.text-out4').style.display = 'block';
    } else {
        document.querySelector('.text-out4').style.display = 'none';
    }
});
checkboxesBlock.addEventListener('click', function () {
    if (checkbox.checked && checkbox5.checked) {
        document.querySelector('.text-out5').style.display = 'block';
    } else {
        document.querySelector('.text-out5').style.display = 'none';
    }
});
checkboxesBlock.addEventListener('click', function () {
    if (checkbox.checked && checkbox9.checked) {
        document.querySelector('.text-out6').style.display = 'block';
    } else {
        document.querySelector('.text-out6').style.display = 'none';
    }
});
checkboxesBlock.addEventListener('click', function () {
    if (checkbox.checked && checkbox8.checked) {
        document.querySelector('.text-out7').style.display = 'block';
    } else {
        document.querySelector('.text-out7').style.display = 'none';
    }
});
checkboxesBlock.addEventListener('click', function () {
    if (checkbox.checked && checkbox4.checked) {
        document.querySelector('.text-out8').style.display = 'block';
    } else {
        document.querySelector('.text-out8').style.display = 'none';
    }
});