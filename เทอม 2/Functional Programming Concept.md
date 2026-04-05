### vol.1 Functional Programming Concepts

##### 1.1 Pure function

##### เป็นฟังก์ชั่นที่ผลลัพธ์ที่เราจะได้ ต้องมาจากการนำเข้าข้อมูลผ่านทางตัวฟังก์ชั่น (function(a,b)) เองเท่านั้น

##### โดยไม่มีการกำหนดค่าของตัวแปรจากภายนอกหรือการกำหนดค่าจากภายในตัวแปรเองที่อาจจะส่งผลให้ค่าคำตอบเปลี่ยนไปได้

##### โดย Pure function จะทำให้สามารถคาดเดาผลลัพธ์ได้และทดสอบได้ง่าย



// ตัวอย่าง Pure function

let numnum = {value : 20}

function Purefunc(argu) {

&#x20;   let x = 10

&#x20;   argu = argu + x

&#x20;   return argu

}

console.log(Purefunc(numnum.value)) // 30

console.log(Purefunc(numnum.value)) // 30

// Why is Pure?? : การที่เราส่ง value ของ numnum เข้าไปทำให้

// object เดิมไม่มีการเปลี่ยนแปลงค่า เพราะเราส่งแค่สิ่งที่เป็น value ของ numnum

// เข้าไปในฟังก์ชั่น ไม่ใช่ตัว object ทั้งตัว



// ตัวอย่าง ImPure function

let secnumnum = {value : 20}

function Notsopure(argu) {

&#x20;   let x = 10

&#x20;   argu.value = argu.value + x

&#x20;   return argu.value

}

console.log(Notsopure(secnumnum)) // 30

console.log(Notsopure(secnumnum)) // 40

// Why is not Pure?? : การที่เรากำหนด argu.value ภายในฟังก์ชั่น

// แล้วเราส่ง object เข้าไปในตัวแปร ทำให้ค่า value เปลี่ยนในการเรียกใช้งาน

// ฟังก์ชั่นครั้งต่อไป



##### 1.2 Immutability

##### ข้อมูลที่นำเอามาใช้ภายในฟังก์ชั่นจะไม่มีการเปลี่ยนแปลงข้อมูลหลังจากการถูกใช้

##### ถ้ามีการเปลี่ยนแปลง ก็จะมีโครงสร้างข้อมูลใหม่ที่รองรับการเปลี่ยนแปลงนั้นแทนข้อมูลเก่า

let nums = \[1,2,3]

let immunenum = \[...nums,4] // โครงสร้างข้อมูลใหม่ที่รองรับการเปลี่ยนแปลง

nums.push(4)

console.log(nums) // \[ 1, 2, 3, 4 ]

console.log(immunenum) // \[ 1, 2, 3, 4 ]



##### 1.3 First-Class and Higher-Order Functions

##### First-Class function คือ ฟังก์ชั่นที่สามารถกำหนดค่าตัวแปร,เป็นตัวแปร

##### ในฟังก์ชั่นอื่นๆได้ และคืนค่าฟังก์ชั่นจากฟังก์ชั่นอื่นได้

##### 

##### Higher-order functions คือ ฟังก์ชั่นที่รับฟังก์ชั่นอื่นเป็นตัวแปรภายใน ไม่ก็

##### มีการส่งคืนฟังก์ชั่นอื่นเป็นออกมาเป็นผลให้เรา



// ตัวอย่าง First-Class and Higher-Order Functions

const greet = (name, formatter) => formatter(name)

const shout = text => text.toUpperCase() + '!!!'

console.log(greet('Alice', shout)) // ALICE!!!



// ฟังก์ชั่น greet เป็น Higher-Order เพราะมีการรับตัวแปรที่เป็นฟังก์ชั่น

// เข้ามาใช้งานภายในตัวฟังก์ชั่น greet เองด้วย (ในที่นี้คือฟังก์ชั่นการจัดรูปแบบข้อความนั้นเอง)



// ฟังก์ชั่น shout เป็น First-Class เพราะมีการกำหนดค่าตัวแปรที่เก็บข้อมูล

// การทำงานของฟังก์ชั่น และส่งค่าผลลัพธ์ออกไปเป็นตัวแปรภายในฟังก์ชั่นอื่น

// (ในที่นี้คือ greet) ได้



##### 1.4 Declarative Style

