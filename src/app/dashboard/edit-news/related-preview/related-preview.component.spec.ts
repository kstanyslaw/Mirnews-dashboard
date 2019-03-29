import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedPreviewComponent } from './related-preview.component';

describe('RelatedPreviewComponent', () => {
  let component: RelatedPreviewComponent;
  let fixture: ComponentFixture<RelatedPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
