start = 1;
end = 20;

while(start < end) {
    console.log(start);
    start+=2;
}

console.log("       ")
console.log("       ")
console.log("       ")
console.log("       ")
console.log("       ")

for(i=100; i > 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

console.log("       ")
console.log("       ")
console.log("       ")
console.log("       ")
console.log("       ")

start2 = 4;
end2 = -4;

while(start2 > end2) {
    console.log(start2);
    start2 = start2 - 1.5;
}

console.log("       ")
console.log("       ")
console.log("       ")
console.log("       ")
console.log("       ")

start3 = 0;
end3 = 100;
var sum = 0;
// var text = "";

while(start3 <= end3) {
    sum += start3;
    // text += start3 + " + ";
    start3++;
    
    
}

console.log(sum);
// console.log(text);

console.log("       ")
console.log("       ")
console.log("       ")
console.log("       ")
console.log("       ")

var product = 1;

for(i=1; i<=12; i++) {
    product = product * i;
}
console.log(product);