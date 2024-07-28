const students = [
    {id:11, sTname:"habib"},
    {id:12, sTname:"Musa"},
    {id:13, sTname:"Mamun"},
    {id:13, sTname:"Mokhlech"}
]

const sName = [];

students.map( x => sName.push(x.sTname));

console.log(sName);