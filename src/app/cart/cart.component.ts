import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component'
import { CartItem } from '../models/cart-item';
import { Price } from '../models/price'
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isToggled = true;
  totalPrice : Price;
  cartItems : CartItem[];

  @Input()
  userId = '';

  @Input()
  phone = '';

  name = '';

  constructor(private cartService : CartService, private orderService : OrderService) { }

  ngOnInit() {
    this.cartItems = this.cartService.cartItems;
    this.totalPrice = this.cartService.totalPrice;
  }

  toggle(){
    this.isToggled = !this.isToggled
  }

  newOrder(){
    if(this.cartItems.length > 0){
      if(this.name != ''){
        if(this.userId != ''){
          this.orderService.newOrder(this.phone,this.userId,this.name,this.totalPrice.total,this.cartService.cartItems)
        }else{
          alert('Please signin!')
        }    
      }else{
        alert('Address empty!')
      }
    }else{
      alert('Cart empty!')
    }
  }
}

