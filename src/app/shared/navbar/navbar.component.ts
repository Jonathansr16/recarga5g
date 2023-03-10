import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(@Inject(DOCUMENT) private document: Document, private renderer2: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit(): void {
  
  }

  themeBtn(): void {

    if (isPlatformBrowser(this.platformId)) {

      const btn = this.document.querySelector('.theme__btn');
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        btn?.classList.toggle('light');
        btn?.classList.toggle('dark');
    }
  }

}
