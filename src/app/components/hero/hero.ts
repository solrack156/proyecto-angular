import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="hero">
      <div class="particles">
        <div class="particle" *ngFor="let p of particles" [style.left.%]="p.x" [style.animation-delay.s]="p.delay"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <div class="text-content" [@fadeIn]>
            <h1 class="glitch" data-text="¡Hola! Soy">¡Hola! Soy</h1>
            <h2 class="name">
              <span class="typing">Carlos Manuel Diaz Guillen</span>
              <span class="cursor">|</span>
            </h2>
            <p class="subtitle">
              Apasionado por la Tecnología | jugador de videojuegos | interesado en el mudo de la maquinas
            </p>
            <p class="description">
              Siempre inteto dar mi mejor esfuerzo en cada cosa que hago. 
              Conoce un poco mas de mi.
            </p>
            
            <div class="cta-buttons">
              <a routerLink="/about" class="btn btn-primary">
                <span>Conoce más</span>
                <span class="icon">→</span>
              </a>
              <a routerLink="/contact" class="btn btn-secondary">
                <span>Contáctame</span>
                <span class="icon">✉</span>
              </a>
            </div>

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
            </div>
          </div>

          <div class="image-content">
            <div class="profile-container">
              <div class="circle-bg"></div>
              <div class="profile-image">
                <img [src]="profileSrc" alt="Profile" (error)="onImgError()" />
              </div>
              <div class="floating-cards">
                <div class="card card-1">💻 Code</div>
                <div class="card card-2">🎨 Design</div>
                <div class="card card-3">🚀 Innovation</div>
              </div>
            </div>
          </div>
        </div>

        <div class="scroll-indicator">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <p>Scroll para explorar</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }

    .particles {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .particle {
      position: absolute;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      width: 10px;
      height: 10px;
      animation: float-particle 20s infinite;
    }

    @keyframes float-particle {
      0%, 100% {
        transform: translateY(100vh) translateX(0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100px) translateX(100px) rotate(360deg);
        opacity: 0;
      }
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
      width: 100%;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .text-content {
      animation: fadeInUp 1s ease-out;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .glitch {
      font-size: 2rem;
      color: #fff;
      margin-bottom: 10px;
      position: relative;
      animation: glitch 3s infinite;
    }

    @keyframes glitch {
      0%, 90%, 100% {
        transform: translate(0);
      }
      92% {
        transform: translate(-2px, 2px);
      }
      94% {
        transform: translate(2px, -2px);
      }
      96% {
        transform: translate(-2px, 2px);
      }
    }

    .name {
      font-size: 3.5rem;
      font-weight: 800;
      color: #fff;
      margin: 10px 0;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .typing {
      display: inline-block;
    }

    .cursor {
      animation: blink 1s infinite;
      font-weight: 300;
    }

    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }

    .subtitle {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.9);
      margin: 15px 0;
      font-weight: 300;
    }

    .description {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.8;
      margin: 20px 0 30px;
      max-width: 500px;
    }

    .cta-buttons {
      display: flex;
      gap: 20px;
      margin-bottom: 40px;
    }

    .btn {
      padding: 15px 35px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
      transition: left 0.3s ease;
    }

    .btn:hover::before {
      left: 100%;
    }

    .btn-primary {
      background: #fff;
      color: #667eea;
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .btn-secondary {
      background: transparent;
      color: #fff;
      border: 2px solid #fff;
    }

    .btn-secondary:hover {
      background: #fff;
      color: #667eea;
      transform: translateY(-3px);
    }

    .icon {
      transition: transform 0.3s ease;
    }

    .btn:hover .icon {
      transform: translateX(5px);
    }

    .social-links {
      display: flex;
      gap: 20px;
    }

    .social-link {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      transition: all 0.3s ease;
    }

    .social-link svg {
      width: 20px;
      height: 20px;
    }

    .social-link:hover {
      background: #fff;
      color: #667eea;
      transform: translateY(-5px) rotate(360deg);
    }

    .image-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .profile-container {
      position: relative;
      width: 400px;
      height: 400px;
    }

    .circle-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      animation: pulse 3s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    .profile-image {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      border: 5px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .floating-cards {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    .card {
      position: absolute;
      background: #fff;
      padding: 15px 25px;
      border-radius: 15px;
      font-weight: 600;
      color: #667eea;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      animation: float-card 4s ease-in-out infinite;
    }

    .card-1 {
      top: 10%;
      left: -15%;
      animation-delay: 0s;
    }

    .card-2 {
      top: 50%;
      right: -20%;
      animation-delay: 1s;
    }

    .card-3 {
      bottom: 10%;
      left: -10%;
      animation-delay: 2s;
    }

    @keyframes float-card {
      0%, 100% {
        transform: translateY(0) rotate(-5deg);
      }
      50% {
        transform: translateY(-15px) rotate(5deg);
      }
    }

    .scroll-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      color: #fff;
      animation: bounce 2s infinite;
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      50% {
        transform: translateX(-50%) translateY(-10px);
      }
    }

    .mouse {
      width: 30px;
      height: 50px;
      border: 3px solid rgba(255, 255, 255, 0.5);
      border-radius: 25px;
      margin: 0 auto 10px;
      position: relative;
    }

    .wheel {
      width: 6px;
      height: 10px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 3px;
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      animation: wheel-scroll 2s infinite;
    }

    @keyframes wheel-scroll {
      0% {
        opacity: 1;
        top: 8px;
      }
      100% {
        opacity: 0;
        top: 30px;
      }
    }

    .scroll-indicator p {
      font-size: 0.9rem;
      opacity: 0.8;
      margin: 0;
    }

    @media (max-width: 968px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .text-content {
        order: 2;
      }

      .image-content {
        order: 1;
      }

      .name {
        font-size: 2.5rem;
        justify-content: center;
      }

      .description {
        max-width: 100%;
      }

      .cta-buttons {
        justify-content: center;
        flex-wrap: wrap;
      }

      .social-links {
        justify-content: center;
      }

      .profile-container {
        width: 300px;
        height: 300px;
      }

      .card {
        font-size: 0.9rem;
        padding: 10px 15px;
      }
    }

    @media (max-width: 576px) {
      .glitch {
        font-size: 1.5rem;
      }

      .name {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1.1rem;
      }

      .description {
        font-size: 1rem;
      }

      .btn {
        padding: 12px 25px;
        font-size: 0.9rem;
      }
    }

    :host-context(.dark-theme) .hero {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    }
  `]
})
export class HeroComponent implements OnInit {
  particles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    delay: Math.random() * 20
  }));

  // La imagen debe estar en src/assets/profile.jpg
  profileSrc = 'assets/profile.jpg';

  ngOnInit() {
    // Asegurarse de que la imagen esté precargada
    const img = new Image();
    img.src = this.profileSrc;
    img.onload = () => {
      console.log('Imagen cargada exitosamente');
    };
    img.onerror = (error) => {
      console.error('Error al cargar la imagen:', error);
      this.onImgError();
    };
  }

  onImgError() {
    console.error('Fallando al cargar la imagen desde:', this.profileSrc);
    this.profileSrc = 'https://via.placeholder.com/400x400.png?text=Perfil';
  }
}