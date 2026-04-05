### vol.1 Callback function

Callback function เป็นฟังก์ชั่นที่ใช้ในการส่งข้อมูล/การประมวลผลภายใน ส่งออกไปให้ฟังก์ชั่นอื่นนำไปใช้งานต่อ

โดยผ่านการรูปแบบของฟังก์ชั่นสองรูปแบบคือ anonymous \&\& named

anonymous function เป็นฟังก์ชั่นที่ไม่มีชื่อฟังก์ชั่นประกอบ จะมีแค่การทำฟังก์ชั่นแบบ expresstion

(มีคัวแปรอื่นมารองรับฟังก์ชั่นนั้น) เท่านั้นถึงจะเป็น anonymous function ได้

ส่วน named function เป็นฟังก์ชั่นที่มีชื่อฟังก์ชั่นประกอบ



// ตัวอย่าง Callback function แบบ anonymous function

const somewords = \["company","normal","pavement","immune","card","unfortunate"]

const lessthen7 = somewords.filter((eachword) => eachword.length < 7)

console.log(lessthen7) // \[ 'normal', 'immune', 'card' ]

// ที่ได้ผลแบบนั้นเพราะ เราให้ตัวแปร lessthen7 ทำการเก็บ callback function ของ method .filter()

// ที่ทำกับ somewords อาเรย์นั้นได้ระบุไว้ว่า ให้ return คำแต่ละคำที่มีความยาวตัวอักษรน้อยกว่า 7 ตัว

// ก็เลยได้ผมออกมาเป็น \[ 'normal' (6 ตัว), 'immune'(6 ตัว), 'card' (4 ตัว) ]



// ตัวอย่าง Callback function แบบ named function

function morethenfive(value) {

&#x20;   return value > 5

}

const filterit = \[12,9,1,4,7,2,19,5].filter(morethenfive)

console.log(filterit) // \[ 12, 9, 7, 19 ]

console.log("----------------------------------------------------------------------------")



### vol.2 Array Methods (แบบโครตเจาะลึก)

Buidin function ของตัวแปรที่เป็น type string เพื่อมาทำหน้าที่ที่แตกกต่างกันออกไป 

เพื่อลดเวลาในการเขียนโค้ดในการที่จะได้ผลลัพธ์นั้นออกมา

โดย Array Methods จะมีการแบ่งประเภทออกเป็น 4 ประเภทหลักคือ





#### 2.1 Iterator Methods : เป็น Methods ที่ใช้ในการวนดูค่าของข้อมูลภายในอาเรย์แล้วทำหน้าที่ต่างๆที่ต่างกันไป

#### Array Methods ที่อยู่ในหมวดนี้จะประกอบไปด้วย



##### 2.1.1 forEach() เป็น methods ที่ใช้ในการวนดูค่าทุกค่าใน array พร้อมการเขียน Callback function

##### เพื่อใช้ในการทำการประมวลผลต่างๆที่เรากำหนดไว้



let somewords2 = \[..."Turn to Uppercase soon"]

let uppercase = ''

somewords2.forEach((each\_charecter) => uppercase += each\_charecter.toUpperCase())

console.log(somewords2)

// \[

//   'T', 'u', 'r', 'n', ' ',

//   't', 'o', ' ', 'U', 'p',

//   'p', 'e', 'r', 'c', 'a',

//   's', 'e', ' ', 's', 'o',

//   'o', 'n'

// ]

console.log(uppercase) // TURN TO UPPERCASE SOON



// อถิบายความหมายของ somewords2.forEach((each\_charecter) => uppercase += each\_charecter.toUpperCase())

// somewords2.forEach() ในแต่ละข้อมูลภายในอาเรย์ somewords2



// (each\_charecter) => เป็น Callback function ที่เก็บค่าของแต่ละข้อมูลไว้เป็นตัวแปร each\_charecter ที่ใช้ภายในฟังก์ชั่น



// => uppercase += each\_charecter.toUpperCase() เป็นตัวนิพจน์ที่ใช้บอกคำสั่งว่า Callback function นี้ทำหน้าที่อะไร

// หน้าที่ของ Callback function นี้คือให้เพิ่มคำแต่ละคำที่แปลงเป็นตัวพิมพ์ใหญ่ทั้งหมดแล้ว ใส่ลงไปในตัวแปร uppercase ที่รออยู่



const buyProducts = \[

&#x20; { id: 123, name: 'bag', price: 50, amt: 22 },

&#x20; { id: 2, name: 'pen', price: 100, amt: 1 },

&#x20; { id: 33, name: 'BAG', price: 30, amt: 5 },

]

let total\_price = 0

buyProducts.forEach((productlist) => { // productlist = ตัวแทนของข้อมูลในแต่ละตำแหน่ง index นั้นๆ

&#x20;   console.log(productlist.price \* productlist.amt)

&#x20;   // 1100 เกิดจาก 50\*22 = 1100 (object ตัวแรก)

&#x20;   // 100 เกิดจาก 100\*1 = 100 (object ตัวที่สอง)

&#x20;   // 150 เกิดจาก 30\*5 = 150 (object ตัวที่สาม)

&#x20;   total\_price += productlist.price \* productlist.amt

})

console.log(total\_price) // 1350



// อถิบายความหมายได้ว่า ข้อมูลแต่ละตัวในอาเรย์ buyProducts จะมีตัวแปร productlist เก็บข้อมูลของข้อมูลใน index นั้นๆไว้ ซึ่งข้อมูลนั้นเป็น object

// แล้วให้เรียกดูข้อมูลภายใน object ของ productlist ในตำแหน่งนั้น เอาค่าของ keys price กับ amt (amount) มาคูณกันแล้วค่อยเพิ่มค่านั้นใส่เข้าไป

// ในตัวแปร total\_price ที่เตรียมเอาไว้ในการแสดงผลสุดท้าย แล้ว forEach() ก็จะวนตัว productlist และการประมวลผลข้อมูล keys price กับ amt ไปจน

// ครบทุก object ภายในอาเรย์ buyProducts จึงได้ผลเป็นราคารวมมานั้นเอง



console.log('............................')



##### 2.1.2 filter() เป็น methods ที่จะสร้างอาเรย์ใหม่ ที่ภายในอาเรย์นั้นจะมีข้อมูลที่ผ่านการคัดกรองหรือเป็นจริง

