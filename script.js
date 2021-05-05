let a = prompt('введите имя');
let b = prompt('введите фамилию');
let c = +prompt('ваш год рождения');
let d = +prompt('введите нынешний год');

if(c>d){
    console.log('вы еще не родились');
}

function sum(d,c){
    let res = d-c;
    return res;
    
}



let e = sum(d,c);

console.log(a + ' ' + b + ' '+ 'ваш возраст-' + sum(d,c) );