var attributeArray = [];
var total = 0;
var numbers = [];
var dieCount = 0;

function attributeGen() {
	return 1 + Math.floor(Math.random() * 6);
}

while ( dieCount < 4 ) {
	numbers.push(attributeGen());
	dieCount += 1;
}

numbers.sort();
numbers.shift();

numbers.forEach(function(number) {
	total += number;
});
alert(total);
console.log(total);

attributeArray.push(total);
console.log(attributeArray);

// do {
//
// } while (attributeArray.length < 6 );
// console.log(attributeArray);
