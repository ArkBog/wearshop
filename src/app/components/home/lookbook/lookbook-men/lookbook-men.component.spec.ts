import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookbookMenComponent } from './lookbook-men.component';

describe('LookbookMenComponent', () => {
  let component: LookbookMenComponent;
  let fixture: ComponentFixture<LookbookMenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookbookMenComponent]
    });
    fixture = TestBed.createComponent(LookbookMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
