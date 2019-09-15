import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';
import { Task } from '../models/task';
import { SharedService } from './shared.service';

let dbcount;
let service: SharedService;
describe('SharedService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientModule],
      providers: [
        HttpModule,
        HttpClientModule,
        SharedService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
  );
  it('Service should be created', () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });

  it('Adding record', () => {
    const item: Task = {
      // taskid: "Task30",
      parentid: 'ParentTask31',
      task: 'Task33',
      startdate: '2009-11-12T00:00:00.000+0000',
      enddate: '2010-11-12T00:00:00.000+0000',
      priority: 12
    };
    const service: SharedService = TestBed.get(SharedService);
    service.GetListTask().subscribe(r => {
      dbcount = r.length;
      console.log('r length,*************************', r.length);
      service.AddTask(item).subscribe(addData => {
        expect(addData.task).toEqual(item.task);
      });
    });
  });

  it('Get all Task', () => {
    const service: SharedService = TestBed.get(SharedService);
    service.GetListTask().subscribe(r => {
      console.log(
        ' length,*************************================',
        r.length
      );
      expect(r.length).toEqual(dbcount);
    });
  });

  it('End Task', () => {
    const item: Task = {
      taskid: '51',
      parentid: 'ParentTask2',
      task: 'Task4',
      startdate: '2009-11-12T00:00:00.000+0000',
      enddate: '2010-11-12T00:00:00.000+0000',
      priority: 7,
      isTaskEnded: true
    };
    const service: SharedService = TestBed.get(SharedService);
    service.EndTask(item.taskid, item).subscribe(r => {
      console.log('EndTask.......,', r, item);
      expect(r.taskid).toEqual(parseInt(item['taskid']));
    });
  });
  it('Deleting record', () => {
    const taskid = '48';
    const service: SharedService = TestBed.get(SharedService);
    service.DeleteTask(taskid).subscribe(rId => {
      console.log('delete.......,', rId);
      expect(rId).toEqual(parseInt(taskid));
    });
  });

  it('Edit Task', () => {
    const item: Task = {
      taskid: '57',
      task: 'Test edit Service',
      parentid: 'ParentTask2',
      priority: 17,
      startdate: '2009-11-12T00:00:00.000+0000',
      enddate: '2010-11-12T00:00:00.000+0000',
      isTaskEnded: false
    };
    const service: SharedService = TestBed.get(SharedService);
    service.UpdateTask(item).subscribe(r => {
      expect(r['taskid']).toEqual(parseInt(item.taskid));
    });
  });
});
