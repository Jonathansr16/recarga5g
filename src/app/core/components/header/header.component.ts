import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HeaderComponent implements AfterViewInit {

  active = signal<boolean>(false);
  activeNavOverlay = signal<boolean>(false);
  @ViewChild('nav') nav?: ElementRef;
  @ViewChild('btnTheme') btnTheme?: MatButton;

  activeTHeme: boolean = true;
  isDarkTheme: boolean = false;

  private readonly document = inject(DOCUMENT);
  private readonly renderer2 = inject(Renderer2);
  private readonly platform_id = inject(PLATFORM_ID);


  ngAfterViewInit(): void {
    // this.checkTheme();
    // this.changeTheme();
  }

  // changeTheme(): void {
    
  //     const btn = this.btnTheme?._elementRef.nativeElement;
  //     const nav = this.nav?.nativeElement;
  
    
  //     this.renderer2.listen(btn, 'click', () => {
  //       if (
  //         btn.classList.contains('light-btn') &&
  //         this.document.body.classList.contains('light-theme')
  //       ) {
  //         //*change theme of btn
  //         this.renderer2.removeClass(btn, 'light-btn');
  //         this.renderer2.addClass(btn, 'dark-btn');
  //         //*change theme of menuNav
  //         this.renderer2.removeClass(nav, 'light-menu');
  //         this.renderer2.addClass(nav, 'dark-menu');

  //         //*change Theme of Body
  //         this.renderer2.removeClass(this.document.body, 'light-theme');
  //         this.renderer2.addClass(this.document.body, 'dark-theme');

  //         //* Save theme of btn at LocalStorage

  //         localStorage.setItem('theme-btn', 'dark-btn');
  //         localStorage.setItem('theme-nav', 'dark-menu');
  //         localStorage.setItem('theme', 'dark-theme');
  //       } else {
  //         //*change theme of btn
  //         this.renderer2.removeClass(btn, 'dark-btn');
  //         this.renderer2.addClass(btn, 'light-btn');
  //         //*change theme of menuNav
  //         this.renderer2.removeClass(nav, 'dark-menu');
  //         this.renderer2.addClass(nav, 'light-menu');
  //         //*change Theme of Body
  //         this.renderer2.removeClass(this.document.body, 'dark-theme');
  //         this.renderer2.addClass(this.document.body, 'light-theme');

  //         localStorage.setItem('theme-btn', 'light-btn');
  //         localStorage.setItem('theme-nav', 'light-menu');
  //         localStorage.setItem('theme', 'light-theme');
  //       }
  //     });
    
  // }

  // checkTheme(): void {
  //     const btn = this.btnTheme?._elementRef.nativeElement;
  //     const _nav = this.nav?.nativeElement;
  //     const previousBtnTheme = localStorage.getItem('theme-btn');
  //     const previousMenuTheme = localStorage.getItem('theme-nav');
  //     const previousTheme = localStorage.getItem('theme');

  //     if (previousBtnTheme != null && previousBtnTheme === 'dark-btn') {
  //       this.renderer2.removeClass(btn, 'light-btn');
  //       this.renderer2.addClass(btn, previousBtnTheme);
  //     }

  //     if (previousTheme != null && previousTheme === 'dark-theme') {
  //       this.renderer2.removeClass(this.document.body, 'light-theme');
  //       this.renderer2.addClass(this.document.body, previousTheme);
  //     }

  //     if (previousMenuTheme != null && previousMenuTheme === 'dark-menu') {
  //       this.renderer2.removeClass(_nav, 'light-menu');
  //       this.renderer2.addClass(_nav, previousMenuTheme);
  //     }
    
  // }


  changeTheme(): void {

  }
  openNav(): void {
    this.active.set(true);
    this.activeNavOverlay.set(true);
    // this.active = true;
    // this.activeNavOverlay = true;
    this.blockScrollDocument();
  }

  closeNav(): void {
    this.active.set(false);
    this.activeNavOverlay.set(false);
    this.unblockScrollDocument();
  }

  blockScrollDocument(): void {
    if (isPlatformBrowser(this.platform_id)) {
      this.renderer2.addClass(this.document.body,'blockScrollModal')
    }
  }

  unblockScrollDocument(): void {
    if (isPlatformBrowser(this.platform_id)) {
      this.renderer2.removeClass(this.document.body,'blockScrollModal')
    }
  }
}
