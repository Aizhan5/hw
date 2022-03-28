document.addEventListener ("DOMContentLoaded", ()=> {
    let bulb = document.querySelector("#bulb");

    function turnOff() {
        bulb.src = "./media/lights_off.png";
      }
      
      function turnOn() {
        bulb.src = "./media/lights_on.png";
      }
      document.getElementById('btn1').addEventListener('click', turnOff);
      document.getElementById('btn2').addEventListener('click', turnOn);
})