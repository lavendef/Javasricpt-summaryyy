### vol.1 String method

// String method คือ Buidin function ของตัวแปรที่เป็น type string เพื่อมาทำหน้าที่ที่แตกกต่างกันออกไป 

// เพื่อลดเวลาในการเขียนโค้ดในการที่จะได้ผลลัพธ์นั้นออกมา โดยในสไลด์ได้มีการนำตัวอย่างของ String method มาสอนในคลาสดังนี้

// charAt() เป็น method ในการใช้หาว่าในตำแหน่งของตัวอักษรนั้นๆในคำหนึ่งๆ เป็นตัวอักษรอะไรกันแน่

const someword = "I Love javascript"

// มีโครงสร้างในการเขียนคือ ตัวแปรที่เก็บค่า string.charAt(ตำแหน่งของตัวอักษรที่สนใจ โดยเริ่มจาก 0 ถึง (ตัวแปร.length - 1))

console.log(`First index number is a charecter ${someword.charAt(0)}`)

// First index number is a charecter I (ตัวอักษรตัวแรกในข้อความ)

console.log(`Last index number is a charecter ${someword.charAt(someword.length - 1)}`)

// Last index number is a charecter t (ตัวอักษรสุดท้ายในข้อความ)

console.log("......................................")



// split() เป็น method ในการแบ่ง string หนึ่งๆ ออกเป็นส่วนย่อยเล็กๆ โดยเก็บในรูปแบบของ array และแบ่งแยกกันด้วยการหา

// pattern ภายใน string เหล่านั้น(หรือเรียกว่าเป็นการหาตัวคั่่นระหว่างคำก็ได้) เช่น " " (ช่องไฟ),","(คอมม่า),''(แบ่งที่ละตัวอักษร)

// มีโครงสร้างในการเขียนคือ ตัวแปรที่เก็บค่า string.split("ตัวคั่นที่ต้องการจะให้ในการแบ่งคำ")

console.log(someword.split(" ")) // \[ 'I', 'Love', 'javascript' ] (แบ่งโดยการหาช่องไฟแล้วแบ่งเป็นคำๆ)

console.log(someword.split(""))

// \[

//   'I', ' ', 'L', 'o', 'v',

//   'e', ' ', 'j', 'a', 'v',

//   'a', 's', 'c', 'r', 'i',

//   'p', 't'

// ] (แบ่งทุกตัวอักษร + ช่องไฟไว้รวมกันใน array)

console.log("......................................")



// trim() เป็น method ที่ใช้ในเมื่อมี string หนึ่งๆ ที่มีการเว้นช่องไฟหน้าหลัง ให้เอาช่องว่างหน้าหลังนั้นออก

const someword\_2 = "  Love on lock is a good song  "

// มีโครงสร้างในการเขียนคือ ตัวแปรที่เก็บค่า string.trim()

console.log(someword\_2.trim()) // Love on lock is a good song

// จะเห็นว่า trim() จะเอาแค่ช่องไฟหน้าหลังออก ไม่ส่งผลต่อช่องไฟด้านในที่เป็นการเว้นคำเลย

console.log("......................................")



// concat() เป็น method ที่ใช้ในการรวม string ย่อยๆ ให้กลายเป็น 1 string ใหญ่

let str = "We"

let str2 = "got"

let str3 = "that"

let str4 = "oops!"

// มีโครงสร้างในการเขียนคือ ตัวแปรที่เก็บค่า string(เป็นตัวแปรเริ่มต้นในการเชื่อมคำ).concat(" "(ตัวคั่่นระหว่างคำ),ตัวแปรที่จะทำการเชื่อมต่อกัน," "(ตัวคั่่นระหว่างคำ),ตัวแปรที่จะการเชื่อมต่อตัวอื่นๆ)

console.log(str.concat(" ",str2," ",str3," ",str4)) // We got that oops!

// จะเห็นว่า concat() สามารถเชื่อม string ได้หลายตัวแปรในครั้งเดียว

console.log(str.concat(",",str2,",",str3,",",str4)) // We,got,that,oops!

console.log("......................................")



// includes() เป็น method ที่ใช้ในการค้นหาว่า ภายใน string นั้น มีคำที่เราสนใจอยู่หรือไม่ ถ้ามีก็จะแสดงผลเป็น true ถ้าไม่มีก็จะแสดงผลเป็น false

// มีโครงสร้างในการเขียนคือ ตัวแปรที่เก็บค่า string.includes("คำที่เราสนใจ")

// จาก I Love javascript

