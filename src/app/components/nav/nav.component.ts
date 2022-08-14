import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() navActive = false
  constructor() { }

  ngOnInit(): void {
  }

  actionMenu(){
    if(this.navActive){
      this.navActive = false
    } else {
      this.navActive = true
    }
  }
}
