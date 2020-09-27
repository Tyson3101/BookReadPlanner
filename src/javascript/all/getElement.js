'use strict';

console.log('getElement.js Loaded!')

function getElement(method, element) {
     let Error = 'Paramaters must be a string or a vaild method, Or the element was not found.\n[id, class]';
     let methods = ['class', 'id', 'tag']
     if (typeof method !== 'string' || typeof element !== 'string' || !methods.includes(method.toLowerCase())) {
          throw TypeError(Error)
     } else if (method.toLowerCase() === 'id') {
          if (!document.getElementById(element)) return TypeError(Error);
          console.log(element + ' found!');
          return document.getElementById(element);
     } else if (method.toLowerCase() === 'class') {
          if (!document.getElementById(element)) return TypeError(Error);
          console.log(element + ' found!');
          return document.getElementsByClassName(element);
     } else if (method.toLowerCase() === 'tag') {
          if (!document.getElementById(element)) return TypeError(Error);
          console.log(element + ' found!');
          return document.getElementsByTagName(element);
     } else {
          throw TypeError(Error);
     }
}