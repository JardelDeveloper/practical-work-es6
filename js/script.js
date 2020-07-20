// Nº 1
const array = [
  'Silvia Eveline Gomes Borges',
  'Norma Josefina Carrilo Fajardo',
  'Jardel Cunha',
];

// Nº 1
function getGroupMembers() {
  console.log(array.sort());
}

// Nº 2
function getFullName(...names) {
  return names.join(' ');
}

// Nº 3
function transform(input) {
  return input.map((item) => item / 10 + 1);
}

// Nº 4
function onlyNumbersFrom(value) {
  return value
    .split('')
    .filter((char) => !isNaN(char) && char !== ' ')
    .join('');
}

// Nº 1
getGroupMembers();

// Nº 2
console.log(getFullName('Raphael'));
console.log(getFullName('Raphael', 'Gomide'));

// Nº 3
console.log(transform([10, 20, 30, 40, 50]));
console.log(transform([61, 72, 83, 94]));

// Nº 4
console.log(onlyNumbersFrom('1234.3423 2423.233 sfdfds ~~~ ^_--'));
