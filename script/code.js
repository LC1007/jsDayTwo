let subjects = ['Python', 'C++', 'VB.Net', 'JavaScript', 'Assembly']

console.log(subjects.pop());
console.log(subjects[2]);

let x = Math.floor(subjects.length / 2)
// console.log(x);
if(x % 2 == 0){
    console.log(subjects[x]);
} else {
    console.log(subjects.slice(x - 1, x +  1));
}

function findElement(arr, index){
    return index < arr.length ? arr[index] : "Index out of range"
}
console.log(findElement(subjects, 7));
