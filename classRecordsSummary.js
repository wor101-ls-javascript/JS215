/*
**Problem**
Given this information, implement a function that takes a studentScores object and returns a class record summary object.

To determine final grade:
  - Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
  - Compute the student's total exercise score: 20 + 15 + 40 = 75
  - Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
  - Round the percent grade to the nearest integer: 81
  - Lookup the letter grade in the table above: C
  - Combine the percent grade and letter grade: "81 (C)"

**Examples / Test Cases**


**Data Structures**

Class record summary object:
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}

**Algorithm**
1. determine each students final score and letter grade 
  - obtain array of exam scores and perform transformation / map
    - compute average exam score ( reduce => sum scores / 4)
    - compute excercise score (reduce => sum scores)
    - calculate percent grade
      - apply weights by passing average exam and excercise score to a function 
      - round to nearest integer
    - pass percent grade to function to return letter grade
    - return string combination of percent grade and letter grade (represents each element in transformed array)
2. determine each exams average score, minimum score, maximum score
  - create an array of all students exams arrays
  - create an array with 4 empty array elements to store exam scores
  - use forEach method on the exams scores array
    - populate each element with scores from students for that array
  - calculateAverageScore(exams)
  - calculateMinimumScore(exams)
  - calculateMaximumScore(exams)
  - creat
    

*/

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

/*
1. determine each students final score and letter grade 
  - obtain array of exam scores and perform transformation / map
    - compute average exam score ( reduce => sum scores / 4)
    - compute excercise score (reduce => sum scores)
    - calculate percent grade
      - apply weights by passing average exam and excercise score to a function 
      - round to nearest integer
    - pass percent grade to function to return letter grade
    - return string combination of percent grade and letter grade (represents each element in transformed array)
2. determine each exams average score, minimum score, maximum score
  - create an array of all students exams arrays
  - create an array with 4 empty array elements to store exam scores
  - use forEach method on the exams scores array
    - populate each element with scores from students for that array
  - calculateAverageScore(exams)
  - calculateMinimumScore(exams)
  - calculateMaximumScore(exams)
  - creat
  */

function generateClassRecordSummary(studentScores) {
  let studentGrades = finalScoresAndLetterGrades(studentScores);
}

function finalScoresAndLetterGrades(studentScores) {
  let studentsExamScores = getStudentsExamScores(studentScores);
  let averageScores = getAverageScores(studentsExamScores);

  let studentExcerciseScores = getStudentsExcerciseScores(studentScores);
  console.log(studentExcerciseScores);
}

function getStudentsExcerciseScores(studentScores) {
  let students = Object.values(studentScores);
  return students.map(student => student.scores.exercises);
}

function getAverageScores(studentsExamScores) {
  return studentsExamScores.map(studentScores => Math.round(getAverage(studentScores)));
}

function getAverage(scores) {
  let total = scores.reduce((total, score) => total + score);
  return total / scores.length;
}

function getStudentsExamScores(studentScores) {
  let students = Object.values(studentScores);
  return students.map(student => extractExamScores(student));
}

function extractExamScores(student){
  return student.scores.exams;
}

generateClassRecordSummary(studentScores);

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }