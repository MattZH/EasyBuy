import { Component, OnInit } from '@angular/core';
import { CommodityService } from '../services/commodity.service';
import { CartService } from '../services/cart.service';
import { Commodity } from '../models/commodity'

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent implements OnInit {

  commodities:Commodity[]

  constructor(private commodityService:CommodityService,private cartService : CartService) { }

  ngOnInit() {
   this.commodityService.getCommodities().then(commodities => this.commodities = commodities);
  }

  addToCart(commodity:Commodity){
    if(this.cartService.fetchCommodityFromCart(commodity)){
      this.cartService.increaseCommodityNumByCommodity(commodity);
    }else{
      this.cartService.addCommodity(commodity);
    }
  }
}
