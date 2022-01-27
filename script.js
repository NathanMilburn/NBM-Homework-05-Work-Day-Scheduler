// var inputAppointment = document.querySelector('textarea');
var currentTime = document.querySelector('.currentTime');
var currentHour = moment().format('H')
// var saveBtn = document.querySelector('.saveBtn');
var past = $('.past');
var present = $('.present');
var future = $('.future');

const timeBlock9 = document.getElementById('#9')
const timeBlock10 = document.getElementById('#10')
const timeBlock11 = document.getElementById('#11')
const timeBlock12 = document.getElementById('#12')
const timeBlock13 = document.getElementById('#13')
const timeBlock14 = document.getElementById('#14')
const timeBlock15 = document.getElementById('#15')
const timeBlock16 = document.getElementById('#16')
const timeBlock17 = document.getElementById('#17')


var currentDate = moment().format('dddd MMMM Do, YYYY');
$("#currentDay").text(currentDate);


// Placeholder

var timeDisplayEl = $('#currentHour');
function displayTime() {
    timeDisplayEl.text(currentHour);
}

// setInterval(displayTime, 1000);

// saveBtn function #1?
// var lockAppointmentSlot = function (event) {
//     event.preventDefault();

//     var appointmentInput = inputAppointment.value.trim();

//     if (appointmentInput) {

//     }

//     localStorage.setItem('textarea', JSON.stringify(appointmentInput))
//     window.location.assign('.time-block')
// }

// styling time-blocks for hours that have alread passed
function pastTimeSlot() {
    // if(currentHour != moment().format('h:mm:ss a')){
    //     element.classList.add('.past');
    // }
    for(var i = currentHour - 1; i <= 9; i--){
        // var temp = document.getElementById("'#' + i")
        if(i > 9 && i < 17){
            document.getElementById(i).classList.remove("time-block");
        }
        // temp.classList.add('.past');
    }
}

// styling time-blocks for the current hour
function currentTimeSlot() {

}

// styling time-blocks for hours that haven't alread passed
function futureTimeSlot() {
    for(var i = currentHour + 1; i >= 9; i++){
        var temp = document.getElementById('.text-block')
        element.classList.add('.future');
    }
}

pastTimeSlot()
displayTime()

// TO DO LIST:

// Attach moment().format functions to timeslot fields to change colors based on current timestamp
// Potentially use an IF statement for color changes based on current timestamp
// Maybe replace form field with input fields in the appointment section of the table
// Connect the save button with a localstorage save
// Maybe use a fourth color option for appointments that have been committed (maybe yello?)
// Learn more ways I can incorporate jquery UI and Bootstrap to do some of the work for me.

var saveBtn = $('.saveBtn');
var inputText = $('textarea[name=input-box]');

function getInput() {
    const inputField = {
        inputText: inputText.val()
    };

    localStorage.setItem('textarea', JSON.stringify(inputField))
};

function saveInput() {
    inputValue = JSON.parse(localStorage.getItem('textarea'));

    if(inputValue !== null) {
        inputText.text(inputValue.inputText);
    }else{
        return;
    }
}

saveBtn.on('click', function(event){
    event.preventDefault();
    window.alert('Appointment Saved');
    saveInput();
    getInput();
});

function maintain() {
    saveInput();
}

maintain();