### vol.1 Operators Pencedence

// Operators Pencedence คือ ลำดับการทำงานหรือลำดับในการวิเคราะห์ของแต่ละ Operators โดย Operators ที่มีลำดับการทำงานที่สูงกว่า

// ก็มักจะต้องมีการแสดงผลก่อน Operators ตัวอื่นๆ ที่มีลำดับการทำงานที่ต่ำกว่าลงไป (ตัวไหนมีความสำคัญในการเปลี่ยนแปลงค่าของตัวแปรมากกว่า

// ส่วนใหญ่มักจะเป็นตัวที่มีความสำคัญมากกว่าอยู่แล้ว พวกนี้เลยต้องมีการทำงานก่อนเป็นพวกแรก)

// โดยส่วนใหญ่แล้ว Operators ที่มีค่า Pencedence ในการทำงานที่สูงก็มักจะเป็น Operators ประเภท Unary operation ที่ต้องการตัวดำเนินการแค่ตัวเดียว

// โดยมักจะนำเอามาใช้ในการ เปลี่ยนแปลงค่า/type การเพิ่มหรือลดค่า หรือแม้แต่การตรวจสอบ type ของตัวแปรด้วย

// โดยภายในคลาสนี้ ตัวดำเนินการที่เป็น Unary operation เท่าที่จะได้ใช่ในโอกาสต่อๆไปด้วย จะมีดังนี้ (เรียงค่าความ Pencedence จากเว็บ developer.mozilla.org)



// Pencedence ลำดับที่ 1 Grouping หรือการใส่ () แน่นอนอยู่แล้วตาม common sense ทางคณิตศาสตร์ว่า ถ้านิพจน์ตรงจุดไหนมีวงเล็บอยู่ เราก็ต้องไปพิจารณา

// ค่าด้านในวงเล็บก่อนเสมอ แล้วค่อยมาพิจารณาตัวด้านนอกวงเล็บ โดยจะไม่มีการเริ่มทำจากทิศทางไหนก่อน จะดูจากความลึกของแต่ละวงเล็บเท่านั้น

console.log(1+2+3+(4+(5+6))) // 21 ซึ่งเกิดจาก

// 5+6 = 11 (วงเล็บชั้นในสุด) --> 4+11 = 15 (วงเล็บชั้นกลาง) --> 1+2+3+15 = 21 (วงเล็บชั้นนอกสุด(วงเล็บของ console.log))

console.log(((9\*10)-22)-34+56) // 90 ซึ่งเกิดจาก

// 9\*10 = 90 (วงเล็บชั้นในสุด) --> 90-22 = 68 (วงเล็บชั้นกลาง) --> 68-34+56 = 90 (วงเล็บชั้นนอกสุด(วงเล็บของ console.log))

console.log("......................................")



// Pencedence ลำดับที่ 2 Member access,function call,Optional chaining โดย Operators เหล่านี้ มักจะเกี่ยวข้องกับการเรียกค่าของตัวแปรจำพวก

// array \& object ที่จะมีค่าของตัวแปรย่อยๆ ภายในตัวแปร ที่เมื่อเราอยากจะใช้งาน เราก็ต้องเรียกค่า(Member access)เหล่านั้นออกมาใช้ เลยทำให้มีค่า Pencedence ที่สูง

// ในเคสของฟังก์ชั่น Operators ในขั้นนี้จะเป็นการเรียกในงานฟังก์ชั่นต่างๆ เลยทำให้มีค่า Pencedence ที่สูงเช่นกัน สุดท้าย ในส่วนของ Optional chaining ที่มีค่า Pencedence ที่สูง  

// เพราะ Optional chaining มักใช้ในการเช็คค่าของหัวข้อของตัวแปรย่อยๆภายใน array \& object ว่าหัวข้อนั้นๆไม่มีค่าหรือเปล่า (จะเน้นใน vol หน้านะครับ)

// และอีกอย่าง ในที่นี้ Pencedence ลำดับนี้ ก็รวมถึง method ของ type ต่างๆด้วยเช่นกัน

let somelist = {id:"P001" ,codename:"topaz", age:null}

let somelist\_2 = \["salmon",'Burgur','sandwith']

function test(n1,n2) {

&nbsp;   return console.log(n1+n2)

}

console.log(somelist.codename) // topaz โดย Member access จะมีการทำจากซ้ายไปขวาคือ

// จากตัวแปร somelist --> เราจะเรียกค่าจากหัวข้อไหน(.) --> หัวข้อที่ต้องการดึงค่า(codename) --> ไปดูว่าค่าในหัวข้อนั้นคืออะไร(somelist.codename)แล้วนำมาแสดงผล

console.log(somelist\_2\[2]) // sandwith โดย Computed member access (การเรียกค่าแบบ array) จะไม่มีการเริ่มทำจากทิศทางไหนก่อน

// จากค่าตำแหน่ง(index)ที่ต้องการเรียกค่า(\[2]) --> เราอยากเรียกค่าตำแหน่งนี้ที่ตัวแปรอะไร(somelist\_2) --> ไปดูว่าค่าในตำแหน่งนั้นคืออะไร(somelist\_2\[2])แล้วนำมาแสดงผล

test(1,2) // 3 โดย function call จะไม่มีการเริ่มทำจากทิศทางไหนก่อน (ลำดับการทำภายในฟังก์ชั่นขึ้นอยู่กับคนเขียนโค้ด)

console.log(somelist?.age) // null โดย Optional chaining จะมีการทำจากซ้ายไปขวาคือ

// จากตัวแปร somelist --> เราจะเรียกเช็คค่าของหัวข้อไหน(?.) --> หัวข้อที่ต้องการเช็คค่า(codename) --> ไปดูว่าค่าในหัวข้อนั้นคืออะไร(somelist?.codename)แล้วนำมาแสดงผล

console.log("......................................")



// Pencedence ลำดับที่ 3 Postfix เป็นการเพิ่มค่าหรือลดค่าตัวแปรลดลงทีละหนึ่ง โดย Postfix มีหลักการทำงานคือ 

// "จะส่งค่าเดิมของตัวแปรนั้นไปทำงาน/ประมวลผลก่อน เมื่อทำอะไรทุกอย่างเสร็จ ก็จะเพิ่ม/ลดตัวแปรนั้นอีก 1"

let x = 25

let y = x++

