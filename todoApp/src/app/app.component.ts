import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Arif';
  items = [
    {description: 'Breakfast', action: 'No'},
    {description: 'Coding', action: 'Yes'},
    {description: 'Exercise', action: 'No'},
    {description: 'Reading', action: 'No'}
  ]
}
