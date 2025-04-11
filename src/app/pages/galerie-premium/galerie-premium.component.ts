import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartesService } from '../../services/cartes/cartes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galerie-premium',
  imports: [CommonModule],
  templateUrl: './galerie-premium.component.html',
  styleUrl: './galerie-premium.component.css'
})
export class GaleriePremiumComponent {
cartes: any[] = []; // Crée un array vide pour les cartes
  constructor( private title: Title, private cartesService: CartesService) { }
    ngOnInit(): void {
      // Définir dynamiquement le titre de la page
      this.title.setTitle('✦ Galerie ✦ Projet Tarot ✦');

      // Appeler la méthode pour récupérer les cartes
      this.cartesService.getCartesPremium().subscribe({
        next: (response) => {
          const cartesArray = Array.isArray(response) ? response : [];

          // Organise les cartes par ID croissant 
          this.cartes = cartesArray.sort((a, b) => a.id - b.id);
        },
        error: (err) => {
          console.error('Error fetching tirages:', err);
        }});
    
    }

    getCardRows(cartes: any[]): any[][] {
      const rows = [];
      //Crée un loop de 6 rows
      for (let i = 0; i < cartes.length; i += 6) {
        rows.push(cartes.slice(i, i + 6));
      }
      return rows;
    }
  private router = inject(Router);
      pageOrigine() {
        this.router.navigate(["/galerie"]); 
      }
    } 


