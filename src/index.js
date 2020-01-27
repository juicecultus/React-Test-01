// ES6 - Object Destructuring:
//
const address = {
  street: '',
  city: '',
  country: ''
};
//
// const street = address.street;
// const city = address.city;
// const country = address.country;
//
// with destructuring becomes:
//
const { street, city, country } = address;
//
// & assign different name to constant:
//
const { street: st } = address;

// ES6 - Use Array.Map() to render list:
//
// const colors = ['red', 'green', 'blue'];
// const items = colors.map(color => `<li>${color}</li>`);
