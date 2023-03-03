import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatplanetaemxComponent } from './platplanetaemx.component';

describe('PlatplanetaemxComponent', () => {
  let component: PlatplanetaemxComponent;
  let fixture: ComponentFixture<PlatplanetaemxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatplanetaemxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatplanetaemxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
