### vol.1 Expression คืออะไร 

Expression คือ สิ่งที่สามารถคิดคำนวนหรือประมวลผล แล้วสามารถให้ค่าหรือให้คำตอบได้เสมอ อาจจะได้ค่าเป็นตัวเลข string

หรือ boolean ซึ่งอาจจะเกิดจากการรวมกันของค่าคงตัว(ตัวเลขหรือทศนิยม) ตัวดำเนินการ(+-x/,and,or,not) หรือตัวแปรที่ไม่ทราบค่า 

ซึ่งจะเหมือนกับการตั้งประโยคสัญลักษณ์ในวิชาคณิตศาสตร์เลย เช่น x+2=12 12\*2=24 a === "hello"

ตัวอย่างสิ่งที่เป็น Expression ภายใน javascript

let num1 = 10

let strr = "Howdy"

let num2 = 20

// เป็น Expression ที่สั้นที่สุดแล้ว

let resultstrr = num1 + strr

let resultnum = num1 + num2

// เป็น Expression ในการกำหนดค่าของตัวแปรและการดำเนินการของแต่ละตัวแปร เพื่อให้ได้ค่าต่างๆมา

console.log(resultstrr)

console.log(resultnum)

console.log("----------------------------------------------------------------------------")

### vol.2 number type

let somenum = 666

let somefloat = 4.00

console.log("somenum is type : " + typeof somenum) // type number

console.log("somefloat is type : " + typeof somefloat) // type number

type ของตัวเลขและทศนิยม จะนับเป็น "number" เหมือนกันทั้งสองตัวภายในภาษา javascript ซึ่งจะไม่เหมือนกับ python ที่แยกกันอย่างชัดเจน

ซึ่ง type ที่เกี่ยวกับตัวเลขจะมีอีกตัวหนึ่งคือ BigInt ซึ่งจะใช้ในงานที่เฉพาะทาง เช่น งานทางฟิสิกส์ งานธนาคาร

let small = 1

let bigg = 1n

console.log("small is type : " + typeof small) // type number

console.log("bigg is type : " + typeof bigg) // type bigint



##### โจทย์ที่เกี่ยวกับ number type ใน javascript

// โจทย์ 1

let numbruh = 20

let floatbruh = 67.69

if (typeof numbruh === 'number') (console.log("IS IHIS NUM"))

else (console.log("THIS IS NOT NUM")) // type of a = number แล้วเข้าเงื่อนไข if ได้

if (typeof floatbruh === 'number') (console.log("IS IHIS NUM"))

else (console.log("THIS IS NOT NUM"))

// เนื่องจากที่เคยได้อถิบาบไว้ว่า type ของตัวเลขและทศนิยม จะนับเป็น "number" เหมือนกันทั้งสองตัวภายในภาษา javascript

// เลยเข้าเงื่อนไขของ if ด้วย



// โจทย์ 2

let num\_a = 15

let num\_b = 4

plus\_result = num\_a+num\_b

minus\_result = num\_a-num\_b

multi\_result = num\_a\*num\_b

divile\_result = num\_a/num\_b

console.log(plus\_result + "And it have a type :" + typeof(plus\_result))

console.log(minus\_result + "And it have a type :" + typeof(minus\_result))

console.log(multi\_result + "And it have a type :" + typeof(multi\_result))

console.log(divile\_result + "And it have a type :" + typeof(divile\_result))

// จากข้อนี้จะได้ว่า ภาษา javascript สามารถเขียน Expression เพื่อแสดงการ บวกลบคูณหารได้เหมือน python เลย





// โจทย์ 3

let num\_c = 67

let num\_d = 12.12

let num\_e = -20

let num\_f = 0.5

console.log("num\_c is a" + Number.isInteger(num\_c) + "integer")//true integer

console.log("num\_d is a" + Number.isInteger(num\_d) + "integer")//false integer

console.log("num\_e is a" + Number.isInteger(num\_e) + "integer")//true integer

console.log("num\_f is a" + Number.isInteger(num\_f) + "integer")//false integer

// จากข้อนี้จะได้ว่า number type ก็มี buidin function ของตัวเองด้วย โดนในข้อนี้ จะใช้เป็น Number.isInteger ซึ่งจะใช้

// เช็คว่า ตัวแปรนี้เป็นเลขจำนวนเต็ม (ที่รวมถึงเลขเต็มลบด้วย) หรือไม่ ถ้าใช่จะแสดงผลเป็น true ส่วนถ้าไม่ใช่ เช่น เลขทศนิยม

