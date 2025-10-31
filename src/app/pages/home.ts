import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero';
import { ActivitiesComponent } from '../components/activities/activities';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ActivitiesComponent],
  template: `
    <app-hero></app-hero>
    <app-activities></app-activities>
  `,
  styles: [``]
})
export class HomeComponent {}
