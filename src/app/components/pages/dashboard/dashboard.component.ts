import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
 /* test test */
    images=[
      {
        imageSrc: '../../../../assets/images/macchiato.jpg',
        imageAlt:'nature1',
      },
      {
        imageSrc: '../../../../assets/images/americano.jpg',
        imageAlt:'nature2',
      },
      {
        imageSrc: '../../../../assets/images/matcha.jpg',
        imageAlt:'nature3',
      }
    ]
}
