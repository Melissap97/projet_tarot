import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-carousel',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements AfterViewInit {

  @ViewChild('carouselDiv') carouselDiv!: ElementRef;

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

    // Add click event to carousel divs
    $('#carousel div').click((event: JQuery.ClickEvent) => {
      this.moveToSelected($(event.currentTarget));
    });

    // Previous and Next buttons
    $('#prev').click(() => {
      this.moveToSelected('prev');
    });

    $('#next').click(() => {
      this.moveToSelected('next');
    });
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