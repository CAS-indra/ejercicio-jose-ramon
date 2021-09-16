import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  public pie = 'Pie de la página...';
  
  constructor() { }

  ngOnInit(): void {
  }

}
