/********************Basic Js ************/
/*js java script language 'loosely type languge'
tag scripte in last body 'child'

output :
document.write()
console.log()
window.alert()

console is API not fun Js 

ES6 'Orginatin response to put standered info like as language program like as Js '



data type : 
String
Numbers
Array => Object  []
obj => Object  {}
boolean
undefined
null => Object



Variables :
CamalCase sensitive
( _  $ ali1) ✓
anything (1ali +ali )×


HTML <a id=''>
   id is Variable   //Important
</a>

                var          let       const 
         
redeclar:         ✓            ×          ×
Access befor:   undifine       ×          ×
Scope Drama:  not add to window ×         ×
block fun scope ({}):

*/



// Test Code ' Domهنستخدمه ل قدام كثير في '
/*tittle = 'Ali'
parg = 'AliHassan'
time = '25/10'
markup = (`
<div>
  <h1>
    Hello ${tittle}
  </h1>
    <p>
      Your is ${parg}
    </p>
    <span>
     ${time}
    </span>
</div>
`)

function repeat(fun,count) {
  for (var i = 0; i < count; i++) {
    document.write(fun);
    document.write('-----------------')
  }
}
repeat(markup,4); */
//document.write(markup.repeat(4))



/*******************Numbers***************/
/*
console.log(1_000_000);
console.log((100).toString())
console.log(100..toString())
console.log((100.55556).toFixed(3))
console.log(parseInt('15 alihassan0'))
console.log(Number.isInteger('100'))
console.log(Number.isNaN(false))
*/

//round() ceil() floor() min() max() tranc() 


/*********************String***************/
/*name = 'Ali Hassan Amer Abu Safiha';
console.log(name[5])
console.log(name.charAt(5))
console.log(name.trim())
console.log(name.trim().charAt(5).toUpperCase())
console.log(name.indexOf('m'))
console.log(name.lastIndexOf('f'))
console.log(name.slice(2,7))
console.log(name.slice(-2))
console.log(name.split(' ') , 2);
console.log(name.substring(7,2))
console.log(name.includes('m',15))
console.log(name.startwith('m',15))
console.log(name.endWith('m',15))
*/



/*********************Control Flow*********/
/*if (true) {

}

if (true) {

} else {

}

if (true) {
  if (true) {

  }
}

theage=60;
let result = theage <= 20 ? console.log('20') : theage > 20 && theage > 60 ? console.log('40') : theage >=  60 ? console.log('80') : console.log('unkwon');
console.log(result)


switch (expression) {
  case 'case':
    // Tab to edit
    break;
  
  default:
    // Tab to edit
}
*/



/***************Arrays********************/
/*
//let myFrinds=new Array()
let myFrinds=['Ali','Hassan','Amer','safiya',23,55,['name','age'],'Ali']

myFrinds[5]=''

for (var i = 0; i < myFrinds.length; i++) {
  console.log(myFrinds[i])
}

console.log(Array.isArray(myFrinds))
myFrinds[8]='Ahmed'
console.log(myFrinds.length)


//push
//pop
//shift
//unshift
//Sort
// revers


console.log(myFrinds.indexOf('Ali'))
console.log(myFrinds.indexOf('Mohammed'))
console.log(myFrinds.lastIndexOf('Ali'))
console.log(myFrinds.includes('Mohammed'))

console.log(myFrinds.slice(1,-1))
console.log(myFrinds.splice(2,2,'Amany','Samar'))
console.log(myFrinds)

//concat
console.log(myFrinds.join('#'))
*/



/***************Loop ******************/
/*for (var i = 0; i < list.length; i++) {
  // Tab to edit
}
for (var prop in object) {
  // Tab to edit
}

while (condition) {
  // Tab to edit
}

dowhile()

//breake  
// countinue
// label idntifire بتحكم في اللوب الاساسي باستخدام اللوب الفرعي 
//mainLoop:
//nestedLoop : 
//breake mainLoop
*/


