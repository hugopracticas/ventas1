import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistroMainComponent } from './login-registro-main.component';

describe('LoginRegistroMainComponent', () => {
  let component: LoginRegistroMainComponent;
  let fixture: ComponentFixture<LoginRegistroMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegistroMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegistroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
