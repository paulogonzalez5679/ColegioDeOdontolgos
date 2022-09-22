import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionsAdminComponent } from './conventions-admin.component';

describe('ConventionsAdminComponent', () => {
  let component: ConventionsAdminComponent;
  let fixture: ComponentFixture<ConventionsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConventionsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConventionsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
