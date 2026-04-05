### vol.1 Array(Extra version)

ทบทวน Array !!

1\. Array เป็นคอลเลคชั่นของข้อมูลที่เป็นลำดับๆไป โดยมี type เป็น object

2\. แต่ละค่าข้อมูลจะเรียกว่า element และแต่ละค่าข้อมูลจะมีตำแหน่งที่เป็นตัวเลขภายใน array เรียกว่า เลข index\\

3\. Array เป็น untype เพราะแต่ละข้อมูลที่เราใส่ลงไปใน Array จะเป็น type อะไรก็ได้ ข้อมูลแต่ละตัวจะมี type ต่างกันไปเลยก็ได้ ไม่ผิด

4\. element ข้างใน Array สามารถเป็น Array ซ้อน object หรือ Array ซ้อน Array ได้ ทำให้สามารถเก็บข้อมูลได้ซับซ้อนมากขึ้น

5\. Array เป็น dynamic เพราะสามารถขยายและลดขนาดลงได้ตามการเปลี่ยนแปลงของข้อมูลภายในตัว array

6\. ทุกๆ Array จะมี property ของความยาวมาคู่กันเสมอ

7\. ถ้าเรา adsign array ให้ตัวแปรหนึ่งๆ มันจะเก็บค่าที่อยู่และ referance ของอาเรย์นั้น



##### ในการสร้าง array นั้นสามารถทำได้ 4 วิธีหลักๆคือ

##### 1\. Array literals (Most simple \& Most use)

ก็คือการสร้าง Array ผ่านการใช้คอมม่าคั่นระหว่างข้อมูลที่อยู่ภายในวงเล็บเหลี่ยมเช่น

(การตั้งตัวแปรเพื่อเก็บ Array มักจะตั้งเป็น camal case หรือนิยมตั้งเป็นพหูพจน์) 





const  somenums = \[1,2,3,4,5]

// จากที่เคยกล่าวไปว่า element ข้างใน Array สามารถเป็น Array ซ้อน object หรือ Array ซ้อน Array ได้ ซึ่งเขียนได้ดังนี้

const colors = \[

&#x20;   \["Aquamarine","Keppel","Moonstone"],

&#x20;   \["Lilac","Mulberry","Veronica"],

&#x20;   \["Black","Silver","White"]

]

const infos = \[

&#x20;   {

&#x20;    id:68130500190,

&#x20;    email:"shiori.erika@mail.com",

&#x20;    nickname:"shiori",

&#x20;    addr:{city:"Nan",district:"Pua"}

&#x20;   },

&#x20;   {

&#x20;    id:68130500191,

&#x20;    email:"sumsuk.wongy@mail.com",

&#x20;    nickname:"oat",

&#x20;    addr:{city:"Nakhon Pathom",district:"Kamphaeng Saen"}

&#x20;   }

]



โดยในการเข้าถึงข้อมูลภายใน array ที่ซ้อนกันเหล่านี้จะทำได้โดย

console.log(ตัวแปรที่เก็บอาเรย์ก้อนใหญ่เอาไว้\[ตำแหน่งของก้อนข้อมูลที่เราสนใจ]\[ตำแหน่งของแต่ละข้อมูลในก้อนข้อมูลจากวงเล็บแรก])

ส่วนแบบที่เป็น array ที่ซ้อนกับ object จะทำได้สองวิธ๊คือ

console.log(ตัวแปรที่เก็บอาเรย์ก้อนใหญ่เอาไว้\[ตำแหน่งของก้อนข้อมูลที่เราสนใจ].หัวข้อ(key)ที่เราอยากดึงข้อมูลมาภายในก้อนข้อมูลจากวงเล็บแรก)

console.log(ตัวแปรที่เก็บอาเรย์ก้อนใหญ่เอาไว้\[ตำแหน่งของก้อนข้อมูลที่เราสนใจ]\["หัวข้อ(key)ที่เราอยากดึงข้อมูลมาภายในก้อนข้อมูลจากวงเล็บแรก"])





console.log(colors\[0]\[colors\[0].length - 1]) // Moonstone (ข้อมูลสุดท้ายในอาเรย์ย่อยแรกที่อยู่ในอาเรย์ colors)

console.log(colors\[colors.length - 1]\[colors\[colors.length - 1].length - 1]) // White (ข้อมูลสุดท้ายในอาเรย์ย่อยอันท้ายที่อยู่ในอาเรย์ colors)

// colors\[colors.length - 1] = ตำแหน่งของก้อนข้อมูลที่เราสนใจ(ก้อนสุดท้าย)

// \[colors\[colors.length - 1].length - 1] = ตำแหน่งของแต่ละข้อมูลในก้อนข้อมูลจากวงเล็บแรก โดย colors\[colors.length - 1] ก็คือตำแหน่งของก้อนข้อมูลที่เราสนใจ

// ส่วน .length - 1 = ตำแหน่งของข้อมูลที่เราสนใจ

console.log(infos\[0].addr.city) // Nan (ข้อมูลภายในหัวข้อ addr ที่เราเรียกข้อมูลของหัวข้อ city ที่อยู่ภายใน addr มาแสดงผล(น่าน))

console.log(infos\[1]\['addr']\['city']) // Nakhon Pathom (ข้อมูลภายในหัวข้อ addr ที่เราเรียกข้อมูลของหัวข้อ city ที่อยู่ภายใน addr มาแสดงผล(นครปฐม))



