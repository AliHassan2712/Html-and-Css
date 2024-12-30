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



// Advance to obj in js Ues to React 
/*
let user = {
  name :'ali',
  jobs :['prog','eng'],
  address:{
    street :'Omar AlMokhtar',
    number : '2019'
  }
}

let copyObject = user;  // هان صار ياشر عليه
//يعني اذا صار تعديل راح يعدل 
//Refrence 
copyObject.name ='Hassan'
console.log(user.name)  //Hassan

let mycopyObj = {...user}  // هان هينسخ المحتوي فقط
// اي تعديل مش هيعدل ع الاصل 
mycopyObj.name = 'Amer'
console.log(mycopyObj)  //name ='Amer '
console.log(user.name)  // name = 'Hassan'

let newObj = {user}  //user : user 
newObj.name = 'test'
// صارت زي هيك
newObj= {
  user:user ,   // نفسه الاصل
  name : 'test'
}
console.log(user.name)
console.log(newObj.name)
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









/**********Advance Java Script ********/

/************** DOM ***************** *****/
/* Access to Element */
/*document.getElementById('but')
document.getElementsByTagName('button')
document.getElementsByClassName('test')
document.querySelector('.but')
document.querySelectorAll('#but') // Array

document.tittle
document.body
document.forms[0].one.value
document.images[1].scr
document.links[2].href
*/

/* Content in Js */
/*
let myEle = document.querySelector('.js');
myEle.innerHTML = 'Text from <span>Js</span> File'   // not enclode html tag  sa html

myEle.textContent = 'Text from <span>Js</span> File'  // encloude html tag  as text
*/


/* Get &&  Set Atteubits */
/*
let myEle = document.querySelector('.js');
myEle.setAttribute('data','test-data')
console.log(myEle)
console.log(myEle.getAttribute('class'))
*/

/* Check Atteubits */
/*
let myEle = document.querySelector('.js');
console.log(myEle.attributes)
console.log(myEle.hasAttribute('class'))
console.log(myEle.hasAttributes())
myEle.removeAttribute('class')
console.log(myEle)
*/

/* Childern`s */
/*
childern 
childern[]     //  فقط html tags
childernNode()   // لكل اشي comment text html

// هدول خاص في html tag فقط
firstElementChild
lastElementChild

// هدول لكل اشي سواء text comment html tag ..
firstChild
lastChild
*/



/* Create Element &&  Append Child */
/*
for (var i = 0; i <= 3; i++) {
  let myDiv = document.createElement('div')
  let myTittle = document.createElement('h3')
  let myP = document.createElement('p')

  let myTittleText = document.createTextNode('AliHassan')

  let myPText = document.createTextNode('AliHassanAmerAbusafiah')

  let myAttr = document.createAttribute('data-custom')

  let myComment = document.createComment('Test Comment')

  myDiv.className = 'Product'
  myDiv.setAttribute('class', 'test-class')


  myDiv.appendChild(myComment)

  myTittle.appendChild(myTittleText)
  myDiv.appendChild(myTittle)

  myP.appendChild(myPText)
  myDiv.appendChild(myP)

  document.body.append(myDiv)
  console.log(myDiv)
}
*/

/*********** Events ***************/
/*
//mouse
ele.onclick
.oncontentmenu
.onmouseleve
.onmouseenter

//window
window.onscroll
window.onresize

//form
input.onfoucs
.onblur
.onsubmit  //validations
*/

/// لسا في غيرهم كثير 
/*
let username = document.querySelector('#username')

let password = document.querySelector('#password')

document.forms[0].onsubmit = function(e) {
  let userValid = false
  let passValid = false

  if (username.value !== '' && username.vale.lenght >= 8) {
    userValid = true
  }

  if (password.value !== '' && passValid.vale.lenght >= 8) {
    userValid = true
  }


  if (userValid === false || passValid === false) {
    e.preventDefult()
  }
}
*/

/*********** Class List ***/
/*
let ele = document.querySelector('.test')
console.log(ele.classList)
ele.classList.length
ele.classList.contains
ele.classList.item

// ممكن اضيف واحذف اكثر من class في نفس الوقت 
ele.classList.add('',' ','')
ele.classList.remove('','')
ele.classList.toggle('')  // and &&  remove at same time 
*/

