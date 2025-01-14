import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  constructor(private router: Router) {}

  navigateToAves() {
    this.router.navigate(['/aves']); // Navegar a la página "aves"
  }
}
