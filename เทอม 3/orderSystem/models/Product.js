class Product {
    constructor({id,name,price,category,stock}) {
        this.id = id
        this.name = name
        this.price = price
        this.category = category
        this.stock = stock
    }

    increaseStock(quantity){
        return this.stock += quantity
    }

    decreaseStock(quantity){
        return this.stock -= quantity
    }

    isAvailable(){
        return this.stock > 0
    }

    getTotalPrice(quantity){
        let totalPrice = this.price * quantity
        return totalPrice
    }
}

export { Product }