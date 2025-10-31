// components/parent/parent.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child';

// Interface para mejor tipado
interface AppEvent {
  type: string;
  data: any;
  timestamp: Date;
}

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],
  template: `
    <div class="parent-container">
      <h2>Componente Padre</h2>
      
      <!-- Controles para modificar los datos que se envían al hijo -->
      <div class="controls">
        <div class="form-group">
          <label>Nombre:</label>
          <input [(ngModel)]="parentData.name" class="form-input">
        </div>
        
        <div class="form-group">
          <label>Edad:</label>
          <input type="number" [(ngModel)]="parentData.age" class="form-input">
        </div>
        
        <div class="form-group">
          <label>
            <input type="checkbox" [(ngModel)]="parentData.isActive">
            Usuario Activo
          </label>
        </div>
        
        <div class="form-group">
          <label>Mensaje para el hijo:</label>
          <input [(ngModel)]="parentData.message" class="form-input">
        </div>
      </div>

      <!-- Componente Hijo -->
      <app-child
        [userName]="parentData.name"
        [userAge]="parentData.age"
        [isActive]="parentData.isActive"
        [message]="parentData.message"
        (messageEvent)="receiveMessage($event)"
        (dataEvent)="receiveData($event)"
        (customMessageEvent)="receiveCustomMessage($event)"
      ></app-child>

      <!-- Mostrar eventos recibidos del hijo -->
      <div class="events-received">
        <h4>Eventos Recibidos del Hijo:</h4>
        
        <div *ngFor="let event of receivedEvents" class="event-item">
          <strong>{{ event.type }}:</strong> {{ event.data }}
          <small>{{ event.timestamp | date:'medium' }}</small>
        </div>
        
        <p *ngIf="receivedEvents.length === 0" class="no-events">
          No se han recibido eventos aún
        </p>
      </div>
    </div>
  `,
  styles: [`
    .parent-container {
      border: 2px solid #28a745;
      border-radius: 8px;
      padding: 20px;
      margin: 10px 0;
      background-color: #f0f8f0;
    }
    .controls {
      background: white;
      padding: 15px;
      border-radius: 6px;
      margin-bottom: 15px;
    }
    .form-group {
      margin-bottom: 10px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    .form-input {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 100%;
      max-width: 300px;
    }
    .events-received {
      background: #fff3cd;
      padding: 15px;
      border-radius: 6px;
      margin-top: 15px;
    }
    .event-item {
      background: white;
      padding: 10px;
      margin: 5px 0;
      border-radius: 4px;
      border-left: 4px solid #007bff;
    }
    .no-events {
      text-align: center;
      color: #6c757d;
      font-style: italic;
    }
  `]
})
export class ParentComponent {
  parentData = {
    name: 'Juan Pérez',
    age: 30,
    isActive: true,
    message: 'Este es un mensaje del padre'
  };

  // INICIALIZAR EL ARRAY VACÍO
  receivedEvents: AppEvent[] = [];

  receiveMessage(message: string) {
    this.receivedEvents.unshift({
      type: 'Mensaje',
      data: message,
      timestamp: new Date()
    });
  }

  receiveData(data: any) {
    this.receivedEvents.unshift({
      type: 'Datos',
      data: data,
      timestamp: new Date()
    });
  }

  receiveCustomMessage(message: string) {
    this.receivedEvents.unshift({
      type: 'Mensaje Personalizado',
      data: message,
      timestamp: new Date()
    });
  }
}