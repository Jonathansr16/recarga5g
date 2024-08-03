import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  private colorTheme: string = '';
 
   private readonly plataform_id = inject(PLATFORM_ID);
   private readonly renderer2 = inject(Renderer2);

  initTheme() {
    if (isPlatformBrowser(this.plataform_id)) {
      this.getColorTheme();
      this.renderer2.addClass(document.body, this.colorTheme)
     }
    
  }

  update(theme: 'dark-theme' | 'light-theme') {
    if (isPlatformBrowser(this.plataform_id)) {
      this.setColorTheme(theme);
      const previousColorTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
      this.renderer2.removeClass(document.body, previousColorTheme);
      this.renderer2.addClass(document.body, theme);
     }
    
    }

  isDarkMode() {
      return this.colorTheme === 'dark-theme';
  }

  private setColorTheme(theme: string) {
   
    if (isPlatformBrowser(this.plataform_id)) {
      this.colorTheme = theme;
        localStorage.setItem('user-theme', theme);
      }

  }

  private getColorTheme() {

    if (isPlatformBrowser(this.plataform_id)) {
        
      if(localStorage.getItem('user-theme')) {
        this.colorTheme =JSON.stringify(localStorage.getItem('user-theme'))

    } else {
        this.colorTheme= 'light-theme'
    }
    }


  }
}
