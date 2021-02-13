import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cards',
  templateUrl: './add-cards.component.html',
  styleUrls: ['./add-cards.component.scss']
})
export class AddCardsComponent implements OnInit {
  @Input() folder: string;

  constructor() { }

  ngOnInit(): void {
  }

}
