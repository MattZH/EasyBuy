import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commodity } from '../models/commodity'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommodityService {
  private commoditiesUrl = 'api/commoditites';  // URL to web api

  constructor(public httpClient: HttpClient) {
   
  }
  getCommodities(): Promise<Commodity[]> {
    return this.httpClient.get(this.commoditiesUrl)
               .toPromise()
               .then(response => response as Commodity[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}