import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavTestComponent } from './side-nav-test.component';

describe('SideNavTestComponent', () => {
  let component: SideNavTestComponent;
  let fixture: ComponentFixture<SideNavTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
