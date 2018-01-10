import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UloadDetailComponent } from './uload-detail.component';

describe('UloadDetailComponent', () => {
  let component: UloadDetailComponent;
  let fixture: ComponentFixture<UloadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UloadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UloadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
