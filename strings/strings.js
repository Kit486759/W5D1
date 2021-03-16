// Implement the following functions
// your code. Refactor this file as you see fit. Export or modify any function as you see fit. Add additonal functions as you see fit. 

// const stringLib = () => 
//     {

function concatanate(a,b)
{
  let result = a.concat(b)
  return result;
}
console.log(`concatanate a(HIHI) with b(How are you?) = ${concatanate("HIHI, ","How are you?")}`)


function ASCIINumberToChar(Number)
{
// take one number, say, 127 and convert it to its ASCII char representation
let result = String.fromCharCode(Number)
return result;
}
console.log(`Take the number 65 and covert it to ASCII char = ${ASCIINumberToChar(65)}`)

function CharToAsciiNumber(char)
{
// take one Character, say, 'A' and convert it to it's Number representation
let result = char.charCodeAt(0);
return result;
}
console.log(`Take the character "A" and covert it to number = ${CharToAsciiNumber("A")}`)

function ReverseString(origionalString)
{
// split to array
let arr = origionalString.split("")
// reverse array
let reArr = arr.reverse()
// convert back to string
let result = reArr.join("")
return result;
// return a string, ie: Hello becomes olleH
}
console.log(`Reverse the string "Hello" to ${ReverseString(`"Hello"`)}`)


function GenerateOnlyUpperCase()
{
//Ie: A,B,C,D,E,F,G...Z
let abc="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
let result = abc.toUpperCase()
return result;
}
console.log(GenerateOnlyUpperCase())

function GenerateOnlyLowerCase()
{
//Ie: a,b,c,d,e,f,g...z
let abc="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"
let result = abc.toLowerCase()
return result;
}
console.log(GenerateOnlyLowerCase())


function GenerateOnlyNumbers()
{
//Ie: 0,1,2,3...9
let list = []
for (i=0;i<=9;i++){
    list.push(i)
}
return list;
}
console.log(`Generate only number "0~9" = ${GenerateOnlyNumbers()}`)

function GenerateOnlySymbols()
{
//Ie: $, %, !, #, etc
}


function GenerateUpperAndLowerCase()
{
    //Ie: A,B,C,D,E,F,G...Z and  a,b,c,d,e,f,g...z
}

// }

// `concatanate a(HIHI) with b(How are you?) = ${concatanate("HIHI, ","How are you?")}`)
// `Take the number 65 and covert it to ASCII char = ${ASCIINumberToChar(65)}`
// `Reverse the string "Hello" to ${ReverseString(`"Hello"`)}`)
// Text to upper case GenerateOnlyUpperCase())
// Text to lower case (GenerateOnlyLowerCase())
// `Generate only number "0~9" ${GenerateOnlyNumbers()}`