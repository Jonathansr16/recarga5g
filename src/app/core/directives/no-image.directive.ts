import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appNoImage]'
})
export class NoImageDirective {

  constructor(private elementRef: ElementRef) { }


  @HostListener('error')
  onloadImgDefault(): void {
    const element = this.elementRef.nativeElement;
  console.log(element);
    element.src = 'assets/img/noImage.jpg';
  }
 
}
