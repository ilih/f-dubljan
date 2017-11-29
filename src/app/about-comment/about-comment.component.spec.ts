import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCommentComponent } from './about-comment.component';

describe('AboutCommentComponent', () => {
  let component: AboutCommentComponent;
  let fixture: ComponentFixture<AboutCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
