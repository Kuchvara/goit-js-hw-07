// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div >

const counterRef = document.querySelector('span#value');
const incrementBtnRef = document.querySelector('div#counter').lastElementChild;
const decrementBtnRef = document.querySelector('div#counter').firstElementChild;


const increment = () => {
counterRef.textContent = Number(counterRef.textContent) + 1;
let  counterValue = counterRef.textContent;
console.log(counterValue);
}


const decrement = () => {
counterRef.textContent = Number(counterRef.textContent) - 1;
let  counterValue = counterRef.textContent;
console.log(counterValue);
}

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);

