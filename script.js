'use strict';

// конструктор
function DomElement() {
  this.selector = 'div'
  this.height = '100px'
  this.width = '100px'
  this.bg = 'green'
};
DomElement.prototype.createElement = function () {
  this.elem = document.createElement(this.selector);
  this.elem.style.backgroundColor = this.bg;
  this.elem.style.width = this.width;
  this.elem.style.height = this.height;
  this.elem.style.position = 'absolute';
  document.body.append(this.elem);

};
// наследование
let newElem = new DomElement();
// вызов 
document.addEventListener('DOMContentLoaded', newElem.createElement());
// newElem.createElement();
let leftPos = 0;
let topPos = 0;
function posPlus(pos) {
  pos = pos + 10;
  return pos;
}
function posDown(pos) {
  pos = pos - 10
}
document.addEventListener('keydown', function (event) {

  function move() {
    if (event.code == 'ArrowRight') {
      leftPos = leftPos + 10;
      newElem.elem.style.left = `${leftPos}px`;
      console.log(`${leftPos}px`);
    } else if (event.code == 'ArrowLeft') {
      leftPos = leftPos - 10;
      newElem.elem.style.left = `${leftPos}px`;
      console.log(`${leftPos}px`);
    } else if (event.code == 'ArrowUp') {
      topPos = topPos - 10;
      newElem.elem.style.top = `${topPos}px`;
      console.log(`${topPos}px`);
    } else if (event.code == 'ArrowDown') {
      topPos = topPos + 10;
      newElem.elem.style.top = `${topPos}px`;
      console.log(`${topPos}px`);
    }
  };
  move()
});