// จะแสดงผลเป็น false ซึ่งสามารถนำมาประยุกต์ใช้ในโจทย์ข้อที่ 1 ได้ด้วย ดังนี้

let numbruh2 = 20

let floatbruh2 = 67.69

if (Number.isInteger(numbruh2) === true) (console.log("IS IHIS NUM"))

else (console.log("THIS IS NOT NUM")) // type of a = number และ Number.isInteger ถูก เข้าเงื่อนไข if ได้

if (Number.isInteger(floatbruh2) === true) (console.log("IS IHIS NUM"))

else (console.log("THIS IS NOT NUM")) // type of b = number แต่เป็นเลขทศนิยม ซึ่งเลขทศนิยมจะแสดงผลเป็น false

// เมื่อใช้ buidin function Number.isInteger เลยไปเข้าเงื่อนไขของ else แทน เลยทำให้โค้ดสมเหตุสมผลมากขึ้น





// โจทย์ 4

let num\_one = 10

let num\_two = 16

let num\_three = 21

let avg = (num\_one + num\_two + num\_three)/3

console.log(avg) // สามารถแสดงผลคำตอบเป็นทศนิยมได้ (15.666666666666666)



// โจทย์ 5

let x = "555"

let y = '5.55'

console.log(x+y) // 5555.55

console.log(Number(x)+Number(y)) // 560.55

// การใช้ buidin function ในข้อนี้คือ Number() ชึ่งเป็นการแปลงตัวเลขที่ใส่เป็น type string ให้กลายเป็น type number

// โดยการตรวจสอบว่าใน string นั้นเป็นตัวเลขหรือเปล่า ถ้าใช่ก็แปลงเป็นตัวเลขให้ ถ้าไม่ใช่เป็นจะแสดงผลว่า NaN(not a number) 



// โจทย์ 6

let someleg = '45678.9'

console.log(Number.parseInt(someleg)) // 45678

console.log(Number.parseFloat(someleg)) // 45678.9

// การใช้ buidin function ในข้อนี้คือ Number.parse\[something]() ชึ่งเป็นการแปลงตัวเลขที่ใส่เป็น type string ให้กลายเป็นเลข

// ในรูปแบบต่าง ๆ โดย parseInt จะแปลงเลขทั้งจำนวนเต็นและทศนิยมในรูปแบบของ string ให้กลายเป็น เลขจำนวนเต็ม

// ส่วน parseFloat จะแปลงเลขทศนิยมในรูปแบบของ string ให้กลายเป็น เลขทศนิยม โดยเมื่อมี .00 จะแสดงผลเป็น จำนวนเต็ม แบบไม่มีจุดทศนิยม

console.log("----------------------------------------------------------------------------")

### Vol.3 string type 

let somestring = "I love r-jan-jing"

let somestr = 'Steam TripleS'

console.log(somestring)

console.log("somestring is type : " + typeof somestring)

// string คือประเภทของข้อมูลหนึ่งที่ใช้เก็บชุดของตัวอักษรเอาไว้เป็นลำดับตั้งแต่ 0-n โดยในแต่ละลำดับจะรวมไปถึงช่องไฟด้วย

// (นับเป็น 1 ลำดับ) โดย string สามารถเขียนได้ทั้งหมด 3 รูปแบบคือ "ฟันหนูครอบ" 'ฝนทองครอบ' และอีกอันหนึ่งจะเรียกว่า

// `` backtick ซึ่งจะใช้ในการครอบเมื่อต้องการให้มีการแสดงผลทั้งข้อความและตัวแปร โดยในการครอบ backtick 1 ครั้ง

// จะกำหมดให้ทั้ง Expression เป็นข้อความ จนมีการใส่ ${} ครอบสิ่งที่ไม่อยากแสดงเป็นข้อความ เช่น 

console.log(`${somestr} and somestr is type : ${typeof somestr}`) // Steam TripleS and somestr is type : string

// จะเห็นว่า ${somestr} (ตัวแปรที่กำหนดไว้ก่อนหน้า) ${typeof somestr} (บอก type ของตัวแปร) เป็นสิ่งที่เราไม่อยากให้แสดงผลเป็นข้อความ

// ซึ่งถ้าทั้ง Expression ครอบ backtick หมดเลยจะได้เป็นแบบนี้แทน

console.log(`somestr and somestr is type : typeof somestr`) // somestr and somestr is type : typeof somestr ซึ่งมันผิดจากที่เราตั้งใจไว้



