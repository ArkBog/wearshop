import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenSweatshirtsComponent } from './men-sweatshirts.component';

describe('MenSweatshirtsComponent', () => {
  let component: MenSweatshirtsComponent;
  let fixture: ComponentFixture<MenSweatshirtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenSweatshirtsComponent]
    });
    fixture = TestBed.createComponent(MenSweatshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
