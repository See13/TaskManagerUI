import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';
import { Task } from './models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Task Manager';}
