import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';

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

export const mobileMenuAnimation = trigger('mobileMenu', [
  // Estado fechado: altura zero e escondido
  state('closed', style({
    height: '0px',
    opacity: 0,
    overflow: 'hidden'
  })),
  // Estado aberto: altura automática e visível
  state('open', style({
    height: '*', // '*' calcula a altura automaticamente
    opacity: 1
  })),
  // Transição de fechado para aberto
  transition('closed => open', [
    // Primeiro, anima a abertura do container
    animate('300ms ease-out'),
    // Depois, anima os itens de dentro em cascata (stagger)
    query('li', [
      style({ opacity: 0, transform: 'translateY(-10px)' }),
      stagger(80, [
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ]),
  // Transição de aberto para fechado (mais rápida)
  transition('open => closed', [
    animate('200ms ease-in')
  ])
]);