console.log("//////////////////////////////////////////////////////")



##### 2\. ...(spread operator)

##### ...(spread operator) เป็นการนำเอาข้อมูลจากอาเรย์อื่นๆ มารวมกันภายในอาเรย์ใหม่

const arr1s = \['A','B','C']

const arr2s = \[...arr1s,'D','F','G']

console.log(arr1s) // \[ 'A', 'B', 'C' ]

console.log(arr1s.length) // 3

console.log(arr2s) // \[ 'A', 'B', 'C', 'D', 'F', 'G' ]

console.log(arr2s.length) // 6



โดย ... ใช้ในการแยก string ให้กลายเป็นอาเรย์ได้ด้วย(เพราะ string ก็ถือว่ามีเลข index ของแต่ละตัวอักษรเหมือนกัน) 

ผ่านการใช้โครงสร้างดังนี้ \[..."string"]



const msgs = \[..."Hello World"]

console.log(msgs)

// \[

//   'H', 'e', 'l', 'l',

//   'o', ' ', 'W', 'o',

//   'r', 'l', 'd'

// ]

console.log("................................")



extra note!! ในการ adsign array ให้ตัวแปรหนึ่งๆ ถ้าเราเปลี่ยนค่าของข้อมูลในตำแหน่งนั้น โดยปกติจะเปลี่ยนทั้ง array เดิม

และตัวแปรที่เก็บ array ไปด้วย เพราะถือว่าทั้ง array เดิมและตัวแปรที่เก็บ array มีที่อยู่ใน memory เดียวกันเลยเปลี่ยนทั้งสองตัวพร้อมกัน

แต่ถ้าเรา adsign array ที่เกิดจากการ ...(spread operator) จากอาเรย์อื่น ถ้าเราเปลี่ยนค่าของข้อมูลในตำแหน่งนั้นจะเปลี่นแค่ตัวแปรอย่างเดียว

array เดิม ไม่เปลี่ยน เพราะการทำ ...(spread operator) มันจะสร้างที่อยู่ของอาเรย์นั้นๆใหม่เสมอ เลยทำให้array เดิมและตัวแปรที่เก็บ array มีที่อยู่ใน memory ต่างกัน

ข้อมูลเลยไม่เปลี่ยน แต่ไปเปลี่ยนที่ตัวแปรแทน



const somenums2 = \[1,2,3,4,5]

const somenums3 = \[6,7,8,9,10]

const g = somenums2

console.log(somenums2) // \[ 1, 2, 3, 4, 5 ] ก่อนเปลี่ยน

console.log(g) // \[ 1, 2, 3, 4, 5 ] ก่อนเปลี่ยน

g\[0] = 'Hi'

console.log(g) // \[ 'Hi', 2, 3, 4, 5 ] หลังเปลี่ยน

console.log(somenums2) // \[ 'Hi', 2, 3, 4, 5 ] หลังเปลี่ยน

console.log("................................")

const k = \[...somenums3]

console.log(somenums3) // \[ 6, 7, 8, 9, 10 ] ก่อนเปลี่ยน

console.log(k) // \[ 6, 7, 8, 9, 10 ] ก่อนเปลี่ยน

k\[k.length - 1] = 'Ayyo!'

console.log(k) // \[ 6, 7, 8, 9, 'Ayyo!' ] หลังเปลี่ยน

console.log(somenums3) // \[ 6, 7, 8, 9, 10 ] หลังเปลี่ยน

console.log("//////////////////////////////////////////////////////")



##### 3\. การใช้ array constuctor

##### array constuctor มีโครงสร้างดังนี้ new Array() โดยถ้าภายในวงเล็บไม่ได้ใส่อะไรเลย ก็จะสร้าง emtry array ขึ้นมา 1 อาเรย์

let as = new Array()

console.log(as) // \[] (emtry array)

console.log(as.length) // 0 (emtry array)



แต่ถ้าภายในวงเล็บนั้นเราใส่ตัวเลขลงไป มันจะสร้าง Array ที่มีขนาดความยาวตามเลขที่เราใส่

let bs = new Array(5)

console.log(bs) // \[ <5 empty items> ]

console.log(bs.length) // 5



แต่ถ้าภายในวงเล็บนั้นเราใส่ข้อมูลที่เป็นทั้งตัวเลข string boolean และอื่นๆลงไป พร้อมคั่นด้วยคอมม่า มันจะสร้าง Array ที่เก็บข้อมูลเป็นตำแหน่งตามที่เราพิมพ์

let cs = new Array(1,2,3,'ปลาฉลาม','ขึ้นบก',4,5,6,'จิ้งจก','ยัดใส้')

console.log(cs) // \[ 1, 2, 3, 'ปลาฉลาม', 'ขึ้นบก', 4, 5, 6, 'จิ้งจก', 'ยัดใส้' ]

console.log(cs.length) // 10 (มีควาามยาวตามที่เราพิมพ์ลงไปเลย)



โดย array constuctor จะไม่เหมาะกับการสร้างอาเรย์ที่มีข้อมูลแค่เลขตัวเดียว เพราะการกรอกตัวเลขแค่ตัวเดียวมันจะตีความว่า

Array นี้มีขนาดความยาวเท่าไรแทน ไม่ใช่แค่เลขตัวนั้นตัวเดียว





