const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");

// add a click eventlistener on mode switch
modeSwitch.addEventListener("click",()=>{
    //toggle the "dark" class on the body element
     body.classList.toggle("dark");
    
    //  Check if the "dark" class on the body element 
     const isDarkMode = body.classList.contains("dark");
     console.log(is)
     
    // Change text of mode-switch based on "dark" class presence
    modeSwitch.textContent = isDarkMode?"Light Mode" : "Dark Mode";

    // set LocalStorage "mode" item based on "dark" class presence
    localStorage.setItem("mode",isDarkMode?"Dark Mode":"Light Mode");
})

const updateTime = () => {
  //  get current time and calculate degrees for clock hands
  let date = new Date();
  let secToDeg = (date.getSeconds() / 60) * 360;
  let minuteToDeg = (date.getMinutes() / 60) * 360;
  let hourToDeg = (date.getHours() / 12) * 360;
  // Rotate the clock hands to the appropriate degree based on the current line
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteToDeg}deg)`;
  hourHand.style.transform = `rotate(${hourToDeg}deg)`;
};

// call updateTime to set clock hands every second
setInterval(updateTime, 1000);
updateTime();
