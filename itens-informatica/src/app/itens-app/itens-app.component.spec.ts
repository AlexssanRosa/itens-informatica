import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensAppComponent } from './itens-app.component';

describe('ItensAppComponent', () => {
  let component: ItensAppComponent;
  let fixture: ComponentFixture<ItensAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItensAppComponent]
    });
    fixture = TestBed.createComponent(ItensAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
