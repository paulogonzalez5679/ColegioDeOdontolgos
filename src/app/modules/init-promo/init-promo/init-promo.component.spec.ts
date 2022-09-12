import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitPromoComponent } from './init-promo.component';

describe('InitPromoComponent', () => {
  let component: InitPromoComponent;
  let fixture: ComponentFixture<InitPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
