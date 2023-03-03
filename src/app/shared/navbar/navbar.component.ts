import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navActive: boolean = false;
  public themeActive: boolean = false

  constructor(@Inject(DOCUMENT) private document: Document, private renderer2: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object,
    private readonly route: Router) { }

  ngOnInit(): void {
    this.themeBtns();
    this.changeFontSize();
  }


  /* =========== OPEN NAV =========== */
  openNav(): void {
    this.navActive = true;
  }

  /* =========== CLOSE NAV =========== */
  closeNav(): void {
    this.navActive = false;
  }

  /* =========== OPEN BTN THEME =========== */
  openTheme(): void {
    this.themeActive = true;
  }

  /* =========== CLOSE BTN THEME =========== */
  closeTheme(): void {
    this.themeActive = false;
  }

  /* =========== CUSTOM BACKGROUND =========== */
  themeBtns(): void {

    if (isPlatformBrowser(this.platformId)) {

      const btn = this.document.querySelectorAll('.theme__btn');

      for (let i = 0; i < btn.length; i++)

        btn[i].addEventListener("click", () => {

          document.body.classList.toggle('light-theme');
          document.body.classList.toggle('dark-theme');
          btn[i].classList.toggle('light');
          btn[i].classList.toggle('dark');
        });
    }
  }

  /* =========== REMOVE FONT SIZE =========== */
  removeActiveFontSize(): void {

    if (isPlatformBrowser(this.platformId)) {

      const fontSize = this.document.querySelectorAll(".selector .selector__span");

      fontSize.forEach(size => {
        size.classList.remove("selector__span--active");
      });
    }

  }

  /* =========== REMOVE COLOR =========== */
  removeActiveColor(): void {

    if (isPlatformBrowser(this.platformId)) {
      const colorOption = this.document.querySelectorAll('.color__container .color__span');

      colorOption.forEach(colorCurrent => {
        colorCurrent.classList.remove("color__span--active");
      });

    }
  }

  /* =========== CHANGE FONT SIZE =========== */
  changeFontSize(): void {

    if (isPlatformBrowser(this.platformId)) {
      const fontSize = this.document.querySelectorAll(".selector .selector__span");
      const html = this.document.querySelector<HTMLElement>("html");
      let fsize: string;

      fontSize.forEach(font => {

        font.addEventListener('click', () => {

          this.removeActiveFontSize();
          font.classList.toggle("selector__span--active");
          if (font.classList.contains('selector__1')) {
            fsize = '12px';
          } else if (font.classList.contains('selector__2')) {
            fsize = "14px";
          }
          else if (font.classList.contains('selector__3')) {
            fsize = "16px";
          }
          else if (font.classList.contains('selector__4')) {
            fsize = "18px";
          }

          if (html) {
            html.style.fontSize = fsize;
          }
        });


      });
    }
  }

  /* =========== CHANGE COLOR =========== */
  @HostListener('click', ['$event'])
  changeColor(): void {

    if (isPlatformBrowser(this.platformId)) {

      const colorOption = this.document.querySelectorAll('.color__container span');
      const root = this.document.querySelector<HTMLElement>(":root");

      colorOption.forEach(select => {
        select.addEventListener("click", () => {

          let colorChange: any;
          this.removeActiveColor();
          if (select.classList.contains("color__span--1")) {
            colorChange = '252';
          } else if (select.classList.contains("color__span--2")) {
            colorChange = '52';
          } else if (select.classList.contains("color__span--3")) {
            colorChange = '352';
          } else if (select.classList.contains("color__span--4")) {
            colorChange = '152';
          }

          select.classList.add('color__span--active');
          root?.style.setProperty('--c-config', colorChange);
        });

      });
    }
  }
}
