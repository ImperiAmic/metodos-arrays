const years = [];

for (let year = 2000; year <= 2025; year++) {
  years.push(year);
}

console.log("Exercici 1 - Años");
console.log(years);
console.log("\n");

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

console.log(`Exercisi 2 - Words
${words.reverse().join(" ")}\n`);

let grades: number[];
grades = [6, 4, 8, 10, 2];

let sortedGradesList = grades.toSorted((a, b) => a - b);
console.log("Exercici 3 - Notas");
console.log(sortedGradesList);

console.log("Notes aprobades:");
for (const grade of grades) {
  if (grade >= 5) {
    console.log(grade);
  }
}

const gradesSum = grades.reduce((previous, next) => previous + next);
const gradesAverage = gradesSum / grades.length;

console.log(`Nota mitjana: ${gradesAverage}`);

const maximumGrade = Math.max(...grades);
const minimumGrade = Math.min(...grades);

console.log(`Nota màxima: ${maximumGrade}
Nota mínima: ${minimumGrade}`);
