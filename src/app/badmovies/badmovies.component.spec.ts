import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmoviesComponent } from './badmovies.component';

describe('BadmoviesComponent', () => {
  let component: BadmoviesComponent;
  let fixture: ComponentFixture<BadmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
