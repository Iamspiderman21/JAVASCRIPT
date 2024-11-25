 const months = [

    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Agust',
    'September',
    'Otober',
    'Noviembre',
    'December',
 ];

 const weeksdays = [

    'Sundat',
    'Monday',
    'Tuesday ',
    'Wednesday',
    'Thursay',
    'Friday',
    'Saturday',
 ];

 const tour = document.querySelector('.tour');
 const deadline = document.querySelector('.deadline');
 const items = document.querySelectorAll('.deadline-format h4');

 let tempDate = new Date();
 let tempYear = tempDate.getFullYear();
 let tempMonth = tempDate.getMonth();
 let tempDay = tempDate.getDate();

 const futureDate = new Date(tempYear, tempMonth, tempDay + 0, 12, 45, 30, 10);

 const year = futureDate.getFullYear();
 const hours = futureDate.getHours();
 const minutes = futureDate.getMinutes();
 
 let month = futureDate.getMonth();
 month = months[month];
 const weekday = weeksdays[futureDate.getDay()];
 const date = futureDate.getDate();

 tour.textContnet = `tour ends on ${weekday}, ${date} ${month} ${year} 
 ${hours}: ${minutes}am`;

//  future time in ms

const futureTime = futureDate.getTime();
function getRemainingTime () {
    const today = new Date().getTime();
    
    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms
    const oneDay = 24 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
    

    // set valvues array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function(item, index){
        item.innerHTML = format (values [index]);
    });

    if(t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class = "expired" > Lo sentimos,
        los boletos no están disponibles para este tour </h4>`;
    }
}
// coutdown
getRemainingTime();