import { Injectable } from '@angular/core';
import { Icard } from '../interface';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
    plant: Icard[] = [
    {
      id: 1,
      name: "Pianta 1",
      altezza: 100,
      specie:"Specie 1",
      descrizione: "Lorem ipsum sit amet...",
      dayFromBird:"1/1/2020",
      img: "../assets/ImgSucculent1.jpeg"
    },
    {
      id: 2,
      name: "Pianta 2",
      altezza: 100,
      specie:"Specie 2",
      descrizione: "Lorem ipsum sit amet...",
      dayFromBird:"1/1/2020",
      img: "../assets/ImgSucculent2.jpeg"
    },
    {
      id: 3,
      name: "Pianta 3",
      altezza: 100,
      specie:"Specie 3",
      descrizione: "Lorem ipsum sit amet...",
      dayFromBird:"1/1/2020",
      img: "../assets/ImgSucculent3.jpeg"
    },
    {
      id: 4,
      name: "Pianta 4",
      altezza: 100,
      specie:"Specie 4",
      descrizione: "Lorem ipsum sit amet...",
      dayFromBird:"1/1/2020",
      img: "../assets/ImgSucculent4.jpeg"
    },
    {
      id: 5,
      name: "Pianta 5",
      altezza: 100,
      specie:"Specie 5",
      descrizione: "Lorem ipsum sit amet...",
      dayFromBird:"1/1/2020",
      img: "../assets/ImgSucculent5.jpeg"
    },
    {
      id: 6,
      name: "Pianta 6",
      altezza: 100,
      specie:"Specie 6",
      descrizione: "Lorem ipsum sit amet...",
      dayFromBird:"1/1/2020",
      img: "../assets/ImgSucculent6.jpeg"
    }
  ]

  constructor() { }

  getAll(): Icard[]{
   return this.plant;
  }

  get(id:number): Icard {
    return this.plant.find(plant => plant.id === id) as Icard
  }

}
