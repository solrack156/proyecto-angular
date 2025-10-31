import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact">
      <div class="container">
        <div class="section-header">
          <span class="tag">Hablemos</span>
          <h2 class="section-title">Contáctame</h2>
          <p class="section-subtitle">¿Tienes un proyecto en mente? ¡Trabajemos juntos!</p>
        </div>

        <div class="contact-content">
          <div class="contact-info">
            <div class="info-card">
              <div class="card-icon">📧</div>
              <h3>Gmail</h3>
              <p class="contact-info">diazguillencarlosmanuel8@gmail.com</p>
            </div>

            <div class="info-card">
              <div class="card-icon">📱</div>
              <h3>Teléfono</h3>
              <p class="contact-info">+51 986 914 377</p>
            </div>

            <div class="info-card">
              <div class="card-icon">📍</div>
              <h3>Ubicación</h3>
              <p>Andahuaylas, Perú</p>
              <a href="https://www.google.com/maps?q=Andahuaylas+Peru" 
                 target="_blank" 
                 class="contact-link">Ver en mapa →</a>
            </div>

            <div class="social-section">
              <h4>Sígueme en redes</h4>
              <div class="social-links">
                <a href="https://github.com/CarlosDiaz12" target="_blank" rel="noopener" class="social-btn" title="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/carlos-manuel-diaz-guillen/" target="_blank" rel="noopener" class="social-btn" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/CarlosDiazG8" target="_blank" rel="noopener" class="social-btn" title="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <label for="name">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  placeholder="Tu nombre"
                  [class.error]="contactForm.submitted && !formData.name">
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  email
                  placeholder="tu@gmail.com"
                  [class.error]="contactForm.submitted && !formData.email">
              </div>

              <div class="form-group">
                <label for="subject">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  placeholder="¿De qué quieres hablar?"
                  [class.error]="contactForm.submitted && !formData.subject">
              </div>

              <div class="form-group">
                <label for="message">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  rows="6"
                  placeholder="Cuéntame sobre tu proyecto..."
                  [class.error]="contactForm.submitted && !formData.message"></textarea>
              </div>

              <button type="submit" class="submit-btn" [class.loading]="isSubmitting">
                <span *ngIf="!isSubmitting">Enviar Mensaje</span>
                <span *ngIf="isSubmitting">Enviando...</span>
                <span class="btn-icon">→</span>
              </button>

              <div class="form-message success" *ngIf="showSuccess">
                ✅ ¡Mensaje enviado con éxito! Te responderé pronto.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 100px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 80px;
      color: white;
    }

    .tag {
      display: inline-block;
      padding: 8px 20px;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 15px;
      backdrop-filter: blur(10px);
    }

    .section-title {
      font-size: 3rem;
      font-weight: 800;
      color: white;
      margin: 15px 0;
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.9);
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 50px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .info-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 30px;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      text-align: center;
      transition: all 0.3s ease;
    }

    .info-card:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-5px);
    }

    .card-icon {
      font-size: 3rem;
      margin-bottom: 15px;
    }

    .info-card h3 {
      font-size: 1.3rem;
      color: white;
      margin-bottom: 10px;
    }

    .info-card p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.1rem;
      margin-bottom: 15px;
    }

    .contact-info {
      padding: 8px 15px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      word-break: break-word;
      font-family: monospace;
      letter-spacing: 0.5px;
    }

    .contact-link {
      color: white;
      text-decoration: none;
      font-weight: 600;
      display: inline-block;
      padding: 8px 20px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 20px;
      transition: all 0.3s ease;
    }

    .contact-link:hover {
      background: white;
      color: #667eea;
      transform: translateX(5px);
      cursor: pointer;
    }

    .contact-link:active {
      transform: scale(0.98);
      background: #f8f9fa;
    }

    .social-section {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 30px;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      text-align: center;
    }

    .social-section h4 {
      color: white;
      font-size: 1.3rem;
      margin-bottom: 20px;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 15px;
    }

    .social-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: all 0.3s ease;
    }

    .social-btn svg {
      width: 24px;
      height: 24px;
    }

    .social-btn:hover {
      background: white;
      color: #667eea;
      transform: translateY(-5px) rotate(360deg);
    }

    .contact-form-wrapper {
      background: white;
      padding: 50px;
      border-radius: 30px;
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-group label {
      font-weight: 600;
      color: #1a202c;
      font-size: 1rem;
    }

    .form-group input,
    .form-group textarea {
      padding: 15px 20px;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-size: 1rem;
      font-family: inherit;
      transition: all 0.3s ease;
      background: #f7fafc;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #667eea;
      background: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .form-group input.error,
    .form-group textarea.error {
      border-color: #f56565;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      padding: 18px 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      position: relative;
      overflow: hidden;
    }

    .submit-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
      transition: left 0.5s ease;
    }

    .submit-btn:hover::before {
      left: 100%;
    }

    .submit-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
    }

    .submit-btn.loading {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .btn-icon {
      transition: transform 0.3s ease;
    }

    .submit-btn:hover .btn-icon {
      transform: translateX(5px);
    }

    .form-message {
      padding: 15px 20px;
      border-radius: 12px;
      text-align: center;
      font-weight: 600;
      animation: slideIn 0.5s ease-out;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .form-message.success {
      background: #c6f6d5;
      color: #22543d;
    }

    @media (max-width: 968px) {
      .contact-content {
        grid-template-columns: 1fr;
      }

      .section-title {
        font-size: 2.5rem;
      }

      .contact-form-wrapper {
        padding: 30px 20px;
      }
    }

    :host-context(.dark-theme) .contact-form-wrapper {
      background: #16213e;
    }

    :host-context(.dark-theme) .form-group label {
      color: #e4e4e4;
    }

    :host-context(.dark-theme) .form-group input,
    :host-context(.dark-theme) .form-group textarea {
      background: #0f1624;
      border-color: #2d3748;
      color: #e4e4e4;
    }

    :host-context(.dark-theme) .form-group input:focus,
    :host-context(.dark-theme) .form-group textarea:focus {
      background: #1a1a2e;
      border-color: #8b9aff;
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  showSuccess = false;



  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.subject && this.formData.message) {
      this.isSubmitting = true;

      // Simular envío (aquí integrarías tu servicio de email)
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccess = true;
        
        // Resetear formulario
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };

        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      }, 2000);
    }
  }
}