import { Component } from '@angular/core';
import {Title}  from '@angular/platform-browser';

@Component({
  selector: 'app-collection',
  imports: [],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {
constructor( private title: Title) { }
  ngOnInit(): void {
    // Définir dynamiquement le titre de la page
    this.title.setTitle('✦ Mes tirages ✦ Projet Tarot ✦');
  }
}