// โดยอาจารณ์ภายในคลาส ได้ทำให้เราได้รู้จัก buidin function ของ string ตัวหนึ่งคือ ตัวแปร.length ซึ่งใช้ในการนับความยาว

// ของข้อความหนึ่งๆ ว่ายาวเท่าไร (ช่องไฟจะนับเพิ่มเป็นทีละ 1 ความยาวของข้อความด้วย)

console.log(somestring.length) // I love r-jan-jing

console.log(somestr.length) // Steam TripleS

console.log(strr.length) // Howdy



// และยังมีการแสดงผลอีก 2 รูปแบบคือ 

// 1. การเชื่อมด้วย + ซึ่งภายใน type string การบวกจะเท่ากับ การเอาคำสองคำมาต่อกัน

console.log(somestr+somestring) // Steam TripleSI love r-jan-jing

console.log(somestring+somestr) // I love r-jan-jingSteam TripleS

console.log(somestr+somestr) // Steam TripleSSteam TripleS (บวกตัวมันเองซ้ำได้)

console.log(somestring+somestring) // I love r-jan-jingI love r-jan-jing



// 2. ถ้าอยากให้แสดงผลเป็น ตัวอักษรแต่ละตัวภายในคำ จะใช้เป็น ตัวแปร\[x] โดยที่ x คือตำแหน่งของแต่ละตัวอักษร ตั้งแต่ 0-n ซึ่งเป็นตัวสุดท้าย

console.log(somestr\[0])// S

console.log(somestring\[0])// I

// ในการแสองผลตัวอักษรตัวสุดท้ายของข้อความ ให้ใช้เป็น ตัวแปร\[ตัวแปร.length - 1] แทน เพราะ ตัวแปร.length - 1 จะเท่ากับตำแหน่งของตัวอักษรตัวสุดท้ายแทน

console.log(somestr\[somestr.length - 1])// S

console.log(somestring\[somestring.length - 1]) // g



##### โจทย์ที่เกี่ยวกับ string type ใน javascript

// โจทย์ที่ 1

let word = "I love javascript"

let word2 = "ILYJS"

if(word.length > 10){

&nbsp;   console.log('This word have more than 10 Character')

&nbsp;   console.log(`This word is ${word.length} long`)

}

else{

&nbsp;   console.log('This word have less than 10 Character')

&nbsp;   console.log(`This word is ${word.length} long`)

}



if(word2.length > 10){

&nbsp;   console.log('This word have more than 10 Character')

&nbsp;   console.log(`This word is ${word2.length} long`)

}

else{

&nbsp;   console.log('This word have less than 10 Character')

&nbsp;   console.log(`This word is ${word2.length} long`)

}

// เป็นการเขียนฟังก์ชั่นเพื่อเช็คว่า คำคำนี้ มีความยาวมากกว่า 10 ตัวอักษรหรือไม่ ถ้าใช่ก็จะพิมพ์ว่า คำนี้มีมากกว่า 10 ตัวอักษร พร้อม

// แสดงว่า จริงๆแล้วคำนี้มีความยาวกี่ตัวอักษร ส่วนถ้าไม่ยาวเกิน 10 ตัวอักษร ก็จะพิมพ์ว่า คำนี้มีน้อยกว่ากว่า 10 ตัวอักษรแทน



// โจทย์ 2 (Template Literals ``)

// กำหนดให้ ต้องแสองผลข้อความต่อไปนี้ Hello everyone my name is Channarongdet Wongyot and I'm 18 years old

let myname = 'Channarongdet Wongyot'

let myage = '18 years old'

let mygreeting = "Hello everyone"

console.log(`${mygreeting} my name is ${myname} and I'm ${myage}`) // เช็คแล้วถูกต้องตามโจทย์

console.log("----------------------------------------------------------------------------")

### Vol.4 boolean type (Y/N)

// สิ่งที่ต้องรู้เพิ่มเติม !!

const t = true // ค่า t จะไม่เปลี่ยน ไม่ว่าจะทำยังไงก็ตาม

let f = false // ค่า f อาจจะเปลี่ยนได้ เมื่อใช้งานในฟังก์ชั่นอื่นๆ

// =,==,===

// = คือ การกำหนดค่าของตัวแปร เช่น somestring = "I love r-jan-jing"

// == คือ การเช็คว่าค่าที่มาเปรียบเทียบกันว่ามี "ค่า" เท่ากันไหม ถ้าค่าเท่ากันแต่ type ต่างกัน ก็ถือเท่ากัน จะคืนค่าเป็น True มา

