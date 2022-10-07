import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  list: any = [
    { 'todo': 'Task1', 'status': 'todo' },
    { 'todo': 'Task2', 'status': 'todo' },
    { 'todo': 'Task3', 'status': 'todo' },
    { 'todo': 'Task4', 'status': 'progress' },
    { 'todo': 'Task5', '`status`': 'complete' },
  ];
  isshow: boolean = false;
  event;
  inprogressisshow: boolean = false;
  task = new FormGroup({
    todo: new FormControl("", [Validators.required]),
    status: new FormControl("")
  })

  constructor() {

  }

  ngOnInit(): void {
  }

  addTodoList() {
    this.task.patchValue({
      status: "todo"
    })
    this.list.push(this.task.value);
    this.task.reset();
  }

  addinprogressTodoList() {
    this.task.patchValue({
      status: "progress"
    })
    this.list.push(this.task.value);
    console.log("inprogress", this.list);
    this.task.reset();
  }

  deletetodo(i: any) {
    console.log(i);
    this.list.splice(i, 1);
  }
  flag(event) {
    if (event) {
      this.isshow = true;
      return this.addTodoList;
    }
    else {
      false
    }
  }


}