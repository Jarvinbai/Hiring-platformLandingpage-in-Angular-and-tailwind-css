import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeMatchComponent } from './resume-match.component';

describe('ResumeMatchComponent', () => {
  let component: ResumeMatchComponent;
  let fixture: ComponentFixture<ResumeMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeMatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
