var num = 12345;
var count = 0;

while (num > 0) {
    count++;
    num = Math.floor(num / 10);
}

console.log("Total digits =", count);
