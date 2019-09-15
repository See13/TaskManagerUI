import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule,Routes} from '@angular/router';
import {RouterTestingModule } from '@angular/router/testing';
import { ViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,HttpModule,RouterModule,RouterTestingModule.withRoutes(
               [{path: '', component: ViewComponent}, {path: 'view', component: ViewComponent}]
               )],
      providers:[FormsModule,HttpModule,RouterModule,RouterTestingModule],
      declarations: [ ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
