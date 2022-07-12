// Tuple - grieztai aprsasytas masyvas

const person: [number, string, boolean] = [50, 'James', true];

type TupTypeArr = [boolean, string][];

const tupleArr: TupTypeArr = [
  [true, 'London'],
  [false, 'Viena'],
  [false, 'Hamburg'],
];

console.log('tupleArr ===', tupleArr);
console.log('person===', person);
