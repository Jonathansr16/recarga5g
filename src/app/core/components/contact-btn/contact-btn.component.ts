import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-contact-btn',
  templateUrl: './contact-btn.component.html',
  styleUrls: ['./contact-btn.component.scss']
})
export class ContactBtnComponent implements AfterViewInit{

  @ViewChild('btnToggle') btn?: MatButton;

  constructor(private renderer2: Renderer2){}


  ngAfterViewInit(): void {
      this.activeMenu()
  }

  activeMenu() {
    const btnMenu = this.btn?._elementRef.nativeElement;

    this.renderer2.listen(btnMenu, "click", () => {

      if(btnMenu.classList.contains('active')) {
        this.renderer2.removeClass(btnMenu, 'active');
      } else {
        this.renderer2.addClass(btnMenu, 'active');

      }

    });
  }

}
