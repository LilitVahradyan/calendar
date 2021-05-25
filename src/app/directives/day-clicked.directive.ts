import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDayClicked]'
})
export class DayClickedDirective {

 
  @HostBinding('style.border') border: string;
  
  @HostListener('click') Click(){
    this.border = '1px solid #3f51b5';
  };
  
  @HostListener('mouseleave') mouseLeave(){
    this.border = 'transparent'
  }

}
