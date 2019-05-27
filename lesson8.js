//////////// a ////////////
if (!( "a" in window)) {
	var a = 1;
}
alert(a);

/*
 Сначала объявляется переменная "a", затем инструкция if говорит: «Если переменная "a" не объявлена,
 то инициализируем ее значением a = 1». Такое условие никогда не может быть истинным, поэтому переменная
 "a" остается со своим значением по умолчанию - undefined.
*/

//////////// b ////////////
var b = function a(x) {
	x && a (-- x);
};
alert(a);

/*
 Переменная "a" не определена.
 Переменной "b" присвоили функцию "a(x)", функция не вызывается,
 поэтому сработает только alert.
*/

//////////// c ////////////
function a(x) {
return x * 2;
}
var a;
alert(a);

/*
 Объявление функции превалирует над объявлением переменной, если нет инициализации.
 В этом случае нет инициализации, поэтому выведется исходный код функции.
*/

//////////// d ////////////
function b (x, y, a) {
arguments[2] = 10;
alert(a);
}
b(1, 2, 3);

/*
 Выведет: 10.
 В функции "b", которую мы вызываем с аргументами 1, 2, 3. Должно выводить 3, но т.к. внутри функции переопределятся
 псевдомассив аргументов "arguments[2]" на 10. Дальше выводится агрумент "a", который уже переопределен на 10,
 вместо входящего значения 3.
*/

//////////// e ////////////
function a() {
alert(this);
}
a.call(null);

/*
 Выведет: объект Window.
 Если this имеет значение NULL или undefined, вызываемой функции передается глобальный объект как это значение.
 Поэтому всегда, когда null передается call() (или apply ()), он по умолчанию использует глобальный объект,
 которым является объект Window.
*/

