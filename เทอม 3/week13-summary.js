// W13_<014>_<Channarongdet Wongyot>
console.log("Hello")
console.log("This is a week 13 summary")
console.log("Let's sa go")
console.log("This .js file will summarize and cover only what professor have been discussed in class and the accompanying slides provided")
console.log("because I want to thoroughly understand each topic U taught in depth.")
console.log("----------------------------------------------------------------------------")

// Vol.1 Regular-Expressions (Regex)

// Regular-Expressions เป็นการกำหนดรูปแบบของข้อความ (string) 
// เพื่อใช้ในการค้นหา จับคู่ หรือจัดการกับข้อความต่างๆตามรูปแบบที่เรากำหนดไว้

// ซึ่ง Regular-Expressions จะเป็น object ที่ใช้ในการทำงานกับข้อความ
// มักจะใช้ในการตรวจสอบความถูกต้องของข้อมูล เช่น การตรวจรูปแบบการกรอกอีเมล์ (มี @ || .com หรือไม่)
// การค้นหาและแทนที่ข้อความ การเปลี่ยบรูปแบบการแสดงผล หรือการสกัดข้อมูลจากก้อนข้อมูลใหญ่ เป็นต้น

// Mini ver.1 Regex Constructor
// เราสามารถเขียน Regular-Expressions (Regex) ได้ทั้งหมดสองรูปแบบคือ

// 1.Literal Syntax --> ตัวแปร = /รูปแบบที่เรากำหนดไว้/ธงที่ใช้กรองข้อความ
// 2.Constructor Function --> ตัวแปร = new RegExp("รูปแบบที่เรากำหนดไว้","ธงที่ใช้กรองข้อความ")

// Mini ver.2 Regex Components

// ภายใน Regular-Expressions จะมีโครงสร้างหลักๆอยู่ทั้งหมดสองส่วนคือ
// 1. /รูปแบบที่เรากำหนดไว้/ ซึ่งเป็นตัวกำหนดว่า รูปแบบของ str ที่เราต้องการเก็บเอาไว้ในตัวแปรนี้
// หรือต้องการตรวจสอบรูปแบบข้อความมีรูปแบบอย่างไร

// 2. ธงที่ใช้กรองข้อความ เป็นตัวบอกว่าข้อความที่เราค้นหา จะมีกฎเกณณ์ในการค้นหานั้นอย่างไร
// โดยธงหลักๆที่เราใช้ภายในคาบ จะมีทั้งหมด 3 ธง คือ ธง g,ธง i,ธง gi

// ธง g คือ ค้นหาทุกๆตัวที่เข้าเกณณ์ตามรูปแบบที่เรากำหนด แต่พิมพ์เล็กพิมพ์ใหญ่ถือว่าเป็นคนละตัวกัน
// (g flag is case-sensitive)

// ธง i คือ ค้นหาตัวแรกที่ตรงตามเงื่อนไขแค่ตัวเดียว โดยไม่สนพิมเล็กพิมใหญ่ ถือว่าเป็นตัวเดียวกัน
// (i flag is case-insensitive)

// ธง gi ค้นหาทุกๆตัวที่เข้าเกณณ์ตามรูปแบบที่เรากำหนด โดยไม่สนพิมเล็กพิมใหญ่ ถือว่าเป็นตัวเดียวกัน
// (gi flag is case-insensitive)

// Mini ver.3 Regex "Syntax" Components

// ตัวกำหนดรูปแบบของ Regex สามารถมีได้ทั้งหมด 5 ประเภทด้วยกัน

// 1.Basic Syntax ซึ่งสามารถแบ่งย่อยไปได้อีกสองประเภทคือ
// 1.1 Literal Character เป็นรูปแบบที่เขียนง่ายที่สุดแล้วใน Regex
// Concept คือ ช่วงคำที่ตรงเงื่อนไข ต้องมีรูปแบบการวางของคำตาม Regex เท่านั้น
// (abc will match the exact sequence "abc" in a string.)
// เช่น
console.log("abcdefghijklmnopABC".match(/abc/)) // with no flag (i flag)
// [ 'abc', index: 0, input: 'abcdefghijklmnopABC', groups: undefined ]

