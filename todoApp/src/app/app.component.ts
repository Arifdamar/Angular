import { Component } from '@angular/core';
import { Model, TodoItem } from './model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplayedAll = false;

  getName() {
    return this.model.user;
  }

  getItems() {
    if(this.isDisplayedAll){
      return this.model.items;
    }
    else{
      return this.model.items.filter(item => item.action == false);
    }
  }

  addItem(value) {
    if(value!=""){ 
      this.model.items.push(new TodoItem(value, false));
    }
  }
}
