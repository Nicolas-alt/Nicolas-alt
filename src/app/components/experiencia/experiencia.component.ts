import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
    goToLink(url: string){
      window.open(url, "_blank");
    }
    projects:any[] = [
      {
        title: 'Logbook',
        class: 'lb',
        description: 'Landing',
        image: '../../../assets/img/lg.png',
        url: ''
      },
      {
        title: 'Rails Blog',
        class: 'rail',
        description: 'Landing',
        image: '../../../assets/img/home.png',
        url: ''
      },
      {
        title: 'Arduino Page',
        class: 'ard',
        description: 'Landing',
        image: '../../../assets/img/ard.png',
        url: ''
      },
      {
        title: 'Room',
        class: 'room',
        description: 'Single page challenge',
        image: '../../../assets/img/room.jpg',
        url: ''
      },
      {
        title: 'Book Mark',
        class: 'book',
        description: 'Single page challenge',
        image: '../../../assets/img/bookMark.jpg',
        url: ''
      },
      {
        title: 'Fylo',
        class: 'fylo',
        description: 'Landing page challenge',
        image: '../../../assets/img/fylo.png',
        url: ''
      }
   ];
   //<!--
  // <a (click)="goToLink('https://log-book-landing.vercel.app/')" class="btn btn-primary">Ver</a>
  // <a (click)="goToLink('https://github.com/Nicolas-alt/LogBookLanding')"  class="btn btn-outline-info">Ver código</a>
  ///<a (click)="goToLink('https://github.com/Nicolas-alt/RailsBlog')" class="btn btn-outline-info">Ver código</a>
 //  <a (click)="goToLink('https://github.com/Nicolas-alt/DiscoveringMusic')" class="btn btn-outline-info">Ver código</a>
 //  <a (click)="goToLink('https://github.com/Nicolas-alt/The-tables')" class="btn btn-outline-info">Ver código</a>
 // -->
  constructor() {}
  ngOnInit(): void {}

}