/********* Css Style ****/
/*
let ele = document.querySelector('.test')
ele.style.color = 'red'   //kamalCase
ele.style.cssText = ("font-size : 40px ; color : green")  // اكثر من prop
ele.style.setProperty('','' ,هان بحط important )
ele.style.removeProperty('')
*/
/*
console.log(document.styleSheets[0].rules[0].style
)
*/




/**** Deal With Element ***/
/*
befor
after
prpend
append
remove   // حذف العنصر نهائيا من الdoc
// بتفرق عن display none 
// انو المستخدم ممكن يفتح inspctet ويشيل الnone ويشوف العنثصر 
// اما remove بقدرش لانو مش موجود 
*/



/************ Siblings (Trqvrsing) *****/
/*
nextSibling   // اي عنصر text comment html
nextElementSibling    // فقط html
 // الprevius زيهن الي فوق
previousElemnetSibling
prevoiusElemnet

parentElemnet   // الاب 
*/


/********* Clone Node (deep) ********/
/*
let myP = document.querySelector('p').cloneNode(true)

//لازم اغيرالها الid 
//عشان تفرق عن الاصل 
let myDiv = document.querySelector('div')
myDiv.appendChild(myP)
document.body.appendChild(myDiv)
*/

/********* Event Listner ********/
/*
onclick ع سبيل المثال لو استخدمها مرتين لنفس الele
راح تعمل override علي الي قبل

طب كيف بدي اضيف اكثر من event على الele
هان بيجي دور addEventListener
*/


/*
let myP = document.querySelector('p')


myP.addEventListener('click',function (e) {
  console.log('one event')
})

myP.addEventListener('click', function(e) {
  console.log('two event')
})

myP.onclick = function (e) {
console.log('event one ')  
}

myP.onclick = function(e) {
  console.log('event two ')
}

function eventThree() {
  console.log('event three')
}

myP.addEventListener('click',function (e) {
  eventThree()
})
*/

// من اعظم استخدمات الadd lisner event
// هو اضافة event ل ele
// لم يتم انشاؤه بعد 
// onclick راح يطلع ايرور لو استخدمها لعنصر لسا ما انشئ


/*
let myP = document.querySelector('p')
myP.onclick = function(e) {
  let newP = myP.cloneNode(true)
  newP.className = 'clone'
  document.body.appendChild(newP)
}

*/


// Error for use onclick
/*
let cloned = document.querySelector('.clone')
cloned.onclick =function (e) {
  console.log('iam cloned')
}
*/


// This is correct Way
/*
document.addEventListener('click', function(e) {
  if (e.target.className === 'clone') {
    console.log('iam clone')
  }
})
*/



/************** BOM ***************** *****/
/******Stop Watch simple ****/
/*
let hour = document.querySelector('.hour')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let msec = document.querySelector('.msec')
let but = document.querySelector('button')
let count =setInterval(function() {
  msec.innerHTML -= 1
  if (msec.innerHTML == -60) {
    sec.innerHTML -= 1
    msec.innerHTML = 0
  }
  if (sec.innerHTML == -60) {
    min.innerHTML -= 1;
    sec.innerHTML = 0;
    if (min.innerHTML == -60) {
      hour.innerHTML -= 1;
      min.innerHTML = 0
    }
  }
}, 1)

but.addEventListener ('click',function () {
  clearInterval(count)
  but.textContent = 'reset'
  
  but.addEventListener('click',function () {
  if (but.textContent = 'reset') {
    hour.innerHTML = 0
    min.innerHTML = 0
    sec.innerHTML = 0
    msec.innerHTML = 0
  }
})

})
*/

/******** Local Storge Challange ****/
/*
let lis = document.querySelectorAll('ul li')
let exp = document.querySelector('.exp')

if (window.localStorage.getItem('color')) {
  exp.style.backgroundColor = window.localStorage.getItem('color')
  
  lis.forEach((li)=> {
    li.classList.remove('active')
  })
  
  document.querySelector(`[data-color ="${window.localStorage.getItem('color')}"]`).classList.add('active')

}


lis.forEach((li) => {
  li.addEventListener('click', function(e) {
    // console.log(e.currentTarget.dataset.color)

    lis.forEach((li) => {
      li.classList.remove('active')
    })

    e.currentTarget.classList.add('active')

    window.localStorage.setItem('color',e.currentTarget.dataset.color)

   exp.style.backgroundColor = window.localStorage.getItem('color')
    
  })
})
*/

