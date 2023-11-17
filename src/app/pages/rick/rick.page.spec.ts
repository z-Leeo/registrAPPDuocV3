import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickPage } from './rick.page';

describe('RickPage', () => {
  let component: RickPage;
  let fixture: ComponentFixture<RickPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
