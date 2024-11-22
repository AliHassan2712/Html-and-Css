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


them

/*****************Object******************/
/*
//1- Create Obj
let user = {
  // prop
  name: 'ali',
  age: 23,
  sayhello: function() {
    console.log(`hello ${user.name}`)
  }
}


//nested Object
user.addres = { // اضافة 
  ksa: 'AlRiahd',
  pal: {
    gaza: 'Gaza',
    'west bank': 'West Bank',
  }
}
console.log(user.name)
console.log(user.sayhello())
console.log(user.addres.ksa)
console.log(user.addres.pal['gaza']) //Dot Notion
console.log(user['addres']['pal']['gaza']) //Notaion
console.log(user['addres']['pal']['west bank']) //Notaion  
// مستحيل اصل ل west bank بدون ما استخدم ل breaket Notaion


//2 - Creatr Obj use Keyword New
let user1 = new Object({
  name: 'Ahmed',
})
user1.age = 22;
console.log(user1.age)
console.log(user1.name)



//3 - Create Obj use Create Method && This KeyWord 

let obj1 = {
  age: 20,
  doubleAge: function() {
    //return obj1.age *2;  // Without use this just to obj1
    return this.age * 2; //for any object
  },
}

let copyObj = Object.create(obj1)
copyObj.age = 50
console.log(copyObj.doubleAge())


//4 - Create Object use Assgin Method
let object1 = {
  prop1: 10,
  prop2: 20,
  meth1: function(param) {
    return this.prop1;
  },
}

let object2 = {
  prop3: 3,
  meth3: function(param) {
    return this.prop3;
  },
}

let targetObj = {
  prop1: 100,
  prop2: 200,
}


// (Target Obj , obj ,obj ....)
// اذا لقى بروبرتي نفس الاسم بياخذ الاولى 
let finalObj = Object.assign(targetObj, object1, object2)
finalObj.testprop = 'test'  // اضافة وتحديث 
console.log(finalObj)
*/

/*******************************************/
/********* Problem Solving in JS ***********/

/******* Sum Num to 100 **********/
/*let result = 0
for (var i = 0; i <=100; i++) {
   result += i
}
console.log(result)
*/
/******* Factorial 4 **********/
/*
function fact(num) {
  if (num == 1 || num == 0) {
    return 1
  } else {
    return num * fact(num - 1)
  }
}
console.log(fact(10))


var number = 1
for (var i = 1; i <= 10; i++) {
  number *= i;
}
console.log(number)


function factorial(num) {
  let numb = 1
  for (var i = 1; i <= num; i++) {
   numb *= i;
  }
  return numb
}
console.log(factorial(4))
*/


/*******  Calc Num Of Array**********/
/*
let arr =[2,3,-1,5,7,9,10,15,95]
let sumArr = arr.reduce(function(acc,cur) {
  return acc + cur
})
console.log(sumArr)
*/

/******* Positive Number in Array*********/
/*
let positveArr =[]
let arr = [10,-10,20,30,-55,-62,-22,100,-20]
function postiveNum(arr) {
  for (var i = 0; i < arr.length; i++) {
   if (arr[i] >  0) {
     positveArr.push(arr[i])
   }
  }
  return positveArr
}
console.log(postiveNum(arr))

let pos= arr.filter(function(ele) {
  let posNum =[]
  
   return ele > 0 ?  posNum.push(ele) : ''
  
})

console.log(pos)
*/


/******* Max Number in Array*********/

//let arr = [10, -10, 20, 30, -55, 536, -62, -22, 100, -20]

/*let maxNum = arr.reduce((acc,cur)=>{
  return acc > cur ? acc : cur
} )

console.log(maxNum)
*/

/*function maxNum(arr) {
  let max = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
console.log(maxNum(arr))
*/


/******* Is NaN() && Number.isNaN() *****/
/*
console.log(isNaN('50'))   // false
console.log(isNaN(50))   //false
console.log(isNaN('hello'))  // true

console.log(Number.isNaN('hello'))  //false
console.log(Number.isNaN('hello'/10)) //false

console.log(parseInt('100 Ali')) //100
console.log(+('100 Ali')) // NaN
console.log(Number('100 Ali')) // NaN 
console.log(parseInt('Ali 100 Ali')) //NaN
*/


/******* Sum Digit Numbers **************/
/*
function sumDigit(nums) {
  x =nums.toString();
  sum = 0
  for (var i = 0; i < x.length; i++) {
    
    sum += (Number(x[i]))
  }
  return sum;
}
console.log(sumDigit(123456))
*/

/******* Rotate an array 1 pos to left*****/
/*let arr = [1, 2, 3, 4, 5];
x=arr.shift()
arr.push(x)
console.log(arr)
*/
/***** Rotate an array 1 pos to right*****/
/*let arr1 = [1, 2, 3, 4, 5];
x1 = arr1.pop()
arr1.unshift(x1)
console.log(arr1)
*/


/************** Revers Array *************/
/*
let arr = ['ali', 'Hassan', 1, 2, 3]; //revers array
let str = 'AliHassanAmerAbuSafiah'
 // revers String
 
function revers(arr) {
  for (var i = arr.length-1; i >= 0; i--) {
    console.log(arr[i])
  }
}

revers(arr)
revers(str)
*/
/************** Mearge Array *************/
/*
let arr1 = [1, 2, 3, 4, 5]
let arr2 = ['a', 'b', 'c']
let newarr = []

function meage(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    newarr.push(arr1[i])
  }
  for (var j = 0; j < arr2.length; j++) {
    newarr.push(arr2[j])
  }
  return newarr
}

console.log(meage(arr1, arr2))
*/




/*******تم بحمد الله الانتهاء من اساسيات الجافا سكريبت ....نكمل في المتقدم */






















/**********Advance Java Script *************/
/************** DOM ***************** *****/
