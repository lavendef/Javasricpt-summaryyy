### vol.1 Comparing primitive,object,array

// สิ่งที่ต้องรู้เพิ่มเติม !!

// ภายใน javascript จะมีการแบ่งการเก็บข้อมูลออกเป็นสองแบบคือ การเก็บข้อมูลของฝั่ง Primitive Types

// (String, Number, Boolean, null, undefined, Symbol) และการเก็บของฝั่งที่เป็นข้อมูลแบบ Reference Types

// (Object, Array) โดยเมื่อเราใช้คำสั่งในการเก็บข้อมูลอย่าง let กับ const ก็สามารถแบ่งได้อีกเป็น 2 กรณีดังนี้



// 1. let,const กับการเก็บข้อมูลแบบ Primitive Types

// เมื่อเราให้ค่าตัวแปรตัวแปรหนึ่ง ทางตัวของระบบจะ"สร้างตัวแปรหนึ่งๆเป็นเหมือนกล่อง 1 กล่อง"ที่มี"ชื่อกล่องเป็นชื่อของตัวแปรนั้น"

// ส่วน"ข้อมูลด้านในกล่องจะแทนเป็นเหมือนค่าที่เรากำหนดให้ตัวแปรนั้นๆ" ที่เราสามารถเปลี่ยนได้ทุกเมื่อ (เปรียบเสมือนการเอาของเก่าออกแล้วเอาของใหม่ใส่เข้าไป)

// โดยการเก็บแบบ "let เราจะสามารถแก้ไขค่าของตัวแปรได้" แต่การเก็บแบบ const จะไม่ให้เปลี่ยนค่า เพราะการเก็บแบบ "const

// จะทำการล็อกตัวแปรนั้นๆ เอาไว้ภายใน memory ของระบบ" (เปรียบเหมือนการที่เราติดเทปทำเป็นกล่องพัสดุไปแล้ว ไม่สามารถเปลี่ยนของด้านในได้ เพราะโดนปิดผนึกไปแล้ว)



// 2. let,const กับการเก็บข้อมูลแบบ Reference Types

// เมื่อทำการเก็บข้อมูลของตัวแปรที่เป็น type object ทั้งหมด(Object, Array) ทางตัวของระบบจะทำการจองพื้นที่ภายใน memory ของระบบไว้

// ซึ่งภายในพื้นที่นั้นก็จะเก็บค่าข้อมูลด้านในของ Reference Types เหล่านั้น ไม่ว่าจะเป็นข้อมูล keys และ ค่าของ keys ใน Object

// และข้อมูลของแต่ละเลข index ของ Array และทางตัวระบบเองก็จะสร้าง "address" หรือ"ที่อยู่"ของ Reference Types เหล่านั้นเก็บเอาไว้เป็นข้อมูล

// ประกอบหน้า"ที่ดิน" ผืนนี้ที่ระบบได้จองที่ไว้รวมกับชื่อของตัวแปรด้วย โดยทั้งการเก็บข้อมูลแบบ let กับ const จะยอมให้สามารถแก้ไขข้อมูล"ภายใน"ของตัว Object และ Array ได้

// (อาจจะเปลี่ยนข้อมูลผ่านการเข้าถึงข้อมูลภายใน keys(Object) หรือการเข้าถึงข้อมูลในเลข index นั้น(Array))

// แต่เมื่อเก็บแบบ const เราจะไม่สามารถเปลี่ยนค่าของ"ตัวแปรที่เก็บข้อมูลของ Reference Types" ได้ เพราะการเก็บแบบ "const จะทำการล็อกตัวแปรนั้นๆ เอาไว้ภายใน memory ของระบบ" 

// เช่นเดียวกันกับการเก็บแบบ Primitive



// ภายใน javascript เมื่อมีการ Comparing primitive,object,array กันเกิดขึ้น เราก็จะเขียนในรูป ตัวแปร1 === ตัวแปร2

// ซึ่งจากการสรุปครั้งที่ผ่านมาเราจะรู้ว่า === จะเช็คทั้งค่าและ type ของตัวแปรนั้นๆ ว่าตรงกันหรือไม่ แต่ลองมาพิจารณาการเปรียบเทียบเหล่านี้กัน

