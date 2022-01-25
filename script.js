var currentDate = moment().format('dddd MMMM Do, YYYY');

$("#currentDay").text(currentDate);

// Placeholder

var timeDisplayEl = $('#currentHour');
function displayTime() {
    var currentHour = moment().format('h:mm:ss a');
    timeDisplayEl.text(currentHour);
}

setInterval(displayTime, 1000);

// TO DO LIST:

// Attach moment().format functions to timeslot fields to change colors based on current timestamp
// Potentially use an IF statement for color changes based on current timestamp
// Maybe replace form field with input fields in the appointment section of the table
// Connect the save button with a localstorage save
// Maybe use a fourth color option for appointments that have been committed (maybe yello?)
// Learn more ways I can incorporate jquery UI and Bootstrap to do some of the work for me.