console.log("abcdefghijklmnopABC".match(/abc/g)) // with g flag
// [ 'abc' ]

console.log("abcdefghijklmnopABC".match(/abc/gi)) // with gi flag
// [ 'abc', 'ABC' ]

// Note !! นับจากนี้ การแสดงผลจะใช้เป็น g flag เพราะมันทำให้เห็นแต่ละสมบัติของ
// แต่ละ Syntax ได้ชัดที่สุด

// 1.2 MetaCharacters เป็น Syntax ที่ใช้ตัวอักษรพิเศษที่มีความหมายในการแยกที่ไม่เหมือนกัน
// มาใช้ในการกำหนดรูปแบบการค้นหา

// . มีสองความหมายคือ 
// 1. dot(.)เฉยๆ = ตัวไหนก็ได้ผ่านเงื่อนไขหมด ยกเว้นพวก newline เช่น (\n,\r)
console.log('abCd32gh1jk9m:>op:)ABC\n'.match(/./g))
// [
//   'a', 'b', 'C', 'd', '3',
//   '2', 'g', 'h', '1', 'j',
//   'k', '9', 'm', ':', '>',
//   'o', 'p', ':', ')', 'A',
//   'B', 'C'
// ]
// 2. dot(.)+"ตัวอักษร" = คู่ของ ตัวอักษรที่นำหน้าตัวไหนก็ได้ 1-n ตัว 
// (ถ้ามี.เยอะ = ต้องมีนำหน้าเยอะเท่านั้นตามจำนวนจุด) กับ"ตัวอักษรที่เราใส่" เช่น
console.log('Hello world'.match(/..o/g)) // [ 'llo', ' wo' ]
// โดย dot รูปแบบนี้ก็สามารถวางไว้ด้านหลังได้ และวางไว้ระหว่าง "ตัวอักษรที่เราใส่" ก็ได้


// ^+"ตัวอักษร" = ข้อความที่เรากำหนดมาให้ตรวจ ต้องนำหน้าด้วย "ตัวอักษรที่เราใส่" เท่านั้น ถึงจะผ่านเกณณ์
// จะให้ออกมาตาม "ตัวอักษรที่เราใส่" ที่นำหน้าในคำนั้นๆ
// เช่น
console.log('abCd32g\nh1jk9m\n:>op:)ABC'.match(/^a/g))
// [ 'a' ] ซึ่ง a นำหน้าข้อความจริง
console.log('abCd32g\nh1jk9m\n:>op:)ABC'.match(/^abC/g))
// [ 'abC' ] ซึ่ง abC นำหน้าข้อความจริง


// "ตัวอักษร"+$ = ข้อความที่เรากำหนดมาให้ตรวจ ต้องลงท้ายด้วย "ตัวอักษรที่เราใส่" เท่านั้น ถึงจะผ่านเกณณ์
// จะให้ออกมาตาม "ตัวอักษรที่เราใส่" ที่ลงท้ายในคำนั้นๆ
// เช่น
console.log('abCd32g\nh1jk9m\n:>op:)ABC'.match(/C$/g))
// [ 'C' ] ซึ่ง C ลงท้ายข้อความจริง
console.log('abCd32g\nh1jk9m\n:>op:)ABC'.match(/ABC$/g))
// [ 'ABC' ] ซึ่ง ABC ลงท้ายข้อความจริง

// a|b = ข้อความที่เรากำหนดมาให้ตรวจ ต้องมี a หรือ b ก็ได้อยู่ภายในข้อความ ถึงจะผ่านเกณณ์
// ถ้ามีก็จะแสดงผลออกมาเป็นสองคำที่มีให้เราเป็นอาเรย์ เช่น
console.log('hi or hello'.match(/hi|hello/g))
// [ 'hi', 'hello' ]

