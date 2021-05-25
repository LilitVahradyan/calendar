import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {
  currYear: number;
  currMonthIndex: number;
 

  constructor() {
    let date = new Date();
    this.currYear = date.getFullYear(); // 2021
    this.currMonthIndex = date.getMonth(); // 4
    //console.log(this.currMonthIndex);
    
  }

  getCurrMonth(){
    return this.getMonth(this.currMonthIndex, this.currYear); // 4 2021
  }

 getMonth(monthIndex: number, year: number){
    let days = [];
    let firstday = this.createDay(1, monthIndex, year);
    // console.log(firstday);
    
    for (let i = 1; i < firstday.weekDayNumber; i++) {
      days.push({
        weekDayNumber: i,
        monthIndex: monthIndex,
        year: year,
      });

    }
    days.push(firstday);

    let countDays = new Date(year, monthIndex, 0).getDate();
    for (let i = 2; i <= countDays; i++) {
      days.push(this.createDay(i, monthIndex, year));
    }
    //console.log("days", days);
    
    return days;
  }

  getMonthName(monthIndex: number)  {
    switch (monthIndex) {
      case 1:
        return "January";      
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";

      default:
        return "";
    }
  }

  getWeekDay(weekInedx: number) {
    switch (weekInedx) {
      case 1:
        return "Sun"; 
      case 2:
        return "Mon"; 
      case 3:
        return "Tue"; 
      case 4:
        return "Wed"; 
      case 5:
        return "Thu"; 
      case 6:
        return "Fri"; 
      case 7:
        return "Sat"; 

      default:
        return "";
    }
  }

  createDay(dayNumber: number, monthIndex: number, year: number) {
    let day = new Day();
    day.monthIndex = monthIndex;
    // console.log(day.monthIndex); // 4
    day.month = this.getMonthName(monthIndex);
    // console.log(day.month); // May
    day.number = dayNumber;
    //console.log(day.number); // 1 - 31  
    day.year = this.currYear; // 2021
    day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay(); // 2021 4 1
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