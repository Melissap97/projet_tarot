import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../../../services/connexion/connexion.service';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private connexionService: ConnexionService, private usersService: UsersService) { }
  userInfo: any;
  // Code pour le menu burger
  isSidebarOpen = false;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }


  ngOnInit(): void {
    
    // Récupération de l'information de l'utilisateur
    this.usersService.getUserInfo().subscribe({
      next: (data) => {
        this.userInfo = data;  // Store user info for use in the template
      },
      error: (error) => {
         // Handle errors (e.g., not authenticated, no token)
        console.error('Error fetching user info:', error);
      }
    }
  );
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

  deconnexion(): void {
    // Clear the token from local storage or session storage
    this.connexionService.logout().subscribe({
      next: (response) => { 
    // Clear client-side storage just in case
    localStorage.clear();
    sessionStorage.clear();

    this.router.navigate(['/accueil']).then(() => {
      // Reload the page after navigation
      window.location.reload();
    });
  },
  error: (err) => {
    console.error('Logout failed:', err);
  }
});
}}
