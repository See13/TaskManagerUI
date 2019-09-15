import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './ui/add/add.component';
import { UpdateComponent } from './ui/update/update.component';
import { ViewComponent } from './ui/view/view.component';
import { FilterPipe, ViewFilter, ViewFilter1, ViewFilter2, ViewFilter3 } from './pipes/filter.pipe';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { SharedService } from './services/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { PagerService } from './services/page.service';
import { DateTimeFormatter } from './services/DateFormat';
import { DatePipe } from '@angular/common';


const appRoutes: Routes = [
  {path: 'add', component: AddComponent},
  {path: 'view', component: ViewComponent},
  {path: 'update', component: UpdateComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    AddComponent
    ,
    UpdateComponent,
    ViewComponent,
    FilterPipe,
    ViewFilter,
    ViewFilter1,
    ViewFilter2,
    ViewFilter3
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot()
  ],
  providers: [SharedService, PagerService,
    DateTimeFormatter, DatePipe],
  bootstrap: [AppComponent],

})
export class AppModule { }
