import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TodoService} from '../../services/todo-Service';
import {id} from '@swimlane/ngx-charts/release/utils';
import {Todo} from './todo-interface';

@Component({

  selector: 'qs-todo',
  templateUrl:'./todo-list.page.html'
})
export class TodoListPage implements OnInit {


  todo$: Observable<Todo[]>;

  constructor (private todos: TodoService){

  }

  ngOnInit(): void {
    this.todo$ = this.todos.findTodo();
  }


}