console.log(someword.includes("Love")) // true เพราะในตัวแปร someword มีคำว่า Love อยู่จริง (I Love javascript)

// ภาษา javascript เป็น case sentitive เพราะงั้น ตัวอักษรใหญ่-เล็ก จะแสดงผลไม่เหมือนกัน (Love = true,love = false)

console.log("......................................")



// substring() เป็น method ที่ใช้ในการตัดแบ่ง string จากตำแหน่งเริ่มต้นจนถึงตำแหน่งสุดท้ายที่เราอยากให้ตัดแบ่ง

// มีโครงสร้างในการเขียนคือ ตัวแปรที่เก็บค่า string.substring(ตำแหน่งเริ่มต้นในการตัดแบ่ง,ตำแหน่งสุดท้ายที่อยากให้ตัดแบ่ง)

// จาก I Love javascript

console.log(someword.substring(0,3)) // I L

console.log(someword.substring(5,9)) // e ja

console.log(someword.substring(7,someword.length)) // javascript

console.log("......................................")



// toUpperCase() เป็น method ทึ่ใช้ในการทำให้ string ที่กำหนด ทุกตัวอักษรเป็นตัวพิมพ์ใหญ่ทั้งหมด

// มีโครงสร้างในการเขียนคือ ตัวแปรที่เก็บค่า string.toUpperCase()

// จาก I Love javascript

console.log(someword.toUpperCase()) // I LOVE JAVASCRIPT

console.log("......................................")



// toLowerCase() เป็น method ทึ่ใช้ในการทำให้ string ที่กำหนด ทุกตัวอักษรเป็นตัวพิมพ์เล็กทั้งหมด

// มีโครงสร้างในการเขียนคือ ตัวแปรที่เก็บค่า string.toLowerCase()

// จาก I Love javascript

console.log(someword.toLowerCase()) // i love javascript

console.log("......................................")



// startsWith() เป็น method ทึ่ใช้ในการค้นหาว่า ใน string ที่กำหนด มีคำเริ่มต้นเป็นคำนี้ใช่หรือไม่ ถ้ามีก็จะแสดงผลเป็น true ถ้าไม่มีก็จะแสดงผลเป็น false

// มีโครงสร้างในการเขียนคือ ตัวแปรที่เก็บค่า string.startsWith(คำที่ต้องการตรวจสอบ,(ตำแหน่งที่ต้องการเริ่มตรวจ))

// จาก I Love javascript

console.log(someword.startsWith("I")) // true เริ่มด้วย I จริง

console.log(someword.startsWith("Love",2)) // true เพราะเมื่อเริ่มตรวจที่ตำแหน่งที่สอง คำที่เริ่มต้นคือ Love (จุดที่เริ่มตรวจคือ ช่องไฟก่อนถึงคำว่า Love)

console.log(someword.startsWith("Love",3)) // false เพราะเรื่มตรวจที่ตำแหน่งที่สาม คำที่เริ่มต้นคือ ove ไม่ใช่ Love (จุดที่เริ่มตรวจคือ ตัว L)

console.log("......................................")



// endsWith() เป็น method ทึ่ใช้ในการค้นหาว่า ใน string ที่กำหนด มีคำสุดท้ายเป็นคำนี้ใช่หรือไม่ ถ้ามีก็จะแสดงผลเป็น true ถ้าไม่มีก็จะแสดงผลเป็น false

// มีโครงสร้างในการเขียนคือ ตัวแปรที่เก็บค่า string.startsWith(คำที่ต้องการตรวจสอบ,(ตำแหน่งที่ต้องการเริ่มตรวจ))

// จาก I Love javascript

console.log(someword.endsWith("script")) // true จบด้วย script จริง

console.log(someword.endsWith("javascript",someword.length)) // true เพราะเมื่อเริ่มตรวจที่ตำแหน่งสุดท้าย คำที่จบคือคำว่า javascript

console.log("......................................")

// จบในส่วนของ String method ภายในคลาสแล้ว ต่อมาคือ String method เพิ่มเติมที่เรียนรู้ได้ง่ายและมีการใช้งานที่เยอะอีกด้วย

// String method (extra)



// replace() เป็น method ทึ่ใช้ในการแทนที่คำหนึ่ง ใน string เป็นอีกคำหนึ่ง

let someword\_3 = "My friend is a hell being"

// มีโครงสร้างในการเขียนคือ ตัวแปรที่เก็บค่า string.replace(คำใน string เก่าที่อยากจะเปลี่ยน,คำใหม่ที่แทนลงไปแทนคำเก่า)

console.log(someword\_3)

