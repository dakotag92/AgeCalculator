let dayValue = document.getElementById("day");
let monthValue = document.getElementById("month");
let yearValue = document.getElementById("year");
let resultsYear = document.getElementById("resultsYear");
let resultsMonth = document.getElementById("resultsMonth");
let resultsDay = document.getElementById("resultsDay");

let currentDate = new Date();

let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1; // months are 0-indexed in JS
let currentYear = currentDate.getFullYear();

const btn = document.getElementById("arrow");

btn.addEventListener("click", () => {
  let birthDay = Number(dayValue.value);
  let birthMonth = Number(monthValue.value);
  let birthYear = Number(yearValue.value);

  let ageYears = currentYear - birthYear;

  // If the current month is less than the birth month or
  // if the current month is the same as the birth month but the current day is less than the birth day, subtract 1 from the age.
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    ageYears--;
  }

  let ageMonths = currentMonth - birthMonth;
  if (currentDay < birthDay) {
    ageMonths--;
  }
  if (ageMonths < 0) {
    ageMonths += 12;
  }

  let ageDays = currentDay - birthDay;
  if (ageDays < 0) {
    let daysInMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    ageDays += daysInMonth;
  }

  resultsYear.innerHTML = ageYears;
  resultsMonth.innerHTML = ageMonths;
  resultsDay.innerHTML = ageDays;
});
