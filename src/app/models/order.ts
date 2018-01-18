import { CartItem } from '../models/cart-item'
export class Order {
    _id: string;
    userId: string;
    total: number;
    name: string;
    product: CartItem[]
}