import { trigger, style, animate, transition } from '@angular/animations';

export const slideInFromLeftAnimation = trigger('slideInFromLeft', [
  transition(':enter', [
    style({
      transform: 'translateX(-100%)',
      opacity: 0
    }),
    animate('1000ms ease-out', style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ]),
]);