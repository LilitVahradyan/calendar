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

  getMonthName(monthIndex: number)  {
    switch (monthIndex) {
      case 0:
        return "January";      
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return "";
    }
  }

  getWeekDay(weekInedx: number) {
    switch (weekInedx) {
      case 0:
        return "Sun"; 
      case 1:
        return "Mon"; 
      case 2:
        return "Tue"; 
      case 3:
        return "Wed"; 
      case 4:
        return "Thu"; 
      case 5:
        return "Fri"; 
      case 6:
        return "Sat"; 
      default:
        return "";
    }
  }

  getDays(dayNumber: number, monthIndex: number, year: number) {
    let day = new Day();
    day.monthIndex = monthIndex;
    day.month = this.getMonthName(monthIndex);
    day.number = dayNumber;
    day.year = this.currYear; 
    day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay(); 
    //console.log(day.weekDayNumber); // 0 - 6
    day.weekDay = this.getWeekDay(day.weekDayNumber);

    return day;
  }
}


class Day {
  number: number;
  year: number;
  month: string;
  monthIndex: number;
  weekDay: string;
  weekDayNumber: number;
}