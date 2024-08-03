import { AfterViewInit, Component, ElementRef, Renderer2, viewChild, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-btn',
  standalone: true,
  templateUrl: './contact-btn.component.html',
  styleUrls: ['./contact-btn.component.scss'],
  imports: [
    MatIconModule
  ]
})
export class ContactBtnComponent implements AfterViewInit{

  // @ViewChild('btnToggle') btn?: MatButton;
btn = viewChild<ElementRef>('btnToggle');


  constructor(private renderer2: Renderer2){}


  ngAfterViewInit(): void {
      this.activeMenu()
  }

  activeMenu() {
    // const btnMenu = this.btn?._elementRef.nativeElement;

    const btnToggle = this.btn()?.nativeElement;

    this.renderer2.listen(btnToggle, "click", () => {

      if(btnToggle.classList.contains('active')) {
        this.renderer2.removeClass(btnToggle, 'active');
      } else {
        this.renderer2.addClass(btnToggle, 'active');

      }

    });
  }

}
