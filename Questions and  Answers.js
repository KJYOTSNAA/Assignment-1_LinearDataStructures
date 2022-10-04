//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

document.write("----------------------------Q1-----------------------------"+"<br/>")
function getPairsCount(arr, n, sum)
{
    let count = 0; 
   
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum){
              console.log(`${arr[i]}"+" ${arr[j]}`)
                count++;
            }
    return count;
}
 
    let arr = [ 1, 5, 7, -1, 5 ,8,9,-2,1,12];
    let n = arr.length;
    let sum = parseInt(prompt("enter the target number to check: "));
    document.write("Count of pairs is "+ getPairsCount(arr, n, sum)+"<br/>");

document.write("----------------------------Q1 end-------------------------"+"<br/>")

//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
document.write("----------------------------Q2-----------------------------"+"<br/>")

function reverseArray(oArray) {

  let leftIndex = 0;
  let rightIndex = oArray.lenght - 1;

  while (leftIndex < rightIndex) {

    // Swap the elements with temp variable
    let temp = oArray[leftIndex];
    oArray[leftIndex] = oArray[rightIndex];
    oArray[rightIndex] = temp;

    // Move indices to the middle
    leftIndex++;
    rightIndex--;
  }
}
let myArray = [2,3,5,8,9,4,7,1,6];
document.write("Before: "+ myArray+"<br/><br/>")
reverseArray(myArray);
document.write("After: " + myArray+"<br/>");
document.write("----------------------------Q2 end-------------------------"+"<br/>")


//Q3. Write a program to check if two strings are a rotation of each other?
 document.write("----------------------------Q3-----------------------------"+"<br/>")
function rotatedStr(str1, str2){
  let strLong= str1.concat(str1)
  console.log(strLong)
  console.log(str2)
  return(str1.lenght == str2.lenght) && (strLong.indexOf(str2) != -1)
}
var str1= prompt("enter the manin string: ")
var str2= prompt("enter the targated string: ")
if(rotatedStr(str1,str2)){
  document.write("Strings are rotations of each other"+"<br/>");
}
else{
  document.write("Strings are not rotations of each other"+"<br/>");
}
document.write("----------------------------Q3 end-------------------------"+"<br/>")


//Q4. Write a program to print the first non-repeated character from a string?
document.write("----------------------------Q4-----------------------------"+"<br/>")
function notReapting(str){
  const obj={}
  
  for(let elem of str){
    if(obj[elem]){
      obj[elem]=obj[elem]+1
    }
    else{
      obj[elem]=1
    }
  }
  for(let elem in obj){
    if(obj[elem] === 1){
      return elem +"  is first non repeating element"
    }
  }
    return "all are repeating element"
}

let str = prompt("enter any element and get the first non-repeating element:")
document.write(notReapting(str))
document.write("<br/>"+"----------------------------Q4 end-------------------------"+"<br/>")


//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
document.write("----------------------------Q5-----------------------------"+"<br/>")

function towerOfHanoi(x ,fromR, toR, usingR){
  if(x===1){
    document.write(`Move disk 1 from ${fromR} to ${toR}`+"<br/>")
    return
  }
  towerOfHanoi(x-1, fromR, usingR, toR)
  document.write(`Move disk ${x} from ${fromR} to ${toR}`+"<br/>")
  towerOfHanoi(x-1, usingR, toR, fromR)
}

let disk =parseInt(prompt("Enter the number of disk you want to insert:"))
towerOfHanoi(disk, 'A', 'C', 'B')

document.write("----------------------------Q5 end-------------------------"+"<br/>")


//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
 document.write("----------------------------Q6-----------------------------"+"<br/>")