let q = "1"

let p = 1

if(p == q) console.log('weak compare')

// === คือ การเช็คว่าค่าที่มาเปรียบเทียบกันว่ามี "ค่า" และ "type" เท่ากันไหม ถ้าเท่ากันทั้งสองค่า จะคืนค่าเป็น True มา

// แต่ถ้ามีตัวไหนตัวหนึ่งไม่ตรงกัน ก็จะค่าคืนค่าเป็น False ทันที ซึ่งช่วยในการทำให้เกิดบัคน้อยลงจาก ==

if(p === q) console.log('strong compare')

let yy = 3

let xx = 5

console.log(Boolean(xx<=yy)) // false

console.log(Boolean(yy<=xx)) // true

console.log(Boolean(xx<yy)) // false

console.log(Boolean(yy<xx)) // true

console.log(Boolean(xx>yy)) // true

console.log(Boolean(yy>xx)) // false

console.log(Boolean(xx!=yy)) // true

console.log(Boolean(yy!=xx)) // true

// boolean สามารถให้ค่าความเป็นจริง ในการเปรียบเทียบแบบต่างๆได้ (<,>,<=,>=,===,!=)



##### โจทย์ที่เกี่ยวกับ boolean type ใน javascript 

// โจทย์ 1

let hascard = true

let hasID = true

if(hascard \&\& hasID){

&nbsp;   console.log("You can enter :)")

}

else{

&nbsp;   console.log("You can't enter here :(")

&nbsp;   console.log("I think you don't have card or ID number :(")

}

// โจทย์ข้อนี้ ถ้าเรากำหนดให้เรามีทั้งการ์ดและเลขประจำตัว (both hascard and hasID is true) ก็จะเข้าสู่เงื่อนไขในการแสดงผลของ if ได้

// เพราะมีการเขียนนิยามไว้ว่า ถ้าเรามี both hascard and hasID (\&\&) และทั้งสองค่ามีค่า boolean เป็น True ก็สามารถแสดงผลได้ แต่ถ้าลองให้มีค่าไดค่าหนึ่งเป็น false

// จากกฎของตรรกศาสตร์จะได้ว่า ถ้ามีตัวใดตัวหนึ่งไม่เป็นจริงภายใต้เงื่อนไขของ and ก็จะให้ผลออกมาเป็นค่า false ทั้งหมด

// แล้วตัวตรรกศาสตร์ที่เหลือล่ะ ภายใน javascript จะเขียนให้เข้าใจง่ายได้อย่างไรกันบ้าง ไปดู!!

let havephone = true

let havegame = false

if(havephone || havegame){

&nbsp;   console.log("You maybe have a phone but doesn't have any game in here")

&nbsp;   console.log("Or maybe you have some game but you don't have a phone")

}

else{

&nbsp;   console.log("You don't have phone and game in here,You boring ...")

}

// โจทย์ข้อนี้ เป็นการให้นิยามภายใต้เงื่อไขของ or (||) โดยจากกฎของตรรกศาสตร์จะได้ว่า ถ้ามีตัวใดตัวหนึ่งยังมีค่าความเป็นจริง = True อยู่ 

// ต่อให้อีกตัวจะเป็นอะไรก็ตาม ก็จะให้ค่าความจริงเป็นจริงเสมอ ส่วนถ้าอยากให้แสดงผลเป็น false ก็ต้องทำให้ค่าความจริงของทั้งสองประพจณ์เป็น false



if(hascard \&\& !(hasID)){

&nbsp;   console.log("You can enter :)")

}

else{

&nbsp;   console.log("You can't enter here :(")

&nbsp;   console.log("I think you don't have card or ID number :(")

}

// โจทย์ข้อนี้ เป็นการให้นิยามภายใต้เงื่อไขของ not (!(ประพจน์)) โดยจากกฎของตรรกศาสตร์จะได้ว่า การใช้ not จะเป็นการค่าความจริง

// ของประพจน์ จาก true --> false จาก false --> trueเลยทำให้ hasID กลายเป็น false เลยทำให้ไม่สามารถแสดงผลของเงื่อนไข if ได้

// เพราะใน if เรากำหนดว่าทั้งสองตัวต้องเป็นจริงหมด (and(\&\&)) เลยถึงจะแสดงผลออกมา ถ้า hasID กลายเป็น false ก็จะแสองผลในเงื่อนไข else แทน



