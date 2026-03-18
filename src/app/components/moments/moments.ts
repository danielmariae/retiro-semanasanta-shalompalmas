import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { staggerAnimation } from '../../shared/animations';

@Component({
  selector: 'app-moments',
  standalone: true,
  animations: [staggerAnimation], // <--- Importante aqui também
  imports: [CarouselModule], // Certifique-se de importar o módulo do carrossel aqui
  templateUrl: './moments.html'
})
export class Moments {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    },
    nav: false
  };

  images = [
    { url: 'momento1.jpg', alt: 'Louvor' },
    { url: 'momento2.jpg', alt: 'Alegria' },
    { url: 'momento3.jpg', alt: 'Oração' },
    { url: 'momento4.jpg', alt: 'Amor de Deus' }
  ];
}