class Order {
    constructor({id,customer = {},items = [],status = 'pending',createdAt}) {
        this.id = id
        this.customer = customer
        this.status = status
        this.items = items
        this.createdAt = createdAt ? new Date(createdAt) : new Date()
        // เช็คว่าภายในการสร้าง Order มีการใส่เวลาในช่อง createdAt หรือเปล่า
        // ถ้ามีในสร้างวันใหม่ตามที่ createdAt กรอกมา ถ้าไม่มีให้สร้างเป็นค่าของวันนี้แทน
    }
    getOrderAge(){
        // คำนวนว่าออเดอร์นี้สร้างมาแล้วกี่วัน จากวันที่เรารันคำสั่งนี้
        let datenow = new Date() // ดึงเวลา ณ ปัจจุบัน
        let howlong = datenow - this.createdAt
        // การลบเวลาจะเป็นการนำ millisec ของแต่ละ Date มาลบกัน เป็นผลต่าง millisec ออกมา
        let from_whatday = Math.floor(howlong / 86400000)
        // เอาผลต่างที่ได้มาแปลงค่าเป็นวัน ผ่านการหารด้วย 86400000 (1 วัน = 86400000 millisec)
        // ถ้าได้เป็นทศนิยมก็ให้ปัดเศษลง
        return from_whatday
    }
    isRecentOrder(days){
       return this.getOrderAge() <= days
       // ให้ getOrderAge() ไปเอาค่าวันที่ที่สร้างว่าห่างจากเวลาที่รัน getOrderAge()
       // มาเทียบกับวันที่เรากำหนดว่า ถ้าน้อยกว่าหรือเท่ากับช่วงวันที่เรากำหนด จะถือว่าเป็นออเดอร์ที่เกิดล่าสุด
       // ถ้ามันห่างมากกว่าวันที่เรากำหนด ก็ถือว่าเป็นออเดอร์ที่ยังค้างไว้อยู่
    }
    getCreatedAtByTimezone(timeZone){
        try {
            let timein_timezone = this.createdAt.toLocaleString('en-US',{timeZone})
            return timein_timezone
            // ทำการแปลงการแสดงผลของ Date เป็นตาม timezone ที่เราใส่
        } catch (error) {
            return this.createdAt.toLocaleString()
            // ถ้าหากว่าใส่ timeZone แปลกๆมาหรือไม่ใส่มาเลย ก็ให้แสดงผลตามเวลาของเครื่อง
            // ตามที่เครื่องของเราอยู่ในท้องถิ่นไหน ก็จะแสดงผลตามนั้น
        }
    }
}

export { Order }