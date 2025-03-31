import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tirages',
  imports: [RouterModule],
  templateUrl: './tirages.component.html',
  styleUrl: './tirages.component.css'
})
export class TiragesComponent {
  constructor( private title: Title) { }
  ngOnInit(): void {
    // Définir dynamiquement le titre de la page
    this.title.setTitle('✦ Mes tirages ✦ Projet Tarot ✦');
  }
}
