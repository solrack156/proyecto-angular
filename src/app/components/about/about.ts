import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PeriodFormatPipe } from '../../pipes/period-format.pipe';
import { DataService } from '../../services/data';       

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, PeriodFormatPipe],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
  // Inyectar el servicio
  private dataService = inject(DataService);

  // Obtener datos del servicio
  personalInfo = this.dataService.getPersonalInfo();
  experience = this.dataService.getExperience();
  education = this.dataService.getEducation();

  // Getters para usar en el template
  get fullName() { return this.personalInfo.fullName; }
  get title() { return this.personalInfo.title; }
  get location() { return this.personalInfo.location; }
  get email() { return this.personalInfo.email; }
  get profilePhoto() { return this.personalInfo.profilePhoto; }
  get bio() { return this.personalInfo.bio; }
}