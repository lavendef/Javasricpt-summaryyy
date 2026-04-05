### vol.0.5 Extra Classes \& Object.create()

จากในสัปดาห์ที่แล้วเราได้รู้กันว่า เราสามารถสร้าง object ได้ทั้งหมด 4 ช่องทางด้วยกันคือ

1.Object literals (let object = {})

2.Constuctor function

// function students(id,fn,ln,adress) {

//     this.id = id

//     this.firstname = fn

//     this.lastname = ln

//     this.addr = adress

// }

// const s1 = new students(68130500181,'Sunday','Tabayashi',{

//   city:'Nan',

//   postal\_code:11111

// })

// console.log(s1)



3\. Classes

// class Students {

//     constructor(id,fn,ln,adress) {

//         this.id = id

//         this.firstname = fn

//         this.lastname = ln

//         this.addr = adress

//     }

// }

// const s2 = new Students(68130500182,'Shinhwa','Kim',{

//   city:'Patani',

//   postal\_code:67890

// })

// console.log(s2)



และ 4. Object.create()

// const s3 = Object.create(s2)

// s3.id = 68130500183

// s3.firstname = "Suyeon"

// s3.lastname = 'Choi'

// console.log(s3) // { id: 68130500183, firstname: 'Suyeon', lastname: 'Choi' }

// console.log(s3.addr) // { city: 'Patani', postal\_code: 67890 } (มาจาก object ตัวเก่า)



โดยเราจะมาอธิบายในส่วนของ Classes กับ Object.create() เพิ่มเติมกันนน °˖✧◝(⁰▿⁰)◜✧˖°



C1. ในการสร้าง object ผ่าน Classes จะมีโครงสร้างในการเขียนดังนี้

// class ตัวแปรที่เก็บข้อมูลในการสร้าง object{

//  constructor(ข้อมูลที่อยากให้มีใน object(เก็บเป็น parameter เหมือนในฟังก์ชั่น)){

//    this.หัวข้อของข้อมูลนั้น = หัวข้อของ parameter ใน constructor

//    (ถ้ามีการอยากเก็บตัวแปรไว้ภายใน object ก็สามารถใช้ class ในการสร้างได้ ดังนี้)

//    ฟังก์ชั่นที่อยากเก็บไว้ใน object(){

//       statement ของฟังก์ชั่นนั้นว่าจะให้ทำอะไร

//      }

//   }

// }



C2. หลังจากที่สร้างตัวของ Classes ที่ทำหน้าที่เหมือนกับฟังก์ชั่นในการสร้าง object แล้ว

ถ้าอยากจะสร้าง object ใหม่จาก Classes ก็จะมีโครงสร้างดังนี้

// const || let ตัวแปรที่เก็บที่อยู่ของ object = new ชื่อตัวแปรของ class(ข้อมูลที่เราอยากให้มีภายใน object โดยใส่ตามลำดับ

// ของ parameter ที่เราสร้างใน class constructor)



C3. ในการสร้าง object ผ่าน Classes มีข้อดีเมื่อต้องการจะต้องมีการเก็บฟังก์ชั่นเอาไว้ภายในตัวของ object เพราะมันช่วยในการ

ประโยชน์พื้นที่หนวยความจำของตัว javascript เอง (มีหลายก็อปปี้แค่ข้อมูลใน object แต่ฟังก์ชั่นจะเก็บไว้แค่ครั้งเดียว ถ้า object

ไหนอย่างจะใช้งานฟังก์ชั่น ก็ให้ไปเรียกตรงที่เก็บฟังก์ชั่นแค่จุดเดียวตรงนั้น ซึ่งช่วยในการประหวัดพื้นที่เมื่อสร้าง object ขึ้นมาเยอะๆ)



ATE1. ในการสร้าง object ผ่าน Object.create() จะมีโครงสร้างในการเขียนดังนี้

// const || let ตัวแปรที่เก็บที่อยู่ของ Object ต้นแบบ = object ต้นแบบ

// const || let ตัวแปรที่เก็บที่อยู่ของ Object อันใหม่ที่ก็อปปี้มาจากตัวต้นแบบ = object.create(ตัวแปรของ object ต้นแบบ)