console.log("//////////////////////////////////////////////////////")



##### 4\. Array.of() และ Array.from() เป็นอีก 1 ในวิธีการสร้าง array ที่ใช้ในการแก้ปัญหาจาก array constuctor โดยทั้งสองตัวนี้มีความแต่กต่างกันดังนี้



Array.of() มีหลักการทำงานคล้าย array constuctor ที่ช่วยในการแก้ปัญหาของ array constuctor ที่ไม่สามารถสร้างอาเรย์ที่มีข้อมูลแค่เลขตัวเดียวได้

โดยภายในวงเล็บเราต้องใส่ข้อมูลที่เป็นทั้งตัวเลข string boolean และอื่นๆลงไป พร้อมคั่นด้วยคอมม่าเอง มันก็จะสร้าง Array ที่เก็บข้อมูลเป็นตำแหน่งตามที่เราพิมพ์ได้

let ds = Array.of(5)

console.log(ds) // \[ 5 ]

console.log(ds.length) // 1

let es = Array.of(11,22,33,44)

console.log(es) // \[ 11, 22, 33, 44 ]

console.log(es.length) // 4

console.log("................................")



ส่วน Array.from() จะเป็นการสร้างอาเรย์จาก การนำเอาข้อมูลจากอาเรย์หนึ่งๆ มาสร้างเป็นอาเรย์ใหม่ขึ้นมาอีกหนึ่งชุด หรือเรียกได้ว่า

เป็นการก็อปปี้อาเรย์นั้นเอง โดย Array.from() มีการทำงานที่คล้าย ...(spread operator) มากเพราะเป็นการก็อปปี้อาเรย์ที่ทำให้อาเรย์เดิม

ไม่เสียหายเมื่อแก้ไขตัวที่ถูกก้อปปี้ไป และยังสามารถสร้างอาเรย์จาก string ได้เหมือนกันอีกด้วย

let fs = Array.from(es)

console.log(fs) // \[ 11, 22, 33, 44 ]

console.log(fs.length) // 4

fs\[fs.length] = 55

console.log(fs) // \[ 11, 22, 33, 44, 55 ]

console.log(fs.length) // 5

console.log(es) // \[ 11, 22, 33, 44 ]

console.log(es.length) // 4



let gs = Array.from("ILYTD")

console.log(gs) // \[ 'I', 'L', 'Y', 'T', 'D' ]

console.log(gs.length) // 5

console.log("//////////////////////////////////////////////////////")



โดยในการอ่านค่าและการแทนค่าของข้อมูลในแต่ละ index นั้นสามารถทำได้โดยใช้ \[] แล้วใส่เลข index ที่เราสนในลงไปโดยมีข้อสังเกตคือ

ถ้าหากเราอยากให้ตัวแปรหนึ่งๆเก็บข็อมูลของเลข index นั้นๆ เราก็มักจะเขียนโครงสร้างประมาณนี้

// จาก \[ 11, 22, 33, 44, 55 ]

let inflop = fs\[1] // โดยในที่นี้ \[] จะทำหน้าที่ read หรืออ่านข้อมูลใน index นั้ัน แล้วค่อยส่งข้อมูลกลับมาหาเรา

แต่ถ้าเราอยากเปลี่ยนค่าของข้อมูลใน index หนึ่งๆ เราก็มักจะเขียนโครงสร้างประมาณนี้

// จาก \[ 11, 22, 33, 44, 55 ]

fs\[fs.length] = 66 // โดยในที่นี้ \[] จะทำหน้าที่ write หรือเขียนข้อมูลใน index นั้ันใหม่ตามที่เราเขียนลงไป

console.log("//////////////////////////////////////////////////////")



เราสามารถลบค่าภายในอาเรย์ได้ผ่านการใช่คำสั่ง delete ได้ แต่การใช้วิธีนี้มีข้อเสียคือ มันจะไม่เลื่อนค่าของเลข index ให้เมื่อเราลบข้อมูลออกไปแล้ว

ก็คือค่าข้อมูลของเลข index นั้นโดนลบไป แต่ที่ในตำแหน่ง index นั้นก็ยังอยู่ ไม่ได้โดนเลื่อนขึ้นมา และค่าของ length ก็ไม่เปลี่ยนด้วย (เหมือนมีที่ว่างอยู่ 1 ที่แต่ทำไรไม่ได้ เลื่อนคนข้างๆมานั่งที่นี้ก็ไมได้)

// จาก \[ 11, 22, 33, 44, 55 ]

delete fs\[2]

console.log(fs) // \[ 11, 22, <1 empty item>, 44, 55, 66 ]

console.log(fs.length) // 6

ในการลบค่าภายในอาเรย์ แนะนำให้ทำผ่านการใช่ array method ดีกว่า เพราะช่วยกลอบข้อเสียของการใช้ delete ได้ในแต่ละ method

เช่น pop(),shift() เป็นต้น

console.log("//////////////////////////////////////////////////////")



#### vol. 1.5 Destructuring assignment

#### การทำ Destructuring assignment เป็นนิพจน์ในการแยกค่าของข้อมูลภายในแต่ละเลข index ให้ไปเก็บไว้ภายในตัวแปรที่แตกต่างกันได้ในครั้งเดียว

(object ก็สามารถทำได้เหมือนกัน) โดยมีโครงสร้าง(ง่ายๆ)ดังนี้

