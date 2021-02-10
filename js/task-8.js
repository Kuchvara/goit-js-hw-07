// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const controlsRef = document.querySelector('#controls');
const boxesRef = document.querySelector('#boxes')
const inputNumberRef = controlsRef.querySelector('input[type="number"]')
const renderBtnRef = controlsRef.querySelector('button[data-action="render"]')
const destroyBtnRef = controlsRef.querySelector('button[data-action="destroy"]')


function createBoxes(amount) {
    amount = Number(inputNumberRef.value);
    for (let i = 0; i < amount; i += 1)
{boxesRef.insertAdjacentHTML("beforeend", `<div style="width: ${30 + (10 * i)}px;
 height: ${30 + (10 * i)}px; background-color: ${get_rand_color()};"></div>`);
    }
};

function destroyBoxes() {
    inputNumberRef.value = null;
    boxesRef.innerHTML = null;
}

renderBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

// ==================================================
function get_rand_color()
{
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}