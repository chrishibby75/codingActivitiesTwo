var inputNum = parseInt(process.argv[2]);
var multipleNum = parseInt(process.argv[3]);
var sum = 0;

for(var i = multipleNum; i <= inputNum; i += multipleNum) {
    sum += i;
}

console.log(sum);