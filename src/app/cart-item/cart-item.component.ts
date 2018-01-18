import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input()
  cartItem : CartItem
  constructor(private cartService : CartService) { }

  ngOnInit() {

  }
  addNumber(){
    this.cartService.increaseCommodityNumByCartItem(this.cartItem)
  }
  minusNumber(){
    if(this.cartItem.count > 1){
      this.cartService.decreaseCommodityNum(this.cartItem)
    }else{
      alert('can not decrease more!');
    }
  }
  remove(){
    this.cartService.removeCommodity(this.cartItem)
  }
}
