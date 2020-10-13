import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const icons = ScrollReveal({ reset: true });

     icons.reveal('.a--media',{
      opacity: 0,
      delay: 1000,
      duration: 300,
      interval: 250,
      rotate: {x:20, y:50 } ,
      origin: 'left'
    }, 50)
  }
}
