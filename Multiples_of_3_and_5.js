var x  = prompt("Enter a number so that I can calculate the sum of the multiples of 3 and 5 below it.", "Go on, enter it");
var end = parseInt(x);
var sum = 0;
for (var i = 0; i < end; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum = sum + i;
    }}
    confirm(sum);