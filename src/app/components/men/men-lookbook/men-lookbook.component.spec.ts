import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenLookbookComponent } from './men-lookbook.component';

describe('MenLookbookComponent', () => {
  let component: MenLookbookComponent;
  let fixture: ComponentFixture<MenLookbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenLookbookComponent]
    });
    fixture = TestBed.createComponent(MenLookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
