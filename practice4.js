function make_avg(num1, num2, num3) {
var total = num1 + num2 + num3;
var avg = total / 3;
avg.toFixed(2);
return avg;
}

var avg1 = make_avg(30, 40, 20);
console.log(avg1);