//Kurzform um etwas auf die Konsole zu schreiben
function clg(toLog) {
    console.log(toLog);
}

let currentIndex = 1;
let nextIndex = 2;

let button = document.querySelector("button");
button.addEventListener("click", function(e) {
  let tCon = e.target.textContent;
  let dateToSet = new Date();
  //letzten Index ermitteln
  if (tCon === "Wake Up!") {
    e.target.textContent = "Sleep!";
    let dstart = document.getElementById(`dstop${currentIndex}`);
    dstart.valueAsDate = new Date();
    document.getElementById(`tstop${currentIndex}`).value = dateToSet.toLocaleTimeString('de-DE');
    let div = document.createElement("div");
    div.id = `ds${nextIndex}`;
    div.innerHTML = `    
      Start
      <input type="date" id="dstart${nextIndex}" />
      <input type="time" id="tstart${nextIndex}" value="00:00:00" />
      Stop
      <input type="date" id="dstop${nextIndex}" />
      <input type="time" id="tstop${nextIndex}" value="00:00:00" />       
    `;
    document.querySelector("body").appendChild(div);
    document.querySelector(`div#ds${nextIndex}`).appendChild(document.querySelector("button"));
    currentIndex = currentIndex + 1;
    nextIndex = nextIndex + 1;
  } else {
    e.target.textContent = "Wake Up!";
    document.getElementById(`dstart${currentIndex}`).valueAsDate = dateToSet;
    document.getElementById(`tstart${currentIndex}`).value = dateToSet.toLocaleTimeString('de-DE');
  }
});