// Implement the following functions
// your code. Refactor this file as you see fit. Export or modify any function as you see fit. Add additonal functions as you see fit. 

// const stringLib = () => 
//     {

function concatanate(a, b) {
    let result = a.concat(b)
    return result;
}
console.log(`concatanate a(HIHI) with b(How are you?) = ${concatanate("HIHI, ", "How are you?")}`)


function ASCIINumberToChar(Number) {
    // take one number, say, 127 and convert it to its ASCII char representation
    let result = String.fromCharCode(Number)
    return result;
}
console.log(`Take the number 65 and covert it to ASCII char = ${ASCIINumberToChar(65)}`)

function CharToAsciiNumber(char) {
    // take one Character, say, 'A' and convert it to it's Number representation
    let result = char.charCodeAt(0);
    return result;
}
console.log(`Take the character "A" and covert it to number = ${CharToAsciiNumber("A")}`)

function ReverseString(origionalString) {
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

// let abc="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
// let ABC = abc.toUpperCase()
// let array = ABC.split(',')
// console.log(array.length)


function GenerateOnlyUpperCase() {
    //Ie: A,B,C,D,E,F,G...Z
    let result=[]
    let abc = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
    let ABC = abc.toLowerCase()
    let arrayABC = ABC.split(',')
    // console.log(arrayABC.length)
    for (let i = 0; i <= randomNum(1, 26); i++) {
        result.push(arrayABC[randomNum(1, 26)])
    }
    return result;
}
console.log(GenerateOnlyUpperCase())

function GenerateOnlyLowerCase() {
    //Ie: a,b,c,d,e,f,g...z
    let result=[]
    let ABC = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"
    let abc = ABC.toUpperCase()
    let arrayabc = abc.split(',')
    // console.log(arrayABC.length)
    for (let i = 0; i <= randomNum(1, 26); i++) {
        result.push(arrayabc[randomNum(1, 26)])
    }
    return result;
}
console.log(GenerateOnlyLowerCase())


function GenerateOnlyNumbers() {
    //Ie: 0,1,2,3...9
    let list = []
    for (i = 0; i <= 9; i++) {
        list.push(i)
    }
    return list;
}
console.log(`Generate only number "0~9" = ${GenerateOnlyNumbers()}`)


function randomNum(min, max) {
    // Math.floor(Math.random() * 10)
    return Math.floor(Math.random() * (max - min) + min);
}

function GenerateOnlySymbols() {
    //Ie: $, %, !, #, etc
    // 33-47
    // 91-96
    // 58-64
    // 123-126

    let symbol = ["+", ",", ".", "-", "'", "\"", "&", "!", "?", ":", ";", "#", "~", "=", "/", "$", "£", "^", "(", ")", "_", "<", ">"]
    console.log(symbol.length)
    let resultSymbol = []
    for (let i = 0; i <= randomNum(1, 23); i++) {
        resultSymbol.push(symbol[randomNum(1, 23)])
        NonDuplist = resultSymbol.join("")
    }
    return NonDuplist;
}
// let result = 
console.log(`Generate only symbols = ${GenerateOnlySymbols()}`)

function GenerateUpperAndLowerCase() {
    //Ie: A,B,C,D,E,F,G...Z and  a,b,c,d,e,f,g...z
    let list = []
    list.push(GenerateOnlyUpperCase(), " & ", GenerateOnlyLowerCase())
    return list;
}

console.log(`Create upper case and lower case ${GenerateUpperAndLowerCase()}`)

// }
document.body.innerHTML =
    (`
concatanate a(HIHI) with b(How are you?) =  <b>${concatanate("HIHI, ", "How are you?")}</b>
<br><br>
Take the number 65 and covert it to ASCII char =  <b>${ASCIINumberToChar(65)}</b>
<br><br>
Take the character "A" and covert it to number = <b>${CharToAsciiNumber("A")}</b>
<br><br>
Reverse the string "Hello" to  <b>${ReverseString(`"Hello"`)}</b>
<br><br>
Text to upper case =  <b>${GenerateOnlyUpperCase()}</b>
<br><br>
Text to lower case =  <b>${GenerateOnlyLowerCase()}</b>
<br><br>
Generate only number "0~9" = <b>${GenerateOnlyNumbers()}</b>
<br><br>
Generate only symbols : <b>${GenerateOnlySymbols()}</b>
<br><br>
Create upper case and lower case = <b>${GenerateUpperAndLowerCase()}</b>
`)