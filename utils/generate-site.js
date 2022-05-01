const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if an error occurs, reject Promise and send the error to the catch method
            if (err) {
                reject(err);
                // return to ensure Promise does not execute the resolve function
                return;
            }
            // resolve Promise and send data to the then method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Style sheet copied!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };