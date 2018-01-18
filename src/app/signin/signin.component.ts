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
    this.http.get<[userId]>('http://192.168.43.26:3000/v1/users?phone=' + this.phone + '&&t='+ (new Date()).getTime().toString())
    .subscribe(
      data => {
        if(data.length > 0){
          this.userId = data[0]._id;
          this.orderService.getOrders(this.phone)
        }else{
          this.orderService.removeOrders();
          this.addUser();
        }
        this.onSignin.emit([this.phone,this.userId])
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
    this.isActive = false;
  }
  addUser(){
    var body = {
      phone: this.phone
    }
    this.http.post<NewUser>('http://192.168.43.26:3000/v1/users',JSON.stringify(body),{
      headers: new HttpHeaders({
          'Content-type': 'application/json'
      })
    }).subscribe(
      data => {
        if(data.status == 'ok'){
          this.userId = data.id;
          this.onSignin.emit([this.phone,this.userId])
          console.log("User add success "+this.userId);
        }else{
          console.log('User add fail');
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }

  constructor(private http: HttpClient, private orderService: OrderService) { }

  ngOnInit() {
  }

}
