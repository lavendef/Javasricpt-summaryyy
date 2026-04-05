#### vol.1 Arrow function (=>)

Arrow function เป็นอีกหนึ่งวิธีในการเขียนฟังก์ชั่น ที่เปรียบเสมือนเป็นการเขียนฟังก์ชั่นแบบย่อที่สามารถใช้แทนการเขียน

ฟังก์ชั่นแบบเดิมได้ แต่ก็มีบางเหตุการณ์ที่ไม่สามารถใช้งาน Arrow function ได้ เช่น

1.ไม่สามารถใช้กับ methods this,arguments และ super ได้

2.ไม่สามารถใช้การสร้างฟังก์ชั่นแบบ constructors ได้ ถ้าใช้ new จะขึ้นเป็น typeerror

โครงสร้างของ Arrow function

let ตัวแปรที่เก็บฟังก์ชั่นนั้นไว้ = (param1,param2,paramN) => {

&#x20;    statement1;

&#x20;    statementN;

&#x20;}



// Comparing function and arrow

// Normol function ver

function a(a,b) {

&#x20;   return a+b

}

// Arrow function ver

let sum = (a,b) => {

&#x20;   return a+b

}

console.log(a(1,2)) // 3

console.log(sum(1,2)) // 3

// จะเห็นว่าใช้ได้เหมือนกันเลย



console.log('//////////////////////////////////////////////////')



#### vol.2 Function Hoisting \& Parameter Passing

ในการใช้คำสั่งฟังก์ชั่นนั้น สิ่งที่เรากรอกทั้งหมดภายในฟังก์ชั่น จะเป็นแค่การประกาศ(decleation)ฟังก์ชั่น

ไม่ใช่เป็นการใช้งานตัวฟังก์ชั่น โดยในการประกาศฟังก์ชั่นจะมีทั้งหมดอยู่สองรูปแบบคือ



1\. function declaration (เป็นการประกาศฟังก์ชั่นตรงๆ ไม่มีตัวแปรภายนอกมาเก็บค่าของฟังก์ชั่น)

function somename(name) {

&#x20;   return `So,Your name is ${name},right?`

}



2\. function expression (เป็นการประกาศฟังก์ชั่นที่มีตัวแปรภายนอกมาเก็บค่าของฟังก์ชั่น)

let introduce = function somename(name) {

&#x20;   return `So,Your name is ${name},right?`

}



โดยในการทำ Function Hoisting หรือการเรียกใช้ฟังก์ชั่นก่อนการสร้างตัวแปร

ถ้าเราประกาศฟังก์ชั่นแบบ declaration จะสามารถทำการ Hoisting ได้ ส่วนประกาศฟังก์ชั่นแบบ expression

จะไม่สามารถทำได้ เพราะตัวระบบของ javascript จะทำการตรวจดูก่อนว่า มีการประกาศตัวแปรและฟังก์ชั่นอะไรบ้าง

ก่อนการรันโค้ดในแต่ละบรรทัดก่อนเสมอ ถ้าเราใช้ function ตรงๆ ระบบก็จะเก็บข้อมูลให้เรา แต่ถ้าเก็บเป็นตัวแปร

ระบบจะเก็บแค่ค่าตัวแปร ไม่ได้เก็บตัวฟังก์ชั่นไปด้วย เลยทำให้เกิดเอร์เรอตามมา

console.log(sleeping('yes')) // Hoisting

// let go to sleeping

function sleeping(status) {

&#x20;   if(status === 'yes' || status === true)

&#x20;       return "let go to sleeping"

&#x20;   else

&#x20;       return "let do my work then :("

}



ต่อมาคือเรื่องของ Parameter Passing โดย ตัวแปรที่เป็น primitive type จะทำการส่งค่า(value)

ไปให้ฟังก์ชั่นทำการคำนวนแล้วให้ผลกลับมา ถ้าฟังก์ชั่นนั้นๆ มีผลทำให้ค่า parameter ภายในฟังก์ชั่นเปลี่ยนค่าไปเป็นอีกค่าหนึ่ง

ค่าที่เปลี่ยนแปลงนั้น จะอยู่แค่ภายในฟังก์ชั่นนั้นๆเท่านั้น ไม่ได้มีผลกับตัวแปรดั้งเดิมที่ให้ค่าไปให้ฟังก์ชั่นคำนวน

เพราะว่าค่าที่เปลี่ยนแปลง จะอยู่ภายใน function scope เลยไม่ได้มีผลกับ global scope ที่เก็บค่าดังเดิมเอาไว้ เพราะมันอยู่กันคนละ scope ตั้งแต่แรก



function something(a,b) {

&#x20;   x = a

&#x20;   y = b

&#x20;   x = x + 5

&#x20;   y = y - 1

&#x20;   console.log(x,y)

}

const g = 1,f = 2

something(g,f) // c=6 (1+5), d=1 (2-1)

console.log(g,f) // 1 2 เท่าเดิม



ส่วนตัวแปรที่เป็น object type ถ้าฟังก์ชั่นนั้นๆ มีผลทำให้ค่า parameter ภายในฟังก์ชั่นเปลี่ยนค่าไปเป็นอีกค่าหนึ่ง

ค่าที่เปลี่ยนแปลงนั้น จะเปลี่ยนแปลงทั้งค่าภายในฟังก์ชั่นและค่าของฟังก์ชั่นดังเดิม เพราะฟังก์ชั่นจะเอาค่าที่อยู่ของ object

เหล่านั้นในการนำไปคำนวน ถ้ามีค่าที่เปลี่ยนแปลงไป เนื่องจากตอนนี้ทั้งค่าดังเดิมกับฟังก์ชั่นมีที่อยู่เดียวกัน เลยเกิดการแปลงเปลี่ยนค่าทั้งสองค่า



function somearr(c, d) {

&#x20; let x = c

&#x20; let y = d

&#x20;

&#x20; x\[1] = 5

&#x20; y.id = 555

&#x20; console.log(x, y)

}

let c = \[1, 2] //array \[]

let d = { id: 1, name: 'Somchai' } //object{}

somearr(c,d) // \[ 1, 5 ] { id: 555, name: 'Somchai' }

// somearr(c\[0], d.id) // 1 1

console.log(c, d) // \[ 1, 5 ] { id: 555, name: 'Somchai' }

ส่วนถ้าเป็นการเรียกที่เฉพาะของ object ทั้งการเรียกค่าผ่านเลข index และเรียกค่าผ่าน keys

จะมีคุณสมบัติในการเปลี่ยนแปลงค่าเหมือนกับ primitive type คือ ค่าที่เปลี่ยนแปลงนั้น 

จะอยู่แค่ภายในฟังก์ชั่นนั้นๆเท่านั้น ไม่ได้มีผลกับตัวแปรดั้งเดิม



console.log('//////////////////////////////////////////////////')



// โจทย์ที่เกี่ยวกับ Arrow function,Function Hoisting และ Parameter Passing

// โจทย์ 1

// Stage 1:ข้อความต้อนรับ

CilnicOpen()

function CilnicOpen() {

&#x20;   return console.log("Welcome to my pet shop ◝ ⩊ ◜")

}

// Stage 2:สถานะของคุณหมอ

let doc\_status = function examinePet(status) {

&#x20;   if (status === 'ok' || status === 'ready' || status === true) {

&#x20;       return console.log('We now have a veterinarian available')

&#x20;   }

&#x20;   else

&#x20;       return console.log("Please wait a moment. Our veterinarian hasn't arrived yet.")

}

doc\_status('ok')



// Stage 3:ประเมินอาการ

let Critical = (symptoms) => {

&#x20;   if(symptoms === 'Rabies' || symptoms === 'Canine Parvovirus' || symptoms === 'Feline Leukemia Virus')

&#x20;       return true

&#x20;   else

&#x20;       return false

}

Critical('Flu')



// Stage 4:คำนวนปริมาณยาจากน้ำหนักตัว

// กำหนดสูตรการคำนวนดังนี้ : น้ำหนักตัวของน้องๆ(กิโลกรัม) x 2 = medeine(มิลลิกรัม)

let MedicinePerWeight = (weight) =>{

&#x20;   let Medicine = weight\*2

&#x20;   return console.log(`The recommended dosage is ${Medicine}`)

}

MedicinePerWeight(15)



// Stage 5:เปลี่ยนแปลงแฟ้มประวัติสัตว์ที่ป่วย

petstatus = {

&#x20;   nickname:'Sammy',

&#x20;   type:"Dog",

&#x20;   Illness\_status:'Sick',

&#x20;   symptoms:\[]

}

petstatus2 = {

&#x20;   nickname:'Ninny',

&#x20;   type:"Cat",

&#x20;   Illness\_status:'Sick',

&#x20;   symptoms:\[]

}



function AddDiagnosis(Olddata,newrecord,critical) {

&#x20;   Olddata.symptoms.push(newrecord)

&#x20;   if (critical === true)

&#x20;       Olddata.Illness\_status = "Critical"

&#x20;   else if (critical === false)

&#x20;       Olddata.Illness\_status = "Sick"

&#x20;   else

&#x20;       Olddata.Illness\_status = "Healthy"

}

AddDiagnosis(petstatus,'flu',"ok")

AddDiagnosis(petstatus2,'Feline Leukemia Virus',Critical('Feline Leukemia Virus'))

console.log(petstatus)

console.log(petstatus2)



// โจทย์ 2

// ค่าราคาของขนมและท็อปปิ้งของร้านที่กำหนด

manus\_price = {

&#x20;   strawberry\_shortcake:60,

&#x20;   chocolate\_Dubai:80,

&#x20;   chocolate\_Lava:45,

&#x20;   strawberry\_french\_toast:160,

&#x20;   mango\_panna\_cotta:70

}

toppings\_price = {

&#x20;   jelly:5,

&#x20;   sprinkles:"Free",

&#x20;   corn\_flakes:5,

&#x20;   fruit:10,

&#x20;   whipped\_cream:5

}

// Stage 1:หน้าจอแสดงแมนู Special

function TodaySpecial(name) {

&#x20;   let price = manus\_price\[name]

&#x20;   return console.log(`Today special dessert is ${name} price ${price}`)

}

// Stage 2:ระบบคำนวนราคาขนมและท็อปปิ้ง

let calculatePrice = (dessert\_price,topping\_price) => {

&#x20;   if(topping\_price === 'Free'){

&#x20;       return dessert\_price + 0

&#x20;   }

&#x20;   else

&#x20;       return dessert\_price + topping\_price

}



// Stage 3:ระบบแจ้งการทำขนมและการรับขนม

function makeDessert(menu,topping) {

&#x20;   let dessert\_price = manus\_price\[menu]

&#x20;   let topping\_price = toppings\_price\[topping]

&#x20;   let total = calculatePrice(dessert\_price,topping\_price)

&#x20;   TodaySpecial('chocolate\_Dubai')

&#x20;   console.log(`Curruntly making ${menu} with topping ${topping}`)

&#x20;   console.log(`Finished,Your Price will be ${total}`)

&#x20;   console.log(`Thank you :)`)

}

makeDessert("chocolate\_Dubai", "sprinkles")

makeDessert('strawberry\_french\_toast','jelly')

console.log('//////////////////////////////////////////////////')





#### vol.3 Extra Object

ทบทวน !! คุณสมบัติของ Object

1\. object เป็นชุดข้อมูลที่ไม่มีการเรียงลำดับของข้อมูล (ลำดับไม่สำคัญ) โดยจะเก็บข้อมูล

เป็นแบบคู่หัวข้อกับข้อมูล โดยข้อมูลจะเป็นค่าอะไรก็ได้ ตั้งแต่ primitive หรือฟังก์ชั่น

2\. object เป็น composite value คือ สามารถเก็บค่าในหลายๆรูปแบบตั้งแต่ primitive,function

หรือ other object เอาไว้ภายในชื่อหัวข้อของข้อมูลนั้นๆได้

3\. ถ้า Object มีหัวข้อด้านในอยู่สองหัวข้อ จะอ้างอิงข้อมูลจากหัวข้อล่าสุดเป็นหลัก

4\. Object สามารถเพิ่มและลดข้อมูลได้



// ตัวอย่าง object

const obj = {

&#x20;   firstname:'Sojin',

&#x20;   lastname:'Kim',

&#x20;   getFullname: function () {

&#x20;       return `${this.lastname} ${this.firstname}`

&#x20;   },

&#x20;   hobby:\['Playing Game','Listening to music','Dancing'],

&#x20;   addr:{

&#x20;       province:'Phitsanulok',

&#x20;       districts:'Phrom Phiram'

&#x20;   }

}

// Note!! keyword this คือการเรียกข้อมูลว่าตัวแปรตัวนี้ คือตัวแปรภายใน

// ตัวเรานะ ไม่ใช่ตัวแปรจากภายนอก มักใช้ในการอ้างอิงตัวแปรที่ต้องใช้ภายใน object





โดยวิธีการสร้าง object จะมีอยู่ทั้งหมด 4 วิธ๊คือ

##### 3.1 Object literals (Easy \& Staight-forwerd)

const ob1 = {var1:4,var2:5}



##### 3.2 Constuctor function เป็นการสร้าง object ผ่านการใช้ฟังก์ชั่นมาเป็นตัวช่วย

##### ร่วมกับการใช้ new ในการสร้าง object



function students(id,fn,ln,adress) {

&#x20;   this.id = id

&#x20;   this.firstname = fn

&#x20;   this.lastname = ln

&#x20;   this.addr = adress

}

const s1 = new students(68130500181,'Sunday','Tabayashi',{

&#x20; city:'Nan',

&#x20; postal\_code:11111

})

console.log(s1)



##### 3.3 Classes เป็นการสร้าง object ผ่าน class template ที่มีโครงสร้าง

##### คล้ายกับการใช้ function ช่วย และ class ควรใช้ร่วมกับ



class Students {

&#x20;   constructor(id,fn,ln,adress) {

&#x20;       this.id = id

&#x20;       this.firstname = fn

&#x20;       this.lastname = ln

&#x20;       this.addr = adress

&#x20;   }

}

const s2 = new Students(68130500182,'Shinhwa','Kim',{

&#x20; city:'Patani',

&#x20; postal\_code:67890

})

console.log(s2)



##### 3.4 Object.create() เป็นการสร้าง object ใหม่ผ่านการดูจาก object ต้นแบบ

##### ซึ่งจะเหมาะกับการสร้าง object เป็นจำนวนมากที่อาจจะมีโครงที่คล้ายกับต้นฉบับ

const s3 = Object.create(s2)

s3.id = 68130500183

s3.firstname = "Suyeon"

s3.lastname = 'Choi'

console.log(s3) // { id: 68130500183, firstname: 'Suyeon', lastname: 'Choi' }

console.log(s3.addr) // { city: 'Patani', postal\_code: 67890 } (มาจาก object ตัวเก่า)

console.log('//////////////////////////////////////////////////')



// โจทย์ที่เกี่ยวกับ Extra Object

// โจทย์ 1

// Stage 1:การฟังคำโฆษณาร้านซื้อหมู

let portStall = {

&#x20;   shopName:'แผงหมูสดน้องหมูหวาน',

&#x20;   hasStock:true,

&#x20;   annount:function () {

&#x20;       if(this.hasStock === true){

&#x20;           return console.log(`${this.shopName} ตอนนี้ยังมีหมูสดๆเหลืออยู่นะ เข้าเลือกดูได้เลยจร้า`)

&#x20;       }

&#x20;       else

&#x20;           return console.log(`${this.shopName} หมูตอนนี้หมดแล้วนะ ไว้มาเจอกันพรุ่งนี้นะ`)

&#x20;   }

}

portStall.annount() // แผงหมูสดน้องหมูหวาน ตอนนี้ยังมีหมูสดๆเหลืออยู่นะ เข้าเลือกดูได้เลยจร้า

console.log('...................................................')



// Stage 2:การชั่งน้ำหนักผักเพื่อคิดราคา

function Veggie(vegname,pricePerKilo) {

&#x20;   this.vegname = vegname

&#x20;   this.pricePerKilo = pricePerKilo

&#x20;   this.calculatePrice = function (kilos) {

&#x20;       return this.pricePerKilo \* kilos

&#x20;   }

}

const cabbage = new Veggie('กะหล่ำปลี',40)

const cabPrice = cabbage.calculatePrice(2)

console.log(`คุณลูกค้าซื้อ ${cabbage.vegname} 2 กิโลกรัม ต่องจ่ายเงิน ${cabPrice} บาท`)

// คุณลูกค้าซื้อ กะหล่ำปลี 2 กิโลกรัม ต่องจ่ายเงิน 80 บาท

console.log('...................................................')



// Stage 3:ระบบกระเป๋าเงิน

class Shopper {

&#x20;   constructor(name,budget) {

&#x20;       this.name = name

&#x20;       this.budget = budget

&#x20;   }

&#x20;   buyItem(itemName,cost) {

&#x20;       if(this.budget >= cost){

&#x20;           this.budget -= cost

&#x20;           console.log(`แม่บ้าน ${this.name} ซื้อ ${itemName} ไปด้วยราคา ${cost} ตอนนี้เหลือเงิน ${this.budget} บาท`)

&#x20;       }

&#x20;       else

&#x20;           console.log(`แม่บ้าน ${this.name} ซื้อ ${itemName} ไม่ได้ เพราะขาดเงินอยู่อีก ${cost - this.budget} บาท`)

&#x20;   }

}

const anutA = new Shopper('มุก',100)

anutA.buyItem('กะหล่ำปลี 2 กิโล', cabPrice) // แม่บ้าน มุก ซื้อ กะหล่ำปลี 2 กิโล ไปด้วยราคา 80 ตอนนี้เหลือเงิน 20 บาท

anutA.buyItem('ปลาทูเข่งใหญ่', 50) // แม่บ้าน มุก ซื้อ ปลาทูเข่งใหญ่ ไม่ได้ เพราะขาดเงินอยู่อีก 30 บาท

console.log('...................................................')



// Stage 4:ตาชั่งแบบไหนดี

const standardScale = {

&#x20;   extraWeight:0,

&#x20;   weight:function (kilos) {

&#x20;       return kilos + this.extraWeight

&#x20;   }

}

const fruitscale = Object.create(standardScale)

fruitscale.extraWeight = 0.2



let standardResult = standardScale.weight(2)

let fruitResult = fruitscale.weight(2)



console.log(`ชั่งด้วยตราชั่งมาตรฐานได้ ${standardResult} กิโลกรัม`) // ชั่งด้วยตราชั่งมาตรฐานได้ 2 กิโลกรัม

console.log(`ชั่งด้วยตราชั่งแม่ค้าร้านี้ได้ ${fruitResult} กิโลกรัม`) // ชั่งด้วยตราชั่งแม่ค้าร้านี้ได้ 2.2 กิโลกรัม



// จบการสรุปแล้วนะครับ แล้วเราไว้เจอกันในการสรุปเนื้อหา class หน้านะครับ •ᴥ•