##### การตั้งฟังก์ชั่นเราควรที่ระบุถึงสิ่งที่เราต้องการมากกว่าการที่ต้องบอกว่า

##### เราต้องทำอย่างไรให้ได้ผลลัพธ์ที่เราต้องการ โดยการใช้ method ต่างๆมาช่วย

##### ทำให้โค้ดอ่านง่ายเพราะโค้ดก็อธิบายตัวเองอยู่แล้วว่าจะทำอะไรผ่านการใช้ method



// ตัวอย่าง Imperative

const numbers = \[1, 2, 3];

const double = \[];

for (let i = 0; i < numbers.length; i++) {

&#x20;   // การใช้ for loop เป็นการบอกว่าเราจะทำอะไร ทำอย่างไร

&#x20; double.push(numbers\[i] \* 2);

&#x20; // เราจะดันค่าที่ได้จากการวนดูแต่ละค่าที่คูณสองแล้วไปใส่ใน double

}



// ตัวอย่าง Declarative

const numbers2 = \[1, 2, 3];

const double2 = numbers.map(n => n \* 2); // เป็นการบอกโต้งๆไปเลยว่า

// double2 คือข้อมูลทุกตัวของ numbers2 ที่คูณสองแล้ว



##### // 1.5 Function type (ไปอ่านที่ week9\_summary.js ได้เลยมีการพูดถึงไปแล้ว)



### vol.2 Function Scope \& Closures

##### ตัวแปรที่ถูกกำหนดไว้ภายในฟังก์ชันจะไม่สามารถเข้าถึงได้จากภายนอกฟังก์ชัน 

##### เพราะตัวแปรนั้นถูกนิยามไว้เฉพาะในขอบเขตของฟังก์ชันเท่านั้น (function scope ไม่สามารถ

##### ใช้งานหรือเรียกได้ใน global scope) และฟังก์ชันที่ถูกนิยามใน Global Scope สามารถเข้าถึงตัวแปรทั้งหมดใน Global Scope ได้ 

##### ส่วนฟังก์ชันที่ถูกนิยามไว้ในฟังก์ชันอื่น (Parent function) ก็สามารถเข้าถึงตัวแปรในฟังก์ชันแม่ และตัวแปรอื่น ๆ ที่ฟังก์ชันแม่เข้าถึงได้เช่นกัน



let mid = 20

let final = 5

let fname = 'Ada'



function getScore() {

let mid = 10

let final = 30

//yourScore is nested function

&#x20;   function yourScore() {

&#x20;       return fname + ' scored ' + (mid + final)

&#x20;   }

return yourScore

}

const score = getScore()

console.log(score()) // returns "Ada scored 40"



// สาเหตุที่ score() ได้เป็น 40 ไม่ใช่ 25 เพราะ ฟังก์ชั่นที่ใช้คำนวนคะแนน (yourScore)

// ได้รับค่าตัวแปรจากฟังก์ชั่นแม่ (getScore) ไม่ใช้ตัวแปรตัวที่ประกาศนอกฟังก์ชั่นแม่

// (mid,final ที่ประกาศบนสุด) บวกกับฟังก์ชั่น yourScore เป็น nested function

// ที่ต่อยอดมาจาก getScore score() เลยได้ 40 ไม่ใช่ 25



##### Closures Part

##### ฟังก์ชันชั้นในสามารถ "สืบทอด" ตัวแปรของฟังก์ชันชั้นนอกได้ 

##### หรือพูดอีกอย่างคือ ฟังก์ชันชั้นในอยู่ภายในขอบเขต (Scope) ของฟังก์ชันชั้นนอก

##### เลยทำให้สามารถสืบทอดสิ่งต่างๆจากฟังก์ชันชั้นนอกได้ แต่ตัวฟังก์ชันชั้นนอก

##### ไม่สามารถเข้าถึงตัวแปรและฟังก์ชันที่อยู่ในฟังก์ชันชั้นในได้ เพื่อป้องกันการเปลี่ยนแปลงข้อมูลของฟังก์ชั่นตัวใน



// ตัวอย่าง Closures

const getScoringPass = function (scores) {

// เก็บตัวแปร scores ไปไว้ใช้ใน cuttingPoint

&#x20;   function cuttingPoint(cuttingScore) {

&#x20;       return scores.filter((score) => score >= cuttingScore)

&#x20;       // รับค่าตัวแปร scores มาจาก getScoringPass

&#x20;   }

return cuttingPoint

}

