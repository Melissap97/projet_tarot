import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-origine-tarot',
  imports: [],
  templateUrl: './origine-tarot.component.html',
  styleUrl: './origine-tarot.component.css'
})
export class OrigineTarotComponent {
constructor( private title: Title) { }
  ngOnInit(): void {
    // Définir dynamiquement le titre de la page
    this.title.setTitle('✦ Origine du tarot ✦ Projet Tarot ✦');
  }
}
