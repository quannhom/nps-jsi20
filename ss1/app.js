let students = [
{
    id: 1,
    name: "Lê Anh",
    age: 1,
    major: "Computer Science",
},
{
    id: 2,
    name: "Vũ Dũng",
    age: 2,
    major: "Mathematics",
},
{
    id: 3,
    name: "Thùy Chi",   
    age: 3,
    major: "Calisthenic",
}];

students.push({
    id: 4,
    name: "Quan",
    age: 4,
    major: "homeless"
});

console.log(students.find(obj => obj.id ==2));
console.log(students.findIndex(obj => obj.id ==2));