// โจทย์ 2 

console.log(Boolean(1)) // true เพราะในการกำหนดค่าของเลข binary จะให้เลข 1 แทนค่า true

console.log(Boolean(0)) // false เพราะในการกำหนดค่าของเลข binary จะให้เลข 0 แทนค่า false

console.log(Boolean("Hello")) // true เพราะใน string มีการเก็บตัวอักษรไว้อยู่ เลยทำให้แสดงผลเป็น true ออกมา

console.log(Boolean("")) // false เพราะใน string ไม่มีการเก็บตัวอักษรไว้ เลยทำให้แสดงผลเป็น false ออกมา

console.log(Boolean(null)) // false เพราะ null คือ การกำหมดค่าให้ตัวแปรนั้น กลายเป็นตัวแปรที่ไม่มีค่า และเนื่องจากมันเท่ากับการไม่มีค่าตั้งแต่แรก เลยทำให้แสดงผลเป็น false ออกมา

console.log(Boolean(undefined))// false เพราะ undefined คือ การที่ยังไม่ได้กำหนดค่าให้กับตัวแปรหนึ่งๆ และเนื่องจากมันเท่ากับการไม่มีค่าตั้งแต่แรก เลยทำให้แสดงผลเป็น false ออกมา



// โจทย์ 3

let resalt = 10 > 5

let resale = 10 < 5

console.log(resalt) // true

console.log(typeof resalt) // boolean

console.log(resale) // false

console.log(typeof resale)

// เนื่องจากที่เคยกล่าวไปว่า boolean สามารถให้ค่าความเป็นจริง ในการเปรียบเทียบแบบต่างๆได้ (<,>,<=,>=,===,!=)

// ซึ่งผลของค่าเหล่านั้นไม่ใช่ number type แต่เป็น boolean type เพราะในการเปรียบเทียบนั้น เราไม่ได้หาว่าเลขไหนที่มากกว่าเลขไหน

// แต่เป็น เลขนี้มากกว่า-น้อยกว่าเลขนี้จริงหรือไม่

if(typeof resalt === "boolean"){

&nbsp;   if(resalt === true){

&nbsp;       console.log("The first number is greater than second number")

&nbsp;   }

&nbsp;   else console.log("The second number is greater than first number")

}

else console.log("error")

console.log("----------------------------------------------------------------------------")

### vol.5 null \& undefined type

let some

console.log(some) // undefined

console.log(typeof some) // undefined

// undefined type คือ type ของตัวแปรที่ไม่ทราบค่า โดยที่ยังไม่ได้ค่าอะไรกับตัวแปรนั้นไว้เลย เลยของเป็นสถานะ undefined type

let empty = null 

console.log(empty) // null

console.log(typeof empty) // object

// null type คือ การกำหมดให้ตัวแปรนั้นๆ ไม่มีค่า แต่การที่ขึ้นเป็น type object ก็เพราะ การใส่ null ลงไป เป็นเสมือนกับว่า

// เราอยากให้ตัวแปรตัวนี้ไม่มีค่าไปก่อน พออยากจะใช้ก็ค่อยให้ค่ากับตัวแปรนั้น พอใช้ typeof เลยไม่ขึ้นเป็น null แต่เป็น object แทน

// (เป็นเพียง type เดียวที่ไม่สามารถแยกได้ด้วยคำสั่ง typeof)



##### โจทย์ที่เกี่ยวกับ null \& undefined type ใน javascript

// โจทย์ 1

let name\_data 

let age\_data

let year\_data = 'Year 1'



if(name\_data || age\_data === undefined){

&nbsp;   console.log("You missing some data")

&nbsp;   console.log("Please send it again :(")

}

else{

&nbsp;   console.log("Thank you for filling out this form !!")

&nbsp;   console.log("Thank for your information !!")

}

// ตัวแปรที่มีการกำหนดค่าอยู่แล้ว จะไม่ถูกนับเป็น undefined type เลยทำให้เมื่อใส่ || year\_data เข้าไปใน

// boolean expression เลยทำให้ค่าของ if ไม่ถูกนับ เลยไปทำในเงื่อนไขของ else แทน



// โจทย์ที่ 2

let phonenum\_user = null

if(phonenum\_user === null){

&nbsp;   console.log("This user want to delete this number")

}

else if(phonenum\_user === undefined){

&nbsp;   console.log("This user didn't filling their number yet")

}

else console.log("Error")