ATE2. คูณสมบัติจากการสร้าง object ผ่าน Object.create() คือ 

1\. แสดงถึงสมบัติการถ่ายทอดจาก object ต้นแบบ มายัง object ใหม่ได้ชัดเจนที่สุดกว่าการสร้างแบบอื่น

2\. object ใหม่จะมีทั้ง keys และ values จาก object ต้นแบบ ซึ่งสามารถเรียกมาดูค่าได้แค่การใช้ .keys เท่านั้นเพราะ

ถ้าเรา console.log(object ใหม่) จะไม่ขึ้นอะไรเลย

3\. ต่อมาจากข้อสองว่า ทำไม console.log(object ใหม่) จะไม่ขึ้นอะไรเลย เพราะว่าตัว console.log จะแสดงผลแค่ keys

และ values ที่เป็นของตัว object ใหม่เองเท่านั้น keys และ values ที่ได้รับสืบทอดมาจาก object ต้นแบบจะไม่แสดงผลให้เห็น

(สามารถเช็คได้ผ่านการใช้ Object.hasOwnProperty() ได้ด้วย ถ้าเป็น keys และ values ที่ได้รับสืบทอดมาจาก object ต้นแบบ จะแสดงผลเป็นเท็จ)



ATE3. ในการสร้าง object ผ่าน Classes มีข้อดีเมื่อต้องการจะสร้าง object ที่มี keys และ values ที่ต้องการเก็บไว้ใน object นั้น

ไม่ต่างกันมากหรือมีการเพิ่มใหม่เล็กน้อยจาก object ต้นแบบเป็นจำนวนมากๆ



### vol.1 Object compairing

เราจะสามารถเทียบค่าของ object ได้ยังไงกันบ้างนะ (ได้ทั้งหมด 3 วิธี(ในตอนนี้) คือ)

##### 1.1 ==,===,Object.is()

โดยวิธีนี้จะเป็นการเทียบแค่ที่อยู่และ referance ของสอง object เท่านั้น ถ้าสิ่งที่นำมาเทียบกันมีค่าที่อยู่และ referance ตรงกัน

object(หรือตัวแปรที่เก็บที่อยู่ object) สองอันนั้นจะเท่ากัน (true) ไปโดบปริยาย

(โครงสร้างของ Object.is() คือ Object.is(object ตัวแรกที่อยากเทียบ,object ตัวที่สองที่อยากเทียบ))

let info = {id:'001',name:'Soomin'}

let oldinfo = {id:'001',name:'Soomin'}

let currentinfo = info

console.log(info == oldinfo) // false (referance ไม่ตรงกัน)

console.log(oldinfo === currentinfo) // false (referance ไม่ตรงกัน)

console.log(Object.is(currentinfo,info)) // true

console.log('.....................................')



##### 1.2 Manual comparison

วิธีนี้คือการเขียนฟังก์ชั่นในการบ่งบอกว่าสอง object นี้จะเท่ากันได้ผ่านเงื่อนไขอะไรได้บ้าง เช่น ถ้าข้อมูล(value)เลข id เท่ากัน

ก็ถือว่าสอง object เท่ากันเป็นต้น (เราต้องเปนคนกำหนดเงื่อนไขการเท่ากันเอง)

function equalss(ob1,ob2) {

&#x20;   return ob1.id === ob2.id

}

console.log(equalss(info,oldinfo)) // true (Both id is 001)

console.log('.....................................')



##### 1.3 Shallow equaliy

วิธีการนี้เป็นการเทียบว่าข้อมูลด้านใน (key || value) ของทั้งสอง object นั้นมีค่าเท่ากันหรือไม่ โดยผ่านการใช้

Object.keys() \& .values() ในการเทียบ ถ้ามีค่าเท่ากัน ก็ถือว่าเท่ากัน

let keyinfo = Object.keys(info)

let keyoldinfo = Object.keys(oldinfo)

console.log(keyinfo.length === keyoldinfo.length) // true

let valueinfo = Object.values(info)

let valueoldinfo = Object.values(oldinfo)

console.log(valueinfo.length === valueoldinfo.length) // true

