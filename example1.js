const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];


// function findStudentScoreByName (students, name){
//     return students.filter((studentScore)=> studentScore.name === name).map((scorey)=>scorey.score)
// }

function findStudentScoreByName(students, name) {
    let found = students.find(studentObj=> studentObj.name === name);
    if (found) {return found.score}
  }


console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥')
console.log(findStudentScoreByName(students, "Morgan Sutton"))
console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥')
