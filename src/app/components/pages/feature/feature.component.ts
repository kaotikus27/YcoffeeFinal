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

  espresso:boolean = true
  nonCoffee:boolean = false
  pasta:boolean = false
  pastries:boolean = false
  frappes:boolean = false

  selectedList = 1;

  ChangeCategory(e: any){
    this.selectedValue.category
    console.log("clicekd")

  }

  showEspresso(){
    this.espresso = true;
    this.nonCoffee = false;
    this.pasta = false;
    this.pastries = false;
    this.frappes = false;
    this.selectedList = 1;
  }

  showNonCoffee(){
    this.espresso = false;
    this.nonCoffee = true;
    this.pasta = false;
    this.pastries = false;
    this.frappes = false;
    this.selectedList = 2;
  }

  showPasta(){
    this.espresso = false;
    this.nonCoffee = false;
    this.pasta = true;
    this.pastries = false;
    this.frappes = false;
    this.selectedList = 3;
  }
  showPastries(){
    this.espresso = false;
    this.nonCoffee = false;
    this.pasta = false;
    this.pastries = true;
    this.frappes = false;
    this.selectedList = 4;
  }
  showFrappes(){
    this.espresso = false;
    this.nonCoffee = false;
    this.pasta = false;
    this.pastries = false;
    this.frappes = true;
    this.selectedList = 5;
  }
 
  


  

}
