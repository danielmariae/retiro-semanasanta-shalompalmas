import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { mobileMenuAnimation } from '../../shared/animations';

@Component({
  selector: 'app-header',
  animations: [mobileMenuAnimation], // Se você tiver animações, adicione aqui
  imports: [CommonModule],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Função auxiliar para retornar o estado da animação
  get menuState() {
    return this.isMenuOpen ? 'open' : 'closed';
  }
}
