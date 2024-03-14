import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsFooterComponent } from './jobs-footer.component';

describe('JobsFooterComponent', () => {
  let component: JobsFooterComponent;
  let fixture: ComponentFixture<JobsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
