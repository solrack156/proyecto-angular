// components/event-binding/event-binding.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Event Binding Examples</h2>
      
      <!-- Click Event -->
      <button 
        class="btn btn-primary"
        (click)="onButtonClick()"
      >
        Haz clic aquí
      </button>
      <p>{{ clickMessage() }}</p>
      
      <!-- Input Event -->
      <input 
        type="text" 
        class="form-input"
        (input)="onInputChange($event)" 
        placeholder="Escribe algo..."
      >
      <p>Texto ingresado: {{ inputText() }}</p>
      
      <!-- Mouse Events -->
      <div 
        class="hover-area"
        (mouseenter)="onMouseEnter()" 
        (mouseleave)="onMouseLeave()"
        [class.highlight]="isHighlighted()"
      >
        Pasa el mouse por aquí
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    .btn {
      padding: 10px 15px;
      margin: 10px 5px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
    .form-input {
      padding: 8px 12px;
      margin: 10px 0;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 100%;
      max-width: 300px;
    }
    .hover-area {
      padding: 20px;
      border: 2px dashed #ccc;
      margin: 15px 0;
      transition: all 0.3s ease;
      border-radius: 8px;
    }
    .highlight {
      background-color: #fff3cd;
      border-color: #ffc107;
    }
  `]
})
export class EventBindingComponent {
  clickMessage = signal('Presiona el botón...');
  inputText = signal('');
  isHighlighted = signal(false);

  onButtonClick() {
    this.clickMessage.set(`¡Botón clickeado! - ${new Date().toLocaleTimeString()}`);
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputText.set(inputElement.value);
  }

  onMouseEnter() {
    this.isHighlighted.set(true);
  }

  onMouseLeave() {
    this.isHighlighted.set(false);
  }
}