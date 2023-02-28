import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './services/todo.service';
import { TodoStore } from './state/todo.store';
import { TodoQuery } from './state/todo.query';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzInputModule,
    NzListModule,
    NzCheckboxModule,
    NzIconModule,
    NzTypographyModule,
    NzGridModule
  ],
  providers: [TodoService, TodoStore, TodoQuery],
  exports:[TodoComponent]
})
export class TodoListModule { }
