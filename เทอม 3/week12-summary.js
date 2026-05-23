// W10_<014>_<Channarongdet Wongyot>
console.log("Hello")
console.log("This is a week 12 summary")
console.log("Let's sa go")
console.log("This .js file will summarize and cover only what professor have been discussed in class and the accompanying slides provided")
console.log("because I want to thoroughly understand each topic U taught in depth.")
console.log("----------------------------------------------------------------------------")


// Vol.1 Datetime
// เป็นที่ทราบกันดีว่าระบบเวลามาตรฐานของโลกนั้น ใช้ระบบที่มีชื่อว่า UTC (coordinated universal time)
// ซึ่งเป็นเวลามาตรฐานกลางของโลกที่ทุกประเทศต้องอ้างอิงเวลานี้ ซึ่งในแต่ละประเทศเอง
// ก็จะมี timezone ที่ต่างกันไปในแต่ละประเทศ ซึ่งเกิดจากการอ้างอิงเวลาสากล
// แล้วก็บวกเพิ่มเวลาตามความห่างของประเทศนั้นจากประเทศอังกฤษซึ่งเป็นสถานที่อ้างอิงนั้นเอง

// เช่น ไทยจะมี timezone +7 หรือ UTC+07:00 หรือเร็วกว่าเวลากลาง 7 ชั่วโมง
// ที่ญี่ปุ่นจะมี timezone +9 หรือ UTC+09:00 หรือเร็วกว่าเวลากลาง 9 ชั่วโมง
// และที่นิวยอร์กจะมี timezone -5 หรือ UTC-05:00 หรือช้ากว่าเวลากลาง 5 ชั่วโมง
// ซึ่งอาจทำให้เกิดความคลาดเคลื่อนทางเวลาได้ เช่น วันนี้ที่ไทย ที่นิวยอร์กเป็นเมื่อวาน เป็นต้น


// โดยภายใน javascript เอง ก็มี object ตัวหนึ่งที่ใช้ในการเก็บตัวแปรของเวลาอยู่คือ
// Object date ซึ่งทำหน้าที่ในการเก็บข้อมูลวันและเวลาเพื่อใช้ในการแสดงผลภายในงานของเรา
// ทั้งเวลาสากลและเวลาสำหรับแต่ละท้องถิ่น รวมไปถึงใช้ในการคำนวนเวลาหรือเปรียบเทียบเวลาได้อีกด้วย

// Mini vol.1 ISO8601 - the Standard Format
// โดยรูปแบบการแสดงผลของ Object date (รวมไปถึงการกำหนดเวลาที่อยากให้แสดงผลในตัว Object date ด้วย)
// จะใช้รูปแบบของ ISO 8601 ซึ่งเป็นรูปแบบการแสดงผลเวลาเป็น string ที่เป็นสากลและแนะนำให้ใช้
// โดยมีโครงสร้างการแสดงผลดังนี้

// YYYY-MM-DDTHH:mm:ss.sssZ

// โดย Y = ตัวเลขปีทั้งสี่หลัก
// M = เลขเดือนสองหลัก (01-12)
// D = เลขวันสองหลัก (01-31)
// T = ตัวคั่นระหว่างส่วนบอกเวลาและบอกวัน
// H = เลขชั่วโมงสองหลัก (00-23)
// m = เลขนาทีสองหลัก (00-59)
// s = เลขวินาทีสองหลัก (00-59)
// .sss = เลข milliseconds สามหลัก (000-999)
// Z = เป็นตัวบ่งบอกว่าเวลานี้คือเวลามาตรฐาน UTC


// Mini vol.2 Data Object Constructor
// ในการสร้างตัว Object date สามารถสร้างได้ผ่านโครงสร้างดังนี้
// let ตัวแปรที่ใช้เก็บเวลา = new Date()

let date1 = new Date()
console.log(date1) // 2026-04-30T12:16:26.074Z

// โดยผลที่ได้ออกมาจากการสร้างแบบแรกนั้น จะเหมือนกับการใช้ medthod
// Date.now()

// โดยภายในวงเล็บของ new Date() เราสามารถใส่ค่าตัวเลข dateString และ
// การระบุแต่ละค่ารายตัวได้ โดยมีรายละเอียดดังนี้