console.log(y) // 25 เพราะ y รับค่าเดิมจาก x มา (x = 25) แปลงให้กลายเป็นค่าของตัวเอง (y = 25)

console.log(x) // 26 เพราะหลังจากที่ y รับค่าจาก x เสร็จแล้ว x ก็เพิ่มค่าตัวเองขึ้นอีกหนึ่ง เลยได้ 26

// let z = x--

// console.log(z) // 25 เพราะ z รับค่าเดิมจาก x มา (x = 25) แปลงให้กลายเป็นค่าของตัวเอง (z = 25)

// console.log(x) // 24 เพราะหลังจากที่ z รับค่าจาก x เสร็จแล้ว x ก็ลดค่าตัวเองขึ้นอีกหนึ่ง เลยได้ 24



// Pencedence ลำดับที่ 4 Prefix,typeof,logical not (!) โดย Prefix เป็นการเพิ่มค่าหรือลดค่าตัวแปรลดลงทีละหนึ่งเหมือนกันกับ Postfix

// แต่มีหลักการทำงานคือ "จะเพิ่ม/ลดค่าของตัวแปรนั้นอีก 1 ก่อนไปทำงาน/ประมวลผลกับสิ่งอื่นๆภายหลังจากการเพิ่ม/ลดค่าของตัวแปร"

let p = 67

let q = ++p

// let r = --p

console.log(p) // 68 เพราะ p แต่เดิม = 67 ได้ทำการเพิ่มค่าขึ้นอีก 1 เป็น 68

console.log(q) // 68 เพราะจากค่า p ที่เพิ่มขึ้นอีก 1 เมื่อ q รับค่าจาก p มา เลยทำให้ q = 68 ไปด้วย

// console.log(p) // 66 เพราะ p แต่เดิม = 67 ได้ทำการเพิ่มค่าขึ้นอีก 1 เป็น 68

// console.log(r) // 66 เพราะจากค่า p ที่ลดลงอีก 1 เมื่อ r รับค่าจาก p มา เลยทำให้ r = 66 ไปด้วย

// ต่อมาในส่วนของ typeof ซึ่งเป็นการเช็คค่าของตัวแปรที่เคยได้เรียนรู้ไปในสัปดาห์ที่แล้วๆ เลยทำให้ค่า Pencedence ค่อนข้างสูง 

// เพราะเป็นการตรวจสอบค่าของตัวแปรเดียว

console.log(typeof p) // number

console.log(typeof q) // number

// ต่อมาในลำดับ Pencedence เดียวกันในขั้นนี้คือ logical not ซึ่งเป็นการเปลี่ยนแปลงค่าความจริงของประพจน์ เลยทำให้ค่า Pencedence ค่อนข้างสูง

// เพราะเป็นการเปลี่ยนแปลงของตัวแปรเดียว

console.log(!(true) || false)

// false เพราะ ได้มีการแปลง !(true) เป็น false ก่อนที่จะไปเทียบค่ากับค่า false ทางด้านขวาอีกรอบหนึ่ง

console.log(!(false) \&\& true)

// true เพราะ ได้มีการแปลง !(false) เป็น true ก่อนที่จะไปเทียบค่ากับค่า true ทางด้านขวาอีกรอบหนึ่ง

console.log("......................................")



// จบในส่วนของ Unary operation แล้ว ต่อมาในช่วงของ Pencedence ช่วงต่อไป จะเป็น operation ในส่วนของ Binary operation

// ที่ต้องการตัวดำเนินการสองตัวในการดำเนินงาน โดยมักจะนำเอามาใช้ในการ คำนวนทางคณิตศาสตร์และการเปรียบเทียบเชิงตรรกะ

// โดยภายในคลาสนี้ ตัวดำเนินการที่เป็น Binary operation เท่าที่จะได้ใช่ในโอกาสต่อๆไปด้วย จะมีดังนี้ (เรียงค่าความ Pencedence จากเว็บ developer.mozilla.org)



// Pencedence ลำดับที่ 5 Exponentiation (\*\*) เป็นการดำเนินการทางคณิตศาสตร์ที่ใช้ในการยกกำลัง ซึ่งจากลำดับการคำนวนทางคณิตศาสตร์

// ที่ทุกคนนะจะเข้าใจกันคือ ทำในวงเล็บก่อน แล้วต่อไปก็ค่อยทำการยกกำลังก่อนไปการคำนวนแบบอื่นๆ โดยการยกกำลังจะมีการทำจากขวาไปซ้ายคือ

console.log(1+2\*\*3+25) // 34 ซึ่งเกิดจาก

// 2\*\*3 = 8 --> 1+8 = 9 --> 9+25 = 34

// โดยการทำจากขวาไปซ้ายคือ ดูค่าด้านขวาก่อน(3)-->เช็คค่าด้านซ้าย(2)-->เอาเลขด้านขวาเป็นเลขยกกำลังของตัวซ้าย(2\*\*3)

console.log("......................................")





// Pencedence ลำดับที่ 6 Multiplicative (\*,/,%) เป็นการดำเนินการทางคณิตศาสตร์ที่ใช้ในการคูณหาร ซึ่งจากลำดับการคำนวนทางคณิตศาสตร์

// ที่ทุกคนนะจะเข้าใจกันคือ เมื่อพิจารณาวงเล็บและเลยยกกำลังแล้ว ลำดับในการพิจารณาขั้นต่อไปตือการคูณและการหารนั้นเอง 

// โดยจะดูลำดับการคำนวนจากซ้ายไปขวาเสมอ 

console.log(9\*5\*\*2\*(45/5)/4%5) // 1.25 ซึ่งเกิดจาก

// 45/5 = 9 (คิดในวงเล็บก่อน) --> 5\*\*2 = 25 (ต่อด้วยเลขยกกำลัง(r --> l)) --> 9 \* 25 = 225 (ตัวคูณทางซ้ายสุด) --> 225 \* 9 = 2025 ----

// ---> 2025 / 4 = 506.25 --> 506.25 % 5 = 101 เศษ 1.25 (ตัวโมดูโล่ทางขวาสุด เป็นตัวสุดท้ายที่ได้คำนวน และให้ผลลัพธ์ออกมา)

console.log("......................................")



// Pencedence ลำดับที่ 7 Additive (+,-) เป็นการดำเนินการทางคณิตศาสตร์ที่ใช้ในการบวกลบ ซึ่งจากลำดับการคำนวนทางคณิตศาสตร์

