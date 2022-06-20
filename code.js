var secondsInAMinute = 60,
    minutesInAnHour = 60,
    hoursInADay = 24,
    daysInAYear = 364.25;
var days, hours, minutes, seconds, age;

function calculateMyAge() {
  
  age = document.getElementById('age').value;
 // var validateAge = isNumber(age);
  if(age == null || age == '') {
    document.getElementById('error').style.opacity = '1';
    document.getElementById('error').innerHTML = 'Please enter your age!';
    
    setTimeout(function() {
      document.getElementById('error').style.opacity= '0';
    }, 3000);
    
  }
  
  days = age * daysInAYear;
  document.getElementById('days').innerHTML = "you are" + days + " days  old today";
  

  
	document.getElementById('test').innerHTML = age;
  
}

