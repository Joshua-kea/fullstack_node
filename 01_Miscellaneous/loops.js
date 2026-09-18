//Task 1, multiply the numbers with 2
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);


// Is not affected by side effects, because numbers is not objects
const numbersIterated = numbers.map((value, index, array) => console.log(value, index, array));

// Task 2 boost the gdp of Lesotho with 500
const countries = [
  { name: "Lesotho", gdp: 530 },
  { name: "Papua New Guinea", gdp: 1025 },
  { name: "Saint Vincent and the Grenadines", gdp: 1200 },
];

// Caused side effects

// const countriesWithGDPUpdated = countries.map((country) => {
//   if (country.name === "Lesotho") {
//     country.gdp += 500;
//   }
//   return country;
// });

// console.log(countriesWithGDPUpdated);

const countriesWithGDPUpdated = countries.map((country) => ({
        name: country.name,
        gdp: country.name === "Lesotho" ? country.gdp + 500 : country.gdp
}));

console.log(countriesWithGDPUpdated);


// Task 3: filter out countries with a gdp below 1000 in the countries variable
// countries has been mutated, we are referring to the country object in memory
// A side effect has happened here
const countriesWithGDPBelow1000 = countries.filter((country) => country.gdp > 1000);

console.log(countriesWithGDPBelow1000);