import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConnexionService } from '../../../services/connexion.service';


@Component({
  selector: 'app-connexion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  connexionService: ConnexionService;

  constructor( private title: Title, private fb: FormBuilder, private http: HttpClient, private router: Router, connexionService: ConnexionService) {
    // Initialisation dans le constructeur
    this.loginForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.connexionService = connexionService;
  }
    ngOnInit(): void {
      // Définir dynamiquement le titre de la page
      this.title.setTitle('✦ Connexion ✦ Projet Tarot ✦');
    }
    onSubmit() {
  if (this.loginForm.valid) {
    this.connexionService.login(this.loginForm).subscribe({
      next: (response) => {
        console.log('Login successful, saving token...');
        
        // Assuming the token is in the response
        const token = response?.token; // Make sure the token field matches your API response
        if (token) {
          localStorage.setItem('token', token);
          console.log('Token saved:', token);
        }
        // Navigate to the home page after login
        this.router.navigate(['/accueil']);
      },
      error: (err: any) => {
        this.errorMessage = err.error.message || 'Erreur de connexion';
      }
    });
  }
}

  pageInscription () {
    this.router.navigate(["/inscription"]); 
  }
}
