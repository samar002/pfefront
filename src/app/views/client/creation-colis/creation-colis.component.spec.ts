import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationColisComponent } from './creation-colis.component';

describe('CreationColisComponent', () => {
  let component: CreationColisComponent;
  let fixture: ComponentFixture<CreationColisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationColisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationColisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
