//Get current time
var currentTime = $('#currentDay');

//Get Current hour
var currentHour = moment().format('H');

//Create array that holds each <p> tag hour
var timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

setInterval(function() {
    currentTime.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }, 1000);

  var startingHour = 9;

  for (var i = 0; i < timeArray.length; i++) {
    var row = $('<div>').addClass('row time-block');
    var timeTag = $('<p>').text(timeArray[i]).addClass('hour col-2');
    var eventText = $("<textarea>").addClass('description col-8').attr('id', i);
    var saveButton = $("<button>").text("save").addClass('saveBtn col-2');

    if(startingHour < currentHour) {
      $(eventText).addClass('past');
    } else if(startingHour > currentHour) {
      $(eventText).addClass('future')
    } else {
      $(eventText).addClass('present');
    }

    startingHour++;

  row.append(
    timeTag,
    eventText,
    saveButton
  );

  $('.container').append(row);
  }

  var number = 0;
  // Event listener for testing
  $('saveBtn').on('click',function(){    
   number++;
   console.log(number);
});