// โจทย์ในข้อนี้ ผมได้กำหมด senario ไว้ว่า ถ้า phonenum\_user มีค่าตัวแปรเท่ากับ null จะมีความหมายเหมือนกับว่า

// ผู้ใช้งานอยากจะลบเบอร์เก่าออกไปจากฐานข้อมูล เลยให้ phonenum\_user(ที่แทนเป็นเบอร์เก่าของผู้ใช้) = null ส่วนในบริบทของ

// ถ้า phonenum\_user มีค่าตัวแปรเท่ากับ undefined จะมีความหมายเหมือนกับว่า ผู้ใช้งานคนนี้เป็นผู้ใช้งานใหม่ที่ยังไม่ได้กรอกเบอร์โทรของตัวเอง

// ลงไปในฐานข้อมูล เลยให้ phonenum\_user(ที่แทนเป็นเบอร์ใหม่ของผู้ใช้งานคนใหม่) = undefined

console.log("----------------------------------------------------------------------------")

### Vol.6 object type

// object type เป็น type ที่ใว้ในในการเก็บข้อมูลที่มีข้อมูลย่อยๆที่ต้องนำมาประกอบกันเพื่อทำให้เข้าในข้อมูลนั้นๆ ได้มากขึ้น เช่น

// ข้อมูลนักศึกษา โดยส่วนใหญ่แล้วก็จะต้องประกอบไปด้วย ข้อมูลชื่อ,อายุ,ชั้นปี และรหัสนักศึกษา เป็นต้น ซึ่งเราสามารถเขียนการเก็บข้อมูลนี้ในภาษา javascript ได้ดังนี้

let student\_data = { id:68130500014, student\_name:'Channarongdet', student\_surname:'Wongyot', age:18, year:"Year 1"}

// จะสังเกตเห็นได้ว่า ภายใน object type สามารถเก็บข้อมูลไว้ได้หลายๆ type ไว้ภายในตัวมันเองได้ ทั้ง number,string,boolean และอื่นๆ

console.log(student\_data)

// object type จะมีหน้าตาการแสองผลแบบนี้ เมื่อเรียกการแสดงผลจากตัวแปร type object โดยตรง

// {

//   id: 68130500014,

//   student\_name: 'Channarongdet',

//   student\_surname: 'Wongyot',

//   age: 18,

//   year: 'Year 1'

// }

// ในการแสดงผลข้อมูลที่เป็นข้อมูลส่วนย่อยของภายใน object นั้นๆ จะใช้คำสั่งว่า ตัวแปร type object.ชื่อตัวแปรย่อยที่อยากให้แสดงผล เช่น

console.log(student\_data.id) // แสดงผลออกมาเป็น 68130500014 ซึ่งเป็นข้อมูลภายใน object ที่ตัวแปรของข้อมูลนี้ว่า id

console.log(student\_data.student\_name) // Channarongdet ซึ่งเป็นข้อมูลภายใน object ที่ตัวแปรของข้อมูลนี้ว่า student\_name

console.log(student\_data.student\_surname) // Wongyot ซึ่งเป็นข้อมูลภายใน object ที่ตัวแปรของข้อมูลนี้ว่า student\_surname



##### โจทย์ที่เกี่ยวกับ object type ใน javascript

// โจทย์ 1

let student\_data2 = {id:68130500180, student\_name:'Somchai', student\_surname:'Sukkii', age:18, year:"Year 1"}

console.log(student\_data2)

student\_data2.GPA = null; // ตัวแปร type object.ชื่อตัวแปรย่อยที่อยากให้แสดงผล นอกจากการแสดงผล ยังมีอีกหน้าที่หนึ่งคือ

// สามารถกำหนดค่าของตัวแปรย่อยใหม่ที่อยากจะใส่เข้าไปใน object นั้นๆได้ด้วย โดยมีโครงสร้างเป็น type object.ชื่อตัวแปรย่อยที่อยากเพิ่ม = ค่าที่อยากจะเพิ่มเข้าไป

console.log(student\_data2) // การแสดงผลก่อนใส่ค่าเกรดเฉลี่ย (กำหนดให้เป็น null เพราะ ตัวแปร type null สามารถใส่ค่าได้ทีหลังเมื่อต้องการจะใช้งานได้)

// {

//   id: 68130500180,

//   student\_name: 'Somchai',

//   student\_surname: 'Sukkii',

//   age: 18,

//   year: 'Year 1',

//   GPA: null

// }

student\_data2.GPA = 3.05

console.log(student\_data2) // การแสดงผลหลังใส่ค่าเกรดเฉลี่ย