\[ตัวแปรที่อยากเก็บข้อมูลของตำแหน่ง index นั้นๆ,ตัวแปรอีกตัวที่อยากเก็บข้อมูลของตำแหน่ง index] = array ที่อยากจะให้ตัวแปรเก็บข้อมูล



// จาก cs = new Array(1,2,3,'ปลาฉลาม','ขึ้นบก',4,5,6,'จิ้งจก','ยัดใส้')

const \[num1,num2,num3] = cs

console.log(num1,num2,num3) // 1 2 3

// ซึ่งมาจากสมาชิกของ index สามตัวแรกของ cs (1,2,3)



โดยในการ Destructuring ถ้าหากเราไม่อยากเก็บค่าไหนไว้ ก็แค่ไม่ต้องใส่ตัวแปรลงไปในตำแหน่ง index นั้น

ให้คั่นด้วยคอมม่าไปเลย แล้วพอเจอข้อมูลที่เราต้องการจะให้เก็บใส่ตัวแปรไว้ ก็แค่พิมพ์ตัวแปรลงไปในตำแหน่ง index นั้น เช่น

// จาก cs = new Array(1,2,3,'ปลาฉลาม','ขึ้นบก',4,5,6,'จิ้งจก','ยัดใส้') แล้วอยากจะเก็บข้อมูลแค่ข้อความเท่านั้น จะสามารถเขียนได้ดังนี้

const \[,,,word1,word2,,,,word3,word4] = cs

console.log(word1,word2,word3,word4) // ปลาฉลาม ขึ้นบก จิ้งจก ยัดใส้ 

// โดยโครงสร้างนี้มีรายละเอียดดังนี้ \[(1),(2),(3),word1,word2,(4),(5),(6),word3,word4] โดย() คือข้อมูลที่เราละเอาไว้ ไม่มีตัวแปรไหนมาเก็บข้อมูลภายใน index เหล่านั้นเลย

// ส่วน word1,word2,word3,word4 คือตัวแปรที่เราเอาไว้เก็บค่าจากอาเรย์ cs ในตำแหน่งของ index ที่มีข้อความเป็นข้อมูล



ต่อมาคือถ้าหากว่าเราอยากเก็บข้อมูลที่เหลือจากอาเรย์เอาไว้ภายในตัวแปรเดียว เราก็สามารถทำได้ผ่านการทำ rest operater (...) โดยมีโครงสร้างดังนี้

const arrrname1 = \['Sunday','Maroon','Aqua','Yorong','Yuta','Omake']

const \[nam1,nam2,nam3,...nam4] = arrrname1

console.log(nam1,nam2,nam3,nam4) // มีรายละเอียดคือ Sunday(nam1) Maroon(nam2) Aqua(nam3) ส่วน \[ 'Yorong', 'Yuta', 'Omake' ] เกิดจากการทำ rest operater (...) เก็ยเอาไว้ในตัวแปร nam4



extra note!! ... สามารถมีได้สองความหมายคือ

1\. ...(spread operator) = 1 array --> n element (copy array)

2\. rest operater (...) = n element --> 1 array (multiple value parameter)



extra note!! ในการวนลูปของข้อมูลภายในอาเรย์นั้น ถ้าหากว่าเราอยากรู้ว่าค่าของเลข index นั้นมีข้อมูลเป็นอะไร สามารถใช่ medthod entries() ร่วมด้วยได้

โดย entries() จะทำการสร้างอาเรย์ใหม่ที่ข้อมูลในแต่ละ index จะประกอบไปด้วย เลข index ในตำแหน่งนั้น + ข้อมูลใน เลข index นั้นว่าคืออะไร

const arrrname2 = \['Doro','Miso','Luming','Yomi','Jose','Latte']

const entriess = arrrname2.entries()

for (const element of entriess) {

&#x20;   console.log(element)

}

// จะได้ผลเป็นดังนี้

// \[ 0, 'Doro' ]

// \[ 1, 'Miso' ]

// \[ 2, 'Luming' ]

// \[ 3, 'Yomi' ]

// \[ 4, 'Jose' ]

// \[ 5, 'Latte' ]



console.log("--------------------------------------------------------------------")

// เข้าสู่ช่วงเวลาของโจทย์กันแล้ว มาเริ่มจากโจทย์ของอาจารย์กันก่อนดีกว่า !! 

// การบ้าน 1

function combineArrays(arr1,arr2) {

&#x20;   return Array.of(...arr1,...arr2)

&#x20;   // Array.of() = สร้างอาเรย์ใหม่ตามข้อมูลที่เรากรอก

&#x20;   // ...arr1 \& ...arr2 = ก็อปปี้อาเรย์ทั้งสองมา เพื่อให้ Array.of() สร้างเป็นอาเรย์ใหม่ที่รวมข้อมูลของทั้งสองอาเรย์นั้นเอง

}

console.log(combineArrays(\[1,2],\[3,4])) // \[ 1, 2, 3, 4 ]

console.log(combineArrays(\['a','b'],\['c','d'])) // \[ 'a', 'b', 'c', 'd' ]

console.log(combineArrays(\[],\[1,2,3])) // \[ 1, 2, 3 ]

console.log("................................")





// การบ้าน 2

