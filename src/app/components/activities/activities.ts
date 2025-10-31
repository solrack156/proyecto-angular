import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Clase {
  materia: string;
  profesor?: string;
  aula?: string;
  rowspan?: number;
}

type Horario = Record<string, Record<string, Clase>>;

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="activities">
      <div class="container">
        <div class="section-header">
          <span class="tag">Mi Horario</span>
          <h2 class="section-title">Horario de Clases</h2>
          <p class="section-subtitle">Organización semanal de materias</p>
        </div>

        <div class="schedule-container">
          <table class="schedule-table">
            <thead>
              <tr>
                <th>Hora</th>
                <th *ngFor="let dia of dias">{{ dia }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let hora of horas; let i = index">
                <td class="hora">{{ hora }}</td>
                <ng-container *ngFor="let dia of dias; let j = index">
                  <ng-container *ngIf="shouldRenderCell(dia, hora, i)">
                    <td
                      class="clase"
                      [class.almuerzo]="getClase(dia, hora).materia === 'ALMUERZO'"
                      [attr.rowspan]="getRowspan(dia, hora, i)">
                      <div class="clase-content">
                        <h4>{{ getClase(dia, hora).materia }}</h4>
                        <p *ngIf="getClase(dia, hora).profesor">{{ getClase(dia, hora).profesor }}</p>
                        <small *ngIf="getClase(dia, hora).aula">{{ getClase(dia, hora).aula }}</small>
                      </div>
                    </td>
                  </ng-container>
                </ng-container>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .activities {
      padding: 100px 20px;
      background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 50px;
    }

    .tag {
      display: inline-block;
      padding: 8px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 15px;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 800;
      color: #1a202c;
      margin: 15px 0;
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: #718096;
    }

    .filter-buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 50px;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 12px 30px;
      border: 2px solid #e2e8f0;
      background: white;
      border-radius: 25px;
      font-size: 1rem;
      font-weight: 600;
      color: #718096;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .filter-btn:hover {
      border-color: #667eea;
      color: #667eea;
      transform: translateY(-3px);
    }

    .filter-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-color: transparent;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 35px;
      margin-bottom: 80px;
    }

    .project-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
      transform: translateY(30px);
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    }

    .project-image {
      position: relative;
      height: 200px;
      overflow: hidden;
      background: #f7fafc;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .project-card:hover .project-image img {
      transform: scale(1.1);
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .overlay-buttons {
      display: flex;
      gap: 15px;
    }

    .overlay-btn {
      padding: 12px 25px;
      background: white;
      color: #667eea;
      text-decoration: none;
      border-radius: 25px;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .overlay-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    }

    .project-content {
      padding: 25px;
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 15px;
    }

    .project-content h3 {
      font-size: 1.4rem;
      color: #1a202c;
      margin: 0;
    }

    .project-category {
      padding: 5px 12px;
      background: #f7fafc;
      color: #667eea;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .project-description {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #718096;
      margin-bottom: 15px;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 15px;
    }

    .tech-tag {
      padding: 5px 12px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .project-stats {
      display: flex;
      gap: 20px;
      padding-top: 15px;
      border-top: 1px solid #e2e8f0;
    }

    .stat {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #718096;
      font-size: 0.9rem;
    }

    .stat-icon {
      font-size: 1.2rem;
    }

    .current-activities {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 60px 50px;
      border-radius: 30px;
      color: white;
    }

    .current-activities h3 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 40px;
    }

    .activities-list {
      display: grid;
      gap: 25px;
    }

    .activity-item {
      display: flex;
      gap: 25px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 30px;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }

    .activity-item:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateX(10px);
    }

    .activity-icon {
      font-size: 3rem;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 15px;
      flex-shrink: 0;
    }

    .activity-content {
      flex: 1;
    }

    .activity-content h4 {
      font-size: 1.5rem;
      margin: 0 0 10px 0;
    }

    .activity-content p {
      font-size: 1rem;
      opacity: 0.9;
      margin-bottom: 15px;
      line-height: 1.6;
    }

    .activity-progress {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .progress-bar {
      flex: 1;
      height: 10px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: white;
      border-radius: 10px;
      transition: width 1s ease-out;
    }

    .progress-text {
      font-weight: 700;
      font-size: 1.1rem;
      min-width: 50px;
    }

    @media (max-width: 768px) {
      .section-title {
        font-size: 2.5rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .current-activities {
        padding: 40px 20px;
      }

      .current-activities h3 {
        font-size: 2rem;
      }

      .activity-item {
        flex-direction: column;
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .activities {
        padding: 60px 15px;
      }

      .section-title {
        font-size: 2rem;
      }

      .filter-buttons {
        gap: 10px;
      }

      .filter-btn {
        padding: 10px 20px;
        font-size: 0.9rem;
      }

      .project-content {
        padding: 20px;
      }

      .project-header {
        flex-direction: column;
        gap: 10px;
      }

      .overlay-buttons {
        flex-direction: column;
        gap: 10px;
      }
    }

    .filter-btn:focus,
    .overlay-btn:focus {
      outline: 2px solid #667eea;
      outline-offset: 2px;
    }
  `]
})
export class ActivitiesComponent {
  dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  horas = ['7:00 - 8:00','8:00 - 9:00','9:00 - 10:00','10:00 - 11:00','11:00 - 12:00','12:00 - 13:00','13:00 - 14:00','14:00 - 15:00','15:00 - 16:00','16:00 - 17:00','17:00 - 18:00'];

  horario: Horario = {
    'Lunes': {
      '7:00 - 8:00': { materia: 'DESARROLLO EXPERIMENTAL E INNOVACIÓN TECNOLÓGICA', profesor: 'Prof. ORÉ CERRÓN JUAN JOSÉ', aula: '201', rowspan: 2 },
      '8:00 - 9:00': { materia: '' },
      '9:00 - 10:00': { materia: 'SISTEMAS DIGITALES', profesor: 'Prof. QUISPE QUISPE ROBERTO', aula: '201', rowspan: 2 },
      '10:00 - 11:00': { materia: '' },
      '11:00 - 12:00': { materia: 'PROGRAMACIÓN WEB', profesor: 'Prof. SORIA SOLIS IVAN', aula: '201', rowspan: 2 },
      '12:00 - 13:00': { materia: '' },
      '13:00 - 14:00': { materia: 'ALMUERZO', profesor: '', aula: '' },
      '14:00 - 15:00': { materia: 'ALGORITMOS Y ESTRUCTURAS DE DATOS II', profesor: 'prof. SORIA SOLIS IVAN', aula: '', rowspan: 2 },
      '15:00 - 16:00': { materia: '' },
      '16:00 - 17:00': { materia: 'HORARIO LIBRE', profesor: '', aula: '', rowspan: 2 },
      '17:00 - 18:00': { materia: '' }
    },
    'Martes': {
      '7:00 - 8:00': { materia: 'DASE DE DATOS II', profesor: 'Prof. CATACORA FLORES NORMA LORENA', aula: '201', rowspan: 2 },
      '8:00 - 9:00': { materia: '' },
      '9:00 - 10:00': { materia: 'REDES DE COMPUTADORAS I', profesor: 'Prof. HUILLCEN BACA HERWIN ALAYN', aula: '201', rowspan: 2 },
      '10:00 - 11:00': { materia: '' },
      '11:00 - 12:00': { materia: 'HORARIO LIBRE', profesor: '', aula: '', rowspan: 2 },
      '12:00 - 13:00': { materia: '' },
      '13:00 - 14:00': { materia: 'ALMUERZO', profesor: '', aula: '' },
      '14:00 - 15:00': { materia: 'BASE DE DATOS II', profesor: 'Prof. CATACORA FLORES NORMA LORENA', aula: 'Lab 4', rowspan: 2 },
      '15:00 - 16:00': { materia: '' },
      '16:00 - 17:00': { materia: 'ALGORITMOS Y ESTRUCTURAS DE DATOS II', profesor: 'Prof. IVAN SORIA SOLIS', aula: 'Lab 7', rowspan: 2 },
      '17:00 - 18:00': { materia: '' }
    },
    'Miércoles': {
      '7:00 - 8:00': { materia: 'HORARIO LIBRE', profesor: '', aula: '', rowspan: 2 },
      '8:00 - 9:00': { materia: '' },
      '9:00 - 10:00': { materia: 'PROGRACIÓN WEB', profesor: 'Prof. IVAN SORIA SOLIS', aula: 'Lab 7', rowspan: 2 },
      '10:00 - 11:00': { materia: '' },
      '11:00 - 12:00': { materia: 'HORARIO LIBRE', profesor: '', aula: '', rowspan: 2 },
      '12:00 - 13:00': { materia: '' },
      '13:00 - 14:00': { materia: 'ALMUERZO', profesor: '', aula: '' },
      '14:00 - 15:00': { materia: 'BASE DE DATOS II', profesor: 'Prof. CATACORA FLORES NORMA LORENA', aula: 'Lab 4', rowspan: 2 },
      '15:00 - 16:00': { materia: '' },
      '16:00 - 17:00': { materia: 'HORARIO LIBRE', profesor: '', aula: '', rowspan: 2 },
      '17:00 - 18:00': { materia: '' }
    },
    'Jueves': {
      '7:00 - 8:00': { materia: 'HORARIO LIBRE', profesor: '', aula: '', rowspan: 2 },
      '8:00 - 9:00': { materia: '' },
      '9:00 - 10:00': { materia: ''},
      '10:00 - 11:00': { materia: 'REDES DE COMPUTADORAS I', profesor: 'HUILLCEN BACA HERWIN ALAYN', aula: '  lab 7', rowspan: 2 },
      '11:00 - 12:00': { materia: '' },
      '12:00 - 13:00': { materia: '' },
      '13:00 - 14:00': { materia: 'ALMUERZO', profesor: '', aula: '' },
      '14:00 - 15:00': { materia: 'HORARIO LIBRE', profesor: '', aula: '', rowspan: 2 },
      '15:00 - 16:00': { materia: '' },
      '16:00 - 17:00': { materia: 'ALGORITMOS Y ESTRUCTURAS DE DATOS II ', profesor: 'Prof. IVAN SORIA SOLIS', aula: 'lab 7', rowspan: 2 },
      '17:00 - 18:00': { materia: '' }
    },
    'Viernes': {
      '7:00 - 8:00': { materia: 'DESARROLLO EXPERIMENTAL E INNOVACIÓN TECNOLÓGICA', profesor: 'Prof. ORÉ CERRÓN JUAN JOSÉ', aula: '201', rowspan: 2 },
      '8:00 - 9:00': { materia: '' },
      '9:00 - 10:00': { materia: 'PROGRAMACIÓN WEB', profesor: 'Prof. IVAN SORIA SOLIS', aula: '201', rowspan: 2 },
      '10:00 - 11:00': { materia: '' },
      '11:00 - 12:00': { materia: 'HORARIO LIBRE', profesor: '', aula: '', rowspan: 2 },
      '12:00 - 13:00': { materia: '' },
      '13:00 - 14:00': { materia: 'ALMUERZO', profesor: '', aula: '' },
      '14:00 - 15:00': { materia: 'HORARIO LIBRE', profesor: '', aula: '', rowspan: 2 },
      '15:00 - 16:00': { materia: '' },
      '16:00 - 17:00': { materia: 'HORARIO LIBRE', profesor: '', aula: '', rowspan: 2 },
      '17:00 - 18:00': { materia: '' }
    }
  };

  currentActivities = [
    {
      icon: '🚀',
      title: 'Desarrollo de App Móvil',
      description: 'Creando una aplicación móvil cross-platform con React Native y Firebase.',
      progress: 75
    },
    {
      icon: '🎨',
      title: 'Diseño UI/UX',
      description: 'Mejorando la experiencia de usuario en proyectos existentes con Figma.',
      progress: 60
    },
    {
      icon: '📚',
      title: 'Aprendizaje Continuo',
      description: 'Estudiando nuevas tecnologías y mejores prácticas de desarrollo.',
      progress: 90
    },
    {
      icon: '🔧',
      title: 'Optimización de Performance',
      description: 'Trabajando en la optimización y mejora de rendimiento de aplicaciones.',
      progress: 45
    }
  ];

  // Devuelve la clase para el día/hora solicitados de forma segura
  getClase(dia: string, hora: string): Clase {
    return (this.horario[dia] && this.horario[dia][hora]) ? this.horario[dia][hora] : { materia: '', profesor: '', aula: '' };
  }

  // Devuelve el rowspan para una celda (por defecto 1)
  getRowspan(dia: string, hora: string, horaIndex: number): number {
    const clase = this.getClase(dia, hora);
    return clase && clase.rowspan && clase.rowspan > 1 ? clase.rowspan : 1;
  }

  // Determina si debemos renderizar la celda en la fila actual
  // Si una celda anterior (fila superior) tiene rowspan que la cubre, no renderear
  shouldRenderCell(dia: string, hora: string, horaIndex: number): boolean {
    // comprobar filas anteriores
    for (let prev = 0; prev < horaIndex; prev++) {
      const prevHora = this.horas[prev];
      const prevClase = this.getClase(dia, prevHora);
      const span = prevClase && prevClase.rowspan ? prevClase.rowspan : 1;
      if (span > 1) {
        const coversUntil = prev + span - 1; // índice de la fila que cubre
        if (coversUntil >= horaIndex) {
          return false; // ya está cubierta por una celda anterior
        }
      }
    }
    return true;
  }
}