import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  
   public cabecera = 'Esta es la cabecera de la pagina...';

  constructor() { }

  ngOnInit(): void {
  }

}
