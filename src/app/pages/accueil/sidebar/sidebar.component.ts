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
        // Store l'info de l'user pour le template
        this.userInfo = data; 
      },
      error: (error) => {
        console.error('Error fetching user info:', error);
      }
    }
  );
}
  //N avigation entre les routes
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
    this.connexionService.logout().subscribe({
      next: (response) => { 
    // Supprime les tokens
    localStorage.clear();
    sessionStorage.clear();

    this.router.navigate(['/accueil']).then(() => {
      // Refresh la page
      window.location.reload();
    });
  },
  error: (err) => {
    console.error('Logout failed:', err);
  }
});
}}
