import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-premium',
  imports: [],
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.css'
})
export class PremiumComponent {
  errorMessage: any;
constructor( private title: Title, private usersService: UsersService, private router: Router) { }
  ngOnInit(): void {
    // Définir dynamiquement le titre de la page
    this.title.setTitle('✦ Devenir premium ✦ Projet Tarot ✦');
  }

  premium() {
    this.usersService.premium().subscribe({
      next: () => console.warn('Vous êtes maintenant premium !'),
        error: (err: any) => this.errorMessage = err.error.message || 'Erreur lors de l\'inscription'
      });
    }
      
      }
    
  