##### ผ่านทางเงื่อนไขที่เรากำหนดไว้ใน Callback function

let somename = \["Mavis","Sukhon","Jaylene","Alaya","Byeongho"]

let longname = somename.filter((eachname) => eachname.length > 5)

somename.forEach((eachname) => {

&#x20;       console.log(`${eachname} this name have length : ${eachname.length}`)

})

// Mavis this name have length : 5

// Sukhon this name have length : 6

// Jaylene this name have length : 7

// Alaya this name have length : 5

// Byeongho this name have length : 8



console.log(longname) // \[ 'Sukhon', 'Jaylene', 'Byeongho' ]



// อถิบายความหมายของ longname = somename.filter((eachname) => eachname.length > 5) ได้ว่า

// somename.filter() ในการคัดกรองข้อมูลของอาเรย์ somename 



// (eachname) => eachname.length > 5 ให้ตัวแปร eachname เก็บข้อมูลของแต่ละชื่อในอาเรย์

// แล้วไล่เช็คที่ละตัวว่า มีความยาวมากกว่า 5 ตัวอักษรหรือไม่ ถ้าใช่ .filter() ก็จะเก็บค่านั้นไว้แล้ว

// นำไปไว้สร้างเป็นอาเรย์ใหม่ภายใต้ตัวแปร longname ที่เรากำหนดไว้นั้นเอง



Note!! จะสังเกตได้ว่าค่าที่แสดงผลออกมาของ .filter() กับ .forEach() ไม่เหมือนกัน

.filter() จะสร้างเป็นตัวแปรใหม่ออกมา ส่วน .forEach() จะแสดงผลเป็น primitive type ได้



console.log('............................')



##### 2.1.3 map() เป็น methods ที่จะสร้างอาเรย์ใหม่ ที่ภายในอาเรย์นั้นจะมีข้อมูลที่ถูกการเปลี่ยนแปลงไปจากอาเรย์ต้นแบบหรือ

##### ถูกเรียกข้อมูลภายในอาเรย์ต้นแบบ จากเงื่อนไขที่เรากำหนดไว้ใน Callback function



let arr2 = \[1,2,3,4,5,6,7,8,9,10]

let x2 = arr2.map(x => x\*2)

console.log(x2) // \[2,4,6,8,10,12,14,16,18,20]

// x2 = arr2.map(x => x\*2) มีความหมายคือ ให้ข้อมูงแต่ละตัวในอาเรย์ต้นแบบ ถูกตูณสองแล้วเก็บข้อมูลก้อนใหม่อันนี้

// เอาไว้ในตัวแปร x2

console.log('............................')



##### 2.1.4 find() เป็น methods ที่ไว้ใช้ในการค้นหาค่าของข้อมูลตัวแรกที่ผ่านเงื่อนไขที่เรากำหนดไว้ใน Callback function

##### โดยถ้าไม่มีข้อมูลไหนตรงเงื่อนไขเลย จะแสดงผลออกมาเป็น undefined แทน

let somename2 = Array.from(somename)

// \["Mavis","Sukhon","Jaylene","Alaya","Byeongho"]

let found = somename2.find((eachname) => eachname.length === 5)

console.log(found) // Mavis



// found = somename2.find((eachname) => eachname.length === 5) มีความหมายคือ

// ให้หาว่าในแต่ละข้อมูลภายในอาเรย์ somename2 ข้อมูลตัวไหนที่มีความยาวตัวอักษรเท่ากับ 5 เมื่อหาตัวแรกเจอแล้ว

// ก็ให้ค่านั้นเก็บไปไว้ในตัวแปร found โดยไม่สนใจข้อมูลอื่นที่ถูกเงือนไข



console.log('............................')



##### 2.1.5 findIndex() เป็น methods ที่มีหน้าที่เหมือนกับ find() แต่มีข้อแตกต่างกันอยู่คือ

##### 1\) findIndex() จะแสดงผลค่าเลข index ของข้อมูลตัวแรกที่ผ่านเงื่อนไขจาก Callback function

##### 2\) ถ้าไม่มีข้อมูลไหนตรงเงื่อนไขเลย findIndex() จะแสดงผลออกมาเป็น -1 แทน

let somename3 = Array.from(somename)

// \["Mavis","Sukhon","Jaylene","Alaya","Byeongho"]

let foundindex = somename3.findIndex((eachname) => eachname.startsWith('S'))

console.log(foundindex) // 1

console.log('............................')



// foundindex = somename3.findIndex((eachname) => eachname.startsWith('S')) มีความหมายคือ

// ให้หาว่าในแต่ละข้อมูลภายในอาเรย์ somename3 ข้อมูลตัวไหนที่ขึ้นต้นด้วยตัวอักษร S บ้าง เมื่อหาตัวแรกเจอแล้ว

// จะให้ค่าของเลขตำแหน่ง (index) ของข้อมูลนั้นออกมาแล้วเอาไปเก็บไว้ในตัวแปร foundindex โดยไม่สนใจข้อมูลอื่นที่ถูกเงือนไข



##### 2.1.6 every() เป็น methods ที่มีหน้าที่ในการเช็คว่าข้อมูลภายในอาเรย์ทุกๆค่า ผ่านตามเงื่อนไขที่เรากำหนดไว้ใน Callback function หรือเปล่า

##### โดยจะให้ค่าออกมาเป็น boolean (T/F)

let arr3 = \[11,22,33,44,55]

let candivideby\_11 = (currentValue) => currentValue % 11 === 0

console.log(arr3.every(candivideby\_11)) // true

console.log('............................')

// arr3.every(candivideby\_11) มีความหมายคือ ภายในทุกๆข้อมูลในอาเรย์ arr3 นั้น ข้อมูลทุกตัวผ่านเงือนไขของ

// ฟังก์ชั่น candivideby\_11 ที่เรากำหนดไว้ว่าข้อมูลทีละตัวว่าหารด้วย 11 ลงตัวหรือไม่



##### 2.1.7 some() เป็น methods ที่มีหน้าที่ในการเช็คว่าข้อมูลภายในอาเรย์บางค่า ผ่านตามเงื่อนไขที่เรากำหนดไว้ใน Callback function หรือเปล่า

##### โดยจะให้ค่าออกมาเป็น boolean (T/F)

