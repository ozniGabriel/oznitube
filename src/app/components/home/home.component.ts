import { Component, OnInit } from '@angular/core';
import { ReturnVideosService } from 'src/app/services/return-videos-home.service';
import { Video } from '../../models/videoModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  firstVideos!: Array<Video>;
  shortsVideos!: Array<Video>;
  topNewsVideos!: Array<Video>;
  constructor(private returnVideos: ReturnVideosService) {

  }

  ngOnInit(): void {
    this.firstVideos = this.returnVideos.getFirstVideosHome()
    this.shortsVideos = this.returnVideos.getShortsVideosHome()
    this.topNewsVideos = this.returnVideos.getTopNewsVideosHome()
  }
}