// ที่ทุกคนนะจะเข้าใจกันคือ เมื่อพิจารณาวงเล็บ,เลยยกกำลังและการคูรกับการหารแล้ว ลำดับในการพิจารณาขั้นต่อไปตือการบวกเละการลบนั้นเอง 

// โดยจะดูลำดับการคำนวนจากซ้ายไปขวาเสมอ 

console.log(1+3\*7/6+(22-13+44)-4\*\*2\*5%3) // 55.5 ซึ่งเกิดจาก

// (22-13) = 9 (ตัวลบ(ด้านในวงเล็บ)ด้านซ้ายสุด) --> (9+44) = 53 (ตัวบวก(ด้านในวงเล็บ) = ผลลัพธ์ของค่าในวงเล็บ)\[จบการคิดภายในวงเล็บ] --> 4\*\*2 = 16 (ต่อด้วยเลขยกกำลัง(r --> l)) ---

// ---> 3\*7 = 21 --> 21/6 = 3.5 --> 16\*5 = 80 --> 80%3 = 2 \[จบช่วงการคิดคูณ/หารจากซ้ายไปขวา] -----

// ---> 1+3.5 = 4.5 --> 4.5+35 = 57.5 --> 57.5-2 = 55.5 \[จบช่วงการคิดบวก/ลบจากซ้ายไปขวา]

console.log("......................................")



// Pencedence ลำดับที่ 8 relational (<,>,<=,>=) เป็นการดำเนินการในการเปรียบเทียบค่าว่ามากกว่าหรือน้อยกว่ากัน หรืออาจจะเท่ากันในช่วงที่กำหนดก็ได้

// โดยมีการดำเนินการจากซ้ายไปขวา

console.log(25>67) // false เพราะค่าด้านซ้าย(25)น้อยกว่าค่าด้านขวา(67) ไม่ได้มากกว่า เลยเป็นเท็จไป

console.log(25<67) // true เพราะค่าด้านซ้าย(25)น้อยกว่าค่าด้านขวา(67)จริง

console.log(25 <= 34) // true เพราะค่าด้านซ้าย(25)น้อยกว่าค่าด้านขวา(34)จริง

console.log(34 >= 34) // true เพราะค่าด้านซ้าย(34)เท่ากับค่าด้านขวา(34)จริง (ถ้าสัญลักษณ์แบบนี้ >=,<= จะเช็คทั้งว่าน้อยกว่าหรือมากกว่ากันไหม หรือมีค่าเท่ากันหรือเปล่า)

console.log(25>25) // false เพราะค่าด้านซ้าย(25)เท่ากับค่าด้านขวา(25) ไม่ได้มากกว่า เลยเป็นเท็จไป

console.log("......................................")



// Pencedence ลำดับที่ 9 equality (==,===,!=,!==) เป็นการดำเนินการในการเปรียบเทียบค่าว่า มีค่าที่เหมือนกันหรือไม่ โดยมีความแตกต่างดังนี้

// == เป็นการเปรียบเทียบค่า โดยที่ไม่สนว่า type จะต่างกันหรือไม่ ถ้ามีค่าเท่ากันทั้งซ้ายและขวา ก็จะให้ผลเป็นจริงออกมา 

console.log(67 == '67') // true เพราะมีค่า 67 เท่ากันทั้งสองฝั่ง แม้ type จะไม่ตรงกัน



// != เป็นการเปรียบเทียบค่า โดยที่ไม่สนว่า type จะต่างกันหรือไม่ ถ้ามีค่าไม่เท่ากันทั้งซ้ายและขวา ก็จะให้ผลเป็นจริงออกมา

console.log(12 != '12') // false เพราะมีค่า 12 เท่ากันทั้งสองฝั่ง แม้ type จะไม่ตรงกัน



// === เป็นการเปรียบเทียบค่า ที่จะสนใจทั้งค่าที่ต้องเท่ากันและ type ต้องเหมือนกันด้วย ถ้ามีค่าเท่ากันและ type เหมือนกันทั้งซ้ายและขวา ก็จะให้ผลเป็นจริงออกมา (Arjan pick ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧)

console.log(67 === '67') // false เพราะถึงแม้จะมีค่าเท่ากันทั้งสองฝั่ง(67) แต่ทั้งสองฝั่งมี type ไม่ตรงกัน (num กับ str) เลยเป็นเท็จ



// !== เป็นการเปรียบเทียบค่า ที่เมื่อมีค่าเท่ากันและ type เหมือนกันทั้งซ้ายและขวา จะให้ผลเป็นเท็จทันที แต่ถ้ามีอันใดอัหนึ่งไม่เหมือนกัน ถึงจะให้ค่าจริงออกมา (Arjan pick ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧)

console.log(12 !== '12') // true เพราะถึงแม้จะมีค่าเท่ากันทั้งสองฝั่ง(67) แต่ทั้งสองฝั่งมี type ไม่ตรงกัน เลยได้ค่าจริงออกมา

console.log("......................................")



// (Pencedence ในช่วงต่อไปจะเป็นสิ่งที่เรียกว่า Short-circuit evaluation ซึ่งก็คือ ถ้าพบค่าที่สามารถคาดเดาผลลัพธ์สุดท้ายได้

// ก็จะพิจารณาแค่ค่านั้น แล้วไม่พิจารณาค่าถัดไปต่อ เพราะระบบรู้ว่า ถ้ามีค่าแบบนี้ ก็จะได้คำตอบเลย ไม่ต้องคิดอีกตัวหนึ่ง)



// Pencedence ลำดับที่ 10 logical AND (\&\&) เป็นการเปรียบเทียบค่าทางตรรกศาสตร์ ซึ่งจากลำดับการพิจารณาตัวดำเนินการ

// ที่ทุกคนนะจะเข้าใจกันคือ จะเริ่มทำจาก not(แปลงค่าความจริง) แล้วพิจารณา and นั้นเอง

console.log(true \&\& true) // true เพราะ true\&true = true

console.log(true \&\& false) // false เพราะ true\&false = false

console.log(false \&\& true) // false เพราะ ถ้าค่าด้านหน้าเป็น false เมื่อใช้ตัวดำเนินการ and ยังไงก็ได้เท็จ เลยไม่ดูตัวข้างหลัง

console.log(false \&\& false) // false เพราะ ถ้าค่าด้านหน้าเป็น false เมื่อใช้ตัวดำเนินการ and ยังไงก็ได้เท็จ เลยไม่ดูตัวข้างหลัง