// fn\_cuttingPoint1 and fn\_cuttingPoint2 are เป็น closure functions

// ที่เก็บค่าตัวแปร scores เพื่อนำไปใช้คำนวนใน cuttingPoint ต่อไป

let fn\_cuttingPoint1 = getScoringPass(\[50, 15, 32, 80, 100])

console.log(fn\_cuttingPoint1(50)) //\[ 50, 80, 100 ]

let fn\_cuttingPoint2 = getScoringPass(\[-10, -15, -53, -97, -32])

console.log(fn\_cuttingPoint2(-30)) //\[ -10, -15 ]



### vol.3 function with arguments object

##### 3.1 Default Parameters

เราสามารถใส่ค่าตั้งต้นเมื่อเราไม่ได้ใส่ค่าอะไรลงไปในฟังก์ชั่นได้



function whothis(name = 'UNKNOWN') {

&#x20;   return name

}

console.log(whothis()) // UNKNOWN

console.log(whothis('Aha')) // Aha



##### 3.2 Rest Parameters

##### ทำให้เราเขียนฟังก์ชั่นที่รับตัวแปรเป็นจำนวนเท่าไรก็ได้ ในรูปแบบของอาเรย์

##### โดยจะมีแค่ parameter ตัวสุดท้ายเท่านั้นที่เป็น Rest Parameters ได้



function sum(...thenumber){

&#x20;   let total = 0

&#x20;   for (const eachnum of thenumber) {

&#x20;       total += eachnum

&#x20;   }

&#x20;   return total

}

console.log(sum(12,24,35,46,57)) // 174



##### 3.3 Spread operator

##### ทำให้อาเรย์ที่เราใช้ในฟังก์ชั่น แตกตัวเป็นข้อมูลออกมาภายในตัวฟังก์ชั่นเหล่านั้น

function sumspread(num1,num2,num3) {

&#x20;   return num1+num2+num3

}

let numss = \[12,24,36]

console.log(sumspread(...numss)) // 72



##### 3.4 Destructuring

##### ถ้าเรานิยาม parameter ไว้ภายในวงเล็บ \[] = ฟังก์ชั่นคาดหวังค่าของอาเรย์ในตำแหน่งนั้น

##### โดยเมื่อมีการตั้ง parameter แล้ว อาเรย์ก็จะถูกแกะข้อมูลออกทีละตัว ไปเก็บไว้ใน parameter ที่เรากำหนดไว้



function ArrayMagic(\[x1],\[y1],\[x2,y2],\[x3,y3]) {

&#x20;   return{

&#x20;       Firstver: x1+y1,

&#x20;       Secondver: x2+y2+x3+y3,

&#x20;       Thridver: \[x1+x2+x3,y1+y2+y3]

&#x20;   }

}

let st = \[5,8]

let nd = \[2,7]

let th = \[4,6]

let fo = \[3,9]

console.log(ArrayMagic(st,nd,th,fo)) 

// { Firstver: 7, (ตัวแรกของ st (5) + ตัวแรกของ nd (2))

//     Secondver: 22, (ข้อมูลอาเรย์ของ th fo ทุกตัวบวกกัน)

//     Thridver: \[ 12, 17 ] }

// (\[ข้อมูลตัวแรกของอาเรย์ทุกตัวบวกกัน,ข้อมูลตัวที่สองของอาเรย์ทุกตัวบวกกัน])



// object ก็สามารถเเกะข้อมูลออกทีละตัว ไปเก็บไว้ใน parameter ที่เรากำหนดไว้

// ได้เช่นกัน ซึ่งตัวแปรเหล่านี้จะสามารถเรียกใช้งานได้ทันทีภายในตัวฟังก์ชัน

// ในที่นี้รวมไปถึง nested object และอาเรย์ซ้อน object ด้วย

const students = {

&#x20;   studentId: 64001,

&#x20;   displayName: 'jsGuy',

&#x20;   fullName: {

&#x20;       firstName: 'Somchai',

&#x20;       lastName: 'DeeJai'

&#x20;   }

}

const person = \[

&#x20;   { id: 1, name: 'Suda' },

&#x20;   { id: 2, name: 'Surapong' },

&#x20;   { id: 3, name: 'Somchai' }

]



