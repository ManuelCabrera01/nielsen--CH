// shor cuts DOM
function _id(x) {
  return document.getElementById(x);
}
// getting element from the DOM
const button = _id("button");
const result = _id("result");

//TEST ARRAY
const theArray = [
  "Nick",
  "jake",
  "RAY",
  "Kate",
  "Nick",
  "Jeremy",
  "Ryan",
  "nick",
  "AMOL",
  "rAY",
  "VIANNEY",
  "Samuel",
  "ryan",
  "Shilpika",
  "nick",
  "THOMAS",
  "tom",
  "james",
  "JERM",
  "amOl",
  "kate",
  "SCOTT",
  "Jenifer",
  "bill",
  "jenny",
  "STEVEN",
  "Ray"
];

//Main function
function myFunction(arr) {
  // take the array make  each word to lower case, sort it, capitalize the first letter and filter the unique name
  let lowerCArray = arr
    .map(element => {
      return element.toLowerCase();
    })
    .sort();
  let finaleArr = lowerCArray
    .map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1);
    })
    .filter((value, index, arr) => arr.indexOf(value) === index);
  //console loging the final array
  console.log(finaleArr);
  //   this line set the result div as empty to prevent multiple list been append to the DOM if the button is click multiple times
  result.innerHTML = "";
  // create a list of node assigning the content to each name in the array and apend it to the result div in the DOM
  finaleArr.forEach(element => {
    let node = document.createElement("li");
    let textnode = document.createTextNode(element);
    node.appendChild(textnode);
    _id("result").appendChild(node);
  });
}
//click hadlde
button.onclick = function(arr) {
  myFunction(theArray);
};