// {

//   id: 68130500180,

//   student\_name: 'Somchai',

//   student\_surname: 'Sukkii',

//   age: 18,

//   year: 'Year 1',

//   GPA: 3.05

// }



// โจทย์ 2

let student\_data3 = {id:68130500181, student\_name:null, student\_surname:null, age:null, year:"Year 1"}

if (student\_data3.student\_name === null || student\_data3.student\_surname === null || 

&nbsp;   student\_data3.id === null || student\_data3.age === null || 

&nbsp;   student\_data3.year === null){

&nbsp;   console.log("You missing some data")

&nbsp;   console.log("Please filling it again :(")

}

// เนื่องจากยังมีค่าบางค่าที่ยังไม่มีใน object เลยทำให้ boolean expression ใน if เป็นจริง เลยแสดงผลเป็น

// You missing some data

// Please filling it again :( เพื่อให้ผู้ใช้ไปกรอกข้อมูลใหม่

else console.log("You can go to another step !!")

student\_data3.student\_name = 'Sunisa'

student\_data3.student\_surname = 'Onjai'

student\_data3.age = 19

console.log(student\_data3) // โค้ดบรรทัดนี้ เป็นการเช็คว่า ได้มีการใส่ข้อมูลครบหรือยัง เมื่อใส่ข้อมูลครบจะแสดงผลดังนี้

// {

//   id: 68130500181,

//   student\_name: 'Sunisa',

//   student\_surname: 'Onjai',

//   age: null,

//   year: 'Year 1',

//   student\_age: 19

// }

// เมื่อลองกรอกข้อมูลครบ แล้วเข้าสู้การพิจารณาของ boolean expression อีกครั้งจะได้ว่า

if (student\_data3.student\_name === null || student\_data3.student\_surname === null || student\_data3.age === null ){

&nbsp;   // การที่เราไม่ให้เงื่อนไข if เช็คตัวแปร id กับ year เพราะว่า การที่ตัวแปรซักตัวจะมีค่าอยู่แล้วนั้น ค่าของ boolean

&nbsp;   // จะเป็นจริงเสมอ และเมื่อใช้ตรรกศาสตร์ or จะได้ว่า ทุกค่าเป็นจริงหมด เลยทำให้ไม่สามารถแสดงผลเงื่อนไขของ else ที่ใช้ในการแสดง

&nbsp;   // เมื่อมีการกรอกทุกๆข้อมูลเรียบร้อยแล้ว

&nbsp;   console.log("You missing some data")

&nbsp;   console.log("Please filling it again :(")

}

else console.log("You can go to another step !!")

// สามารถแสดงผลว่ากรอกข้อมูลครบแล้วเรียบร้อย



##### ช่วงต่อไปจะเป็น การนำเอาหลายๆ type มาใช้ในโจทย์กันครับ ไว้เจอกันก่อนวันส่งงานนะครับ อาจารณ์ :) (โจทย์รวมมิตร)

// โจทย์รวมมิตรที่(ระบบลงทะเบียน)

// Stage 1 : undefined stage (ผู้ใช้พึ่งเข้ามาใช้งาน ยังไม่ได้ล็อกอินเข้าสู่ระบบ)

let user\_name

let user\_email

let user\_ege

if(user\_name === undefined || user\_email === undefined || user\_ege === undefined){

&nbsp;   console.log("This user did't have an account yet")

&nbsp;   console.log("please log in or have an account")

}

else{

&nbsp;   console.log("This user have an account")

&nbsp;   console.log("Thank you for sigh in")

}

console.log("End of stage 1")

console.log("----------------------------------------------------------------------------")

// ภายใน stage นี้ เป็นสถานการณ์ที่ผู้ใช้งาน ได้ทำการเยื่ยมชมเว็บไซต์หรือแอปพลิเคชั่น โดยที่ไม่ได้มีการสมัครสมาชิกภายในระบบของเว็บไซต์

// สาเหตุในการใช้ type undefined เพราะมันมีการสื่อความหมายประมาณว่า "ผู้ใช้งานคนนี้ จริงๆเข้าใช้งานเว็บไซต์/แอปพลิเคชั่นแล้ว แต่ผู้ใช้คนนี้

// ยังไม่ได้กรอกข้อมูลให้ทาง database ทราบเลยว่าเขาเป็นใคร" ไม่ใช่ null เพราะใน stage นี้ ยังไม่ได้มีบริบทของ "ยังกรอกข้อมูลไม่ครบ เลยต้องให้ไปกรอกใหม่"

