import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
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
  @Input() cardClass: string;
  @Input() classHeader = false;
  cardToggle = 'expanded';
  cardClose = 'open';
  constructor() { }

  ngOnInit() {
  }

  toggleCard() {
    this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
  }

}
