//Lets start moving away from for loops and start using for each and map and other NATIVE functions

/* 
forEach Method
  
    The forEach() method of Array instances executes a provided function
once for each array element. 

const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

Questions so far: 
1. Why is the forEach method useful? What are its limitations? - 
the forEach method is useful because it allows us to iterate through an array 
and perform a function on each element. But it cannot return anything, it only iterates.

2. In the simplest terms, how how does it differ from the map function? - 
the map function creates a new array with the results of calling a provided function 
on every element in the calling array. the forEach method does not return anything, 
it only iterates.

3. What does it mean that a map function is chainable? - 
it means that you can call a map function on a map function. reduce, sort, snd filter
are chainable to  map functions. whereas forEach would just return undefined because it
does not return anything, it only iterates. 

4. What is the reduce mthod, in very very simple terms? - 
the reduce method applies a function against an accumulator 
and each element in the array, which means that it reduces the array to a single value. for example,
if you have an array of numbers, you can use the reduce method to add all of the numbers together. The code for this 
would look like this:

const array1 = [1, 2, 3, 4];
const reducer = (acc, currentValue) => acc + currentValue;



// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));//10

5. What is the sort method, in very very simple terms? - 
the sort method sorts the elements of an array in place and returns the sorted array.
the default sort order is ascending, built upon converting the elements into strings, 
then comparing their sequences of UTF-16 code units values. for example, if you have an array of numbers,
the sort method will sort them in ascending order. the code for this would look like this:

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);//["Dec", "Feb", "Jan", "March"]

6. What is the filter method, in very very simple terms? -
the filter method creates a new array with all elements that pass the test implemented 
by the provided function, meaning that it filters out elements that do not pass the test. for example,
if you have an array of numbers, you can use the filter method to filter out all of the even numbers.
the code for this would look like this: 

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);//[2, 4, 6]

7. What is the find method, in very very simple terms? -
the find method returns the value of the first element in the provided array that satisfies, 
meaning that it finds the first element that satisfies the provided function. for example, if you 
have an array of numbers, you can use the find method to find the first even number. the code for this 
would look like:

const numbers = [1, 2, 3, 4, 5, 6];
const firstEvenNumber = numbers.find(number => number % 2 === 0);
console.log(firstEvenNumber);//2

map Method

    The map() method of Array instances creates a new array populated 
with the results of calling a provided function on every element in the calling array.

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

Syntax
Here is some example syntax for a forEach function and an array


const array1 = ['a', 'b', 'c'];
array.forEach((element) => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

Here is some example syntax for a map function and an array


const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);
console.log(map1);//[2, 8, 18, 32]

Example practice prompts for a forEach and map functions: 
- Write a function that takes an array of numbers and returns the sum of all the numbers
- Write a function that takes an array of numbers and returns the product of all the numbers
- Write a function that takes an array of numbers and returns a new array of all the even numbers
- Write a function that takes an array of numbers and returns a new array of all the odd numbers
- Write a function that takes an array of numbers and returns a new array of all the positive numbers
- Write a function that takes an array of numbers and returns a new array of all the negative numbers
- Write a function that takes an array of strings and returns a new array of all the lengths of those strings
- Write a function that takes an array of words and returns a new array of all the words capitalized



*/