// (ซึ่งถ้ามี nested object มันจะเปรียบเทียบเป็น object ต่อ object(ไม่ว่าจะใช้ทั้ง Object.keys() \& .values()) เลยทำให้ได้เท็จเพราะทั้งสอง object

// เป็นคนละ refernce กัน)

console.log("----------------------------------------------------------------------------")



### vol.2 Prototype Chaining

ในการสร้าง object หนึ่งๆนั้นขึ้นมาใหม่(ใช่ new หรือ Object literals) ก็จะต้องมีการสืบทอดจาก object.prototype

ทุกครั้งและทุก object ที่สร้าง (ถ้า new date ก็จะมี date.prototype ที่จะได้รับการสืบทอดมาจาก object.prototype อีกทีหนึ่ง)

โดยการสืบทอดต่อกันเป็นทอดๆ แบบนี้จะเรียกว่า Prototype Chain



##### 2.1 object prototype

ในการสร้าง object ขึ้นมาใหม่อันหนึ่ง จะมีตัวชี้ลับที่จะชื้ตัว object นึ้ ไปหา object prototype เสมอ ซึ่งเรียกว่า \_\_proto\_\_

ซึ่ง object นึ้ก็จะได้รับ builtin propoties ที่เป็นของ object prototype สืบทอดต่อมานั้นเอง

ตัวอย่างของ builtin propoties ที่สืบทอดมาจาก object prototype

\[constructor,hasOwnProperty,isPrototypeOf,toString,valueOf,toLocateString]



const emob = {}

console.log(emob.\_\_proto\_\_) // \[Object: null prototype] {} (prototype ของ object นี้)

//\_\_proto\_\_ is a hidden property of any object variable that points to a parent prototype

console.log(Object.prototype) // \[Object: null prototype] {} (object prototype)

console.log(emob.\_\_proto\_\_ === Object.prototype) // true

console.log(emob.toString()) // \[object Object]

console.log(emob.valueOf()) // {}

console.log(Object.prototype.\_\_proto\_\_) // null

// !! ลำดับครอบครัวของ object emob คือ null --> Object.prototype --> emob โดยจะไม่มีอะไรเลย object prototype

// ไปได้ เพราะถ้าเลยจะกลายเป็นค่า null ตลอด

console.log('.....................................')



##### 2.2 Prototype Chaining in Object.create() (or even Object literals)

const songinfo1 = {song1:"Shut up"}

const songinfo2 = Object.create(songinfo1)

songinfo2.song2 = "Butterfly Door"

console.log(songinfo1) // { song1: 'Shut up' }

console.log(songinfo2) // { song2: 'Butterfly Door' }

console.log(songinfo1.\_\_proto\_\_) // \[Object: null prototype] {} (สืบทอดมาจาก object prototype)

console.log(songinfo2.\_\_proto\_\_) // { song1: 'Shut up' } (สืบทอดมาจาก songinfo1)

console.log(songinfo2.\_\_proto\_\_ === songinfo1) // true (Both are { song1: 'Shut up' })

console.log(Object.getPrototypeOf(songinfo1)) // \[Object: null prototype] {} (สืบทอดมาจาก object prototype)

console.log(Object.getPrototypeOf(songinfo2)) /// { song1: 'Shut up' } (สืบทอดมาจาก songinfo1)



!! ลำดับครอบครัวของ object songinfo2 คือ null --> Object.prototype --> songinfo1 --> songinfo2

โดยการสร้าง songinfo2 ผ่านการใช้ Object.create(songinfo1) songinfo2 ก็จะสืบทอด keys และ values จาก songinfo1 มา

แล้วก็จะได้ builtin propoties ที่สืบทอดมาจาก object prototype มาอีกทอดหนึ่งด้วย เหมือนของที่สิบกันรุ่นสู่รุ่น



// !!! Object.getPrototypeOf(ตัวแปร) มีหน้าที่คล้ายกับ ตัวแปร.\_\_proto\_\_ คือจะแสดงผลสิ่งที่เป็น object prototype ของ object นั้นๆ

console.log('.....................................')



##### 2.3 Prototype Chaining in Constuctor function

function songinfoo(songname) {

&#x20;   this.song1 = songname

}

