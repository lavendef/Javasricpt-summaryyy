// W10_<014>_<Channarongdet Wongyot>
console.log("Hello")
console.log("This is a week 11 summary")
console.log("Let's sa go")
console.log("This .js file will summarize and cover only what professor have been discussed in class and the accompanying slides provided")
console.log("because I want to thoroughly understand each topic U taught in depth.")
console.log("----------------------------------------------------------------------------")

// Vol.1 Modules

// Tree-Shaking คืออะไร

// Tree-Shaking คือคำที่ใช้ในการเรียกการจัดการโค้ดที่ไม่ได้ใช่งาน
// ภายในชิ้นงานของเราให้เหลือแค่โค้ดที่ได้ใช้งานจริงๆเท่านั้น โดยมักจะใช้
// กระบวนการร่วมกับคำสั่ง im/export เพื่อทำการบอกว่าภายในไฟส๋
// javascript หนึ่งๆ จะมึโมดูล(โค้ดส่วนย่อยๆ)ส่วนไหนบ้างที่ต้องนำไป
// ส่งออกเพื่อใช้งานต่อในไฟส์ javascript อื่นๆ เพื่อทำให้ไฟส์งาน javascript
// ตัวหลักมีโค้ดที่ดูง่าย เป็นระเบียบและมีขนาดไฟส์เล็กที่สุดที่เป็นไปได้

// Vol.1-1 CommonJS Modules
// ในการส่งออกโมดูลของโค้ด(ในที่นี้ หมายถึง ส่วนของโค้ดที่เป็นฟังก์ชั่นในการคำนวนหรือวิเคาระห์อะไรบางอย่างในแอปหรือเว็บของเรา)
// ที่ต้องไปรวมกันเป็นระบบของแอปหรือเว็บไซต์หนึ่งๆ เพื่อทำให้แอป/เว็บเหล่านั้นมีการทำงานตามที่เราหวังไว้
// เราสามารถทำได้สองรูปแบบในปัจจุบัน คือ CommonJS Modules กับ ES Modules


// CommonJS Modules เป็นหนึ่งในการส่งโมดูลที่เป็นมาตรฐานของ javascript
// โดยประกอบไปด้วยโค้ดสองส่วนคือ
// 1. module.exports ใช้ในการบอกว่าเราจะส่งโมดูลไหนออกไปหาไฟส์อื่นๆ เพื่อนำไปใช้งานต่อ
// โดยสามารถเขียนได้สองรูปแบบคือ

// 1.1 module.exports = ชื่อโมดูลที่จะส่ง โดยในแบบแรกนี้ ทางด้านโค้ดปลายทาง
// จะสามารถเปลี่ยนชื่อเรียกของโมดูลที่เราอยากจะให้ใช้งานได้

// 1.2 module.exports = { ชื่อโมดูลที่จะส่ง } โดยในแบบที่สองนี้ module.exports 
// จะทำการส่งโมดูลของเราออกเป็น object เมื่อเราต้องการจะใช้งานโมดูล
// ก็ต้องทำการ Destructuring แต่ละโมดูลก่อนการใช้งาน เลยทำให้ไม่สามารถเปลี่ยนชื่อเรียกได้
// เหมาะสำหรับการส่งออกไปหลายๆโมดูลในครั้งเดียว

// 2. require() เป็นการบอกไฟส์ javascript ปลายทางว่า โมดูลที่เราเอามาใช้งาน
// ในไฟส์ปลายทางเนี่ย มาจากไฟส์ javascript ไฟส์ไหน โดนระบุเป็น path ของไฟส์นั้น
// ลงไปในวงเล็บของ require 

// ตัวอย่างการใช้งานจะอยู่ในไฟส์ export-test เด้ออออ

// require() ver.1 (export by default)
// const Hello = require('./(test)for-export.js')
// console.log(Hello("Sainam"))

// Hi Sainam. How are you today?
// สามารถเปลี่ยนชื่อเรียกของโมดูลที่เราอยากจะให้ใช้งานได้ จาก sayHi --> Hello


// require() ver.2 (export by object format)
// const {tellme} = require('./(test)for-export.js')
// console.log(tellme('hate someone today'))

// You tell me that you hate someone today !!
// ไม่สามารถเปลี่ยนชื่อโมดูลได้ เพราะถ้าเปลี่ยนชื่อ ถ้าทำเป็นเหมือนกับว่า
// ชื่อใหม่จะเก็บ referance จากโมดูลที่เรานำเข้ามา ทำให้เรียกใช้งานลำบาก


