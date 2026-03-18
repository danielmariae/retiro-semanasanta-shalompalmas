import { Component } from '@angular/core';
import { staggerAnimation } from '../../shared/animations';

@Component({
  selector: 'app-hero',
  imports: [],
  animations: [staggerAnimation], // <--- Importante aqui também!
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {}
