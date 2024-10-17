import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagedataComponent } from './affichagedata.component';

describe('AffichagedataComponent', () => {
  let component: AffichagedataComponent;
  let fixture: ComponentFixture<AffichagedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AffichagedataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichagedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