/***************Loop Challange************/
/*
let Admins = ['Ahmed', 'Osama', 'Sayad', 'Ali', 'Stop'];

let Emp = ['Amjed', 'Samah', 'Amer', 'Omer', 'Othman', 'Amany', 'Samia', 'AliHassan', 'AmerHassan']

let m = 1;

for (let i = 0; i < Admins.length; i++) {
  if (Admins[i] == 'Stop') {
    m = i;
    break
  }
}
document.write(`<h3>
  We Have ${m} Admins
</h3>`)



for (let i = 0; i < Admins.length; i++) {
  if (Admins[i] == 'Stop') {
    break
  }
  document.write(
    `<div>The team member of ${Admins[i]} is </div>`)
  document.write(`<h3>
     Team Member :
   </h3>`)
  for (let j = 0; j < Emp.length; j++) {

    if (Admins[i][0] == 'A' && Emp[j][0] == 'A') {
      document.write(
        `<div>- ${Emp[j]}</div>`)
    }




    if (Admins[i][0] == 'O' && Emp[j][0] == 'O') {

      document.write(
        `<div>-  ${Emp[j]}</div>`)

    }



    if (Admins[i][0] == 'S' && Emp[j][0] == 'S') {

      document.write(
        `<div>- ${Emp[j]}</div>`)
    }
  }
  document.write('-'.repeat(70))

}
*/


/***************Function******************/
//function fname(param) {
// Tab to edit

// return      اخر جملة في الفانكشن توقف الفانكشن
//}  user defined
//fname(aeg)
//console.log    built in


//defult Value
/*function fname(name='test') {
  console.log(name)
}
fname()
*/



//Rest Para
/*function calc(name,...nums){
  let re=0;
  for (var i = 0; i < nums.length; i++) {
    re+=nums[i];
  }
  return ` ${name}${re}`;
}

console.log(calc('Ali',1,2,3,4))
*/


// Nested Functio
/*
function fname(fname) {
  console.log('fname is ',fname)
  
  function Lname(lname) {
   console.log('lname is ',lname)
  }
  Lname('Hassan')
}

fname('Ali')
*/


//Anunmous Functions 
/*function (param) {
  // بدون اسم  (onclick)
}

()=>  //Arrow Functions 
*/


// Scope 'Local and Globale'
/*
ع سبيل المثال الفانكشن تقرا من كل الولكل في الاول وبعدها بتشوف الجلوبال 
اذا موجود في اللوكل بس معرف بعد هيطلع ايرور انو معرف بعد ولا اعرفه قبل 
اذا مش معرف هيقرا من الجلوبال
*/

/*
Var 
اذا عدل في اللوكال هيعدل في الجلوبال 
Let 
مش راح يعدل في الجلوبال
*/






//Higher Order Function 
// فانكاش بتاخذ فانكشان ك para
/*

// 1- MaP
myNums = [10, 20, 30, 40, 50]

let addSelf = myNums.map(function(ele, index, arr) {
  return ele + ele
})
console.log(addSelf) //New Array
console.log(myNums) // inital Array


let swap = 'elZERo';
let sw = swap.split('').map(function(ele) {
  return ele === ele.toLowerCase() ? ele.toUpperCase() : ele.toLowerCase()
}).join('')

console.log(sw)



// 2- FiLlTR    تفحص حسب الشرط واذا صح بيعدي في Array جديدة

let myNumbers = [11, 20, 15, 30, 33, 826]
let modnum = myNumbers.map(function(ele) {
  return ele % 2 === 0 ? ele : ""
})
console.log(modnum)


let max = 'A13BS2ZX';
let sm = max.split('').filter(function(ele) {
  //  return !isNaN(parseInt(ele))
  return ele % ele == 0
}).map(function(ele) {
  return ele * ele
}).join('')
console.log(sm)


// 3-Redues      Single Value
let number = [10, 20, 30, 40];
let addNums = number.reduce(function(acc, cur) {
  return acc + cur
}, 100);
console.log(addNums)


let removeCh = ['E', '@', 'L', 'Z', '@', 'R', '@', 'O']

let final = removeCh.filter(function(ele) {
  return !ele.startsWith('@')


  // use redues not Join //
}).reduce(function(acc, cur) {
  return ` ${acc}${cur}`
})
console.log(final)

// 4- ForEach  هنستخدمها كثير في dom
// return   undifined
// مع ul li  duv 
*/


