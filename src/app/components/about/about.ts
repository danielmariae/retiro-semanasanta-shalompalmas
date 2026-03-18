import { Component } from '@angular/core';
import { staggerAnimation } from '../../shared/animations';

@Component({
  selector: 'app-about',
  imports: [],
  animations: [staggerAnimation], // <--- Importante aqui também
  templateUrl: './about.html',
  styles: ``,
})
export class About {
  animationState = 'hidden'; // Começa escondido

  onVisible() {
    this.animationState = 'visible'; // Muda para visível quando o observer disparar
  }
}