let songinfo3 = new songinfoo('Nemonemo')

let songinfo4 = Object.create(songinfo3)

songinfo4.song2 = 'It was love'

console.log(songinfoo) // \[Function: songinfoo]

console.log(songinfo3) // songinfoo { song1: 'Nemonemo' }

console.log(songinfo4) // songinfoo { song2: 'It was love' }

console.log(songinfoo.\_\_proto\_\_) // \[Function (anonymous)] Object

console.log(songinfo3.\_\_proto\_\_) // {}

console.log(songinfo4.\_\_proto\_\_) // songinfoo { song1: 'Nemonemo' }

console.log(songinfoo.prototype.isPrototypeOf(songinfo3)) // true

console.log(songinfoo.prototype.isPrototypeOf(songinfo4)) // true

console.log(Object.prototype.isPrototypeOf(songinfo3)) // true

console.log(Object.prototype.isPrototypeOf(songinfo4)) // true



!! ลำดับครอบครัวของ object songinfo4 คือ null --> Object.prototype --> songinfoo.prototype --> songinfo3 --> songinfo4

โดยการสร้าง songinfo4 ผ่านการใช้ Object.create() songinfo4 ก็จะสืบทอด keys และ values จาก songinfo3 มา

โดยที่ songinfo3 ซึ่งเกิดจากฟังก์ชั่น (Constuctor function) ก็จะมีทั้งหมดสอง prototype ที่ songinfo3 ได้รัยสืบทอดต่อมาคือ

songinfoo.prototype และ Object.prototype โดยที่ songinfoo.prototype จะอยู่ภายใน Object.prototype อีกที่หนึ่ง เลยทำให้ทุกๆ object 

ที่จะเกิดจากการสร้างด้วย Constuctor function ก็จะมี builtin propoties ที่สืบทอดมาจาก object prototype มาอีกทอดหนึ่งด้วย เหมือนของที่สิบกันรุ่นสู่รุ่น

โดยมีวิ๊การสืบคือ Object.prototype --> function.prototype --> object



// !!! ตัวแปร1.isPrototypeOf(ตัวแปร2) มีหน้าที่คือ เช็คว่าตัวแปร 1 เป็น prototype ของตัวแปร 2 ไหม ถ้าใช่ก็จริง ถ้าไม่ก็เท็จ

console.log("----------------------------------------------------------------------------")



### vol.3 JSON

คุณสมบัติของ JSON

1.JSON เป็นสิ่งไว้ใช้ในการแสดงข้อมูลที่ถูกเก็บไว้โดยอ้างอิงจาก object syntax ของ javascript เป็น format แบบข้อความ

2.มักจะใช้ในการส่งข้อมูลภายใน webapp เช่น การส่งข้อมูลจาก server --> client

3.ถึงแม้ว่าโครงสร้างมันจะคล้ายกับ object syntax ของ javascript มาก แต่มันไม่จำเป็นต้อง

ผูกติดอยู่กับ javascript (ใช้งานได้อิสระ) และหลายๆภาษาก็สามารถอ่านและสร้าง JSON ได้

4.JSON สามารถเก็บเป็นไฟส์ของตัวเองได้ (.json)



โครงสร้างของ JSON

1.JSON เป็นข้อความ(String)ที่มี format ที่คล้ายกับ object literal ของ javascript มากๆ

2.JSON จำเป็นต้องใช้ "" (ฟันหนู) ในการครอบตัว keys ของข้อมูลที่เก็บเอาไว้ภายในด้วย ใช่แค่ '' ไม่ได้

3.JSON เราสามารถใส่พวกข้อมูลแบบ primitive (num,str,bool) หรือเป็น object ตัวอื่นๆก็ได้เช่นกัน (array,object)

4.JSON ไม่มี methods เป็นของตัวเอง เพราะมันจะเก็บแค่ properties เท่านั้น



JSON.stringify() เป็น methods ของ javascript ที่จะแปลง object literal ของ javascript เป็นรูปแบบของ JSON string

โดยเราสามารถประยุกต์ methods นี้มาใช้ในการเปรียบเทียบค่าภายใน(ในที่นี้คือ value) ของ object ได้

