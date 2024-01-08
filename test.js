console.log(__dirname);

setInterval(() => {
    console.log('Hello');
}, 1000)

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

module.exports = sayHi