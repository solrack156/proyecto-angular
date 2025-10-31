// components/loading/loading.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-container" [class.hidden]="!isLoading">
      
      <!-- Overlay de fondo -->
      <div class="loading-overlay"></div>
      
      <!-- Contenido del loading -->
      <div class="loading-content" [class]="loadingType">
        
        <!-- Spinner clásico -->
        <div *ngIf="loadingType === 'spinner'" class="spinner-animation">
          <div class="spinner"></div>
          <div class="loading-text">
            <p class="message">{{ message }}</p>
            <p class="sub-message" *ngIf="subMessage">{{ subMessage }}</p>
          </div>
        </div>

        <!-- Dots bouncing -->
        <div *ngIf="loadingType === 'dots'" class="dots-animation">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="loading-text">
            <p class="message">{{ message }}</p>
          </div>
        </div>

        <!-- Skeleton loader -->
        <div *ngIf="loadingType === 'skeleton'" class="skeleton-animation">
          <div class="skeleton-line large"></div>
          <div class="skeleton-line medium"></div>
          <div class="skeleton-line small"></div>
          <div class="loading-text">
            <p class="message">{{ message }}</p>
          </div>
        </div>

        <!-- Barra de progreso -->
        <div class="progress-container" *ngIf="showProgress">
          <div class="progress-bar">
            <div class="progress-fill" [style.width.%]="progress"></div>
          </div>
          <span class="progress-text">{{ progress }}%</span>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .loading-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    
    .loading-container.hidden {
      display: none;
    }
    
    .loading-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(4px);
    }
    
    .loading-content {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      text-align: center;
      z-index: 1001;
      min-width: 200px;
      max-width: 300px;
    }

    /* Spinner Animation */
    .spinner-animation .spinner {
      width: 50px;
      height: 50px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #667eea;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Dots Animation */
    .dots-animation {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin-bottom: 1rem;
    }

    .dots-animation .dot {
      width: 12px;
      height: 12px;
      background: #667eea;
      border-radius: 50%;
      animation: bounce 1.4s infinite ease-in-out;
    }

    .dots-animation .dot:nth-child(1) { animation-delay: -0.32s; }
    .dots-animation .dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes bounce {
      0%, 80%, 100% { 
        transform: scale(0);
      } 40% { 
        transform: scale(1);
      }
    }

    /* Skeleton Animation */
    .skeleton-animation {
      text-align: left;
    }

    .skeleton-line {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 4px;
      margin-bottom: 0.5rem;
    }

    .skeleton-line.large { height: 20px; }
    .skeleton-line.medium { height: 16px; width: 80%; }
    .skeleton-line.small { height: 12px; width: 60%; }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    /* Progress Bar */
    .progress-container {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .progress-bar {
      flex: 1;
      height: 8px;
      background: #f0f0f0;
      border-radius: 4px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 4px;
      transition: width 0.3s ease;
    }

    .progress-text {
      font-size: 0.9rem;
      font-weight: 600;
      color: #667eea;
      min-width: 40px;
    }

    /* Text Styles */
    .loading-text .message {
      font-weight: 600;
      color: #333;
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
    }

    .loading-text .sub-message {
      font-size: 0.9rem;
      color: #666;
      margin: 0;
    }
  `]
})
export class LoadingComponent {
  @Input() isLoading: boolean = false;
  @Input() message: string = 'Cargando...';
  @Input() subMessage: string = '';
  
  // ✅ AÑADE ESTA PROPIEDAD QUE FALTABA
  @Input() loadingType: 'spinner' | 'dots' | 'skeleton' = 'spinner';
  
  @Input() showProgress: boolean = false;
  @Input() progress: number = 0;
  
  onOverlayClick() {
    console.log('Overlay clickeado');
  }
}