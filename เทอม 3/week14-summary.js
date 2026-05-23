// W13_<014>_<Channarongdet Wongyot>
console.log("Hello")
console.log("This is a week 14 summary")
console.log("Let's sa go")
console.log("This .js file will summarize and cover only what professor have been discussed in class and the accompanying slides provided")
console.log("because I want to thoroughly understand each topic U taught in depth.")
console.log("----------------------------------------------------------------------------")

// vol.1 Error Object + Subclass
// เราสามารถสร้าง Error ไว้ในการแจ้งเตือน user โดยตัวเองได้ผ่านการสร้าง
// เป็น Error() constructor ที่จะสร้าง Error Object ออกมาให้เรา
// โดยที่ Error Object จะเป็น super object ที่ภายในตัวของ error ก็มี
// class ของแต่ละประเภทของ error อยู่ภายใน โดยแต่ละประเภทจะมีดังนี้

// 1. Error = ใช้ในการสร้าง error ทั่วไป
// 2. RangeError = เออเรอร์ที่เกิดจากค่าที่ส่งเข้าไปอยู่ในช่วงข้อมูลที่เป็นไปไม่ได้
// เช่น arr = new Array(-1) ซึ่งอาเรย์มันมีความยาวเป็นลบไม่ได้
// 3. ReferenceError = เออเรอร์ที่เกิดจากการเรียกใช้ตัวแปรที่ยังไม่มีภายใน
// jascript หรือมีแล้วแต่ยังไม่ได้กำหนดค่าให้
// 4.SyntaxError = เออเรอร์ที่เกิดจากการพิมพ์โครงสร้างของภาษาผิด
// 5.TypeError = เออเรอร์ที่เกิดจากการใช้ชนิดของข้อมูลที่ไม่ตรงกับตัวคำสั่งนั้น
// เช่น const n = 5 n.toUpperCase() ซึ่งตัวเลข (number) ทำให้เป็นตัวพิมพ์ใหญ่ไม่ได้
// ทำได้แค่ str เท่านั้น

// ตัวอย่าง Error Object
const error1 = new Error("This error is from new error constructor")
const error2 = Error("This error is from error function call")
console.log(error1)
console.log(error2)

// ตัวอย่าง Error Object with Subclass
const error3 = new SyntaxError('This is a syntax error from error constructor')
console.log(error3)
const error4 = new ReferenceError('This is a reference error from error constructor')
console.log(error4)

// โดยภายใน Error Object จะมี method อยู่ทั้งหมด 3 method คือ
// .name ใช้บอกว่า error นี้คือ error ประเภทอะไร
console.log(error4.name) // ReferenceError
// .message ใช้บอกว่า error นี้มีข้อความแจ้งเตือนเป็นอะไร
console.log(error4.message) // This is a reference error from error constructor
// .stack ใช้บอกว่า error นี้มีจุดผิดพลาดตรงตำแหน่งไหน
// console.log(error4.stack)

// vol.2 Exception Handling
// Exception เป็นคำที่ใช้ในการเรียกเออเรอร์ที่สามารถเกิดขึ้นได้ระหว่างที่โปรแกรมกำลังทำงานอยู่่
// เช่น เรียกใช้ตัวแปรที่ไม่มีอยู่จริง,เรียกใช้ฟังชั่นผิด,input ของ user ทำให้ทำงานต่อไม่ได้ เป็นต้น
// แต่ภายในความหมายของ javascript นั้น จะหมายถึงเหตุการณ์ที่รบกวน flow การทำงานหรือการประมวลผลของโปรแกรม
// ที่ส่วนใหญ่มักจะเกิดจากเออเรอร์ แล้วทำให้โปรแกรมนั้นหยุดการทำงานไปเลย

// Exception Handling คือระบบที่ใช้ในการป้องกันการเกิด Exception แล้วส่งผลต่อ
// การทำงานของโปรแกรม(โปรแกรมหยุดทำงาน) โดยส่วนใหญ่จะใช้กับ try catch finally statement

// vol.3 try...catch...finally + throw statement
// try...catch statement จะประกอบไปด้วย 2 ส่วนหลักๆคือ

