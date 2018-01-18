import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgSemanticModule } from "ng-semantic";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdComponent } from './ad/ad.component';
import { CommoditiesComponent } from './commodities/commodities.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { SigninComponent } from './signin/signin.component'
import { CartItemComponent } from './cart-item/cart-item.component';

import { CommodityService } from './services/commodity.service';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    AdComponent,
    CommoditiesComponent,
    CartComponent,
    OrdersComponent,
    SigninComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    NgSemanticModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [CommodityService, CartService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }