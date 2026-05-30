//    function get(){
//         alert("salam islam")
//   }
//  //  setTimeout(get, 3000)
//  let time = setInterval( get, 1000)
//   setInterval(() =>{
//      clearInterval(time)
//   }, 10000)
 const timer = document.getElementById("timer")
 const startBtn = document.getElementById("start")
 const stopBtn = document.getElementById("stop")
 const resetBtn = document.getElementById("reset")

 let seconds = "00"
 let minutes = "00"
 let hours = "00"
 let intervalId
  
 function updateTimer(){
     seconds++;
     timer.innerHTML = ` ${hours}:${minutes}:${seconds}`
     if(seconds == "60" ) {
         seconds = "00"
        minutes++;
     }
     else if (minutes == "60") {
        minutes = "00"
         hours++
     } 
 }
   function startTimer() {
     intervalId = setInterval(updateTimer, 1000)
     startBtn.disabled = true
      stopBtn.disabled = false
 }
 function stopTimer() {
     clearInterval(intervalId)
     startBtn.disabled = false
     stopBtn.disabled = true
 }
 function tokto() {
    timer.innerHTML = clearInterval(updateTimer, timer)
 }
 startBtn.onclick = startTimer
 stopBtn.onclick = stopTimer
 resetBtn.onclick = tokto
 