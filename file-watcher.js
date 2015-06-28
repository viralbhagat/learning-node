const fs = require('fs');
fs.watch('watch.txt', function(){
    console.log('watch.txt updated');
});
console.log('watching watch.txt');
