import { Pipe, PipeTransform,NgModule } from '@angular/core';
import { Task } from '../models/task';
import { DatePipe } from '@angular/common';


@NgModule({
    imports:        [],
    declarations:   [],
    exports:        [],
})

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

@Pipe(
  {
      name:'TaskFilter'
  }
)
export class ViewFilter implements PipeTransform{
  transform(Task: Task[],searchTask:string):Task[]{
      if(!Task ||!searchTask)
      {
          return Task;
      }
     // debugger;
      return Task.filter(task=>task.task.toLowerCase().indexOf(searchTask.toLowerCase())!==-1)
   }
}

@Pipe(
  {
      name:'TaskFilter1'
  }
)
export class ViewFilter1 implements PipeTransform{
  transform(Task: Task[],searchParentTask:string):Task[]{
      if(!Task ||!searchParentTask)
      {
          return Task;
      }
     //debugger;
     return Task.filter(task=>task.task.toLowerCase().indexOf(searchParentTask.toLowerCase())!==-1)
    }
}

@Pipe(
  {
      name:'TaskFilter2'
  }
)
export class ViewFilter2 implements PipeTransform{
  transform(Task: Task[],searchfrom:number):Task[]{
      if(!Task ||!searchfrom)
      {
          return Task;
      }
      return Task.filter(task=>task.priority >= searchfrom)
  }
}

@Pipe(
  {
      name:'TaskFilter3'
  }
)
export class ViewFilter3 implements PipeTransform{
  transform(Task: Task[],searchto:number):Task[]{
      if(!Task ||!searchto)
      {
          return Task;
      }
      return Task.filter(task=>task.priority <= searchto);
  }
}

