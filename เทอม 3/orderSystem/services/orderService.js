import { Product } from '../models/Product.js';
import { Order } from '../models/Order.js';
function addItemToOrder(order,product,quantity) {
// Note !!

// order parameter
// order เกิดจากการสร้างจาก Order.js เป็น object ที่ประกอบไปด้วย
// id,customer = {},items = [],status = 'pending',createdAt
// โดย id = ลูกค้าคนที่เท่าไร,customer = ลูกค้าชื่ออะไร(object)
// items = array ของสินค้าที่สร้างจาก Product.js
// status = ตอนนี้คำสั่งซื้อนี้อยู่สถานะไหน และ createdAt = คำสั่งซื้อนี้สร้างเมื่อวันไหน


// product เกิดจากการอ้างอิงของสินค้าที่สร้างมาจาก Product.js ที่มีคุณสมบัติที่สืบทอดมาจาก
// การสร้างสินค้าผ่าน Product.js (ใช้งานฟังก์ชั่น increaseStock,decreaseStock,isAvailable ๆลๆ ได้)

// quantity ใช้บอกว่าคำสั่งซื้อนี้ ลูกค้าซื้อสินค้าชิ้นนี้ไปกี่ชิ้น

    if (!(product instanceof Product)) {
        throw new Error("Invalid Product")
    }
    if (!(order instanceof Order)) {
        throw new Error("Invalid Order")
    }
    // เช็คว่าทั้งสอนค้าและออเดอร์ที่รับมา เกิดจากการสร้างของ class Product กับ Order จริงไหม
    if (product.isAvailable() === false) {
        throw new Error("Product not available")
    }
    if (quantity <= 0){
        throw new Error("Invalid quantity")
    }

    if (product.stock < quantity) {
        // ดักจับกรณีคนซื้อสั่งของเกินกว่าที่มีในสต็อก
        throw new Error("Product out of stock")
    }
    // ถ้าสตอกไม่พอ หรือซื้อเกินกว่าที่สตอกมีก็จะโยนเออเรอร์บอกไปว่า สั่งซื้อไม่ได้
    
    // ใช้ isAvailable เช็คว่ามีของเหลืออยู่ไหม ร่วมกับการตรวจสอบว่า ลูกค้าซื้อเกินสตอกที่มีหรือเปล่า
    let already_have = order.items.find((eachvalue) => eachvalue.product.name === product.name)
    // ใช้ find() เพื่อหาว่าสินค้าที่เราใส่เข้าไปใน product มีในตะกร้า (order.items) อยู่แล้วหรือเปล่า
    // note !! 
    // eachvalue = {id,customer = {},items = [product: {id, name, price...}, quantity: จำนวน }],status = 'pending',createdAt}
        if(already_have){
            // ถ้าภายในประวัติมีการซื้อของชิ้นนี้อยู่แล้ว (already_have = true)
            already_have.quantity += quantity
            // ให้เพิ่มค่า quantity ของ already_have บวกไปตามที่เรากรอก
            // note !! 
            // already_have เก็บ Reference ของตัว order ไว้ ทำให้เมื่อเราบวกค่า quantity ไปแล้ว
            // ตัว order ก็จะอับเดตตามไปด้วย
        }
        else{
            // ถ้าภายในประวัติไม่มีการซื้อของชิ้นนี้อยู่ (already_have = false)
            let addin = {product,quantity}
            order.items.push(addin)
            // สร้าง object เก็บข้อมูลของสินค้าและการสั่งซื้ออันใหม่นี้ลงไป
            // แล้ว .push ลงไปเก็บไว้ภายใน order.items เป็นสินค้าชิ้นใหม่ที่ถูกซื้อของลูกค้าคนนั้น
        }
    return product.decreaseStock(quantity)
    // ใช้ decreaseStock ตัดสต็อกสินค้าของ product ตามจำนวนที่หยิบไป
    // ใช้ return ตรงนี้เพื่อให้จบการทำงานของฟังก์ชัน พร้อมกับส่งค่าผลลัพธ์ของสต็อกที่เหลือออกไป
}

function safeAddItemToOrder(order,product,quantity) {
    try {
        addItemToOrder(order,product,quantity)
        return {
            success: true,
            message: "Item added successfully",
            data: order
        }
    } 
    catch (error) {
        return {
            success: false,
            message: error.message,
            data: null
        }
    }
    finally{
        console.log("Add item Finished")
    }
}

