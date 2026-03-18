import { Component } from '@angular/core';
import { staggerAnimation } from '../../shared/animations';

@Component({
  selector: 'app-testimonials',
  animations: [staggerAnimation], // Se você tiver animações, adicione aqui
  imports: [],
  templateUrl: './testimonials.html',
  styles: ``,
})
export class Testimonials {}
