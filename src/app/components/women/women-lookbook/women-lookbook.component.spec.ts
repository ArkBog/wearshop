import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenLookbookComponent } from './women-lookbook.component';

describe('WomenLookbookComponent', () => {
  let component: WomenLookbookComponent;
  let fixture: ComponentFixture<WomenLookbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenLookbookComponent]
    });
    fixture = TestBed.createComponent(WomenLookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
