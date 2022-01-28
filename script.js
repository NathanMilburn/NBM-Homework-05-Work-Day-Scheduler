// var inputAppointment = document.querySelector('textarea');
var currentTime = document.querySelector('.currentTime');
var currentHour = moment().format('H')
// var saveBtn = document.querySelector('.saveBtn');
var past = $('.past');
var present = $('.present');
var future = $('.future');


// const timeBlock9 = document.getElementById('#9')
// const timeBlock10 = document.getElementById('#10')
// const timeBlock11 = document.getElementById('#11')
// const timeBlock12 = document.getElementById('#12')
// const timeBlock13 = document.getElementById('#13')
// const timeBlock14 = document.getElementById('#14')
// const timeBlock15 = document.getElementById('#15')
// const timeBlock16 = document.getElementById('#16')
// const timeBlock17 = document.getElementById('#17')

// Timeblock variables for regular business hours (used increments from military time format)
const timeBlock9 = $('#9');
const timeBlock10 = $('#10');
const timeBlock11 = $('#11');
const timeBlock12 = $('#12');
const timeBlock13 = $('#13');
const timeBlock14 = $('#14');
const timeBlock15 = $('#15');
const timeBlock16 = $('#16');
const timeBlock17 = $('#17');


var currentDate = moment().format('dddd MMMM Do, YYYY');
$("#currentDay").text(currentDate);


// Placeholder

var timeDisplayEl = $('#currentHour');
function displayTime() {
    timeDisplayEl.text(currentHour);
}


// styling time-blocks for hours that have alread passed
function pastTimeSlot() {
    for(var i = currentHour - 1; i >= 9; i--){
        if(i >= 9 && i <= 17){
            document.getElementById(i).classList.add('past');
        }
    }
}

// styling time-blocks for the current hour
function currentTimeSlot() {
    for(var i = currentHour; i >= 9; i){
        if(i <= 9 && i <= 17){
            document.getElementById(i).classList.add('present');
        }
    }
}

// styling time-blocks for hours that haven't alread passed
function futureTimeSlot() {
    for(var i = currentHour + 1; i <= 17; i++){
        if(i <= 17){
            document.getElementById(i).classList.add('future');
        }
    }
}

pastTimeSlot()

futureTimeSlot()
displayTime()

var saveBtn = $('.saveBtn');
var inputText = $('textarea');

// Accepting Input Function
function getInput() {
    const inputField = {
        inputText: inputText.val()
    };

    localStorage.getItem('textarea', JSON.stringify(inputField))
};
// Test for loop for get input 
// var table = $('textarea[id]')
// function getInput() {
//     for(var i = 0; row; row = table.rows[i]; i++){
//         if()
//     }
//     const inputField = {
//         inputText: inputText.val()
//     };

//     localStorage.getItem('textarea', JSON.stringify(inputField))
// };

// Saving Input Function
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

// TO DO LIST:

// Attach moment().format functions to timeslot fields to change colors based on current timestamp
// Potentially use an IF statement for color changes based on current timestamp
// Maybe replace form field with input fields in the appointment section of the table
// Connect the save button with a localstorage save
// Maybe use a fourth color option for appointments that have been committed (maybe yello?)
// Learn more ways I can incorporate jquery UI and Bootstrap to do some of the work for me.