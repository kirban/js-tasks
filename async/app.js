//ex 1
function delay(time) {
    const promise = new Promise(function(resolve){
        setTimeout(resolve, time*1000);
    });
    return promise;
}
delay(3).then(function() { console.log('Прошло 3 секунды') });

//ex 2
// Возьмите код предыдущего задания и, при помощи цепочки из then, 
//вызовите delay последовательно три раза. Второй delay не должен быть запущен, 
//пока не завершился первый. Третий не должен быть запущен, пока не завершился второй.


function delay1(time) {
    const promise1 = new Promise(function(resolve){
        setTimeout(resolve, time*1000);
    });
    return promise1;
}

delay1(3)
    .then(function() {

        console.log('Прошло 3 секунды');
        return delay1(1);

})  .then(function(){

        console.log('Раз');
        return delay1(1);

})  .then(function(){

        console.log('Два');
        return delay1(1);

})  .then(function(){

        console.log('Три');

});

//ex 3
/*
Создайте на странице кнопку
При нажатии на кнопку, отправляйте ajax-запрос по адресу https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
Выведите на странице список имен городов из полученного файла

Для выполнения данного задания может пригодиться функция JSON.parse

*/

    var body = document.body,
    btn = document.createElement('button');

    btn.innerHTML = "Кнопка";
    body.appendChild(btn);

    btn.addEventListener('click',function(){
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json'); 
        xhr.send();
        xhr.addEventListener('load', function(){
            var cities = JSON.parse(xhr.responseText),
            list = document.createElement('ul');
            body.appendChild(list);

            cities.forEach(function(city){
                var item = list.appendChild(document.createElement('li'));
                
                item.innerHTML = city.name ;
            });
        })        
        
    })