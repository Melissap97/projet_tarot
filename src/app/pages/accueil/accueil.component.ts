import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-basic',
  imports: [NgbCarouselModule],
  templateUrl: 'accueil.component.html',
})

export class AccueilComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
}
