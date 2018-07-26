const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Nuwan',
            age: 26
        });
        // reject('something went wrong!');
    }, 3500)
});

console.log('before')

promise.then((data) => {
    console.log('1', data);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('This is my other promise');
            // reject('something went wrong!');
        }, 3500)
    });
}).then((str) => {
    console.log('Does this run?', str);
})
.catch((error) => {
    console.log('error: ', error);
});

console.log('after');