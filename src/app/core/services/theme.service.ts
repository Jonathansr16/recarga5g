import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class ThemeService {

    private colorTheme?: string;
    private rendererFactor: Renderer2;
    private readonly themeKey = 'appTheme';

    constructor(rendererFactory: RendererFactory2,@Inject (DOCUMENT) private document: Document,private renderer2: Renderer2) {

        this.rendererFactor = rendererFactory.createRenderer(null, null);

    }


    setTheme(theme: string) {
        localStorage.setItem(this.themeKey, theme);
      }

      getTheme(): string {
        return JSON.parse(localStorage.getItem(this.themeKey) || "[]")
      }


    // initTheme() {
    //     this.getColorTheme();
    //     this.renderer2.addClass(this.document.body, this.colorTheme!);
    // }

    // update(theme: 'dark-theme' | 'light-theme') {
    //     this.setColorTheme(theme);
    //     const previousColorTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    //     this.renderer2.removeClass(this.document.body, previousColorTheme);
    //     this.renderer2.addClass(this.document.body, theme);
    //   }

    // isDarkMode() {
    //     return this.colorTheme === 'dark-theme';
    // }

    // private setColorTheme(theme: string) {
    //     this.colorTheme = theme;
    //     // localStorage.setItem('user-theme', theme);
    //     localStorage.setItem('user-theme',JSON.stringify(theme));
    // }

    // private getColorTheme() {

    //     if(localStorage.getItem('user-theme')) {
    //         // this.colorTheme =JSON.stringify(localStorage.getItem('user-theme'))
    //         this.colorTheme = JSON.parse(localStorage.getItem('user-theme')!)

    //     } else {
    //         this.colorTheme= 'light-theme'
    //     }
    // }
   }