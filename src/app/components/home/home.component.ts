import { Component, OnInit } from '@angular/core';
import  Typed  from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let typed = new Typed("#typed", {
      strings: ['git push --force ^1000\n `pushed to origin with option force`'],
      smartBackspace: true, 
      loop: true,
      typeSpeed: 75,
      backSpeed: 50,
  });
  }

}
