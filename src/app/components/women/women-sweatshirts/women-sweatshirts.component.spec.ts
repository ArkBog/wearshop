import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenSweatshirtsComponent } from './women-sweatshirts.component';

describe('WomenSweatshirtsComponent', () => {
  let component: WomenSweatshirtsComponent;
  let fixture: ComponentFixture<WomenSweatshirtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenSweatshirtsComponent]
    });
    fixture = TestBed.createComponent(WomenSweatshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
