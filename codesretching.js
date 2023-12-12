//write the pipeTemplate function
const arr = [
  { id: 1, name: 'foo'},
  { id: 2, name: 'bar'},
  { id: 3, name: 'bazz'},
];

console.log(pipeTemplate(arr, 'name'));//|foo||bar||bazz|
console.log(pipeTemplate(arr, 'id'));//|1||2||3|
console.log(pipeTemplate(arr, 'whatever'));//|undefined||undefined||undefined|
//use map method instead of for loop
function pipeTemplate(){
  
}