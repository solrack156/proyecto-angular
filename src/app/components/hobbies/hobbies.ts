import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies.html',
  styleUrls: ['./hobbies.css'],
})
export class HobbiesComponent {
  hobbies = [
    { 
      icon: '📚',
      title: 'Lectura',
      desc: 'Novelas de ciencia ficción, técnicas y artículos.',
      link: 'https://www.goodreads.com'
    },
    {
      icon: '🎮',
      title: 'Videojuegos',
      desc: 'Juegos indie y competiciones casuales.',
      link: 'https://store.steampowered.com'
    },
    {
      icon: '🚴',
      title: 'Ciclismo',
      desc: 'Rutas de fin de semana y mantenimiento de bici.',
      link: 'https://www.strava.com'
    },
    {
      icon: '🎵',
      title: 'Música',
      desc: 'Tocar guitarra y descubrir nuevos artistas.',
      link: 'https://www.spotify.com'
    }
  ];
}
