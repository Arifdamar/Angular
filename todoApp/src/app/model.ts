export class Model {
    user;
    items;

    constructor(){
        this.user = 'Arif';
        this.items = [
            new TodoItem('Breakfast', false),
            new TodoItem('Coding', true),
            new TodoItem('Exercise', false),
            new TodoItem('Reading', false)
          ];
    }
}

export class TodoItem {
    description: string;
    action: string;

    constructor(description, action){
        this.description = description;
        this.action = action;
    }
}