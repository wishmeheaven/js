const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};
/* 

1. A method called “findPerson” takes two arguments, a type
(either a student or teacher), and an id. It will return a
particular object of that person.
*/

function findPerson(type, id){
    for (let i = 0; i < type.length; i++){
        if (type[i].id === id){
            return type[i];
        }
    }
}
console.log("findPerson", findPerson(school.students,12))

/*
2. A method called “assignStudent” that takes two
arguments, a student’s id and a subject. Assign all of the
students to the first available teacher who teaches that
subject and who is not in full capacity. If all of the teachers
are in the full capacity log to the console “Sorry, no
available teachers left”.
*/

function assignStudent(id, subject){
    for (let i = 0; i < school.teachers.length; i++){
        if (school.teachers[i].subjects.includes(subject) && school.teachers[i].capacityLeft > 0){
            school.teachers[i].students.push(findPerson(school.students, id));
            school.teachers[i].capacityLeft--;
            console.log(school.teachers[i].students)
            return;
        } else {
            console.log("Sorry, no available teachers left");
        }
    }
}

assignStudent(12, "biology");


/*
3. A method called “assignTeachersSubject” that takes two
arguments, the teacher’s id, and a new subject. Assign the
new subject to that particular teacher if that subject
doesn’t exist in their array of subjects.
*/

/*
4. Create a new method for anything you want
*/
