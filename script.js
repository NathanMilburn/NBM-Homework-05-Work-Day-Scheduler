var currentDate = moment().format('dddd MMMM Do, YYYY');

$("#currentDay").text(currentDate);

var currentHour = moment().format('h:mm:ss a');
$("#currentHour").text(currentHour);