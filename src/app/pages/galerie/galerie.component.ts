import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Component, inject } from '@angular/core';
import { CartesService } from '../../services/cartes/cartes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-galerie',
  imports: [CommonModule],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.css'
})
export class GalerieComponent {
  cartes: any[] = []; // Crée un array vide de cartes
  constructor( private title: Title, private cartesService: CartesService) { }
    ngOnInit(): void {
      // Définir dynamiquement le titre de la page
      this.title.setTitle('✦ Galerie ✦ Projet Tarot ✦');

      // Appele la méthode pour récupérer les cartes
      this.cartesService.getCartes().subscribe({
        next: (response) => {
          const cartesArray = Array.isArray(response) ? response : [];

          // Organise les cartes par ID
          this.cartes = cartesArray.sort((a, b) => a.id - b.id);
        },
        error: (err) => {
          console.error('Error fetching tirages:', err);
        }});
    
    }

    getCardRows(cartes: any[]): any[][] {
      const rows = [];
      //Crée un loop pour afficher toutes les cartes en 6 rows
      for (let i = 0; i < cartes.length; i += 6) {
        rows.push(cartes.slice(i, i + 6));
      }
      return rows;
    }
  
private router = inject(Router);
    pagePremium() {
      this.router.navigate(["/galerie-premium"]); 
    }
  }