let w = v = 1

const product\_object = {id:"P001", product:"Blue ink pen" ,price:"25฿"}

const product\_object\_2 = {id:"P001", product:"Blue ink pen" ,price:"25฿"}

const ar1 = \[1,2,3,4,5]

const ar2 = \[1,2,3,4,5]

let str1 = "red"

let str2 = "Red"

console.log(w === v) // true เพราะมีค่าและ type เดียวกัน

console.log(str1 === str2) // false เพราะ 1.string is case sentitive 2.ASCII code ระหว่างพิมพ์เล็กกับพิมพ์ใหญ่มีค่าไม่เท่ากัน

console.log(product\_object === product\_object\_2) // false เพราะ ถ้าหากเราตีความโค้ดด้านบน เราจะได้ความหมายประมาณนี้

// ตัวแปร product\_object เป็นชื่อกล่องที่มีที่อยู่ของ object {id:"P001", product:"Blue ink pen" ,price:"25฿"}

// ส่วนตัวแปร product\_object\_2 เปรียบเสมือนชื่อกล่องอีกกล่องหนึ่งที่มีที่อยู่อีก 1 ที่อยู่ที่ไม่เหมือนกันกับตัว product\_object

// ถึงแม้ว่าข้อมูลจะเหมือนกันอย่างกับลอกกันมา ทางระบบก็จะถือว่าไม่เท่ากัน เพราสองตัวแปรนี้มีที่อยู่ที่ต่างกันนั้นเอง (reference + Memory access ต่างกัน)

console.log(ar1 === ar2) // false เพราะมีเหตุผลเหมือนกันกับตัว object คือ ตัวแปรสองตัวนี้มีที่อยู่ที่ต่างกัน



// ในการที่จะสามารถเทียบ Reference Types ให้มันเท่ากันได้นั้น จะสามารถทำได้สองกรณีคือ

// 1. การเทียบกับตัวมันเอง เพราะถ้าเป็นตัวแปรเดียวกัน ทางระบบของ javascript ซึ่งเก็บไว้ทั้งชื่อตัวแปรและที่อยู่ของตัวแปรนั้นไว้อยู่แล้ว

// ก็เลยได้ค่าเป็นจริง เพราะตัวแปรเดียวกัน ก็ต้องเก็บ"ชื่อตัวแปร"กับ "ที่อยู่" อันเดียวกันสิ

console.log(product\_object === product\_object) // true

// 2. ตั้งค่าตัวแปรใหม่ แล้วไปทำให้มีค่าที่เท่ากับตัวแปรของ Reference Types ที่มีการเก็บ "ที่อยู่" เอาไว้อยู่แล้ว

// ซึ่งตัวแปรใหม่ที่พึ่งถูกการรับค่ามานั้น ก็จะเก็บ "ที่อยู่" ของตัวแปรเดิมมาไว้กับตัวเองด้วย เลยทำให้ได้ค่าที่จริงออกมาเมื่อเปรียบเทียบกัน

let product = product\_object

console.log(product === product\_object) // true

// โดยการเปรียบเทียบให้ได้ค่าที่เท่ากันนี้ สามารถทำได้ทั้งตัวของ object และ array เลย เพราะมีการเก็บข้อมูลในรูปแบบเดียวกัน

console.log(ar1 === ar1) // true

let ar3 = ar2

console.log(ar2 === ar3) // true

console.log("----------------------------------------------------------------------------")





#### vol.2 Conditional (if-else,switch case) + for \& while loop

##### Conditional part

// ในการที่เราต้องการให้โค้ดของเราต้องมีการทำเงื่อนไขอะไรบางอย่างเพื่อให้ได้ผลลัพธ์ที่แตกต่างกันในแต่ละเงื่อนไข

// เราก็มักจะเขียน if-else กันแน่ๆ โดยโครงสร้างของ if-else คือ

// if (condition) {

//     statement

// } 

// else {

//     statement

