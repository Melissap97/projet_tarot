import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CartesService } from './../../services/cartes.service';


@Component({
  selector: 'app-galerie',
  imports: [CommonModule],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.css'
})
export class GalerieComponent {
  cartes: any[] = []; // Array to hold the cards
  constructor( private title: Title, private cartesService: CartesService) { }
    ngOnInit(): void {
      // Définir dynamiquement le titre de la page
      this.title.setTitle('✦ Galerie ✦ Projet Tarot ✦');

      // Appeler la méthode pour récupérer les cartes
      this.cartesService.getCartes().subscribe({
        next: (response) => {
          this.cartes = Array.isArray(response) ? response : [];
        },
        error: (err) => {
          console.error('Error fetching tirages:', err);
        }});
    
    }

    getCardRows(cartes: any[]): any[][] {
      const rows = [];
      for (let i = 0; i < cartes.length; i += 7) {
        rows.push(cartes.slice(i, i + 7));
      }
      return rows;
    }
  
    
    
    
}
