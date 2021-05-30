const prompt = require("prompt-sync")({ sigint: true });

const students = [
  { name: "Jean-Luc Garza", score: 24 },
  { name: "Teddy Munoz", score: 79 },
  { name: "Georgia Ali", score: 17 },
  { name: "Vicky Calhoun", score: 8 },
  { name: "Awais Weaver", score: 65 },
  { name: "Athena Kline", score: 52 },
  { name: "Zacharia Whitaker", score: 38 },
  { name: "Clarice Davenport", score: 99 },
  { name: "Viktoria Flynn", score: 84 },
  { name: "Ianis Crossley", score: 20 },
  { name: "Johnnie Owens", score: 74 },
  { name: "Emily-Rose Erickson", score: 33 },
  { name: "Adeel Nieves", score: 100 },
  { name: "Dustin Villegas", score: 98 },
  { name: "Maxine Hughes", score: 65 },
  { name: "Bilaal Harding", score: 79 },
  { name: "Maddie Ventura", score: 71 },
  { name: "Leroy Rees", score: 44 },
  { name: "Wanda Frank", score: 73 },
  { name: "Margaux Herbert", score: 80 },
  { name: "Ali Rios", score: 70 },
  { name: "Nigel Santiago", score: 25 },
  { name: "Markus Greene", score: 78 },
  { name: "Harlan Parrish", score: 97 },
  { name: "Baran Davidson", score: 43 },
  { name: "Seth Rodriguezh", score: 67 },
  { name: "Diego Mayer", score: 100 },
];

class HashTable {
  constructor(classSize) {
    this.classSize = classSize;
    this.classes = { a: [], b: [], c: [], d: [], other: [] };
  }

  hash = (score) => {
    if (score >= 90) {
      return "a";
    } else if (score >= 80 && score < 90) {
      return "b";
    } else if (score >= 70 && score < 80) {
      return "c";
    } else if (score >= 60 && score < 70) return "d";
    else return "other";
  };

  insert = (student) => {
    const classRoom = this.hash(student.score);
    if (this.classes[classRoom].length < this.classSize)
      this.classes[classRoom].push(student);
    else console.log("we are full");
  };
}

const size = prompt(`please enter max number of student  `);
let newClasses = new HashTable(size);
students.forEach((student) => {
  newClasses.insert(student);
});
console.log(newClasses.classes);
