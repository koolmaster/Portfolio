import { Component, OnInit, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { cardToggle, cardClose } from './card-animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [cardToggle, cardClose],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() cardClass: string;
  @Input() iconClass: string;
  @Input() classGrid = false;
  cardToggle = 'expanded';
  cardClose = 'open';
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  toggleCard() {
    this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
  }

}