console.log(someword\_3.replace("hell","good")) // My friend is a good being เห็นว่าเปลี่ยนจากคำว่า hell เป็น good ได้จริง

console.log("......................................")



// repeat() เป็น method ทึ่ใช้ในการแสดงผลคำซ้ำๆได้

let someword\_4 = "Heyo! "

// มีโครงสร้างในการเขียนคือ ตัวแปรที่เก็บค่า string.repeat(จำนวนที่ต้องการให้แสดงผลซ้ำ)

console.log(someword\_4.repeat(3)+"Who there!!") // Heyo! Heyo! Heyo! Who there!! เห็นว่ามีการซ้ำคำว่า Heyo! 3 ครั้งจริงๆ

console.log("......................................")



// indexOf() เป็น method ทึ่ใช้ในการค้นหาว่า คำๆนี้ มีตำแหน่งลำดับเท่าไรภายใน string นั้นๆ (เป็นลำดับเริ่มต้นของคำนั้นๆ)

// มีโครงสร้างในการเขียนคือ ตัวแปรที่เก็บค่า string.indexOf(คำที่ต้องการค้นหาลำดับ)

console.log(someword\_3.indexOf("hell")) // 15 (คำว่า hell มี index เริ่มต้นที่ 15)

console.log(someword\_3.indexOf("friend")) // 3 (คำว่า friend มี index เริ่มต้นที่ 3)

console.log("......................................")



##### โจทย์ที่เกี่ยวกับ String method ใน javascript

// โจทย์ 1

let email = "kotone.hirumi@kmutt.ac.th"

let email\_2 = "koyomi5555@gmail.com"

let email\_3 = "sakura.minatosaki@kmutt.ac.th"

let email\_4 = "68130500181@ad.sit.kmutt.ac.th"

function email\_verification(emaill) {

&nbsp;   if(emaill.includes("@") \&\& emaill.includes("kmutt")){

&nbsp;       console.log(`This email ${emaill} is valid in KMUTT`)

&nbsp;       if(emaill.includes("ad.sit")){

&nbsp;           console.log(`This email ${emaill} is from student in faculty of SIT`)

&nbsp;       }

&nbsp;       else console.log(`This email ${emaill} is not from student in faculty of SIT`)

&nbsp;   }

&nbsp;   else console.log(`This email ${emaill} is not valid in KMUTT`)

}

email\_verification(email)  // this email is valid but not from student in SIT

email\_verification(email\_2) // this email is not valid

email\_verification(email\_3) // this email is valid but not from student in SIT

email\_verification(email\_4) // this email is valid and from student in SIT

console.log("//////////////////////////////////////////")

// โจทย์ในข้อนี้ เป็นการใช้ .includes() ในการตรวจสอบว่า email นี้ เป็นอีเมล์ของมจธ. หรือเปล่า โดยถ้า .includes() เจอทั้ง

// ตัว @ และคำว่า kmutt ก็จะแสดงผลว่า อีเมล์นี้เป็นอีเมล์ของมหาลัย ส่วนถ้าผ่านเงื่อนไขว่าเป็นอีเมล์ของมหาลัยแล้ว ถ้า .includes() เจอ

// คำว่า ad.sit ก็จะแสดงผลว่า อีเมล์นี้เป็นอีเมล์ของคณะ sit แต่ถ้าไม่ผ่านในเงื่อนไขไหนเลย ก็จะแสดงผลว่า อีเมล์นี้ ไม่ใช่อีเมล์ของมหาลัย



// โจทย์ 2

let somename = "Channarongdet Wongyot"

let somename\_2 = "UMAPORN SUPASITTHIMETHEE"

let somename\_3 = "Somsuk Jaidee"

function spit\_it\_up(name) {

&nbsp;   let split\_pieces = name.split(" ")

&nbsp;   let firstname = split\_pieces\[0]

&nbsp;   let surname = split\_pieces\[1]

&nbsp;   return console.log(`This preson name is ${firstname} and their surname are ${surname}`)

}

spit\_it\_up(somename) // This preson name is Channarongdet and their surname are Wongyot

spit\_it\_up(somename\_2) // This preson name is UMAPORN and their surname are SUPASITTHIMETHEE

spit\_it\_up(somename\_3) // This preson name is Somsuk and their surname are Jaidee

// โจทย์ในข้อนี้ เป็นการใช้ .split(" ") ในการแยกชื่อและนามกสุลออกจากกัน และนำชื่อกับนามกสุลเกบใส่ไว้ในอีกตัวแปรที่แยกกันทั้งชื่อและนามกสุล 