โดยในการเทียบกันนั้น ถ้าตำแหน่งการวาง key และ value ภายใน object ไม่เหมือนกัน ถึงแม้ว่าข้อมูลภายในจะเหมือนกัน

JSON.stringify() จะถือว่าทั้งสอง object นี้ ไม่เท่ากันโดยทันที

const dump1 = {keyword:"What",number:69}

const dump2 = {keyword:"What",number:69}

const dump3 = {number:69,keyword:"What"}

console.log(JSON.stringify(dump1) === JSON.stringify(dump2)) // true

console.log(JSON.stringify(dump1) === JSON.stringify(dump3)) // false



และยังนำมาประยุกต์ในการเช็คได้ด้วยว่า object นี้เป็น empty object หรือเปล่า

โดยมีวิธีการเช็คทั้งหมด 2 วิธีคือ

1.Object.keys()

const emob2 = {}

if(Object.keys(emob2).length === 0) // true

&#x20;   console.log('This is a empty object')

2.JSON.stringify()

if(JSON.stringify(emob2) === '{}') // true

&#x20;   console.log('This is a empty object')



console.log("----------------------------------------------------------------------------")



### vol.4 Object Operators

##### 4.1 Spread Operators (...)

Spread Operators (...) จะเพิ่มข้อมูลทั้ง key \& value ลงไปใน object ใหม่ที่เราอยากสร้าง

(หน้าที่คล้าย Object.create()) โดยถ้าเรามีสอง object แล้วเรา merged สอง object นี้รวมกัน

ถ้าข้อมูล key ของทั้งสอง object เหมือนกัน value ของ object ที่สองจะแทนที่ value ของ object ตัวแรกไป



const obj1 = {word:"For real",somenum:33}

const obj2 = {word:"Oh wow!!",somenumz:45}

const clone1 = {...obj1}

const clone2 = {...obj1, word:"Aha Aha"}

const clone3 = {...obj1,...obj2}

console.log(clone1) // { word: 'For real', somenum: 33 }

console.log(clone2) // { word: 'Aha Aha', somenum: 33 }

console.log(clone3) // { word: 'Oh wow!!', somenum: 33, somenumz: 45 }

console.log('.....................................')



##### 4.2 Object Destructuring

เป็นนิพจน์ในการแยกค่าของข้อมูลภายในแต่ละเลข index ให้ไปเก็บไว้ภายในตัวแปรที่แตกต่างกันได้ในครั้งเดียว

(object ก็สามารถทำได้เหมือนกัน) โดยที่ผ่านมาเป็น array Destructuring และแน่นอนว่า object เองก็ทำได้เหมือนกัน



const info3 = {

&#x20;   names:"Sudaporn",

&#x20;   province:'Nakhon Ratchasima',

&#x20;   district:'Chum Phuang',

&#x20;   gender:'female',

&#x20;   hobby:\['play game','drawing']

}

let {names,province,district,...others} = info3

console.log(names) // Sudaporn

console.log(province) // Nakhon Ratchasima

console.log(district) // Chum Phuang

console.log(others) // { gender: 'female', hobby: \[ 'play game', 'drawing' ] }



// Nested Object ver.

const info4 = {

&#x20;   names:"Hitori",

&#x20;   province:'Nakhon Ratchasima',

&#x20;   district:'Kaeng Sanam Nang',

&#x20;   gender:'male',

&#x20;   hobby:{

&#x20;       hob1:'play game',

&#x20;       hob2:'running',

&#x20;       hob3:'coding'

&#x20;   }

} 

let {hobby:{hob1,hob2,hob3}} = info4

console.log(hob1,hob2,hob3) // play game,running,coding

console.log("----------------------------------------------------------------------------")

// เดียวโจทย์ที่เกี่ยวกับ Object ทั้งหมดจะมาต่อวันพรุ่งนี้หรือวันเสาร์หรือวันอาทิตย์นะครับ o^o 



// โจทย์ 1

// Stage 1 : เราฟังคุณยายผิดเป่านะ

// Senario : เมื่อเราอยากทำเมนูสูตรของคุณยายมาเมนูหนึ่ง ซึ่งเราเคยจดเอาไว้นานแล้ว

