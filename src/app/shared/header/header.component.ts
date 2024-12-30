import {
  Component,
  Renderer2,
  PLATFORM_ID,
  inject,
  signal,
  
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemesService } from 'src/app/services/themes.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ClickOutsideDirective } from '@shared/directives/click-outside.directive';
import { MenuItem } from '@interfaces/header.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        NgClass,
        ClickOutsideDirective,
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
        ]),
    ]
})
export class HeaderComponent{

  isOpen = signal<boolean>(false);
  active = signal<boolean>(false);
  activeNavOverlay = signal<boolean>(false);
  isOpenSidebar = signal<boolean>(false);

  private readonly document = inject(DOCUMENT);
  private readonly renderer2 = inject(Renderer2);
  private readonly platform_id = inject(PLATFORM_ID);
  private readonly themeService = inject(ThemesService)

  isOpenMenu = signal<number>(-1);


  navbarItems = signal<MenuItem[]>(

    [
      { 
        label: "Inicio",
        routerLink: "/", 
      },

      {
        label: 'Plataformas',
        items: [
            {
              label: 'Conoce nuestras plataformas',
              items: [
                { label: 'Pagaqui',    routerLink: 'plataformas/pagaqui' },
                { label: 'Planetaemx', routerLink: 'plataformas/planetaemx'},
              ]
            }
          
        ]
      },

      {
        label: 'Nuestros productos',
        items: [
          {
            label: 'Lo que tenemos para ti',
            items: [
                { label: 'recargas', icon: 'web', routerLink: 'productos/recargas' },
                { label: 'pago de servicios', icon: 'phone_iphone', routerLink: 'productos/servicios' },
                { label: 'tarjeta de regalo', icon: 'sms', routerLink: 'productos/pines' }
            ]
          }
        ]
      },

      // {
      //   label: 'Medios de venta',
      //   items: [
      //     {
      //       label: 'Como vender',
      //       items: [
      //           { label: 'pagina web', icon: 'web', routerLink: 'medio-venta/pagina' },
      //           { label: 'Aplicación móvil', icon: 'phone_iphone', routerLink: 'medio-venta/app' },
      //           { label: 'Vía SMS', icon: 'sms', routerLink: 'medio-venta/sms' }
      //       ]
      //     }
      //   ]
      // },

      {
        label: 'Notificar',
        items: [
          {
            label: 'Notificación de pagos',
            items: [
                      { label: 'Depósito Pagaqui',              routerLink: '' },
                      { label: 'Depósito Recargaki/Planetaemx', routerLink: '' }
            ]
          }
        ]
      },

      // {
      //   label: 'Ayuda',
      //   items: [
      //     {
      //       label: '¿Dudas?',
      //       items: [
      //         { label: 'Politícas y condiciones', routerLink: '' },
      //         { label: 'Condiciones de uso', routerLink: '' },
      //         { label: 'Contacto', routerLink: '' }
      //       ]
      //     }
      //   ]
      // },

      {
        label: 'Mas',
        items: [
          {
            label: 'Extra',
            items: [
              { label: 'Nuestro blog', routerLink: ''}
            ]
          }
        ]
      }
    ]

  );


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


  toggleMenu(index: number) {

    if(index === this.isOpenMenu()) {
      this.isOpenMenu.set(-1)
    } else {
      this.isOpenMenu.set(index);
    }
  }

  toggleSidebar(): void {
    this.isOpenSidebar.update( currentValue => !currentValue)
  }

}

