import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-connexion',
  imports: [],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  constructor( private title: Title) { }
    ngOnInit(): void {
      // Définir dynamiquement le titre de la page
      this.title.setTitle('✦ Connexion ✦ Projet Tarot ✦');
    }
}
