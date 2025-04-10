import { CommonModule } from '@angular/common';
import { TiragesService } from './../../services/tirages/tirages.service';
import { Component, inject, NgZone } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-tirages',
  imports: [RouterModule, CommonModule],
  templateUrl: './tirages.component.html',
  styleUrl: './tirages.component.css'
})
export class TiragesComponent {
  tirages: any[] = [];
  userInfo: any;
  errorMessage: string = '';

  constructor( private title: Title, private tiragesService: TiragesService, private NgZone: NgZone, private usersService:UsersService) { }
  ngOnInit(): void {
    // Définir dynamiquement le titre de la page
    this.title.setTitle('✦ Mes tirages ✦ Projet Tarot ✦');

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
     // Récupération dU tirage de l'utilisateur
    
    this.tiragesService.getTirageParUser().subscribe({
      next: (response) => {
        //Affiche les tirages les plus récents
        this.tirages = (response?.tirage || []).sort((a: { createdAt: string | number | Date; }, b: { createdAt: string | number | Date; }) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
      },
      error: (err) => {
        console.error('Error fetching tirages:', err);
        this.errorMessage = 'Erreur lors du chargement des tirages.';
      }
    });
    
  }

deleteTirage(id: number): void {
    this.tiragesService.deleteTirage(id).subscribe({
      next: (response) => {
        // Remove the deleted tirage from the list
        this.tirages = this.tirages.filter(tirage => tirage.id !== id);
      },
      error: (err) => {
        console.error('Error deleting tirage:', err);
        this.errorMessage = 'Erreur lors de la suppression du tirage.';
      }
    });
  }
private router = inject(Router);
    pageConnexion () {
      this.router.navigate(["/connexion"]); 
    }
  
}
