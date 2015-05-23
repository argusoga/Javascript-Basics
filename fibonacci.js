var x=prompt("I will calculate the sum of the even numbers in the fibonacci series up to and including the number you enter.");
var end=parseInt(x)+1;
var a=1;
var b=2;
var sum=2;
while(a<end && b<end){
    if (a<b){
        a=a+b;
        if (a<end && a%2===0){
            sum=sum+a;
            confirm(a);
        }
    }
    else {
        b=a+b;
        if (b<end && b%2===0){
            sum=sum+b;
            confirm(b);
        }

    }
}
confirm ("The sum is " + sum);