console.log("//////////////////////////////////////////")

// โจทย์ 3

let strr = "Gravlax,Lohikeitto,Rui-be,Smoked salmon,Salmon sashimi,Salmon sushi"

let salmon = "Example of salmon menu is"

function menu(ingredent) {

&nbsp;   let menu\_list = ingredent.split(",")

&nbsp;   const menu\_1 = menu\_list\[0]

&nbsp;   const menu\_2 = menu\_list\[1]

&nbsp;   const menu\_3 = menu\_list\[2]

&nbsp;   const menu\_4 = menu\_list\[3]

&nbsp;   const menu\_5 = menu\_list\[4]

&nbsp;   const menu\_6 = menu\_list\[5]

&nbsp;   example = console.log(`${salmon.concat(" ",menu\_1," ",menu\_2," ",menu\_4)}`)

&nbsp;   all = console.log(`And here is ours all salmon menu ${menu\_list}`)

&nbsp;   return example,all

}

menu(strr)

console.log("----------------------------------------------------------------------------")



### vol.2 Array

// Array เป็นการจัดเก็บข้อมูลก้อนใหญ่อีก 1 รูปแบบจาก object โดยมีข้อแตกต่างกันคือ 

// 1. การเขียนฟังก์ชั่นเริ่มต้นไม่เหมือนกัน \[] = array,{} = object

// 2. การเข้าถึงแต่ละข้อมูลไม่เหมือนกัน โดย object จะเข้าถึงได้ผ่าน header(หัวข้อ)ของแต่ละข้อมูล ส่วน array จะใช้

// ตำแหน่งของข้อมูล(index) ในการเข้าถึงแทน

const product\_object = {id:"P001", product:"Blue ink pen" ,price:"25฿"}

let product\_object\_2 = {id:"P002", product:"Black ink pen" ,price:"35฿"}

let product\_array = \["Blue ink pen","Pencil","Football","Paperpack","Soda"]

console.log(product\_object.product) // Blue ink pen

console.log(product\_array\[0]) // Blue ink pen

// โดยมีข้อที่เหมือนกันอยู่บ้างระหว่าง array กับ object คือ ทั้งคู่เป็น mutable(สามารถแก้ไขแต่ละข้อมูลภายในตัวมันเองได้)

product\_object.product = "Red ink pen"

product\_array\[1] = "Red ink pen"

console.log(product\_object.product) // Red ink pen

console.log(product\_array\[1]) // Red ink pen

// และทั้งตัว array กับ object มี type เดียวกันคือ object

console.log(typeof product\_object) // object

console.log(typeof product\_array) // object

// ข้อแตกต่างของ mutable กับ let และ const คือ ถ้าเราทำการแทนข้อมูลตัวแปรชิ้นใหม่ที่มีความแตกต่างกับข้อมูลชิ้นเก่าอย่างชัดเจน

// ถ้าเรากำหนดให้ตัวแปรเก่าเก็บค่าแบบ const ระบบจะไม่ให้แทนเป็นค่าใหม่ เพราะ const จะทำการเก็บข้อมูลไปไว้ที่ที่ const ไปจองข้อมูลไว้ภายใน memory นั้นๆไว้ให้

// ทำให้ข้อมูลนั้นๆ ไม่สามารถเปลี่นแปลงหรือแทนที่ได้ทั้งก้อน แต่ยังสามารถเปลี่ยนข้อมูลภายในตัวแปรได้ ส่วนถ้าเราให้ตัวแปรเก่าเก็บค่าแบบ let 

// จะสามารถแทนค่าใหม่เข้าไปแทนข้อมูลเก่าได้ เพราะ let ไม่ได้มีการเก็บข็อมูลที่แน่นหนาเหมือนกับ const เลยทำให้สามารถแทนค่าได้

const product2 = {id:"R001", product:"Red Ball" ,price:"50฿"}

// product\_object = product2  // TypeError: Assignment to constant variable.

product\_object\_2 = product2

console.log(product\_object\_2) // { id: 'R001', product: 'Red Ball', price: '50฿' }

// แทนที่ข้อมูลเก่าที่เป็น {id:"P002", product:"Black ink pen" ,price:"35฿"}

console.log("......................................")



// Array method คือ Buidin function ของตัวแปรที่เป็น array เพื่อมาทำหน้าที่ที่แตกกต่างกันออกไป 

// เพื่อลดเวลาในการเขียนโค้ดในการที่จะได้ผลลัพธ์นั้นออกมา โดยมีตัวอย่างดังนี้

