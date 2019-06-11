var fs = require('fs');

function logBefore(func, message) {
    console.log("Boston Red Sox!");

    func();
};

function runIf(func, bool) {
    if(bool) {
        func();
    }
};

function wrap(func, value) {
    return function() {
        return func(value);
    };
}

fs.writeFile("log.txt", "Log message!", function(err) {
    if (err) {
        console.log(err);
    }
    console.log("File saved!");
});

var writeFileCallBack = function(err) {
    if(err) {
        console.log(err);
    }
    console.log("File Saved!");
};

fs.writeFile("log.txt", "Log message!", writeFileCallBack);