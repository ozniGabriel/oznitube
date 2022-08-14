import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/videoModel';
import { ReturnVideosService } from 'src/app/services/return-videos-home.service';

@Component({
  selector: 'app-inscricoes',
  templateUrl: './inscricoes.component.html',
  styleUrls: ['./inscricoes.component.css']
})
export class InscricoesComponent implements OnInit {
  todayVideos!: Array<Video>
  yesterdayVideos!: Array<Video>
  thisWeekVideos!: Array<Video>
  constructor(private returnVideosService: ReturnVideosService) { }

  ngOnInit(): void {
    this.todayVideos = this.returnVideosService.getFirstVideosHome()
    this.yesterdayVideos = this.returnVideosService.getFirstVideosHome()
    this.thisWeekVideos = this.returnVideosService.getFirstVideosHome()
  }

}