// isArray() เป็น method ที่ใช้ในการเช็คว่า ค่านั้นๆเป็น Array หรือไม่ ถ้าใช่จะให้ค่า true ถ้าไม่ให้จะให้ค่า false

console.log(Array.isArray(product\_array)) // true

console.log(Array.isArray(\[1,2,3,4,5])) // true

console.log(Array.isArray("Hi hello")) // false

console.log(Array.isArray("\[]")) // false

console.log(Array.isArray(\[])) // true

console.log("......................................")



// join() เป็น method ที่ใช้ในการเปลี่ยนค่าข้อมูลด้านในให้กลายเป็น string ที่จะมีตัวคั่นที่เรากำหนดมาคั่นระหว่างข้อมูลนั้น

// เช่น เว้นด้วยช่องว่าง คั่นด้วยคอมม่า เป็นต้น

// จาก let product\_array = \["Blue ink pen","Red ink pen","Football","Paperpack","Soda"]

console.log(product\_array.join(" ")) // Blue ink pen Red ink pen Football Paperpack Soda (เว็ควรรคระหว่างข้อมูล)

console.log(product\_array.join(",")) // Blue ink pen,Red ink pen,Football,Paperpack,Soda (คอมม่าคั่นระหว่างข้อมูล)

console.log(typeof product\_array.join(" ")) // เปลี่ยนเป็น type string ได้จริง

console.log("......................................")



// pop() เป็น method ที่ใช้ในการลบข้อมูลตัวสุดทเายออกจาก array หนึ่งๆ

let dish = \["fried rice","noodle","sandwith","macaron","chicken soup","eggnog"]

console.log(dish.pop()) // eggnog (ข้อมูลตัวสุดท้าย)

console.log(dish) // \[ 'fried rice', 'noodle', 'sandwith', 'macaron', 'chicken soup' ] เห็นได้ว่า eggnog ไม่มีใน array นี้แล้วจริง

console.log("......................................")



// push() เป็น method ที่ใช้ในการเพิ่มข้อมูลใส่เข้าไปใน array ในตำแหน่งข้อมูลสุดท้าย

dish.push("Salmon")

console.log(dish)

// \[

//   'fried rice',

//   'noodle',

//   'sandwith',

//   'macaron',

//   'chicken soup',

//   'Salmon'

// ] // จะเห็นว่า Salmon ได้เพิ่มเข้ามาภายใน array dish ในถานะข้อมูลตัวสุดท้าย

console.log("......................................")



// reverse() เป็น method ที่ใช้ในสลับตำแหน่งของข้อมูลจากข้อมูลตัวหน้า --> ข้อมูลตัวหลัง ข้อมูลตัวหลัง --> ข้อมูลตัวหน้า เป็นต้น

console.log(dish.reverse())

// \[

//   'Salmon',

//   'chicken soup',

//   'macaron',

//   'sandwith',

//   'noodle',

//   'fried rice'

// ]

console.log("......................................")

##### โจทย์ที่เกี่ยวกับ array ใน javascript

// โจทย์ 1

let foodlist = \['Stir-fried squid with basil','Seafood Curry Stir-fry','Fried pork with garlic',

'Stir-fried beef with bell peppers','Stir-fried kale with crispy pork','Minced pork omelet']

function check\_order(lists) {

&nbsp;   if(lists.length > 5){ // ถ้า list มีมากกว่า 5 เมนู = เราสั่งมาเกิน 1 จาน

&nbsp;       console.log("Why did you order six dishes? There are only five of us.")

&nbsp;       lists.pop() // เอาเมนูที่หก (เมนูสุดท้าย) ออกจาก foodlist

&nbsp;       console.log(lists)

&nbsp;   }

&nbsp;   else if(lists.length < 5){ // ถ้า list มีน้อยกว่า 5 เมนู = เราลืมสั่งมาอีก 1 จาน

&nbsp;       console.log("Why didn't you order for the other person too? There are five of us.")

&nbsp;       flists.push("Spicy Stir-fried Spaghetti") // เอาเมนูที่สั่งเพิ่ม เอาเข้าไปใน foodlist

&nbsp;       console.log(lists)

&nbsp;   }

&nbsp;   else{ // ถ้า list มี 5 เมนูพอดี = สั่งครบแล้ว รอกินได้เลย

&nbsp;       console.log(lists)

&nbsp;       console.log('Here is our order,sir')

&nbsp;   }

}

check\_order(foodlist)

console.log("//////////////////////////////////////////")



// โจทย์ 2

let name\_list = \['Ben','Tun','Jun','Candy','Suwan','Hong','Rumi']

