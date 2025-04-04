import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';


@Component({
  selector: 'app-galerie',
  imports: [],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.css'
})
export class GalerieComponent {
  constructor( private title: Title) { }
    ngOnInit(): void {
      // Définir dynamiquement le titre de la page
      this.title.setTitle('✦ Galerie ✦ Projet Tarot ✦');
    }
}