// 1.ส่วน try เป็นส่วนที่ไว้ใช้ใส่การประมวลผลที่เพื่อใช้ในการเช็คว่าในระหว่างการรัน
// โปรแกรมจะมี Exception เกิดขึ้นหรือไม่ โดยปกติแล้วโค้ดใน try เราก็อยากให้มันทำงานปกติ
// แต่ถ้าภายใน try มีเออเรอร์เกิดขึ้นจากคำสั่งใดคำสั่งหนึ่ง ก็จะโยนไปให้อีกส่วนทำงานและรับมือกับเออเรอร์เหล่านั้น
// แต่ถ้าไม่มีเออเรอร์เกิดชึ้น ก็สามารถทำงานได้ปกติ

// 2.ส่วน catch เป็นส่วนที่จะรับช่วงต่อมาจาก try ถ้ามี Exception เกิดขึ้น
// แต่ถ้าภายใน try ไม่มี Exception ก็จะข้ามการทำงานในส่วนนี้ไปเลย
// โดย catch จะรับ argument 1 ตัวเข้าไปในส่วนของตัวเอง คือ Exception ที่เกิดขึ้นนั้นเอง
// และเมื่อเกิด Exception ขึ้น เงื่อนไขหรือโค้ดภายในตัวของ catch ก็จะทำงานไปด้วยนั้นเอง

// 3.ส่วน finally เป็นส่วนของโค้ดที่ไม่ว่าจะเกิดอะไรขึ้นกับ try หรือ catch
// ก็จะรันในส่วนนี้เสมอ และ finally ถ้าถือเป็นส่วนที่ท้ายที่สุดที่จะแสดงผลของ 
// try...catch...finally statement ด้วย ไม่ว่าภายใน try หรือ catch
// จะมี return หรือจะมี return ตัวด้านนอก statement ก็ตาม ถ้ามี return
// อยู่ภายใน finally ก็จะแสดงผลแค่ return ของ finally เท้านั้น ไม่แสดงผล return อื่นๆเลย

// ในทางด้านของ throw statement คือ การสร้าง error ที่เราสามารถกำหนดข้อผิดพลาดเองได้
// ถ้าให้พบกับเงื่อนไขที่ทำให้เกิดการ throw ขึ้น โปรแกรมจะหยุดทำงานทันที โดย throw มักจะใช้ร่วมกับ
// catch เสมอ คือ ถ้าเกิด throw = เกิด error = catch รับมือ

// ตัวอย่าง try...catch...finally + throw statement
console.log('Start Program')
try {
  let a = 10
  let b = -5
  if (a < 0 || b < 0)
    throw new RangeError('a or b values cannot be a negative number')
  let result = a + b
  console.log(result)
  console.log('End Calculation')
} catch (err) {
  //   console.log(err) //name: message, stack
  console.log(`${err.name}: ${err.message}`)
} finally {
  console.log('End Program')
}

// ลำดับการทำงานของ statement นี้คือ
// 1. console.log('Start Program')
// 2. ส่วนของ try โดยที่รับค่าตัวแปรเป็น a = 10,b = -5
// 3. ส่วนของ throw ภายใน try ที่ทำผ่านเงื่อนไข if
// ที่เช็คว่าถ้าซักตัวแปรหนึ่งเป็นค่าลบ จะสร้าง error เป็น RangeError
// แล้วแสดงข้อความว่า ('a or b values cannot be a negative number')
// แล้วข้ามการทำงานของโค้ดที่เหลือของ try ไปเลย เพราะมี Exception เกิดขึ้น
// throw จะจบการทำงานในส่วนนั้นทันที
// 4. ส่วนของ catch ที่ได้รับ error มาจาก throw ก็เลยทำให้โค้ดภายในตัว catch ทำงาน
// โดยจะแสดงผลเป็นการบอก user ว่า เออเรอร์คืออะไร ทำไหมถึงผิด
// 5. ส่วนของ finally ที่จะทำงานทุกครั้ง และเป็นโค้ดสุดท้ายที่จะแสดงผล

// Start Program
// RangeError: a or b values cannot be a negative number
// End Program

// นอกจากนี้ เรายังสามารถเขียนเป็น function ในการตรวจเช็ต error ได้ด้วย
// ว่าที่เราทำผิดเป็นเออเรอร์แบบไหน และมีสาเหตุจากอะไร ผ่านการใช้ try...catch... + function

