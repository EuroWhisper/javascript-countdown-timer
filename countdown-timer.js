//Date of event to count down until.
var eventDate = new Date(2017, 1, 21, 19, 37, 0, 0);

//Displays time of the event.
document.getElementById("eventTime").innerHTML = "Event time: " + eventDate.toLocaleString();

//Callback function for setInterval() that calculates 
//and displays time left.
function displayTimer() {

  var now = new Date();
  var timeDifference = (eventDate - now);
  
  //If event hasn't started yet.
  if(timeDifference > 0) {
    //Milliseconds in a: day, hour, minute, second so as to avoi "magic numbers"
    //when calculating days/hours/minutes/seconds left.
    var msInDay = (1000 * 60 * 60 * 24);
    var msInHour = (1000 * 60 * 60);
    var msInMinute = (1000 * 60);
    var msInSecond = 1000;

    //Calculates days/hours/minutes/seconds left.
    var daysLeft = Math.floor(timeDifference / msInDay);
    var hoursLeft = Math.floor(timeDifference % msInDay / msInHour);
    var minutesLeft = Math.floor(timeDifference %  msInHour / msInMinute);
    var secondsLeft = Math.floor(timeDifference % msInMinute / msInSecond);

    //Displays time left.
    document.getElementById("timeLeft").innerHTML = daysLeft + " day(s) " + hoursLeft + " hour(s) " + minutesLeft + " minute(s) " + secondsLeft + " second(s)";
  
  //If event has started.
  } else {
  	//Inform user that event has started.
  	document.getElementById("timeLeft").innerHTML = "The event has started!";
  }
}

//Start the countdown timer.
setInterval(displayTimer, 1000);