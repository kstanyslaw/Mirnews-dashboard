import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNewsModalComponent } from './delete-news-modal.component';

describe('DeleteNewsModalComponent', () => {
  let component: DeleteNewsModalComponent;
  let fixture: ComponentFixture<DeleteNewsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteNewsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNewsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
