// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const allCategoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${allCategoriesRef.length} категории.`);

const categoriesData = allCategoriesRef.forEach( item => {
    const itemNameRef = item.querySelector('h2');
    const itemContentRef = item.querySelectorAll('li');
    return console.log(`Категория: ${itemNameRef.textContent}\r\nКоличество элементов: ${itemContentRef.length}`);
});
