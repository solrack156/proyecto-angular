// components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  // USAR VARIABLE TRADICIONAL (no signal)
  isOpen: boolean = false;

  links = [
    { title: 'Sobre mí', link: '/about', external: false },
    { title: 'Portfolio', link: '/activities', external: false },
    { title: 'Hobbies', link: '/hobbies', external: false },
    { title: 'Habilidades', link: '/skills', external: false },
    { title: 'Contacto', link: '/contact', external: false },
    { title: 'Event Binding', link: '/event-binding', external: false },
    { title: 'Property Binding', link: '/property-binding', external: false },
    { title: 'Two-Way Binding', link: '/two-way-binding', external: false },
    { title: 'Parent-Child', link: '/parent-child', external: false },
    { title: 'Descargar CV', link: '/assets/CV.pdf', external: true }
  ];

  toggle() {
    this.isOpen = !this.isOpen;
  }
}