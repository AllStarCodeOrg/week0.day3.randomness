//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////


// should console.log a random number between 0 and 21 (exclusively)
function randomNumber(){
    const number = Math.random()*21; // long decimal
    const output = Math.floor(number); // removes decimal
    console.log(output);
}

// should console.log a random letter from the alphabet
function randomLetter(){
    const number = Math.random()*alphabet.length; // long decimal
    const index = Math.floor(index); // removes decimal
    const letter = alphabet[index]; // can use indexing
    console.log(letter);
}

// should console.log a random food from the "foods" array
function randomFood(){
    // BONUS - define array within function's scope
    // const foods = ["my","own","array","of","foods"];
    const number = Math.random()*foods.length; // long decimal
    const index = Math.floor(index); // removes decimal
    const letter = foods[index];
}

// should console.log a random student from the "students" array
function randomStudent(){
    // BONUS - define array within function's scope
    // const students = ["my","own","array","of","student"];
    const number = Math.random()*students.length; // long decimal
    const index = Math.floor(index); // removes decimal
    const letter = students[index];
}

// should console.log three random students from the "students" array
// Many ways of doing this!
function randomGroup(){
    // BONUS - define array within function's scope
    // const students = ["my","own","array","of","student"];

    // DUPLICATES ALLOWED
    for(let i = 0; i<3;i++){
        const number = Math.random()*students.length; // long decimal
        const index = Math.floor(index); // removes decimal
        console.log(students[index]);
    }
    
    // BONUS SOLUTION METHOD #1
    // const temp = [];
    // while(temp.length<3){
    //     const number = Math.random()*students.length; // long decimal
    //     const index = Math.floor(index); // removes decimal
    //     const student = students[index];
    //     // notice the "!", which negates the boolean
    //     if(!temp.includes(student)){
    //         // if the student is NOT included in the temp array...
    //         temp.push(student);
    //     }
    // }
    // console.log(temp); // just logging the whole array 'cause I'm lazy

    // BONUS SOLUTION METHOD #2
    // for(let i = 0; i<3;i++){
    //     const number = Math.random()*students.length; // long decimal
    //     const index = Math.floor(index); // removes decimal
        
    //     // removes the 1 item from array and stores into variable
    //     // since item removed, can't be picked again!
    //     const student = students.splice(index,1); 
    //     console.log(student);
    // }
}

