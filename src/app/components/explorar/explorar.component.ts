import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/videoModel';
import { ReturnVideosService } from 'src/app/services/return-videos-home.service';


@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})

export class ExplorarComponent implements OnInit {
  twoVideosOnHigh!: Array<Video>
  otherVideosOnHigh!: Array<Video>
  shortsOnHigh!: Array<Video>
  
  constructor(private returnVideoService: ReturnVideosService) { }

  ngOnInit(): void {
    this.twoVideosOnHigh = this.returnVideoService.getTwoVideosForExplore()
    this.otherVideosOnHigh = this.returnVideoService.getFirstVideosHome()
    this.shortsOnHigh = this.returnVideoService.getShortsVideosHome()
  }

}
