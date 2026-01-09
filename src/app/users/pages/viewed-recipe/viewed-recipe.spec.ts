import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedRecipe } from './viewed-recipe';

describe('ViewedRecipe', () => {
  let component: ViewedRecipe;
  let fixture: ComponentFixture<ViewedRecipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewedRecipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewedRecipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
