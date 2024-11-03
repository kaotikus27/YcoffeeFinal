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

    // items to loop
    selectedCoffee: { [key: string]: boolean } = {
      americano: true,
      latte: false,
      vanillaLatte: false,
      caramelLatte: false,
      hazelnutLatte: false,
      spanishLatte: false,
      cafeLatte: false,
      caramelMacchiato: false,
      saltedCaramelLatte: false,
      brownSugarLatte: false,
      white: false,
      chocolateLatte: false,
      matchaLatte: false,
      thaiMilkTea: false,
      caramelFrappe: false,
      vanillaFrappe: false,
      hazelnutFrappe: false,
      mochaFrappe: false,
      matchaFrappe: false,
      chocoFrappe: false,
      classicBeefLasgna: false,
      tunaPestoPenne: false,
      cheesyMacaroni: false,   
      butterCroissant: false,
      painAuChocolat: false,
      chunkyCookies: false,
      cinnamonRoll: false,
    };

   


    
/* ============================================================= */

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
  setMenu(selected: number) {
    this.espresso = selected === 1;
    this.nonCoffee = selected === 2;
    this.pasta = selected === 3;
    this.pastries = selected === 4;
    this.frappes = selected === 5;
    this.selectedList = selected;
  }

  setCoffeeSelection(coffeeType: string) {
    Object.keys(this.selectedCoffee).forEach(key => {
      this.selectedCoffee[key] = key === coffeeType;
      console.log(this.selectedCoffee)
    });
  }

}