// ตัวอย่าง try...catch... + function
try {
 // throw new RangeError('Out of range')
 throw new TypeError('Not a number')
} catch (e) {
 if (e instanceof TypeError) {
 handleTypeError(e)
 } else if (e instanceof RangeError) {
 handleRangeError(e)
 }
}
function handleTypeError(e) {
 console.log('Type Error:', e.message)
}
function handleRangeError(e) {
 console.log('Range Error:', e.message)
}

// ลำดับการทำงานของ statement นี้คือ
// 1.ส่วน try + throw ที่จะโยน error ไปให้ catch ทำงานต่อ
// 2.ส่วน catch ที่จะรับ error มาจาก throw โดยภายในตัว catch
// ถ้ามีเงื่อนไข if อยู่ โดยถ้า error ที่มาจาก throw เป็น TypeError
// ก็จะโยนไปให้ฟังก์ชั่น handleTypeError(e) ไปจัดการต่อ ส่วนถ้า error
// ที่มาจาก throw เป็น RangeError ก็จะโยนไปให้ฟังก์ชั่น handleRangeError(e) ไปจัดการต่อ
// (instanceof = เช็คว่าข้อมูลตัวนี้เป็นของหรือสมบัตินี้หรือไหม)
// 3.ส่วน function ที่รับงานมาจาก catch ตามเงื่อนไขที่กำหมดนั้นเอง

// vol.5 Golden Rules of Exception Handling
// 1. Throw Early (เจอข้อผิดพลาดให้รีบโยนทันที) เราควรตรวจพบหรือเจอปัญหาหรือ
// เออเรอร์ให้ไวที่สุดตั้งแต่ตอนที่มันแสดงผลขึ้นมา ถ้าระบบพบเจอเออเรอร์เหล่านั้นแล้ว ก็ให้ประมวลผล
// คำสั่ง throw เพื่อแจ้งเตือนว่าเกิดเออเรอร์นั้นแล้ว
// 2. Catch Late (ดักจับทีหลัง ในจุดที่จัดการได้) อย่าดักจับเออเรอร์ในโมดูลที่เป็น Low-level 
// เด็ดขาดไม่งั้นจะทำให้แสดงผลผิดพลาดได้ ควรปล่อยให้เออเรอร์ส่งต่อมาถึงระดับบนๆ เพื่อให้ส่วนควบคุมหลัก
// เป็นคนตัดสินใจจัดการในการรับมือ 
// Not Good
function bankAPI() {
 throw new Error('Bank server offline')
}
function paymentService() {
 try {
 bankAPI()
 } catch (e) {
 console.log('Payment failed')
 }
}
function orderService() {
 paymentService()
 console.log('Order completed')
}
orderService()

// Good
function bankAPI() {
 throw new Error('Bank server offline')
}
function paymentService() {
 bankAPI()
}
function orderService() {
 try {
 paymentService()
 console.log('Order completed')
 } catch (e) {
 console.log('Cannot complete order')
 console.log('Reason:', e.message)
 }
}
orderService()

// ตัวอย่างผลกระทบหากละเมิดกฎ: หากมีฟังก์ชันเชื่อมต่อระบบธนาคารล้มเหลว แล้วมีฟังก์ชันระดับล่างแอบใช้โค้ดดักจับ (catch) ปัญหาไว้โดยไม่ส่งผลลัพธ์แจ้งเตือนใดๆ 
// ฟังก์ชันจัดคำสั่งซื้อที่เป็นระดับบนสุดก็จะไม่ทราบเลยว่ามีปัญหาเกิดขึ้น และรายงานผลลัพธ์การสั่งซื้อให้ผู้ใช้ผิดพลาดว่า "Order completed" 
// ในทางที่ถูกต้อง: เมื่อฟังก์ชันเชื่อมต่อธนาคารใช้งานไม่ได้ ต้องแจ้งทันที (throw) จากนั้นปล่อยให้ฟังก์ชันคำสั่งซื้อรับรู้เหตุการณ์ และทำการจับปัญหานั้นเอาไว้ (catch) 
// เพื่อแสดงผลแก่ผู้ใช้งานได้ถูกต้องว่า "Cannot complete order" เนื่องจาก "Bank server offline"