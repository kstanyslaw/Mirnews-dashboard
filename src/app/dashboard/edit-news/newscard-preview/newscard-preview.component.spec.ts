import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscardPreviewComponent } from './newscard-preview.component';

describe('NewscardPreviewComponent', () => {
  let component: NewscardPreviewComponent;
  let fixture: ComponentFixture<NewscardPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewscardPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscardPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
