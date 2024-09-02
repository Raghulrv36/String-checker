var Name = ["Rocky","John","Jimmy","Jack"];
var String = 'Rocky';
var NewString = "Rocky"

if(Name.indexOf(String) !== -1 ) {
    console.log(`${String} is present in the array`);
}
else{
    console.log(`${String} is not present in the array`);
};


if(Name.indexOf(NewString)=== -1) {
    Name.push(NewString);
    console.log(`${NewString} has been added to the array`);
}
else{
    console.log(`${NewString} already exists in the array`);
}

Name.sort();

console.log("Sorted array:", Name);

console.log("Length of the array:", Name.length);

console.log("Final Array: ", Name);