import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConventionsComponent } from './detail-conventions.component';

describe('DetailConventionsComponent', () => {
  let component: DetailConventionsComponent;
  let fixture: ComponentFixture<DetailConventionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailConventionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailConventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
