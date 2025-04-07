import { CommonModule } from '@angular/common';
import { TiragesService } from './../../services/tirages.service';
import { Component, NgZone } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tirages',
  imports: [RouterModule, CommonModule],
  templateUrl: './tirages.component.html',
  styleUrl: './tirages.component.css'
})
export class TiragesComponent {
  tirages: any[] = [];
  errorMessage: string = '';

  constructor( private title: Title, private tiragesService: TiragesService, private NgZone: NgZone) { }
  ngOnInit(): void {
    // Définir dynamiquement le titre de la page
    this.title.setTitle('✦ Mes tirages ✦ Projet Tarot ✦');

     // Récupération dU tirage de l'utilisateur
    
    this.tiragesService.getTirageParUser().subscribe({
      next: (response) => {
        // Assuming the response has a 'tirage' property that contains the user's tirages
        this.tirages = response?.tirage || []; // Update tirages with the response
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
}
