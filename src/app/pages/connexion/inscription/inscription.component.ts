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
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor( private title: Title, private fb: FormBuilder, private http: HttpClient, private router: Router, private connexionService: ConnexionService) {
    this.registerForm = this.fb.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // Définir dynamiquement le titre de la page
    this.title.setTitle('✦ Inscription ✦ Projet Tarot ✦');
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.connexionService.register(this.registerForm.value).subscribe({
        next: () => this.router.navigate(['/connexion']),
        error: (err: any) => this.errorMessage = err.error.message || 'Erreur lors de l\'inscription'
      });
      console.log('Form values:', this.registerForm.value);
    }
  }
}

  


