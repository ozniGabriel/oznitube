import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/videoModel';
import { ReturnVideosService } from 'src/app/services/return-videos-home.service';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})

export class ShortsComponent implements OnInit {

  shortVideos!: Array<Video>

  constructor(private returnVideo: ReturnVideosService) { }

  ngOnInit(): void {
    this.shortVideos = this.returnVideo.getShortsVideosHome()
  }

  scrollUp(){
    window.scroll(0, scrollY -= 550)
  }

  scrollDown(){
    window.scroll(0, scrollY += 550)
  }

}
