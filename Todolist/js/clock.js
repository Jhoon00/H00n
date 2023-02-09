const clock = document.querySelector("h2#clock");
const days = document.querySelector("h2#days");

function getClock() {
    const date = new Date();
    const years = String(date.getFullYear());
    const months = String(date.getMonth()+1).padStart(2,"0");
    const dates = String(date.getDate()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    days.innerText = `${years}-${months}-${dates}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);