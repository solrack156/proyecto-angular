// components/data-display/data-display.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="data-container">
      <h3>Lista de Usuarios</h3>
      
      <div *ngIf="users.length === 0" class="no-data">
        No hay usuarios para mostrar
      </div>

      <div *ngFor="let user of users" class="user-card">
        <div class="user-info">
          <strong>{{ user.name }}</strong>
          <span>{{ user.email }}</span>
          <small class="role-badge">{{ user.role }}</small>
        </div>
        
        <button 
          (click)="onUserSelected(user)"
          class="btn-select"
        >
          Seleccionar
        </button>
        
        <button 
          (click)="onUserDeleted(user.id)"
          class="btn-delete"
        >
          Eliminar
        </button>
      </div>

      <div class="selected-user" *ngIf="selectedUser">
        <strong>Usuario seleccionado:</strong> {{ selectedUser.name }}
      </div>
    </div>
  `,
  styles: [`
    .data-container {
      border: 2px solid #6f42c1;
      border-radius: 8px;
      padding: 20px;
      margin: 10px 0;
      background-color: #f8f9fa;
    }
    .no-data {
      text-align: center;
      color: #6c757d;
      font-style: italic;
      padding: 20px;
    }
    .user-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: white;
      padding: 15px;
      margin: 10px 0;
      border-radius: 6px;
      border-left: 4px solid #6f42c1;
    }
    .user-info {
      flex-grow: 1;
    }
    .user-info strong {
      display: block;
      color: #333;
    }
    .user-info span {
      color: #666;
      font-size: 0.9em;
    }
    .role-badge {
      background: #6f42c1;
      color: white;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.8em;
    }
    .btn-select, .btn-delete {
      padding: 6px 12px;
      margin-left: 8px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn-select {
      background: #28a745;
      color: white;
    }
    .btn-delete {
      background: #dc3545;
      color: white;
    }
    .selected-user {
      background: #d1ecf1;
      padding: 10px;
      border-radius: 4px;
      margin-top: 15px;
      border-left: 4px solid #17a2b8;
    }
  `]
})
export class DataDisplayComponent {
  @Input() users: User[] = [];
  @Output() userSelected = new EventEmitter<User>();
  @Output() userDeleted = new EventEmitter<number>();

  selectedUser: User | null = null;

  onUserSelected(user: User) {
    this.selectedUser = user;
    this.userSelected.emit(user);
  }

  onUserDeleted(userId: number) {
    this.userDeleted.emit(userId);
  }
}