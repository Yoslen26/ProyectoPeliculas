import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'proyectoWeb';
    peliculas = [
      {
        titulo: 'El rey León',
        fechaLanzamiento: new Date('2025-01-02'),
        precio: 6.50,
        poster: 'https://es.web.img3.acsta.net/medias/nmedia/18/68/20/31/19785394.jpg?coixp=47&coiyp=41'
      },
      {
        titulo: 'La sirenita',
        fechaLanzamiento: new Date('2025-03-03'),
        precio: 8.40,
        poster: 'https://es.web.img2.acsta.net/medias/nmedia/18/80/56/45/19549127.jpg'
      },
      {
        titulo: 'Blancanieves y los siete enanos',
        fechaLanzamiento: new Date('2025-05-04'),
        precio: 10.50,
        poster: 'https://i.pinimg.com/736x/70/26/eb/7026eb576236063d722ed6448d74f051.jpg'
      }
  ]

}