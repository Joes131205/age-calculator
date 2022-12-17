const dateEl = document.getElementById("dateInput")
const yearsEl = document.getElementById("years")
const monthsEl = document.getElementById("months")
const daysEl = document.getElementById("days")

function calculateAge() {
    let input = dateEl.value
    let inputDay = new Date(input)
    let now = new Date()

    //Counts Months
    let inputMonth = inputDay.getMonth()
    let nowMonth = now.getMonth()
    
    let monthDifference = nowMonth - inputMonth
    //Counts Year
    let inputYear = inputDay.getFullYear()
    let nowYear = now.getFullYear()

    let yearDifference = nowYear - inputYear

    //Counts Dates
    let inputDate = inputDay.getDate()
    let nowDate = now.getDate()

    let dateDifference = nowDate - inputDate

    // Check if the current month and day are before the birth month and day
    if (nowMonth < inputMonth || (nowMonth === inputMonth && nowDate < inputDate)) {
        yearDifference -= 1;
        monthDifference += 12;
    }
    // Check if the current day is before the birth day
    if (nowDate < inputDate) {
        monthDifference -= 1;
        dateDifference += new Date(nowYear, inputMonth + 1, 0).getDate();
    }

    yearsEl.textContent = yearDifference
    monthsEl.textContent = monthDifference
    daysEl.textContent = dateDifference
}