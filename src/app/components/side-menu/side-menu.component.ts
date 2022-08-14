import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent implements OnInit {
  @Input() menuActive = false

  constructor() { }

  ngOnInit(): void {
  }

}
