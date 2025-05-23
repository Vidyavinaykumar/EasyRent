import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHouseComponent } from './edit-house.component';

describe('EditHouseComponent', () => {
  let component: EditHouseComponent;
  let fixture: ComponentFixture<EditHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