function name\_seach(namae\_list,seachname,Intimacy\_value){

&nbsp;   if(namae\_list.includes(seachname)){ 

&nbsp;       // ถ้าตัวแปร seachname เรากรอกค้นหาชื่อเพื่อนที่อยู่ใน list อยู่แล้ว ก็จะแสดงผล if expression ออกมาว่า 'คนนี้อยู่ใน list'

&nbsp;       // โดยที่จะไม่สนในค่าความสนิท เพราะมีชื่ออยู่ใน list ของเราตั้งแต่แรกอยู่แล้ว (เป็นเพื่อนสนิทกันตั้งแต่แรกอยู่แล้ว)

&nbsp;       console.log(`This person ${seachname} is on my friend list`)

&nbsp;   }

&nbsp;   else{

&nbsp;       // ถ้าตัวแปร seachname เรากรอกค้นหาชื่อเพื่อนที่ไม่ได้อยู่ใน list จะแบ่งได้อีก 3 กรณีคือ

&nbsp;       if(Intimacy\_value >= 70){

&nbsp;           // ถ้าคนชื่อนั้นมีค่าความสนิทของเรามากกว่า 70 คะแนน ก็จะเอาชื่อเพื่อนคนนั้นเพิ่มเข้าไปใน list ให้

&nbsp;           namae\_list.push(seachname)

&nbsp;           console.log(`This person ${seachname} is on my friend list now :)`)

&nbsp;           console.log(namae\_list)

&nbsp;       }

&nbsp;       else if(Intimacy\_value >= 40){

&nbsp;           // ถ้าคนชื่อนั้นมีค่าความสนิทของเราอยู่ช่วง 40-69 คะแนน = ไม่ได้สนิทมาก แต่ก็ยังรู้จักกันอยู่ เลยยังไม่ใส่ชื่อลงไปใน list ให้

&nbsp;           console.log(`I know this person ${seachname} , but we're not close.`)

&nbsp;           console.log(`So I still won't to fill their name for now`)

&nbsp;       }

&nbsp;       else{

&nbsp;           // ถ้าคนชื่อนั้นมีค่าความสนิทของเราน้อยกว่านั้น = ไม่สนิทเลย เลยจะไม่ใส่เข้าไปใน list เด็ดขาด

&nbsp;           console.log(`This person ${seachname} is not on my friend list`)

&nbsp;       } 

&nbsp;   }

&nbsp;   

}

name\_seach(name\_list,"Moron",35)

console.log("----------------------------------------------------------------------------")

### vol.3 global/function/box scope

// ในการเขียนโค้ดภาษา javascript จะมีขอบเขตการ "เรียกใช้งาน" ของแต่ละตัวแปรอยู่ ถ้าไม่ได้อยู่ในขอบเขตเดียวกัน 

// ก็จะไม่สามารถอ้างอิงหรือเรียกใช้งานระหว่างกันได้ โดยจะมีทั้งหมด 3 ขอบเขตคือ

// 1.Global scope เป็นขอบเขตเริ่มต้นของ javascript และเป็นขอบเขตที่ใหญ่ที่สุดอีกด้วย

// ตัวอย่างของ Global scope

global = 1

a = "AHHHHHHHH"

b = 69

c = 100



// 2. Function scope เป็นของเขตภายในตัวแปร function หรือก็คือ function expression นั้นเอง

// ตัวอย่างของ function scope

function sum(n1,n2) {

&nbsp;  return n1 + n2 // function scope

}



// 3. Block scope เป็นของเขตของคำสั่งต่างๆ ที่ต้องมีการใช้ร่วมกัน โดยมักจะใช้กับ if-else/for expression

// ตัวอย่างของ Block scope

if(c>b){

&nbsp;   // console.log("C > B") // Block scope

}



// โดย Block จะมีการเก็บตัวแปรอีกหนึ่งรูปแบบ คือ var โดยที่ var ถ้าเราเก็บตัวแปรที่เก็บแบบ var ไว้ใน Global scope

// และ Block scope พร้อมกัน ก็จะแสดงผลได้เหมือนกัน เพราะว่าตัวแปรที่เก็บแบบ var จะมองว่า Global scope กับ

// Block scope เป็น scope เดียวกัน ส่วนการเก็บแบบ let กับ const เมื่อเก็บไว้ใน Global scope และ Block scope พร้อมกัน

// เมื่อเลือกการแสดงผลเปล่าๆ จะแสดงผลแค่ Global scope ส่วนถ้าอยากจะให้ภายใน Block scope แสดงผล ก็ต้อง

