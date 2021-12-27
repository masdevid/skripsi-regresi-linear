import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkripsiActionComponent } from './skripsi-action.component';

describe('SkripsiActionComponent', () => {
  let component: SkripsiActionComponent;
  let fixture: ComponentFixture<SkripsiActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkripsiActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkripsiActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