// }

// โดยถ้าภายใน condition หนึ่งๆ ถ้าอยากให้มีการแสดงผลแบบเดียวเมื่อเงื่อนไขใดเงื่อนไขหนึ่งถูกก็ไม่จำเป็นต้องใส่ {} ครอบก็ได้

// เพราะหน่าที่ของ {} คือ เมื่อในเงื่อนไขหนึ่งถ้าเป็นจริง เราอยากจะใหม่มี statement (การทำงานหรือการแสดงผล)ที่มากกว่า 1 ครั้ง

// เช่น

let score = 80

let pass = true

// if(pass)

//     if(score >= 85)

//         console.log("Grade A")

//     else console.log("Not Grade A")

// else console.log("You didn't pass")

// ถ้าภายในโค้ดนี้มี else แค่ตรง if ด้านใน แต่เราอยากให้การแสดงผลของ else อันนี้เป็นของ if ตัวนอก ก็ให้เอา {} ครอบ

// ภายในตัว if ด้านใน เพราะจะเป็นการ scope ของตัว if ด้านนอกที่สื่อความหมายว่า ถ้าเงื่อนไขของ if ตัวนอกจริง ก็จะไปพิจารณาตัว if ด้านในต่อ

// เลยทำให้ else ของ if ด้านใน ที่ไม่ได้โดน {} ครอบก็จะกลายเป็นค่า else ของ if ตัวนอก โดยอันโมมัติ เพราะหลักการการจับคู่ของ if กับ else

// คือ else จะจับคู้กับ if ตัวที่ใกล้ที่สุดเสมอ

let grade

console.log(grade)

if (score >= 80) grade = 'A'

console.log(grade)

if (score >= 70) grade = 'B'

console.log(grade)

if (score >= 60) grade = 'C'

console.log(grade)

if (score >= 50) grade = 'D'

console.log(grade)



// จะได้ผลดังนี้ undefined (grade ก่อนเช็คเงื่อนไข if),A,B,C,D ตามลำดับ จะเห็นว่าเมื่อมี if มาใหม่เรื่อยๆ javascript

// ก็จะพิจารณาทุกๆ if เลย เพราะถือว่า if คือตัวเริ่มของทุกเงื่อนไขที่อาจจะเกิดขึ้นภายในโค้ด เลยต้องเช็คในทุกๆ if นั้นเอง

// ส่วนในกรณีของ if-elif-else นั้น ถ้าหายเงื่อนไขใดเงื่อนไขหนึ่งของ else if ที่อยู่ภายใน if เกิดเป็นจริงขึ้นมา ถ้าหากเรายังเขียน

// else if ตัวอื่นๆจนไปถึง else แล้ว ทาง javascript จะไม่พิจารณาเงื่อนไขเหล่านั้นต่อ เพราะถือว่าเจอเงื่อนไขที่ใช่แล้ว ก็ไม่จำเป็นต้องพิจารณาตัวอื่นต่อ

// เพราะเช็คไปก็ไม่มีประโยชน์ เอาไปทำอะไรต่อก็ไม่ได้



// ต่อมาในส่วนของ switch case โดยทั่วไปแล้วจะมีโครงสร้างคือ

// switch (key) {

//     case value:

//         statement

//         break;



//     default:

//         statement

//         break;

// }

// โดยมีรายละเอียดดังนี้ key = เป็นเหมือนกับค่าตัวแทนของการเข้าเงื่อนไข switch

// case value = ค่าของตัวแปรนั้นๆ ที่ถ้าเข้าเงื่อนไข(case)นี้ จะให้แสดงผลแบบนี้ เป็นต้น

// default = การแสดงผลที่เมื่อค่านั้นๆไม่มีการเข้าเงื่อนไขไหนเลย ก็จะให้แสดงผลภายใน default อันนี้

// ถ้าวาง default ไว้ในเงื่อนไขหน้าสุดของ switch case ไม่ว่าค่านี้จะเข้าเงื่อนไขไหน ก็จะต้องมีการแสดงผลของ default มาด้วยเสมอ



