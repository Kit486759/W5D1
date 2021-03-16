// Implement the following functions

// const stringLib = () => 
//     {

var a = 2
var b = 4
// ======================================================================================

function add(a, b) {
  return a + b;
}
console.log(`Function ${a} + ${b} = ` + add(a, b));

// ======================================================================================
function sub(a, b) {
  return a - b;
}
console.log(`Function ${a} - ${b} = ` + sub(a, b));

// ======================================================================================
function mul(a, b) {
  return a * b;
}
console.log(`Function ${a} x ${b} = ` + mul(a, b));

// ======================================================================================
function div(a, b) {
  return a / b;
}
console.log(`Function ${a} / ${b} = ` + div(a, b));

// ======================================================================================
function Exponentiation(a, b) {
  return a ** b
  // a * b[i];
}
console.log(`Function base ${a} power ${b} = ` + Exponentiation(a, b));

// ======================================================================================
function Increment(a, b) {
  return a + b
}
console.log(`increment ${a} by ${b} = ` + Increment(a, b));

// ======================================================================================
function Decrement(a, b) {
  return a - b
}
console.log(`decrement ${a} by ${b} = ` + Decrement(a, b));

// ======================================================================================
function NumberListA(start, end) {
  // return list of numbers starting at start and ending at end
  let list = []
  for (let i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
}
console.log(`start from 2 ,end with 5 `, NumberListA(2, 5))

// ======================================================================================
function NumberListB(start, end, skipEvery) {
  // return list of numbers starting at start and ending at end but skipping every N (ie: skip every 2, or skip every 3)
  let list = []
  for (let i = start; i <= end; i++) {
    list.push(i);
  }
  return list.filter((skip) => (skip !== skipEvery));
}
// start from 2 and end in 10 , skip 5
console.log(`start from 2 ,end with 10 and skip 5 `, NumberListB(2, 10, 5))

// ======================================================================================
function randomNum(min, max) {
  // Math.floor(Math.random() * 10)
  return Math.floor(Math.random() * (max - min) + min);
}

function NumberListC(start, end, shouldBeRandomOrNot) {
  // return list of numbers starting, continuing for (count) and a boolean to determine
  // if the list of numbers should be random or not
  let list = []
  for (let i = start; i <= end; i++) {
    if (shouldBeRandomOrNot === true) {
      list.push(randomNum(start, end))
    } else {
      list.push(i);
    }
  }
  return list;
}
console.log(NumberListC(3, 9, true))

function IsOdd(aNumber) {
  if (aNumber % 2 == 0) {
    return console.log(`${aNumber} is not odd number`)
  } else {
    return console.log(`${aNumber} is odd number`)
  }
  // is a number odd? true false
}
console.log(IsOdd(3))

function IsEven(aNumber) {
  if (aNumber % 2 == 0) {
    return console.log(`${aNumber} is even number`)
  } else {
    return console.log(`${aNumber} is not even number`)
  }
  // is a number odd? true false
}
console.log(IsEven(6))
// console.log(6%2)

function RandomNumberListA(start, end) {
  // return list of random numbers between start and end
  let list = []
  for (var i = start; i <= end; i++) {
    list.push(randomNum(start, end));
  }
  return list;
}
console.log(`start from 2 ,end with 10 and random number between `, RandomNumberListA(2, 10));


function RandomNumberList(start, end, allowDuplicates) {
  // return count number of random numbers, between start and end.
  // use allowDuplicates to choose if we should allow duplicates in the list or not

  let list = []
  count = randomNum(start, end);
  for (let i = start; i <= count; i++) {
    
    if (allowDuplicates === true) {
      list.push(i);
    } else {
      list.push(i);
      NonDuplist = [...new Set(list)];

    }
  }
  return list;
}
console.log(`From 1 to 10 , with random count and set allow duplicates :true`,RandomNumberList(1, 10, false))

document.body.innerHTML = 
(`

Function ${a} + ${b} =  <b>${add(a, b)}</b>
<br><br>
Function ${a} - ${b} =  <b>${sub(a, b)}</b>
<br><br>
Function ${a} x ${b} =  <b>${mul(a, b)}</b>
<br><br>
Function ${a} / ${b} =  <b>${div(a, b)} </b>
<br><br>
Function base ${a} power ${b} = <b>${Exponentiation(a, b)}</b> 
<br><br>
increment ${a} by ${b} = <b>${Increment(a, b)}</b> 
<br><br>
decrement ${a} by ${b} = <b>${Decrement(a, b)}</b> 
<br><br>
start from 2 ,end with 5 = <b> ${NumberListA(2, 5)}</b> 
<br><br>
start from 2 ,end with 10 and skip 5 <br><b>${NumberListB(2, 10, 5)}</b>
<br><br>
start from 3 end at 9, random: true<br><b>${NumberListC(3, 9, true)}</b>
<br><br>
<b>3 is odd</b> ${IsOdd(3)}
<br><br>
<b>6 is not even</b> ${IsEven(6)}
<br><br>
Start from 2 ,end with 10 and random number between<br><b>${RandomNumberListA(2, 10)}</b>
<br><br>
From 1 to 10 , with random count and set allow duplicates :false<br><b>${RandomNumberList(1, 10, false)}</b>`)


