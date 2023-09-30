import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookbookWomenComponent } from './lookbook-women.component';

describe('LookbookWomenComponent', () => {
  let component: LookbookWomenComponent;
  let fixture: ComponentFixture<LookbookWomenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookbookWomenComponent]
    });
    fixture = TestBed.createComponent(LookbookWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