// require() ver.2-5 (export 1-n program unit)
// const {sayhi,tellme} = require('./(test)for-export.js')
// console.log(sayhi('Chara'))
// console.log(tellme('hate yellow flower'))

// Hi Chara. How are you today?
// You tell me that you hate yellow flower !!


// Vol.1-2 ES Modules

// ES Modules เป็นหนึ่งในการส่งโมดูลอีกรูปแบบหนึ่งที่มักจะใช้งานกันในปัจจุบัน
// โดยประกอบไปด้วยโค้ดสองส่วนคือ

// export = ส่วนที่เราอยากจะส่งออกไปใช้ในไฟส์ js อื่นๆและ
// import = เป็นการบอกไฟส์ javascript ปลายทางว่า โมดูลที่เราเอามาใช้งาน
// ในไฟส์ปลายทางเนี่ย มาจากไฟส์ javascript ไฟส์ไหน

// 1. export สามารถเขีนยได้ทั้งหมดสามรูปแบบหลักๆ คือ

// 1.1 export default or export {module as default}
// จะมีคุณสมบัติเหมือน module.exports ที่ส่งแบบ default คือ ทางด้านโค้ดปลายทาง
// จะสามารถเปลี่ยนชื่อเรียกของโมดูลที่เราอยากจะให้ใช้งานได้ โดยการเขียบแบบแรกนี้
// ภายในไฟส์หนึ่งๆ จะมี export default ได้แค่ 1 โมดูลเท่านั้น มักจะใช้ในไฟส์ที่
// เราเขียนฟังก์ชั่นที่ทำแค่หน้าที่หลักหน้าที่เดียว

// 1.2 export module or export {module,...(n module)}
// จะมีคุณสมบัติเหมือน module.exports ที่ส่งแบบ object คือ ต้องทำการ Destructuring แต่ละโมดูลก่อนการใช้งาน 
// เลยทำให้ไม่สามารถเปลี่ยนชื่อเรียกได้และสามารถส่งออกไปหลายๆโมดูลในครั้งเดียวได้

// !!(การเขียนรวบทุกๆโมดูลในครั้งเดียวจะใช้ export {module,...(n module)}
// ส่วน export module จะส่งหลายๆตัวก็ให้เอา export ไปนำหน้าโมดูลนัั้น)

// 1.3 export {module as somename}
// มีคุณสมบัติที่เหมือนกับ 1.2 แค่เป็นการบอกว่า ถ้าอีกไฟส์จะใช้โมดูลนี้
// ต้องใช้ชื่อฟังก์ชั่นนี้(somename)แทนนะ 


// 2.import สามารถเขีนยได้ทั้งหมดสามรูปแบบหลักๆ คือ
// !! (การระบุเป็น path ของไฟส์ต้นทาง จะใช้ร่วมกับคำสั่ง from 'path'
// เลยมีโครงสร้างคล่าวๆคือ import module from 'path')

// 2.1 import ver.1 (export default or export {module as default})
// import lettellthem from './(test)for-export.js'
// console.log(lettellthem('really hate them'))

// I might tell them that I really hate them
// สามารถเปลี่ยนชื่อเรียกของโมดูลที่เราอยากจะให้ใช้งานได้ จาก tellme 2 --> lettellthem


// 2.2 import ver.2 (Named Export (export module or export {module,...(n module)}))
// import { callback } from './(test)for-export.js'
// console.log(callback("i might go to jail"))


// I heard that you say i might go to jail,WTF is happening??
// ไม่สามารถเปลี่ยนชื่อโมดูลได้ เพราะถ้าเปลี่ยนชื่อ ถ้าทำเป็นเหมือนกับว่า
// ชื่อใหม่จะเก็บ referance จากโมดูลที่เรานำเข้ามา ทำให้เรียกใช้งานลำบาก


// 2.3 import ver.3 (export {module as somename})
import { mighttell } from './(test)for-export.js'
// import ก็สามารถเปลี่ยนชื่อโมดูลที่เราเอามาได้เหมือนกันผ่านการเขียนนี้
import { callback as whathappen } from './(test)for-export.js'
console.log(mighttell('like her'))
console.log(whathappen('I have some pet today'))

// I might tell them that I like her
// I heard that you say I have some pet today,WTF is happening??

// จบการสรุปแล้วนะครับ แบบฝึกหัดต้องดูอีกไฟล์นะครับ (⸝⸝⍢⸝⸝) ෆ