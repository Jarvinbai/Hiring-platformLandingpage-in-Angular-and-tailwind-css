import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateslistComponent } from './candidateslist.component';

describe('CandidateslistComponent', () => {
  let component: CandidateslistComponent;
  let fixture: ComponentFixture<CandidateslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidateslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
