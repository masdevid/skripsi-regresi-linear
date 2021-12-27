import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdiComponent } from './prodi.component';

describe('ProdiComponent', () => {
  let component: ProdiComponent;
  let fixture: ComponentFixture<ProdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
