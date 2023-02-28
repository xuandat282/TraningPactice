import { Query } from "@datorama/akita";
import { Observable } from "rxjs";
import { TodoState, TodoStore } from "./todo.store";
import { Todo } from "../models/todo.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TodoQuery extends Query<TodoState> {
  constructor(protected override store: TodoStore) {
    super(store);
  }

  public get uncompletedTodos$(): Observable<Todo[]> {
    return this.select(state => state.todos.filter(todo => !todo.isCompleted));
  }

  public get completedTodos$(): Observable<Todo[]> {
    return this.select(state => state.todos.filter(todo => todo.isCompleted));
  }
}
