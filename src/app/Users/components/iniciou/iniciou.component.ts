import { Component, OnInit } from '@angular/core';
import { Carousel } from 'flowbite';
import type {
    CarouselItem,
    CarouselOptions,
    CarouselInterface,
} from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import internal from 'stream';

@Component({
  selector: 'app-iniciou',
  standalone: true,
  imports: [],
  templateUrl: './iniciou.component.html',
  styleUrl: './iniciou.component.css'
})
export default class IniciouComponent implements OnInit {
  inertvalCarousel:number= 5000;
  carousel: CarouselInterface| undefined; // Define una propiedad para guardar la instancia del carrusel

  constructor() { }
  

  ngOnInit(): void {
    const carouselElement = document.getElementById('carousel-example');

    // Verificar que el elemento del carrusel existe
    if (carouselElement) {
      const items: CarouselItem[] = [
        { position: 0, el: document.getElementById('carousel-item-1')! },
        { position: 1, el: document.getElementById('carousel-item-2')! },
        { position: 2, el: document.getElementById('carousel-item-3')! },
        { position: 3, el: document.getElementById('carousel-item-4')! },
      ].filter(item => item.el !== null) as CarouselItem[]; // Filtrar los elementos que no son null

      const options: CarouselOptions = {
        defaultPosition: 1,
        interval: this.inertvalCarousel,
        indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: [
            { position: 0, el: document.getElementById('carousel-indicator-1')! },
            { position: 1, el: document.getElementById('carousel-indicator-2')! },
            { position: 2, el: document.getElementById('carousel-indicator-3')! },
            { position: 3, el: document.getElementById('carousel-indicator-4')! },
          ].filter(indicator => indicator.el !== null) as CarouselItem[] // Filtrar los indicadores que no son null
        },
        //onNext: () => { console.log('next slider item is shown'); },
        //onPrev: () => { console.log('previous slider item is shown'); },
        //onChange: () => { console.log('new slider item has been shown'); },
      };

      const instanceOptions: InstanceOptions = { id: 'carousel-example', override: true };

      // Inicializar el carrusel después de que los elementos estén disponibles en la vista
      this.carousel = new Carousel(carouselElement, items, options, instanceOptions);
      if( this.inertvalCarousel > 0 ){
        this.carousel.cycle();
      }
      
    } else {
      console.error('Carousel element not found');
    }
  }

  prev(): void {
    if (this.carousel) {
      this.carousel.prev();
    }
  }

  next(): void {
    if (this.carousel) {
      this.carousel.next();
    }
  }

  

  

}
