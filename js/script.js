"use strict"
//Урок №1
console.log('Hello word!');
//Урок №2
/*Правило синтаксису JS
Все що ми відкриваємо повино бути закрите, а те що закрите - відкритим (лапки і дужки) і обо'язково стояти ;
Пісял кожної інструкції обо'язково ставити ;. 
Якщо кожну інструкцію писати в рядок обо'язково ставити ;, якщо з нового рядка можна не ставити ;. Але краще завжди ставити ;
Якщо писати кожну інструкцію в рядок без ; то буде помилка */

//Варіант 1
console.log('Вивчаємо JS')/*не має ;*/

//Варіант 2
console.log('JS')/*не має ;*/
console.log('Вивчаємо')/*не має ;*/

//Варіант 3
//console.log('Вивчаємо') console.log('JS')/*якщо писати в одному рядку між інструкціями потрібно ставити ;*/

//Варіант 4
//console.log('Вивчаємо);/*Не закриті лапки*/
console.log('JS')

//Урок 3
/*Змінна це контейнер, який може зберігати якусь інфо.
 Змінна має ключові слова. Ключове слово let. let - об'являє змінну.
 Після об'яви змінної , потрібно її назвати. Що це?
 Ім'я повинно бути латинськими буквами, цифри, символи $ і _, не дозволяється починати з цифри і не може
 дорівнювати із ключових слів, стиль написання lowerCamelCase (кожне слово крім першого починається з великої літери)
 Наприклад let userAge;
 Не може бути дві однакові змінні в одній видимості.
 Змінній можна привласнити значення відразу в момент об'яви.*/
//let userAge = 25; нехай вік користувача буде 25років
//console.log(userAge);
//або
/*let userAge;
userAge = 15;
console.log(userAge);*/

//Щоб не писати кожен раз змінну, дозволяється робити так:
//але краще писати завжди let змінну
/*let myName = 'Тетяна',
   myAge = 37,
   myMessage = 'Живи, а працюй у вільний час';*/
//console.log(myName, myAge, myMessage);
/*console.log(myName);
console.log(myAge);
console.log(myMessage);*/



//Дві різні змінні
/*let userAge = 35;
let userage = 36;*/

//Можна змінювати значення
/*let userAge = 25;
userAge = 45;
console.log(userAge);*/

//Копіювання значення

/*let userAge = 20;
let userAge2 = 25;
userAge = userAge2;
console.log(userAge);*/

//Область видимості
/*Не можна використовувати зміну до її появи. Спочатку змінна , а потім нею користуємося */
/*console.log(userAge);
let userAge = 25; не вірно*/

//Зміну 'видно' в межах її блщку де вона об'явлена, та в усіх дочірніх
// if це блок

/*if (1 > 0) {
   let userAge = 27;
   console.log(userAge);
}*/

/*let userAge = 30;
if (1 > 0) {
   console.log(userAge);
   if (10 > 5) {
      console.log(userAge);
   }
}
console.log(userAge);*/

/*if (2 > 0) {
   let userAge = 15;
   if (5 > 0) {
      console.log(userAge);
   }
}*/
//console.log(userAge); помилка , змінна прописана в блоці, за межами блоку вона не працює

//const це щось постійне.
//Правила такі самі як і в зміннах. Не можна змінити , зафіксоване значення. Значення має бути відразу.
//const userAge = 15;
//console.log(userAge);
//Якщо значення const заздалегідь відомо , то пишемо верхнім регістром
/*const COLOR_GREY = '#424551';
const BLOCK_SIZE = 25;
console.log(COLOR_GREY);
console.log(BLOCK_SIZE);*/
//Вирази
/*const userAge = 30 + 30;
console.log(userAge);*/


//Ключове слово var
//Використовувати змінну можна до її появи
/*age = 40;
console.log(age);
var age;*/


//Домашнє завдання
/*let user_ColorEye = '#7FFF00';
console.log(user_ColorEye);
let user;
let userName = 'Вася';
user = userName;
console.log(user);*/
/*1 Варіант 
Помилка. Ягщо писати змінні в рядок, то потрібно ставити ;. Краще писати кожну змінну з нового рядка і ставити ;.
Дописати назву змінної userName userAge
2 Варіант
Помилка в написані  назві змінної. myage змінити на myAge
3 Варіант
Помилка. Назву const пишемо великими літерами ящо значення const заздалегідь відомо
Вірно буде записати const blockSize = 14 + 50;*/

//Тип данних
//Рядковий string. Різниця між рядковим і числовим типом це кавички. В числовому кавичок не має.
//Одинарні і двойні кавички повністю ідентичні. Якщо відкрита одинарна лапка, закриваємо одинарною.
//Рядком буде будь що, щознаходиться в лапках.
let userName = 'Вася';
console.log(typeof userName);
console.log(userName);
//числовий number
let userAge = 30;
console.log(typeof userAge);
console.log(userAge);
//Не визначеність 
let userName2;
console.log(typeof userName2);
console.log(userName2);
// null - нічого, пустота, порожнеча
let userAge1 = null;
console.log(typeof userAge1);
console.log(userAge1);
//boolean - правда або брехня
const someVar = 10 > 5;
console.log(typeof someVar);
console.log(someVar);
//number - це число  та спец.значення
let userAge3 = 0;
console.log(typeof userAge3);
console.log(userAge3);
//infinity - незкінченність
let resultNumber = 58 / 0;
console.log(resultNumber)
console.log(typeof resultNumber);
//NaN - операція яка не може бути обчислена. Два типи данних не сумісні.
let resultNumber1 = 'Вася' * 10;
console.log(typeof resultNumber1);
console.log(resultNumber1);

let userAge4 = 36;
let userAgeInfo = `Вік: ${userAge4}`;
console.log(userAgeInfo);

//ДЗ

//1 Варіант.Помилка
/*Після фріланчер поставити : , і одинарні лапки в зворотню сторону*/
//2 Варіант. NaN не з'явиться, буде незкінченність. Значення змінної чіслові. Ящко один із них був рядковим, тоді був би NaN
let userHeight = 145 / 0;
console.log(typeof userHeight);
console.log(userHeight);

//3 Варіант
/*Не буде null. Змінній не задано значення і тип данних буде indefined */
let userName3;
console.log(typeof userName3);
//4 Варіант. При автоматичному перетворені з числового на рядковий, ми отримаємо тип данних числове
let userSize = "45" / "8";
console.log(typeof userSize);




















