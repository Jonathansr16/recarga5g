
import { Component, ElementRef,  Renderer2, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public active?: boolean;
  public activeNavOverlay?: boolean;
  @ViewChild('navMenu') menu!: ElementRef;
  @ViewChild('btnTheme') _btnTheme!: MatButton;

  activeTHeme: boolean = true;
constructor( private renderer2: Renderer2){}


ngOnInit(): void {
  this.closeOut();
 
}

ngAfterViewInit(): void {
  this.changeTheme();
}

changeTheme(): void {

    const btn= this._btnTheme?._elementRef.nativeElement;
   
    this.renderer2.listen(btn, "click", ()=> {
    
      if(btn.classList.contains('light')) {
        this.renderer2.removeClass(btn, "light");
        this.renderer2.addClass(btn, "dark");

        this.renderer2.removeClass(document.body, 'light-theme');
        this.renderer2.addClass(document.body, 'dark-theme');
      } else {
        this.renderer2.removeClass(btn, "dark");
        this.renderer2.addClass(btn, "light");

        this.renderer2.removeClass(document.body, 'dark-theme');
        this.renderer2.addClass(document.body, 'light-theme');

      }
  
    });
    
}


closeOut(): void {
  const me = this.menu?.nativeElement.classList.contains('nav-list');

  if(me) {
    console.log('hi');
  
  }
}

activeNav(): void {
this.active = true;
this.activeNavOverlay = true;
}

disabledNav(): void {
this.active = false;
this.activeNavOverlay = false;
}



}
