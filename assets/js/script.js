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
    $(saveButton).on('click', function(e){
      var targetText = $(e.target).prev().val();
      var eventObj = { id: $(eventText).attr('id'), text: targetText }
   
      console.log(targetText);
      if(localStorage.getItem("event") === null) {
        // Create an array of objects
        var eventArray = [];
        // Push my object to that array
        eventArray.push(eventObj);
        // Set localStorage to my array
        localStorage.setItem('event', JSON.stringify(eventArray));
        // If it exists
      } else {
        // Create an array
        var eventArray = [];
        // Get my localStorage which must be parsed 
        eventArray = JSON.parse(localStorage.getItem('event'));
        // Push my object to newly created array which is a mirror of localStorage
        eventArray.push(eventObj);
        // Push my Array of objects to localStorage
        localStorage.setItem('event', JSON.stringify(eventArray));
      }  
    });

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

  

