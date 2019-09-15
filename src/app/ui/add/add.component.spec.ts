import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AddComponent } from './add.component';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpModule,RouterModule.forRoot([ { path: '', component: AddComponent }, ]),],
      providers:[FormsModule,HttpModule,{provide: APP_BASE_HREF, useValue : '/' }],
      declarations: [ AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
