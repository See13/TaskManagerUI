import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
@Injectable()
export class DateTimeFormatter {
constructor(private datePipe: DatePipe) { }
transformsDate(date) {
return this.datePipe.transform(date, 'dd/MM/yyyy');
}
}
