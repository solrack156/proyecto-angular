import { ComponentFixture, TestBed } from '@angular/core/testing';

// 👇 AQUÍ ES DONDE VA LA CORRECCIÓN:
import { About } from './about';                    // ✅ Si tu archivo se llama about.ts
// O si prefieres ser más explícito:
// import { About } from './about.component';       // ✅ Alternativa

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About]
    })
    .compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});