// แล้วเราอยากเช็คว่า ข้อมูลที่เราจดมามันตรงกับข้อมูลของคุณยายหรือเปล่า จะต้องเขียนวิธีการเช็คอย่างไรดี

// กำหนดสูตรการทำเมนูซุปไก่ของคุณยาย

const Originrecipe = {

&#x20;   Ingredients:\['chicken meat','potatoes',

&#x20;   'onions','tomatoes','coriander','pepper','celery'

&#x20;   ,'oyster sauce','soy sauce','sugar','carrot'

&#x20;   ],

&#x20;   Howtomake:{

&#x20;       step1:'Boil the chicken for about 20 minutes.',

&#x20;       step2:'Season with oyster sauce, soy sauce, sugar, and pepper.',

&#x20;       step3:'Add the potatoes and carrots to the pot of soup.',

&#x20;       step4:'Add the tomatoes and onions and cook until tender.',

&#x20;       step5:'Serve in a bowl'

&#x20;   }

}



const Myrecipe1 = {

&#x20;   Ingredients:\['chicken meat','potatoes',

&#x20;   'onions','tomatoes','coriander','pepper','celery'

&#x20;   ,'oyster sauce','soy sauce','sugar','carrot'

&#x20;   ],

&#x20;   Howtomake:{

&#x20;       step1:'Boil the chicken for about 20 minutes.',

&#x20;       step2:'Season with oyster sauce, soy sauce, sugar, and pepper.',

&#x20;       step3:'Add the potatoes and carrots to the pot of soup.',

&#x20;       step4:'Add the tomatoes and onions and cook until tender.',

&#x20;       step5:'Serve in a bowl'

&#x20;   }

}



function recipecheck(recipe1,recipe2) {

&#x20;   if(JSON.stringify(recipe1) === JSON.stringify(recipe2)){

&#x20;       // แปลงเป็น JSON เพราะเรามีการวางตำแหน่งของข้อความไว้เป็ะๆ เลยทำให้สามารถเทียบได้

&#x20;       return console.log('Ok,ตรงตามที่คุณยายบอกและ')

&#x20;   }

&#x20;   else

&#x20;       return console.log('น่าจะจดมาผิดแหะ')

}

recipecheck(Originrecipe,Myrecipe1) // Ok,ตรงตามที่คุณยายบอกและ

console.log('-------------------------------')



// Stage 2 : ถ่ายทอดสูตรกันมารุ่นสู่รุ่น

// Senario : เมื่อเราอยากทำเมนูซุปไก่สูตรของคุณแม่ ที่ไม่ต่างจากของคุณยายมาก แต่ก็มีรายละเอียด

// บางอย่างที่ต่างกันที่แม่เพิ่มเติมเข้าไป เราจะเขียนโค้ดสูตรของคุณแม่ที่เราจำได้อย่างไรดี



const Momrecipe = Object.create(Originrecipe)

Momrecipe.addlater = 'MSG'

console.log(Momrecipe) // { addlater: 'MSG' }

console.log(Momrecipe.Howtomake)

// {

//   step1: 'Boil the chicken for about 20 minutes.',

//   step2: 'Season with oyster sauce, soy sauce, sugar, and pepper.',

//   step3: 'Add the potatoes and carrots to the pot of soup.',

//   step4: 'Add the tomatoes and onions and cook until tender.',

//   step5: 'Serve in a bowl'

// }

console.log('-------------------------------')



// Stage 3: อยากปรับปรุงสูตรใหม่

// Senario : เราจะเขียนโค้ดในการที่เราจะเพิ่มรายละเอียดเล็กๆน้อยๆที่น่าจะทำให้เมนูนี้

// อร่อยขึ้นลงในสูตรของเราเองได้อย่างไรบ้าง



const Mynewrecipe = {

&#x20;   ...Originrecipe,

&#x20;   add\_Ingredients:\['MSG','RosDee','Shiitake'],

&#x20;   Howtomake:{

&#x20;       ...Originrecipe.Howtomake,

&#x20;       step1:'Boil the chicken with RosDee for about 20 minutes.',

&#x20;       step3:'Add the potatoes,shiitake and carrots to the pot of soup.',

&#x20;       step4:'Add the tomatoes and onions,follow by MSG and cook until tender.'

&#x20;   }

}