// console.log ลงไปภายใน Block scope แทน เพราะการเก็บ let กับ const จะมองว่าทั้งสอง scope นี้ต่างกัน



var r = 8

{

&nbsp;   var r = "something" 

}

console.log(r) // something

let i = 20

{

&nbsp;   let i = 40

}

console.log(i) // 20

const t = 30

{

&nbsp;   const t = 60

}

console.log(t) // 30



// ในส่วนของ Function scope เมื่อเราประกาศตัวแปรภายใน Function expression แล้วเราอยากให้มาแสดงผลด้านนอก

// จะทำไม่ได้ เพราะตัวแปรนั้นอยู่ภายใน Function scope ซึ่งเป็น scope ที่เฉพาะมากกว่า Global เลยทำให้เมื่ออยากจะให้

// แสดงผลที่ Global เลยทำไม่ได้นั้นเอง



// function text(text) {

//     x = "STAN LOONA"

//     console.log(x)

// }

// console.log(x) // x is not defined เพราะ x อยู่คนละ scope กัน

console.log("......................................")



##### โจทย์ที่เกี่ยวกับ global/function/Block scope ใน javascript

// โจทย์

let numnum = 20

function shownum() {

&nbsp;   let numnum = 30

&nbsp;   console.log(numnum)

}

shownum() // 30 เพราะ shownum() เป็นการแสดงผล Function expression ที่ตัวแปร numnum มีค่าเท่ากับ 30 (numnum อยู่ภายใน Function)

console.log(numnum) // 20 เพราะมันเป็นการแสดงผล numnum ที่อยู่ภายใน Global scope ซึ่งไม่เกี่ยวข้องกับ numnum ที่ภายใน Function scope

console.log("//////////////////////////////////////////")

// โจทย์นี้เป็นการเช็คความเข้าใจระหว่างการใช้ตัวแปรเดียวกันภายใน Global และ Function scope ที่เห็นได้ว่าการใช้ตัวแปรเดียวกัน

// จะให้ค่าที่แตกต่างกัน เมื่ออยู่คนละ scope กัน







##### การบ้านข้อที่ 1

&nbsp;function getType(value) {

&nbsp;   return typeof value

}

console.log(getType('hello')) // string

console.log(getType(123)) // number

console.log(getType(true)) // boolean

console.log(getType(\[])) // object (array)

console.log(getType({})) // object

console.log(getType(undefined)) // undefined

console.log(getType(function () {})) // function

console.log(getType(null)) // object (null)

console.log(getType(Symbol())) // symbol

console.log("\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*")



##### การบ้านข้อที่ 2

function isValidPassword(password) {

&nbsp;   if(password.length < 8){ // ถ้ารหัสผ่านไม่ยาวมากกว่า 8 ตัวขี้นไป จะถือว่าเป็น invalid ทันที

&nbsp;       return false

&nbsp;   }

&nbsp;   else{

&nbsp;       let Upper = password !== password.toLowerCase()

&nbsp;       // ถ้าสมมติว่ารหัสผ่านทุกตัวไม่มีตัวพิมพ์เล็กเลย จะถือได้ว่าต้องมีอย่างน้อยตัวอักษรหนึ่งที่เป็นตัวพิมพ์ใหญ่

&nbsp;       let Lower = password !== password.toUpperCase()

&nbsp;       // ถ้าสมมติว่ารหัสผ่านทุกตัวไม่มีตัวพิมพ์ใหญ่เลย จะถือได้ว่าต้องมีอย่างน้อยตัวอักษรหนึ่งที่เป็นตัวพิมพ์เล็ก

&nbsp;       let have\_number = 

&nbsp;       password.includes('0')||

&nbsp;       password.includes('1')||

&nbsp;       password.includes('2')||

&nbsp;       password.includes('3')||

&nbsp;       password.includes('4')||

&nbsp;       password.includes('5')||

&nbsp;       password.includes('6')||

&nbsp;       password.includes('7')||

&nbsp;       password.includes('8')||

&nbsp;       password.includes('9')

&nbsp;       // เช็คเลขรายตัวว่ามีอยู่ในรหัสผ่านจริงไหม

&nbsp;       return Upper \&\& Lower \&\& have\_number

&nbsp;   }

}

console.log(isValidPassword('Password123')) // true

console.log(isValidPassword('pass123')) // false

console.log(isValidPassword('PASSWORD123')) // false

console.log(isValidPassword('Pass12')) // false

console.log("\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*")



##### การบ้านข้อที่ 3

