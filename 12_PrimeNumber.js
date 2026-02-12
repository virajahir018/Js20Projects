var num = 7;
var isPrime = true;

for (var i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime && num > 1)
    console.log("Prime Number");
else
    console.log("Not Prime");
