class Learner {
  #grades = [];
  #name = {
    first: "",
    last: "",
  };
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }

  get name() {
    return `${this.#name.first} ${this.#name.last}`;
  }

  get age() {
    return this.#age;
  }

  // pushes a new grade to the array
  set grades(grade) {
    grade = Number(grade);

    if (grade >= 0 && grade <= 100) {
      this.#grades.push(grade);
    }
  }

  // return the grades array
  get grades() {
    return this.#grades;
  }

  // add many grades to the private #grades array
  addGrades(...grades) {
    grades = grades.flat();

    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
      }
    });
  }

  // gets the average by dropping the lowest score from the grades array
  get average() {
    const arr = [...this.#grades];
    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
}

const learner1 = new Learner("Leeroy", "Jenkins", 18);

console.log(learner1.name);
console.log(learner1.age);

// learner1.grades = 100;
// learner1.grades = 90;
// learner1.grades = 70;

learner1.addGrades(98, 87, [95, 100, 77], [96, 89]);

console.log(learner1.grades);

console.log(learner1.average);

