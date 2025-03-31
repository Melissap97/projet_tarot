import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-premium',
  imports: [],
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.css'
})
export class PremiumComponent {
constructor( private title: Title) { }
  ngOnInit(): void {
    // Définir dynamiquement le titre de la page
    this.title.setTitle('✦ Devenir premium ✦ Projet Tarot ✦');
  }
}
