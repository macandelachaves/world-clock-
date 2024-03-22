function updateTime() {
  let buenosAiresElement = document.querySelector("#buenos-aires");
  if (buenosAiresElement) {
    let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");
    let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
    let buenosAiresMoment = moment().tz("America/Buenos_Aires");
    let buenosAiresCurrentTime = buenosAiresMoment.format(
      "H:mm:ss [<small>]A[</small>]"
    );
    let buenosAiresCurrentDate = buenosAiresMoment.format("MMMM YY YYYY");
    buenosAiresTimeElement.innerHTML = buenosAiresCurrentTime;
    buenosAiresDateElement.innerHTML = buenosAiresCurrentDate;
  }

  let parisElement = document.querySelector("#lisboa");
  if (parisElement) {
    let parisTimeElement = parisElement.querySelector(".time");
    let parisDateElement = parisElement.querySelector(".date");
    let parisMoment = moment().tz("Portugal");
    let parisCurrentTime = parisMoment.format("H:mm:ss [<small>]A[</small>]");
    let parisCurrentDate = parisMoment.format("MMMM YY YYYY");
    parisTimeElement.innerHTML = parisCurrentTime;
    parisDateElement.innerHTML = parisCurrentDate;
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityCurrentMoment = moment().tz(cityTimeZone);
  let cityTimeSection = document.querySelector("#cities");
  cityTimeSection.innerHTML = `
  
        <div class="city" >
          <div>
            <h2>${cityTimeZone}</h2>
            <div class="date"> ${cityCurrentMoment.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time"> ${cityCurrentMoment.format(
            "HH:mm:ss"
          )} <small>${cityCurrentMoment.format("A")}</small></div>
        </div>`;

  <a ref="index.html">Initial page</a>;
}

let citySelected = document.querySelector("#countries");
citySelected.addEventListener("change", updateCity);
