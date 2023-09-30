import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenShirtsComponent } from './women-shirts.component';

describe('WomenShirtsComponent', () => {
  let component: WomenShirtsComponent;
  let fixture: ComponentFixture<WomenShirtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenShirtsComponent]
    });
    fixture = TestBed.createComponent(WomenShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
