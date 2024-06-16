const {opendirSync} = require('node:fs');

const path = 'C:/Users/jlebl/dadbday/app/public/images';

const directory = opendirSync(path);
console.log(directory);
var entry = directory.readSync();
const paths = [];
while (entry) {
    entry = directory.readSync();
    if (entry?.name && entry?.parentPath) {
        paths.push(entry.parentPath + entry.name);
    }
}
console.log(paths)