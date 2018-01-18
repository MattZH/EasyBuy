import { Component, Input, Output, EventEmitter, OnInit, Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common//http';
import { OrderService } from '../services/order.service'
import 'rxjs/add/operator/toPromise';

interface userId {
  _id: string;
}
interface NewUser {
  id: string;
  status: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  phone = '';
  userId = '';
  isActive = false;
  @Output()
  protected onSignin = new EventEmitter<string[]>();
  show(): void{
    this.isActive = true;
  }
  signin(): void{
    this.userId = '1';
    this.orderService.removeOrders();
    this.onSignin.emit([this.phone,this.userId])

    this.isActive = false;
  }

  constructor(private http: HttpClient, private orderService: OrderService) { }

  ngOnInit() {
  }

}