// Stage 2 : Get information stage (ผู้ใช้กรอกข้อมูลให้กับระบบ)

user\_name = "Siriganraya Singdong"

user\_email = "Sirigunraya@mail.com"

user\_age = 19

if(user\_name === undefined || user\_email === undefined || user\_age === undefined){

&nbsp;   console.log("This user did't have an account yet")

&nbsp;   console.log("please log in or have an account")

}

else{

&nbsp;   console.log("This user have an account")

&nbsp;   console.log("Thank you for sigh in")

&nbsp;   console.log(`Your account is ${user\_name}`)

}

console.log("End of stage 2")

console.log("----------------------------------------------------------------------------")

// Stage 3 : Age verification stage (การตรวจสอบอายุในการเข้าถืงของผู้ใช้)

if(user\_age >= 18){

&nbsp;   console.log("Age verification success")

&nbsp;   console.log("You can accees this site")

&nbsp;   verifi\_success = true

}

else{

&nbsp;   console.log("You can't accees this site")

&nbsp;   verifi\_success = false

} 

console.log("End of stage 3")

console.log("----------------------------------------------------------------------------")

// Stage 4 : Didn't chose activity yet stage (การที่ผู้ใช้ยังไม่เลือกจองที่นั่งกิจกรรม)

let activity\_selected = null

if(activity\_selected === null){

&nbsp;   console.log("You didn't reserve this activity yet.")

&nbsp;   console.log("Do you wish to continue?")

}

else console.log("Reserve success")

console.log("End of stage 4")

console.log("----------------------------------------------------------------------------")

// ภายใน stage นี้ เป็นสถานการณ์ที่ผู้ใช้งาน ยังไม่ได้มีการจองในการทำกิจกรรม

// สาเหตุในการใช้ type null เพราะมันมีการสื่อความหมายประมาณว่า "ผู้ใช้งานคนนี้ยังไม่ได้มีการจองการทำกิจกรรมไว้"

// หรือยังไม่ได้เลือกในการจองกิจกรรมไหนๆในช่วงเวลานั้นๆที่จัดกิจกรรม ซึ่งอาจจะกลับมาเลือกทีหลังก็ได้"

// Stage 5 : Data Object stage (การรวมข้อมูลเป็นก้อนก้อนเดียว)

let user\_information = {username:user\_name ,useremail:user\_email ,userage:user\_age , ageverified:verifi\_success ,activity:activity\_selected}

console.log(user\_information)

console.log("Please cheak your information")

console.log("End of stage 5")

console.log("----------------------------------------------------------------------------")

// Stage 6 : Activity list stage (การเช็คดูข้อมูลของแต่ละกิจกรรมเป็น list รายชื่อ)

const activity\_list = \["Music festival","SIT Job Fair","Big cleaning day","KMUTT Job Fair"]

console.log(`These are all the activities being held around this period ${activity\_list}`)

activity\_selected = "SIT Job Fair"

if(activity\_selected === null){

&nbsp;   console.log("You didn't reserve any activity yet.")

&nbsp;   console.log("Do you wish to continue?")

}

else if(activity\_list.includes(activity\_selected)){ //.includes คือ การเช็คว่าข้อมูลที่เราใส่ อยู่ภายใน array นั้นหรือไม่

&nbsp;   console.log("Reserve success")

&nbsp;   user\_information.activity = activity\_selected // เพื่อเป็นการอัปเดตค่าข้อมูลใน object จาก stage 5

}

else console.log("This activity is not held around this period")

console.log("End of stage 6")

console.log("----------------------------------------------------------------------------")

// Stage 7 : Confirm stage (การยืนยัน/เช็คข้อมูลครั้งสุดท้าย)

if((user\_information.username === null)||(user\_information.useremail === null)||

(user\_information.userage === null)||(user\_information.ageverified !== true)||

(user\_information.activity === null)){

&nbsp;   console.log("You missing some data")

&nbsp;   console.log("Please fill and check again")

&nbsp;   Registered = false

&nbsp;   console.log(user\_information)

}

else{

&nbsp;   console.log("Register success")

&nbsp;   Registered = true

&nbsp;   console.log(user\_information)

}

console.log("End of stage 7")

console.log("----------------------------------------------------------------------------")

// จบการสรุปแล้วนะครับ แล้วเราไว้เจอกันในการสรุปเนื้อหา class หน้านะครับ ♡´･ᴗ･`♡