// 1] new Date(value) โดยที่ value = ตัวเลข โดยวันที่ที่แสดงผลออกมานั้น
// จะเทียบจากเลขของ milliseconds ว่าห่างจาก เวลาที่อ้างอิง (January 1, 1970) 
// เท่าไร ซึ่งส่งผลให้ค่าการแสดงผลเปลี่ยน

// with milisec value
const date2 = new Date(86400000)
console.log(date2) // 1970-01-02T00:00:00.000Z
// ซึ่งมาจากการอ้างอิง January 1, 1970

// 2] new Date(dateString) โดยที่ dateString = การกรอกเวลาเป็นแบบ ISO8601 - the Standard Format
// โดยวันที่ที่จะแสดงผลออกมาก็จะเป็นตามที่เรากรอกวันและเวลาที่เราต้องการเป็นรูปแบบ ISO8601 แปะๆเลย

// with date string
const date3 = new Date('1970-01-01')
console.log(date3) // 1970-01-01T00:00:00.000Z

const date4 = new Date('2027-01-28T15:00:00Z')
console.log(date4) // 2027-01-28T15:00:00.000Z

const date5 = new Date('2027-01-28T15:00:00')
console.log(date5) // 2027-01-28T08:00:00.000Z

// สาเหตุที่ date4 กับ date5 ไม่เท่ากันเพราะภายใน dateString ไม่ได้มีการใส่ตัว Z เข้าไป
// ซึ่งตัว Z ใช้ในการบอกว่า สิ่งที่เราพิมพ์ลงไปคือ เวลามาตรฐานโลก (UTC) จริงๆ
// ถ้าหากเราไม่ใส่ตัว Z มันจะเทียบเวลาที่เรากรอกเป็นเวลาท้องถิ่นที่เราเราอยู่ (ในที่นี้คือ ไทย ที่เร็วกว่า 7 ชม.)
// แล้วไปเทียบกับเวลามาตรฐานโลก (UTC) ซึ่งการแสดงผลจะแสดงผลเป็น เวลามาตรฐานโลก (UTC)
// ที่น้อยกว่าเวลาที่เราพิมพ์ไป 7 ชม. นั้นเอง 


// 3] new Datenew Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
// โดยตัวที่เรากรอกไปนั้นมีรายละเอียดเพิ่มเติมดังนี้
// 1. monthIndex จะมีค่าตั้งแต่ 0-11 โดย 0 คือ มกราส่วน 11 คือ ธันวา
// 2. สิ่งที่เรากรอกลงไปในนี้ จะเป็นเวลาที่เป็นเวลาท้องถิ่นที่เราอยู่ แต่การแสดงผลของ new Date()
// จะเป็นกรณีเดียวกันกับ การไม่ใส่ตัว Z ในข้อ 2] 

const date6 = new Date(2026,0,28,15,0,0)
console.log(date6) // 2026-01-28T08:00:00.000Z

// ถ้าหากเราอยากรู้ว่าในตัวแปรที่เราสร้างมานั้น เมื่อเป็นเวลาประเทศไทยจะมีเวลาเท่าไร
// สามารถใช้ ตัวแปร.toLocaleString() ในการแสดงผลได้

// จาก date3 = new Date('1970-01-01')
console.log(date3.toLocaleString()) // 1/1/2513 07:00:00

// จาก date4 = new Date('2027-01-28T15:00:00Z')
// จาก date5 = new Date('2027-01-28T15:00:00')
console.log(date4.toLocaleString()) // 28/1/2570 22:00:00
console.log(date5.toLocaleString()) // 28/1/2570 15:00:00

// จาก date6 = new Date(2026,0,28,15,0,0)
console.log(date6.toLocaleString()) // 28/1/2569 15:00:00

// Mini ver.3 Date Methods
// Methods ของ Date จะได้เป็นสองประเภทหลักๆคือ Get กับ Set
// โดย Get มีหน้าที่ในการเอาข้อมูลของแต่ละตัวมาแสดงผลได้
// ส่วน Set คือการตั้งเวลาตามที่เราต้อง โดยข้อมูลที่กรอกใน Set จะถือว่าเป็น
// เวลาท้องถิ่นที่เราอยู่ทั้งหมด

// ภายใน Get กับ Set ก็จะมีการแบ่งการทำงานเป็นอีกสองส่วนคือ
// ทำงานกับระบบเวลาท้องถิ่นและกับระบบเวลาสากล (local and UTC)

