import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { About } from "../../components/about/about";
import { Testimonials } from "../../components/testimonials/testimonials";
import { Moments } from "../../components/moments/moments";
import { Registration } from "../../components/registration/registration";
import { Info } from "../../components/info/info";
import { Schedule } from "../../components/schedule/schedule";
import { staggerAnimation } from '../../shared/animations';

@Component({
  selector: 'app-landing-page',
  imports: [Hero, About, Testimonials, Moments, Schedule, Registration, Info],
  animations: [staggerAnimation],
  templateUrl: './landing-page.html',
  styles: ``,
})
export class LandingPage {}