let lessthen30 = (currentValue) => currentValue < 30

console.log(arr3.some(lessthen30)) // true

console.log('............................')

// arr3.some(lessthen30) มีความหมายคือ ภายในข้อมูลในอาเรย์ arr3 นั้น จะมีข้อมูลบางตัวที่ผ่านเงือนไขของ

// ฟังก์ชั่น lessthen30 ที่เรากำหนดไว้ว่า จะคืนค่าเป็นจริงเมื่อเป็นเลขที่น้อยกว่า 30 



##### 2.1.8 reduce() เป็น methods ที่จะทำการรวมค่าของข้อมูลภายในอาเรย์ผ่านเงื่อนไขที่เรากำหนดไว้ใน Callback function

##### แล้วแสดงผลออกมาเป็นค่าๆเดียวที่เป็นคำตอบจากการคำนวน

##### โดยมีรายละเอียดของการคำนวนดังนี้

##### ภายในตัว reduce() จะประกอบไปด้วย Parameters ของตัว reduce() เองอีก 3 ตัวคือ

##### 

##### 1\) accumulator คือค่าที่เป็นผลลัพธ์ตกทอดมาจากการทำงานในรอบที่แล้ว โดยในการวิเคราะห์เริ่มต้นของ Callback function

##### จะเอาค่าที่เป็นค่าตัวแรกของอาเรย์มาพิจารณา ถ้าหากเราไม่ได้มีการกำหนดตัวค่าเริ่มต้นในการคำนวนเอาไว้

##### 

##### 2\) currentValue คือค่าของข้อมูลตัวที่เรากำลังโฟกัสอยู่ในรอบปัจจุบัน เช่น ถ้าเรากำหนดให้ Callback function คือการบวกข้อมูล

##### สองตัว reduce() ก็จะเอาค่า accumulator ในตอนนั้นไปบวกกับค่าของ currentValue ที่เรากำลังสนใจอยู่นั้นเอง

##### 

##### 3\) currentIndex คือตำแหน่ง Index ของ currentValue ใน Array



const somenum = \[10,11,12,13,14,15]

function ReduceShowcase(stack,current\_value,index\_in\_array) {

&#x20;   let resalt = stack + current\_value

&#x20;   console.log(

&#x20;   `ค่าสะสม: ${stack}, ค่าที่เราเข้าเยี่ยม: ${current\_value}, index ในอาเรย์นั้น: ${index\_in\_array}, ผลที่ได้: ${resalt}`

)

&#x20; return resalt

}

somenum.reduce(ReduceShowcase)

// จาก const somenum = \[10,11,12,13,14,15]

// ค่าสะสม: 10, ค่าที่เราเข้าเยี่ยม: 11, index ในอาเรย์นั้น: 1, ผลที่ได้: 21 \[10,11]

// ค่าสะสม: 21, ค่าที่เราเข้าเยี่ยม: 12, index ในอาเรย์นั้น: 2, ผลที่ได้: 33 \[21(10+11),12]

// ค่าสะสม: 33, ค่าที่เราเข้าเยี่ยม: 13, index ในอาเรย์นั้น: 3, ผลที่ได้: 46 \[33(21+12),13]

// ค่าสะสม: 46, ค่าที่เราเข้าเยี่ยม: 14, index ในอาเรย์นั้น: 4, ผลที่ได้: 60 \[46(33+13),14]

// ค่าสะสม: 60, ค่าที่เราเข้าเยี่ยม: 15, index ในอาเรย์นั้น: 5, ผลที่ได้: 75 \[60(46+14),15]



console.log('\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*')



#### 2.2 Stack and Queue Methods : เป็น Methods ที่ใช้ในการเพิ่มหรือลดค่า ทั้งจากด้านหน้าและด้านหลังของข้อมูลภายในอาเรย์

#### Array Methods ที่อยู่ในหมวดนี้จะประกอบไปด้วย



##### 2.2.1 push() เป็น methods ที่จะเพิ่มข้อมูล 1 ตัวหรือหลายๆตัวใส่ลงไปในด้านท้ายของอาเรย์ตัวนั้นๆ

##### (ตัวของ push() เองจะ return ค่าออกมาเป็นค่าของความยาวของอาเรย์หลังจากที่เพิ่มข้อมูลไปแล้ว)

let bakerylist = \['Baguette','Butter Croissant','Petite Vanilla Bean Scone']

bakerylist.push('Carrot Cake','Blueberry Streusel Muffin','Brownie')

// console.log(bakerylist)

// \[

//   'Baguette',

//   'Butter Croissant',

//   'Petite Vanilla Bean Scone',

//   'Carrot Cake',

//   'Blueberry Streusel Muffin',

//   'Brownie'

// ]



##### 2.2.2 pop() เป็น methods ที่จะลบข้อมูล 1 ตัวออกไปจากด้านท้ายของอาเรย์ตัวนั้นๆ

##### และเป็น methods ที่ส่งผลถึงความยาวของอาเรย์ด้วย (ความยาวจะลดลง)

bakerylist.pop()

// console.log(bakerylist)

// \[

//   'Baguette',

//   'Butter Croissant',

//   'Petite Vanilla Bean Scone',

//   'Carrot Cake',

//   'Blueberry Streusel Muffin'

// ] (Brownie หายออกไปจาก list แล้ว)



##### 2.2.3 shift() ป็น methods ที่จะลบข้อมูล 1 ตัวออกไปจากด้านหน้าของอาเรย์ตัวนั้นๆ

##### และเป็น methods ที่ส่งผลถึงความยาวของอาเรย์ด้วย (ความยาวจะลดลง)

bakerylist.shift()

// console.log(bakerylist)

// \[

//   'Butter Croissant',

//   'Petite Vanilla Bean Scone',

//   'Carrot Cake',

//   'Blueberry Streusel Muffin'

// ] (Baguette หายออกไปจาก list แล้ว)



##### 2.2.4 unshift() เป็น methods ที่จะเพิ่มข้อมูล 1 ตัวหรือหลายๆตัวใส่ลงไปในด้านหน้าของอาเรย์ตัวนั้นๆ

##### (ตัวของ push() เองจะ return ค่าออกมาเป็นค่าของความยาวของอาเรย์หลังจากที่เพิ่มข้อมูลไปแล้ว)

