import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //init_plugins();
  }

}
