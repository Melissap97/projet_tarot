import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  constructor( private title: Title) { }
      ngOnInit(): void {
        // Définir dynamiquement le titre de la page
        this.title.setTitle('✦ Page introuvable ✦ Projet Tarot ✦');
      }
      private router = inject(Router);
          pageAccueil () {
            this.router.navigate(["/accueil"]); 
          }
}