function getStringLengths(arr) {

&#x20;   result = \[]

&#x20;   // ไว็ใช้ในการเก็บค่าความยาวของแต่ละคำภายในอาเรย์นั้นๆ

&#x20;   for (let i = 0; i < arr.length; i++) {

&#x20;       // วนดูข้อมูลภายในอาเรย์ที่เราสนใจ

&#x20;       const current\_word = arr\[i];

&#x20;       // กำหมดให้มีตัวแปรเก็บคำในตำแหน่ง index นั้นๆไว้

&#x20;       result.push(current\_word.length)

&#x20;       // ทำการเพิ่มความยาวของคำในตำแหน่ง index นั้นๆ ลงไปในอาเรย์ result ที่เราเตรียมไว้ 

&#x20;   }

&#x20;   return result

}

console.log(getStringLengths(\['apple','banana','kiwi','orange'])) // \[ 5, 6, 4, 6 ]

console.log(getStringLengths(\['hello','world'])) // \[ 5, 5 ]

console.log(getStringLengths(\['ChatGPT','AI'])) // \[ 7, 2 ]

console.log("................................")



// การบ้าน 3

function increment(num,step) {

&#x20;   if(typeof step === 'undefined'){

&#x20;       step = 1

&#x20;       // ถ้าไม่ได้ให้ step การเลื่อนมา ก็กำหมดให้มีค่าเริ่มต้นเป็น 1

&#x20;   }

&#x20;   

&#x20;   if(typeof num === 'number'){

&#x20;           return num + step

&#x20;           // ถ้า num เป็นตัวเลขธรรมดา ก็ให้แสดงผลเป็น

&#x20;           // การเลื่อนไปตาม step ที่เรากำหนด 

&#x20;   }

&#x20;   else if(Array.isArray(num) === true){

&#x20;       const resalt = \[]

&#x20;       for (const info of num) {

&#x20;           // ถ้า num เป็นอาเรย์ ก็ให้ทำการวนลูปเช็คทุกๆเลขในอาเรย์

&#x20;           // แล้วเลื่อนแต่ละเลขในอาเรย์ตาม step ที่เรากำหนด

&#x20;           resalt.push(info+step)

&#x20;           // แล้วค่อยเพิ่มผลการเลื่อนกลับไปสร้างเป็นอาเรย์ใหม่เพื่อแสดงผล

&#x20;       }

&#x20;       return resalt

&#x20;   }

}

console.log(increment(5)) // 6

console.log(increment(5,2)) // 7

console.log(increment(0,-1)) // -1

console.log(increment(\[1,2,3])) // \[ 2, 3, 4 ]

console.log(increment(\[1,2,3],2)) // \[ 3, 4, 5 ]

console.log(increment(\[0,-1],-1)) // \[ -1, -2 ]

console.log("................................")



// การบ้าน 4

function findMax(arrayofNumber) {

&#x20;   if(arrayofNumber.length === 0){

&#x20;       return undefined

&#x20;   }

&#x20;   else{

&#x20;       return Math.max(...arrayofNumber)

&#x20;   }

}

console.log(findMax(\[3,7,2])) // 7

console.log(findMax(\[10,5,8,12])) // 12

console.log(findMax(\[-5,-2,-9])) // -2

console.log(findMax(\[])) // undefined

console.log("--------------------------------------------------------------------")





// การบ้านในส่วนของอาเรย์ก็ได้จบลงไปแล้ว ต่อมาจะเป็นโจทย์เพิ่มเติมนะครับ

// โจทย์เพิ่มเติม 1

// Senario !! : ภายในยิมจะมีล็อกเกอร์ให้ใช้งานอยู่ทั่วไปอยู่แล้ว เมื่อเราออกกำลังกายเสร็จ

// เราก็ต้องเอาของในล็อกเกอร์ออก แล้วทางฝั่ง data ก็จะลบชื่อเราออก ให้คนอื่นมาใช้ลือกเกอร์นั้นได้ต่อ

// โดยต้องทำให้ข้อมูลของล็อกเกอร์อื่นๆ ไม่เลื่อนตามข้อมูลที่ลบออก (เพราะเป็นคนละล็อกเกอร์กัน) จะทำไงดี

function checkoutLocker(locker\_data,delete\_number) {

&#x20;   for (let i = 0; i < locker\_data.length; i++) {

&#x20;       // วนดูข้อมูลของเลข index ภายในอาเรย์

&#x20;       if(i === delete\_number){

&#x20;           // ถ้าค่า i = เลข index ภายในอาเรย์ที่อยากลบข้อมูลออก

&#x20;           delete locker\_data\[i]

&#x20;           // ก็ลบข้อมูลในตำแหน่งนั้นออก

&#x20;           console.log(`At this moment locker number ${delete\_number} is empty`)

&#x20;           return locker\_data

&#x20;       }

&#x20;       

&#x20;   }

&#x20;   

}

console.log(checkoutLocker(\['John', 'Jane', 'Alice', 'Bob'],1))

console.log(checkoutLocker(\['Chaerin', 'Hana', 'Yumin', 'Alex','Sharon','Lily'],4))

console.log("................................")



// โจทย์เพิ่มเติม 2

// Senario !! : เราต้องการเขียนโค้ดแสดงผลการแข่งขันของงาน Hackathon โดยให้แสดงผลแค่อันดับ 1-3 ส่วนทีมอื่นๆ

