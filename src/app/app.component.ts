import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Cards', url: '/folder/Cards', icon: 'card-outline'
    },
    {
      title: 'Settings', url: '/folder/Settings', icon: 'settings-outline'
    }
  ];
  constructor() { }
}
