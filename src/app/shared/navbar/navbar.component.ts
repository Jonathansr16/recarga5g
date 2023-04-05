
import { Component, OnInit, ElementRef, Renderer2, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public active?: boolean;
  public activeNavOverlay?: boolean;
  @ViewChild('navMenu') menu: ElementRef | undefined;
 
  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private plataform_id: Object, private renderer: Renderer2) { }

  ngOnInit(): void {
  this.closeOut()
  }


  changeTheme(): void {

    if (isPlatformBrowser(this.plataform_id)) {

      const btnTheme = this.document.querySelector('.r-theme');
      const themeCurrent = this.document.body;

      if(btnTheme) {
        btnTheme.classList.toggle('light');
        btnTheme.classList.toggle('dark');
        themeCurrent.classList.toggle('light-theme');
        themeCurrent.classList.toggle('dark-theme');
      }

    }

  }

  closeOut(): void {
      const me = this.menu?.nativeElement.classList.contains('nav-list');

      if(me) {
        console.log('hi');
      
      }
  }

  activeNav(): void {
    this.active = true;
    this.activeNavOverlay = true;
  }

  disabledNav(): void {
    this.active = false;
    this.activeNavOverlay = false;
  }


}

export interface MenuItem {
  id?: number;
  label: string;
  icon: string;
  items?: subItem[];
}

export interface subItem {
  label: string;
  icon: string;
}