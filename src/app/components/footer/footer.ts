import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="logo">
              <span class="logo-icon">🚀</span>
              <span class="logo-text">Mi Portafolio</span>
            </div>
            <p class="footer-description">
              Transformando ideas en realidad a través del código y el diseño.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" class="social-link" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" class="social-link" title="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="social-link" title="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h3>Navegación</h3>
            <ul class="footer-links">
              <li><a routerLink="/">Inicio</a></li>
              <li><a routerLink="/about">Sobre Mí</a></li>
              <li><a routerLink="/hobbies">Hobbies</a></li>
              <li><a routerLink="/skills">Habilidades</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Horario</h3>
            <ul class="footer-links">
              <li><a routerLink="/activities">Ver Horario</a></li>
              <li><a href="#">Open Source</a></li>
              <li><a href="#">Colaboraciones</a></li>
              <li><a href="#">Clientes</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Contacto</h3>
            <ul class="footer-links">
              <li><a routerLink="/contact">Formulario</a></li>
              <li><a href="gmail:diazguillencarlosmanuel8@gmail.com">Email</a></li>
              <li><a href="tel:+51986914377">Teléfono</a></li>
              <li><a href="#">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="copyright">
            <p>&copy; {{ currentYear }} Carlos Manuel Diaz Guillen. Todos los derechos reservados.</p>
            <p class="made-with">Hecho con <span class="heart">❤️</span> y <span class="tech">Angular {{ angularVersion }}</span></p>
          </div>
          <div class="footer-bottom-links">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Uso</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
      color: #e2e8f0;
      padding: 60px 20px 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr repeat(3, 1fr);
      gap: 50px;
      margin-bottom: 50px;
      padding-bottom: 50px;
      border-bottom: 1px solid rgba(226, 232, 240, 0.1);
    }

    .footer-section {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .logo-icon {
      font-size: 2rem;
      animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .footer-description {
      color: #a0aec0;
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .social-links {
      display: flex;
      gap: 15px;
    }

    .social-link {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(226, 232, 240, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #e2e8f0;
      transition: all 0.3s ease;
    }

    .social-link svg {
      width: 20px;
      height: 20px;
    }

    .social-link:hover {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      transform: translateY(-5px) rotate(360deg);
    }

    .footer-section h3 {
      font-size: 1.2rem;
      color: #fff;
      margin-bottom: 5px;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .footer-links a {
      color: #a0aec0;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .footer-links a:hover {
      color: #667eea;
      transform: translateX(5px);
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 30px;
      flex-wrap: wrap;
      gap: 20px;
    }

    .copyright {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .copyright p {
      color: #a0aec0;
      font-size: 0.9rem;
      margin: 0;
    }

    .made-with {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .heart {
      color: #f56565;
      animation: heartbeat 1.5s ease-in-out infinite;
    }

    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      25% { transform: scale(1.2); }
      50% { transform: scale(1); }
    }

    .tech {
      color: #667eea;
      font-weight: 600;
    }

    .footer-bottom-links {
      display: flex;
      gap: 25px;
    }

    .footer-bottom-links a {
      color: #a0aec0;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-bottom-links a:hover {
      color: #667eea;
    }

    @media (max-width: 968px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
      }

      .footer-section:first-child {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 576px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }

      .footer-bottom-links {
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    :host-context(.dark-theme) .footer {
      background: linear-gradient(135deg, #0f1624 0%, #1a1a2e 100%);
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  angularVersion = '20.3.7';
}