import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRecargasComponent } from './app-recargas.component';

describe('AppRecargasComponent', () => {
  let component: AppRecargasComponent;
  let fixture: ComponentFixture<AppRecargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRecargasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