// จะให้แสดงผลเป็นเพียงผู้เข้าร่วมกิจกรรม จะทำยังไงดี (เรามีผลการแข่งขันเป็นอาเรย์อยู่ในมือของเราอยู่แล้ว เราอยากให้คนอื่นรู้ผลว่าเป็นอย่างไรบ้าง)

function PlaceAnnouncement(place\_result) {

&#x20;   const \[first,second,third,...Participants] = place\_result

&#x20;   // ใช้วิธีการ Destructuring assignment เก็บค่าอันดับที่ 1-3 แล้วใช้ rest operater (...) เก็บข้อมูลรางวัลชมเชยที่เหลือ

&#x20;   return {

&#x20;       ชนะเลิศ:first,

&#x20;       รองชนะเลิศอันดับ\_1:second,

&#x20;       รองชนะเลิศอันดับ\_2:third,

&#x20;       ชมเชย:Participants

&#x20;   }

}

console.log(PlaceAnnouncement(\['บะหมี่หมูแดง','พากันล่ม','notsodev','งงงวยในดงโค้ด','แตงกวาทอด','ILJS']))

console.log(PlaceAnnouncement(\['Coding Master','ณ เมืองปาย','เป็ดที่บางมด','ครั่งรักJS','แกงไตปลา','ข้าวผัดไข่ข้น']))

console.log("................................")



// โจทย์เพิ่มเติม 3

// Senario !! : ระบบสุ่มคนได้รางวัลในงานวัด

function winner(partaker) {

&#x20;   let ticket = partaker.length

&#x20;   // กำหนดค่าตัวแปรว่าข้อมูลภายในอาเรย์มีขนาดเท่าไร (มาสุ่มรางวัลกี่คน)

&#x20;   let i1 = Math.floor(Math.random()\*ticket)

&#x20;   // ให้สุ่มตำแหน่งเลข index ที่ได้รางวัลที่หนึ่ง (ใครได้รางวัลที่หนึ่ง)

&#x20;   let i2 = Math.floor(Math.random()\*ticket)

&#x20;   while (i2 === i1) {

&#x20;       i2 = Math.floor(Math.random()\*ticket)

&#x20;   }

&#x20;   // ให้สุ่มตำแหน่งเลข index ที่ได้รางวัลที่สอง ถ้าสุ่มได้ตำแหน่งซ้ำกันกับรางวัลที่หนึ่ง ก็สุ่มใหม่ (ใครได้รางวัลที่สอง)

&#x20;   let secreti = Math.floor(Math.random()\*ticket)

&#x20;   while (secreti === i1 || secreti === i2) {

&#x20;       secreti = Math.floor(Math.random()\*ticket)

&#x20;   }

&#x20;   // ให้สุ่มตำแหน่งเลข index ที่ได้รางวัลพิเศษ ถ้าสุ่มได้ตำแหน่งซ้ำกันกับรางวัลที่หนึ่งและสอง ก็สุ่มใหม่ (ใครได้รางวัลพิเศษ)

&#x20;   return{

&#x20;       รางวัลที่หนึ่ง:partaker\[i1],

&#x20;       รางวัลที่สอง:partaker\[i2],

&#x20;       รางวัลพิเศษ:partaker\[secreti]

&#x20;   }

}

console.log(winner(\['หนึ่ง','ไข่ดาว','เกียวโต','โอ็ต','อะตอม','โลมา','ทานตะวัน']))



// โจทย์เพิ่มเติม 4

// Senario !! : ระบบสุ่มเลข OTP เพื่อใช้ในการยีนยันตัวตนในเว็บไชต์หนึ่งๆ โดยกำหนดให้รหัสต้องเกิดจาก

// การสุ่มตัวเลขตั้งแต่ 1-9 ตามความยาวที่กำหมด

function generateOTP(length) {

&#x20;   let otpcode = \[]

&#x20;   for (let j = 0; j < length; j++) {

&#x20;       let randomnum = Math.floor(Math.random()\*10)

&#x20;       otpcode.push(randomnum)

&#x20;   }

&#x20;   return otpcode

}

console.log(generateOTP(4))

console.log(generateOTP(8))



// ในส่วนของฟังก์ชั่นจะเริ่มตอนไหนไม่รู้ แต่ภายในสัปดาห์นั้แน่นอน !! ᕙ(  •̀ ᗜ •́  )ᕗ



console.log("--------------------------------------------------------------------")

// vol.2 Basic function

// ลักษณะของฟังก์ชั่น !!

// 1. ฟังก์ชั่นเป็นก้อนของโค้ดก้อนหนึ่งที่มีการระบุค่าเพียงแค่หนึ่งครั้ง แต่สามารถนำไปใช้งานหรือแสดงผลได้หลายๆครั้ง

// 2. ฟังก์ชั่นเป็น parameterized คือ ฟังกชั่นสามารถกำหนดค่าของตัวแปรเป็น parameter ชึ่งตัวแปรชนิดนี้จะทำงานแค่ข้างในตัวของฟังก์ชั่นเท่านั้น

// ไม่สามารถนำมาเรียกใช้ด้านนอกได้

// 3. ฟังก์ชั่นเป็น object และสามารถ assign ตัวของฟังก์ชั่นให้ไปเก็บไว้ที่ตัวแปรหนึ่งๆได้ แล้วทำให้ตัวแปรนั้นมีคุณสมบัติเหมือนฟังก์ชั่นนั้นได้ทุกอย่าง

