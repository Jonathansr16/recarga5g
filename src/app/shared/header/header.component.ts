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
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
  private readonly sanitizer = inject(DomSanitizer);

  isOpenMenu = signal<number>(-1);

  navbarItems:MenuItem[] =[
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
                { 
                  label: 'Pagaqui',
                  svgIcon: this.getSafeSvg('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"/></svg>'),
                  routerLink: 'plataformas/pagaqui',
                  info: 'Explorar como vender recargas con pagaqui en tu negocio' 
                },
                { 
                  label: 'Planetaemx', 
                  svgIcon: this.getSafeSvg('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"/></svg>'),
                  routerLink: 'plataformas/planetaemx',
                  info: 'Explora como vender recargas con planetaemx en tu negocio'
                },
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
                { 
                  label: 'Recargas', 
                  svgIcon: this.getSafeSvg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg>`),
                  routerLink: 'productos/recargas',
                  info: 'explora como puedes vender recargas en tu negocio'
                },
                { 
                  label: 'Pago de Servicios',
                  svgIcon: this.getSafeSvg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"/></svg>`),
                  routerLink: 'productos/servicios',
                  info: 'Explorar como cobrar +200 servicios en tu negocio'
                },
                { 
                  label: 'Tarjetas de Regalo',  
                  svgIcon: this.getSafeSvg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182Zm-5.598-3.18c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z"/></svg>`),
                  routerLink: 'productos/pines',
                  info: 'Explora como vender gift card en tu negocio'
                },
                { 
                  label: 'Terminales',
                  svgIcon: this.getSafeSvg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"/></svg>`),
                  routerLink: 'productos/terminales',
                  info: 'Adquiere tu terminal y cobra todas las tarjeta de credito y debito en tu negocio'
                }
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
                      { 
                        label: 'Compras Pagaqui',  
                        svgIcon: this.getSafeSvg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"/></svg>`),
                        routerLink: 'notificaciones/compras-pagaqui',
                        info: 'Notifica todos tus pagos pagaqui y obten el monto en saldo' 
                      },
                      { 
                        label: 'Compras Recargaki/Planetaemx', 
                        svgIcon: this.getSafeSvg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"/></svg>`),
                        routerLink: 'notificaciones/compras-planetaemx-recargaki',
                        info: 'Notifica todos tus pagos pagaqui y obten el monto en saldo' 

                      }
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


    getSafeSvg(svgCode: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(svgCode);
    }



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

