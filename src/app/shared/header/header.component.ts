import {
  Component,
  Renderer2,
  PLATFORM_ID,
  inject,
  signal,
  
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ThemesService } from 'src/app/services/themes.service';
import { animate, style, transition, trigger } from '@angular/animations';
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

  isOpen = signal(false);
  active = signal(false);
  isOpenNotf = signal(false)
  activeNavOverlay = signal(false);
  isOpenSidebar = signal(false);
  isActiveMenu = signal(false);

  private readonly document = inject(DOCUMENT);
  private readonly renderer2 = inject(Renderer2);
  private readonly platform_id = inject(PLATFORM_ID);
  private readonly themeService = inject(ThemesService);
  private readonly router = inject(Router);

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
                { label: 'Recargas', routerLink: 'productos/recargas' },
                { label: 'Pago de Servicios', routerLink: 'productos/servicios' },
                { label: 'Tarjetas de Regalo', routerLink: 'productos/pines' },
                { label: 'Terminales', routerLink: 'productos/terminales' }
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
                      { label: 'Depósito Pagaqui',              routerLink: 'reportes/pagaqui' },
                      { label: 'Depósito Recargaki/Planetaemx', routerLink: 'reportes/recargaki-planetaemx' }
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
              { label: 'Nuestro blog', routerLink: '/ayuda/blog'}
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
  
  isSubMenuActive(items?: MenuItem[]): boolean {
    if (!items) return false;
    return items.some(item =>
      item.routerLink
   
        ? this.router.isActive(item.routerLink, {
          paths: 'exact',       // Match the path exactly
          queryParams: 'exact',  // Match query parameters exactly
          fragment: 'ignored',  // Ignore the fragment
          matrixParams: 'ignored' // Ignore matrix parameters
        })
        : this.isSubMenuActive(item.items) // Recursively check nested items
    );
  }

  // isItemActive(item: MenuItem): boolean {
  //   if (item.routerLink) {
  //     return this.router.isActive(item.routerLink, false);
  //   }
  //   return false; // Ensure a boolean is always returned
  // }



}

