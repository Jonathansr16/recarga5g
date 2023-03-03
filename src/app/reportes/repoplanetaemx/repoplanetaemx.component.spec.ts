import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoplanetaemxComponent } from './repoplanetaemx.component';

describe('RepoplanetaemxComponent', () => {
  let component: RepoplanetaemxComponent;
  let fixture: ComponentFixture<RepoplanetaemxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoplanetaemxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoplanetaemxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
