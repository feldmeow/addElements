'use strict';

// конструктор
function DomElement() {
  this.selector = prompt('Введите селектор', '.fff');
  this.height = prompt('Высота', '500') + 'px'
  this.width = prompt('Ширина', '1000') + 'px';
  this.bg = prompt('Цвет блока? (green, red, grey, etc.)', 'grey');
  this.fontsize = prompt('Размер шрифта', '33') + 'px'
  this.createElement = function () {
    if (this.selector[0] === '.') {
      this.elem = document.createElement('div');
      this.elem.className = this.selector.slice(1);
      this.elem.innerHTML = 'DIV'
    } else {
      this.elem = document.createElement('p');
      this.elem.id = this.selector.slice(1);
      this.elem.innerHTML = 'PARAGRAPH'
    }
    this.elem.style.backgroundColor = this.bg;
    this.elem.style.width = this.width;
    this.elem.style.height = this.height;
    this.elem.style.fontSize = this.fontsize;
    document.body.append(this.elem);
  };

};
// наследование
let NewElem = new DomElement();
// вызов 
NewElem.createElement();
