const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ]


  const giveaway = document.getElementById("time");
  const count =document.getElementById("count");
  const items = document.querySelectorAll('.deadline-format h3');


  let tmpdate = new Date();
  let tmpyear = tmpdate.getFullYear();
  let tmpmonth =  tmpdate.getMonth();
  let tmpday = tmpdate.getDate();



  const futuredate = new Date(tmpyear , tmpmonth , tmpday+17 , 12 , 30 , 0 );

  const year = futuredate.getFullYear();
 const hours = futuredate.getHours();
 const minutes = futuredate.getMinutes();
 let month = futuredate.getMonth();
 month = months[month];
 const laDate = futuredate.getDate();


 const weekday = weekdays[futuredate.getDay()];

 giveaway.textContent = `giveaway ends on ${weekday}, ${laDate} ${month} ${year} ${hours}:${minutes} am`;

 const futureTime = futuredate.getTime();


 function getRemaindingTime() {
   const today = new Date().getTime();
 
   const t = futureTime - today;
   // 1s = 1000ms
   // 1m = 60s
   // 1hr = 60m
   // 1d = 24hr
   // values in miliseconds
   const oneDay = 24 * 60 * 60 * 1000;
   const oneHour = 60 * 60 * 1000;
   const oneMinute = 60 * 1000;
   // calculate all values
   let days = t / oneDay;
   days = Math.floor(days);
   let hours = Math.floor((t % oneDay) / oneHour);
   let minutes = Math.floor((t % oneHour) / oneMinute);
   let seconds = Math.floor((t % oneMinute) / 1000);
 
   // set values array
   const values = [days, hours, minutes, seconds];


   function format(item) {
     if (item < 10) {
       return (item = `0${item}`);
     }
     return item;
   }

 
   items.forEach(function (item, index) {
     item.innerHTML = format(values[index]);
   });
 
   if (t < 0) {
     clearInterval(countdown);
    count.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
   }
 }
  
 // countdown;
 let countdown = setInterval(getRemaindingTime, 1000);
 //set initial values
 getRemaindingTime();
 