bakerylist.unshift('Macaroons','Tiramisu')

console.log(bakerylist)

// \[

//   'Macaroons',

//   'Tiramisu',

//   'Butter Croissant',

//   'Petite Vanilla Bean Scone',

//   'Carrot Cake',

//   'Blueberry Streusel Muffin'

// ] (มี 'Macaroons','Tiramisu' เพิ่มเข้ามาใน list แล้ว)



// note !! 

// const nums = \[1,3,5,7] 

// function stack(arr) {

//     arr.push(0)

//     arr.pop()

//     return arr



} การเรียงข้อมูลแบบเป็น stack ต้องใช้ push() คู่กับ pop() เพราะคอนเซป

ของการเรียงข้อมูลแบบเป็น stack คือ เพิ่มหลังออกหลัง

function queue(arr) {

&#x20;   arr.shift()

&#x20;   arr.unshift(-1)

&#x20;   return arr



} การเรียงข้อมูลแบบเป็น queue ต้องใช้ shift() คู่กับ unshift() เพราะคอนเซป

ของการเรียงข้อมูลแบบเป็น queue คือ เพิ่มหน้าออกหน้า



// console.log(stack(nums)) // \[ 1, 3, 5, 7 ]

// console.log(queue(nums)) // \[ -1, 3, 5, 7 ]

// console.log('------------------------------------')

console.log('\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*')



#### 2.3 Subarray Methods : เป็น Methods ที่ใช้ในการแยก,ลบ,แทรก,เติมหรือก็อปปี้ข้อมูล

#### จากอาเรย์ที่มีขนากใหญ่กว่า

#### Array Methods ที่อยู่ในหมวดนี้จะประกอบไปด้วย



##### 2.3.1 splice() เป็น methods ที่จะใช้ในการเปลี่ยนข้อมูลภายในอาเรย์ซึ่งเป็นได้ทั้งการลบข้อมูล การแทนที่ข้อมูลและการเพิ่มข้อมูลก็ได้

##### โดย splice() จะมีรายละเอียดของ Parameters ภายในดังนี้

##### 1\) start เป็นตัวกำหนดว่าเราจะเริ่มลบ,แทนหรือเพิ่มข้อมูลนี้ที่ตำแหน่ง index ไหน

##### 

##### 2\) deletecount เป็นการบอกว่าเราจะทำการลบ,แทนหรือเพิ่มข้อมูลลงไป โดยถ้าเราใส่เป็นเลขจำนวนนับ จะถือว่าเป็นการลบหรือแทนข้อมูล

##### แต่ถ้าใส่เป็นเลข 0 หรือจำนวนเต็มลบ จะถือว่าเป็นการเพิ่มข้อมูลลงไป

##### 

##### 3\) itemN เป็นการบอกว่า 

##### \- (case เพิ่มข้อมูล) เราจะเพิ่มอะไรลงไปในอาเรย์บ้าง{สามารถใส่ได้หลายตัว}

##### \- (case แทนข้อมูล) เราจะแทนที่ข้อมูลนี้ ในตำแหน่งนี้ว่าอะไร

##### ถ้าไม่ใส่อะไรเลยจะเป็นการลบข้อมูล



let fishs = \['Betta','Shark','Catfish','Eel','Sea bass']

fishs.splice(0,1,'Blue Betta')

console.log(fishs) // \[ 'Blue Betta', 'Shark', 'Catfish', 'Eel', 'Sea bass' ] 

// เป็นการแทนที่ค่าของข้อมูลจาก Betta --> Blue Betta

fishs.splice(4,0,'Salmon') 

console.log(fishs) // \[ 'Blue Betta', 'Shark', 'Catfish', 'Eel', 'Salmon', 'Sea bass' ]

// เป็นการเพิ่มค่าข้อมูลที่ตำแหน่งที่ 4

fishs.splice(1,1)

console.log(fishs) // \[ 'Blue Betta', 'Catfish', 'Eel', 'Salmon', 'Sea bass' ]

// เป็นการลบค่าที่ตำแหน่งที่ 1 ออกจากอาเรย์

console.log('............................')



##### 2.3.2 slice() เป็น methods ที่จะใช้ในการตัดแบ่งอาเรย์ในส่วนที่เราต้องการ แล้ว slice() ก็จะทำการ

##### สร้างอาเรย์ใหม่ที่เกิดจากการเอาข้อมูลที่เราตัดมาจากอาเรย์เดิม แปะเข้าไปใส่ในอาเรย์ใหม้

##### โดย slice() จะมีรายละเอียดของ Parameters ภายในดังนี้



##### 1\) start เป็นการกำหนดว่าจะเริ่มตัดแบ่งข้อมูลตั้งแต่ index ไหน

##### 

##### 2\) end เป็นการกำหนดว่าจะให้เลิกตัดข้อมูลที่ index นี้ โดยข้อมูลที่เราตัดมาได้ จะเป็นช่วงข้อมูลตั้งแต่

##### จุด start จนถึง end-1 เท่านั้น index ที่เราใส่ว่าเป็นจุดเลิกตัด ข้อมูลใน index นั้นจะไม่มาด้วย

##### 

##### โดยทั้งสอง Parameters สามารถใส่เลขเต็มลบลงไปได้ ถ้าเป็น start ก็จะทำให้จุดเริ่มต้นการตัดเป็นตั้งแต่ข้อมูลตัวสุดท้ายแทน

##### ส่วนถ้าเป็น end นั้น จะอ้างอิงเลขจบตามสูตรนี้ (end + array.length)

let fishtoo = Array.from(fishs)

// \[ 'Blue Betta', 'Catfish', 'Eel', 'Salmon', 'Sea bass' ]



console.log(fishtoo.slice(3)) // \[ 'Salmon', 'Sea bass' ]

// เริ่มตัดตั้งแต่ตำแหน่งที่ 3 (salmon) --> ข้อมูลตัวสุดท้าย



console.log(fishtoo.slice(1,4)) // \[ 'Catfish', 'Eel', 'Salmon' ]

// เริ่มตัดตั้งแต่ตำแหน่งที่ 1 (Catfish) --> ให้เลิกตัดที่ตำแหน่งที่ 4 (Sea bass)



console.log(fishtoo.slice(-3)) // \[ 'Eel', 'Salmon', 'Sea bass' ]