// ตัวอย่าง GET
let date7 = new Date('2026-05-01T06:49:28.735Z')
console.log(date7)
console.log(date7.getFullYear()) // 2026 (ปีตามเวลาท้องถิ่น (ไทย))
console.log(date7.getUTCFullYear()) // 2026 (ปีตามเวลาสากล (UTC))

console.log(date7.getDate()) // 1 (วันตามเวลาท้องถิ่น (ไทย))
console.log(date7.getUTCDate()) // 1 (วันตามเวลาสากล (UTC))

console.log(date7.getHours()) // 13 (เวลาตามเวลาท้องถิ่น (ไทย))
console.log(date7.getUTCHours()) // 6 (เวลาตามเวลาสากล (UTC))

console.log(date7.getMilliseconds()) // 735
// Milliseconds จะมีประโยชน์อย่างมาในการเปรียบค่าของเวลา
console.log(date7.getTimezoneOffset()) // -420 
// จะให้ค่านาทีมา จะเป็นเลขลบเมื่อเวลาท้องถิ่นที่เราอยู่มากกว่าเวลาสากล


// ตัวอย่าง Set (ข้อมูลที่กรอกใน Set จะถือว่าเป็นเวลาท้องถิ่นที่เราอยู่ทั้งหมด
// เพราะงั้นเวลาที่แสดงจะต่างกันเพราะจะแสดงเป็นเวลา UTC แทน)
let date8 = new Date('2026-01-09T06:49:28.735Z')
date8.setFullYear(2025)
date8.setMonth(0) // Month ในที่นี้ ต้องใส่เป็น monthIndex (0-11)
date8.setDate(28)
date8.setMilliseconds(800)
console.log(date8) // 2025-01-28T06:49:28.800Z
// จากเดิม 2026-01-09T06:49:28.735Z
console.log(date8.toLocaleString()) // 28/1/2568 13:49:28

// Mini ver.4 Date.parse()
// Date.parse() เป็นคำสั่งที่ใช้แปลงวันที่ในรูปแบบ string format (ISO)
// ให้กลายเป็นค่า Millisec โดยถ้าใส่ค่าวันที่ที่ไม่ต้องกับรูปแบบของ ISO
// หรือ เหมือนกับการแสดงผลของ date.toString() จะให้ค่า NaN (not a num)
// กลับมาให้เราทันที

// ในการใส่ string format ลงไปในวงเล็บของ Date.parse() นั้น
// ถ้าให้ใส่วันที่เป็นรูปแบบนี้ '1970-01-01' ระบบจะตีความเป็นเวลาแบบ ISO
// นอกนั้นถ้าใส่ /,(เว้นว่างระหว่างตัวเลข) ระบบจะตีความเป็นเวลาท้องถิ่นของเราแทน
// ส่วนถ้าเราใส่เหมือนกับการแสดงผลของ date.toString() ระบบจะตีความเป็นเวลาท้องถิ่นของเราเหมือนกัน

const milisec_value = Date.parse('2026-04-28T17:50:00Z')
if(isNaN(milisec_value))
    console.log("invalid date")
else{
    console.log(new Date(milisec_value))
    console.log(milisec_value)
    // 2026-04-28T17:50:00.000Z
    // 1777398600000
}

// Mini ver.5 Date/Time Handling
// ในการรับข้อมูลเวลาของทั้งสองฝั่ง ทั้ง Front และ Back ทั้งสองฝั่งนั้นจะต้องมีการ
// รับข้อมูลของเวลาที่แตกต่างกัน เช่น Frontend ต้องแสดงค่าเวลาท้องถิ่นเพื่อให้ user
// เข้าใจว่านี้คือเวลาอะไร ซึ่งมีประโยชน์ในการวางแผน ส่วนด้าน Backend ต้องใช้เวลาใน
// รูปแบบ UTC เพื่อนำมาใช้การเปรียบเทียบเวลา,การะประมวนผลผ่านการใช้ค่าของเวลามาเกี่ยวข้อง
// และการเก็บรักษาข้อมูลในแต่ละเวลาต่างๆ ได้เป็นระบบมากขึ้น

