function sum(x) {
	let sum = x;
	
	return function(y){
		sum += y;
		console.log(sum);
	}
}


const sum1 = sum(1);
sum1(2); // результат выполнения 3
sum(1)(2); // результат выполнения 3

for (let i = 1; i <= 10; i++) {
	setTimeout(function() {
		 console.log(i);
	}, 0);
}
// Ошибка в том что нужно поменять var на let, так как когда мы меняем var на let, так как var имеет глобальную область видимсоти,
// а у let блочная облать видимиости, и для каждого прохода for будет отдельная i.
// Так же нужно поменять < на <= что бы в CL выыодиласть цифра 10 и i c 0 на 1, для того что бы отсчет начинался с 1)