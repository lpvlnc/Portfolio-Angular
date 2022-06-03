import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCardComponent } from './portfolio-card.component';

describe('PortfolioItemComponent', () => {
  let component: PortfolioCardComponent;
  let fixture: ComponentFixture<PortfolioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});