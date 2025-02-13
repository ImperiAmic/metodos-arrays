const years = [];

for (let year = 2000; year <= 2025; year++) {
  years.push(year);
}

console.log(years);

const words = [
  "confín.",
  "otro",
  "al",
  "uno",
  "del",
  "conocido",
  "mar",
  "todo",
  "en",
  "Temido,",
  "el",
  "bravura",
  "su",
  "por",
  "llaman,",
  "le",
  "pirata",
  "Bajel",
  "bergantín.",
  "velero",
  "un",
  "vuela",
  "sino",
  "mar",
  "el",
  "corta",
  "no",
  "vela,",
  "toda",
  "a",
  "popa",
  "en",
  "viento",
  "banda,",
  "por",
  "cañones",
  "diez",
  "Con",
];

const pirateSong = words.reverse().join(" ");
console.log(pirateSong);

let grades: number[];
grades = [6, 4, 8, 10, 2];

const sortedGrades = grades.toSorted(
  (previousGrade, nextGrade) => previousGrade - nextGrade
);
console.log(sortedGrades);

const approvedGrades = grades.filter((grade) => grade >= 5);
console.log(approvedGrades);

const gradesSum = grades.reduce(
  (previousGrade, nextGrade) => previousGrade + nextGrade
);
const gradesAverage = gradesSum / grades.length;

console.log(gradesAverage);

const maximumGrade = Math.max(...grades);
const minimumGrade = Math.min(...grades);

console.log(`${maximumGrade}, ${minimumGrade}`);