// โดยการเขียน switch case ในการเขียน case แต่ละ case นั้น ไม่จำเป็นต้องเขียน break ในกรณีที่เราอยากใฟ้มีการแสดงผลดังนี้

// 1. หลายๆ case เราอยากมีผลลัพธ์เดียวกัน และ 2.ในแต่ละ case จะเป็นการเช็คตามลำดับขั้นจากสูงไปต่ำ

// เช่น 1. หลายๆ case เราอยากมีผลลัพธ์เดียวกัน

function isVowel(ch) {

&nbsp; switch (ch) {

&nbsp;   case 'a':

&nbsp;   case 'A':

&nbsp;       return "Please pass A"

&nbsp;   case 'e':

&nbsp;   case 'E':

&nbsp;       return "Please pass E"

&nbsp;   case 'i':

&nbsp;   case 'I':

&nbsp;       return "Please pass I"

&nbsp;   case 'o':

&nbsp;   case 'O':

&nbsp;       return "Please pass O"

&nbsp;   case 'u':

&nbsp;   case 'U':

&nbsp;       return "Please pass U"

&nbsp;   default:

&nbsp;       return "Please pass default"

&nbsp; }

}

console.log(isVowel('a'))

console.log(isVowel('o'))

console.log(isVowel('u'))

console.log(isVowel('E'))

console.log(isVowel('I'))

// 2. ในแต่ละ case จะเป็นการเช็คตามลำดับขั้นจากสูงไปต่ำ

function privilate(classes) {

&nbsp;   switch (classes) {

&nbsp;       case '1':

&nbsp;       case 1:

&nbsp;           return "First class"

&nbsp;       case '2':

&nbsp;       case 2:

&nbsp;           return "Business class"

&nbsp;       case '3':

&nbsp;       case 3:

&nbsp;           return "Economy class"

&nbsp;       default:

&nbsp;           return "You not in any class >:("

&nbsp;   }

}

console.log(privilate('1'))

console.log(privilate(2))

console.log(privilate(4))

// โดยใน 2 ตัวอย่างนี้ คำสั่ง return จะทำหน้าที่เป็นเหมือน break ตรงที่ถ้าเงื่อนไขนี้ถูกและมีการแสดงผลข้อมูลแล้ว ก็จะไม่พิจารณา

// เงื่อนไขอื่น ๆ ต่อ จะออกจากการพิจารณาพร้อมการแสดงผลนั้นไปเลย



##### for \& while loop part

// while loop เป็นการวนรอบการกระทำหนึ่งๆของโค้ดที่เป็นนิพจน์หนึ่ง โดยจะพิจารณาจากเงื่อนไขว่า "ตราบใดก็ตามที่เงื่อนไขของ

// while ก่อนการ loop มีค่าเป็นจริง ก็จะยังวนต่อไปเรื่อยๆ จนกว่าเงื่อนไขนั้นจะเป็นเท็จ หรือถ้าเงื่อนไขนั้นเป็นเท็จตั้งแต่แรก ก็จะไม่วนค่าให้"

let count = 0

while (count <= 5) {

&nbsp;   console.log(`วนรอบที่ ${count}`)

&nbsp;   console.log("Hello")

&nbsp;   count++

}

// do while loop เป็นการวนรอบการกระทำหนึ่งๆของโค้ดที่เป็นนิพจน์หนึ่ง โดยจะพิจารณาจากเงื่อนไขว่า "ถ้าหากลองวนทำไปก่อนครั้งหนึ่ง

// แล้วเงื่อนไขของ while ยังคงเป็นจริง ก็จะวนต่อไปจนเงื่อนไขเป็นเท็จ แต่ถ้าเงื่อนไขนั้นเป็นเท็จตั้งแต่แรก ก็จะลองทำแค่รอบเดียวแล้วไม่ทำอีก"

// ซึ่ง do while loop จะเหมาะกับบริบทของโค้ดที่ว่า ไม่มีข้อมูลเริ่มต้นในการวนลูป

do {

&nbsp;   console.log(`วนรอบที่ ${count}`)

&nbsp;   console.log("Hello")

&nbsp;   count++

} while (count <= 5)



