import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  static styles = [
    'app-color1',
    'app-color2',
    'app-color3',
    'app-color4',
    'app-color5'
  ];

  public style = CardComponent.styles[0];
  public showTranslate = false;
  public timerId = null;

  @Input() card;

  static getRandomIntExclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is inclusive and the minimum is inclusive
  }

  ngOnInit() {
    this.style = CardComponent.styles[CardComponent.getRandomIntExclusive(0, CardComponent.styles.length)];
  }

  toggleText() {
    this.showTranslate = !this.showTranslate;

    if ( this.timerId ) {
      clearTimeout(this.timerId);
      this.timerId = null;
    } else {
      const handler = () => { this.showTranslate = !this.showTranslate; this.timerId = null; };
      this.timerId = setTimeout(handler, 10000);
    }
  }
}