// ต่อมาจะเป็นตระกูล \something โดยมีรายละเอียดดังนี้
// \d = ข้อความที่เรากำหนดมาให้ตรวจ ถ้ามีตัวเลข (0-9) อยู่ภายในข้อความ
// ก็จะผ่านเกณณ์ทันที และแสดงผลออกมาให้เราที่ละเลข
console.log('hi1234 or hello5678'.match(/\d/g))
// [
//   '1', '2', '3',
//   '4', '5', '6',
//   '7', '8'
// ]

// \D = ตัวตรงข้ามกับ \d คือทุกตัวจะผ่านเงื่อนไขและแสดงผลมาให้เรา ยกเว้นตัวเลข (0-9)
console.log('hi1234 or hello5678'.match(/\D/g))
// [
//   'h', 'i', ' ', 'o',
//   'r', ' ', 'h', 'e',
//   'l', 'l', 'o'
// ]

// \w = ข้อความที่เรากำหนดมาให้ตรวจ ถ้ามีตัวพิมเล็ก(a-z) ตัวพิมใหญ่(A-Z)
// ตัวเลข(0-9) และ _ อยู่ภายในข้อความ ก็จะผ่านเกณณ์ทันที และแสดงผลออกมาให้เราทีละตัว
console.log('hi:):):):)1234 or hello:(:(:(:(5678\n'.match(/\w/g))
// [
//   'h', 'i', '1', '2', '3',
//   '4', 'o', 'r', 'h', 'e',
//   'l', 'l', 'o', '5', '6',
//   '7', '8'
// ]

// \W = ตัวตรงข้ามกับ \w คือทุกตัวจะผ่านเงื่อนไขและแสดงผลมาให้เรา ยกเว้นตัวเลข (0-9)
// ตัวพิมเล็ก(a-z) ตัวพิมใหญ่(A-Z) และ _
console.log('hi:):):):)1234 or hello:(:(:(:(5678\n'.match(/\W/g))
// [
//   ':', ')', ':', ')',  ':',
//   ')', ':', ')', ' ',  ' ',
//   ':', '(', ':', '(',  ':',
//   '(', ':', '(', '\n'
// ]

// \s = ข้อความที่เรากำหนดมาให้ตรวจ ถ้ามีการเว้นวรรค หรือตัวที่ใช้บอกว่าเป็นการขึ้นบรรทัดใหม่
// (whitespace,\n) อยู่ภายในข้อความ ก็จะผ่านเกณณ์ทันที และแสดงผลออกมาให้เราทีละตัว
console.log('hi or hello'.match(/\s/))
// [ ' ', index: 2, input: 'hi or hello', groups: undefined ]

// \S = ตัวตรงข้ามกับ \w คือทุกตัวจะผ่านเงื่อนไขและแสดงผลมาให้เรา ยกเว้นการเว้นวรรค
// หรือตัวที่ใช้บอกว่าเป็นการขึ้นบรรทัดใหม่
console.log('hi or hello'.match(/\S/g))
// [
//   'h', 'i', 'o',
//   'r', 'h', 'e',
//   'l', 'l', 'o'
// ]

// \b"ตัวอักษร"\b = ข้อความที่เรากำหนดมาให้ตรวจ ถ้ามีรูปแบบการวางของตัวอักษร 
// ตาม "ตัวอักษรที่เราใส่" ก็จะแสดงผลเป็นตามรูปแบบที่เราใส่มาเท่านั้น (เหมือนกับ Literal Characters)
console.log('hi or hell-ooo'.match(/\booo\b/))
// [ 'ooo', index: 11, input: 'hi or hell-ooo', groups: undefined ]

// 2. Escape Characters ในบางตัวอักษรนั้น ทาง regex ได้กำหนดความหมายเฉพาะ
// เอาไว้แล้วภายในการใช้งานตัว regex เช่น ^,$,.,|,\ เป็นต้น ถ้าหากเราอยากเขียน regex ในการค้นหา
// เครื่องหมายเหล่านี้ภายในข้อความ ต้องมีตัว \นำหน้าแล้วตามด้วยเครื่องหมายที่เราต้องการหา เช่น
console.log('2^3=5$'.match(/\^|\$/g)) // [ '^', '$' ]

