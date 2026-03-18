import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const staggerAnimation = trigger('staggerFade', [
  transition(':enter', [
    // Usamos o seletocador 'div, h1, h2, h3, p, img, blockquote' ou simplesmente '*'
    // O '*' dentro do query seleciona todos os elementos filhos que entram no DOM
    query('*', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(100, [
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);