// 4. ฟังก์ชั่นเป็น first-class citizens เพราะสามารถ assign ไปให้ตัวแปรหนึ่งๆได้,สามารถส่งต่อเป็น argument ให้ฟังก์ชั่นอื่นๆได้ และ

// สามารถให้ค่าของฟังก์ชั่นที่เป็นค่าที่มาจากอีกฟังก์ชั่นหนึ่งได้



// 4.1 assign ไปให้ตัวแปรหนึ่งๆได้

function sayhello(name) {

&#x20;   return `Howdy ${name},how are you today?`

}

let greeting = sayhello

console.log(`function sayhello result : ${sayhello("Sainam")}`) // Howdy Sainam,how are you today? 

console.log(`value greeting result : ${greeting("Luka")}`) // Howdy Luka,how are you today?

// จะเห็นว่าได้ผลลัพธ์เหมือนกัน และตัวแปร greeting ก็ทำงานเป็นเหมือนฟังก์ชั่น sayhello อีกตัวหนึ่งด้วย

// เพราะในการ assign ไปให้ตัวแปรนั้น ตัวแปรจะเก็บที่อยู่และ referance ที่มาจากฟังก์ชั่นนั้น เลยทำให้ตัวแปรนั้นสามารถใช้งานเป็นฟังก์ชั่นนั้นอีกอันหนึ่งได้



// 4.2 สามารถส่งต่อเป็น argument ให้ฟังก์ชั่นอื่นๆได้

function msg(text) {

&#x20;   return greeting(text)

}

function msg2(text) {

&#x20;   return `You say ${text}`

}

console.log(`function msg result : ${msg('Moron')}`) // Howdy Moron,how are you today?

console.log(`function msg2 result : ${msg2('Moron')}`) // You say Moron

// อีกหนึ่งข้อสังเกตคือ เราสามารถตั้ง parameter เดียวกันในคนละฟังก์ชั่นได้ เพราะ parameter แต่ละตัวจะทำงานแค่ภายในฟังก์ชั่นนั้นๆเท่านั้น

// ไม่มีผลกับตัวแปรด้านนอกที่ต้องห้ามซ้ำกัน



// 4.3 สามารถให้ค่าของฟังก์ชั่นที่เป็นค่าที่มาจากอีกฟังก์ชั่นหนึ่งได้

function sayGoodbye() {

&#x20;   return "Ba bye :>"

}

function echosome() {

&#x20;   return sayGoodbye

&#x20;   // echosome ดึงผลที่ได้มาจาก sayGoodbye

}

let dosome = echosome()

// dosome ดึงผลที่ได้มาจาก echosome ที่ได้รับส่งทอดมาจาก sayGoodbye อีกที่หนึ่ง

console.log(dosome()) // Ba bye :>

console.log("--------------------------------------------------------------------")



// เข้าสู่ช่วงเวลาของโจทย์กันแล้ว มาเริ่มจากโจทย์ของอาจารย์กันก่อนดีกว่า !! 

// การบ้าน 5

function calculateTotalPages(item,itemPerPage) {

&#x20;   if(itemPerPage <= 0){

&#x20;       throw new Error('Items per page must be greater than zero')

&#x20;   }

&#x20;   else{

&#x20;       if(item === 0)

&#x20;           return 0;

&#x20;       return Math.ceil(item / itemPerPage)

&#x20;   }

}

console.log(calculateTotalPages(10,3)) // 4

console.log(calculateTotalPages(25,5)) // 5

console.log(calculateTotalPages(0,5)) // 0

console.log(calculateTotalPages(10,10)) // 1

// console.log(calculateTotalPages(10,0)) // Error: Items per page must be greater than zero

console.log("--------------------------------------------------------------------")





// เข้าสู่ช่วงของโจทย์เพิ่มเติมแล้ววว ไปกันเลย ₍₍⚞(˶˃ ꒳ ˂˶)⚟⁾⁾

// โจทย์เพิ่มเติม 1

// Senario !! : ระบบการคำนวนค่าขนส่งจากน้ำหนักของพัสดุและระยะทางการขนส่ง

// โดยจะมีทั้งหมด 2 เรทราคาคือ ส่งทั่วไปและส่งด่วนพิเศษ โดยกำหนดให้ค่าบริการเริ่มต้น = 30 บาท

// ค่าน้ำหนักคิดกิโลละ 15 บาท และระยะทางการส่งคิดกิโลละ 5 บาท เมื่อเกิน 10 กิโลเมตรแรก และค่าเลือกเป็นส่งด่วนให้คิดราคาเพิ่มอีก 50%

function calculateShipingCost(weight,distance,Express) {

&#x20;   if (weight <= 0 || distance <= 0) {

&#x20;       throw new Error("Both weight and distance must be greater than zero")

&#x20;   }

&#x20;   else{

&#x20;       let allcost = 30

&#x20;       // กำหนดค่าขนส่งเริ่มต้น

&#x20;       let weightcost = Math.ceil(weight)

&#x20;       // กำหนดให้น้ำหนักทำการปัดเศษขึ้นเพื่อให้คิดได้ง่ายขึ้น

&#x20;       allcost = allcost + (weightcost\*15)

&#x20;       // ค่าน้ำหนักคิดกิโลละ 15 บาท

&#x20;       if (distance > 10) {

&#x20;           // ถ้าระยะทางการส่งเกิน 10 กิโลเมตร

&#x20;           let extra\_km = distance - 10

&#x20;           // ก็ให้คิดกิโลละ 5 บาท ตามระยะทางที่เกินมา

&#x20;           allcost = allcost + (extra\_km \* 5)

&#x20;       }

&#x20;       

&#x20;       if (Express === 'Yes' || Express === true) {

&#x20;           // ส่งด่วนคิดเพิ่ม 50% จากราคาเดิม (เพิ่ม 1.5 เท่าจากเดิม)

&#x20;           allcost = allcost \* 1.5

&#x20;       }

&#x20;       

&#x20;       return allcost 

&#x20;   }

}

