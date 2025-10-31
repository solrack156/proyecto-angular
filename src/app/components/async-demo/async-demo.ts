// components/async-demo/async-demo.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../loading/loading';
import { DataService, User, Product } from '../../services/data';
import { catchError, finalize } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-async-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingComponent],
  templateUrl: './async-demo.html',
  styleUrls: ['./async-demo.css']
})
export class AsyncDemoComponent implements OnInit, OnDestroy {
  // Datos
  users: User[] = [];
  products: Product[] = [];
  profileData: any = null;
  
  // Estados
  loading: boolean = false;
  error: string = '';
  successMessage: string = '';
  
  // Configuración del loading
  loadingConfig = {
    message: 'Cargando...',
    subMessage: '',
    loadingType: 'spinner' as 'spinner' | 'dots' | 'skeleton', // ← Cambiado de 'type' a 'loadingType'
    showProgress: false,
    progress: 0
  };
  
  // Métricas
  lastOperation: string = 'Ninguna';
  loadTime: number = 0;
  
  private progressInterval: any;
  private subscriptions: Subscription[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log('✅ AsyncDemoComponent inicializado');
  }

  ngOnDestroy() {
    // Limpiar subscripciones y intervalos
    this.subscriptions.forEach(sub => sub.unsubscribe());
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }

  // ========== OPERACIONES ASÍNCRONAS ==========

  /**
   * Cargar usuarios con Promise
   */
  async loadWithPromise() {
    this.startLoading('Cargando usuarios...', 'Usando Promise', 'spinner');
    const startTime = Date.now();
    
    try {
      this.users = await this.dataService.getUsersWithPromise();
      this.handleSuccess('Usuarios cargados con Promise', startTime);
    } catch (error) {
      this.handleError(error, startTime);
    }
  }

  /**
   * Cargar productos con Observable
   */
  loadWithObservable() {
    this.startLoading('Cargando productos...', 'Usando Observable', 'dots');
    const startTime = Date.now();
    
    const subscription = this.dataService.getProductsWithObservable()
      .pipe(
        finalize(() => this.finishLoading(startTime))
      )
      .subscribe({
        next: (products) => {
          this.products = products;
          this.handleSuccess('Productos cargados con Observable', startTime);
        },
        error: (error) => {
          this.handleError(error, startTime);
        }
      });
    
    this.subscriptions.push(subscription);
  }

  /**
   * Cargar con async/await
   */
  async loadWithAsync() {
    this.startLoading('Cargando datos...', 'Usando async/await', 'skeleton');
    const startTime = Date.now();
    
    try {
      this.users = await this.dataService.getUsersWithAsync();
      this.handleSuccess('Datos cargados con async/await', startTime);
    } catch (error) {
      this.handleError(error, startTime);
    }
  }

  /**
   * Cargar con posible error
   */
  loadWithPossibleError() {
    this.startLoading('Cargando datos...', 'Puede fallar aleatoriamente', 'dots');
    const startTime = Date.now();
    
    const subscription = this.dataService.getDataWithRandomError()
      .pipe(
        catchError(error => {
          this.handleError(error, startTime);
          return of(null);
        }),
        finalize(() => this.finishLoading(startTime))
      )
      .subscribe(data => {
        if (data) {
          this.users = data;
          this.handleSuccess('¡Datos cargados exitosamente!', startTime);
        }
      });
    
    this.subscriptions.push(subscription);
  }

  /**
   * Carga lenta con barra de progreso
   */
  loadSlowData() {
    this.startLoading('Carga lenta en progreso...', 'Esta operación tomará 5 segundos', 'spinner');
    this.loadingConfig.showProgress = true;
    this.loadingConfig.progress = 0;
    
    const startTime = Date.now();
    
    // Simular progreso cada segundo
    this.progressInterval = setInterval(() => {
      this.loadingConfig.progress += 20;
    }, 1000);
    
    const subscription = this.dataService.getSlowData()
      .pipe(
        finalize(() => {
          clearInterval(this.progressInterval);
          this.loadingConfig.showProgress = false;
          this.finishLoading(startTime);
        })
      )
      .subscribe(message => {
        this.successMessage = message;
        this.lastOperation = 'Carga lenta completada';
      });
    
    this.subscriptions.push(subscription);
  }

  /**
   * Cargar perfil personal
   */
  loadPersonalProfile() {
    this.startLoading('Cargando perfil...', 'Datos personales', 'spinner');
    const startTime = Date.now();
    
    const subscription = this.dataService.getPersonalProfile()
      .pipe(
        finalize(() => this.finishLoading(startTime))
      )
      .subscribe({
        next: (profile) => {
          this.profileData = profile;
          this.handleSuccess(profile.message, startTime);
        },
        error: (error) => {
          this.handleError(error, startTime);
        }
      });
    
    this.subscriptions.push(subscription);
  }

  // ========== MÉTODOS AUXILIARES ==========

  private startLoading(message: string, subMessage: string = '', loadingType: 'spinner' | 'dots' | 'skeleton' = 'spinner'){
    this.loading = true;
    this.error = '';
    this.successMessage = '';
    this.loadingConfig.message = message;
    this.loadingConfig.subMessage = subMessage;
    this.loadingConfig.loadingType = loadingType;
    this.loadingConfig.showProgress = false;
    this.loadingConfig.progress = 0;
  
  console.log(`🔄 ${message}`);
  }

  private handleSuccess(message: string, startTime: number) {
    this.successMessage = message;
    this.lastOperation = message;
    this.finishLoading(startTime);
    console.log(`✅ ${message}`);
  }

  private handleError(error: any, startTime: number) {
    this.error = typeof error === 'string' ? error : 'Error desconocido';
    this.lastOperation = 'Operación fallida';
    this.finishLoading(startTime);
    console.log(`❌ ${error}`);
  }

  private finishLoading(startTime: number) {
    this.loading = false;
    this.loadTime = Date.now() - startTime;
    console.log(`⏱️ Tiempo de carga: ${this.loadTime}ms`);
  }

  /**
   * Limpiar todos los datos
   */
  clearData() {
    this.users = [];
    this.products = [];
    this.profileData = null;
    this.error = '';
    this.successMessage = '';
    this.lastOperation = 'Datos limpiados';
    
    console.log('🧹 Datos limpiados');
  }
}