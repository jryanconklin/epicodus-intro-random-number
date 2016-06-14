var total = 0;

var d6_1 = 1 + Math.floor(Math.random() * 6);
var d6_2 = 1 + Math.floor(Math.random() * 6);
var d6_3 = 1 + Math.floor(Math.random() * 6);
var d6_4 = 1 + Math.floor(Math.random() * 6);
var numbers = [d6_1, d6_2, d6_3, d6_4];

numbers.sort();
alert(numbers);
numbers.shift();
alert(numbers);

numbers.forEach(function(number) {
	total += number
});
alert(total);