console.log(Mynewrecipe)

// {

//   Ingredients: \[

//     'chicken meat', 'potatoes',

//     'onions',       'tomatoes',

//     'coriander',    'pepper',

//     'celery',       'oyster sauce',

//     'soy sauce',    'sugar',

//     'carrot'

//   ],

//   Howtomake: {

//     step1: 'Boil the chicken with RosDee for about 20 minutes.',

//     step2: 'Season with oyster sauce, soy sauce, sugar, and pepper.',       

//     step3: 'Add the potatoes,shiitake and carrots to the pot of soup.',     

//     step4: 'Add the tomatoes and onions,follow by MSG and cook until tender.',

//     step5: 'Serve in a bowl'

//   },

//   add\_Ingredients: \[ 'MSG', 'RosDee', 'Shiitake' ]

console.log('-------------------------------')



// Stage 5:จดวัตถุดิบจากสูตรเตรียมซื้อมาทำ

let {Ingredients,add\_Ingredients} = Mynewrecipe

Ingredients = Ingredients.concat(add\_Ingredients)

console.log(Ingredients)

// \[

//   'chicken meat', 'potatoes',

//   'onions',       'tomatoes',

//   'coriander',    'pepper',

//   'celery',       'oyster sauce',

//   'soy sauce',    'sugar',

//   'carrot',       'MSG',

//   'RosDee',       'Shiitake'

// ]

console.log("----------------------------------------------------------------------------")



// โจทย์ 2

// Stage 1:แยกข้อมูลนักเรียนว่าเป็นคนเดียวกันไหม(ชื่อซ้ำกัน)

class Students{

&#x20;   constructor(id,fn,ln){

&#x20;       this.id = id

&#x20;       this.firstname = fn

&#x20;       this.lastname = ln

&#x20;   }

}

let stu1 = new Students(1,'Supawong','Wonghirun')

let stu2 = new Students(2,'Supawong','Wongyiroun')

if(stu1.firstname === stu2.firstname){

&#x20;   if(stu1.id !== stu2.id){

&#x20;       return console.log('Those two student is not the same person')

&#x20;   }

&#x20;   else

&#x20;       return console.log('This student is the same person')

}

// Those two student is not the same person

console.log('-------------------------------')



// Stage 2 : การจัดห้องเรียนแบบใหม่ (สอนรวมสองห้อง)

let room1 = {

&#x20;   studentsinclass:\[

&#x20;       'Star','Golf','Dew','Gong'

&#x20;   ],

&#x20;   homeroomteacher:\[

&#x20;       'Teacher Sky',

&#x20;       'Teacher Namwan'

&#x20;   ]

}

let room2 = {

&#x20;   studentsinclass:\[

&#x20;       'Henry','Oak','Green','Lily'

&#x20;   ],

&#x20;   homeroomteacher:\[

&#x20;       'Teacher Pongkeaw',

&#x20;       'Teacher Timmy'

&#x20;   ]

}



let newroom = {

&#x20;   ...room1,

&#x20;   ...room2,

&#x20;   studentsinclass:\[...room1.studentsinclass,...room2.studentsinclass]

}

console.log(newroom)

// {

//   studentsinclass: \[

//     'Star',  'Golf',

//     'Dew',   'Gong',

//     'Henry', 'Oak',

//     'Green', 'Lily'

//   ],

//   homeroomteacher: \[ 'Teacher Pongkeaw', 'Teacher Timmy' ]

// }

console.log('-------------------------------')



// Stage 3:รายงานผลคะแนนของตนที่สอบผ่าน

let examresalt = {

&#x20;   firstname:"Siriganraya",

&#x20;   GPA:3.33,

&#x20;   Math:18,

&#x20;   Eng:11,

&#x20;   Thai:20,

&#x20;   Social:13,

}

let {firstname,GPA} = examresalt

console.log(firstname,GPA) // Siriganraya 3.33



// จบการสรุปแล้วนะครับ แล้วเราไว้เจอกันในการสรุปเนื้อหา class หน้านะครับ (ദ്ദി ๑>؂•̀๑)

