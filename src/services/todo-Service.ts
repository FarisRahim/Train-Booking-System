import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Todo} from '../app/dashboard/todo-interface';
import {Injectable} from '@angular/core';
import {getResponseURL} from '@angular/http/src/http_utils';
import * as url from 'url';

@Injectable ()

export class TodoService {

  constructor(private http: HttpClient) {}

    findTodo(): Observable<Todo[]>{
      return this.http.get('https://jsonplaceholder.typicode.com/todos' ).map(res=><Todo[]>res);
      }
     findTodoById(id:number): Observable<Todo>{
      return this.http.get('https//jsonplaceholder.typicode.com/todos/' + id).map(res=><Todo>res);
      }
}
