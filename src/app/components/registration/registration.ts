import { Component } from '@angular/core';
import { staggerAnimation } from '../../shared/animations';

@Component({
  selector: 'app-registration',
  animations: [staggerAnimation], // Se você tiver animações, adicione aqui
  imports: [],
  templateUrl: './registration.html',
  styles: ``,
})
export class Registration {}
