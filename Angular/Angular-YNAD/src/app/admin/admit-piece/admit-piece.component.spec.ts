import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitPieceComponent } from './admit-piece.component';

describe('AdmitPieceComponent', () => {
  let component: AdmitPieceComponent;
  let fixture: ComponentFixture<AdmitPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmitPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmitPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
