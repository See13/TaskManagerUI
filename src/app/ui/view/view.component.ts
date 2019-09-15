import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/task';
import { SharedService } from '../../services/shared.service';
import { PagerService } from '../../services/page.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  list: Task[] = [];
  list1: Task[] = [];
  startdate: Date;
  enddate: Date;
  PriFrom: number;
  PriTo: number;
  searchTask: string;
  searchfrom: string;
  searchto: string;
  SearchParentTask: string;
  errormsg: string;
  task: Task = {};
  item: Task = {};
  taskList: Array<Task>;
  filterdArrayByDate: Task[] = new Array();
  // public disabled: boolean = false
  pager: any = {};
  pagedItems: Task[] = [];
  page: number = 1;
  constructor(
    private _router: Router,
    private pagerService: PagerService,
    private sharedservice: SharedService
  ) {
    this.GetList();
    this.item = new Task();
    this.sharedservice.GetListTask().subscribe(i => (this.list = i));
    this.sharedservice.GetListTask().subscribe(i => (this.pagedItems = i));
  }

  ngOnInit() {}
  setPage(page) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.taskList.length, page);

    // get current page of items
    this.pagedItems = this.taskList.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
  Edit(taskid: string) {
    this.sharedservice.IDs = taskid;
    console.log('in the edit' + taskid);
    this._router.navigateByUrl('/update');
  }

  GetList() {
    this.sharedservice.GetListTask().subscribe(res => {
      this.taskList = res;
      this.setPage(this.page);
      // this._router.navigateByUrl("view");
    });
  }
  Delete(ID: string) {
    // debugger;
    this.sharedservice.DeleteTask(ID).subscribe(() => {
      this.GetList();
    });
  }

  END(task) {
    task.isTaskEnded = true;
    this.sharedservice.EndTask(task.taskId, task).subscribe(() => {
      this.GetList();
    });
  }
  SearchByParentTask(PTask:string)
  {
     //debugger;
    this.pagedItems=this.list.filter(i=>i.parent_task.toUpperCase().indexOf(PTask.toUpperCase()));
   }
  SearchBySDate(ssdate: Date) {
    if (ssdate !== undefined) {
      this.pagedItems = this.list.filter(i =>
        i.startDate
          .toString()
          .toUpperCase()
          .startsWith(ssdate.toString().toUpperCase())
      );
    }
  }

  SearchByEDate(eedate: Date) {
    if (eedate !== undefined && eedate != null) {
      this.pagedItems = this.list.filter(i =>
        i.endDate
          .toString()
          .toUpperCase()
          .startsWith(eedate.toString().toUpperCase())
      );
    }
  }
  searchByPriorityFrom(pri: number) {
    this.PriFrom = pri;
    this.pagedItems = this.list.filter(i =>
      i.priority.toString().startsWith(pri.toString())
    );
    console.log('priority:' + this.pagedItems);
  }

  searchByPriorityTo(pri: number) {
    this.pagedItems = this.list.filter(
      i =>
        i.priority.toString() >= this.PriFrom.toString() &&
        i.priority.toString() <= pri.toString()
    );
  }
}
