import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab3pPage } from './tab3p.page';

describe('Tab3pPage', () => {
  let component: Tab3pPage;
  let fixture: ComponentFixture<Tab3pPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab3pPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
