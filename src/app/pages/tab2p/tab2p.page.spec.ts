import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab2pPage } from './tab2p.page';

describe('Tab2pPage', () => {
  let component: Tab2pPage;
  let fixture: ComponentFixture<Tab2pPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab2pPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