// 3.Character Classes สามารถแบ่งได้เป็นสองรูปแบบคือ
// Character Set [] = ข้อความที่เรากำหนดมาให้ตรวจ ถ้ามีตัวอักษรตัวใดตัวหนึ่งภายใน list นี้ (ภายใน[])
// ก็จะผ่านเกณณ์ทันที และแสดงผลออกมาให้เราทีละตัว เช่น
console.log("Why are you like this".match(/[aeiou]/gi))
// [
//   'a', 'e', 'o',
//   'u', 'i', 'e',
//   'i'
// ]

// Negated Character Set [^] = ข้อความที่เรากำหนดมาให้ตรวจ ทุกตัวจะผ่านเงื่อนไขและแสดงผลมาให้เรา
// ยกเว้นตัวอักษรตัวใดตัวหนึ่งภายใน list นี้ (ภายใน[]) เช่น
console.log("Why are you like this".match(/[^aeiou]/gi))
// [
//   'W', 'h', 'y', ' ',
//   'r', ' ', 'y', ' ',
//   'l', 'k', ' ', 't',
//   'h', 's'
// ]

// ตัวอย่างเพิ่มเติมของ Character Classes
// [a-z] = ตัวพิมเล็กตัวไหนก็ได้
// [A-Z] = ตัวพิมใหญ่ตัวไหนก็ได้
// [\w] = พิมเล็ก,พิมใหญ่,ตัวเลข,_ ตัวไหนก็ได้
// [\s] = การเว้นวรรคหรือขึ้นบรรทัดใหม่ตัวไหนก็ได้

// 4.Quantifiers เป็นการกำหนดปริมาณของตัวอักษรที่ผ่านเกณณ์ตามรูปแบบที่เราสร้าง
// (หลักการคล้าย whildcard)

// "ตัวอักษร"+ เป็นตัวที่ใช้ในการค้นหา"ตัวอักษรที่เรากรอก"ว่าต้องมีอย่างน้อย 1 ตัวเป็นต้นไปในข้อความนั้น
console.log("kis kris Krris Krrrrrrris".match(/kr+is/gi))
// kr+is = k(ตัว r ต้องมีมากกว่า 1 ตัวถึงจะแสดงผลมาให้เรา)is
// [ 'kris', 'Krris', 'Krrrrrrris' ] ซึ่ง r มีมากกว่า 1 ตัวจริง

// "ตัวอักษร"? เป็นตัวที่ใช้ในการค้นหา"ตัวอักษรที่เรากรอก"ว่าต้องมี 0-1 ตัวเท่านั้นในข้อความ
console.log("kis kris Krris Krrrrrrris".match(/kr?is/gi))
// kr?is = k(ตัว r ต้องมี 0-1 ตัวเท่านั้นถึงจะแสดงผลมาให้เรา)is
// [ 'kis', 'kris' ] ซึ่ง r มี 0-1 ตัวจริง

// "ตัวอักษร"* เป็นตัวที่ใช้ในการค้นหา"ตัวอักษรที่เรากรอก" ว่าจะมีหรือไม่มีก็ได้ ทุกตัวผ่านหมด
console.log("kis kris Krris Krrrrrrris".match(/kr*is/gi))
// kr+is = k(ตัว r มีกี่ตัวก็ได้ก็จะแสดงผลมาให้เราอยู่ดี)is
// [ 'kis', 'kris', 'Krris', 'Krrrrrrris' ] ซึ่ง r มีแบบไม่มีและมีจริง

