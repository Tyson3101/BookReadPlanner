'use strict';

console.log('schedule.js Loaded!')

function calculate() {
     console.log('Clicked!')
     let done = false;
     let Error = 'Must put a number for inputs.'
     let scedhue = getElement('id', 'Schedule');
     let daysCountString = getElement('id', 'DaysToRead').value;
     let pageCountString = getElement('id', 'PageCount').value;
     let pagesADayString = getElement('id', 'PagesADay').value;
     let daysCount = parseFloat(daysCountString)
     let pageCount = parseFloat(pageCountString)
     let pagesADay = parseFloat(pagesADayString)
     if (!daysCount || !pageCount || !pagesADay || isNaN(daysCount) || isNaN(!pageCount) || isNaN(!pagesADay)) {
          console.error(Error)
          return window.alert(Error);
     }
     let scheduleInterval = setInterval(schedule)

     function schedule() {
          if (done) {
               let check = pageCount -= pagesADay;
               if (check <= 0) {
                    pageCount = 0;
                    console.log('Pages done!')
                    console.log(`${pageCount} pages with ${daysCount} day(s) to go`)
                    scedhue.innerHTML += `${pageCount} pages with ${daysCount} day(s) to go`
                    done = false;
                    return clearInterval(scheduleInterval)
               }
               if (daysCount <= 0) {
                    console.log('Days done!')
                    done = false;
                    return clearInterval(scheduleInterval)
               }
               scedhue.innerHTML += `${pageCount} pages with ${daysCount} day(s) to go<br>`
               console.log(`${pageCount} pages with ${daysCount} day(s) to go`)
               daysCount -= 1;
          } else {
               done = true;
               scedhue.innerHTML = null;
               daysCount = parseInt(daysCountString)
               pageCount = parseInt(pageCountString)
               pagesADay = parseInt(pagesADayString)
          }
     }
}