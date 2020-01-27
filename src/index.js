// ES6 - Spread Operator:
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

// with spread operator becomes:
const combined = [...first, ...second];

// advantage being easier to add another element later on:
const combined = [...first, 'a', ...second, 'b'];

// also easy to clone an array:
const clone = [...first];

// ES6 - Object Destructuring:
//
// const address = {
//   street: '',
//   city: '',
//   country: ''
// };
//
// const street = address.street;
// const city = address.city;
// const country = address.country;
//
// with destructuring becomes:
//
// const { street, city, country } = address;
//
// & assign different name to constant:
//
// const { street: st } = address;

// ES6 - Use Array.Map() to render list:
//
// const colors = ['red', 'green', 'blue'];
// const items = colors.map(color => `<li>${color}</li>`);
