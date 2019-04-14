import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id : number,
    public description :string,
    public done : boolean,
    public targetDate : Date
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos=[]
  message : string
//  todos=[
//    new Todo (1,'Learn To Dance',false,new Date()),
//    new Todo (2,'Learn Angular',false,new Date()),
//    new Todo (3,'Kill Them All',false,new Date()),
//  ]

constructor( private todoDataService :TodoDataService,
  private router : Router) { }

  ngOnInit() {
         this.getTodos();
  }

  getTodos(){
    this.todoDataService.getAllTodos('Nikolas').subscribe(
      response=> {
        this.todos=response;
      }
    )
  }

  deleteTodo(id: any){
       this.todoDataService.deleteTodo('Nikolas',id).subscribe(
         response=>{
           this.message=`Delete of Todo ${id} Succesfull`
           this.getTodos();
         }
       )
  }

  updateTodo(id: any){
this.router.navigate(['todos',id])
    // this.todoDataService.updateTodo('Nikolas',id).subscribe(
    //   response=>{
    //     this.message=`Delete of Todo ${id} Succesfull`
    //     this.getTodos();
    //   }
    // )
}
}
