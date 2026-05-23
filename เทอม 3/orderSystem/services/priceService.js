function calculateSubtotal(items) {
    let overall = 0
    // ตั้งตัวแปรไว้เก็บค่าราคารวมของแต่ละสินค้า
    for (const element of items) {
        let eachprice = element.product.getTotalPrice(element.quantity)
        // เอาตัวแปรมาเก็บค่าที่คิดราคาของแต่ละสินค้าภายใน order
        overall += eachprice
        // เอาราคาที่คิดได้ของชิ้นนั้น เก็บสะสมไว้จนครบทุกสินค้า
        
    }
    return overall // ส่งค่าราคารวมของทุกสินค้าออกไป
}

function calculateDiscount(subtotal,type,value) {
    let DiscountType = {
        percentage: (subtotal, value) => subtotal * value, 
        fixed: (subtotal, value) => value,                 
        noDiscount: (subtotal, value) => 0
    }
    // สร้าง object DiscountType ที่เก็บการลดแต่ละประเภทเอาไว้
    let whatDiscount = DiscountType[type] || DiscountType.noDiscount
    // whatDiscount จะไปดูว่าการลดที่ลูกค้าพิมพ์มามีภายใน object DiscountType ไหม
    // ถ้ามีก็จะแสดงผลคำนวนตามที่เรากำหนดไว้ ถ้าไม่มีก็จะให้แสดงผลคำนวนเป็น noDiscount
    // ซึ่งเป็นค่า default ของการคิดส่วนลด
    return whatDiscount(subtotal, value)
    // ถ้าเจอว่ามีสูตรตามที่มีอยู่ใน object DiscountType ก็จะส่งค่า subtotal, value
    // ไปคำนวนตามสูตรนั้น
}

function calculateTax(amount,taxRate) {
    return amount * taxRate
}

function calculateTotal(order, config) {
    let subtotal = calculateSubtotal(order.items)
    let discount = calculateDiscount(subtotal,config.discountType,config.discountValue)
    let from_discount = subtotal - discount
    let tax = calculateTax(from_discount,config.taxRate)
    let total = from_discount + tax
    return { subtotal,discount,tax,total }
}

export {calculateSubtotal,calculateDiscount,calculateTax,calculateTotal}