import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregProductoComponent } from './agreg-producto.component';

describe('AgregProductoComponent', () => {
  let component: AgregProductoComponent;
  let fixture: ComponentFixture<AgregProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
