import { inject, Injectable, PLATFORM_ID, Renderer2, signal, WritableSignal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  private readonly renderer2 = inject(Renderer2);

  //* Para soporte SSR y SSG 
  private readonly CLIENT_RENDER = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

  //* Nombre de la variable en el LocalStorage
  private readonly LS_THEME = 'theme';

  //* Valor de la selección previa por el usuario
  private readonly selectedTheme = this.CLIENT_RENDER ? localStorage.getItem(this.LS_THEME) as AppTheme | undefined : undefined;

  private readonly platform = inject(PLATFORM_ID);
  //* Signal para el tema actual
  currentTheme = signal<AppTheme | undefined>(this.selectedTheme);

  initTheme() {
    if (this.CLIENT_RENDER) {
      this.applyTheme(this.selectedTheme ?? (this.isSystemDark() ? AppTheme.DARK : AppTheme.LIGHT));
    }
  }

  updateTheme(theme: AppTheme) {
    if (this.CLIENT_RENDER) {
      this.applyTheme(theme);
      this.setColorTheme(theme);
    }
  }

  private applyTheme(theme: AppTheme) {
    const previousTheme = this.currentTheme();
    if (previousTheme) {
      this.renderer2.removeClass(document.body, previousTheme);
    }
    this.renderer2.addClass(document.body, theme);
    this.currentTheme.set(theme);
  }

  private setColorTheme(theme: AppTheme) {
    localStorage.setItem(this.LS_THEME, theme);
  }

  private isSystemDark(): boolean {
    return this.CLIENT_RENDER && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleTheme() {
    const currentTheme = this.currentTheme();
    // const newTheme = currentTheme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;
    // this.updateTheme(newTheme);
   
    if(currentTheme === AppTheme.DARK) {
      this.updateTheme(AppTheme.LIGHT);
    } else {
      this.updateTheme(AppTheme.DARK);

    }
  }



}

export enum AppTheme {
  LIGHT = 'light',
  DARK = 'dark'
}
