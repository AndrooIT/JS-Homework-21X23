// Create a function that returns number of days till Friday
function dayToFriday() {
    let today = new Date();
    let todayDayNumber=today.getDay();
    todayDayNumber=5;
    let countedDays=()=>(5-todayDayNumber)>=0?5-todayDayNumber:6;
    return console.log("There is "+ countedDays()+ " days to this wonderfull friday evening");
}
dayToFriday();