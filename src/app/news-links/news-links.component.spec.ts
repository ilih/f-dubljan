import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLinksComponent } from './news-links.component';

describe('NewsLinksComponent', () => {
  let component: NewsLinksComponent;
  let fixture: ComponentFixture<NewsLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
