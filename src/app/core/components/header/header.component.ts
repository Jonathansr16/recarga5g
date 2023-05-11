
import { Component, ElementRef,  Renderer2, ViewChild, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit, AfterViewInit {

  public active?: boolean;
  public activeNavOverlay?: boolean;
  @ViewChild('nav') nav?: ElementRef;
  @ViewChild('navMenu') menu?: ElementRef;
  @ViewChild('btnTheme') _btnTheme?: MatButton;
  activeTHeme: boolean = true;
  isDarkMode: boolean = false;

constructor( private renderer2: Renderer2, private themeService: ThemeService){
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
}


ngOnInit(): void {

}


ngAfterViewInit(): void {
  // this.changeTheme();
}

// changeTheme(): void {

//     const btn= this._btnTheme?._elementRef.nativeElement;
//      const _nav = this.nav?.nativeElement;
     
//     this.renderer2.listen(btn, "click", ()=> {
    
//       if(btn.classList.contains('light')) {
//         //*change theme of btn
//         this.renderer2.removeClass(btn, "light");
//         this.renderer2.addClass(btn, "dark");
//         //*change theme of menuNav
//         this.renderer2.removeClass(_nav, 'light-theme');
//         this.renderer2.addClass(_nav, 'dark-theme');
//          //*change theme of body 
//         this.renderer2.removeClass(document.body, 'light-theme');
//         this.renderer2.addClass(document.body, 'dark-theme');

//         // theme: string = localStorage.setItem('theme','s')
//       } else {
//         this.renderer2.removeClass(btn, "dark");
//         this.renderer2.addClass(btn, "light");
        
//         this.renderer2.removeClass(_nav, 'dark-theme');
//         this.renderer2.addClass(_nav, 'light-theme');

//         this.renderer2.removeClass(document.body, 'dark-theme');
//         this.renderer2.addClass(document.body, 'light-theme');

//       }
  
//     });
    
// }

toggleTheme() {
  this.isDarkMode = this.themeService.isDarkMode();

  // if(this.isDarkMode) {
  //   this.themeService.update('light-theme');
  // } else {
  //   this.themeService.update('dark-theme');
  // }

  this.isDarkMode 
  ? this.themeService.update('light-theme')
  : this.themeService.update('dark-theme');

}

openNav(): void {
this.active = true;
this.activeNavOverlay = true;
}

closeNav(): void {
this.active = false;
this.activeNavOverlay = false;
}




}
