import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo-Service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Todo} from './todo-interface';

@Component({
  selector: 'qs-todo-detail',
  templateUrl:'./todo-detail.page.html',
})
export class TodoDetailPage implements OnInit {


  todo$: Observable<Todo>;

  constructor (private todoService: TodoService,
                  private route: ActivatedRoute,
                  private router: Router) {

  }
  ngOnInit(): void {
    this.route.params.subscribe((params:{id: number}) => {
    this.todo$ = this.todoService.findTodoById(params.id);
  });
  }
  goback():void {
    this.router.navigate(['/dashboard']);
  }
}
