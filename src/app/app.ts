import { Component, signal } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { LandingPage } from "./pages/landing-page/landing-page";
import { Header } from "./components/header/header";
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  imports: [Footer, LandingPage, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('retiro-shalom');
}
