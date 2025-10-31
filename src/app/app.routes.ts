// app.routes.ts - VERSIÓN COMPLETA
import { Routes } from '@angular/router';

import { HeroComponent } from './components/hero/hero';
import { HomeComponent } from './pages/home';
import { About } from './components/about/about';
import { HobbiesComponent } from './components/hobbies/hobbies';
import { SkillsComponent } from './components/skills/skills';
import { ActivitiesComponent } from './components/activities/activities';
import { ContactComponent } from './components/contact/contact';
import { EventBindingComponent } from './components/event-bind/event-bind';
import { PropertyBindingComponent } from './components/property-binding/property-binding';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding';
import { ParentComponent } from './components/parent/parent'; // ← NUEVA IMPORTACIÓN
import { AsyncDemoComponent } from './components/async-demo/async-demo';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: About },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'async-demo', component: AsyncDemoComponent },
  { path: 'parent-child', component: ParentComponent }, // ← NUEVA RUTA
  { path: '**', redirectTo: '' }
];