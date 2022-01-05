import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  modeControl = new FormControl();
  modes: string[] = ['one', 'two', 'three'];
  constructor() { }

  ngOnInit(): void {
  }

}
