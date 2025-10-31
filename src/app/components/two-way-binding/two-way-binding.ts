// two-way-binding.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface UserForm {
  name: string;
  email: string;
  age: number;
  subscribe: boolean;
  country: string;
}

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrls: ['./two-way-binding.css']
})
export class TwoWayBindingComponent {
  // USAR VARIABLES TRADICIONALES en lugar de signals
  userForm: UserForm = {
    name: '',
    email: '',
    age: 0,
    subscribe: false,
    country: ''
  };
  
  comment = '';
  countries = ['México', 'España', 'Argentina', 'Colombia', 'Chile', 'Perú'];

  getUserSummary(): string {
    return JSON.stringify(this.userForm, null, 2);
  }

  resetForm() {
    this.userForm = {
      name: '',
      email: '',
      age: 0,
      subscribe: false,
      country: ''
    };
    this.comment = '';
  }

  submitForm() {
    const formData = {
      ...this.userForm,
      comment: this.comment
    };
    
    console.log('Datos enviados:', formData);
    alert('Formulario enviado correctamente!\n' + JSON.stringify(formData, null, 2));
  }

  isFormValid(): boolean {
    return this.userForm.name.length > 0 && 
           this.userForm.email.length > 0 && 
           this.userForm.age > 0;
  }
}