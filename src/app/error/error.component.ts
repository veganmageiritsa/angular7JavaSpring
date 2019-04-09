import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage:String ='Something Went Wrong, Page You are looking does not exist';
  constructor() { }

  ngOnInit() {
  }

}
