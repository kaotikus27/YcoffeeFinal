import { Component , Input , OnInit} from '@angular/core';
import { ApiserviceService } from '../../../services/apiservice.service';
import { featureProducts } from '../../models/products';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent implements OnInit  {
  
  constructor(
    private productService:ApiserviceService
  ){}

  featureProduct:featureProducts[]=[];
  productCategory:any;
  selectedValue:any;


  ngOnInit(): void {
    interval(1000)
    .pipe(switchMap(()=>  this.productService.getAllFeatureProduct()))
    .subscribe((data)=>{
      this.featureProduct = data;
  })
    
  }

  ChangeCategory(e: any){
    this.selectedValue.category
    console.log("clicekd")

  }

  


  

}
