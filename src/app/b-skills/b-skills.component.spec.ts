import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSkillsComponent } from './b-skills.component';

describe('BSkillsComponent', () => {
  let component: BSkillsComponent;
  let fixture: ComponentFixture<BSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
