import { UsersService } from './../../../services/users.service';
import { TiragesService } from './../../../services/tirages.service';
import { Component, AfterViewInit, NgZone } from '@angular/core';
import $ from 'jquery';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [CommonModule]
})

export class CarouselComponent implements AfterViewInit {
  userInfo: any;
  tirage = new Array<any>();
  tirageInfo = {
    id: '',
    utilisateur_id:'',
    carte_id:'',
    createdAt:'',
    carte_nom:'',
    carte_signification:'',
    carte_image:'',
    carte_premium_id:'',
    carte_premium_nom:'',
    carte_premium_image:'',
    carte_premium_signification:''
  }


  constructor( private title: Title, private tiragesService: TiragesService,private usersService: UsersService, private NgZone: NgZone) { }
    ngOnInit(): void {
      // Définir dynamiquement le titre de la page
      this.title.setTitle('✦ Accueil ✦ Projet Tarot ✦');

      // Récupération de l'information de l'utilisateur
      this.usersService.getUserInfo().subscribe({
        next: (data) => {
          this.userInfo = data;  // Store user info for use in the template
        },
        error: (error) => {
           // Handle errors (e.g., not authenticated, no token)
          console.error('Error fetching user info:', error);
        }
      }
    );
  }

  ngAfterViewInit() {
    // Initialize carousel after view is initialized
    this.initializeCarousel();
  }

  // Code du carousel
  private initializeCarousel(): void {
    this.moveToSelected("next"); // Example to trigger the movement
    // Listen to keyboard events
    $(document).keydown((e: JQuery.Event) => {
      switch (e.which) {
        case 37: // left
          this.moveToSelected('prev');
          break;
        case 39: // right
          this.moveToSelected('next');
          break;
        default:
          return;
      }
      e.preventDefault();
    });
    // Change from 'click' to 'mouseenter' and 'mouseleave' for hover effect
    $('#carousel div').on('mouseenter', 
      (event) => {
        // Type casting event.currentTarget to HTMLElement
        const target = event.currentTarget as HTMLElement;
        this.moveToSelected($(target));
      }).on('mouseleave', 
      () => {
        // Optional: Reset or perform any action on mouse leave
        // You can add something here if needed when the mouse leaves the element
      }
    );
  }
  private moveToSelected(element: JQuery<HTMLElement> | "next" | "prev"): void {
    let selected: JQuery<HTMLElement>;
    if (element === "next") {
      selected = $(".selected").next();
    } else if (element === "prev") {
      selected = $(".selected").prev();
    } else {
      selected = element;
    }

    const next = $(selected).next();
    const prev = $(selected).prev();
    const prevSecond = $(prev).prev();
    const nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

  }
  
  //Reqûetes API

  postTirage(): void {
    this.tiragesService.createTirage().subscribe({
      next: (response) => {
        console.log('API Response:', response);
  
        // Check if there's a token or user logged in (you can adjust this as needed)
        const token = localStorage.getItem('token'); // Or sessionStorage.getItem('token') if you're using sessionStorage
  
        if (token) {
          // If there's a token, assume the user is logged in and fetch the premium tirage
          const tirage = response?.tirage;
  
          this.NgZone.run(() => {
            this.tirageInfo = {
              id: tirage?.id || '',
              utilisateur_id: tirage?.utilisateur_id || '',
              carte_id: tirage?.carte_id || '',
              createdAt: tirage?.createdAt || '',
              carte_nom: tirage?.carte_nom || '',
              carte_signification: tirage?.carte_signification || '',
              carte_image: tirage?.carte_image || '',
              carte_premium_id: tirage?.carte_premium_id || '',
              carte_premium_nom: tirage?.carte_premium_nom || '',
              carte_premium_image: tirage?.carte_premium_image || '',
              carte_premium_signification: tirage?.carte_premium_signification || ''
            }; 
          });
        } else {
          // If no token, use the normal tirage
          this.NgZone.run(() => {
            this.tirageInfo = {
              id: response?.carte?.id || '',
              utilisateur_id: '', // Empty if not needed for normal card
              carte_id: response?.carte?.id || '',
              createdAt: '', // Empty if not needed for normal card
              carte_nom: response?.carte?.nom || '',
              carte_signification: response?.carte?.signification || '',
              carte_image: response?.carte?.image || '',
              carte_premium_id: '', // Empty for normal card
              carte_premium_nom: '', // Empty for normal card
              carte_premium_image: '', // Empty for normal card
              carte_premium_signification: '' // Empty for normal card
            }; 
          });
        }
      },
      error: (err) => {
        console.error('Error fetching tirage:', err);
      }
    });
  }
  

  closeTirageInfo(): void {
    this.tirageInfo = {
      id: '',
      utilisateur_id: '',
      carte_id: '',
      createdAt: '',
      carte_nom: '',
      carte_signification: '',
      carte_image: '',
      carte_premium_id: '',
      carte_premium_nom: '',
      carte_premium_image: '',
      carte_premium_signification: ''
    };
  }
}

