import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [

  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  private readonly router = Inject(Router);

  redirectoTitle() {
    const title = 'cuentas-planetaemx';
  this.router.navigate(['/plataforma/planetaemx'], {fragment: title} );
  }

}
