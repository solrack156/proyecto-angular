// services/data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // ========== TUS DATOS PERSONALES ==========
  private personalInfo = {
    fullName: 'Carlos Manuel Diaz Guillen',
    title: 'Estudiante de Ingeniería',
    location: 'Apurímac, Perú',
    email: 'diazguillencarlosmanuel8@gmail.com',
    profilePhoto: 'assets/profile.jpg',
    bio: 'Soy un estudiante entusiasta de Ingeniería de Sistemas, apasionado por el desarrollo web y los deportes. Me destaco en natación y programación, y disfruto combinando la disciplina deportiva con el desarrollo de software. Actualmente me especializo en tecnologías web modernas como Angular y TypeScript.'
  };

  private experienceData = [
    { 
      period: '2023 - Presente', 
      role: 'Estudiante de Ingeniería', 
      company: 'Universidad Nacional Jorge Basadre Grohmann', 
      details: 'Desarrollo de proyectos académicos, participación en competencias de programación y eventos tecnológicos.' 
    },
    { 
      period: '2022 - 2023', 
      role: 'Desarrollador Web Junior', 
      company: 'Proyectos Universitarios', 
      details: 'Desarrollo de aplicaciones web con Angular, TypeScript y bases de datos. Participación en hackathons y proyectos colaborativos.' 
    }
  ];

  private educationData = [
    { 
      period: '2021 - Presente', 
      degree: 'Ingeniería de Sistemas', 
      school: 'Universidad Nacional Jorge María Arguedas', 
    },
    { 
      period: '2020', 
      degree: 'Curso de Desarrollo Web', 
      school: 'Platzi / Udemy' 
    }
  ];

  // ========== DATOS DE EJEMPLO PARA ASYNC DEMO ==========
  private users: User[] = [
    { id: 1, name: 'Ana García', email: 'ana@email.com', role: 'Admin', avatar: '👩‍💼' },
    { id: 2, name: 'Carlos López', email: 'carlos@email.com', role: 'User', avatar: '👨‍💻' },
    { id: 3, name: 'María Rodríguez', email: 'maria@email.com', role: 'Editor', avatar: '👩‍🎨' },
    { id: 4, name: 'Pedro Martínez', email: 'pedro@email.com', role: 'User', avatar: '👨‍🔧' }
  ];

  private products: Product[] = [
    { id: 1, name: 'Laptop Gaming', price: 1200, category: 'Tecnología', inStock: true },
    { id: 2, name: 'Smartphone', price: 800, category: 'Tecnología', inStock: false },
    { id: 3, name: 'Auriculares', price: 150, category: 'Audio', inStock: true },
    { id: 4, name: 'Tablet', price: 450, category: 'Tecnología', inStock: true }
  ];

  // ========== MÉTODOS PARA ABOUT COMPONENT (SÍNCRONOS) ==========

  /**
   * ✅ Para About component - Método síncrono
   */
  getPersonalInfo() {
    return this.personalInfo;
  }

  /**
   * ✅ Para About component - Método síncrono
   */
  getExperience() {
    return this.experienceData;
  }

  /**
   * ✅ Para About component - Método síncrono
   */
  getEducation() {
    return this.educationData;
  }

  /**
   * ✅ Actualizar información personal
   */
  updatePersonalInfo(newInfo: any) {
    this.personalInfo = { ...this.personalInfo, ...newInfo };
  }

  // ========== MÉTODOS ASÍNCRONOS PARA ASYNC DEMO ==========

  /**
   * ✅ Cargar usuarios con Promise
   */
  getUsersWithPromise(): Promise<User[]> {
    console.log('🔄 Iniciando carga con Promise...');
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject('❌ Error: Fallo en la carga de usuarios');
        } else {
          console.log('✅ Datos cargados con Promise');
          resolve([...this.users]);
        }
      }, 2000);
    });
  }

  /**
   * ✅ Cargar productos con Observable
   */
  getProductsWithObservable(): Observable<Product[]> {
    console.log('🔄 Iniciando carga con Observable...');
    
    return of([...this.products]).pipe(
      delay(3000),
      tap(() => console.log('✅ Datos cargados con Observable'))
    );
  }

  /**
   * ✅ Cargar usuarios con async/await
   */
  async getUsersWithAsync(): Promise<User[]> {
    console.log('🔄 Iniciando carga con async/await...');
    
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    console.log('✅ Datos cargados con async/await');
    return [...this.users];
  }

  /**
   * ✅ Carga con posible error aleatorio
   */
  getDataWithRandomError(): Observable<User[]> {
    console.log('🔄 Carga con posible error...');
    
    return new Observable(observer => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          observer.error('🎲 Error aleatorio: La suerte no estuvo de tu lado');
        } else {
          observer.next([...this.users]);
          observer.complete();
        }
      }, 2000);
    });
  }

  /**
   * ✅ Carga lenta con progreso
   */
  getSlowData(): Observable<string> {
    console.log('🐌 Iniciando carga lenta...');
    
    return of('¡Datos cargados exitosamente después de 5 segundos!').pipe(
      delay(5000),
      tap(() => console.log('✅ Carga lenta completada'))
    );
  }

  /**
   * ✅ Cargar perfil personal (versión async)
   */
  getPersonalProfile(): Observable<{ message: string; data: any }> {
    console.log('👤 Cargando perfil personal...');
    
    const profileData = {
      message: 'Perfil cargado exitosamente',
      data: {
        name: 'Carlos Manuel Diaz Guillen',
        title: 'Estudiante de Ingeniería',
        location: 'Apurímac, Perú',
        email: 'diazguillencarlosmanuel8@gmail.com',
        bio: 'Soy un estudiante entusiasta de Ingeniería de Sistemas, apasionado por el desarrollo web y los deportes. Me destaco en natación y programación, y disfruto combinando la disciplina deportiva con el desarrollo de software.'
      }
    };
    
    return of(profileData).pipe(
      delay(2200),
      tap(() => console.log('✅ Perfil personal cargado'))
    );
  }

  // ========== MÉTODOS ASÍNCRONOS PARA DATOS PERSONALES ==========

  /**
   * ✅ Cargar información personal con simulación asíncrona
   */
  getPersonalInfoAsync(): Observable<any> {
    console.log('🔄 Cargando información personal (async)...');
    return of(this.personalInfo).pipe(
      delay(1500),
      tap(() => console.log('✅ Información personal cargada'))
    );
  }

  /**
   * ✅ Cargar experiencia con simulación asíncrona
   */
  getExperienceAsync(): Observable<any[]> {
    console.log('🔄 Cargando experiencia (async)...');
    return of(this.experienceData).pipe(
      delay(2000),
      tap(() => console.log('✅ Experiencia cargada'))
    );
  }

  /**
   * ✅ Cargar educación con simulación asíncrona
   */
  getEducationAsync(): Observable<any[]> {
    console.log('🔄 Cargando educación (async)...');
    return of(this.educationData).pipe(
      delay(1800),
      tap(() => console.log('✅ Educación cargada'))
    );
  }
}