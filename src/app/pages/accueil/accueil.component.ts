import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-carousel',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit() {
    // Initialize carousel after view is initialized
    this.initializeCarousel();
  }

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
}
