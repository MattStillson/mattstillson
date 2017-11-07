import { Component, OnInit } from '@angular/core';
import { trigger, stagger, style, transition, animate, keyframes, query } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('image', [
      transition(':enter', [
        query('*', [
          style({ transform: 'translateX(200px)', opacity: 0 }),
          stagger(100, [
            animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style('*'))
          ])
        ])
      ])
    ])]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