// เริ่มตัดตั้งแต่ตำแหน่งที่ 2 (-3+5 = 2) (Eel) --> ข้อมูลตัวสุดท้าย



console.log(fishtoo.slice(1,-2)) // \[ 'Catfish', 'Eel' ]

// เริ่มตัดตั้งแต่ตำแหน่งที่ 1 (Catfish) --> ให้เลิกตัดที่ตำแหน่งที่ 3 (-2+5 = 3) (Salmon)

console.log('............................')







##### 2.3.2 fill() เป็น methods ที่จะใช้ในการเปลี่ยนค่าข้อมูลภายในอาเรย์ทุกๆตัว ตั้งแต่จุดเริ่มถึงจุดที่ให้เลิกเปลี่ยน

##### โดย fill() จะมีรายละเอียดของ Parameters ภายในดังนี้

##### 

##### 1\) value เป็นค่าที่เรากำหนดว่าจะแทนที่ที่ข้อมูลตัวเก่าภายในอาเรย์

##### 

##### 2\) start เป็นการกำหนดว่าจะเริ่มแทนที่ข้อมูลตั้งแต่ index ไหน

##### 

##### 3\) end  end เป็นการกำหนดว่าจะให้เลิกแทนที่ข้อมูลที่ index นี้ โดยข้อมูลที่ถูกแทนที่ จะเป็นช่วงข้อมูลตั้งแต่

##### จุด start จนถึง end-1 เท่านั้น index ที่เราใส่ว่าเป็นจุดเลิกแทนที่ ข้อมูลใน index นั้นจะไม่แทนที่ตามค่าที่เรากำหนด

##### 

##### ถ้าเรากำหนดแค่ value อย่างเดียว ข้อมูลทุกตัวในอาเรย์นั้นจะถูกเปลี่ยนเป็นค่า value ทุกตำแหน่ง

##### ถ้าเรากำหนด value และ start ไม่กำหนด end ข้อมูลจะเริ่มแทนที่จากจุด start ไปจนถึงข้อมูลตัวสุดท้ายของอาเรย์นั้นๆ



const somenum2 = \[10,11,12,13,14,15]

console.log(somenum2.fill(0,2,5)) // \[ 10, 11, 0, 0, 0, 15 ]

// .fill(0,2,5) = ให้แทนที่ค่าของข้อมูลนี้เป็น 0 และให้เริ่มแทนที่ตั้งแต่ index ที่ 2 --> ตำแหน่งที่เลิกแทนที่ (5)

console.log(somenum2.fill(5,4)) // \[ 10, 11, 0, 0, 5, 5 ]

// .fill(0,2,5) = ให้แทนที่ค่าของข้อมูลนี้เป็น 5 และให้เริ่มแทนที่ตั้งแต่ index ที่ 4 --> ตำแหน่งสุดท่าย

console.log('\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*')



#### 2.4 Searching \& Sorting Methods : เป็น Methods ที่ใช้ในค้นหาข้อมูลภายในอาเรย์หรือจัดเรียงข้อมูลภายในอาเรย์ใหม่

#### Array Methods ที่อยู่ในหมวดนี้จะประกอบไปด้วย



##### 2.4.1 includes() เป็น methods ที่จะใช้ในการบอกว่า ภายในอาเรย์หนึ่งๆ มีข้อมูลตัวที่เราสนใจอยู่ภายในอาเรย์นั้นไหม ถ้าใช่ก็จะให้ค่า true

##### ถ้าไม่มีข้อมูลนั้นอยู่เลย ก็จะคืนค่าเป็น false (ถ้าใช้ในการค้นหาข้อความ ต้องระวังพิมพ์เล็กใหญ่ด้วยเพราะ includes() เป็น case-sensitive)



const charlist = \['a','b','c','D','E',1,2,3]

console.log(charlist.includes('a')) // true

console.log(charlist.includes('d')) // false

console.log(charlist.includes(3)) // true

console.log('............................')



##### reverse() เป็น methods ที่จะใช้ในการกลับค่าของข้อมูลภายในอาเรย์ จากหน้าไปหลัง จากหลังไปหน้า

console.log(charlist.reverse())

// \[

//   3,   2,   1,   'E',

//   'D', 'c', 'b', 'a'

// ]

console.log('............................')



##### 2.4.2 sort() เป็น methods ที่จะใช้ในการจัดเรียงข้อมูล โดยจะแปลงข้อมูลเหล่านั้นเป็น string และเทียบข้อมูลกันด้วย

##### UTF-16 code ใครมีเลข code น้อยกว่าก็จะแสดงเป็นอันดับแรก



const mouth = \['Jan','feb','March','april','April']

console.log(mouth.sort()) // \[ 'April', 'Jan', 'March', 'april', 'feb' ]



##### แต่ถ้าอยากจะให้เป็นการ sort แบบเรียงตัวเลข จำเป็นต้องเขียน method sort() ในรูปแบบนี้

##### sort.((a,b) => a-b) ซึ่งสื่อความหมายได้ว่า เราจะเทียบข้อมูลสองตัวผ่านการลบกัน ถ้าค่าไหนน้อยกว่าก็จะเอาไว้ข้างหน้า

##### ถ้าค่าไหนมากกว่าก็เอาไปไว้ข้างหลัง



let somenum3 = \[55,78,1,2,90,44,6,34]

console.log(somenum3.sort((a,b) => a-b))

// \[

//    1,  2,  6, 34,

//   44, 55, 78, 90

// ]

console.log('............................')



##### 2.4.3 concat() เป็น methods ที่จะใช้ในการรวมสองอาเรย์เข้าด้วยกันเป็นอาเรย์ใหม่ โดยที่ไม่ส่งผลอะไรกับ

##### อาเรย์ต้นฉบับเลย



let arr4 = arr2.concat(arr3)

console.log(arr4)

// \[

//    1,  2,  3,  4,  5,  6,

//    7,  8,  9, 10, 11, 22,

//   33, 44, 55

// ]



##### 2.4.4 indexOf() เป็น methods ที่จะให้ผลออกมาเป็นเลข index ของสมาชิกตัวแรกที่หาเจอใน

##### อาเรย์นั้น ถ้าไม่มีค่าอยู่ในอาเรย์ จะให้ค่ากลับมาเป็น -1 โดยถ้ากำหนดค่าเริ่มต้นในการหา ก็จะเริ่มหาที่จุดนั้น

