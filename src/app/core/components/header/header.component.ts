
import { Component, ElementRef, Renderer2, ViewChild, OnInit, AfterViewInit, ViewChildren, QueryList, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit, AfterViewInit {

  public active?: boolean;
  public activeNavOverlay?: boolean;
  @ViewChild('nav') nav?: ElementRef;
  @ViewChild('navMenu') menu?: ElementRef;
  @ViewChild('btnTheme') _btnTheme?: MatButton;
  activeTHeme: boolean = true;
  isDarkTheme: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer2: Renderer2) {

  }


  ngOnInit(): void {

  }


  ngAfterViewInit(): void {
    this.checkTheme();
    this.changeTheme();
  }

  changeTheme(): void {
    const btn = this._btnTheme?._elementRef.nativeElement;
    const _nav = this.nav?.nativeElement;
    this.renderer2.listen(btn, "click", () => {

      if (btn.classList.contains('light-btn') && this.document.body.classList.contains('light-theme')) {
        //*change theme of btn
        this.renderer2.removeClass(btn, "light-btn");
        this.renderer2.addClass(btn, "dark-btn");
        //*change theme of menuNav
        this.renderer2.removeClass(_nav, 'light-menu');
        this.renderer2.addClass(_nav, 'dark-menu');

        //*change Theme of Body
        this.renderer2.removeClass(document.body, 'light-theme');
        this.renderer2.addClass(document.body, 'dark-theme');

        //* Save theme of btn at LocalStorage
        localStorage.setItem("theme-btn", "dark-btn");

        localStorage.setItem("theme-nav", "dark-menu");
        localStorage.setItem("theme", "dark-theme");

      } else {
        //*change theme of btn
        this.renderer2.removeClass(btn, "dark-btn");
        this.renderer2.addClass(btn, "light-btn");
        //*change theme of menuNav
        this.renderer2.removeClass(_nav, 'dark-menu');
        this.renderer2.addClass(_nav, 'light-menu');
        //*change Theme of Body
        this.renderer2.removeClass(document.body, 'dark-theme');
        this.renderer2.addClass(document.body, 'light-theme');
        
        localStorage.setItem("theme-btn", "light-btn");
        localStorage.setItem("theme-nav", "light-menu");
        localStorage.setItem("theme", "light-theme");
      }

    });

  }

  checkTheme(): void {
    const btn = this._btnTheme?._elementRef.nativeElement;
    const _nav = this.nav?.nativeElement;

    const previousBtnTheme = localStorage.getItem("theme-btn");
    const previousMenuTheme = localStorage.getItem("theme-nav");
    const previousTheme = localStorage.getItem("theme");

    if (previousBtnTheme != null && previousBtnTheme === "dark-btn") {
      this.renderer2.removeClass(btn, "light-btn");
      this.renderer2.addClass(btn, previousBtnTheme)
    }

    if (previousTheme != null && previousTheme === "dark-theme") {

      this.renderer2.removeClass(document.body, "light-theme");
      this.renderer2.addClass(document.body, previousTheme);
    }
    
    if (previousMenuTheme != null && previousMenuTheme === "dark-menu") {
      this.renderer2.removeClass(_nav, "light-menu");
      this.renderer2.addClass(_nav, previousMenuTheme)
    }

  }

  openNav(): void {
    this.active = true;
    this.activeNavOverlay = true;
  }

  closeNav(): void {
    this.active = false;
    this.activeNavOverlay = false;
  }




}
