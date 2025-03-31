import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./pages/accueil/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet_tarot';
  //Sert à la navigation entre les routes et permettre leur sécurité. Lié avec html
  private router = inject(Router);
    pageAccueil () {
      this.router.navigate(["/accueil"]); 
    }
}
