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
      strings: [`
      <i style="color:  #3498DB"> export </i>
      <span style="color: #8E44AD">const </span>
      <span style="color: white"> greeting </span> = 
     <i style="color: #8E44AD"> () </i> 
      =>
       { <br />
       <span style="color: #8E44AD"> return </span> (
       <span style="color: #C0392B">  < h1> </span>
       <span style="color: white">   Hi there!! </span>
       <span style="color: #C0392B"> < /h1> </span>
         ); <br />
       }
    `],
      smartBackspace: true, 
      loop: false,
      typeSpeed: 25,
      backSpeed: 50,
      startDelay: 1000
  });
  }

}
