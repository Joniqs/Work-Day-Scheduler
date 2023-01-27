//Get element where I display current day
var currentTime = $('#currentDay');

//Get Current hour
var currentHour = moment().format('H');

//Update my date every second
setInterval(function() {
    currentTime.text(moment().format('dddd, MMMM Do '));
  }, 1000);

//First timeblock which is 9am
var startingHour = 9;
//Last timeblock - index so I set this value to 18
var endingHour = 18;

//Loop through every timeblock 
  for (var i = startingHour; i < endingHour; i++) {
    //Select my textarea
    var eventText = $("#hour-" + startingHour);
    //Check time and add class .present .past or .future depend on current hour
    checkHour();
    //Increment start hour so we can do the same for every time block
    startingHour++;
}

//Function that changes color of textarea depend on current hour
function checkHour() {
  if(startingHour < currentHour) {
    $(eventText).addClass('past');
  } else if(startingHour > currentHour) {
    $(eventText).addClass('future')
  } else {
    $(eventText).addClass('present');
  }
}

//when click save button, save it to local storage
$('.saveBtn').on('click', function(){
  // grab textarea text content
  var targetText = $(this).siblings('.description').val();
  // grab my textarea id value
  var targetId = $(this).siblings(".description").attr('id');
  // Push it to localstorage
  localStorage.setItem(targetId, targetText)
});

//Function that gets items from my localstorage
function getItems() {
  //Array of timeblocks
  var timeblocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  //For every timeblock set text to localstorage value
  timeblocks.forEach(element => {
    $('#hour-' + element + '.description').val(localStorage.getItem('hour-' + element));
  });
}
//Get items from localstorage for each timeblock
getItems();





  