// Pencedence ลำดับที่ 11 logical OR (||) ,nullish coalescing (??)

// logical OR (||) เป็นการเปรียบเทียบค่าทางตรรกศาสตร์ ซึ่งจากลำดับการพิจารณาตัวดำเนินการที่ทุกคนนะจะเข้าใจกันคือ 

// หลังจากพิจารณา not และ and แล้ว ถึงค่ามาทำการดำเนินการแบบ or นั้นเอง

console.log(true || true) // true ถ้าค่าด้านหน้าเป็น true เมื่อใช้ตัวดำเนินการ or ยังไงก็ได้จริง เลยไม่ดูตัวข้างหลัง

console.log(true || false) // true ถ้าค่าด้านหน้าเป็น true เมื่อใช้ตัวดำเนินการ or ยังไงก็ได้จริง เลยไม่ดูตัวข้างหลัง

console.log(false || true) // true เพราะ false || true = true

console.log(false || false) // false เพราะ false || false = false



// ต่อมาในลำดับ Pencedence เดียวกันในขั้นนี้คือ nullish coalescing (??) ซึ่งมีหน้าที่ในการเช็คว่า ถ้าค่าทางด้านซ้ายมี type

// null หรือ undefined ก็จะแสดงผลค่าทางด้านขวามาให้ แต่ถ้าด้านซ้านไม่ใช่ทั้ง null และ undefined ก็จะแสดงผลค่าด้านซ้ายตามเดิม (จะเน้นใน vol หน้านะครับ)

let repo\_color = null

let color = 'pink'

let color\_2 = 'green'

console.log(repo\_color ?? color) // pink เพราะ repo\_color(ค่าด้านซ้าย)เป็น null เลยแสดงผลค่า color(ค่าด้านขวา) เป็น pink แทน

console.log(color\_2 ?? repo\_color) // green เพราะระบบอยู่แล้วว่า color\_2 มีค่าอยู่แล้ว เลยไม่ต้องพิจารณาค่าด้านขวาต่อ เลยแสดงผลเป็น green เลย

console.log("......................................")



// \[จบ Pencedence ช่วง Short-circuit evaluation]

// Pencedence ลำดับที่ 12 Assignment (=,+=,-=,\*=,/=,%=) เป็นการกำหนดค่าของตัวแปร โดยแต่ละตัวมีรายละเอียด ดังนี้

// = เป็นการกำหนดค่าตัวแปรธรรมดาทั่วไป

a = 14

// += เป็นการกำหนดค่าตัวแปรที่มีรูปแบบคือ a += 5 มีค่าเท่ากับ a(ค่าใหม่) = a(ค่าเก่า) + 5

console.log(a += 7) // a = a + 7

// -= เป็นการกำหนดค่าตัวแปรที่มีรูปแบบคือ a -= 5 มีค่าเท่ากับ a(ค่าใหม่) = a(ค่าเก่า) - 5

console.log(a -= 7) // a = a - 7

// \*= เป็นการกำหนดค่าตัวแปรที่มีรูปแบบคือ a \*= 5 มีค่าเท่ากับ a(ค่าใหม่) = a(ค่าเก่า) \* 5

console.log(a \*= 7) // a = a \* 7

// /= เป็นการกำหนดค่าตัวแปรที่มีรูปแบบคือ a /= 5 มีค่าเท่ากับ a(ค่าใหม่) = a(ค่าเก่า) / 5

console.log(a /= 7) // a = a / 7

// %= เป็นการกำหนดค่าตัวแปรที่มีรูปแบบคือ a %= 5 มีค่าเท่ากับ a(ค่าใหม่) = a(ค่าเก่า) % 5

console.log(a %= 7) // a = a % 7

// โดยการกระทำทั้งหมดภายใน Pencedence ลำดับนี้ จะมีลำดับการทำจากขวา(+-\*/% ค่าเก่า)ไปซ้าย(ไปแทนที่ค่าในตัวแปรใหม่)

console.log("......................................")



// Pencedence ลำดับที่ 13 Conditional (ternary) operator (?:),Arrow(x => y) เป็นการเช็คเงื่อนไขที่เรากำหนดว่าถ้าจริง จะแสดงค่าหนึ่ง ถ้าเท็จจะแสดงอีกค่าหนึ่ง (จะเน้นใน vol หน้านะครับ)

// และ Conditional operator เป็น operator แบบเดียวที่เป็น Ternary operation ที่ต้องการตัวดำเนินการสามตัวในการดำเนินงาน

// และมีลำดับการทำจากขวาไปซ้าย

let angry\_bar = 70

let emotion = angry\_bar >= 60 ? 'Angry ヽ(≧Д≦)ノ':'Happy (⍢)'

console.log(emotion) // Angry ヽ(≧Д≦)ノ เพราะเมื่อเช็คค่า angry\_bar แล้วมันมากกว่า 60 จริง เลยแสดงผลค่าที่เป็นจริงออกมา



// ต่อมาในลำดับ Pencedence เดียวกันในขั้นนี้คือ Arrow(x => y) ซึ่งใช่ในการเขียนฟังก์ชั่นแบบย่อ โดยมีลำดับการทำจากขวาไปซ้าย

let result = s => s+25

console.log(result(5)) // 30 เพราะเกิดจาก 5+25

console.log("......................................")

// Pencedence ลำดับที่ 14 Comma (x,y) เป็นการกำหนดค่าของตัวแปรหลายๆค่าพร้อมกัน โดยจะแสดงผลค่าที่อยู่หลังสุดเท่านั้น โดยมีลำดับการทำจากซ้ายไปขวา

let comma = (25+25,50+50)

console.log(comma) // 100 เพราะแสดงผลค่าท้ายสุด (50+50) และไม่เอาค่าแรกไปใช้





###### // โจทย์ที่เกี่ยวกับเรื่อง Pencedence

// โจทย์ข้อ 1

let midterm = 67

let final = 55

let mark = null

let Cheat\_or\_not = false

mark = mark ?? 0

// โค้ดนี้จากลำดับ Pencedence จะทำในส่วนของ nullish coalescing (??) ก่อน --> แทนค่าใหม่ไปให้ตัวแปร mark 

// (mark ในตอนแรก = null เมื่อใช้ ?? ทำให้ mark ?? 0 ให้ค่าทางด้านขวาออกมา(0) --> ไปแทนค่าใหม่นั้นให้ mark ตัวใหม่)  

