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

}
