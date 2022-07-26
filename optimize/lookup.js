const people = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Sally" },
  { id: 3, name: "Budi" },
];

const people2 = people.reduce(
  (lookup, person) => ({
    ...lookup,
    [person.id]: person,
  }), // in here we  basically creating a new object every lloop
  // 4 object specifically
  {}
);
// console.log(people2);
// BETTER
const people3 = people.reduce((lookup, person) => {
  lookup[person.id] = person;
  return lookup;
}, {}); // {} is initial value // we only create a new object
console.log(people3);
