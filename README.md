# week0.day3.randomness

## Instructions
1. Create a Repo on GitHub named "randomness"
   - Remember to initialize it with a README.md
2. In command line, navigate to your "Documents" Folder:
   - Clone the repo to your computer using `git clone {url}`
3. Inside of this repo, create a file called "randomness.js"
   - Copy (`Ctrl+C`) and paste (`Ctrl+V`) [this code](https://raw.githubusercontent.com/AllStarCodeOrg/week0.day3.randomness/master/randomness.js) into the file
4. Inside of this file, create the following 5 functions:
   - `randomNumber` - should `console.log` a random number between 0 and 21 (exclusively)
   - `randomLetter` - should `console.log` a random letter from the alphabet
     - *Note: you’re given a global variable `alphabet` that you can use! Keep in mind that strings behave much like arrays - you can use indexing to access individual character. Try it out!*
   - `randomFood` - should `console.log` a random food from the `foods` array
     - Note: you’re given a global variable `foods` that you can use!
   - `randomStudent` - should `console.log` a random student from the `students` array
     - Note: you’re given a global variable `students` that you can use!
   - `randomGroup` - should `console.log` three random students from the `students` array
     - *Hint: feel free to call another function within this one!*
     - *Note: it’s OK if the students in the group are not unique (For example: the same student can show up twice)*
5. Be sure to test to see if your functions are working as expected by calling them at the end of your script and running the `node randomness.js` command in your console.
6. Remember to add, commit, and push your changes!

## Extra Credit
- Instead of using the `foods` and `students` array that are defined in the global space:
   - Define your own `foods` array within the scope of the `randomFood` function
   - Define your own `students` array within the scope of the `randomStudent` and `randomGroup` functions
- Comment out the original `foods` and `students` arrays. Your functions should still work!
- Rewrite the `randomGroup` function so that the group consists of only unique members (no repeats)
  - You’ll have to figure out a way to ensure each member of the group is not a duplicate
  - *Hint: there are many ways of doing this. Here are some helpful links that should help:*
    - [`.splice()` Array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
    - [`.includes()` Array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- Rewrite all of the functions you’ve made with the arrow function notation
   - [How to use arrow function notation](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)

## Helpful Resources
- [Collabedit](http://collabedit.com/)