// ต่อมาในส่วนของ for loop for loop นั้นจะเป็นการวนรอบการกระทำหนึ่งๆของโค้ดที่เป็นนิพจน์หนึ่ง โดยจะพิจารณาจากความยาวหรือขอบเขตของข้อมูล

// ที่ต้องการจะทำการวนลูป โดยการกำหนดให้ความยาวของข้อมูลเป็น"จำนวนรอบ"ในการวนนั้นเอง โดย for loop มีโครงสร้างดังนี้

// for (let index = 0; index < array.length; index++) {

//    statement

&nbsp;   

// }

// โดย let index = 0 (initial หรือตำแหน่งแรกเริ่มในการ loop), index < array.length (boolean condition หรือเงื่อนไขในการวนลูป)

// และ index++ (update ตัวแปร เป็นการเพิ่มค่าของตัวแปรเมื่อวนรอบเสร็จ 1 รอบ ก็จะเพิ่มค่าไปเรื่อยจนกว่า condition จะเป็นเท็จ)

// โดยมีลำดับการทำงานคือ initial --> boolean condition --> statement --> update ตัวแปร โดยการรันที่น้อยที่สุดที่จะเกิดขึ้นได้คือ

// 0 ครั้งเพราะถ้า boolean condition เป็นเท็จตั้งแต่แรก ก็จะไม่ทำตัว statement ต่อ เลยไม่มีการวนลูปเลยนั้นเอง



for(let i = 0; i <= 5 ; i++){ 

&nbsp;   console.log(`วนรอบที่ ${i}`)

&nbsp;   console.log("Hello")

} // translate ==> ให้ i = 0 --> ตราบใดก็ตามที่ i ยัง <= 5 --> console.log() --> เพิ่มค่า i ขึ้น 1



// for of มักจะใช้ในการวนรอบข้อมูลภายในของสิ่งที่เรียกว่า iterable object (Array,String)

// โดยในการวนแต่ละรอบ ก็จะให้ค่าของข้อมูลในแต่ละตำแหน่งเลข index ออกมาด้วย โดย array จะแสดงผลออกมาเป็นข้อมูลหนึ่งๆ

// ที่เราใส่ไว้ในตำแหน่งเลขนั้นๆ ส่วน String จะแสดงผลออกมาแต่ละตัวอักษรแทน

let ar4 = \["mango","rumbutan","peach","orange","pineapple"]

let str3 = "channarongdet"

for(let j of ar4){

&nbsp;   console.log(j)

}

for(let k of str3){

&nbsp;   console.log(k)

}



// for in มักจะใช้ในการวนรอบข้อมูลภายใน object โดยผลลัพธ์ที่ได้คือ keys แต่ละ keys ที่มีภายใน object เหล่านั้น

// หรือจัเป็นค่าที่เก็บเอาไว้ใน keys นั้นๆ ก็ได้เหมือนกัน ผ่านการใช้คำสั่ง ตัวแปร\[ตัวแปร initial loop]

let product\_object3 = {id:"P003", product:"Soup mint aroma" ,price:"30฿"}

for(let list in product\_object3){

&nbsp;   console.log(list)

&nbsp;   console.log(product\_object3\[list])

}

console.log("----------------------------------------------------------------------------")

#### ต่อมาเป็นส่วนของโจทย์ที่ทางอาจารย์จริงผู้ใจบุญของเราได้ให้มาทั้งหมด 11 ข้อ เรามาเริ่มกันเลยดีกว่า !! ⸜(｡˃ ᵕ ˂)⸝♡



// การบ้านข้อที่ 1

