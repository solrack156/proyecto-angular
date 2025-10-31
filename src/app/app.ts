import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('Nuevo Proyecto Angular');

  links = [
    { title: 'Sobre mí', link: '/about', external: false },
    { title: 'Portfolio', link: '/activities', external: false },
    { title: 'Hobbies', link: '/hobbies', external: false },
    { title: 'Habilidades', link: '/skills', external: false },
    { title: 'Contacto', link: '/contact', external: false },
    { title: 'Descargar CV', link: '/assets/CV.pdf', external: true }
  ];
}
