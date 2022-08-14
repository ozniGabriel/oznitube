import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/videoModel';
import { ReturnVideosService } from 'src/app/services/return-videos-home.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {
  historicVideos!: Array<Video>
  likedVideos!: Array<Video>

  constructor(private returnVideos: ReturnVideosService) { }

  ngOnInit(): void {
    this.historicVideos = this.returnVideos.getFirstVideosHome()
    this.likedVideos = this.returnVideos.getFirstVideosHome()
  }

}
