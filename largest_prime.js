var number=prompt ("I will caclulate the largest prime factor of the number you enter.", "Don't make it too big...");
var x=parseInt(number-1);
var primeFactor=false;
while (primeFactor!==true){while (number%x !== 0){
    x=x-1;
}
var y=x-1;
while (x%y!==0){
    y=y-1;
}
if (y===1){primeFactor=true;
}
else{x=y;}
}
confirm(x);