let overall = midterm \* 0.4 + final \* 0.6 + mark // 59.8 ซึ่งเกิดจาก

// midterm \* 0.4 กับ final \* 0.6 จะโดนคิดก่อน (คูณ/หาร) แล้วค่อย (midterm \* 0.4 + final \* 0.6) แล้วสุดท้ายก็บวกกับค่า mark 

let checkcheat = Cheat\_or\_not 

? "F"

// โค้ดนี้จากลำดับ Pencedence จะเช็คค่าความจริงของ Cheat\_or\_not ก่อน ถ้าจริงจะแสดงผล "F" ถ้าไม่จริงก็จะได้ไปเช็คคะแนนอีกรอบหนึ่งว่าผ่านหรือไม่ผ่าน

&nbsp;   : overall >= 50 

&nbsp;   ? "Pass" 

&nbsp;   : "Fail"

console.log(overall,checkcheat)

console.log("//////////////////////////////////////////")

// โจทย์ข้อ 2 

let book\_borrowed = 3

let Late\_return\_days = 15

let fine\_for\_return\_late = 8

let member\_lavel = 67

let suspended = false

let check\_status = 'CHECKING'

let loadScore = book\_borrowed \* 3 + Late\_return\_days \* fine\_for\_return\_late - member\_lavel--

// โค้ดนี้จากลำดับ Pencedence จะได้ลำดับการทำงานว่า Postfix(เอาค่าคะแนนสมาชิกอันเก่ามาคิดก่อน (พอคิดเสร็จจะลดค่าสมาชิกลง 1))

// --> book\_borrowed \* 3 --> Late\_return\_days \* fine\_for\_return\_late (คูณ/หาร l-->r) --> (book\_borrowed \* 3 + Late\_return\_days \* fine\_for\_return\_late)

// --> - member\_lavel --> member\_lavel-- = member\_lavel - 1

if(suspended){

&nbsp;   check\_status = 'BLOCKED'

&nbsp;   console.log(check\_status)

&nbsp;   console.log("You got ban from borrowing book in this library")

}

else{

&nbsp;   if(loadScore <= 20 \&\& Late\_return\_days < 7){

&nbsp;       // โค้ดนี้จากลำดับ Pencedence จะได้ลำดับการทำงานว่า เช็คค่าความจริงของ loadScore <= 20 --> เช็คค่าความจริงของ Late\_return\_days < 7

&nbsp;       // --> เอาสองค่าความจริงมาเทียบกับตัวดำเนินการ and

&nbsp;       check\_status = 'CAN BORROW'

&nbsp;       console.log(check\_status)

&nbsp;       console.log("You can borrowing book in this library")

&nbsp;       console.log("But please return on time this time")

&nbsp;   }

&nbsp;   else if(loadScore > 20 \&\& Late\_return\_days >= 7){

&nbsp;       check\_status = 'FAIL TO BORROW'

&nbsp;       console.log(check\_status)

&nbsp;       console.log("You can't borrowing book in this library")

&nbsp;       console.log("You need to do library activity to borrowing again")

&nbsp;   }

&nbsp;   else{

&nbsp;       check\_status = 'NEED TO CHECK'

&nbsp;       console.log("You need to check your log more,so please wait :)")

&nbsp;   }

}

console.log("----------------------------------------------------------------------------")



### vol.2 Optional chaining(?.),nullish coalescing(??),Conditional operator(?:)

// Optional chaining เป็น Short-circuit evaluation ที่ใช้ในการแก้ไขปัญหาเรื่องของ typeerror เมื่อเจอ type

// null || undefined มักใช้ในการเช็คค่าของหัวข้อของตัวแปรย่อยๆภายใน array \& object ว่าหัวข้อนั้นๆไม่มีค่าหรือเปล่า

// ถ้าหลากว่าถ้าค่าทางด้านซ้ายมี type เป็น null || undefined Optional chaining จะถือว่าข้อมูลทั้งก้อนนั้นเป็น

// undefined ทั้งหมด โดยจะไม่คิดตัวแปรทางขวาต่อ แล้วจะไม่ฟ้อง error ทำให้ code ยังไปต่อได้

// optional chaining (?.) solves the following problems

// 1. null or undefined variable call object properties

// 2. null or undefined calls array members

let somelist\_3

let somelist\_0 = null

console.log(somelist\_3?.id) // undefined

console.log(somelist\_0?.\[0]) // undefined

// console.log(somelist\_3.id) // Cannot read properties of undefined (reading 'id')

// console.log(somelist\_0\[0]) // Cannot read properties of undefined (reading \[0])

// จะเห็นว่าเมื่อไม่มีการใช้ Optional chaining(?.) เพื่อเช็คในการเข้าถึงข้อมูลย่อยของแต่ละตัวแปรที่เป็น null || undefined

// จะแจ้งเออเรอร์ว่า ไม่สามารถอ่านหัวข้อย่อยของตัวแปร undefined นี้ได้ และทำให้โค้ดทำงานต่อไม่ได้ถ้าเรายังไม่แก้

console.log("......................................")



// ต่อมาคือเรื่องของ nullish coalescing ซึ่งเป็น Short-circuit evaluation ที่ใช้ในการเช็คว่า ถ้าค่าทางซ้ายเป็น type

// null || undefined แล้วทาง nullish coalescing ก็จะแสดงผลค่าทางด้านขวาออกมาแทน แต่ถ้าค่าทางด้านซ้ายไม่ใช่ type

// null || undefined ก็จะกลับไปใช่ค่าทางซ้ายตามเดิม

let naam = "Monday"

let a\_ge

let place = null

console.log(a\_ge) // undefined

console.log(place) // null

a\_ge = a\_ge ?? 26 // a\_ge(now) = 26 เพราะ a\_ge(เก่า) เป็น undefined เลยใช้ค่าด้านขวา(26)แสดงผลไปแทน

place = place ?? "Korat" // place(now) = Korat พราะ place(เก่า) เป็น null เลยใช้ค่าด้านขวา(Korat)แสดงผลไปแทน

naam = naam ?? "Sunday" // naam = "Monday" เหมือนเดิม เพราะ naam(เก่า) มีค่าอยู่แล้ว

console.log(naam,a\_ge,place) // Monday 26 Korat



// โดย nullish coalescing มักจะใช่ร่วมกับ Optional chaining โดยเมื่อ Optional chaining เช็คแล้วว่าค่าๆนั้นเป็นค่า type

