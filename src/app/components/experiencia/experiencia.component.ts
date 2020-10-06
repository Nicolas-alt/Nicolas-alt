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
    
  constructor() { }

  ngOnInit(): void {
  }

}
