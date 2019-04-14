import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
id : number
todo : Todo
  constructor(
    private todoService : TodoDataService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.todoService.getTodo('Nikolas', this.id).subscribe(
      data=>{
          this.todo=data;
           new DatePipe('en-US').transform(this.todo.targetDate, 'yyyy-MM-dd');
          
      }
    )
  }

  saveTodo(){
    this.todoService.updateTodo('Nikolas',this.id,this.todo).subscribe(
      data=>{
        console.log(data)
      }
    )
  }

}
