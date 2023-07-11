// ? REDUCE EXAMPLES
/*
const people = [
  { name: "John", age: 23 },
  { name: "Sally", age: 25 },
  { name: "Michael", age: 21 },
  { name: "Mark", age: 23 },
];

const result = people.reduce((groupedPeople, person) => {
  let age = person.age;
  if (groupedPeople[age] === undefined) groupedPeople[age] = [];
  groupedPeople[age].push(person);
  return groupedPeople;
}, {});

console.log(Boolean(-11));
*/

// ? TURNING ARRAY OF STRING TO ARRAY OF NUMBERS
// console.log(["1", "2", "3", "4", "5"].map(Number));

// todo : FINISH THIS
/*
function DNAStrand(dna) {
  const dnaPairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };

  return dna.replace(/./g, (val) => {
    return dnaPairs.val;
  });
}
console.log(DNAStrand("AAAA"));

*/