// เพราะฉะนั้น ถ้าหากเราต้องส่งข้อมูลที่เป็นเวลาจากฝั่ง Backend กลับไปหา Frontend
// ควรใช้คำสั้ง toLocaleString() ร่วมกับการกำหนด timeZone เพื่อทำให้ user สามารถเช็คข้อมูล
// ของเวลาเป็นเวลาท้องถิ่นที่ user คุ้นเคยได้ ส่วนหากเราต้องส่งข้อมูลที่เป็นเวลาท้องถิ่นของ user
// ของฝั่ง Frontend ไปหา Backend ควรใช้คำสั่ง toISOString() ในการแปลงให้เวลาท้องถิ่น
// เป็นเวลามาตรฐานเพื่อนำไปใช้งานในฟังก์ชั่นต่างๆต่อไป


// Mini ver.6 toString(), toLocaleString(), toISOString(),Intl.DateTimeFormat()

// toString() ใช้ในการแปลงค่าของ date เป็น str เพื่อให้อ่านง่ายมากขึ้น (สำหรับ dev)
// (จะแสดงผลเป็นเวลาท้องถิ่นที่เราอยู่)
let date9 = new Date('2026-04-01T00:00:00.000Z')
console.log(date9.toString())
// Wed Apr 01 2026 07:00:00 GMT+0700 (GMT+07:00)

// toLocaleString() ใช้ในการแสดงผลค่าของ Date ให้เป็นไปตามแต่ละเวลาท้องถิ่นของ user นั้นๆ
// (จะแสดงผลเป็นเวลาท้องถิ่นที่เราอยู่)
console.log(date9.toLocaleString())
// 4/1/2026, 7:00:00 AM

// toISOString() ใช้ในการแสดงผลค่าของ Date จากเวลาท้องถิ่น เป็นค่าเวลามาตรฐาน UTC
console.log(date9.toISOString())
// 2026-04-01T00:00:00.000Z

// ตัวของ toLocaleString() สามารถใส่ค่าภายในวงเล็บไปได้อีก 2 ประเภทคือ
// 1.locales เป็นการกำหนดว่าจะให้แสดงผลเป็นเวลาของท้องถิ่นไหน
// 2.options เป็นตัวเลือกในการแสดงผลว่าในแต่ละข้อมูล (ปี,วัน,เดือน,ๆลๆ) จะให้แสดงผลเป็นรูปแบบไหน

// ตัวอย่าง
const Mybirthday = new Date('2007-01-28T15:00:00')
console.log(Mybirthday.toLocaleString(
    'th-TH',{
        dateStyle:'full',
        timeStyle:'medium',
        timeZone:'Asia/Bangkok'
    }
))
// วันอาทิตย์ที่ 28 มกราคม พ.ศ. 2550 เวลา 15:00:00

// Intl.DateTimeFormat() ใช้ในการกำหนดรูปแบบการแสดงผลของเวลา
// เพื่อลดความยุ่งยากในการต้องใส่ค่า options ภายใน toLocaleString() หลายๆรอบ
// เป็นเหมือนแม่แบบในการแสดงผลเวลาในแต่ละท้องถิ่นนั้นเอง

const formatter = new Intl.DateTimeFormat('th-TH',{
        dateStyle:'full',
        timeStyle:'medium',
        timeZone:'Asia/Bangkok'
})
console.log(formatter.format(Mybirthday))
// วันอาทิตย์ที่ 28 มกราคม พ.ศ. 2550 เวลา 15:00:00
console.log(formatter.format(date9))
// วันพุธที่ 1 เมษายน พ.ศ. 2569 เวลา 07:00:00

// ในกรณีที่เราอยากรู้ว่าเราอยู่ว่าเครื่องของผู้ใช้เป็น timeZone อะไร
// เราสามารถใช้ Intl.DateTimeFormat().resolvedOptions()
// ในการหาได้

const op = new Intl.DateTimeFormat().resolvedOptions()
let date10 = new Date()
console.log(op.locale) // th-TH
console.log(op.timeZone) // Etc/GMT-7
console.log(date10.toLocaleString(op.locale)) // 1/5/2569 16:42:01


// Mini ver.7 Date Comparing
// ในการเปรียบเทียบค่าของ object Date นั้น เราไม่สามารถเทียบกันตรงๆได้
// เพราะ object Date ก็เป็น object ที่มี reference แยกกันเป็นของตัวเอง
// การเทียบกันตรงๆเลยได้ผลเป็นเท็จ เพราะ reference ไม่ตรงกันในสอง object date

