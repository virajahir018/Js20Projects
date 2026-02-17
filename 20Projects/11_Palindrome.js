var num = 121;
var temp = num;
var rev = 0;

while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
}

if (temp === rev)
    console.log("Palindrome");
else
    console.log("Not Palindrome");
