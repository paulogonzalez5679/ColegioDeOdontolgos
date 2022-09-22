import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConventionsComponent } from './edit-conventions.component';

describe('EditConventionsComponent', () => {
  let component: EditConventionsComponent;
  let fixture: ComponentFixture<EditConventionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConventionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