function isInRange(num,min,max){

&nbsp;   if(min <= num \&\& num <= max)

&nbsp;       // เป็นการเปรียบเทียบค่าความจริงทั้งสองฝั่ง ถ้าหาก num >= min และ

&nbsp;       // num <= max เป็นความจริงทั้งคู่ก็จะให้ผลว่าเป็นจริงออกมา (สาเหตุที่เขียนเปรียบเทียบรวมกันไม่ได้นั้น

&nbsp;       // เพราะถ้าหากเงื่อนไขไหนเป็นจริงเมื่อนำไปเทียบกับอีกค่าหนึ่งต่อเลยยังไงก็จะได้จริงอยู่ดี แล้วทำให้ไม่ได้ผลเป็นเท็จอย่างที่ควรจะเป็น)

&nbsp;       return true

&nbsp;   else 

&nbsp;       return false

}

console.log(isInRange(5,1,10))

console.log(isInRange(15,1,10))

console.log(isInRange(10,10,20))

console.log("..........................................")



// การบ้านข้อที่ 2

function evaluateExpression(a,b,operator) {

&nbsp;   if (operator === '+') {

&nbsp;       return a + b

&nbsp;   }

&nbsp;   else if (operator === '-') {

&nbsp;       return a - b

&nbsp;   }

&nbsp;   else if (operator === '\*') {

&nbsp;       return a \* b

&nbsp;   }

&nbsp;   else if (operator === '/') {

&nbsp;       return a / b

&nbsp;   }

&nbsp;   else 

&nbsp;       return error

}

console.log(evaluateExpression(1,2,'\*')) // 2

console.log(evaluateExpression(1,2,'/')) // 0.5

console.log(evaluateExpression(1,2,'-')) // -1

console.log(evaluateExpression(1,2,'+')) // 3

console.log("..........................................")



// การบ้านข้อที่ 3

function classifyNumber(num) {

&nbsp;   if(num === 0)

&nbsp;       return 'zero'

&nbsp;   else if((num - 0) > 0)

&nbsp;       // ถ้าหากเงื่อนไขนี้เลขเป็นเลขติดลบ เมื่อเราเอาเลขที่ติดลบไปลบกับ 0 

&nbsp;       // จะทำให้ได้เลขค่าเดิม แล้วเมื่อนำไปเปรียบเทียบกับ 0 ก็จะได้เท็จ

&nbsp;       // เพราะเลขที่ติดลบไม่ได้มากกว่า 0 เลยไปแสดงผลในส่วนของ else

&nbsp;       // ที่ไว้แสดงผลในส่วนเงื่อนไขที่เป็นเท็จนั้นเอง แต่เมื่อเป็นเลขเต็มบวก

&nbsp;       // เมื่อนำไปเทียบว่ามากกว่า 0 หรือไม่ จะเป็นจริงในทุกๆเลขนั้นเอง

&nbsp;       return 'positive'

&nbsp;   else

&nbsp;       return 'negative'

}

console.log(classifyNumber(5)) // positive

console.log(classifyNumber(-3)) // negative

console.log(classifyNumber(0)) // zero

console.log("..........................................")



// การบ้านข้อที่ 4

function fillStartWord(startWord,word) {

&nbsp;   if(word === null || word === undefined)

&nbsp;       // ที่ไม่ใช้ \&\& เพราะถ้าอยากจะให้เป็นจริงขึ้นมา word ต้องเป็นทั้ง

&nbsp;       // null \& undefined ซึ่งมันเป็นไปไม่ได้ 

&nbsp;       // เลยทำให้ไม่ได้แสดงผลเงื่อนไขนี้ซักที เพราะมันเป็นเท็จทั้งเงื่อนไขนั้นเอง

&nbsp;       // เลยต้องใช้ || เพื่อให้เปลี่ยนเงื่อนไขเป็น อันใดอันหนึ่งเป็นจริงแทน 

&nbsp;       // เลยสามารถแสดงผลได้ตามที่ควรจะเป็น

&nbsp;       return undefined

&nbsp;   else if(word.startsWith(startWord))

&nbsp;       return word

&nbsp;   // เนื่องจากยังไงถ้าคำที่เราเอามาต่อเป็นคำที่มีคำเริ่มต้นอยู่ด้านหน้าอยู่แล้ว

&nbsp;   // ก็สามารถเปรียบเปรยได้ว่า ยังไงคำที่เอามาต่อก็มีคำที่ยาวมากกว่าคำต้นอยู่แล้ว

&nbsp;   // เลยให้ return เป็นคำที่เอามาต่อ นั้นเอง

&nbsp;   else

&nbsp;       return startWord.concat(word)

}  

