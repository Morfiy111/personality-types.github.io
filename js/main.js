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

$(".input-checkbox").on("click", function () {

    if ($(".input-checkbox:checked").length >= 2) { // Не больше 2-х checkbox

        $(".input-checkbox:not(:checked)").attr("disabled", true);

    } else {

        $(".input-checkbox:disabled").attr("disabled", false);

    }

});

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
    if (checkbox.checked && checkbox2.checked) {
        document.querySelector('.text-out2').style.display = 'block';
    } else {
        document.querySelector('.text-out2').style.display = 'none';
    }
    if (checkbox.checked && checkbox3.checked) {
        document.querySelector('.text-out3').style.display = 'block';
    } else {
        document.querySelector('.text-out3').style.display = 'none';
    }
    if (checkbox.checked && checkbox7.checked) {
        document.querySelector('.text-out4').style.display = 'block';
    } else {
        document.querySelector('.text-out4').style.display = 'none';
    }
    if (checkbox.checked && checkbox5.checked) {
        document.querySelector('.text-out5').style.display = 'block';
    } else {
        document.querySelector('.text-out5').style.display = 'none';
    }
    if (checkbox.checked && checkbox9.checked) {
        document.querySelector('.text-out6').style.display = 'block';
    } else {
        document.querySelector('.text-out6').style.display = 'none';
    }
    if (checkbox.checked && checkbox8.checked) {
        document.querySelector('.text-out7').style.display = 'block';
    } else {
        document.querySelector('.text-out7').style.display = 'none';
    }

    if (checkbox.checked && checkbox4.checked) {
        document.querySelector('.text-out8').style.display = 'block';
    } else {
        document.querySelector('.text-out8').style.display = 'none';
    }
    if (checkbox2.checked && checkbox4.checked) {
        document.querySelector('.text-out9').style.display = 'block';
    } else {
        document.querySelector('.text-out9').style.display = 'none';
    }
    if (checkbox2.checked && checkbox3.checked) {
        document.querySelector('.text-out10').style.display = 'block';
    } else {
        document.querySelector('.text-out10').style.display = 'none';
    }
    if (checkbox7.checked && checkbox3.checked) {
        document.querySelector('.text-out11').style.display = 'block';
    } else {
        document.querySelector('.text-out11').style.display = 'none';
    }
    if (checkbox7.checked && checkbox4.checked) {
        document.querySelector('.text-out12').style.display = 'block';
    } else {
        document.querySelector('.text-out12').style.display = 'none';
    }
    if (checkbox3.checked && checkbox6.checked) {
        document.querySelector('.text-out13').style.display = 'block';
    } else {
        document.querySelector('.text-out13').style.display = 'none';
    }
    if (checkbox4.checked && checkbox6.checked) {
        document.querySelector('.text-out14').style.display = 'block';
    } else {
        document.querySelector('.text-out14').style.display = 'none';
    }
    if (checkbox3.checked && checkbox5.checked) {
        document.querySelector('.text-out15').style.display = 'block';
    } else {
        document.querySelector('.text-out15').style.display = 'none';
    }
    if (checkbox4.checked && checkbox5.checked) {
        document.querySelector('.text-out16').style.display = 'block';
    } else {
        document.querySelector('.text-out16').style.display = 'none';
    }
    if (checkbox3.checked && checkbox9.checked) {
        document.querySelector('.text-out17').style.display = 'block';
    } else {
        document.querySelector('.text-out17').style.display = 'none';
    }
    if (checkbox4.checked && checkbox9.checked) {
        document.querySelector('.text-out18').style.display = 'block';
    } else {
        document.querySelector('.text-out18').style.display = 'none';
    }
    if (checkbox3.checked && checkbox4.checked) {
        document.querySelector('.text-out19').style.display = 'block';
    } else {
        document.querySelector('.text-out19').style.display = 'none';
    }
    if (checkbox3.checked && checkbox8.checked) {
        document.querySelector('.text-out20').style.display = 'block';
    } else {
        document.querySelector('.text-out20').style.display = 'none';
    }
    if (checkbox4.checked && checkbox8.checked) {
        document.querySelector('.text-out21').style.display = 'block';
    } else {
        document.querySelector('.text-out21').style.display = 'none';
    }
    if (checkbox2.checked && checkbox6.checked) {
        document.querySelector('.text-out22').style.display = 'block';
    } else {
        document.querySelector('.text-out22').style.display = 'none';
    }
    if (checkbox2.checked && checkbox7.checked) {
        document.querySelector('.text-out23').style.display = 'block';
    } else {
        document.querySelector('.text-out23').style.display = 'none';
    }
    if (checkbox2.checked && checkbox5.checked) {
        document.querySelector('.text-out24').style.display = 'block';
    } else {
        document.querySelector('.text-out24').style.display = 'none';
    }
    if (checkbox2.checked && checkbox9.checked) {
        document.querySelector('.text-out25').style.display = 'block';
    } else {
        document.querySelector('.text-out25').style.display = 'none';
    }
    if (checkbox2.checked && checkbox8.checked) {
        document.querySelector('.text-out26').style.display = 'block';
    } else {
        document.querySelector('.text-out26').style.display = 'none';
    }
    if (checkbox7.checked && checkbox6.checked) {
        document.querySelector('.text-out27').style.display = 'block';
    } else {
        document.querySelector('.text-out27').style.display = 'none';
    }
    if (checkbox7.checked && checkbox5.checked) {
        document.querySelector('.text-out28').style.display = 'block';
    } else {
        document.querySelector('.text-out28').style.display = 'none';
    }
    if (checkbox7.checked && checkbox9.checked) {
        document.querySelector('.text-out29').style.display = 'block';
    } else {
        document.querySelector('.text-out29').style.display = 'none';
    }
    if (checkbox7.checked && checkbox8.checked) {
        document.querySelector('.text-out30').style.display = 'block';
    } else {
        document.querySelector('.text-out30').style.display = 'none';
    }
    if (checkbox5.checked && checkbox6.checked) {
        document.querySelector('.text-out31').style.display = 'block';
    } else {
        document.querySelector('.text-out31').style.display = 'none';
    }
    if (checkbox5.checked && checkbox9.checked) {
        document.querySelector('.text-out32').style.display = 'block';
    } else {
        document.querySelector('.text-out32').style.display = 'none';
    }
    if (checkbox5.checked && checkbox8.checked) {
        document.querySelector('.text-out33').style.display = 'block';
    } else {
        document.querySelector('.text-out33').style.display = 'none';
    }
    if (checkbox6.checked && checkbox8.checked) {
        document.querySelector('.text-out34').style.display = 'block';
    } else {
        document.querySelector('.text-out34').style.display = 'none';
    }
    if (checkbox8.checked && checkbox9.checked) {
        document.querySelector('.text-out35').style.display = 'block';
    } else {
        document.querySelector('.text-out35').style.display = 'none';
    }
    if (checkbox6.checked && checkbox9.checked) {
        document.querySelector('.text-out36').style.display = 'block';
    } else {
        document.querySelector('.text-out36').style.display = 'none';
    }
});