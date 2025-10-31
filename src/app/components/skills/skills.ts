import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills">
      <div class="container">
        <div class="section-header">
          <span class="tag">Mis Habilidades</span>
          <h2 class="section-title">Aptitudes & Destrezas</h2>
          <p class="section-subtitle">Deportes, Gaming y Programación</p>
        </div>

        <div class="skills-categories">
          <div class="category-tabs">
            <button *ngFor="let cat of categories; let i = index"
                    [class.active]="activeCategory === i"
                    (click)="activeCategory = i"
                    class="tab-button">
              <span class="tab-icon">{{ cat.icon }}</span>
              <span class="tab-label">{{ cat.name }}</span>
            </button>
          </div>

          <div class="skills-content">
            <div class="skills-grid">
              <div class="skill-card" *ngFor="let skill of categories[activeCategory].skills; let i = index"
                   [style.animation-delay.ms]="i * 50">
                <div class="skill-icon" [style.background]="skill.color">
                  {{ skill.icon }}
                </div>
                <div class="skill-info">
                  <h4>{{ skill.name }}</h4>
                  <div class="skill-level">
                    <div class="level-bar">
                      <div class="level-fill" [style.width.%]="skill.level"></div>
                    </div>
                    <span class="level-text">{{ skill.level }}%</span>
                  </div>
                  <p class="skill-description">{{ skill.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="additional-skills">
          <h3>Otras Competencias</h3>
          <div class="tags-cloud">
            <span class="skill-tag" *ngFor="let tag of additionalSkills">{{ tag }}</span>
          </div>
        </div>

        <div class="certifications">
          <h3>🏆 Logros & Reconocimientos</h3>
          <div class="cert-grid">
            <div class="cert-card" *ngFor="let cert of certifications">
              <div class="cert-badge">{{ cert.badge }}</div>
              <h4>{{ cert.title }}</h4>
              <p class="cert-issuer">{{ cert.issuer }}</p>
              <p class="cert-date">{{ cert.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
      padding: 100px 20px;
      background: #f9fafb;
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 80px;
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

    .skills-categories {
      background: white;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      margin-bottom: 60px;
    }

    .category-tabs {
      display: flex;
      background: #f7fafc;
      border-bottom: 2px solid #e2e8f0;
      overflow-x: auto;
    }

    .tab-button {
      flex: 1;
      padding: 20px 30px;
      border: none;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 1rem;
      font-weight: 600;
      color: #718096;
      position: relative;
    }

    .tab-button::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    .tab-button.active {
      color: #667eea;
      background: white;
    }

    .tab-button.active::after {
      transform: scaleX(1);
    }

    .tab-button:hover {
      background: rgba(102, 126, 234, 0.05);
    }

    .tab-icon {
      font-size: 1.5rem;
    }

    .skills-content {
      padding: 40px;
    }

    .skills-grid {
      display: grid;
      gap: 25px;
    }

    .skill-card {
      display: flex;
      gap: 20px;
      padding: 25px;
      background: #f7fafc;
      border-radius: 15px;
      transition: all 0.3s ease;
      animation: fadeIn 0.5s ease-out forwards;
      opacity: 0;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }

    .skill-card:hover {
      background: white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }

    .skill-icon {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      font-size: 1.8rem;
      color: white;
      flex-shrink: 0;
    }

    .skill-info {
      flex: 1;
    }

    .skill-info h4 {
      margin: 0 0 10px 0;
      font-size: 1.2rem;
      color: #1a202c;
    }

    .skill-level {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 10px;
    }

    .level-bar {
      flex: 1;
      height: 8px;
      background: #e2e8f0;
      border-radius: 4px;
      overflow: hidden;
    }

    .level-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      transition: width 1s ease-out;
    }

    .level-text {
      font-size: 0.9rem;
      font-weight: 600;
      color: #4a5568;
      min-width: 45px;
    }

    .skill-description {
      margin: 0;
      font-size: 0.95rem;
      color: #718096;
      line-height: 1.5;
    }

    .additional-skills {
      background: white;
      border-radius: 20px;
      padding: 40px;
      margin-bottom: 60px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    }

    .additional-skills h3 {
      margin: 0 0 25px 0;
      font-size: 1.5rem;
      color: #1a202c;
    }

    .tags-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .skill-tag {
      padding: 8px 16px;
      background: #f7fafc;
      border-radius: 20px;
      font-size: 0.9rem;
      color: #4a5568;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .skill-tag:hover {
      background: #edf2f7;
      transform: translateY(-2px);
    }

    .certifications {
      background: white;
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    }

    .certifications h3 {
      margin: 0 0 25px 0;
      font-size: 1.5rem;
      color: #1a202c;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .cert-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }

    .cert-card {
      background: #f7fafc;
      padding: 25px;
      border-radius: 15px;
      transition: all 0.3s ease;
    }

    .cert-card:hover {
      background: white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }

    .cert-badge {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    .cert-card h4 {
      margin: 0 0 8px 0;
      font-size: 1.1rem;
      color: #1a202c;
    }

    .cert-issuer {
      margin: 0 0 5px 0;
      font-size: 0.9rem;
      color: #718096;
    }

    .cert-date {
      margin: 0;
      font-size: 0.85rem;
      color: #a0aec0;
    }

    @media (max-width: 768px) {
      .skills { padding: 60px 15px; }
      .section-title { font-size: 2.5rem; }
      .skills-content { padding: 25px; }
      .category-tabs { overflow-x: auto; }
      .cert-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class SkillsComponent implements OnInit {
  activeCategory = 0;

  categories = [
    {
      name: 'Deportes',
      icon: '🏃',
      skills: [
        {
          name: 'Natación',
          icon: '🏊',
          level: 85,
          color: 'linear-gradient(135deg, #00b4db 0%, #0083b0 100%)',
          description: 'Especialidad en estilo libre y mariposa'
        },
        {
          name: 'Cardio',
          icon: '❤️',
          level: 90,
          color: 'linear-gradient(135deg, #ff4b4b 0%, #d63131 100%)',
          description: 'Resistencia cardiovascular y entrenamiento HIIT'
        },
        {
          name: 'Running',
          icon: '🏃',
          level: 88,
          color: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
          description: 'Carreras de media distancia y trail running'
        },
        {
          name: 'Ciclismo',
          icon: '🚴',
          level: 82,
          color: 'linear-gradient(135deg, #f2994a 0%, #f2c94c 100%)',
          description: 'Ciclismo de montaña y rutas urbanas'
        }
      ]
    },
    {
      name: 'Gaming',
      icon: '🎮',
      skills: [
        {
          name: 'FPS Games',
          icon: '🎯',
          level: 92,
          color: 'linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)',
          description: 'CS:GO, Valorant, Apex Legends'
        },
        {
          name: 'MOBA',
          icon: '⚔️',
          level: 88,
          color: 'linear-gradient(135deg, #4776e6 0%, #8e54e9 100%)',
          description: 'Pokemón Unity, Dota 2, Dragon Ball Gekishin Squadra'
        },
        {
          name: 'Battle Royale',
          icon: '🪂',
          level: 85,
          color: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
          description: 'Fortnite, PUBG, Warzone'
        },
        {
          name: 'Estrategia',
          icon: '🧠',
          level: 80,
          color: 'linear-gradient(135deg, #603813 0%, #b29f94 100%)',
          description: 'Age of Empires, Civilization, StarCraft, plantas vs zombies'
        }
      ]
    },
    {
      name: 'Programación',
      icon: '💻',
      skills: [
        {
          name: 'Frontend',
          icon: '🎨',
          level: 45,
          color: 'linear-gradient(135deg, #dd0031 0%, #b5002b 100%)',
          description: 'Angular, React, HTML/CSS, TypeScript'
        },
        {
          name: 'Backend',
          icon: '⚙️',
          level: 30,
          color: 'linear-gradient(135deg, #68a063 0%, #4e784a 100%)',
          description: 'Node.js, Python, Bases de datos'
        },
        {
          name: 'Game Dev',
          icon: '🎮',
          level: 55,
          color: 'linear-gradient(135deg, #2b2b2b 0%, #4a4a4a 100%)',
          description: 'Unity, Desarrollo de mods, Scripting'
        },
        {
          name: 'Mobile',
          icon: '📱',
          level: 50,
          color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          description: 'React Native, Flutter, Apps híbridas'
        }
      ]
    }
  ];

  additionalSkills = [
    'Yoga', 'Meditación', 'Estiramientos', 'Calistenia', 'Nutrición Deportiva',
    'Minecraft', 'FIFA', 'Call of Duty', 'Rainbow Six', 'Rocket League','Monster Hunter',
    'Git/GitHub', 'APIs', 'UI/UX', 'Testing', 'Cloud Computing'
  ];

  certifications = [
    {
      badge: '🏊',
      title: 'Nivel Avanzado Natación',
      issuer: 'medalla de oro regional',
      date: '2018'
    },
    {
      badge: '🎮',
      title: 'Torneo Provincial Dragon Ball Fighters',
      issuer: 'Dragon Ball FighterZ World Tour',
      date: '2023'
    },
    {
      badge: '🏃',
      title: 'Media Maratón',
      issuer: 'Club Atlético',
      date: '2022'
    },
    {
      badge: '💻',
      title: 'Full Stack Developer',
      issuer: 'Tech Institute',
      date: '2024'
    }
  ];

  ngOnInit() {
    // Animar las barras de progreso al cargar
    setTimeout(() => {
      const fills = document.querySelectorAll('.level-fill');
      fills.forEach((fill: any) => {
        const width = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => {
          fill.style.width = width;
        }, 100);
      });
    }, 500);
  }
}