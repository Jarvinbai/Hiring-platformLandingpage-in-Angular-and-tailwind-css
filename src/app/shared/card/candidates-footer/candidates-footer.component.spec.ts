import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesFooterComponent } from './candidates-footer.component';

describe('CandidatesFooterComponent', () => {
  let component: CandidatesFooterComponent;
  let fixture: ComponentFixture<CandidatesFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatesFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidatesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
