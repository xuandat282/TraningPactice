import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @ViewChild("todoInput", { static: false })
  todoInput!: ElementRef;

  constructor(public todoService: TodoService) {}

  public onAddTodo(title: string): void {
    this.todoService.addTodo(title);
  }

  public onCompleteTodo(id: string): void {
    this.todoService.setCompleted(id);
  }

  public onRemoveTodo(id: string): void {
    this.todoService.removeTodo(id);
  }
}
