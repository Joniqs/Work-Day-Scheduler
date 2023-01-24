//Get current time
var currentTime = $('#currentDay');

//Get Current hour
var currentHour = moment().format('H');

//Create array that holds each <p> tag hour
var timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

setInterval(function() {
    currentTime.text(moment().format('MMMM Do YYYY'));
  }, 1000);

  var startingHour = 9;

  for (var i = 0; i < timeArray.length; i++) {
    var row = $('<div>').addClass('row time-block');
    var timeTag = $('<p>').text(timeArray[i]).addClass('hour col-2');
    var eventText = $("<textarea>").addClass('description col-8').attr('data-slot', i);
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

$('.saveBtn').on('click', function(){
  // TEXT CONTENT OF SIBLING AND ITS WORKING
  var targetText = $(this).siblings('.description').val();
  // SELECT MY TEXTAREA AND IS WORKING !!!
  var targetId = $(this).siblings(".description").attr('data-slot');
  console.log(targetId);
  var eventObj = { id: targetId, text: targetText }

  console.log(targetText);
  if(localStorage.getItem('event') === null) {
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
    // Show it my textarea
  }  
});

function getItems() {
  // Check if localStorage is empty
  if(localStorage.getItem("event") !== null) {
      // Get my localStorage which must be parsed
      var eventText = JSON.parse(localStorage.getItem('event'));
      // Sorts the values ​​from the highest score (new array)
      var sortedArray = eventText.sort((obj1, obj2) => {
          return obj1.id - obj2.id;
      });
      console.log(sortedArray);
      // For each sorted element
      sortedArray.forEach(element => {
        $('[data-slot=' + element.id + ']').val(element.text);
      });
  }
}

$(window).on('load', getItems());




  

