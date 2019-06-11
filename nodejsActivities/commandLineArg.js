argOne = process.argv[2];
argTwo = process.argv[3];

if (argOne === argTwo) {
    console.log(true);
}
else {
    console.log(false);
}

if ((argOne % 7) === 0 && (argTwo % 7) === 0) {
    console.log(true);
}
else {
    console.log(false);
}