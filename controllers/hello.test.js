const faker = require('faker');
const { sayHelloTo } = require('./hello');

describe('Test Hello controller', () => {
  test('Reply with no arguments', () => {
    expect(sayHelloTo()).toBe('Hello Mr Unknow!');
  });

  test('Reply with arguments', () => {
    const randomName = faker.name.findName();
    expect(sayHelloTo(randomName)).toBe(`Hello ${randomName}!`);
  });
});
