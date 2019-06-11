var nodeArg = process.argv;

var numArray = [];

for (var i = 2; i < nodeArg.length; i++) {
    numArray.push(parseFloat(nodeArg[i]));

} 

console.log(numArray);
console.log(numArray.sort(sortNums));

function sortNums(a, b) {
    return (a-b);
}
