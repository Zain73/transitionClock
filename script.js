function hoursNeedlePosition(hours) {
    if (hours == 12) {
        return -90;
    }

    else {
        let angle = -60;
        let standardHour = 1;

        while (standardHour != hours) {
            standardHour++;
            angle+=30;
        }

        return angle;
    }
}

function minutesAndSecondsNeedlePosition(mins) {

        let angle = -90;
        let standardMin = 0;

        while (standardMin != mins) {
            standardMin++;
            angle+=6;
        }

        return angle;
}




//SIMPLE NON TRANSITION CLOCK

setInterval(AdjustNeedles, 1000);

function AdjustNeedles() {
    
  var today = new Date();
  var h = today.getHours();
  if (h > 12) {h-=12;};
  var m = today.getMinutes();
  var s = today.getSeconds();
  
  var hoursAngle = hoursNeedlePosition(h) + (m * 0.5);
  var minutesAngle = minutesAndSecondsNeedlePosition(m);
  var secondsAngle = minutesAndSecondsNeedlePosition(s);

  document.getElementById("time").innerText = `${h}:${m}:${s}`;

  document.getElementsByClassName("seconds")[0].style.transform = `translate(0%, -50%) rotate(${secondsAngle}deg)`;
  document.getElementsByClassName("minutes")[0].style.transform = `translate(0%, -50%) rotate(${minutesAngle}deg)`;
  document.getElementsByClassName("hours")[0].style.transform = `translate(0%, -50%) rotate(${hoursAngle}deg)`;

}




//TRANSITION CLOCK
setInterval(AdjustNeedles, 10);

function AdjustNeedles() {

  var today = new Date();
  var h = today.getHours();
  if (h > 12) {h-=12;};
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ms = today.getMilliseconds();

  var secondsAngle = minutesAndSecondsNeedlePosition(s) + ((Math.round((ms/10)*10)/10) * 0.06);
  var minutesAngle = minutesAndSecondsNeedlePosition(m) + (0.1 * s);
  var hoursAngle = hoursNeedlePosition(h) + (m * 0.5);

  document.getElementById("time").innerText = `${h}:${m}:${s}`;

  document.getElementsByClassName("seconds")[0].style.transform = `translate(0%, -50%) rotate(${secondsAngle}deg)`;
  document.getElementsByClassName("minutes")[0].style.transform = `translate(0%, -50%) rotate(${minutesAngle}deg)`;
  document.getElementsByClassName("hours")[0].style.transform = `translate(0%, -50%) rotate(${hoursAngle}deg)`;
}






/*var minutesAngle; var hoursAngle;
var secondsAngle; var m; var s; var h; var multipleOfSix;var today;

 setInterval(AdjustNeedles, 10);

function AdjustNeedles() {

  today = new Date();  
  if (s === today.getSeconds()) {
      secondsAngle+=0.06;
  }  
  s = today.getSeconds();
  if (h===undefined) {
      secondsAngle = minutesAndSecondsNeedlePosition(s);
  }
  h = today.getHours();
  if (h > 12) {h-=12;};
  m = today.getMinutes();

  document.getElementById("time").innerText = `${h}:${m}:${s}`;
  hoursAngle = hoursNeedlePosition(h) + (m * 0.5);
  minutesAngle = minutesAndSecondsNeedlePosition(m);

  document.getElementsByClassName("seconds")[0].style.transform = `translate(0%, -50%) rotate(${secondsAngle}deg)`;
  document.getElementsByClassName("minutes")[0].style.transform = `translate(0%, -50%) rotate(${minutesAngle}deg)`;
  document.getElementsByClassName("hours")[0].style.transform = `translate(0%, -50%) rotate(${hoursAngle}deg)`;

}*/
