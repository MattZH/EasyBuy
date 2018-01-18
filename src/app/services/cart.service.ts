import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { CartItem } from '../models/cart-item'
import { Commodity } from '../models/commodity'
import { Price } from '../models/price'
import 'rxjs/add/operator/toPromise';
@Injectable()
export class CartService {

  cartItems : CartItem[] = []

  totalPrice : Price = { total : 0 };

  constructor(public httpClient: HttpClient) {
   
  }

  getCartItems(){
      return this.cartItems;
  }
  getTotalPrice(){
      return this.totalPrice;
  }

  fetchCommodityFromCart(commodity:Commodity): Boolean{
    // console.log(JSON.stringify(commodity))
    var flag = false
    this.cartItems.forEach(element => {
        if( element._id == commodity._id){
            //购物车中已存在当前商品
            flag = true
        }
    });
    return flag;
  }

  addCommodity(commodity:Commodity){
    this.cartItems.push({
        _id : commodity._id,
        name : commodity.name,
        count : 1,
        picture : commodity.picture,
        price : commodity.price
    })
    this.calculateTotalPrice();
  }

  
    increaseCommodityNumByCommodity(commodity:Commodity){
        this.cartItems.forEach(element => {
          if( element._id == commodity._id){
              element.count += 1;
            }
        });
        this.calculateTotalPrice();
    }
    increaseCommodityNumByCartItem(cartItem:CartItem){
        this.cartItems.forEach(element => {
          if( element._id == cartItem._id){
              element.count += 1;
            }
        });
        this.calculateTotalPrice();
    }
    
    decreaseCommodityNum(cartItem:CartItem){
        this.cartItems.forEach(element => {
            if( element._id == cartItem._id){
                element.count -= 1;
            }
        });
        this.calculateTotalPrice();
    }
    
    removeCommodity(cartItem:CartItem){
        this.cartItems.forEach(function(data,index,cartItems){
            if( data._id == cartItem._id){
                cartItems.splice(index,1);
            }
        })
        this.calculateTotalPrice();
    }

    calculateTotalPrice(){
        this.totalPrice.total = 0;
        this.cartItems.forEach(element => {
            this.totalPrice.total += element.price*element.count
        })
        // console.log(this.totalPrice);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}