//Pseudo 

// Create dummy label 9am, 10am etc.
// create input that will hold our event text
// Create button 
// Display current Date under Title element
// Create click event for button
// When clicked save Text Area value to localStorage
// Validation when localStorage is empty and when there is value in there
// We need id for each textarea
// loop that creates

//var today = moment();
var currentTime = $('#currentDay');

var timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

setInterval(function() {
    currentTime.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }, 1000);

  for (var i = 0; i < timeArray.length; i++) {
    var row = $('div').addClass('row');
    var timeTag = $('<p>').text(timeArray[i]).addClass('hour');
    var eventText = $("<textarea>").addClass('description');
    var saveButton = $("<button>").text("save").addClass('saveBtn');

  // You can also chain methods onto new lines to keep code clean
//   var totalTdEl = $('<td>')
//     .addClass('p-2')
//     .text('$' + totalEarnings);

//   var deleteProjectBtn = $('<td>')
//     .addClass('p-2 delete-project-btn text-center')
//     .text('X');

  // By listing each `<td>` variable as an argument, each one will be appended in that order
  row.append(
    timeTag,
    eventText,
    saveButton
  );

  $('.container').append(row);


   /* var row = $("<div>");
    var timeTag = $("<p>");
    var eventText = $("<TextArea>");
    var saveButton = $("<button>");

    timeTag.text("9am");
    $('.container').append(row).append(timeTag).append(eventText).append(saveButton); */

  }

