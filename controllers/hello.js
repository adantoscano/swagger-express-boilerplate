function sayHelloTo(name) {
  return `Hello ${name || 'Mr Unknow'}!`;
}

module.exports = {
  sayHelloTo
};