function reverseAndUppercase(str) {

&nbsp;   str = str.split('') // จะได้ \[ 'h', 'e', 'l', 'l', 'o' ]

&nbsp;   str = str.reverse() // จะได้ \[ 'o', 'l', 'l', 'e', 'h' ] เพราะใน Array method มีการทำให้ข้อมูลทุกตัวสลับตำแหน่งจากท้ายไปหน้าได้

&nbsp;   str = str.join('') // จะได้ olleh เพราะ .join จะทำให้ array เปลี่ยนกลับมาเป็น string ได้อีกครั้ง

&nbsp;   str = str.toUpperCase() // จะได้ OLLEH

&nbsp;   return str

}

console.log(reverseAndUppercase('hello')) // OLLEH

console.log(reverseAndUppercase('JavaScript')) // TPIRCSAVAJ

console.log(reverseAndUppercase('')) // ''



##### ต่อมาเป็นโจทย์รวมมิตรเรื่องที่สรุปในวันนี้ (String method,Array,Scope)

// โจทย์ที่ 1

// Stage 1 Cleaning string (ทำให้ string สะอาดและเปลี่ยนชื่อคนเป็น list ของชื่อคนแทน)

let untrim = "  SukDeE,TeeNa,BLUEbell,JingJAI  "

function cleaning\_string(str){

&nbsp;   str = str.trim()

&nbsp;   str = str.toLowerCase()

&nbsp;   str = str.split(',')

&nbsp;   // Stage 1 end

&nbsp;   // Stage 2 Add member is array (เพิ่มชื่อคนเข้าไปเพิ่มใน list)

&nbsp;   if(Array.isArray(str) === true){

&nbsp;       str.push('Tenna')

&nbsp;       str.push('Bulls##t')

&nbsp;       // Stage 2 end

&nbsp;       // Stage 3 Remove extra name (ลบชื่อคนที่เกินออกจาก list)

&nbsp;       str.pop()

&nbsp;       // Stage 3 end

&nbsp;       // Stage 4 Reverse array (กลับชื่อคนใน list จากหน้าไปหลัง หลังไปหน้า)

&nbsp;       str.reverse()

&nbsp;       // Stage 4 end

&nbsp;       return console.log(str)

&nbsp;   }

&nbsp;   else console.log("Error")

}

cleaning\_string(untrim) // \[ 'Tenna', 'jingjai', 'bluebell', 'teena', 'sukdee' ]



// โจทย์ที่ 2

let mymomento = \['ดอยอ่างขาง','เชียงใหม่',12,24,6,true,2007,'เพชรบุรี','สวนผึ้ง']

function change\_memory(memory) {

&nbsp;   let memento\_str = \[]

&nbsp;   // Stage 1 Array or not (ข้อมูลที่เราเอามาเข้าสู่ function expression เป็น array จริงไหม)

&nbsp;   if(Array.isArray(memory) === true){

&nbsp;       console.log('This infomation is an array')

&nbsp;       // Stage 2 String only (เราจะคัดแยกข้อมูลเอาแค่ string เท่านั้น ข้อมูลอื่นเราจะเมินทั้งที)

&nbsp;       for(let i = 0; i < memory.length ; i++){

&nbsp;           // เป็นการวนดูว่า ตำแหน่งของแต่ละข้อมูล เป็นชนิดข้อมูล string หรือเปล่า

&nbsp;           if(typeof memory\[i] === 'string'){

&nbsp;               memento\_str.push(memory\[i].toLowerCase()) // ถ้าใช้ ก็จะเอาข้อมูลในตำแหน่งนั้น ไปใส่ไว้อีก list หนึ่งแยกกันไว้

&nbsp;           }

&nbsp;       }

&nbsp;       // Stage 2 end

&nbsp;       // Stage 3 Reverse infomation (กลับข้อมูลจากหลังมาหน้า หน้ามาหลัง แล้วแสดงผลเป็นข้อความเดียว)

&nbsp;       memento\_str.reverse()

&nbsp;       memento\_str = memento\_str.join("-->")

&nbsp;       return memento\_str

&nbsp;       // Stage 3 end

&nbsp;   }

&nbsp;   else console.log('This infomation is not an array')

&nbsp;   // Stage 1 end

}



console.log(change\_memory(mymomento))

// This infomation is an array

// สวนผึ้ง-->เพชรบุรี-->เชียงใหม่-->ดอยอ่างขาง



// จบการสรุปแล้วนะครับ แล้วเราไว้เจอกันในการสรุปเนื้อหา class หน้านะครับ ʕ•ᴥ•ʔ

