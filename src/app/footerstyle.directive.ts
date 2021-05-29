import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appFooterstyle]'
})
export class FooterstyleDirective {

  constructor(private fs:ElementRef) {
fs.nativeElement.style.color="#616161"
  }

}
