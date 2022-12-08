import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FederationRulesComponent } from './federation-rules.component';

describe('FederationRulesComponent', () => {
  let component: FederationRulesComponent;
  let fixture: ComponentFixture<FederationRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FederationRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FederationRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
