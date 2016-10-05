import { Injectable } from '@angular/core';

import { Todo } from '../../models/todos/todo';

@Injectable()
export class TodoService {
    todos: Todo[] = [];
    finishedTodos: Todo[] = [];

    constructor() {
        this.todos = [
            new Todo('Dummy Todo 1', 'Dummy todo 1 text', 'Low', 'warning'),
            new Todo('Dummy Todo 2', 'Dummy todo 2 text', 'Low', 'danger'),
            new Todo('Take the beer days ticket', 'Hey, don\'t forget to go to the Technomania and take that ticket to beer days!! ', 'High', 'warning'),
            new Todo('Dummy Todo 4', 'Dummy todo 4 text', 'Medium', 'success'),
            new Todo('Learn Angular 2', 'When you get home from work, rest, and try to read some Angular 2 learning material, it will come in handy with this new project!', 'High', 'warning'),
            new Todo('Omnis eruditi ea has.', 'Omnis eruditi ea has. Has ea posse habemus. Rebum reprimique ex mea, impetus intellegat et cum, ei duo hinc laudem appetere.', 'Medium', 'success'),
            new Todo('Lorem ipsum!!', `Lorem ipsum dolor sit amet, no pri euismod intellegat, rebum prompta mea cu. 
                Nam ne mutat concludaturque, ex vix natum delicatissimi. Id clita constituto ius, an autem epicurei lucilius vis, 
                vim vocibus mandamus consequuntur ne. Pro facer gubergren ut. Vel molestie deserunt cu, dicant alterum phaedrum vel ex.`, 'Low', 'warning')
        ]
     }

     getTodos() {
         return this.todos;
     }

     getFinishedTodos() {

     }
}