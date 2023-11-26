import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab1pPage } from './tab1p.page';

describe('Tab1pPage', () => {
  let component: Tab1pPage;
  let fixture: ComponentFixture<Tab1pPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab1pPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
