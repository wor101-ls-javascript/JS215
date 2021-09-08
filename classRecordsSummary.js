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
  let examMetrics = calculateExamMetrics(studentScores);
  return { 'studentGrades': studentGrades, exams: examMetrics };
}

function calculateExamMetrics(studentScores) {
  let allStudentsExams = getStudentsExamScores(studentScores);
  let allExamScores = getEachExamsScores(allStudentsExams);
  let averageExamScores = getAverageExamScores(allExamScores);  // [ 75.6, 86.4, 87.6, 91.8 ] - array of average score for each exam
  let minimumExamScores = getMinimumExamScores(allExamScores);  // [ 50, 70, 60, 80 ] - array of minimum scores for each exam
  let maximumExamScores = getMaximumExamScores(allExamScores);  // [ 100, 100, 100, 100 ] - array of maximum scores for each exam
  let arrayOfExamMetrics = constructArrayOfExamMetrics(averageExamScores, minimumExamScores, maximumExamScores);
  return arrayOfExamMetrics;
}

function constructArrayOfExamMetrics(averageExamScores, minimumExamScores, maximumExamScores) {
  return averageExamScores.map((averageScore, index) => {
    return { average: averageScore, minimum: minimumExamScores[index], maximum: maximumExamScores[index]};
  });
}

function getMaximumExamScores(allExamScores) {
  return allExamScores.map(singleExamScores => Math.max(...singleExamScores));
}

function getMinimumExamScores(allExamScores) {
  return allExamScores.map(singleExamScores => Math.min(...singleExamScores));
}

function getAverageExamScores(allExamScores) {
  return allExamScores.map(singleExamScores => getAverage(singleExamScores));
}

function getEachExamsScores(allStudentsExams) {
  let exam1 = allStudentsExams.map(student => student[0]);      // [ 90, 50, 88, 100, 50 ] - all scores for exam1
  let exam2 = allStudentsExams.map(student => student[1]);      // [ 95, 70, 87, 100, 80 ] - all scores for exam2
  let exam3 = allStudentsExams.map(student => student[2]);      // [ 100, 90, 88, 100, 60 ] - all scores for exam3
  let exam4 = allStudentsExams.map(student => student[3]);      // [ 80, 100, 89, 100, 90 ] - all scores for exam4
  return [exam1, exam2, exam3, exam4];
}



function finalScoresAndLetterGrades(studentScores) {
  let studentsExamScores = getStudentsExamScores(studentScores);
  let averageScores = getAverageScores(studentsExamScores);
  // console.log(averageScores);                                                               // [ 91, 78, 88, 100, 70 ] - average exam scores for each student

  let studentExcerciseScores = getStudentsExcerciseScores(studentScores);
  let studentsTotalExcerciseScore = totalStudentExcerciseScores(studentExcerciseScores);
  // console.log(studentsTotalExcerciseScore);                                                 // [ 79, 65, 77, 60, 30 ] - totaled excercise scores for each student

  let weightedGrades = calculateWeightedGrade(averageScores, studentsTotalExcerciseScore);
  // console.log(weightedGrades);                                                              // [ 87, 73, 84, 86, 56 ] - combined weighted grades for each student

  let letterGrades = getLetterGrades(weightedGrades);
  // console.log(letterGrades);                                                                // [ 'B', 'D', 'C', 'B', 'F' ] - letter grades for each student

  let combinedNumberAndLetterGrades = combineNumberAndLetterGrades(weightedGrades, letterGrades);
  // console.log(combinedNumberAndLetterGrades);                                               // [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ] - combined percent/letter grades for each student

  return combinedNumberAndLetterGrades;
}

function combineNumberAndLetterGrades(weightedGrades, letterGrades) {
  let combinedGrades = weightedGrades.map((percentGrade, index) => {
    return `${percentGrade} (${letterGrades[index]})`;
  });
  return combinedGrades;
}

function getLetterGrades(grades) {
  let letterGrades = grades.map(grade => {
                       if (grade >= 93) {
                         return 'A';
                       } else if (grade >= 85) {
                         return 'B';
                       } else if (grade >= 77) {
                         return 'C';
                       } else if (grade >= 69) {
                         return 'D';
                       } else if (grade >= 60) {
                         return 'E';
                       } else {
                         return 'F';
                       }
                     });
  return letterGrades;
}

function calculateWeightedGrade(examScores, excerciseScores) {
  const examWeight = 0.65;
  const excerciseWeight = 0.35;
  let weightedExamScores = examScores.map(score => score * examWeight);
  let weightedExcerciseScores = excerciseScores.map(score => score * excerciseWeight);
  let combinedScores = weightedExamScores.map((examScore, index) =>  {
                         return Math.round(examScore + weightedExcerciseScores[index]);
                       });
  return combinedScores;
}

function getStudentsExcerciseScores(studentScores) {
  let students = Object.values(studentScores);
  return students.map(student => student.scores.exercises);
}

function totalStudentExcerciseScores(studentExcerciseScores) {
  return studentExcerciseScores.map(studentScores => {
    return studentScores.reduce((total, score) => total + score)
  });
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

console.log(generateClassRecordSummary(studentScores));

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