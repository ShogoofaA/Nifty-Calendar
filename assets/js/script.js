const today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
const currenthour = moment().hour()


// create an function to save information from the textarea to my localstorage
$('.saveBtn').on('click', saveText);

function saveText() {
    let saved = $(this).siblings('textarea').val();
    let savedID = $(this).siblings('textarea').attr('id');
    localStorage.setItem(savedID, saved)
    console.log('blargh')
}

function getInfo() {
    console.log('blarghblargh')
    $('#9').val(localStorage.getItem('9'))
    $('#10').val(localStorage.getItem('10'))
    $('#11').val(localStorage.getItem('11'))
    $('#12').val(localStorage.getItem('12'))
    $('#1').val(localStorage.getItem('1'))
    $('#2').val(localStorage.getItem('2'))
    $('#3').val(localStorage.getItem('3'))
    $('#4').val(localStorage.getItem('4'))
    $('#5').val(localStorage.getItem('5'))
}


// check time by the hour and add a class of past present or future

function currentTime() {
    console.log('blarghblarghblargh')
    let textbox = $('.text')
    for (var i = 0; i < textbox.length; i++) {
        let textId = parseInt(textbox[i].id);
        let getID = document.getElementById(textbox[i].id)
        if (textId < 9) {
            textId = textId +12
        }
        $(textbox[i].id).removeClass('.past')
        $(textbox[i].id).removeClass('.present')
        $(textbox[i].id).removeClass('.future')
        console.log(textId, currenthour)
        if (textId < currenthour) {
            console.log("past", textId)
            $(getID).addClass('past')
        } else if (textId > currenthour) {
            console.log("future", textId)

            $(getID).addClass('future')
        } else {
            console.log("present", textId)

            $(getID).addClass('present')
        }
    }
}
setInterval(currentTime(), (1000 * 60) * 3)
getInfo()