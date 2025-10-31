import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBind } from './event-bind';

describe('EventBind', () => {
  let component: EventBind;
  let fixture: ComponentFixture<EventBind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBind);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