// ในการเทียบกันของค่า object Date นั้น เราจะเทียบกันผ่านการใช้ค่า Millisec
// ถ้ามีค่าเท่ากันก็จะเป็นจริง และค่าของ Millisec ยังสามารถเทียบแบบมากกว่าน้อยกว่าได้อีกด้วย
// ตัวอย่างการเทียบ
const date12 = new Date('2026-04-28T10:45:00Z')
const date13 = new Date('2026-04-28T10:45:00Z')
const date14 = new Date('2026-04-28T10:45:00')
console.log(date12 === date13) // false
// not the same reference

console.log(date12.getTime() === date13.getTime()) // true
// millisec เท่ากัน
console.log(date12.getTime() === date14.getTime()) // false
// millisec ไม่เท่ากัน
console.log(date12.getTime()) // 1777373100000
console.log(date13.getTime()) // 1777373100000
console.log(date14.getTime()) // 1777347900000

const date15 = new Date('2026-04-28T10:45:00Z')
const date16 = new Date('2026-04-28T10:45:01Z')
const date17 = new Date('2026-04-28T10:45:00')
console.log(date15 < date16) // true
// millisec ของ date15 < date16 จริง
console.log(date15 < date17) // false
// millisec ของ date17 > date15
console.log(date15.getTime()) // 1777373100000
console.log(date16.getTime()) // 1777373101000
console.log(date17.getTime()) // 1777347900000

// ตัวอย่างการเช็คความถูกต้องของช่วงเวลา (Valid Time Checking)
const openTime = new Date('2025-11-02T08:00:00+07:00') // เวลาเปิดร้าน
const closeTime = new Date('2025-11-02T17:00:00+07:00') // เวลาปิดร้าน
const bookingStart = new Date('2025-11-02T09:00:00+07:00') // เวลาที่ลูกค้าจะเริ่มจองได้
const bookingEnd = new Date('2025-11-02T17:00:00+07:00') // เวลาที่ห้ามลูกค้าจองเกินเวลานี้

if (bookingStart >= openTime && bookingEnd <= closeTime) {
// เช็คว่าเวลาที่เราจะจอง มันมากกว่าเวลาที่ร้านเปิดไหม และ เวลาที่เราจะเลิกจอง มันน้อยกว่าเวลาที่ร้านปิดหรือเปล่า
 console.log('Valid Booking Time')
// ถ้าใช่ทั้งสองเงื่อนไข ก็สามารถจองได้
} else {
 console.log('Invalid Booking Time')
}
// ถ้าไม่ใช่ก็จองไม่ได้

// ตัวอย่างการเช็คความทับซ้อนของเวลา (Overlap Time Checking)
// มักใช้ในพวกระบบการจองที่ห้ามการจองซ้ำซ้อนในช่วงเวลาหนึ่งๆนั้นเอง เช่น การจองห้องประชุม
// ที่สามารถใช้ได้แค่แต่ละกลุ่มเท่านั้น

const aStart = new Date('2025-11-01T00:00:00')
const aEnd = new Date('2025-11-05T00:00:00')
const bStart = new Date('2025-11-02:00:00')
const bEnd = new Date('2025-11-04T00:00:00')
function isOverlapping(startA, endA, startB, endB) {
// เช็คว่าการจองของทั้ง A และ B มันซ้อนกันหรือเปล่า
 return startB <= endA && endB >= startA
// ให้แสดงผลการเปรียบเทียบของแต่ละกรณีคือ
// 1. ช่วงเวลาที่ B เริ่มจอง จะเป็นช่วงเวลาก่อนที่ A จะเลิกจอง (startB <= endA)
// 2. ช่วงเวลาที่ B เลิกจอง ต้องอยู่ในช่วงเวลาที่ A เริ่มจองพอดี (endB >= startA)
// ถ้าผลเป็นจริง แสดงว่าจองซ้อนกัน
}
console.log(isOverlapping(aStart, aEnd, bStart, bEnd)) // true

// ช่วงเวลาที่ A จองคือ 1(aStart) ถึง 5(aEnd)
// ส่วนช่วงเวลาที่ B จองคือ 2(bStart) ถึง 4(bEnd)
// เทียบกับเงื่อนไขแรก --> 2(bStart) <= 5(aEnd) True
// เทียบกับเงื่อนไขสอง --> 4(bEnd) >= 1(aStart) True
// เลยได้ผลเป็นจริงนั้นเอง
