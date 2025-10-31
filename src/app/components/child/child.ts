// components/child/child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="child-container">
      <h3>Componente Hijo</h3>
      
      <!-- Mostrar datos recibidos del padre -->
      <div class="input-demo">
        <p><strong>Datos del Padre:</strong></p>
        <p>Nombre: {{ userName }}</p>
        <p>Edad: {{ userAge }}</p>
        <p>Activo: {{ isActive ? 'Sí' : 'No' }}</p>
        <p>Mensaje: {{ message }}</p>
      </div>

      <!-- Enviar eventos al padre -->
      <div class="output-demo">
        <button (click)="sendMessage()" class="btn btn-primary">
          Enviar Mensaje al Padre
        </button>
        
        <button (click)="sendData()" class="btn btn-secondary">
          Enviar Datos al Padre
        </button>

        <!-- INPUT CON ngModel -->
        <input 
          type="text" 
          [(ngModel)]="customMessage"
          placeholder="Escribe un mensaje personalizado"
          class="form-input"
        >
        <button (click)="sendCustomMessage()" class="btn btn-info">
          Enviar Mensaje Personalizado
        </button>
      </div>
    </div>
  `,
  styles: [`
    .child-container {
      border: 2px solid #007bff;
      border-radius: 8px;
      padding: 20px;
      margin: 10px 0;
      background-color: #f8f9fa;
    }
    .input-demo, .output-demo {
      background: white;
      padding: 15px;
      border-radius: 6px;
      margin-bottom: 15px;
    }
    .btn {
      padding: 8px 16px;
      margin: 5px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn-primary { background-color: #007bff; color: white; }
    .btn-secondary { background-color: #6c757d; color: white; }
    .btn-info { background-color: #17a2b8; color: white; }
    .form-input {
      padding: 8px;
      margin: 5px;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 100%;
      max-width: 300px;
    }
  `]
})
export class ChildComponent {
  // @Input() - Recibir datos del padre
  @Input() userName: string = '';
  @Input() userAge: number = 0;
  @Input() isActive: boolean = false;
  @Input() message: string = '';

  // @Output() - Enviar eventos al padre
  @Output() messageEvent = new EventEmitter<string>();
  @Output() dataEvent = new EventEmitter<any>();
  @Output() customMessageEvent = new EventEmitter<string>();

  // PROPERTY PARA ngModel - ¡IMPORTANTE!
  customMessage: string = '';

  sendMessage() {
    this.messageEvent.emit('¡Hola desde el hijo! ' + new Date().toLocaleTimeString());
  }

  sendData() {
    const data = {
      id: Math.random(),
      timestamp: new Date(),
      message: 'Datos enviados desde el hijo'
    };
    this.dataEvent.emit(data);
  }

  sendCustomMessage() {
    if (this.customMessage.trim()) {
      this.customMessageEvent.emit(this.customMessage);
      this.customMessage = ''; // Limpiar el input después de enviar
    }
  }
}