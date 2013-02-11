var daysInMonth = function (year, month) {
  return new Date(year, month, 0).getDate();
}

var setTimer = function () {
  var now = new Date();

  //milliseconds left to my birthday
  var milliSecondsLeft = birthdate.getTime() - now.getTime();
  //seconds left to my birthday
  var seconds = Math.floor(milliSecondsLeft / 1000);

  var milliseconds = birthdate.getMilliseconds() - now.getMilliseconds();

  if(milliSecondsLeft <= 0) {
    currentYear = (new Date()).getFullYear();

    //redefine birthday to next year if it has already passed by
    //birthdate.setFullYear(birthdate.getFullYear() + 1);
    birthdate = new Date(currentYear + 1, birthday.month, birthday.day);
    var milliSecondsLeft = birthdate.getTime() - now.getTime();
    var seconds = Math.floor(milliSecondsLeft / 1000);
    var milliseconds = birthdate.getMilliseconds() - now.getMilliseconds();
  }

  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  
  /* keep in mind the variable month issue */
  var days = Math.floor(hours / 24);

  //find the no of months
  var currMonth = now.getMonth();
  var birthMonth = birthdate.getMonth();

  var months = 0;

  if(currMonth != birthMonth) {
    for(var i = currMonth/*7*/; i % 12 != birthMonth; i++) {
      months++;
      days -= daysInMonth(currentYear + i / 12, i % 12);
    }
  } else {
    if(now.getDate() > birthdate.getDate()) {
      months = 11;
      if(currMonth > 1) {
        var temp = currentYear + 1;
      } else {
        var temp = currentYear;
      }
      days -= 365 - daysInMonth(currentYear, currMonth);
    }
  }

  if(days < 0) {
    months--;
    i = (i - 1) % 12;
    days += daysInMonth(currentYear + i / 12, i % 12);
  }

  //evalute other counts
  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  //log the timer
  //console.log("Wait for " + months + " months, " + days + " days, " + hours +  " hours, " + minutes + " minutes, " + seconds + " seconds" + " till my birthday.");

  var timerStr = "Wait for " + months + " months, " + days + " days, " + hours +  " hours, " + minutes + " minutes, " + seconds + " seconds" + " till my birthday.";
  $('.timer').html("<p>" + timerStr + "</p>");
}

$(function() {
  birthday = {
    month : 6,
    day : 2
  }
  currentYear = (new Date()).getFullYear();
  //defined globally
  birthdate = new Date(currentYear, birthday.month, birthday.day);
  window.setInterval(setTimer, 1000);
});