$(document).ready(function () {
    $('select').formSelect();
});
function descheck(){
  $('#mon6').prop('checked', false);
  $('#mon6').prop('disabled', false);
  $('#alls').prop('checked', false);
}
function check() {
    if ($("#january").prop('checked') != true &&
        $("#february").prop('checked') != true &&
        $("#march").prop('checked') != true &&
        $("#april").prop('checked') != true &&
        $("#may").prop('checked') != true &&
        $("#june").prop('checked') != true &&
        $("#july").prop('checked') != true &&
        $("#august").prop('checked') != true &&
        $("#september").prop('checked') != true &&
        $("#october").prop('checked') != true &&
        $("#november").prop('checked') != true &&
        $("#december").prop('checked') != true ||
        $("#edition option:selected").val() == "none" ||
        $("#year option:selected").val() == "none")
    {
        $('#button').attr('disabled', 'disabled');
    } else {
        $('#button').removeAttr('disabled');
    }
}
function alls6() {
    if ($('#alls').prop('checked') == true) {
        $('.mon').prop('checked', true);
        $('.mon:disabled').prop('checked', false);
        $('#mon6').prop('checked', false);
        $('#mon6').prop('disabled', true);
    }
    else {
        $('.mon').prop('checked', false);
        $('#mon6').prop('disabled', false);
    }
    check();
}

function mon6s() {
    var k = 0;
    if ($('#mon6').prop('checked') != true) {
        $('.mon').prop('checked', false);
    }
    else {
        $('.mon').each(function () {
            if ($(this).prop('disabled') == false && k < 6) {
                $(this).attr('checked', "checked");
                $(this).prop('checked', true);
                k++;
            }
        });
    }
    check();
}
function montselse(months) {
    var k = 0;
    var data = new Date();
    var month = data.getMonth();
    var day = data.getDate();
    var year = data.getFullYear();
    var checker = false;
    $('.mon').prop('checked', false);
    $('#mon6').prop('checked', false);
    $('#alls').prop('checked', false);
    var val = Number.parseInt($('#year option:selected').text());
    if (val > year) {
        $('.mon').prop('disabled', true);
    }
    else if (day > 15) {
        month++;
    }
    $('.mon').prop('disabled', false);
    var months = [];
    $('.mon').each(function () {
        months.push($(this).attr('id'));
        if (k < month && val <= year) {
            $(this).prop('disabled', true);
        }
        k++;
    });
    if (val < year){
      checker = true;
      $('.mon').prop('disabled', true);
    }
    if ($('#edition option:selected').attr('data-month') != "" && $('#edition option:selected').text() != "Выберите издание" && checker == false) {
        var arrs = $('#edition option:selected').attr('data-month').split(',');
        for (var i = 0; i < arrs.length; i++) {
            if (arrs[i] in months) {
                $('#' + months[arrs[i]]).prop('disabled', true);
            }
        }
    }
}
