import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public data;
  public cards1 = []; cards2 = []; cards3 = [];

  static getRandomIntExclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is inclusive and the minimum is inclusive
  }

  constructor() {
    this.getData();
  }

  ngOnInit() {
    this.fillOutData();
  }

  fillOutData() {
    const sortMethod = (a, b) => a.sourceText.split(' ').length < b.sourceText.split(' ').length ? 1 : -1;

    const cards = this.data.slice();
    // fill out cards1
    for (let i = 0; i < BodyComponent.getRandomIntExclusive(3, 5); i++) {
      this.cards1.push(cards.splice(BodyComponent.getRandomIntExclusive(0, cards.length), 1)[0]);
    }

    this.cards1.sort(sortMethod);

    // fill out cards
    for (let i = 0; i < cards.length / 2 + 1; i++) {
      this.cards2.push(cards.splice(BodyComponent.getRandomIntExclusive(0, cards.length), 1)[0]);
    }

    this.cards2.sort(sortMethod);

    // fill out cards3
    for (let i = 0; i < cards.length; i++) {
      this.cards3.push(cards.splice(BodyComponent.getRandomIntExclusive(0, cards.length), 1)[0]);
    }

    this.cards3.sort(sortMethod);
  }

  deleteCard(cards, index) {
    cards.splice(index, 1);
  }

  getData() {
    this.data = [
      {
        theme: 'Conversation',
        sourceText: 'Do you speak a language other than English?',
        translation: 'Говоришь ли ты на другом языке кроме английского?'
      },
      {
        theme: 'Eating out',
        sourceText: 'Excuse me. We would like to order, please.',
        translation: 'Извините, мы бы хотели сделать заказ.'
      },
      {
        theme: 'Eating out',
        sourceText: 'A table for two, please.',
        translation: 'Столик на двоих, пожалуйста.'
      },
      {
        theme: 'Eating out',
        sourceText: 'Is there a house specialty?',
        translation: 'Есть ли у заведения фирменное блюдо?'
      },
      {
        theme: 'Eating out',
        sourceText: 'Goodbye, please come again.',
        translation: 'До свидания, приходите ещë.'
      },
      {
        theme: 'Eating out',
        sourceText: 'Excuse me, could you bring some more sugar, please?',
        translation: 'Извините, могли бы вы принести сахар, пожалуйста.'
      },
      {
        theme: 'At the station',
        sourceText: 'Where can I buy a bus ticket?',
        translation: 'Где я могу купить билет на автобус?'
      },
      {
        theme: 'At the station',
        sourceText: 'Three tickets, please.',
        translation: 'Три билета, пожалуйста.'
      },
      {
        theme: 'At the station',
        sourceText: 'I would like to reserve a seat.',
        translation: 'Я хочу забронировать место.'
      },
      {
        theme: 'Travel',
        sourceText: 'Could you please show me where it is on the map?',
        translation: 'Могли бы вы, пожалуйста, показать мне это на карте?'
      },
      {
        theme: 'Travel',
        sourceText: 'Is it far from here?',
        translation: 'Это далеко отсюда?'
      },
      {
        theme: 'Travel',
        sourceText: 'Go straight and then turn right.',
        translation: 'Идите прямо, а затем поверните направо.'
      },
      {
        theme: 'At the doctor',
        sourceText: 'I need a sick note. It has gotten worse.',
        translation: 'Мне нужна медицинская справка. Мне стало хуже.'
      },
      {
        theme: 'At the hotel',
        sourceText: 'The heating does not work and my neighbour is too loud.',
        translation: 'Тут не работает отопление и мой сосед слишком шумный.'
      },
      {
        theme: 'At the hotel',
        sourceText: 'I would like to change my room, because I requested a room with a view.',
        translation: 'Я хочу поменять свой номер, поскольку я просил комнату с красивым видом.'
      },
      {
        theme: 'At the hotel',
        sourceText: 'I want to make a reservation for the room.',
        translation: 'Я хочу забронировать номер.'
      },
      {
        theme: 'At the shopping mall',
        sourceText: 'Can I try it on?',
        translation: 'Можно я это примерю?'
      },
      {
        theme: 'At the shopping mall',
        sourceText: 'I would like another color.',
        translation: 'Я бы хотел другой цвет.'
      },
      {
        theme: 'At the shopping mall',
        sourceText: 'Where is the cashdesk?',
        translation: 'Где касса?'
      },
      {
        theme: 'At the shopping mall',
        sourceText: 'I find it too expensive.',
        translation: 'Я считаю, что это слишком дорого.'
      },
      {
        theme: 'At the shopping mall',
        sourceText: 'I would like to return my purchase and get a refund.',
        translation: 'Я хочу вернуть свою покупку и получить деньги обратно.'
      }
    ];
  }
}
