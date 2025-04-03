import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarOpen = false;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  //Sert à la navigation entre les routes et permettre leur sécurité. Lié avec html
private router = inject(Router);
  pageAccueil () {
    this.router.navigate(["/accueil"]); 
  }
  pageConnexion () {
    this.router.navigate(["/connexion"]); 
  }
  pageTirages () {
    this.router.navigate(["/tirages"]); 
  }
  pageOrigineTarot () {
    this.router.navigate(["/origine"]); 
  }
  pageGalerie () {
    this.router.navigate(["/galerie"]); 
  }
  pagePremium () {
    this.router.navigate(["/premium"]); 
  }

}
