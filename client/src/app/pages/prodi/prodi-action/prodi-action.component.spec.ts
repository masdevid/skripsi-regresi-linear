import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdiActionComponent } from './prodi-action.component';

describe('ProdiActionComponent', () => {
  let component: ProdiActionComponent;
  let fixture: ComponentFixture<ProdiActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdiActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdiActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
