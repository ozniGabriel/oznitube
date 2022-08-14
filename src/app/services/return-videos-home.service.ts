import { Injectable } from '@angular/core';
import { Video } from '../models/videoModel';

@Injectable({
  providedIn: 'root'
})
export class ReturnVideosService {
  twoVideosForExpore!: Array<Video>
  constructor() { }

  getFirstVideosHome(){
    return firstVideosHome
  }

  getShortsVideosHome(){
    return shortsHome
  }

  getTopNewsVideosHome(){
    return topNewsHome
  }

  getTwoVideosForExplore(){
    this.twoVideosForExpore = this.getFirstVideosHome().map(x => x)
    
    return this.twoVideosForExpore.splice(0, 2)
  }
}

const firstVideosHome = [
  {
    image: 'video3.jpg',
    title: 'ENCONTRAMOS UM DEV BONITO',
    chanel: 'Ozni Gabriel',
    views: '958 mil',
    released: 'há 1 dia',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video8.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '20 mil',
    released: 'há 1 dia',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video2.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '6 mil',
    released: 'há 10 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video4.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '654 mil',
    released: 'há 16 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video5.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '92 mil',
    released: 'há 10 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video1.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '2 mil',
    released: 'há 22 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video6.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '78 mil',
    released: 'há 17 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video7.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '468 mil',
    released: 'há 1 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },{
    image: 'video3.jpg',
    title: 'ENCONTRAMOS UM DEV BONITO',
    chanel: 'Ozni Gabriel',
    views: '958 mil',
    released: 'há 1 dia',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video8.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '20 mil',
    released: 'há 1 dia',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video2.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '6 mil',
    released: 'há 10 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video4.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '654 mil',
    released: 'há 16 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video5.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '92 mil',
    released: 'há 10 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video1.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '2 mil',
    released: 'há 22 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video6.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '78 mil',
    released: 'há 17 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video7.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '468 mil',
    released: 'há 1 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  }
]

const shortsHome = [
  {
    image: 'video1.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '7 mil',
    released: 'há uma semana',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video2.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '56 mil',
    released: 'há 1 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video3.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '2 mil',
    released: 'há uma semana',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video4.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '87 mil',
    released: 'há 1 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video5.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '4 mil',
    released: 'há 3 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video6.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '2 mil',
    released: 'há 4 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  }
]

const topNewsHome = [
  {
    image: 'video1.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '287 mil',
    released: 'há 5 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video2.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '48 mil',
    released: 'há 10 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video3.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '87 mil',
    released: 'há 1 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video4.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '54 mil',
    released: 'há 1 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video5.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '321 mil',
    released: 'há 18 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video6.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '165 mil',
    released: 'há 12 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video7.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '96 mil',
    released: 'há 1 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video8.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '415 mil',
    released: 'há 21 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video9.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '97 mil',
    released: 'há 13 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video10.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '641 mil',
    released: 'há 16 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video11.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '952 mil',
    released: 'há 1 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  },
  {
    image: 'video12.jpg',
    title: 'TÍTULO DO VÍDEO',
    chanel: 'Ozni Gabriel',
    views: '79 mil',
    released: 'há 13 dias',
    description: "Aqui fica a descrição de cada video. #desc #angular #programção"
  }
  
]