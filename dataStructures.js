// level {1}

//1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.Output should be [2, 3, 4]

function add_1(arr1){
    return Array.from(arr1, s => ++s);  // increment 1 to each element 
}




//2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.Output should be a number: 6

var array=[1,2,3]

var sum=0;
for(let i =0; i<array.length; i++){
    sum += array[i];
}





//3.Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.Output should be a string: "name: Elie, rank: Pro"

var obj= { name: 'Elie', rank: 'Pro'};
Object.keys(obj).forEach((prop)=> 
console.log(prop));