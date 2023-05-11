import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, Renderer2 } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class ThemeService {

    private colorTheme: string = '';

    constructor(@Inject (DOCUMENT) private document: Document,private renderer2: Renderer2) {

    }


    initTheme() {
        this.getColorTheme();
        this.renderer2.addClass(this.document.body, this.colorTheme)
    }

    update(theme: 'dark-theme' | 'light-theme') {
        this.setColorTheme(theme);
        const previousColorTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
        this.renderer2.removeClass(this.document.body, previousColorTheme);
        this.renderer2.addClass(this.document.body, theme);
      }

    isDarkMode() {
        return this.colorTheme === 'dark-theme';
    }

    private setColorTheme(theme: string) {
        this.colorTheme = theme;
        localStorage.setItem('user-theme', theme);
    }

    private getColorTheme() {

        if(localStorage.getItem('user-theme')) {
            this.colorTheme =JSON.stringify(localStorage.getItem('user-theme'))

        } else {
            this.colorTheme= 'light-theme'
        }
    }
   }