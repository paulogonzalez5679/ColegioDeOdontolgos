import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConventionsComponent } from './add-conventions.component';

describe('AddConventionsComponent', () => {
  let component: AddConventionsComponent;
  let fixture: ComponentFixture<AddConventionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConventionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
