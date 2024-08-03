import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
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
