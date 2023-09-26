function make_avg(num1, num2, num3) {
var total = num1 + num2 + num3;
var avg = total / 3;
var fixedDigit = avg.toFixed(2);
return fixedDigit;
}

var avg1 = make_avg(30, 20, 25);
console.log(avg1);