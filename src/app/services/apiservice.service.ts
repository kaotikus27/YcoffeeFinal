import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { featureProducts } from '../components/models/products';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiFeatureProduct = "http://localhost:3000/featureProducts"
 
  constructor(
    private _http:HttpClient
  ) { }



    /* all existing data */
    getAllFeatureProduct(){
      return this._http.get<featureProducts[]>(this.apiFeatureProduct);
    }

}
