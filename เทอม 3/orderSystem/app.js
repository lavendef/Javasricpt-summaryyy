import { Product } from './models/Product.js'
import { Order } from './models/Order.js'
 
import {
  addItemToOrder,
  removeItemFromOrder,
  updateItemQuantity
} from './services/orderService.js'
import { calculateTotal } from './services/priceService.js'
 
 
 
// Create products
const laptop = new Product({
  id: 'P001',
  name: 'Laptop',
  price: 30000,
  category: 'Electronics',
  stock: 10
})
 
const mouse = new Product({
  id: 'P002',
  name: 'Mouse',
  price: 500,
  category: 'Accessories',
  stock: 50
})
 
const ipad = new Product({
  id: 'P003',
  name: 'Ipad',
  price: 55000,
  category: 'Accessories',
  stock: 100
})
 
// Create order
const order = new Order({
  id: 'O001',
  customer: { name: 'Alice' }
})
 
// Add items
addItemToOrder(order, laptop, 1)
addItemToOrder(order, mouse, 2)
addItemToOrder(order, ipad, 1)
removeItemFromOrder(order, 'P002')
updateItemQuantity(order, 'P003', 3)