console.log(fillStartWord("1-2565-","Hello World")) // 

console.log(fillStartWord("JS","beginner"))

console.log(fillStartWord("first","firststep"))

console.log(fillStartWord("first",null))

console.log(fillStartWord("first",))

console.log("..........................................")



// การบ้านข้อที่ 5

function calculateBMI(weight,height) {

&nbsp;   formular = weight/(height \*\* 2)

&nbsp;   return formular

}

function getBMIMeaning(weight,height) {

&nbsp;   if(calculateBMI(weight,height) >= 25.0)

&nbsp;       return 'Overweight'

&nbsp;   else if(calculateBMI(weight,height) >= 18.5)

&nbsp;       return 'Normal weight'

&nbsp;   else 

&nbsp;       return 'Underwright'

}

console.log(getBMIMeaning(65,1.8)) // Normal weight

console.log(getBMIMeaning(80,1.7)) // Overweight

console.log(getBMIMeaning(44,1.6)) // Underwright

console.log("..........................................")



// การบ้านข้อที่ 6

function horoscope(year) {

&nbsp;   represent\_number = year % 12

&nbsp;   switch(represent\_number){

&nbsp;       case 1:

&nbsp;           return 'rooster'

&nbsp;       case 2:

&nbsp;           return 'dog'

&nbsp;       case 3:

&nbsp;           return 'pig'

&nbsp;       case 4:

&nbsp;           return 'rat'

&nbsp;       case 5:

&nbsp;           return 'ox'

&nbsp;       case 6:

&nbsp;           return 'tiger'

&nbsp;       case 7:

&nbsp;           return 'rabbit'

&nbsp;       case 8:

&nbsp;           return 'dragon'

&nbsp;       case 9:

&nbsp;           return 'snake'

&nbsp;       case 10:

&nbsp;           return 'horse'

&nbsp;       case 11:

&nbsp;           return 'sheep'

&nbsp;       default:

&nbsp;           return 'monkey'

&nbsp;   }

&nbsp;   

}

console.log(horoscope(1900))

console.log(horoscope(1980))

console.log("..........................................")



// การบ้านข้อที่ 7-11 มาต่อในซักวันหนึ่งนะครับ ยังมีวิชาอื่นต่อคิวในการอ่านหนังสืออยู่อีก หวังว่าอาจารย์คงเข้าใจนะครับ .·°՞(っ-ᯅ-ς)՞°·.



// มาต่อให้จบกันดีกว่า เย้เย้เย้ ᗜ⩊ᗜ



// การบ้านข้อที่ 7

function reverseString(anyString) {

&nbsp;   if(anyString === null || anyString === undefined)

&nbsp;       return undefined

&nbsp;   else{

&nbsp;       text\_split = anyString.split("")

&nbsp;       // การที่เราต้องแตกให้ string เป็น array ก่อนเพราะภายใน array

&nbsp;       // มี method ในการทำให้ตัวอักษรย้อนกลับอยู่

&nbsp;       text\_reverse = text\_split.reverse()

&nbsp;       backto\_string = text\_reverse.join("")

&nbsp;       // array.join("") ทำให้ตัวอักษรภายใน array กับมารวมกันเป็น string

&nbsp;       // ที่มีการจัดเรียงแบบเดิมได้

&nbsp;       return backto\_string

&nbsp;   }

}

console.log(reverseString("Hello World")) // dlroW olleH

console.log(reverseString("happyday")) // yadyppah

console.log(reverseString(" ")) // " "

console.log(reverseString(null)) // undefined

console.log(reverseString(undefined)) // undefined

console.log("..........................................")



// การบ้านข้อที่ 8

function isImageFileExtension(fileName) {

&nbsp;   if(fileName === null || fileName === undefined)

&nbsp;       return false

&nbsp;       

&nbsp;   else if(fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") || 

&nbsp;   fileName.endsWith(".svg") || fileName.endsWith(".png") ||

&nbsp;   fileName.endsWith(".gif"))

&nbsp;       return true

&nbsp;   

&nbsp;   else

&nbsp;       return false



}