// null || undefined ก็สามารถให้แทนค่านั้นเป็นค่าที่เราต้องการได้ผ่านการใช้ nullish coalescing นั้นเอง

let user

user = user?.name ?? "Sainam"

console.log(user) // Sainam



// สุดท้ายคือ Conditional operator(?:) ซึ่งเป็นการเช็คเงื่อนไขที่เรากำหนดว่าถ้าจริง จะแสดงค่าหนึ่ง(ค่าด้านซ้าย) ถ้าเท็จจะแสดงอีกค่าหนึ่ง(ค่าทางด้านขวา)

// เหมือนกับการเขียน if-else statement แบบย่อ ที่สามารถเขียนได้ภายในบรรทัดเดียว

let numnum = 46

let numby = 150

let tivia = numnum >= 50 ? "This number is more than 50":"This number is less than 50"

console.log(tivia) // This number is less than 50 เพราะ 46 < 50 เลยแสดงผลค่าเท็จ(ค่าทางด้านขวา)ออกมา

// และ Conditional operator สามารถซ้อนในกันและกันได้

tivia = numby <= 200 ? (numby >= 100 ? "This number is more than 100":"This number is less than 100") : "This number is more than 200"

console.log(tivia) // This number is more than 100 เพราะ case#1 คือ 150 <= 200 จริง เลยต้องมาพิจารณาค่าทางด้านซ้ายต่อ

// ต่อมาใน case#2 ที่ต้องเช็คต่อจาก case#1 ว่า มากกว่า 100 หรือไม่ ซึ่งก็ใช่อีกเพราะ 150 >= 100 เลยทำให้ผลสุดท้ายแสดงผลเป็น This number is more than 100 ออกมานั้นเอง





###### โจทย์ที่เกี่ยวกับเรื่อง Optional chaining(?.),nullish coalescing(??),Conditional operator(?:)

// โจทย์ 1

let users = {name:"Yomi",profile:{score:67}}

let namee = users?.name ?? "User" // ตรวจเช็คว่าใน object users ในหัวข้อ name เป็น type null || undefined หรือเปล่า ถ้าเป็นก็จะให้หัวข้อ name เก็บข้อมูลเป็น User ไป

let score = users?.profile?.score ?? 0 // ตรวจเช็คว่าใน object users ในหัวข้อ profile แล้วเช็คหัวข้อย่อยภายใน profile(score)อีกทีว่าเป็น type null || undefined หรือเปล่า ถ้าเป็นก็จะให้หัวข้อ score เก็บข้อมูลเป็น 0 ไป

let statuss = users?.profile?.score === null ? "Didn't test yet":

// ตรวจเช็คว่าใน object users ในหัวข้อ profile แล้วเช็คหัวข้อย่อยภายใน profile(score)อีกทีว่าเป็น type null ไหม ถ้าเป็นก็จะให้ตัวแปร statuss แสดงผลเป็น "Didn't test yet" แต่ถ้าไม่ใช่ก็จะเช็คเงื่อนไขต่อไป

score >= 50 ? "Pass the test":"Not pass the test"

// ตรวจสอบว่าในตัวแปร score ที่เก็บข้อมูลมาจาก object user ให้หัวข้อ profile(score) ว่ามากว่าหรือเท่ากับ 50 หรือไม่ ถ้ามากกว่าจะผ่านสอบนี้ ถ้าไม่ก็ไม่ผ่านการสอบนี้

let summary = `This student ${namee} has score ${score} and they ${statuss}`

console.log(summary)

console.log("//////////////////////////////////////////")





// โจทย์ 2

let movie\_name = {name1:"Gone with the wind",name2:"หลานม่า",name3:"สงครามส่งด่วน"}

let movie\_seat = "A101"

let movie\_price = 190

let status\_confirm = true



let what\_i\_want = movie\_name?.name3 ?? "Did't choose to watch anything yet"

// ตรวจเช็คว่าหัวข้อของ object movie\_name เป็น type null || undefined หรือเปล่า ถ้าเป็นก็จะให้ตัวแปร what\_i\_want รับค่ามาว่ายังไม่ได้เลือกว่าจะดูอะไรดี

let seatinfo = movie\_seat ?? "Did't choose the seat yet"

// ตรวจเช็คว่าตัวแปร movie\_seat เป็น type null || undefined หรือเปล่า ถ้าเป็นก็จะให้ตัวแปร seatinfo รับค่ามาว่ายังไม่ได้เลือกที่นั่งในโรง

let cost = movie\_price ?? 0

// ตรวจเช็คว่าตัวแปร movie\_price เป็น type null || undefined หรือเปล่า ถ้าเป็นก็จะให้ตัวแปร cost รับค่ามาว่า 0 บาท(ยังไม่ได้จ่ายตัง)

let confirm = movie\_name === null ? "Didn't reserve a movie yet": status\_confirm ? "Confirm":"Not Confirm"

// ตรวจเช็คว่าobject movie\_name เป็น type null หรือเปล่า ถ้าเป็นก็จะให้แสดงผลว่ายังไม่ได้จองหนังเรื่องนี้ 

// แต่ถ้าไม่ก็จะพิจารณาต่อว่า ตัวแปร status\_confirm เป็น true หรือ false ถ้าเป็น true = ยืนยันการจอง ส่วนถ้าเป็น false = ยังไม่ได้ยืนยันการจอง

let resalt = `Tonight I want to watch ${what\_i\_want} at seat ${seatinfo} with cost ${cost} Bath (${confirm})`

console.log(resalt)

console.log("----------------------------------------------------------------------------")



### vol.3 Math funtion

// Math เป็น Build-in object ที่รวมค่าคงที่และวิธีการคำนวนต่างๆ ตามหลักการทางคณิตศาสตร์เอาไว้ โดยจะที่ไม่ต้องมีการผูก

// หรือยึดติดกับ object ใดๆเลย สามารถเรียกใช้ใด้ทุกเมื่อ

// โดย Math สามารถแบ่งตามการแสดงผลและวิธีการใช้งานอยู่ 2 รูบแบบหลักๆ คือ

// 1.Math ที่ใช้แทนค่าคงที่ต่างๆในหลักของคณิตศาสตร์

console.log(Math.PI) // 3.141592653589793 (ค่าพาย)

console.log(Math.SQRT2) // 1.4142135623730951 (รูทสอง)