// "ตัวอักษร"{n,m} เป็นตัวที่ใช้ในการค้นหา"ตัวอักษรที่เรากรอก" ว่า
// {n} มี"ตัวอักษรที่เรากรอก" เป็น n ตัวเท่านั้น
console.log("kis kris Krris Krrrrrrris".match(/kr{1}is/gi)) // [ 'kris' ]
// {n,} มี"ตัวอักษรที่เรากรอก" ตั้งแต่ n ตัวเป็นต้นไปในข้อความนั้น
console.log("kis kris Krris Krrrrrrris".match(/kr{1,}is/gi)) // [ 'kris', 'Krris', 'Krrrrrrris' ]
// {n,m} มี"ตัวอักษรที่เรากรอก" ตั้งแต่ n-m ตัวในข้อความ
console.log("kis kris Krris Krrrrrrris".match(/kr{0,2}is/gi)) // [ 'kis', 'kris', 'Krris' ]

// 5. Capturing Groups and Alternation
// การจับกลุ่มของรูปแบบ Grouping () เพื่อใช้ในแยกการตรวจเช็คข้อความที่ละเอียด แต่เราไม่สามารถเขียน
// เกณณ์ทั้งหมดได้ภายในครั้งเดียว เลยใช้การ Grouping แต่ละการตรวจ แล้วเอามารวมกันเป็นระบบเดียวแทน

// Alternation คือ a|b กลับดูด้านบนนะครัชช

// Mini ver.4 Regex Methods
// Methods ของ Regular-Expressions มีอยู่ทั้งหมด 5 ประเถทหลักๆคือ

// 1.test() เป็นการตรวจสอบว่าภายในข้อความที่เรากำหนดมา มีคำที่ตรงเงื่อนไขของ Regex
// ตามแต่ละคุณสมบัติของแต่ละ Syntax หรือไม่ โดยจะแสดงผลออกมาเป็น boolean (true||false)
// โดยเราต้องกำหนด Constructor Function ก่อนการใช้งาน Methods เสมอ
// โครงสร้าง คือ Constructor.test('ข้อความที่อยากให้ตรวจสอบ')

let reg1 = new RegExp("cat","gi")
console.log(reg1.test("I love Cats, but my friend has a cat. CATS are cute")) // true

// 2.exec() เป็นการแสดงผลตัวอักษรที่ตรงกับเงื่อนไขที่เรากำหนดใน Regular-Expressions
// โดยถ้าภายในข้อความของเรามีตัวที่ถูกเงื่อนไขมากกว่า 1 ตัว ถึงแม้เราจะแนบธง g ไป
// ถ้าเราใช้ exec() แสดงผลจะแสดงผลออกมาแค่ตัวแรกที่เจอเท่านั้น ถ้าเราอยากให้แสดงตัวอื่นๆ
// ก็ต้องใช้ loop exec() วนหาภายในตัวแปรเดิมไปเรื่อยๆ จนกว่าจะไม่มีตัวที่ถูกเงื่อนไขแล้ว (มีผลเป็น null)
// โครงสร้าง คือ Constructor.test('ข้อความที่อยากให้ตรวจสอบ')

let reg2 = new RegExp("cat","gi")
let text = "I know that Cats are cute, but i have a cat allegry. CATS are NOT for me"
let result
while ((result = reg2.exec(text)) !== null){
    console.log(result)
}
// [
//   'Cat',
//   index: 12,
//   input: 'I know that Cats are cute, but i have a cat allegry. CATS are NOT for me',
//   groups: undefined
// ]
// [
//   'cat',
//   index: 40,
//   input: 'I know that Cats are cute, but i have a cat allegry. CATS are NOT for me',
//   groups: undefined
// ]
// [
//   'CAT',
//   index: 53,
//   input: 'I know that Cats are cute, but i have a cat allegry. CATS are NOT for me',
//   groups: undefined
// ]

// และถ้ามีการ Grouping ก็จะมีการแสดงผลของแค่ละเงื่อนไขมาด้วย

// 3.match() เป็นการแสดงผลตัวอักษรที่ตรงกับเงื่อนไขที่เรากำหนดใน Regular-Expressions
// ทั้งหมด(ตามธงและ Syntax ที่เรากำหนดร่วมด้วย)หรือจะแสดงผลเป็น null ถ้าข้อความนั้นไม่ตรงเงื่อนไขเลย
console.log("But what about DOG, dog is cute too. At least for me,Dog is for everyone."
.match(/dog/gi)) // [ 'DOG', 'dog', 'Dog' ]