/********** Dark && light Mode ****/
//في كرق كثير هادي طريقتي الخاصة
/*
let but = document.querySelector('button')
if (window.localStorage.getItem('theam') === 'dark') {
  document.body.style.backgroundColor = '#333'
  but.textContent = 'light'
}

if (window.localStorage.getItem('theam') === 'light') {
  document.body.style.backgroundColor = '#fff'
  but.textContent = 'dark'
}

but.addEventListener('click', () => {
  if (localStorage.getItem('theam') !== 'dark') {
    localStorage.setItem('theam', 'dark');
    document.body.style.backgroundColor = '#333'
    but.textContent = 'light'
  }
  else {
    localStorage.setItem('theam', 'light');
    document.body.style.backgroundColor = '#fff'
    but.textContent = 'dark'
  }
})
*/


/********** To Do List ***********/
/*
// Select DOM elements
let taskInput = document.querySelector('.input')
let addTaskButton = document.querySelector('.add')
let taskList = document.querySelector('.tasks')


// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    .innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.style.cssText="display: flex;align-items: center;justify-content: space-between;margin-top:20px;"
        li.innerHTML = `
            <span>${task}</span>
            <button style="background: red;padding: 5px;color: white;border: none;outline: none;border-radius: 5px;
            " onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a task
function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Event listeners
addTaskButton.addEventListener('click', addTask);


// Initial rendering
renderTasks();
 */



/***************To Do List 2 *********/
/*
let input = document.querySelector('.input');
let btnAdd = document.querySelector('.add'); // Consistent naming for clarity
let tasks = document.querySelector('.tasks');

let arrayOfTasks = [];

// Check localStorage and initialize tasks array
if (localStorage.getItem('tasks')) {
  arrayOfTasks = JSON.parse(localStorage.getItem('tasks'));
}

getFromLocalStorage();

// Event listener for adding a task
btnAdd.addEventListener('click', (e) => {
  if (input.value === '') {
    e.preventDefault();
    alert('Please enter a task!');
    return;
  }
  addTaskToArray(input.value);
  input.value = ''; // Clear input after adding
});

// Function to add a task to the array
function addTaskToArray(taskText) {
  let task = {
    id: Date.now(), // Unique ID for each task
    title: taskText,
  };
  arrayOfTasks.push(task);

  addToPage(arrayOfTasks); // Update the page
  addToLocalStorage(arrayOfTasks); // Save to localStorage
}

// Function to display tasks on the page
function addToPage(allTasks) {
  tasks.innerHTML = ''; // Clear the current task list to avoid duplicates

  allTasks.forEach((task) => {
    let div = document.createElement('div');
    div.className = 'task';
    div.setAttribute('data-id', task.id); // Assign ID to the task container
    div.style.cssText = 'display:flex;align-items:center;justify-content:space-between'
    let p = document.createElement('p');
    p.textContent = task.title;

    let butDel = document.createElement('button');
    butDel.textContent = 'Delete';
    
    butDel.style.cssText ='background: red;padding: 5px;color: white;border: none;outline: none;border-radius: 5px;'
    // Append elements to the task container
    div.appendChild(p);
    div.appendChild(butDel);
    tasks.appendChild(div);

    // Add delete functionality
    butDel.addEventListener('click', () => {
      deleteTask(task.id);
    });
  });
}

// Function to save tasks to localStorage
function addToLocalStorage(allTasks) {
  window.localStorage.setItem('tasks', JSON.stringify(allTasks));
}

// Function to retrieve tasks from localStorage
function getFromLocalStorage() {
  let data = localStorage.getItem('tasks');
  if (data) {
    arrayOfTasks = JSON.parse(data);
    addToPage(arrayOfTasks); // Display tasks on page load
  }
}

// Function to delete a task
function deleteTask(taskId) {
  // Remove task from the array
  arrayOfTasks = arrayOfTasks.filter((task) => task.id !== taskId);

  // Update the page and localStorage
  addToPage(arrayOfTasks);
  addToLocalStorage(arrayOfTasks);
}
*/



/*****************Tabs *******/
/*
let tabs = document.querySelectorAll('ul li')
let content = document.querySelectorAll('.content div')


tabs.forEach((ele) => {
  ele.addEventListener('click', (e) => {
    tabs.forEach((e) => {
      e.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    content.forEach((ele) => {
      ele.style.display = 'none'
    })
    document.querySelector(e.currentTarget.dataset.cont).style.display = 'block'

  })

})

*/