function removeItemFromOrder(order,productId) {

// Note !!

// order parameter
// order เกิดจากการสร้างจาก Order.js เป็น object ที่ประกอบไปด้วย
// id,customer = {},items = [],status = 'pending',createdAt
// โดย id = ลูกค้าคนที่เท่าไร,customer = ลูกค้าชื่ออะไร(object)
// items = array ของสินค้าที่สร้างจาก Product.js
// status = ตอนนี้คำสั่งซื้อนี้อยู่สถานะไหน และ createdAt = คำสั่งซื้อนี้สร้างเมื่อวันไหน

// productId = รหัสของสินค้าที่เราอยากจะลบออกจากออเดอร์นั้น

    let item_id = order.items.findIndex((eachvalue) => eachvalue.product.id === productId)
    // ใช้ findIndex เพื่อหาว่าสินค้าที่มี id ตรงกับ productId อยู่ตำแหน่งที่เท่าไหร่ใน order
    // ถ้าเจอก็ให้ค่าเลข index ของสินค้าในก้อน order ตั้งแต่ 0-n
    // ถ้าไม่เจอจะให้ค่า -1 กลับมา 
    if (item_id >= 0) {
        // ถ้า findIndex เจอสินค้าภายใน order ไม่ว่าอยู่ตำแหน่งไหนก็ตาม
        let TargetToRemove = order.items[item_id]
        // สร้างตัวแปรในการเก็บสินค้าที่ต้องการลบออกจากประวัติการสั่งซื้อ ผ่านหาตำแหน่งผ่านผลที่ findIndex ให้มา
        // note !!

        // order.items = [product: {id, name, price...}, quantity: จำนวน }]
        // TargetToRemove Reference order.items

        TargetToRemove.product.increaseStock(TargetToRemove.quantity)
        // ให้สินค้านั้นเอา quantity ที่ลบมาจากการ addItemToOrder ไปบวกคืน
        // เข้าไปใน product ใหม่ ผ่านการใช้ increaseStock
        order.items.splice(item_id,1)
        // แล้วเอาข้อมูลของสินค้านั้นออกจากประวัติคำสั่งซื้อเลย โดยการลบตำแหน่งของ
        // ข้อมูลสินค้าออกจากก้อน order.items
    }
}

function updateItemQuantity(order,productId,quantity) {

// Note !!

// order parameter
// order เกิดจากการสร้างจาก Order.js เป็น object ที่ประกอบไปด้วย
// id,customer = {},items = [],status = 'pending',createdAt
// โดย id = ลูกค้าคนที่เท่าไร,customer = ลูกค้าชื่ออะไร(object)
// items = array ของสินค้าที่สร้างจาก Product.js
// status = ตอนนี้คำสั่งซื้อนี้อยู่สถานะไหน และ createdAt = คำสั่งซื้อนี้สร้างเมื่อวันไหน

// productId = รหัสของสินค้าที่เราอยากจะลบออกจากออเดอร์นั้น

// quantity ใช้บอกว่าคำสั่งซื้อนี้ ลูกค้าซื้อสินค้าชิ้นนี้ไปกี่ชิ้น ซึ้งเป็นยอดสุทธิหลังจากการผ่านการอัปเดตแล้ว

    let item_id = order.items.findIndex((eachvalue) => eachvalue.product.id === productId)
    // ใช้ findIndex() เพื่อหาว่าสินค้าที่เราใส่เข้าไปใน product มีในตะกร้า (order.items) อยู่แล้วหรือเปล่า และอยู่ตำแหน่งไหน
    // ถ้าเจอก็ให้ค่าเลข index ของสินค้าในก้อน order ตั้งแต่ 0-n
    // ถ้าไม่เจอจะให้ค่า -1 กลับมา 
    if (item_id >= 0) {
        let TargetToUpdate = order.items[item_id]
        // สร้างตัวแปรในการเก็บสินค้าที่ต้องการอัปเดตว่าซื้อเพิ่มหรือลดเท่าไรในประวัติการสั่งซื้อ 
        // ผ่านหาตำแหน่งผ่านผลที่ findIndex ให้มา
        // note !!

        // order.items = [product: {id, name, price...}, quantity: จำนวน }]
        // TargetToUpdate Reference order.items

        if((quantity - TargetToUpdate.quantity) > 0){
            // ถ้ายอดการซื้อใหม่มากกว่ายอดซื้อเก่า
            let difference = quantity - TargetToUpdate.quantity
            TargetToUpdate.product.decreaseStock(difference)
            // ตัวแปร difference = ค่าส่วนต่างของยอดใหม่กับยอดเก่า ว่ามีค่าเท่าไร
            // แล้วตัดสต็อกของสินค้า (มาจาก class Products)นั้นตามส่วนต่างที่คิดมา
            TargetToUpdate.quantity = quantity
            // แล้วอัปเดตยอดการซื้อ เป็นยอดใหม่ของลูกค้าลงไปในประวัติการสั่งซื้อ
        }
        else if(quantity === 0){
            // quantity === 0 ตีความได้ว่า ลูกค้าไม่ซื้อของนี้แล้ว
            removeItemFromOrder(order,productId)
            // ใช้ removeItemFromOrder เพื่อลบคำสั่งซื้อนั้นออกจากประวัติการซื้อ
        }
        else{
            // ถ้ายอดการซื้อใหม่น้อยกว่ายอดซื้อเก่า
            let difference = TargetToUpdate.quantity - quantity
            // ตัวแปร difference = ค่าส่วนต่างของยอดใหม่กับยอดเก่า ว่ามีค่าเท่าไร
            // แล้วไปเพิ่มค่าสต้อกสินค้า (มาจาก class Products)นั้นตามส่วนต่างที่คิดมา
            TargetToUpdate.product.increaseStock(difference)
            TargetToUpdate.quantity = quantity
        }   // แล้วอัปเดตยอดการซื้อ เป็นยอดใหม่ของลูกค้าลงไปในประวัติการสั่งซื้อ
    }
}

export {addItemToOrder,safeAddItemToOrder,removeItemFromOrder,updateItemQuantity}