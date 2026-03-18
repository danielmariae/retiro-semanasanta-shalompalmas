import { Component } from '@angular/core';
import { staggerAnimation } from '../../shared/animations';

@Component({
  selector: 'app-info',
  animations: [staggerAnimation], // Se você tiver animações, adicione aqui
  imports: [],
  templateUrl: './info.html',
  styles: ``,
})
export class Info {}
