console.log('hi');

x = parseInt(prompt("Введите число:"))
y = parseInt(prompt("Введите число:"))
z = parseInt(prompt("Введите число:"))
/*
if (x % 2 === 0) {
    let func1 = (x) => expression;
    console.log(x ** 2);
}
else {
    let func2 = (x) => expression;
    console.log(x ** 3);
}
if (y % 2 === 0) {
    let func1 = (y) => expression;
    console.log(y ** 2);
}
else {
    let func2 = (y) => expression;
    console.log(y ** 3);
}
if (z % 2 === 0) {
    let func1 = (z) => expression;
    console.log(z ** 2);
}
else {
    let func2 = (z) => expression;
    console.log(z ** 3);
}
*/

if (x % 2 === 0) {
    let func1 = (x) => x ** 2;
    console.log(x);
}
else {
    let func2 = (x) => x ** 3;
    console.log(x);
}
if (y % 2 === 0) {
    let func1 = (y) => y ** 2;
    console.log(y);
}
else {
    let func2 = (y) => y ** 3;
    console.log(y);
}
if (z % 2 === 0) {
    let func1 = (z) => z ** 2;
    console.log(z);
}
else {
    let func2 = (z) => z ** 3;
    console.log(z);
}
