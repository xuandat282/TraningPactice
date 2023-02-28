import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TodoStore } from "../state/todo.store";
import { Todo } from "../models/todo.model";
import { TodoQuery } from "../state/todo.query";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  public todos: Todo[] = [];

  constructor(private todoStore: TodoStore, private todoQuery: TodoQuery) {}

  public get uncompletedTodos$(): Observable<Todo[]> {
    return this.todoQuery.uncompletedTodos$;
  }

  public get completedTodos$(): Observable<Todo[]> {
    return this.todoQuery.completedTodos$;
  }

  public addTodo(title: string): void {
    this.todoStore.update(state => {
      const id = state.todos.length
        ? `${parseInt(state.todos[state.todos.length - 1].id, 10) + 1}`
        : "1";
      return {
        ...state,
        todos: [...state.todos, { id, title, isCompleted: false }]
      };
    });
  }

  public removeTodo(id: string): void {
    this.todoStore.update(state => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  }

  public setCompleted(id: string): void {
    this.todoStore.update(state => ({
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = true;
        }
        return todo;
      })
    }));
  }
}
