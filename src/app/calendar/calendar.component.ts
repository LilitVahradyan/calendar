import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{
  weekDays = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"];
  month = [];
  monthNumber: number;
  year: number;
  monthName = '';
  
  constructor(
    public calendarSrv: CalendarService
  ) {}

  ngOnInit(): void {
   this.setMonth(this.calendarSrv.getCurrMonth());
    this.monthName = this.calendarSrv.getMonthName(this.monthNumber);

  }
  setMonth(days: Array<{}>) {
    this.month = days;
    this.monthNumber = this.month[0].monthIndex;
    this.year = this.month[0].year;

    return days
  }

  onNextMonth() {
    this.monthNumber++;
   
    if (this.monthNumber === 12) {
      this.monthNumber = 0;
      this.year++;
    }

    this.setMonth(this.calendarSrv.getMonth(this.monthNumber, this.year));
    this.monthName = this.calendarSrv.getMonthName(this.monthNumber)
  }

  onPrevMonth(){
    this.monthNumber--;

    if (this.monthNumber < 0) {
      this.monthNumber = 11;
      this.year--;
    }

    this.setMonth(this.calendarSrv.getMonth(this.monthNumber, this.year));
    this.monthName = this.calendarSrv.getMonthName(this.monthNumber)
  }

  getToday(){
    const date = new Date();
    return date.getDate();
  }
}