console.log(Math.E) // 2.718281828459045 (ค่า e (เลขของออยเลอร์))

console.log(Math.LN2) // 0.6931471805599453 (ค่า log ฐานสอง)

console.log("......................................")

// 2. Math ที่เป็น Static methods (รวมวิธีการคำนวนในรูปแบบต่างๆทางคณิตศาสตร์)

// Math.random() เป็น Static methods ที่สุ่มเลขทศนิยมออกมาเป็นค่าที่อยู่ระหว่าง 0 ถึง 1 (เป็น pseudo-random number)

console.log(Math.random()) // 0.49638501238985255 (แสดงผลรอบแรก)

// 0.07648397808214191 (แสดงผลรอบที่สอง)



// Math.ceil() เป็น Static methods ที่ใช้ในการปัดเศษหรือการปัดเลขทศนิยมให้กลายเป็นเลขจำนวนเต็ม โดย Math.ceil()

// จะเป็นการปัดเศษขึ้นจากเลขทศนิยมนั้นๆ (เลขที่น้อยที่สุด ที่มันมากกว่าหรือเท่ากับเลขที่เราใส่ลงไปใน Math.ceil())

console.log(Math.ceil(0.5)) // 1

console.log(Math.ceil(7.67)) // 8

console.log(Math.ceil(10)) // 10

console.log(Math.ceil(5.001)) // 6

console.log(Math.ceil(-4.99)) // -4



// Math.floor() เป็น Static methods ที่ใช้ในการปัดเศษหรือการปัดเลขทศนิยมให้กลายเป็นเลขจำนวนเต็ม โดย Math.floor()

// จะเป็นการปัดเศษลงจากเลขทศนิยมนั้นๆ (เลขที่มากที่สุด ที่มันน้อยกว่าหรือเท่ากับเลขที่เราใส่ลงไปใน Math.floor())

console.log(Math.floor(0.5)) // 0

console.log(Math.floor(7.67)) // 7

console.log(Math.floor(10)) // 10

console.log(Math.floor(5.001)) // 5

console.log(Math.floor(-4.99)) // -5

// Math.pow(x,y) เป็น Static methods ที่ใช้ในการยกกำลัง ที่จะแสดงผลค่าออกมาเป็น x ยกกำลัง y

console.log(Math.pow(2,2)) // 2^2 = 4

console.log(Math.pow(6,2)) // 6^2 = 36

console.log(Math.pow(5,3)) // 5^3 = 125

console.log(Math.pow(10,2)) // 10^2 = 100



// Math.trunc() เป็น Static methods ที่ใช้ในการคืนค่าเลขที่เป็นเลขจำนวนเต็ม หลังจากการตัดเศษออกจากเลขทศนิยม โดยที่เลขนั้น

// จะได้เป็นค่าเดิมที่ไม่มีการปัดเศษขึ้นหรือลง

console.log(Math.trunc(0.5)) // 0

console.log(Math.trunc(7.67)) // 7

console.log(Math.trunc(10)) // 10

console.log(Math.trunc(5.001)) // 5

console.log(Math.trunc(-4.99)) // -4



// Math.abs() เป็น Static methods ที่ใช้ในการคืนค่าสัมบูรณ์ของเลขนั้นออกมา

console.log(Math.abs(-1)) // 1

console.log(Math.abs(-25)) // 25



// Math.sqrt() เป็น Static methods ที่ใช้ในการคืนค่ารากที่สองของเลขนั้นออกมา

console.log(Math.sqrt(16)) // 4

console.log(Math.sqrt(25)) // 5

console.log(Math.sqrt(36)) // 6



// Math.max() เป็น Static methods ที่ใช้ในการหาค่าที่มากที่สุดจาก list ของตัวเลขหนึ่งๆที่เรากำหนดไว้

console.log(Math.max(16,21,88,10,32,100,110,23)) // 110

// Math.min() เป็น Static methods ที่ใช้ในการหาค่าที่น้อยที่สุดจาก list ของตัวเลขหนึ่งๆที่เรากำหนดไว้

console.log(Math.min(16,21,88,10,32,100,110,23)) // 10

console.log("......................................")

// (นี่เป็นเพียงตัวอย่างสั้นๆเท่านั้นที่เป็นพื้นฐาน ยังมี methods อื่นๆที่ลึกมากกว่านี้อีก)



###### โจทย์ที่เกี่ยวกับเรื่อง Math funtion

// โจทย์ 1

let my\_number = Math.floor(Math.random()\*100)+1

// ทำไมต้อง Math.random()\*100 เพราะว่า เนื่องจาก Math.random() จะได้แค่เลขทศนิยมที่อยู่ระหว่าง 0-1 ถ้าได้สุ่มถึงเลขอะไรก็ให้คูณกับเลขตัวนั้นไป

// --> แล้วทำไมต้องครอบด้วย Math.floor เพราะว่า หลังการการสุ่มเลขด้วย Math.random() แล้วคูณด้วย 100 มันก็ยังได้เป็นเลขทศนิยมอยู่ 

// ซึ่งในการสุ่มเลขปกติ เลขรางวัลมันเป็นจำนวนเต็ม ซึ่งเมื่อเทียบกันกับเลขทศนิยม มันก็ยังไม่ใช่เลขจำนวนเต็มนั้นอยู่ดี เลยต้องทำการปัดเศษลงเพื่อทำให้เลขที่สุ่มมาเป็นจำนวนเต็ม 

// --> แล้วทำไมต้องบวก 1 เพราะว่าหลังจากการปัดเศษลงของ Math.random()\*100 จะได้เป็นค่าที่สุ่มตั้งแต่ 0-99 ซึ่งไม่ใช่ช่วงที่เราต้องการ

// เลยต้องบวกไปอีกหนึ่งเพื่อทำให้ช่วงในการสุ่มเลขกลายเป็น 1-100 ตามที่เราต้องการ

function luckydraw(pick\_num) {

&nbsp;   return pick\_num === 6 || pick\_num === 25 || pick\_num === 66 || pick\_num === 72 

&nbsp;   || pick\_num === 94 || pick\_num === 99 ? "You win a price 🎉" : "Better luck next time (⸝⸝> ᴗ•⸝⸝)"

}

console.log(`My number is ${my\_number}`)

console.log(luckydraw(my\_number))

// หรือสามารถเขียนได้อีกรูปแบบหนึ่งดังนี้

