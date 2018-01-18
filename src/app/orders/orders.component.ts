import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service'
import { Order } from '../models/order'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:Order[]
  selectedOrder:Order

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders = this.orderService.orders;
  }

  selectOrder(order:Order){
    this.selectedOrder = order
  }

  deleteOrder(){
    console.log(this.selectedOrder);
    this.orderService.removeOrder(this.selectedOrder);
  }

}