##### จนกว่าจะเจอหรือไม่เจอข้อมูลนั้นนั้นเอง

จาก let fishs = \[ 'Blue Betta', 'Catfish', 'Eel', 'Salmon', 'Sea bass' ]



console.log(fishs.indexOf('Catfish')) // 1

console.log(fishs.indexOf('Salmon',1)) // 3



#### 2.5 array --> string Methods : เป็น Methods ที่ใช้ในการแปลงแต่ละข้อมูลภายในอาเรย์ให้กลายเป็น string ผ่านการใช้

#### join() พร้อมการกำหนดตัวคั่นที่เราต้องการคั่นแต่ละข้อมูลของอาเรย์เมื่อเราแปลงมาเป็น string ถ้าไม่กำหนด ก็จะมีการคั่นด้วยคอมม่า

console.log(somename.join()) // Mavis,Sukhon,Jaylene,Alaya,Byeongho











// โจทย์จากทางอาจารย์ ver. ৲( ᵒ ૩ᵕ )৴♡\*৹

// การบ้าน 1

const users = \[

&#x20;   {name:"Alice",active:true},

&#x20;   {name:"Bob",active:false},

&#x20;   {name:"Charlie",active:true}

]



function getActiveUsers(users) {

&#x20;  return users.filter((eachuser) => eachuser.active === true)

}



console.log(getActiveUsers(users)) 

// \[

//  { name: 'Alice', active: true }, 

//  { name: 'Charlie', active: true } 

// ]

console.log('------------------------------------')



// การบ้าน 2

const users2 = \[

&#x20;   {name:"Anna",id:1},

&#x20;   {name:"John",id:2},

&#x20;   {name:"Mike",id:3}

]

function getUserNames(users) {

&#x20;   return users.map((eachuser) => {

&#x20;       return eachuser.name

&#x20;   });

}

console.log(getUserNames(users2)) // \[ 'Anna', 'John', 'Mike' ]

console.log('------------------------------------')



// การบ้าน 3

const tasks = \[

&#x20;   {title:"Task A",completed:true},

&#x20;   {title:"Task B",completed:false},

&#x20;   {title:"Task C",completed:true},

]

function countCompleted(tasks) {

&#x20;   let count = 0

&#x20;   tasks.forEach((eachtitle) => {

&#x20;       if(eachtitle.completed === true){

&#x20;           count++

&#x20;       } 

&#x20;   });

&#x20; return count  

}

console.log(countCompleted(tasks)) // 2

console.log('------------------------------------')



// การบ้าน 4

const products = \[

&#x20;   {name:"Mouse",price:50},

&#x20;   {name:"Keyboard",price:120},

&#x20;   {name:"Moniter",price:300}

]

function getExpensiveProductName(products) {

&#x20;   // forEach() version

&#x20;   // let productname = \[]

&#x20;   // products.forEach((eachproduct) => {

&#x20;   //     if(eachproduct.price > 100){

&#x20;   //         let nameofproduct = eachproduct.name

&#x20;   //         productname.push(nameofproduct)

&#x20;   //     }

&#x20;   // })

&#x20;   // return productname

&#x20;   

&#x20;   // .filter() version

&#x20;   let productname = products.filter((eachproduct) => 

&#x20;       eachproduct.price > 100).map((afterfilter) => 

&#x20;           afterfilter.name)

&#x20;   return productname

}

console.log(getExpensiveProductName(products)) // \[ 'Keyboard', 'Moniter' ]

console.log('------------------------------------')



// การบ้าน 5

const cart = \[

&#x20;   {name:"Book",price:200},

&#x20;   {name:"Pen",price:20},

&#x20;   {name:"Notebook",price:80}

]

function totalCartPrice(cart) {

&#x20;   let price = cart.map((eachproduct) => eachproduct.price)

&#x20;   let price\_summary = price.reduce((starter,currentPrice) => starter + currentPrice)

&#x20;   return price\_summary

}

console.log(totalCartPrice(cart)) // 300

console.log('------------------------------------')

// เช็คคำตอบ

// ค่าสะสม: 200, ค่าที่เราเข้าเยี่ยม: 20, ผลที่ได้: 220

// ค่าสะสม: 220, ค่าที่เราเข้าเยี่ยม: 80, ผลที่ได้: 300



// การบ้าน 6

const products2 = \[

&#x20;   {name:"Keyboard",price:120},

&#x20;   {name:"Mouse",price:50},

&#x20;   {name:"USB Cable",price:20},

&#x20;   {name:"Moniter",price:300}

]

function sortProductByPrice(products) {

&#x20;   let alreadysort = \[...products].sort((a,b) => a.price - b.price)

&#x20;   return alreadysort

}

console.log(sortProductByPrice(products2))

// \[

//   { name: 'USB Cable', price: 20 },

//   { name: 'Mouse', price: 50 },

//   { name: 'Keyboard', price: 120 },

//   { name: 'Moniter', price: 300 }

// ]

console.log('------------------------------------')



// การบ้าน 7

const students = \[

&#x20;   {name:"Alice",score:88},

&#x20;   {name:"Inola",score:92},

&#x20;   {name:"Hongmei",score:97},

&#x20;   {name:"Daisuke",score:75}

]

function hasExcellentStudent(students) {

&#x20;   return students.some((eachstudent) => eachstudent.score > 95)

}

const result = hasExcellentStudent(students)

console.log(result) // true

console.log('------------------------------------')



// การบ้าน 8

const products3 = \[

&#x20;   {name:"Keyboard",price:75,inStock:true},

&#x20;   {name:"Mouse",price:25,inStock:false},

&#x20;   {name:"Laptop",price:1200,inStock:true},

&#x20;   {name:"Moniter",price:300,inStock:false},

&#x20;   {name:"Headphones",price:150,inStock:true}

]

function getAvailableProducts(products){

&#x20;   let availablelist = products.filter((eachproduct) => 

&#x20;   eachproduct.inStock === true)

&#x20;   let totalprice = availablelist.reduce(

&#x20;       (stack,currentprice) => {

&#x20;           let summary = stack + currentprice.price

&#x20;           return summary 

&#x20;       },0   

&#x20;   )

&#x20;   return {

&#x20;       availableProducts:availablelist,

&#x20;       totalprice:totalprice

&#x20;   }

}

