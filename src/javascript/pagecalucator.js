'use strict';

console.log('pagecalucator.js Loaded!')

let highest, lowest, calu;

function calculate() {
     console.log('Clicked!')
     let Error = 'Must put a number for inputs.'
     let calclatehtml = getElement('id', 'OutPutDay');
     let daysCountString = getElement('id', 'DaysToRead').value;
     let pageCountString = getElement('id', 'PageCount').value;
     let daysCount = parseFloat(daysCountString)
     let pageCount = parseFloat(pageCountString)
     if (!daysCount || !pageCount || isNaN(daysCount) || isNaN(pageCount)) {
          console.error(Error)
          return window.alert(Error);
     }
     let calWithDes = pageCount / daysCount;
     console.log(calWithDes)
     if (calWithDes <= 1) {
          calu = 1;
     } else {
          calu = calWithDes.toFixed(0);
     }
     let cal = `${calu} Pages a day`
     console.log(calu)
     console.log(cal)
     calclatehtml.innerHTML = cal;
}