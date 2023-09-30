import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenShoesComponent } from './women-shoes.component';

describe('WomenShoesComponent', () => {
  let component: WomenShoesComponent;
  let fixture: ComponentFixture<WomenShoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenShoesComponent]
    });
    fixture = TestBed.createComponent(WomenShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
