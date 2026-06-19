const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

const grid = document.getElementById("days-grid");

const homeView = document.getElementById("home-view");
const dayView = document.getElementById("day-view");

const dayTitle = document.getElementById("day-title");
const notes = document.getElementById("notes");

const backBtn = document.getElementById("back-btn");
const saveBtn = document.getElementById("save-btn");

let selectedDay = null;

days.forEach(day => {

    const btn = document.createElement("button");

    btn.className = "day-button";
    btn.textContent = day;

    btn.addEventListener("click", () => {
        openDay(day);
    });

    grid.appendChild(btn);

});

function openDay(day) {

    selectedDay = day;

    dayTitle.textContent = day;

    notes.value =
        localStorage.getItem(day) || "";

    homeView.classList.add("hidden");
    dayView.classList.remove("hidden");

}

backBtn.addEventListener("click", () => {

    homeView.classList.remove("hidden");
    dayView.classList.add("hidden");

});

saveBtn.addEventListener("click", () => {

    localStorage.setItem(
        selectedDay,
        notes.value
    );

    alert("Saved!");

});