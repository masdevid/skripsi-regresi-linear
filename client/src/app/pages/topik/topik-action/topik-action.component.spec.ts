import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopikActionComponent } from './topik-action.component';

describe('TopikActionComponent', () => {
  let component: TopikActionComponent;
  let fixture: ComponentFixture<TopikActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopikActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopikActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
