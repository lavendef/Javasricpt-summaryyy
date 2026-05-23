function filterOrdersByStatus(orders, status) {
    return orders.filter((eachorder) => eachorder.status === status)
    // ใช้ filter ในการกรองสถานะของแต่ละออเดอร์ว่า ออเดอร์ที่เป็นสถานะ
    // ที่เราสนใจมีอะไรบ้าง มาเก็บไว้ที่ฟังก์ชั่นนี้
}

import { calculateTotal } from "../services/pricingService"
function getHighValueOrders(orders, minTotal, config) {
    return orders.filter((eachorder) => calculateTotal(eachorder,config).total >= minTotal)
    // เราใช้ calculateTotal เพื่อคำนวนราคารวมของแต่ละสินค้าที่สั้งภายในออเดอร์
    // แล้วใช้ filter เพื่อตรวจเช็จว่าสินค้าที่เราซื้อชิ้นไหนบ้างเกินกว่าค่า minTotal ที่เรากำหนด
}

function searchOrdersByCustomer(orders, keyword) {
    return orders.filter((eachorder) =>
        eachorder.customer.name.toLowerCase().includes(keyword.toLowerCase())
    // ใช้ filter ในการกรองว่า ชืือที่เราอยากรู้มีอยู่ภายในออเดอร์ที่เราเก็บข้อมูลไว้ไหม
    // ถ้ามีก็จะแสดงผลมาให้เรา โดยปรับให้ทั้งสองเป็นตัวพิมพ์เล็ก เพื่อไม่ให้เกิด case sensitive
    )
}

function getCustomerNames(orders) {
    return orders.map((eachorder) => eachorder.customer.name)
    // ใช้ map เพื่อให้แสดงผลข้อมูลแค่ชื่อของออเดอร์นั้นเท่านั้น
}

function isValidOrderId(orderid) {
    let vaildcheck = /^O\d{3}$/
    // เป็นการเช็คเลขรหัสออเดอร์ที่ผ่านเกณณ์ว่า
    // 1.จะผ่านก็ต่อเมื่อ ต้องขึ้นต้น(^)ด้วย O ใหญ่เท่านั้น และ
    // 2.จะผ่านก็ต่อเมื่อ ต้องลงท้าย($)ด้วยเลข(\d)แค่ 3 ตัว ({3}) เท่านั้น
    // ไม่ใช่ธงไหนๆร่วมด้วย เพราะ i ทำให้ o เล็กผ่าน
    return vaildcheck.test(orderid)
}

function isValidCustomerName(name) {
    let namecheck = /^[a-zA-Z\s]+$/
    // เป็นการเช็คชื่อลูกค้าที่ผ่านเกณณ์ว่า
    // 1.จะผ่านก็ต่อเมื่อ ต้องขึ้นต้น(^)และลงท้าย($) ด้วยตัวพิมพ์เล็ก พิมพ์ใหญ่ และเว้นรวรรคเท่านั้น ร่วมกับ
    // 2.จากข้อ 1 ต้องผ่านอีกเงื่อนไขคือ ต้องมีตัวพิมพ์เล็ก พิมพ์ใหญ่ และเว้นรวรรค
    // อย่างน้อย 1 ตัวขึ้นไป (+) ในชื่อลูกค้า ถึงจะผ่านเกณณ์
    return namecheck.test(name)
}

function searchOrdersByCustomerRegex(orders, keyword) {
    if(keyword === undefined || keyword.length === 0){
        return []
    }
    // ถ้าไม่ได้ให้ keyword มา จะทำให้ regex bug ได้ เลยต้องคืนค่าเป็น
    // array เปล่าๆเพื่อบอกระบบว่า ยังไม่ได้ใส่ keyword มา
    let ordercheck = new RegExp(keyword,'i')
    // ต้องใช้ constructor ในการสร้าง regex เพราะถ้าเขียนตรงมันเป็นว่าไปหาคำว่า keyword ใน order แทน
    // ต้องใช้ธง i เผื่อลูกค้าพิมพ์ชื่อมาทั้งพิมพ์เล็กพิมพ์ใหญ่ ระบบก็ถือให้ผ่านหมด 
    return orders.filter((eachorder) => ordercheck.test(eachorder.customer.name))
    // ใช้เครื่องกรอง (.filter) วนเปิดดูออเดอร์ทีละใบ (eachorder) ในกล่อง orders
    // ถ้าเจอคำที่ซ่อนอยู่ (true) เครื่องกรอง .filter จะหยิบออเดอร์ใบนั้นไปเก็บไว้ใน Array ผลลัพธ์
}

export {filterOrdersByStatus,getHighValueOrders,searchOrdersByCustomer,
getCustomerNames,isValidOrderId,isValidCustomerName,isValidCustomerName,searchOrdersByCustomerRegex}