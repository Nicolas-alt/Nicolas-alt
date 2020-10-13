import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
    projects:any[] = [
      {
        title: 'Logbook',
        class: 'lb',
        description: 'Landing',
        image: '../../../assets/img/lg.png',
        url: 'https://log-book-landing.vercel.app/'
      },
      {
        title: 'Rails Blog',
        class: 'rail',
        description: 'Landing',
        image: '../../../assets/img/home.png',
        url: 'https://github.com/Nicolas-alt/RailsBlog'
      },
      {
        title: 'Arduino Page',
        class: 'ard',
        description: 'Landing',
        image: '../../../assets/img/ard.png',
        url: 'https://github.com/Nicolas-alt'
      },
      {
        title: 'Room',
        class: 'room',
        description: 'Single page challenge',
        image: '../../../assets/img/room.jpg',
        url: 'https://nicolas-alt.github.io/room-home-challenge/'
      },
      {
        title: 'Book Mark',
        class: 'book',
        description: 'Single page challenge',
        image: '../../../assets/img/bookMark.jpg',
        url: 'https://github.com/Nicolas-alt'
      },
      {
        title: 'Fylo',
        class: 'fylo',
        description: 'Landing page challenge',
        image: '../../../assets/img/fylo.png',
        url: 'https://github.com/Nicolas-alt/Fylo-landing-page'
      }
   ];

  constructor() {}
  ngOnInit(): void {

    const card = ScrollReveal({ reset: true });

     card.reveal('.div--tecImg',{
      opacity: 0,
      duration: 300,
      interval: 250,
      rotate: {x:20, y:50 } ,
      origin: 'left'
    }, 50);

    const project = ScrollReveal({ reset: true });

    setTimeout(()=> {

    project.reveal('.img--proyecto', {
      opacity: 0,
      duration: 500,
      interval: 250,
      origin: 'top'
    }, 80)
    , 500})}//stTime
}
