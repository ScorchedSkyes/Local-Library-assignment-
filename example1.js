const students = [
    // { name: "Leo Yeon-Joo", 
    // score: 8.9 },
    { name: {
        first :"Benji",
        last: "Oxner", 
    },
    score: 9.9,
    birthdays : '11/21/88' },



    
    { name: {
        first:"Kris",
        last: "Harder", 
    },
    score: 9.2, 
    birthdays : '06/23/94'},
  ];




function firstNameAndBirthday (students, name ){
   const found = students.find(student => student.name.first === name)
   return found? `${found.name.first} was born on ${found.birthdays} and scored a ${found.score} on the test.` : null

    
}





console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥')
console.log(firstNameAndBirthday(students, "Benji"))
console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥')











