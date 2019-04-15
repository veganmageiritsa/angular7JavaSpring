import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  
  constructor(
    private http:HttpClient
  ) { }

  getAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodo(username: any ,id: any) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/delete/${id}`)
  }

  getTodo(username: any ,id: any) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username: string ,id: number ,todo: Todo) {
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo)
  }

  createTodo(username: string ,id: number,todo :Todo) {
    return this.http.post(`http://localhost:8080/users/${username}/todos/${id}`,todo)
  }

  
}
