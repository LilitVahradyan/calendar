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
  monthName: number;
  selectedMonth = new Date();

  constructor(
    public calendarSrv: CalendarService
  ) {}

  ngOnInit(): void {
    this.createMonth(this.calendarSrv.getCurrMonth());
    this.monthName = this.selectedMonth.setMonth(this.monthNumber)

  }
  createMonth(days: Array<{}>) {
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

    this.createMonth(this.calendarSrv.getMonth(this.monthNumber, this.year));
    this.monthName = this.selectedMonth.setMonth(this.monthNumber)
  }

  onPrevMonth(){
    this.monthNumber--;
  
    if (this.monthNumber < 0) {
      this.monthNumber = 11;
     this.year--
    
    }

    this.createMonth(this.calendarSrv.getMonth(this.monthNumber, this.year));  
    this.monthName = this.selectedMonth.setMonth(this.monthNumber)
 
  }

  getToday(){
    const date = new Date();
    return date.getDate();
  }
}




