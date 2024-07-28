const age = ['12','14','29','31'];

const val = age.map((array, element , index) => {
    console.log(array);
    // console.log(element);
    // console.log(index); 
});
const fill = age.filter(x => x<29);
console.log(fill);

const fi = age.find(x => x>12);
console.log(fi);
