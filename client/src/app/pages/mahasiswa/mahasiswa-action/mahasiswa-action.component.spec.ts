import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiswaActionComponent } from './mahasiswa-action.component';

describe('MahasiswaActionComponent', () => {
  let component: MahasiswaActionComponent;
  let fixture: ComponentFixture<MahasiswaActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahasiswaActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasiswaActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
