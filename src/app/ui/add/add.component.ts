import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { SharedService } from '../../services/shared.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { DateTimeFormatter } from '../../services/DateFormat';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
item: Task = {};
parenttaskList: Array<Task>;
addTaskForm: NgForm;

  constructor(private _router: Router, private shareservice: SharedService,
    private dateformat: DateTimeFormatter) {
    this.GetParentList();

   }

  ngOnInit() {

  }
  GetParentList() {
    // debugger;
    this.shareservice.GetParentListTask().subscribe(res => {
     // debugger;
      this.parenttaskList = res;
    });
  }
  Add() {
    // debugger;
    this.shareservice.CreateTask(this.item).subscribe(res => {
      this.item = res;
      this._router.navigateByUrl('/view');
    });
  }

reset(form?: NgForm ) {
  form.reset();
  this.addTaskForm.reset();
}
}
