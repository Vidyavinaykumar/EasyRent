import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseHousesComponent } from './browse-houses.component';

describe('BrowseHousesComponent', () => {
  let component: BrowseHousesComponent;
  let fixture: ComponentFixture<BrowseHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseHousesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