/****************Increscing Width ********/
/*
let spans = document.querySelectorAll('div span')
window.onload = (e) => {
  spans.forEach((span) => {
    span.style.width = span.dataset.width
  })

}
*/


/**************Incresing Counter Num **/
/*
let section = document.querySelector('.incCount')
let nums = document.querySelectorAll('.incCount div')
let started = false

window.onscroll = () => {
  if (window.scrollY >= section.offsetTop - 200) {

    if (!started) {
      nums.forEach((el) => {
        let count = setInterval(() => {
          el.textContent++;
          if (el.textContent == el.dataset.goal) {
            clearInterval(count)
          }
        }, 2000 / el.dataset.goal)
      })
    }
    started = true
  }
}
*/


/***************Works Tabs***********/
/*
let lis = document.querySelectorAll('ul li')
let allcat = document.querySelectorAll('.content div')


lis.forEach((ele) => {
  ele.addEventListener('click', (e) => {
    lis.forEach((ele) => {
      ele.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    allcat.forEach((ele) => {
      ele.style.display = 'none'
    })
    document.querySelectorAll(ele.dataset.cont).forEach((ele)=> {
      ele.style.display = 'block'
    })
  })

})
*/


/***************Genarate Serial Nums*****/
/*
let serial = document.querySelector('.serial')

let gena = document.querySelector('.genarate')

gena.addEventListener('click', (e) => {
  let char = 'ABCDEFabcdef123456@#$&'
  let charCount = 8;
  let random = ''

  for (var i = 0; i < charCount; i++) {
    random += char[Math.floor(Math.random() * char.length)];
  }


  serial.textContent = random
})
*/

/***************Input Charater,s*******/
/*
let input = document.querySelector('.input input')
let prog = document.querySelector('span')
let zeroNum = document.querySelector('.zeroNum')

let maxLen = input.getAttribute('maxlength')

zeroNum.textContent = maxLen

input.oninput = () => {
  zeroNum.textContent = maxLen - input.value.length
  if (zeroNum.textContent == 0) {
    zeroNum.classList.add('zero')
  } else {
    zeroNum.classList.remove('zero')
  }

  prog.style.width = `${((input.value.length *100) / maxLen)}%`
}
*/




/*****Advance Form Validation ***********/

/*
let username = document.querySelector('#username')

let password = document.querySelector('#password')

let email = document.querySelector('#email')
let but = document.querySelector('button')
let lis1 = document.querySelectorAll("#password + ul li")
let lis2 = document.querySelectorAll("#email + ul li")




but.addEventListener('click', (e) => {
  if (username.value == '' || password.value == '' || email.value == '') {
    e.preventDefault()
  }
})



// PassWord 
password.oninput = (e) => {
  lis1.forEach((ele) => {
    ele.style.display = 'block'
  })
  if (password.value.includes('A')) {
    lis1[0].style.color = 'black'
  } else {
    lis1[0].style.color = 'red'
  }
  if (password.value.includes('a')) {
    lis1[1].style.color = 'black'
  } else {
    lis1[1].style.color = 'red'
  }

  if (password.value.includes('1')) {
    lis1[2].style.color = 'black'
  } else {
    lis1[2].style.color = 'red'
  }


  if (password.value.includes('@')) {
    lis1[3].style.color = 'black'


  } else {
    lis1[3].style.color = 'red'
  }
  
}


password.onblur = (e) => {
  if (password.value == '') {
    lis1.forEach((ele) => {
      ele.style.display = 'none'
    })
  }
}




//Email
email.oninput = (e) => {
  lis2.forEach((ele) => {
    ele.style.display = 'block'
  })

  if (email.value.includes('@gmail')) {
    lis2[0].style.color = 'black'
    emailValid = true;

  } else {
    lis2[0].style.color = 'red'
  }
}

email.onblur = (e) => {
  if (email.value == '') {
    lis2.forEach((ele) => {
      ele.style.display = 'none'
    })
  }
}

*/



