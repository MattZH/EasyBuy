import { Component, ViewChild, Input } from '@angular/core';
import { SigninComponent } from './signin/signin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phone = '';
  userId = '';
  @ViewChild(SigninComponent) private signinComponent:SigninComponent;
  showSignin(){
    this.signinComponent.show();
  }
  eventHandler(info: string[]){
    this.phone = info[0];
    this.userId = info[1];
  }
  constructor () {
  }
}