console.log(isImageFileExtension("sample.jpg")) // true

console.log(isImageFileExtension("sample.jpeg")) // true

console.log(isImageFileExtension("sample.svg")) // true

console.log(isImageFileExtension("sample.png")) // true

console.log(isImageFileExtension("sample.gif")) // true

console.log(isImageFileExtension("sample.doc")) // false

console.log(isImageFileExtension("sample.pdf")) // false

console.log(isImageFileExtension(null)) // false

console.log(isImageFileExtension(undefined)) // false

console.log("..........................................")



// การบ้านข้อที่ 9

function randomNumber(min,max) {

&nbsp;   return Math.floor(Math.random()\*(max - min))+ min

&nbsp;   // Math.random()\*(max - min + 1) จะทำให้ได้ค่าเลขที่สุ่มเป็นช่วงประมาณ สมมติให้(min=5,max=10)

&nbsp;   // (10-5) = 5 ได้เป็นช่วงประมาณ 0-5

&nbsp;   // ในการที่ต้องบวกไปอีก min จะทำให้ได้ช่วงของเลขที่ต้องสุ่มกลายเป็น 5-10 (0+5=5 - 5+5=10) 

}

console.log(randomNumber(1,10))

console.log("..........................................")



// การบ้านข้อที่ 10

function compareGuessNumber(guessNumber) {

&nbsp;   num\_random = randomNumber(1,10)

&nbsp;   if(num\_random > guessNumber){

&nbsp;      return guessNumber - num\_random

&nbsp;   }

&nbsp;   else if(num\_random < guessNumber){

&nbsp;      return guessNumber - num\_random

&nbsp;   }

&nbsp;   else if(num\_random === guessNumber){

&nbsp;      return guessNumber - num\_random

&nbsp;   }

&nbsp;   else

&nbsp;       return "Error"

}

console.log(compareGuessNumber(8))

console.log("..........................................")

// การบ้านข้อที่ 11

function countVowels(sentence) {

&nbsp;   if(typeof sentence === 'string'){

&nbsp;       let count = 0

&nbsp;       for (let i = 0; i < sentence.length ; i++) {

&nbsp;       // การเทียบ string จำเป็นต้องใช้ .length ในการช่วย

&nbsp;       // เพราะ .length จะแปลงค่าความยาวของ string เป็น

&nbsp;       // number เลยทำให้เทียบกับค่า i ได้

&nbsp;       switch(sentence\[i]){

&nbsp;           case "a":

&nbsp;           case "A":

&nbsp;           case "e":

&nbsp;           case "E":

&nbsp;           case "i":

&nbsp;           case "I":

&nbsp;           case "o":

&nbsp;           case "O":

&nbsp;           case "u":

&nbsp;           case "U":

&nbsp;               count += 1

&nbsp;               break

&nbsp;           default:

&nbsp;               continue

&nbsp;               

&nbsp;               // เป็นการบอกว่าถ้าไม่เจอสระ ก็ให้ทำการวนลูปต่อ

&nbsp;               // โดยที่ข้ามค่านั้นไป แต่จะยังเกิดการวนอยู่ ไม่เหมือนกับ

&nbsp;               // การใช้ break ซะทีเดียว ที่ถ้าไม่เจอสระ จะหยุดการทำงานใน

&nbsp;               // switch case แต่จะยังวรลูปให้อยู่

&nbsp;           }

&nbsp;       }

&nbsp;       return count

&nbsp;   }

&nbsp;   else

&nbsp;       return undefined



&nbsp;   

}

console.log(countVowels("Hello World")) // 3

console.log(countVowels("xyz")) // 0

console.log(countVowels(null)) // undefined

console.log(countVowels(undefined)) // undefined





console.log("----------------------------------------------------------------------------")



// จบแล้ว (ไม่)พร้อมสอบแล้ววว !!! ヽ(°〇°)ﾉ