console.log(calculateShipingCost(1.2, 5, false)); // 60

// 30 + 2\[1.2 ปัดเศษขึ้น](15)

console.log(calculateShipingCost(3, 7, 'Yes')); // 112.5

// (30 + 3(15))\*1.5



// โจทย์เพิ่มเติม 2

// Senario !! : ระบบรับออเดอร์สำหรับร้านกาแฟ โดยลูกค้าสามารถเลือกเครื่องดื่มหลัก 

// เปลี่ยนชนิดของนม เลือกเพิ่มวิปครีมได้ และสั่งแบบร้อนหรือเย็น โดยมีรายละเอียดการสั่งดังนี้

// 1. ถ้าลูกค้าสั่งเอสเพรสโซร้อน จะไม่สามารถสั่งนมกับวิปครีมได้

// 2. ถ้าลูกค้าสั่ง เฟร้บเป้ จะบังคับให้ใส่วิปครีมและเป็นแบบเย็นเท่านั้น

// 3. ถ้าลูกค้าสั่งอเมริกาโน่ จะไม่สามารถสั่งนมกับวิปครีมได้



function prepareDrink(coffeebase,milktype,want\_cream,tem) {

&#x20;   if (coffeebase === 'espresso') {

&#x20;       if (tem === 'hot') 

&#x20;           return "Here is your hot Espresso,We can't let you order milk"

&#x20;       

&#x20;       else{

&#x20;           want\_cream = false

&#x20;       }

&#x20;   }

&#x20;   // พิจารณาเงื่อนไขแรก ถ้าลูกค้าสั่งเอสเพรสโซร้อน จะไม่สามารถสั่งนมกับวิปครีมได้ แต่ถ้าเป็น เอสเพรสโซเย็น

&#x20;   // จะสั่งได้แค่นม วิปครีมสั่งไม่ได้

&#x20;   else if(coffeebase === 'frappe'){

&#x20;       tem = 'cold'

&#x20;       want\_cream = true

&#x20;   // พิจารณาเงื่อนไขสอง เฟร้บเป้ จะบังคับให้ใส่วิปครีมและเป็นแบบเย็นเท่านั้น

&#x20;   }

&#x20;   else if(coffeebase === 'americano'){

&#x20;       milktype = 'none'

&#x20;       want\_cream = false

&#x20;   // พิจารณาเงื่อนไขสาม ถ้าลูกค้าสั่งอเมริกาโน่ จะไม่สามารถสั่งนมกับวิปครีมได้

&#x20;   }





&#x20;   let ordersum = 'Your '

&#x20;   if(tem = 'cold'){

&#x20;       ordersum = ordersum.concat('',tem);

&#x20;       // ถ้าเป็นแบบเย็นให้เพิ่มคำว่าเย็นลงไป

&#x20;   }   

&#x20;   else{

&#x20;       ordersum = ordersum.concat('',tem);

&#x20;       // ถ้าเป็นแบบร้อนให้เพิ่มคำว่าร้อนลงไป

&#x20;   }



&#x20;   ordersum = ordersum.concat(' ',`${coffeebase}`)

&#x20;   // เพิ่มคำที่เป็นชนิดกาแฟลงไป



&#x20;   if(milktype === 'milk' || milktype === 'cow'){

&#x20;       ordersum = ordersum.concat(' ','with regular milk');

&#x20;       // ถ้าเลือกเป็นนมวัวหรือนมธรรมดา ก็ให้เพิ่มคำเป็นสั่งนมธรรมดา

&#x20;   }

&#x20;   else{

&#x20;       ordersum = ordersum.concat(' ',`with ${milktype} milk`);

&#x20;       // แต่ถ้าเลือกเป็นนมอื่นๆ ก็ให้เพิ่มคำเป็นสั่งนมนั้นๆแทน

&#x20;   }





&#x20;   if (want\_cream === true) {

&#x20;       ordersum = ordersum.concat(' ','and whipped cream on top');

&#x20;       // ถ้าสั่งให้ใว่วิปครีม ก็จะเพิ่มคำว่าสั่งวิปครีมลงไป ส่วนถ้าไม่สั่งก็จะละไว้

&#x20;   }

&#x20;   return ordersum

}

console.log(prepareDrink('mocha', 'milk', true, 'cold'));

// Your cold mocha with regular milk and whipped cream on top

console.log(prepareDrink('americano', 'oat', true, 'cold'));

// Your cold americano with none milk

console.log(prepareDrink('espresso', 'almond', true, 'cold'));

// Your cold espresso with almond milk

console.log(prepareDrink('espresso', 'almond', true, 'hot'));

// Here is your hot Espresso,We can't let you order milk 

console.log(prepareDrink('frappe', 'cow', false, 'hot'))

// Your cold frappe with regular milk and whipped cream on top

