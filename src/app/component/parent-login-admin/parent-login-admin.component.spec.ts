import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLoginAdminComponent } from './parent-login-admin.component';

describe('ParentLoginAdminComponent', () => {
  let component: ParentLoginAdminComponent;
  let fixture: ComponentFixture<ParentLoginAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentLoginAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentLoginAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
