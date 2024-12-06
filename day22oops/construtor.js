function Student(name, marks, course, rollNo) {
  this.name = name;
  this.marks = marks;
  this.course = course;
  this.rollNo = rollNo;
  this.class = "sevent";
}
Student.prototype.ptm = function (string) {
  console.log(`${this.class} ${string}`);
};

let rohan = new Student("rohan", 500, "full stack", 12);
console.log(rohan);
let khushal = new Student("khushal", 500, "full stack", 17);
console.log(khushal);

rohan.ptm("passed the exam");
khushal.ptm("passed the exam");

console.log(rohan.ptm == khushal.ptm);// true
