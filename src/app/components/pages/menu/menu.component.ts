import { Component , Input , OnInit} from '@angular/core';
interface carouselIamge{

  imageSrc :string;
  imageAlt:string;

}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit  {
  @Input() images: carouselIamge[]= []
  @Input() indicators = true;
  @Input() controls = true;

  selectedIndex = 0;

  ngOnInit(): void {
    
  }

  /* PROTOTYPE TEST  */
    espresso:boolean = true
    nonCoffee:boolean = false
    pasta:boolean = false
    pastries:boolean = false
    frappes:boolean = false
    selectedList = 1;

  //set index of image on dot or indicator
  selectImage(index:number):void{
    this.selectedIndex = index;
  }

  onPrevClick(){
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length -1;
      console.log("x?")
    }else {
      this.selectedIndex--;
      console.log("x?")
    }
  }

  onNextClick(){
    if(this.selectedIndex = this.images.length -1){
      this.selectedIndex = 0
      console.log("s?")
    }else {
      this.selectedIndex++;
      console.log("s?")
    }
  }




  /* test test prototype */

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
