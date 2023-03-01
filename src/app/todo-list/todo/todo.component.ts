import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  constructor(public todoService: TodoService) {}
  title: string = '';
  public onAddTodo(title: string): void {
    if (this.title.trim()) {
      this.todoService.addTodo(title);
      this.title = '';
    }
  }

  public onCompleteTodo(id: string): void {
    this.todoService.setCompleted(id);
  }

  public onRemoveTodo(id: string): void {
    this.todoService.removeTodo(id);
  }
}
