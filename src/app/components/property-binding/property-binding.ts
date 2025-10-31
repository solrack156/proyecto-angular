// components/property-binding/property-binding.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Property Binding Examples</h2>
      
      <!-- Image Binding -->
      <img 
        [src]="imageUrl()" 
        [alt]="imageAlt()" 
        [width]="imageWidth()"
        class="demo-image"
      >
      
      <!-- Input Properties -->
      <div class="form-group">
        <input 
          [type]="inputType()" 
          [placeholder]="placeholderText()"
          [disabled]="isInputDisabled()"
          class="form-input"
        >
        <button 
          class="btn btn-secondary"
          (click)="toggleInput()"
        >
          {{ isInputDisabled() ? 'Habilitar' : 'Deshabilitar' }} Input
        </button>
      </div>
      
      <!-- Class Binding -->
      <div 
        class="demo-box"
        [class]="baseClass()"
        [class.special]="isSpecial()"
        [class.error]="hasError()"
      >
        Este div tiene clases dinámicas
      </div>
      
      <!-- Style Binding -->
      <div 
        class="demo-box"
        [style.background-color]="backgroundColor()"
        [style.color]="textColor()"
        [style.font-size.px]="fontSize()"
        [style.padding.px]="padding()"
      >
        Estilos dinámicos aplicados
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    .demo-image {
      border-radius: 8px;
      margin: 10px 0;
    }
    .form-group {
      margin: 15px 0;
    }
    .form-input {
      padding: 8px 12px;
      margin: 5px;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 200px;
    }
    .btn {
      padding: 8px 12px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }
    .demo-box {
      padding: 15px;
      margin: 10px 0;
      border: 1px solid #dee2e6;
      border-radius: 4px;
      transition: all 0.3s ease;
    }
    .base-box {
      background-color: #f8f9fa;
    }
    .special {
      background-color: #d1ecf1;
      border-color: #bee5eb;
    }
    .error {
      background-color: #f8d7da;
      border-color: #f5c6cb;
      color: #721c24;
    }
  `]
})
export class PropertyBindingComponent {
  imageUrl = signal('https://picsum.photos/200/150');
  imageAlt = signal('Imagen de ejemplo');
  imageWidth = signal(200);
  
  inputType = signal('text');
  placeholderText = signal('Escribe aquí...');
  isInputDisabled = signal(false);
  
  baseClass = signal('demo-box base-box');
  isSpecial = signal(true);
  hasError = signal(false);
  
  backgroundColor = signal('#e8f5e8');
  textColor = signal('#155724');
  fontSize = signal(16);
  padding = signal(15);

  toggleInput() {
    this.isInputDisabled.set(!this.isInputDisabled());
    this.hasError.set(!this.hasError());
  }
}