function ObjectMagic({studentId},{fullName:{firstName}},\[,{name}]) {

&#x20;   return{

&#x20;       Firstver: studentId,

&#x20;       Secondver: firstName,

&#x20;       Thridver: name

&#x20;   }

}

console.log(ObjectMagic(students,students,person)) 

// { Firstver: 64001, 

//     Secondver: 'Somchai', 

//     Thridver: 'Surapong' }



// เข้าสู่โจทย์กันแล้ว

// การบ้าน 1

function createMultiplier(x) {

&#x20;   // คืนค่าฟังก์ชันใหม่ที่รับพารามิเตอร์ y

&#x20;   return function(y) {

&#x20;       // รับค่า x มาจากฟังก์ชั่นใหญ่

&#x20;       return x\*y

&#x20;   }

}

const doublee = createMultiplier(2);

const triple = createMultiplier(3);



console.log(doublee(5)); // 10

console.log(triple(5)); // 15



// การบ้าน 2

function createAccount(initialBalance) {

&#x20;   let balance = initialBalance

&#x20;   return{

&#x20;       deposit(amount){

&#x20;           if(amount > 0){

&#x20;               balance += amount

&#x20;           }

&#x20;       }, // ฟังก์การฝากเงิน

&#x20;       withdraw(amount){

&#x20;           if(amount > balance){

&#x20;               console.log("Cannot withdraw more than current balance.")

&#x20;           }

&#x20;           else if(amount > 0){

&#x20;               balance -= amount

&#x20;           }

&#x20;       }, // ฟังก์ชั่นการถอนเงิน

&#x20;       getBalance(){

&#x20;           return balance

&#x20;       } // ฟังก์ชั่นรู้ค่าเงินในบัญชี

&#x20;   }

}



const acc = createAccount(100)

acc.deposit(50)

acc.withdraw(30)

console.log(acc.getBalance()) // 120



// การบ้าน 3 

function limitCalls(fn,limit) {

&#x20;   let count = 0

&#x20;   return function(...formmum){

&#x20;       if (count < limit) {

&#x20;           count++

&#x20;           return fn(...formmum)

&#x20;       }

&#x20;       else

&#x20;           return "Limit reached"

&#x20;   }

}

const sayHi = () => "Hi";

const limited = limitCalls(sayHi, 2);



console.log(limited()); // "Hi"

console.log(limited()); // "Hi"

console.log(limited()); // "Limit reached"



// เข้าสู้โจทย์จากทางบ้านแล้ว ไปดูกัน

// โจทย์ 1

function createPrefixer(prefix) {

&#x20;   return function(word) {

&#x20;       return prefix + word

&#x20;   }

}

const addHello = createPrefixer("Hello ");

const addUrgent = createPrefixer("Urgent: ");



console.log(addHello("Alice"));   // "Hello Alice"

console.log(addUrgent("Update")); // "Urgent: Update"



// โจทย์ 2

function createHistoryManager() {

&#x20;   let history = \[]

&#x20;   return{

&#x20;       save(text){

&#x20;           history.push(text)

&#x20;       },

&#x20;       undo(){

&#x20;           if(history.length > 0){

&#x20;               history.pop()

&#x20;           }

&#x20;           else

&#x20;               console.log("Cannot undo because you don't have history")

&#x20;       },

&#x20;       showHistory(){

&#x20;           return\[...history]

&#x20;       }

&#x20;   }

}

const editor = createHistoryManager();

editor.save("Hello");

editor.save("Hello World");

console.log(editor.showHistory()); // \["Hello", "Hello World"]



editor.undo();

console.log(editor.showHistory()); // \["Hello"]



// โจทย์ 3

function createKeyCard(maxAccess) {

&#x20;   let totalcard = 0

&#x20;   return function(whatroom){

&#x20;       if(totalcard < maxAccess){

&#x20;           totalcard++

&#x20;           return(`Access Succeed:Welcome to ${whatroom} room`)

&#x20;       }

&#x20;       return "Where is your card??"

&#x20;   }

}



const myCard = createKeyCard(2)



console.log(myCard("Lab")) // Access Succeed:Welcome to Lab room

console.log(myCard("Server")) // Access Succeed:Welcome to Server room

console.log(myCard("Office")) // Where is your card??

