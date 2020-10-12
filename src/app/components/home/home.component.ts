import { Component, OnInit } from '@angular/core';
import  Typed  from 'typed.js';
import ScrollReveal from 'scrollreveal'

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
       <span style="color: #C0392B">  < p> </span>
       <span style="color: white">   Hi there </span>
       <span style="color: #C0392B"> < /p> </span>
         ); <br />
       }
    `],
      smartBackspace: true, 
      loop: false,
      typeSpeed: 25,
      backSpeed: 50,
      startDelay: 1000
  });

  let dev = new Typed("#dev",{
    strings: [
      "Front dev 🎨",
      "Desarrollador 🧩",
      "Entusiasta 🤩",
      "Developer 👾",
      "Web Developer 💻" 
  ],
    loop: true,
    startDelay: 1000,
    typeSpeed: 80,
    backSpeed: 80
  });


  const card = ScrollReveal({
    reset: true,
    duration: 1000
  });
  
  card.reveal('.Card',{
    opacity: 0,
    duration: 1000,
    interval: 500,
    rotate: {x:10} ,
    origin: 'bottom'
  }, 50)

  }
}

