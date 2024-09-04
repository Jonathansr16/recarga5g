import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  PLATFORM_ID,
  inject,
  signal,
  OnInit,
} from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { ThemesService } from '@core/services/themes.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { ClickOutsideDirective } from '@core/directives/click-outside.directive';

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
    MatButtonModule,
    MatRippleModule,
    ClickOutsideDirective,
  ],
  providers: [
    ThemesService
  ],
  animations: [

    //*contenedor y dispador de las animaciones
    trigger('isOpen', [
      transition(':enter', [
        style({ transform: 'scale(0.95)', opacity: 0 }),
        animate('100ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('75ms ease-in', style({ transform: 'scale(0.95)', opacity: 0 }))
      ])
    ])
  
  ]
})
export class HeaderComponent{

  isOpen = signal<boolean>(false);
  active = signal<boolean>(false);
  activeNavOverlay = signal<boolean>(false);

  isOpenSidebar = signal<boolean>(false);

  @ViewChild('nav') nav?: ElementRef;
  @ViewChild('btnTheme') btnTheme?: MatButton;

  private readonly document = inject(DOCUMENT);
  private readonly renderer2 = inject(Renderer2);
  private readonly platform_id = inject(PLATFORM_ID);
  private readonly themeService = inject(ThemesService)


  openNav(): void {
    this.active.set(true);
    this.activeNavOverlay.set(true);
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

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMenu(): void {
    this.isOpen.update( currentValue => !currentValue);
  }

  toggleSidebar(): void {
    this.isOpenSidebar.update( currentValue => !currentValue)
  }

}