// pricenum = \[6,25,66,72,94,99]

// function luckydraw\_2(luckylist,numluck) {

//     return luckylist.includes(numluck) ? "You win a price 🎉" : "Better luck next time (⸝⸝> ᴗ•⸝⸝)"

//     // เช็คว่าเลขที่สุ่มมา มีอยุ่ภายใน list เลขรางวัลหรือเปล่า ถ้ามีก็ถูกรางวัล ถ้าไม่มีก็ลองสุ่มใหม่

// }

// console.log(`My number is ${my\_number}`)

// console.log(luckydraw\_2(pricenum,my\_number))

console.log("//////////////////////////////////////////")





// โจทย์ 2

// โจทย์คือ การต้องไปซื้อของที่แม่ต้องการ

// โดยอย่างแรกคือการสุ่มเงินเพื่อไปซื้อของ โดยจะมีค่าอยู่ระหว่าง 500-1000 ฿

let my\_budget = Math.floor(Math.random()\*501)+500

// Math.floor(Math.random()\*501) = 0-500 --> (0-500)+500 = 500-1000 



// ส่วนต่อมาคือ ราคาของแต่ละอย่างที่แม่ต้องการ โดยที่ราคาของของแต่ละอย่างไม่เท่ากันเลย

let riceprice = Math.floor(Math.random()\*31)+30

// Math.floor(Math.random()\*31) = 0-30 --> (0-30)+30 = 30-60 

let veggieprice = Math.floor(Math.random()\*31)+20

// Math.floor(Math.random()\*31) = 0-30 --> (0-30)+20 = 20-50 

let meatprice = Math.floor(Math.random()\*71)+80

// Math.floor(Math.random()\*71) = 0-70 --> (0-70)+80 = 70-150 

let difukuprice = Math.floor(Math.random()\*41)+10

// Math.floor(Math.random()\*41) = 0-40 --> (0-40)+10 = 10-50 



// ส่วนต่อมาคือ แม่จะเอาของแต่ละอย่างเท่าไรบ้าง กี่ชิ้น (ของแต่อย่างซื้อได้มากสุด 5 ชิ้น)

let needrice = Math.ceil(Math.random()\*5)

let needveggie = Math.ceil(Math.random()\*5)

let needmeat = Math.ceil(Math.random()\*5)

let needdifuku = Math.ceil(Math.random()\*5)

// Math.ceil(Math.random()\*5) = 0-5 เพราะ Math.random()\*5 = 0-4.99 เมื่อปัดเศษขึ้นจะได้ 5 พอดี



// ต่อมาเป็นการหาราคาของของแต่ละชิ้นที่ต้องซื้อ แล้วนำมารวมกันเป็นค่าใช่จ่ายทั้งหมด

let ricecost = riceprice\*needrice

let veggiecost = veggieprice\*needveggie

let meatcost = meatprice\*needmeat

let difukucost = difukuprice\*needdifuku

let total = ricecost + veggiecost + meatcost + difukucost



// ต่อมาเป็นหาค่าของที่แพงและถูกที่สุด ในการซื้อครั้งนี้

let maxcost = Math.max(ricecost,veggiecost,meatcost,difukucost)

let mincost = Math.min(ricecost,veggiecost,meatcost,difukucost)



console.log(`ได้เงินไป ${my\_budget} ต้องไปซื้อข้าว ${needrice} ถุง ราคา ${ricecost}

ต้องไปซื้อผัก ${needveggie} กำ ราคา ${veggiecost}

ต้องไปซื้อเนื้อ ${needmeat} ชิ้น ราคา ${meatcost}

ต้องไปซื้อไดฟุกุ ${needdifuku} ชิ้น ราคา ${difukucost}`)

if(total <= my\_budget){

&nbsp;   let change = my\_budget - total

&nbsp;   console.log(`ค่าใช่จ่ายทั้งหมดคือ ${total}`)

&nbsp;   console.log(`ซื้อของครบแล้วนะ มีเงินทอนด้วย ${change} บาทนะ`)

}

else{

&nbsp;   console.log(`ค่าใช่จ่ายทั้งหมดคือ ${total}`)

&nbsp;   console.log(`ซื้อของไม่ครบง่ะ ตังไม่พอ :(`)

}

console.log(`ของที่แพงที่สุดราคา ${maxcost} ส่วนของที่ถูกทีสุดราคา ${mincost}`)

console.log("----------------------------------------------------------------------------")



### vol 4 string with ASCII code 

// ASCII code เป็นรหัสที่เป็นมาตรฐานในการแทนค่าของตัวอักษร,ตัวเลขและสัญลักษณ์ต่างๆ เพื่อทำให้คอมหรืออุปกรณ์อ้เล็กทรอนิกส์อื่นๆ

// สามารถสื่อสารต่อกันได้ โดยจะใช้เลขบิตในการแทนอักขระทั้งหมด 128 แบบ

// โดยจาก A-Z ASCII code จะเริ่มจาก 65-90 ส่วน a-z จะเริ่มจาก 97-122

// เลยทำให้เราสามารถเปรียบเทียบ string ด้วย (<,>,<=,>=) ได้ เพราะระบบของ JavaScript จะทำการแปลงแต่ละตัวอักษรเป็น

// ASCII code แล้วนำมาเทียบกันรายตัว ถ้าตัวไหนมากกว่ากัน ก็จะถือว่าคำนั้นมีค่าที่มากกว่าอีกคำหนึ่งทันที

console.log("Focus">"Somehow") // false

console.log("Sosad">"Somad") // true

console.log("focus">"Somehow") // true เพราะเลขของตัวพิมพ์เล็กจะมากกว่าตัวพิมพ์ใหญ่เสมอ (ตัวพิมพ์ใหญ่เริ่มรันเลขก่อนตัวพิมพ์เล็กเลยทำให้เลขของพิมพ์ใหญ่มันน้อยกว่า)

// ในส่วนของคำที่มีคำเริ่มต้นที่เหมือนกัน จะวัดกันที่ความยาวแทน ถ้าคำไหนมีความยาวมากกว่ากัน ฝั่งนั่นก็จะมากกว่าอีกฝั่งทันที

console.log("Book" < "Bookstore") // true

console.log("Heart" > "Heartbroken") // false



// จบการสรุปแล้วนะครับ แล้วเราไว้เจอกันในการสรุปเนื้อหา class หน้านะครับ ٩(^ᗜ^ )و ´-

