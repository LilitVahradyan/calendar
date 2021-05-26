import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {
  currYear: number;
  currMonth: number;
 
  getCurrMonth(){
    let date = new Date();
    this.currYear = date.getFullYear();
    this.currMonth = date.getMonth(); 
    return this.getMonth(this.currMonth, this.currYear);
  }

 getMonth(monthIndex: number, year: number){
    let days = [];
    let firstday = this.getDays(1, monthIndex, year);
   
    if(firstday.weekDayNumber === 0){
      for (let i = 1; i <= 6; i++)
        days.push({ 
          weekDayNumber: i,
          monthIndex: monthIndex,
          year: year,
        });
    }

    for (let i = 1; i < firstday.weekDayNumber; i++) {
      days.push({ 
        weekDayNumber: i,
        monthIndex: monthIndex,
        year: year,
      });
    }
    
    days.push(firstday);

    let countDays = new Date(year, monthIndex+1, 0).getDate();
    for (let i = 2; i <= countDays; i++) {
      days.push(this.getDays(i, monthIndex, year));
    }
    return days;
  }

 

  getDays(dayNumber: number, monthIndex: number, year: number) {
    let day = new Day();
    day.monthIndex = monthIndex;
    day.number = dayNumber;
    day.year = year; 
    day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay(); 
    
    return day;
  }
}


class Day {
  number: number;
  year: number;
  monthIndex: number;
  weekDayNumber: number;
}