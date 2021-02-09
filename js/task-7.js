// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const sizeControlInputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const fontSizeChange = () => textRef.style.fontSize = `${Number(sizeControlInputRef.value)}px`;

sizeControlInputRef.addEventListener('input', fontSizeChange);