const availableProducts = getAvailableProducts(products3)

console.log(availableProducts)

// {

//   availableProducts: \[

//     { name: 'Keyboard', price: 75, inStock: true },        

//     { name: 'Laptop', price: 1200, inStock: true },        

//     { name: 'Headphones', price: 150, inStock: true }      

//   ],

//   totalprice: 1425

// }

console.log('------------------------------------')



// การบ้าน 9

const products4 = \[

&#x20;   {name:"Keyboard",price:80},

&#x20;   {name:"Mouse",price:25},

&#x20;   {name:"Tablet",price:600},

&#x20;   {name:"Laptop",price:1200}

]

function findExpensiveProduct(products) {

&#x20;   let alreadyfound = products.find((eachproduct) => eachproduct.price > 500)

&#x20;   if (alreadyfound === undefined) {

&#x20;       return null

&#x20;   }

&#x20;   return alreadyfound

}

const expensive = findExpensiveProduct(products4)

console.log(expensive) // { name: 'Tablet', price: 600 }

console.log('...................................................')



// เดียวโจทย์ของตัวเองค่อยมาต่อนะครับ ♡＾▽＾♡



// โจทย์ 1

// กำหนดข้อมูลของนักเรียนภายในชั้นเรียน



const studentsinclass = \[

&#x20; { id: "S001", name: "Akarat", score: 85, isAbsent: false, hasSubmittedHomework: true },

&#x20; { id: "S002", name: "Manami", score: 42, isAbsent: true, hasSubmittedHomework: false },

&#x20; { id: "S003", name: "Shizuka", score: 91, isAbsent: false, hasSubmittedHomework: true },

&#x20; { id: "S004", name: "Alex", score: 78, isAbsent: false, hasSubmittedHomework: true },

&#x20; { id: "S005", name: "Xander", score: 55, isAbsent: false, hasSubmittedHomework: false },

&#x20; { id: "S006", name: "Fahsai", score: 88, isAbsent: true, hasSubmittedHomework: true },

&#x20; { id: "S007", name: "Yunseo", score: 60, isAbsent: false, hasSubmittedHomework: true }

];



// Stage 1: คนนี้สอบผ่านหรือเปล่านะ

// สร้าง Array ใหม่ที่เก็บเฉพาะข้อมูลนักเรียนที่ได้คะแนนมากกว่าหรือเท่ากับ 70

function getPassedStudents(studentList) {

&#x20; let Pass\_students = studentList.filter((eachstudent) => eachstudent.score >= 70).map((pass\_stu) => pass\_stu.name)

&#x20; return Pass\_students

}

console.log(getPassedStudents(studentsinclass)) // \[ 'Akarat', 'Shizuka', 'Alex', 'Fahsai' ]

console.log('------------------------------------')





// Stage 2: ค้นหาจากรหัสนักเรียน

// รับรหัสนักเรียนแล้วคืนค่า Object ของนักเรียนคนนั้น

// หากไม่พบนักเรียนที่ตรงกับเงื่อนไข จะต้องคืนค่ากลับมาเป็น undefined



function findStudentById(studentList, studentId) {

&#x20; let inthisclass = studentList.find((eachstudent) => eachstudent.id === studentId)

&#x20; return inthisclass

}

console.log(findStudentById(studentsinclass,"S002"))

// {

//   id: 'S002',

//   name: 'Manami',

//   score: 42,

//   isAbsent: true,

//   hasSubmittedHomework: false

// }

console.log(findStudentById(studentsinclass,"S009")) // undefined

console.log('------------------------------------')





// Stage 3: ทุกคนส่งการบ้านหรือยังนะ

// คำสั่ง: ตรวจสอบว่านักเรียน "ทุกคนในห้อง" ส่งการบ้านแล้วหรือไม่

// คืนค่าออกมาเป็น true หรือ false และจะแสดงชื่อคนที่ยังไม่ส่งออกมา



function checkHomeworkSubmitted(studentList) {

&#x20; let is\_everyone\_doit = studentList.every((eachstudent) => eachstudent.hasSubmittedHomework === true)

&#x20; let who\_isnt\_sent\_it = studentList.filter((eachstudent) => eachstudent.hasSubmittedHomework === false).map(

&#x20;   (whodontsent) => whodontsent.name)

&#x20; return {

&#x20;   EveryoneDoHomework: is\_everyone\_doit,

&#x20;   WhoDontSentHomework: who\_isnt\_sent\_it

&#x20; }

}

console.log(checkHomeworkSubmitted(studentsinclass)) 

// {

//   EveryoneDoHomework: false,

//   WhoDontSentHomework: \[ 'Manami', 'Xander' ]

// }

console.log('------------------------------------')





// Stage 4: คำนวณคะแนนเฉลี่ยของทั้งห้อง

// รวมคะแนนของนักเรียนทุกคนเข้าด้วยกันเป็นค่าเดียว แล้วหารด้วยจำนวนนักเรียนทั้งหมด



function calculateClassAverage(studentList) {

&#x20; let sumscore = studentList.reduce((stack,currentvalue) => stack + currentvalue.score,0)

&#x20; let Scoresummary = Math.floor(sumscore / studentList.length)

&#x20; return `Average score of this class is ${Scoresummary} point`

}

console.log(calculateClassAverage(studentsinclass)) // Average score of this class is 71 point

console.log('------------------------------------')





// Stage 5: จัดอันดับนักเรียนท็อป 3 ของห้อง

// จัดเรียงนักเรียนตามคะแนนจาก "มากไปหาน้อย" 3 คนแรกของห้อง

// Do not modify the original array



function getTopThreeStudents(studentList) {

&#x20;   let sortscore = \[...studentsinclass].sort((score1,score2) => score2.score - score1.score)

&#x20;   let topthree = sortscore.slice(0,3).map((eachstudent) => `${eachstudent.name} is in top 3 and their score is ${eachstudent.score}`)

&#x20;   return topthree

}

console.log(getTopThreeStudents(studentsinclass))

// \[

//   'Shizuka is in top 3 and their score is 91',

//   'Fahsai is in top 3 and their score is 88',

//   'Akarat is in top 3 and their score is 85'

// ]

console.log('------------------------------------')



