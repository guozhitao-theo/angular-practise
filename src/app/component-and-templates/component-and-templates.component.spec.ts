import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAndTemplatesComponent } from './component-and-templates.component';

describe('ComponentAndTemplatesComponent', () => {
  let component: ComponentAndTemplatesComponent;
  let fixture: ComponentFixture<ComponentAndTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentAndTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAndTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
