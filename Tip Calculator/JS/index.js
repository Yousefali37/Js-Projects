var btn = document.getElementById("calc");
var billAmount = document.getElementById("billAmount");
var guestsNum = document.getElementById("guestsNum");
var service = document.getElementById("serviceQuality");
var tipresult = document.getElementById("tipresult");
var resultDiv = document.getElementById("resultDiv");

btn.addEventListener("click", (ev) => {

    ev.preventDefault();

    if (billAmount.value === '' || guestsNum.value === '' || guestsNum.value <= 0) {
        tipresult.innerText = "Please enter valid amounts for bill and number of guests.";
        return;
    }


    let serviceQuality;

    switch (service.value) {
        case "30% - Outstanding":
            serviceQuality = 0.30;
            break;
        case "20% - Good":
            serviceQuality = 0.20;
            break;
        case "15% - it was ok":
            serviceQuality = 0.15;
            break;
        case "10% - bad":
            serviceQuality = 0.10;
            break;
        case "5% - terrible":
            serviceQuality = 0.05;
            break;
        default:
            serviceQuality = 0;
            break;
    }

    let totalTip = billAmount.value * serviceQuality;
    let tipPerGuest = totalTip / guestsNum.value;
    let totalPerGuest = (billAmount.value / guestsNum.value) + tipPerGuest;

    tipresult.innerText = `Each guest should pay: $${totalPerGuest.toFixed(2)} (including tip)`;
});
