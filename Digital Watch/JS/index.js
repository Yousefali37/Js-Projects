var watch = document.getElementById("watch");

const today = new Date();
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getAMPM() {

    if (today.getHours >= 12) {
        return `AM`;
    }
    else{
        return `PM`;
    }
}

watch.innerText = `${dayNames[today.getDay()]} ${today.getHours()%12||12} : ${today.getMinutes()} : ${getAMPM()}`;