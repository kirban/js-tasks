//First task
console.log('First task:');
var name = "Kirill";
console.log(name);

name = "Artem";
console.log(name);

// Second task
console.log('Second task:');
var n = false;
if (!n){
    console.log('Оператору if передано истинное выражение!')
}
else{
    console.log('Оператору if передано ложное выражение!')
}

//Third task
console.log('Third task:');
for (var i=0; i<10; i++){
    console.log(i);
}

//Fourth task
console.log('Fourth task:');

function sum(p1,p2,p3){
    var result = p1+p2+p3;
    return result;
}

ex5 = sum(10,20,30);
console.log(ex5);
console.log(sum(15,5,1));

//Last task
console.log('Last task:');
//EX1
console.log('EX 1:');
var arr = [];
arr[0] = 'привет';
arr[1] = 'loftschool';
arr.push(', я изучаю',' Javascript');
console.log('В массиве '+arr.length+ ' элементов');
console.log('Массив:');
for (var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}
//EX2
console.log('EX 2:');
var arr = [];
arr.push(1598,21,-4,1224,2,150,99,12,8,521);
for (var i=0; i<arr.length+1;i++){
    if (arr[i]>100){
        console.log(arr[i]+' больше чем 100');
    }
    else{
        continue;
    }
}
//EX3
console.log('EX 3:');

var obj = {
    name: "",
    lastName: "",
    age: 0
};

obj.name = "Kirill";
obj.lastName = "Romanov";
obj.age = 22;

console.log("First Name: "+obj.name);
console.log("Last Name: "+obj.lastName);
console.log("Age: "+obj.age);

//EX 4
console.log("EX 4: ");
function hello (human){
    console.log("Привет! Меня зовут "+human.name+" "+human.lastName+" и мне "+human.age+" лет!");
}

hello(obj);