import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SareeComponent } from './saree.component';

describe('SareeComponent', () => {
  let component: SareeComponent;
  let fixture: ComponentFixture<SareeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SareeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SareeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