/***************Slider Image *********/
/*
let imgs = document.querySelectorAll('img')
let bullets = document.querySelector('ul')
let pervBut = document.querySelector('.prev')
let nextBut = document.querySelector('.next')

let currentSlide = 1
let numbersSlide = imgs.length


for (var i = 1; i <= numbersSlide; i++) {
  var li = document.createElement('li')
  li.setAttribute('data-index', i)
  li.appendChild(document.createTextNode(i))
  bullets.appendChild(li)
}



nextBut.onclick = next
pervBut.onclick = prev



function check() {
  document.querySelector('span').textContent = `Image ${currentSlide} from${numbersSlide} Images`
  removeActiveLi()
  removeActiveImg()

  if (currentSlide == numbersSlide) {
    nextBut.classList.add('disabled')
  }
  else {
    nextBut.classList.remove('disabled')
  }

  if (currentSlide == 1) {
    pervBut.classList.add('disabled')
  }
  else {
    pervBut.classList.remove('disabled')
  }
  
  if (nextBut.classList.contains('disabled')) {
    return false
  }
}
check()



function removeActiveImg() {
  imgs.forEach((img) => {
    img.classList.remove('active')
  })
  imgs[currentSlide - 1].classList.add('active')
}



function removeActiveLi() {
  let lis = document.querySelectorAll('ul li')
  lis.forEach((li) => {
    li.classList.remove('active')
  })
  lis[currentSlide - 1].classList.add('active')
}



function next() {
    currentSlide++
    check()

}



function prev() {
  currentSlide--
  check()
}


setInterval(() => {
  currentSlide++
  check()
  if (currentSlide == numbersSlide) {
    nextBut.classList.add('disabled')
    currentSlide = 0
  }
  else {
    nextBut.classList.remove('disabled')
  }

}, 1000)



let allLis = document.querySelectorAll('ul li')

allLis.forEach((li) => {
  li.addEventListener('click', (e) => {
    allLis.forEach((li) => {
      li.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    currentSlide = e.currentTarget.dataset.index;
    check()
  })
})
*/



/*
let imgs = document.querySelectorAll('img');
let bullets = document.querySelector('ul');
let prevBut = document.querySelector('.prev');
let nextBut = document.querySelector('.next');
let currentSlide = 1;
let numbersSlide = imgs.length;

// Create bullets dynamically
for (let i = 1; i <= numbersSlide; i++) {
  let li = document.createElement('li');
  li.setAttribute('data-index', i);
  li.textContent = i;
  bullets.appendChild(li);
}

// Add event listeners
nextBut.addEventListener('click', next);
prevBut.addEventListener('click', prev);

// Autoplay functionality
let autoplay = setInterval(() => {
  if (currentSlide === numbersSlide) {
    currentSlide = 1; // Loop back to the first slide
  } else {
    currentSlide++;
  }
  check();
}, 5000);

// Check current state and update UI
function check() {
  document.querySelector('span').textContent = `Image ${currentSlide} of ${numbersSlide} Images`;
  updateActiveClasses();
  toggleButtons();
}

// Update active image and bullet
function updateActiveClasses() {
  imgs.forEach((img, index) => {
    img.classList.toggle('active', index === currentSlide - 1);
  });

  let lis = document.querySelectorAll('ul li');
  lis.forEach((li, index) => {
    li.classList.toggle('active', index === currentSlide - 1);
  });
}

// Enable/Disable buttons based on current slide
function toggleButtons() {
  prevBut.classList.toggle('disabled', currentSlide === 1);
  nextBut.classList.toggle('disabled', currentSlide === numbersSlide);
}

// Move to the next slide
function next() {
  if (currentSlide < numbersSlide) {
    currentSlide++;
    check();
  }
}

// Move to the previous slide
function prev() {
  if (currentSlide > 1) {
    currentSlide--;
    check();
  }
}

// Add click event listeners to bullets
document.querySelectorAll('ul li').forEach((li) => {
  li.addEventListener('click', (e) => {
    currentSlide = parseInt(e.currentTarget.dataset.index, 10);
    check();
  });
});

// Initialize the slider
check();

*/

/*fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

*/


let age = 10;
if (age >=  20){
  console.log('Younger')
}
else if (21 <= age <=  59 ) {
  console.log('Not Younger')
}
else{
  console.log('Other')
}


age>= 20  ? console.log('Younger') :21 <= age <=  59  ? console.log('Not Younger')
 : console.log('Other')
 
 
 
 switch(age){
   case age <= 20
 }