// Stage 5: ใครขาดเรียน โดนประจานนะ

// ดึงเฉพาะชื่อของนักเรียนที่ขาดเรียน

// แล้วนำชื่อมาต่อกันเป็น String เดียว

// ตัวอย่างผลลัพธ์: "Bordin,Fahsai"



function getAbsentStudentNames(studentList) {

&#x20; let absent = studentList.filter(((eachstudent) => eachstudent.isAbsent)).map((Absentstudent) => Absentstudent.name)

&#x20; absent = absent.join()

&#x20; return absent

}

console.log(getAbsentStudentNames(studentsinclass)) // Manami,Fahsai

console.log('...................................................')



// โจทย์ 2

// กำหนดข้อมูลของซุ้มต่างๆ ในงานวัด



const fairStalls = \[

&#x20; { id: "T01", name: "Balloon Dart Game", type: "game", price: 20, isOpen: true, popularity: 85 },

&#x20; { id: "T02", name: "Cotton Candy", type: "food", price: 15, isOpen: true, popularity: 70 },

&#x20; { id: "T03", name: "Dunk Tank", type: "game", price: 50, isOpen: false, popularity: 95 },

&#x20; { id: "T04", name: "Pad Thai", type: "food", price: 40, isOpen: true, popularity: 88 },

&#x20; { id: "T05", name: "Outdoor Cinema", type: "performance", price: 0, isOpen: true, popularity: 90 },

&#x20; { id: "T06", name: "Goldfish Scooping", type: "game", price: 10, isOpen: true, popularity: 60 },

&#x20; { id: "T07", name: "Grilled Squid", type: "food", price: 60, isOpen: false, popularity: 75 },

&#x20; { id: "T08", name: "Haunted House", type: "game", price: 40, isOpen: true, popularity: 92 }

];





// Stage 1: ตรวจสอบซุ้มที่พร้อมให้บริการ

// สร้าง Array ใหม่ที่เก็บเฉพาะซุ้มที่กำลังเปิดทำการอยู่



function getOpenStalls(stalls) {

&#x20; let stillopen = stalls.filter((eachstalls) => eachstalls.isOpen)

&#x20; return stillopen

}

let openstalls = getOpenStalls(fairStalls)

console.log(openstalls.name) // \["Balloon Dart Game","Cotton Candy","Pad Thai","Outdoor Cinema","Goldfish Scooping","Haunted House"]

console.log('------------------------------------')





// Stage 2: มีเกมไหนไม่เกิน 20 บาทบ้างนะ

// ค้นหาซุ้มเกม "ซุ้มแรก" ที่เปิดให้บริการ และมีราคาไม่เกิน 20 บาท

// หากไม่เจอเลย ให้คืนค่าเป็น null 



function findCheapGame(stalls) {

&#x20; let firstcheap = stalls.find((eachstalls) => 

&#x20;   eachstalls.type === 'game' \&\&

&#x20;   eachstalls.isOpen === true \&\&

&#x20;   eachstalls.price <= 20

&#x20;   )

&#x20; if (firstcheap === undefined) {

&#x20;   return null

&#x20; }

&#x20; else

&#x20;   return firstcheap.name

}

console.log(findCheapGame(fairStalls)) // Balloon Dart Game

console.log('------------------------------------')





// Stage 3: เช็คว่าคืนนี้มีการแสดงในงานไหม?

// ตรวจสอบว่าในงานวัดมีซุ้มการแสดงที่เปิดให้บริการอยู่อย่างน้อย 1 ซุ้มหรือไม่

// คืนค่าออกมาเป็น Boolean



function hasPerformance(stalls) {

&#x20; let perform = stalls.some((eachstalls) => eachstalls.type === 'performance')

&#x20; return perform

}

console.log(hasPerformance(fairStalls)) // true

console.log('------------------------------------')





// Stage 4: คำนวณงบประมาณตะลุยซุ้มเล่นเกม

// ถ้าผู้ร่วมงานต้องการเล่นเกมของทุกซุ้มที่เปิดให้บริการ เขาต้องเตรียมเงินรวมทั้งหมดกี่บาท?



function calculateTotalGameCost(stalls) {

&#x20; let stillopen = stalls.filter((eachstalls) => eachstalls.isOpen)

&#x20; let totalGameCost = stillopen.reduce((stack,currentvalue) => stack + currentvalue.price,0)

&#x20; return `Total cost to play all open game is ${totalGameCost} Bath`

}

console.log(calculateTotalGameCost(fairStalls)) // Total cost to play all open game is 125 Bath

console.log('------------------------------------')





// Stage 5: ตามหาซุ้มระดับตำนาน ของขึ้นชื่อของงานวัดนี้

// คืนค่า Object ของซุ้มที่มีความนิยมที่สูงที่สุดในงาน



function getMostPopularStall(stalls) {

&#x20; let mostpopular = stalls.reduce((popularstalls,currentstalls) => {

&#x20;   if(currentstalls.popularity > popularstalls.popularity){

&#x20;       return currentstalls

&#x20;   }

&#x20;   else

&#x20;       return popularstalls

&#x20; })

&#x20; return mostpopular

}

console.log(getMostPopularStall(fairStalls))

// {

//   id: 'T03',

//   name: 'Dunk Tank',

//   type: 'game',

//   price: 50,

//   isOpen: false,

//   popularity: 95

// }

console.log('------------------------------------')





// Stage 6: เคลียร์พื้นที่ซุ้มที่ปิด

// หาตำแหน่งของซุ้มที่ปิดซุ้มแรก แล้วลบออกจาก Array

// Do not modify the original array



function removeFirstClosedStall(stalls) {

&#x20; let stallsupdate = \[...stalls]

&#x20; let closestall = stallsupdate.findIndex((eachstalls) => eachstalls.isOpen === false)

&#x20; if(closestall !== -1){

&#x20;   stallsupdate.splice(closestall,1)

&#x20; }

&#x20; return stallsupdate.map((eachstalls) => eachstalls.name)

}

console.log(removeFirstClosedStall(fairStalls))

// \[

//   'Balloon Dart Game',

//   'Cotton Candy',

//   'Pad Thai',

//   'Outdoor Cinema',

//   'Goldfish Scooping',

//   'Grilled Squid',

//   'Haunted House'

// ] 'Dunk Tank' หายไป

