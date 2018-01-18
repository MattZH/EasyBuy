import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order';
import 'rxjs/add/operator/toPromise';
import { CartItem } from '../models/cart-item';

interface NewOrder{
  status:string
}

@Injectable()
export class OrderService {

  orders: Order[] = []

  constructor(public httpClient: HttpClient) {
   
  }
  // getOrders(phone:string) {
  //    this.httpClient.get<[Order]>('http://192.168.43.26:3000/v1/orders?phone=' + phone + '&&t='+ (new Date()).getTime().toString())
  //       .toPromise()
  //       .then(response => this.setOrders(response))
  //       .catch(this.handleError);
  // }

  setOrders(orders:Order[]){
    this.removeOrders();
    orders.forEach(element => {
        this.orders.push(element)
    })
  }

  removeOrders(){
    this.orders.splice(0,this.orders.length);
  }
  removeOrder(order: Order){
    this.orders.forEach(function(data,index,orders){
      if( data._id == order._id){
          orders.splice(index,1);
      }
    })
    // this.httpClient.delete('http://192.168.43.26:3000/v1/orders?_id=' + order._id + '&&t='+ (new Date()).getTime().toString())
    // .subscribe(
    //   data => {
    //     if(data[status] == 'failed'){
    //       alert('Delete failed!');
    //     }else{
    //     }
    //   },
    //   (err: HttpErrorResponse) => {
    //     if (err.error instanceof Error) {
    //       console.log('An error occurred:', err.error.message);
    //     } else {
    //       console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    //     }
    //   }
    // );
  }

  newOrder(phone:string,userId:string,name:string,total:number,cartItems: CartItem[]){
    let orderData = {
        '_id': this.randomNum(10000,20000).toString(),
        'userId':userId,
        'total': total,
        'name': name,
        'product': cartItems
    }
    this.setOrders([orderData] as Order[]);
    // this.httpClient.post<NewOrder>('http://192.168.43.26:3000/v1/orders?t='+ (new Date()).getTime().toString(),JSON.stringify(orderData),{
    //     headers: new HttpHeaders({
    //         'Content-type': 'application/json'
    //     })
    // }).subscribe(
    //     data => {
    //        if(data.status == 'ok'){
    //          this.getOrders(phone);
    //        }else{
    //          alert('Add order failed!');
    //        }
    //     },
    //     (err: HttpErrorResponse) => {
    //       if (err.error instanceof Error) {
    //         console.log('An error occurred:', err.error.message);
    //       } else {
    //         console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    //       }
    //     }
    //   );
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  randomNum(start, end){
    return Math.floor(Math.random() * (end - start) + start);
  }

}