import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaUiComponent } from './nova-ui.component';

describe('NovaUiComponent', () => {
  let component: NovaUiComponent;
  let fixture: ComponentFixture<NovaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