// 3-1 matchAll() เป็นการแสดงผลตัวอักษรที่ตรงกับเงื่อนไขที่เรากำหนดใน Regular-Expressions
// ทั้งหมดที่เกิดจากการวนดูทุกตัวอักษรในข้อความ (ให้ผลเหมือนใช้ธง g ใน.match)
// โดยการใช้ matchAll() ต้องใช้กับธง g ร่วมด้วยเท่านั้น และใช้ร่วมกับการวนลูปดูทุกๆตัวอักษร (for of)

let texxt = "But what about DOG, dog is cute too. At least for me,Dog is for everyone."
let reg3 = texxt.matchAll(/dog/gi)
for (const element of reg3) {
    console.log(element)
}
// [
//   'DOG',
//   index: 15,
//   input: 'But what about DOG, dog is cute too. At least for me,Dog is for everyone.',
//   groups: undefined
// ]
// [
//   'dog',
//   index: 20,
//   input: 'But what about DOG, dog is cute too. At least for me,Dog is for everyone.',
//   groups: undefined
// ]
// [
//   'Dog',
//   index: 53,
//   input: 'But what about DOG, dog is cute too. At least for me,Dog is for everyone.',
//   groups: undefined
// ]

// 4.search() เป็นการตรวจสอบว่าภายในข้อความที่เรากำหนดมา ตัวอักษรที่ตรงตามเงื่อนไขเป็นตัวแรก
// อยู่ที่ตำแหน่งไหนในก้อนข้อความนั้น ถ้าไม่เจอจะแสดงผลเป็น -1
// โดย search() ถ้าใช้ธง g จะไม่มีผล
console.log("To be honest,I love'd to but I also have dog allegry :(".search(/dog/)) // 41

// 5.replace() เป็นการตรวจสอบว่าภายในข้อความที่เรากำหนดมา ถ้ามีตัวอักษรที่เข้าเงื่อนไขแล้ว
// เราอยากจะเปลี่ยนให้คำที่เข้าเงื่อนไขเป็นคำอะไร (ได้ผลลัพธ์ตามธงและ Syntax ที่เรากำหนดร่วมด้วย)

console.log("Cat is cat and Cat is for CAT".replace(/cat/gi,"dog"))
// dog is dog and dog is for dog เปลี่ยน cat ทุกตัว (gi) --> dog

const texxxt = 'Hello   world'
const reslt = texxxt.replace(/\s+/, ' ')
console.log(reslt) // Hello world

const phone = '0812345678'
const resalt = phone.replace(/\d{6}(\d{4})/, '******$1')
console.log(resalt) // ******5678
// $1 = ให้ดึงเอาข้อความจาก Capturing Group ที่ 1 (\d{4} ในตัวอย่างนี้) มาแปะตรงนี้

// 5-1 replaceAll() เป็นการตรวจสอบว่าภายในข้อความที่เรากำหนดมา ถ้ามีตัวอักษรที่เข้าเงื่อนไขแล้ว
// เราอยากจะเปลี่ยนให้คำที่เข้าเงื่อนไขเป็นคำอะไร โดยจะตรวจข้อความทุกตัวและแทนค่าที่ตัวที่ผ่านเงื่อนไข
// (ให้ผลเหมือนใช้ธง g ใน.match) โดยการใช้ replaceAll() ต้องใช้กับธง g ร่วมด้วยเท่านั้น
const log = 'ERROR: A\nERROR: B\nERROR: C'
const resuult = log.replaceAll(/ERROR/g, 'WARNING')
console.log(resuult)
// WARNING: A
// WARNING: B
// WARNING: C

// จบการสรุปในสัปดาห์นี้แล้วนะครับ แอปต้องรอไปก่อนน้าาา