function isOperator(x)
    {
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
  

    function postToPre(post_exp)
    {
        let s = [];
        let length = post_exp.length;
        for (let i = 0; i < length; i++) {
          
            if (isOperator(post_exp[i])) {
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
  
               
                let temp = post_exp[i] + op2 + op1;
  
                s.push(temp);
            }
            else {
                s.push(post_exp[i] + "");
            }
        }
  
        let ans = "";
        while (s.length > 0)
            ans += s.pop();
        return ans;
    }
     
    let post_exp = "AB+CD-*";
    document.write("Postfix: " + post_exp + "<br/>")
    document.write("Converted Prefix : " + postToPre(post_exp) +"<br/>");

document.write("----------------------------Q6 end-------------------------"+"<br/>") 


//Q7. Write a program to convert prefix expression to infix expression.
document.write("----------------------------Q7-----------------------------"+"<br/>")
    function isOpr(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            case '%':
                return true;
        }
        return false;
    }
 
    function convert(str)
    {
        let s1 = [];
        let l = str.length;

        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
 
            if (isOpr(c))
            {
                let op1 = s1[s1.length - 1];
                s1.pop()
                let op2 = s1[s1.length - 1];
                s1.pop()
 
                
                let temp = "(" + op1 + c + op2 + ")";
                s1.push(temp);
            }
            else{
                 s1.push(c + "");
            }
        }
        return s1[s1.length - 1];
    }
     
    let exp = "*-A/BC-/AKL";
    document.write("Prefix: " + exp + "<br/>")
    document.write("Converted Infix : " + convert(exp));

document.write("<br/>"+"----------------------------Q7 end-------------------------"+"<br/>")


//Q8. Write a program to check if all the brackets are closed in a given code snippet.
document.write("----------------------------Q8-----------------------------"+"<br/>")

 function Brackets(expr)
{
  
    let stack = [];
 
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
            stack.push(x);
            continue;
        }
 
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
 
    return (stack.length == 0);
}
 

let expr = prompt("enter a parten of  brackets like this '([{}])':");
 

if (Brackets(expr))
    document.write(`${expr} this code snippet is having there closing barcket`);
else
    document.write(`${expr} this code snippet missing there closing barcket `);
 
document.write("<br/>"+"----------------------------Q8 end-------------------------"+"<br/>")


//Q9. Write a program to reverse a stack.
 document.write("----------------------------Q9-----------------------------"+"<br/>")

let stv = [];

function insertAtBottom(x)
{
    if(stv.length==0)
        stv.push(x);
    else
    {
            let a = stv.pop();
            insertAtBottom(x);
            stv.push(a);
    }
     
     
}
 

function reverseStack(){
    if(stv.length > 0)
        {
            let x = stv.pop();
            reverseStack();
            insertAtBottom(x);
        }
}
 
stv.push('K');
stv.push('J');
stv.push('y');
stv.push('o');
stv.push('t');
stv.push('s');
stv.push('n');
stv.push('a');
stv.push('@');
stv.push('0');
stv.push('4');
stv.push('0');
stv.push('6');
stv.push('1');
stv.push('9');
stv.push('9');
stv.push('9');
 
document.write("Original Stack<br>");
 
document.write(stv.join(" ")+"<br>");

reverseStack();
 
document.write("Reversed Stack<br>");
 
document.write(stv.join(" "));

document.write("<br/>"+"----------------------------Q9 end-------------------------"+"<br/>")


//Q10. Write a program to find the smallest number using a stack.
document.write("----------------------------Q10-----------------------------"+"<br/>")

class Stack10{
    constructor(){
      this.items = []
      this.length = 0
      this.push = (element) => {
        this.items.push(element)
        this.length+=1
      }
      this.pop = () => {
        if(this.length==0){
          return -1;
        }
        this.length-=1
        return this.items.pop()
      }
      this.peek = () => {
        if(this.length==0){
          return -1;
        }
        return this.items[this.length-1]
      }
    }
  }
  let stack10=new Stack10();
 
  stack10.push(3534)
  stack10.push(14)
  stack10.push(43)
  stack10.push(3563)
  stack10.push(643)
  stack10.push(26)
  stack10.push(475)
  stack10.push(1234)
  let smallest=stack10.pop(),temp10;
  
  let nk=stack10.length;
  for(i=0;i<nk-1;i++){
    temp10=stack10.peek();
    if(temp10<smallest)smallest=temp10
    stack10.pop()
  }
 document.write("the smallest number from stack is " + smallest)

document.write("<br/>"+"----------------------------Q10 end-------------------------"+"<br/>")
